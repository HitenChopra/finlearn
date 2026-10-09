import LessonCard from "@/components/LessonCard";

export default function TrackSection({ track, lessons, completed }) {
  const completedInTrack = lessons.filter((lesson) =>
    completed.includes(lesson.id)
  ).length;

  return (
    <section className="track-section">
      <div className="track-section-header">
        <div className="track-title-group">
          <div className="track-icon">{track.icon}</div>
          <div>
            <span className="eyebrow">
              TRACK {track.number} · {track.accent.toUpperCase()}
            </span>
            <h2>{track.title}</h2>
            <p>{track.description}</p>
          </div>
        </div>

        <div className="track-count">
          <strong>{completedInTrack}/{lessons.length}</strong>
          <span>complete</span>
        </div>
      </div>

      <div className="learning-path">
        {lessons.map((lesson, index) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            index={index}
            completed={completed.includes(lesson.id)}
          />
        ))}
      </div>
    </section>
  );
}
