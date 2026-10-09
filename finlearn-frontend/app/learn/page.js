"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import tracks from "@/data/tracks.json";
import lessons from "@/data/lessons.json";

export default function LearnExplorePage() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];

    return lessons.filter((lesson) => {
      const searchText = [
        lesson.title,
        lesson.summary,
        lesson.track,
        ...(lesson.keyPoints || [])
      ]
        .join(" ")
        .toLowerCase();

      return searchText.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  return (
    <section className="page-shell explore-page">
      <div className="explore-topbar">
        <div>
          <span className="eyebrow">FINLEARN</span>
          <h1>Explore</h1>
          <p className="muted">
            Pick a track or search for a lesson directly.
          </p>
        </div>

        <label className="lesson-search" aria-label="Search lessons">
          <span className="search-icon">⌕</span>
          <input
            type="search"
            placeholder="Search lessons..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>

      {normalizedQuery ? (
        <div className="search-results-section">
          <div className="results-heading">
            <h2>Search results</h2>
            <span>{searchResults.length} found</span>
          </div>

          {searchResults.length > 0 ? (
            <div className="search-result-grid">
              {searchResults.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/learn/${lesson.id}`}
                  className="search-result-card"
                >
                  <div className="result-icon">
                    {getTrackIcon(lesson.trackId)}
                  </div>

                  <div>
                    <span className="result-track">{lesson.track}</span>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.summary}</p>
                  </div>

                  <span className="result-arrow">→</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty-search">
              <span>🔎</span>
              <h3>No lesson found</h3>
              <p>Try inflation, UPI, credit, insurance or FOMO.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="track-grid">
          {tracks.map((track) => {
            const count = lessons.filter(
              (lesson) => lesson.trackId === track.id
            ).length;

            return (
              <Link
                key={track.id}
                href={`/learn/track/${track.id}`}
                className="track-tile"
              >
                <div className="track-tile-icon">{track.icon}</div>

                <div className="track-tile-copy">
                  <h2>{track.title}</h2>
                  <p>{track.description}</p>
                  <span>{count} lessons</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}

function getTrackIcon(trackId) {
  const track = tracks.find((item) => item.id === trackId);
  return track?.icon || "📘";
}
