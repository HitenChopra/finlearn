import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";

export default function LessonCard({ lesson, index, completed, progressValue = 0 }) {
  return (
    <article className={`lesson-card ${completed ? "lesson-complete" : ""}`}>
      <div className="lesson-index">{completed ? "✓" : index + 1}</div>
      <div className="lesson-card-copy">
        <div className="lesson-meta"><span>{lesson.duration}</span><span>+{lesson.xp} XP</span></div>
        <h2>{lesson.title}</h2>
        <p>{lesson.summary}</p>
        <div className="submodule-progress">
          <div><span>Progress</span><strong>{progressValue}%</strong></div>
          <ProgressBar value={progressValue} />
        </div>
      </div>
      <Link href={`/learn/${encodeURIComponent(String(lesson.id))}`} className="lesson-open">
        {completed ? "Review" : progressValue > 0 ? "Continue" : "Start"} →
      </Link>
    </article>
  );
}
