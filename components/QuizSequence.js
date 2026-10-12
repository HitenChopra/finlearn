"use client";

import { useMemo, useState } from "react";
import { getLessonState, setLessonQuizProgress } from "@/lib/progress";

export default function QuizSequence({ lessonId, quizzes, onFinished }) {
  const saved = useMemo(() => getLessonState(lessonId, quizzes.length), [lessonId, quizzes.length]);
  const initialIndex = saved.answered >= quizzes.length ? 0 : saved.answered;
  const [index, setIndex] = useState(initialIndex);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  const quiz = quizzes[index];
  const correct = selected === quiz.answerIndex;
  const last = index === quizzes.length - 1;

  function check() {
    if (selected !== null) setChecked(true);
  }
  function retry() {
    setSelected(null);
    setChecked(false);
  }
  function advance() {
    setLessonQuizProgress(lessonId, index + 1, quizzes.length);
    setIndex(index + 1);
    setSelected(null);
    setChecked(false);
  }
  function finish() {
    setLessonQuizProgress(lessonId, quizzes.length, quizzes.length);
    onFinished?.();
  }

  return (
    <div className="quiz-card quiz-sequence">
      <div className="quiz-head"><span className="eyebrow">KNOWLEDGE CHECK</span><span>Question {index + 1} of {quizzes.length}</span></div>
      <h2>{quiz.question}</h2>
      <div className="quiz-options">
        {quiz.options.map((option, i) => {
          let cls = "quiz-option";
          if (selected === i) cls += " selected";
          if (checked && i === quiz.answerIndex) cls += " correct";
          if (checked && selected === i && i !== quiz.answerIndex) cls += " wrong";
          return <button key={option} className={cls} onClick={() => !checked && setSelected(i)}><span>{String.fromCharCode(65 + i)}</span>{option}</button>;
        })}
      </div>

      {!checked ? (
        <button className="button primary" disabled={selected === null} onClick={check}>Check answer</button>
      ) : (
        <div className={`feedback ${correct ? "success" : "error"}`}>
          <strong>{correct ? "Correct ✓" : "Not quite yet."}</strong>
          <p>{quiz.explanation}</p>
          {correct ? (
            <button className="button primary" onClick={last ? finish : advance}>{last ? "Finish" : "Continue"}</button>
          ) : (
            <button className="button secondary" onClick={retry}>Try again</button>
          )}
        </div>
      )}
    </div>
  );
}
