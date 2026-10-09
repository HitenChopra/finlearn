"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import lessons from "@/data/lessons.json";
import LessonExperience from "@/components/LessonExperience";

export default function LessonPage() {
  const params = useParams();

  const lessonId = Array.isArray(params?.lessonId)
    ? params.lessonId[0]
    : params?.lessonId;

  const lesson = lessons.find(
    (item) => String(item.id) === String(lessonId)
  );

  if (!lesson) {
    return (
      <section className="page-shell">
        <span className="eyebrow">FINLEARN</span>
        <h1>Lesson not found</h1>
        <p className="muted">
          Requested lesson ID: <strong>{lessonId || "none"}</strong>
        </p>

        <div style={{ marginTop: "18px" }}>
          <Link href="/learn" className="button secondary">
            ← Back to Explore
          </Link>
        </div>
      </section>
    );
  }

  const currentIndex = lessons.findIndex(
    (item) => String(item.id) === String(lesson.id)
  );

  const nextLesson =
    currentIndex >= 0 && currentIndex < lessons.length - 1
      ? lessons[currentIndex + 1]
      : null;

  return (
    <LessonExperience
      lesson={lesson}
      nextLesson={nextLesson}
    />
  );
}
