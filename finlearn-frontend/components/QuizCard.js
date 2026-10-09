"use client";

import { useState } from "react";

export default function QuizCard({ quiz, onPassed }) {
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  const correct = selected === quiz.answerIndex;

  function submit() {
    if (selected === null) return;
    setChecked(true);
    if (selected === quiz.answerIndex) {
      onPassed?.();
    }
  }

  return (
    <div className="quiz-card">
      <span className="eyebrow">QUICK CHECK</span>
      <h2>{quiz.question}</h2>

      <div className="quiz-options">
        {quiz.options.map((option, index) => {
          let cls = "quiz-option";
          if (selected === index) cls += " selected";
          if (checked && index === quiz.answerIndex) cls += " correct";
          if (checked && selected === index && index !== quiz.answerIndex) cls += " wrong";

          return (
            <button
              key={option}
              className={cls}
              onClick={() => {
                if (!checked) setSelected(index);
              }}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              {option}
            </button>
          );
        })}
      </div>

      {!checked ? (
        <button
          className="button primary"
          onClick={submit}
          disabled={selected === null}
        >
          Check answer
        </button>
      ) : (
        <div className={`feedback ${correct ? "success" : "error"}`}>
          <strong>{correct ? "Correct! +XP unlocked 🎉" : "Not quite yet."}</strong>
          <p>{quiz.explanation}</p>
          {!correct && (
            <button
              className="button secondary"
              onClick={() => {
                setSelected(null);
                setChecked(false);
              }}
            >
              Try again
            </button>
          )}
        </div>
      )}
    </div>
  );
}
