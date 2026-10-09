const KEY = "finlearn-progress-v1";

const defaultProgress = {
  completed: [],
  xp: 0,
  streak: 1
};

export function getProgress() {
  if (typeof window === "undefined") return defaultProgress;

  try {
    const saved = window.localStorage.getItem(KEY);
    if (!saved) return defaultProgress;
    return { ...defaultProgress, ...JSON.parse(saved) };
  } catch {
    return defaultProgress;
  }
}

export function completeLesson(lessonId, xpValue) {
  if (typeof window === "undefined") return defaultProgress;

  const current = getProgress();
  if (current.completed.includes(lessonId)) return current;

  const updated = {
    ...current,
    completed: [...current.completed, lessonId],
    xp: current.xp + xpValue
  };

  window.localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
}

export function resetProgress() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(KEY);
  }
}
