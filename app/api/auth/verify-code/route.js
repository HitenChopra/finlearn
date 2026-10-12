import { NextResponse } from "next/server";
import db from "@/lib/db";
import { createSessionToken, hashCode, normalizeEmail } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const mode = body.mode === "signin" ? "signin" : "signup";
    const email = normalizeEmail(body.email);
    const code = String(body.code || "").trim();

    const pending = db.prepare(`SELECT * FROM pending_auth_codes WHERE email = ? AND mode = ? ORDER BY id DESC LIMIT 1`).get(email, mode);
    if (!pending || pending.expires_at < Date.now()) return NextResponse.json({ error: "Verification code expired. Request a new one." }, { status: 400 });
    if (pending.attempts >= 5) return NextResponse.json({ error: "Too many incorrect attempts. Request a new code." }, { status: 429 });
    if (pending.code_hash !== hashCode(code)) {
      db.prepare("UPDATE pending_auth_codes SET attempts = attempts + 1 WHERE id = ?").run(pending.id);
      return NextResponse.json({ error: "Incorrect verification code." }, { status: 400 });
    }

    const createOrFind = db.transaction(() => {
      if (mode === "signup") {
        db.prepare(`INSERT INTO users(full_name, email, username, email_verified, created_at) VALUES (?, ?, ?, 1, ?)`)
          .run(pending.full_name, pending.email, pending.username, Date.now());
      }
      const user = db.prepare("SELECT id, full_name, email, username FROM users WHERE email = ?").get(email);
      if (!user) throw new Error("User not found after verification.");
      db.prepare("DELETE FROM pending_auth_codes WHERE email = ?").run(email);
      return user;
    });

    const user = createOrFind();
    const token = createSessionToken();
    db.prepare("INSERT INTO sessions(token, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)")
      .run(token, user.id, Date.now() + 7 * 24 * 60 * 60 * 1000, Date.now());

    const response = NextResponse.json({ ok: true, user: { id: user.id, fullName: user.full_name, email: user.email, username: user.username } });
    response.cookies.set("finlearn_session", token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 7 * 24 * 60 * 60 });
    return response;
  } catch (error) {
    console.error(error);
    const message = String(error?.message || "");
    if (message.includes("users.username")) return NextResponse.json({ error: "That username was just taken. Choose another." }, { status: 409 });
    if (message.includes("users.email")) return NextResponse.json({ error: "An account already exists for this email." }, { status: 409 });
    return NextResponse.json({ error: "Could not verify the code." }, { status: 500 });
  }
}
