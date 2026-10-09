"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import QuizCard from "@/components/QuizCard";
import ProgressBar from "@/components/ProgressBar";
import { completeLesson, getProgress } from "@/lib/progress";

export default function LessonExperience({ lesson, nextLesson }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const progress = getProgress();
    setCompleted(progress.completed.includes(lesson.id));
  }, [lesson.id]);

  function handlePassed() {
    completeLesson(lesson.id, lesson.xp);
    setCompleted(true);
  }

  return (
    <section className="page-shell lesson-layout">
      <div className="lesson-topline">
        <Link href="/learn" className="back-link">← Back to track</Link>
        <span>{lesson.duration}</span>
      </div>

      <div className="lesson-progress-block">
        <span>Lesson progress</span>
        <ProgressBar value={completed ? 100 : 70} />
      </div>

      <article className="lesson-article">
        <span className="eyebrow">{lesson.track.toUpperCase()}</span>
        <h1>{lesson.title}</h1>
        <p className="lead">{lesson.summary}</p>

        <div className="content-section">
          <span className="content-icon">📘</span>
          <div>
            <h2>Concept</h2>
            <p>{lesson.concept}</p>
          </div>
        </div>

        <div className="content-section example">
          <span className="content-icon">💡</span>
          <div>
            <h2>Real-world example</h2>
            <p>{lesson.example}</p>
          </div>
        </div>

        <div className="key-points">
          <h2>Remember these</h2>
          <div className="key-point-grid">
            {lesson.keyPoints.map((point) => (
              <div className="key-point" key={point}>{point}</div>
            ))}
          </div>
        </div>

        <div className="source-note">
          <strong>Demo source label:</strong> {lesson.sourceLabel}
        </div>

        <div className="tutor-nudge">
          <div>
            <span className="eyebrow">STUCK?</span>
            <h3>Ask the AI Tutor interface</h3>
            <p>Try “Explain this more simply” or “Give me another example”.</p>
          </div>
          <Link className="button secondary" href="/tutor">Ask tutor</Link>
        </div>

        <QuizCard quiz={lesson.quiz} onPassed={handlePassed} />

        {completed && (
          <div className="completion-card">
            <div>
              <span className="eyebrow">LESSON COMPLETE</span>
              <h2>Nice work. You earned {lesson.xp} XP.</h2>
            </div>

            {nextLesson ? (
              <Link href={`/learn/${nextLesson.id}`} className="button primary">
                Next lesson →
              </Link>
            ) : (
              <Link href="/profile" className="button primary">
                View profile →
              </Link>
            )}
          </div>
        )}
      </article>
    </section>
  );
}
