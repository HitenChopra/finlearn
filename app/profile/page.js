"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import lessons from "@/data/lessons.json";
import ProgressBar from "@/components/ProgressBar";
import { getProgress, resetProgress } from "@/lib/progress";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState({ completed: [], xp: 0, streak: 1 });

  useEffect(() => {
    setProgress(getProgress());
    fetch("/api/auth/me").then(async (res) => {
      if (!res.ok) {
        router.replace("/");
        return;
      }
      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("finlearn-active-user-id", String(data.user.id));
    });
  }, [router]);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    localStorage.removeItem("finlearn-active-user-id");
    router.push("/");
    router.refresh();
  }

  function reset() {
    resetProgress();
    setProgress(getProgress());
  }

  const percent = Math.round((progress.completed.length / lessons.length) * 100);
  const initials = user?.fullName?.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase() || "FL";

  return (
    <section className="page-shell stack-lg">
      <div className="profile-hero">
        <div className="avatar">{initials}</div>
        <div>
          <span className="eyebrow">LEARNER PROFILE</span>
          <h1>{user?.fullName || "Loading…"}</h1>
          <p className="profile-username">@{user?.username || "..."}</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <article className="panel"><span className="panel-label">XP</span><div className="big-number">{progress.xp}</div></article>
        <article className="panel"><span className="panel-label">Streak</span><div className="big-number">{progress.streak} 🔥</div></article>
        <article className="panel"><span className="panel-label">Sub-modules</span><div className="big-number">{progress.completed.length}/{lessons.length}</div></article>
      </div>

      <article className="panel">
        <div className="panel-title-row"><h2>Overall mastery</h2><strong>{percent}%</strong></div>
        <ProgressBar value={percent} />
        <p className="muted profile-email">Verified email: {user?.email || "..."}</p>
      </article>

      <article className="panel">
        <h2>Badges</h2>
        <div className="badge-grid">
          <div className={progress.completed.length >= 1 ? "badge earned" : "badge"}><span>🌱</span><strong>First Step</strong><small>Complete 1 sub-module</small></div>
          <div className={progress.completed.length >= 10 ? "badge earned" : "badge"}><span>🧠</span><strong>Track Builder</strong><small>Complete 10 sub-modules</small></div>
          <div className={progress.completed.length === lessons.length ? "badge earned" : "badge"}><span>🏆</span><strong>FinLearn Master</strong><small>Complete all 60</small></div>
        </div>
      </article>

      <div className="profile-actions">
        <button className="button secondary" onClick={reset}>Reset progress</button>
        <button className="button danger" onClick={logout}>Log out</button>
      </div>
    </section>
  );
}
