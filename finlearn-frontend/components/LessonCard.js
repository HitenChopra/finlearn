import Link from "next/link";

export default function LessonCard({ lesson, index, completed }) {
  return (
    <article className={`lesson-card ${completed ? "lesson-complete" : ""}`}>
      <div className="lesson-index">
        {completed ? "✓" : index + 1}
      </div>

      <div className="lesson-card-copy">
        <div className="lesson-meta">
          <span>{lesson.duration}</span>
          <span>+{lesson.xp} XP</span>
        </div>

        <h2>{lesson.title}</h2>
        <p>{lesson.summary}</p>
      </div>

      <Link
        href={`/learn/${encodeURIComponent(String(lesson.id))}`}
        className="lesson-open"
      >
        {completed ? "Review" : "Start"} →
      </Link>
    </article>
  );
}
