"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import lessons from "@/data/lessons.json";
import ProgressBar from "@/components/ProgressBar";
import { getProgress } from "@/lib/progress";

export default function DashboardPage() {
  const [progress, setProgress] = useState({
    completed: [],
    xp: 0,
    streak: 1
  });

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const total = lessons.length;
  const completedCount = progress.completed.length;
  const percent = total === 0 ? 0 : Math.round((completedCount / total) * 100);
  const nextLesson = lessons.find((lesson) => !progress.completed.includes(lesson.id)) || lessons[0];

  return (
    <section className="page-shell stack-lg">
      <div className="section-heading">
        <div>
          <span className="eyebrow">DASHBOARD</span>
          <h1>Keep the streak alive 🔥</h1>
          <p className="muted">Your progress is currently stored in this browser.</p>
        </div>
        <div className="streak-badge">{progress.streak} day streak</div>
      </div>

      <div className="dashboard-grid">
        <article className="panel">
          <span className="panel-label">Overall progress</span>
          <div className="big-number">{percent}%</div>
          <ProgressBar value={percent} />
          <p className="muted">{completedCount} of {total} lessons completed</p>
        </article>

        <article className="panel">
          <span className="panel-label">XP earned</span>
          <div className="big-number">{progress.xp}</div>
          <p className="muted">Earn XP by passing lesson quizzes.</p>
        </article>

        <article className="panel">
          <span className="panel-label">Current track</span>
          <div className="big-number small">Money Basics</div>
          <p className="muted">Income, budgeting, saving, banking and inflation.</p>
        </article>
      </div>

      <article className="continue-card">
        <div>
          <span className="eyebrow">UP NEXT</span>
          <h2>{nextLesson.title}</h2>
          <p>{nextLesson.summary}</p>
        </div>
        <Link href={`/learn/${nextLesson.id}`} className="button primary">
          Continue
        </Link>
      </article>
    </section>
  );
}
