const BASE_KEY = "finlearn-progress-v3";
const defaultProgress = { completed: [], xp: 0, streak: 1, lessonProgress: {} };

function storageKey() {
  if (typeof window === "undefined") return BASE_KEY;
  const userId = localStorage.getItem("finlearn-active-user-id") || "guest";
  return `${BASE_KEY}-${userId}`;
}

export function getProgress() {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const saved = localStorage.getItem(storageKey());
    return saved ? { ...defaultProgress, ...JSON.parse(saved) } : { ...defaultProgress };
  } catch {
    return { ...defaultProgress };
  }
}

function save(progress) {
  localStorage.setItem(storageKey(), JSON.stringify(progress));
  return progress;
}

export function getLessonState(lessonId, total = 3) {
  const state = getProgress().lessonProgress?.[lessonId];
  if (!state) return { answered: 0, total };
  return { answered: Math.min(Number(state.answered || 0), total), total: Number(state.total || total) };
}

export function getLessonPercent(lessonId, total = 3) {
  const state = getLessonState(lessonId, total);
  return state.total ? Math.round((state.answered / state.total) * 100) : 0;
}

export function setLessonQuizProgress(lessonId, answered, total) {
  const current = getProgress();
  const previous = current.lessonProgress?.[lessonId]?.answered || 0;
  const nextAnswered = Math.max(previous, Math.min(answered, total));
  return save({
    ...current,
    lessonProgress: { ...current.lessonProgress, [lessonId]: { answered: nextAnswered, total } }
  });
}

export function completeLesson(lessonId, xpValue, totalQuestions = 3) {
  const current = getProgress();
  const alreadyCompleted = current.completed.includes(lessonId);
  return save({
    ...current,
    completed: alreadyCompleted ? current.completed : [...current.completed, lessonId],
    xp: alreadyCompleted ? current.xp : current.xp + xpValue,
    lessonProgress: { ...current.lessonProgress, [lessonId]: { answered: totalQuestions, total: totalQuestions } }
  });
}

export function resetProgress() {
  if (typeof window !== "undefined") localStorage.removeItem(storageKey());
}
