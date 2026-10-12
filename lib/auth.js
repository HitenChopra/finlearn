import crypto from "crypto";

export const normalizeEmail = (email = "") => email.trim().toLowerCase();
export const normalizeUsername = (username = "") => username.trim().toLowerCase();
export const isEmailFormatValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isUsernameValid = (username) => /^[a-z0-9_]{3,20}$/.test(username);
export const createCode = () => String(Math.floor(100000 + Math.random() * 900000));
export const createSessionToken = () => crypto.randomBytes(32).toString("hex");
export function hashCode(code) {
  const salt = process.env.AUTH_CODE_SALT || "finlearn-dev-salt";
  return crypto.createHash("sha256").update(`${code}:${salt}`).digest("hex");
}
