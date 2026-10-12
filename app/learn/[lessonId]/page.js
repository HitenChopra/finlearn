"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import lessons from "@/data/lessons.json";
import LessonExperience from "@/components/LessonExperience";

export default function LessonPage() {
  const params = useParams();
  const lessonId = Array.isArray(params?.lessonId) ? params.lessonId[0] : params?.lessonId;
  const lesson = lessons.find((item) => String(item.id) === String(lessonId));

  if (!lesson) {
    return <section className="page-shell"><h1>Lesson not found</h1><p className="muted">Requested: {lessonId || "none"}</p><Link href="/learn" className="button secondary">← Back to Explore</Link></section>;
  }

  const sameTrack = lessons.filter((item) => item.trackId === lesson.trackId);
  const index = sameTrack.findIndex((item) => item.id === lesson.id);
  const nextLesson = sameTrack[index + 1] || null;

  return <LessonExperience lesson={lesson} nextLesson={nextLesson} />;
}
