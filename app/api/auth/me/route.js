import { NextResponse } from "next/server";
import db from "@/lib/db";

export const runtime = "nodejs";

export async function GET(request) {
  const token = request.cookies.get("finlearn_session")?.value;
  if (!token) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const row = db.prepare(`SELECT u.id, u.full_name, u.email, u.username, s.expires_at FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = ?`).get(token);
  if (!row || row.expires_at < Date.now()) {
    if (row) db.prepare("DELETE FROM sessions WHERE token = ?").run(token);
    return NextResponse.json({ error: "Session expired." }, { status: 401 });
  }
  return NextResponse.json({ user: { id: row.id, fullName: row.full_name, email: row.email, username: row.username } });
}
