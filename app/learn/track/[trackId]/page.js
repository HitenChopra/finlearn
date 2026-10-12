"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import tracks from "@/data/tracks.json";
import lessons from "@/data/lessons.json";
import LessonCard from "@/components/LessonCard";
import ProgressBar from "@/components/ProgressBar";
import { getLessonPercent, getProgress } from "@/lib/progress";

export default function TrackPage() {
  const params = useParams();
  const trackId = Array.isArray(params?.trackId) ? params.trackId[0] : params?.trackId;
  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState({ completed: [], lessonProgress: {} });
  useEffect(() => setProgress(getProgress()), []);

  const track = tracks.find((item) => item.id === trackId);
  const trackLessons = useMemo(() => lessons.filter((lesson) => lesson.trackId === trackId), [trackId]);
  const filteredLessons = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return trackLessons;
    return trackLessons.filter((lesson) => [lesson.title, lesson.summary, ...(lesson.keyPoints || [])].join(" ").toLowerCase().includes(q));
  }, [query, trackLessons]);

  if (!track) {
    return <section className="page-shell"><h1>Track not found</h1><Link href="/learn" className="button secondary">← Back to Explore</Link></section>;
  }

  const completedCount = trackLessons.filter((lesson) => progress.completed.includes(lesson.id)).length;
  const trackPct = Math.round((completedCount / trackLessons.length) * 100);

  return (
    <section className="page-shell track-detail-page">
      <div className="track-detail-top">
        <Link href="/learn" className="back-link">← Explore tracks</Link>
        <label className="lesson-search compact-search">
          <span className="search-icon">⌕</span>
          <input type="search" placeholder={`Search ${track.title}...`} value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
      </div>

      <div className="track-detail-hero">
        <div className="track-detail-icon">{track.icon}</div>
        <div className="track-hero-copy">
          <span className="eyebrow">TRACK {track.number} · {track.accent.toUpperCase()}</span>
          <h1>{track.title}</h1>
          <p>{track.description}</p>
          <div className="module-progress"><div><span>{completedCount}/{trackLessons.length} sub-modules complete</span><strong>{trackPct}%</strong></div><ProgressBar value={trackPct} /></div>
        </div>
      </div>

      <div className="track-lessons-heading"><h2>Sub-modules</h2><span>{filteredLessons.length} shown</span></div>
      {filteredLessons.length ? (
        <div className="learning-path">
          {filteredLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              index={trackLessons.findIndex((item) => item.id === lesson.id)}
              completed={progress.completed.includes(lesson.id)}
              progressValue={getLessonPercent(lesson.id, lesson.quizzes.length)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-search"><span>🔎</span><h3>No matching lesson</h3><p>Try another keyword.</p></div>
      )}
    </section>
  );
}
