"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import tracks from "@/data/tracks.json";
import lessons from "@/data/lessons.json";
import ProgressBar from "@/components/ProgressBar";
import { getProgress } from "@/lib/progress";

export default function LearnExplorePage() {
  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState({ completed: [] });
  useEffect(() => setProgress(getProgress()), []);

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!q) return [];
    return lessons.filter((lesson) => [lesson.title, lesson.summary, lesson.track, ...(lesson.keyPoints || [])].join(" ").toLowerCase().includes(q));
  }, [q]);

  return (
    <section className="page-shell explore-page">
      <div className="explore-topbar">
        <div>
          <span className="eyebrow">FINLEARN</span>
          <h1>Explore</h1>
          <p className="muted">Pick a track or search for a lesson directly.</p>
        </div>
        <label className="lesson-search">
          <span className="search-icon">⌕</span>
          <input type="search" placeholder="Search lessons..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
      </div>

      {q ? (
        <div className="search-results-section">
          <div className="results-heading"><h2>Search results</h2><span>{results.length} found</span></div>
          {results.length ? (
            <div className="search-result-grid">
              {results.map((lesson) => (
                <Link key={lesson.id} href={`/learn/${lesson.id}`} className="search-result-card">
                  <div className="result-icon">{tracks.find((t) => t.id === lesson.trackId)?.icon || "📘"}</div>
                  <div><span className="result-track">{lesson.track}</span><h3>{lesson.title}</h3><p>{lesson.summary}</p></div>
                  <span className="result-arrow">→</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty-search"><span>🔎</span><h3>No lesson found</h3><p>Try inflation, UPI, debt, insurance or FOMO.</p></div>
          )}
        </div>
      ) : (
        <div className="track-grid">
          {tracks.map((track) => {
            const trackLessons = lessons.filter((lesson) => lesson.trackId === track.id);
            const done = trackLessons.filter((lesson) => progress.completed?.includes(lesson.id)).length;
            const pct = Math.round((done / trackLessons.length) * 100);
            return (
              <Link key={track.id} href={`/learn/track/${track.id}`} className="track-tile">
                <div className="track-tile-icon">{track.icon}</div>
                <div className="track-tile-copy">
                  <h2>{track.title}</h2>
                  <p>{track.description}</p>
                  <div className="track-card-progress"><div><span>{done}/{trackLessons.length} complete</span><strong>{pct}%</strong></div><ProgressBar value={pct} /></div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
