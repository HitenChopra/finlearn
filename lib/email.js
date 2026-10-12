import nodemailer from "nodemailer";

function hasSMTP() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendVerificationCode(email, code) {
  if (!hasSMTP()) {
    if (process.env.NODE_ENV !== "production") {
      console.log(`[FinLearn DEV] Verification code for ${email}: ${code}`);
      return { delivered: false, devMode: true };
    }
    throw new Error("SMTP is not configured.");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject: "Your FinLearn verification code",
    text: `Your FinLearn verification code is ${code}. It expires in 10 minutes.`,
    html: `<div style="font-family:Arial,sans-serif;max-width:520px;margin:auto;padding:28px"><h2 style="color:#176b45">FinLearn verification</h2><p>Use this code to verify your email:</p><div style="font-size:34px;font-weight:800;letter-spacing:8px;margin:24px 0">${code}</div><p>This code expires in 10 minutes.</p></div>`
  });

  return { delivered: true, devMode: false };
}
