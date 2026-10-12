import { NextResponse } from "next/server";
import db from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request) {
  const token = request.cookies.get("finlearn_session")?.value;
  if (token) db.prepare("DELETE FROM sessions WHERE token = ?").run(token);
  const response = NextResponse.json({ ok: true });
  response.cookies.set("finlearn_session", "", { httpOnly: true, path: "/", maxAge: 0 });
  return response;
}
