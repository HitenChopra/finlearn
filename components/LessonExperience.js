"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import QuizSequence from "@/components/QuizSequence";
import { completeLesson, getProgress } from "@/lib/progress";

function Paragraphs({ text }) {
  return String(text || "").split(/\n\n+/).map((paragraph, index) => <p key={index}>{paragraph}</p>);
}

export default function LessonExperience({ lesson, nextLesson }) {
  const [completed, setCompleted] = useState(false);
  useEffect(() => setCompleted(getProgress().completed.includes(lesson.id)), [lesson.id]);

  function finish() {
    completeLesson(lesson.id, lesson.xp, lesson.quizzes.length);
    setCompleted(true);
  }

  return (
    <section className="page-shell lesson-layout">
      <article className="lesson-article">
        <h1 className="lesson-main-title">{lesson.title}</h1>

        <div className="content-section concept-card">
          <span className="content-icon">📘</span>
          <div className="content-copy">
            <h2>Concept</h2>
            <p className="concept-lead">{lesson.summary}</p>
            <Paragraphs text={lesson.concept} />
          </div>
        </div>

        <div className="content-section example">
          <span className="content-icon">💡</span>
          <div className="content-copy">
            <h2>Real-world example</h2>
            <Paragraphs text={lesson.example} />
            <div className="example-explanation">
              <h3>Explanation</h3>
              <ul>{lesson.exampleExplanation.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </div>
        </div>

        <div className="key-points">
          <h2>Remember these</h2>
          <div className="key-point-grid">{lesson.keyPoints.map((point) => <div className="key-point" key={point}>{point}</div>)}</div>
        </div>

        <div className="source-note"><strong>Learning source category:</strong> {lesson.sourceLabel}</div>

        <div className="tutor-nudge">
          <div><span className="eyebrow">STUCK?</span><h3>Ask the AI Tutor interface</h3><p>Try “Explain this more simply” or “Give me another example”.</p></div>
          <Link className="button secondary" href="/tutor">Ask tutor</Link>
        </div>

        <QuizSequence lessonId={lesson.id} quizzes={lesson.quizzes} onFinished={finish} />

        {completed && (
          <div className="completion-card">
            <div><span className="eyebrow">SUB-MODULE COMPLETE</span><h2>You earned {lesson.xp} XP.</h2></div>
            {nextLesson ? <Link href={`/learn/${nextLesson.id}`} className="button primary">Next sub-module →</Link> : <Link href={`/learn/track/${lesson.trackId}`} className="button primary">Back to track →</Link>}
          </div>
        )}

        <Link href={`/learn/track/${lesson.trackId}`} className="back-link lesson-bottom-back">← Back to {lesson.track}</Link>
      </article>
    </section>
  );
}
