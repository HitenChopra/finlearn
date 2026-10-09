"use client";

import { useEffect, useState } from "react";
import lessons from "@/data/lessons.json";
import { getProgress, resetProgress } from "@/lib/progress";
import ProgressBar from "@/components/ProgressBar";

export default function ProfilePage() {
  const [progress, setProgress] = useState({
    completed: [],
    xp: 0,
    streak: 1
  });

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  function handleReset() {
    resetProgress();
    setProgress(getProgress());
  }

  const percent = Math.round((progress.completed.length / lessons.length) * 100);

  return (
    <section className="page-shell stack-lg">
      <div className="profile-hero">
        <div className="avatar">FL</div>
        <div>
          <span className="eyebrow">LEARNER PROFILE</span>
          <h1>Finance Explorer</h1>
          <p className="muted">Beginner track • Money Basics</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <article className="panel">
          <span className="panel-label">XP</span>
          <div className="big-number">{progress.xp}</div>
        </article>
        <article className="panel">
          <span className="panel-label">Streak</span>
          <div className="big-number">{progress.streak} 🔥</div>
        </article>
        <article className="panel">
          <span className="panel-label">Lessons</span>
          <div className="big-number">{progress.completed.length}/{lessons.length}</div>
        </article>
      </div>

      <article className="panel">
        <div className="panel-title-row">
          <h2>Track mastery</h2>
          <strong>{percent}%</strong>
        </div>
        <ProgressBar value={percent} />
      </article>

      <article className="panel">
        <h2>Badges</h2>
        <div className="badge-grid">
          <div className={progress.completed.length >= 1 ? "badge earned" : "badge"}>
            <span>🌱</span>
            <strong>First Step</strong>
            <small>Complete 1 lesson</small>
          </div>
          <div className={progress.completed.length >= 3 ? "badge earned" : "badge"}>
            <span>🧠</span>
            <strong>Money Mind</strong>
            <small>Complete 3 lessons</small>
          </div>
          <div className={progress.completed.length === lessons.length ? "badge earned" : "badge"}>
            <span>🏆</span>
            <strong>Basics Master</strong>
            <small>Complete the track</small>
          </div>
        </div>
      </article>

      <button className="button danger" onClick={handleReset}>
        Reset demo progress
      </button>
    </section>
  );
}
