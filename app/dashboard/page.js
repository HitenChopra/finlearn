"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import lessons from "@/data/lessons.json";
import tracks from "@/data/tracks.json";
import ProgressBar from "@/components/ProgressBar";
import { getProgress, getLessonPercent } from "@/lib/progress";

export default function DashboardPage() {
  const [progress, setProgress] = useState({ completed: [], xp: 0, streak: 1, lessonProgress: {} });
  useEffect(() => setProgress(getProgress()), []);

  const percent = Math.round((progress.completed.length / lessons.length) * 100);
  const next = lessons.find((lesson) => !progress.completed.includes(lesson.id)) || lessons[0];

  return (
    <section className="page-shell stack-lg">
      <div className="section-heading">
        <div>
          <span className="eyebrow">DASHBOARD</span>
          <h1>Keep building momentum 🔥</h1>
          <p className="muted">Progress is stored per signed-in learner in this browser.</p>
        </div>
        <div className="streak-badge">{progress.streak} day streak</div>
      </div>

      <div className="dashboard-grid">
        <article className="panel">
          <span className="panel-label">Overall progress</span>
          <div className="big-number">{percent}%</div>
          <ProgressBar value={percent} />
          <p className="muted">{progress.completed.length} of {lessons.length} sub-modules completed</p>
        </article>
        <article className="panel">
          <span className="panel-label">XP earned</span>
          <div className="big-number">{progress.xp}</div>
          <p className="muted">XP is awarded when a lesson’s final quiz is finished.</p>
        </article>
        <article className="panel">
          <span className="panel-label">Learning tracks</span>
          <div className="big-number small">{tracks.length}</div>
          <p className="muted">From money basics to behavioural finance.</p>
        </article>
      </div>

      <article className="continue-card">
        <div>
          <span className="eyebrow">UP NEXT</span>
          <h2>{next.title}</h2>
          <p>{next.summary}</p>
          <div className="dashboard-next-progress"><ProgressBar value={getLessonPercent(next.id, next.quizzes.length)} /></div>
        </div>
        <Link href={`/learn/${next.id}`} className="button primary">Continue</Link>
      </article>
    </section>
  );
}
