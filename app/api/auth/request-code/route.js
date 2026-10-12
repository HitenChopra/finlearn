import { NextResponse } from "next/server";
import { resolveMx } from "dns/promises";
import db from "@/lib/db";
import { createCode, hashCode, isEmailFormatValid, isUsernameValid, normalizeEmail, normalizeUsername } from "@/lib/auth";
import { sendVerificationCode } from "@/lib/email";

export const runtime = "nodejs";

async function domainAcceptsMail(email) {
  if (String(process.env.SKIP_MX_CHECK).toLowerCase() === "true") return true;
  const domain = email.split("@")[1];
  try {
    const records = await resolveMx(domain);
    return Array.isArray(records) && records.length > 0;
  } catch {
    return false;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const mode = body.mode === "signin" ? "signin" : "signup";
    const email = normalizeEmail(body.email);

    if (!isEmailFormatValid(email)) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }
    if (!(await domainAcceptsMail(email))) {
      return NextResponse.json({ error: "That email domain does not appear able to receive mail." }, { status: 400 });
    }

    let fullName = null;
    let username = null;

    if (mode === "signup") {
      fullName = String(body.fullName || "").trim();
      username = normalizeUsername(body.username);
      if (fullName.length < 2) return NextResponse.json({ error: "Enter your full name." }, { status: 400 });
      if (!isUsernameValid(username)) return NextResponse.json({ error: "Username must be 3–20 characters using letters, numbers or _." }, { status: 400 });
      if (db.prepare("SELECT id FROM users WHERE email = ?").get(email)) return NextResponse.json({ error: "An account already exists with this email. Use Sign in." }, { status: 409 });
      if (db.prepare("SELECT id FROM users WHERE username = ?").get(username)) return NextResponse.json({ error: "That username is already taken." }, { status: 409 });
    } else {
      if (!db.prepare("SELECT id FROM users WHERE email = ?").get(email)) return NextResponse.json({ error: "No verified FinLearn account was found for this email." }, { status: 404 });
    }

    const code = createCode();
    const now = Date.now();
    db.prepare("DELETE FROM pending_auth_codes WHERE email = ? AND mode = ?").run(email, mode);
    db.prepare(`INSERT INTO pending_auth_codes(mode, full_name, email, username, code_hash, expires_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)`)
      .run(mode, fullName, email, username, hashCode(code), now + 10 * 60 * 1000, now);

    const mail = await sendVerificationCode(email, code);
    const showDevCode = process.env.NODE_ENV !== "production" && (String(process.env.DEV_SHOW_EMAIL_CODE).toLowerCase() === "true" || mail.devMode);
    return NextResponse.json({ ok: true, message: mail.delivered ? "Verification code sent." : "Development verification code generated.", ...(showDevCode ? { devCode: code } : {}) });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Could not send the verification code." }, { status: 500 });
  }
}
