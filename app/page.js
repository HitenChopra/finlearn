"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState("signup");
  const [step, setStep] = useState("form");
  const [form, setForm] = useState({ fullName: "", email: "", username: "", code: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [devCode, setDevCode] = useState("");

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => { if (res.ok) router.replace("/home"); })
      .catch(() => {});
  }, [router]);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function requestCode(event) {
    event.preventDefault();
    setLoading(true); setError(""); setMessage(""); setDevCode("");
    try {
      const res = await fetch("/api/auth/request-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, fullName: form.fullName, email: form.email, username: form.username })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not send code.");
      setMessage(data.message || "Verification code sent.");
      setDevCode(data.devCode || "");
      setStep("verify");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function verify(event) {
    event.preventDefault();
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, email: form.email, code: form.code })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Verification failed.");
      localStorage.setItem("finlearn-active-user-id", String(data.user.id));
      router.push("/home");
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function switchMode(next) {
    setMode(next);
    setStep("form");
    setError("");
    setMessage("");
    setDevCode("");
    setForm((f) => ({ ...f, code: "" }));
  }

  return (
    <section className="auth-layout">
      <div className="auth-visual">
        <div className="auth-brand"><span>₹</span> FinLearn</div>
        <div className="auth-visual-copy">
          <span className="auth-kicker">MONEY, MADE LEARNABLE.</span>
          <h1>Build financial judgement, one short lesson at a time.</h1>
          <p>Structured modules, progress tracking, practical examples and an AI tutor interface in one learning system.</p>
        </div>
        <div className="auth-visual-cards">
          <div><strong>6</strong><span>learning tracks</span></div>
          <div><strong>60</strong><span>sub-modules</span></div>
          <div><strong>180+</strong><span>quiz questions</span></div>
        </div>
      </div>

      <div className="auth-panel">
        <div className="auth-box">
          <div className="auth-tabs">
            <button className={mode === "signup" ? "active" : ""} onClick={() => switchMode("signup")}>Create account</button>
            <button className={mode === "signin" ? "active" : ""} onClick={() => switchMode("signin")}>Sign in</button>
          </div>

          {step === "form" ? (
            <form className="auth-form" onSubmit={requestCode}>
              <div>
                <span className="eyebrow">WELCOME TO FINLEARN</span>
                <h2>{mode === "signup" ? "Create your learner profile" : "Welcome back"}</h2>
                <p className="muted">Email ownership is verified with a 6-digit code before access.</p>
              </div>

              {mode === "signup" && (
                <>
                  <label>
                    Full name
                    <input required value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Full name" />
                  </label>
                  <label>
                    Unique username
                    <div className="username-input">
                      <span>@</span>
                      <input required value={form.username} onChange={(e) => update("username", e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))} placeholder="your_username" />
                    </div>
                    <small>3–20 characters: letters, numbers and underscore.</small>
                  </label>
                </>
              )}

              <label>
                Email
                <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
              </label>

              {error && <div className="auth-alert error">{error}</div>}
              <button className="button primary auth-submit" disabled={loading}>{loading ? "Checking…" : "Verify email →"}</button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={verify}>
              <div>
                <span className="eyebrow">EMAIL VERIFICATION</span>
                <h2>Enter your 6-digit code</h2>
                <p className="muted">Sent to <strong>{form.email}</strong>. The code expires in 10 minutes.</p>
              </div>
              <label>
                Verification code
                <input className="code-input" inputMode="numeric" maxLength={6} required value={form.code} onChange={(e) => update("code", e.target.value.replace(/\D/g, ""))} placeholder="000000" />
              </label>
              {message && <div className="auth-alert success">{message}</div>}
              {devCode && <div className="auth-alert dev"><strong>Development code:</strong> {devCode}<br/><small>Configure SMTP in .env.local for real email delivery.</small></div>}
              {error && <div className="auth-alert error">{error}</div>}
              <button className="button primary auth-submit" disabled={loading || form.code.length !== 6}>{loading ? "Verifying…" : "Finish verification"}</button>
              <button type="button" className="text-button" onClick={() => { setStep("form"); setForm((f) => ({ ...f, code: "" })); }}>← Change details / resend</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
