"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import tracks from "@/data/tracks.json";
import lessons from "@/data/lessons.json";
import LessonCard from "@/components/LessonCard";

export default function TrackPage() {
  const params = useParams();
  const trackId = params?.trackId;
  const [query, setQuery] = useState("");

  const track = tracks.find((item) => item.id === trackId);

  const trackLessons = useMemo(() => {
    return lessons.filter((lesson) => lesson.trackId === trackId);
  }, [trackId]);

  const filteredLessons = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return trackLessons;

    return trackLessons.filter((lesson) => {
      const haystack = [
        lesson.title,
        lesson.summary,
        ...(lesson.keyPoints || [])
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [query, trackLessons]);

  if (!track) {
    return (
      <section className="page-shell">
        <h1>Track not found</h1>
        <Link href="/learn" className="button secondary">
          ← Back to Explore
        </Link>
      </section>
    );
  }

  return (
    <section className="page-shell track-detail-page">
      <div className="track-detail-top">
        <Link href="/learn" className="back-link">
          ← Explore tracks
        </Link>

        <label className="lesson-search compact-search">
          <span className="search-icon">⌕</span>
          <input
            type="search"
            placeholder={`Search ${track.title}...`}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>

      <div className="track-detail-hero">
        <div className="track-detail-icon">{track.icon}</div>

        <div>
          <span className="eyebrow">
            TRACK {track.number} · {track.accent.toUpperCase()}
          </span>
          <h1>{track.title}</h1>
          <p>{track.description}</p>
          <span className="track-detail-count">
            {trackLessons.length} lessons
          </span>
        </div>
      </div>

      <div className="track-lessons-heading">
        <h2>Lessons</h2>
        <span>{filteredLessons.length} shown</span>
      </div>

      {filteredLessons.length > 0 ? (
        <div className="learning-path">
          {filteredLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              index={trackLessons.findIndex((item) => item.id === lesson.id)}
              completed={false}
            />
          ))}
        </div>
      ) : (
        <div className="empty-search">
          <span>🔎</span>
          <h3>No matching lesson in this track</h3>
          <p>Try a different keyword.</p>
        </div>
      )}
    </section>
  );
}
