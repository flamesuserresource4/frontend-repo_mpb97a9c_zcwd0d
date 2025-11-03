import React, { useMemo, useState } from 'react';
import { Brain, Check, X } from 'lucide-react';

const QUESTIONS = [
  {
    q: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
    answer: 1,
  },
  {
    q: 'What is the capital of Japan?',
    options: ['Seoul', 'Beijing', 'Tokyo', 'Osaka'],
    answer: 2,
  },
  {
    q: 'Which language runs in a web browser?',
    options: ['Python', 'C++', 'Java', 'JavaScript'],
    answer: 3,
  },
];

const MiniQuiz = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = useMemo(() => QUESTIONS[index], [index]);

  const submit = () => {
    if (selected === null) return;
    if (selected === current.answer) setScore((s) => s + 1);

    if (index + 1 < QUESTIONS.length) {
      setIndex((i) => i + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="flex items-center gap-2 text-white/90">
        <Brain className="h-5 w-5" />
        <h3 className="font-medium">Mini Quiz</h3>
      </div>

      {!done ? (
        <>
          <p className="mt-4 text-white/90">{current.q}</p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {current.options.map((opt, i) => {
              const isSelected = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`rounded-lg border px-3 py-2 text-left transition ${
                    isSelected
                      ? 'border-indigo-400 bg-indigo-500/20 text-white'
                      : 'border-white/10 bg-white/5 text-white/90 hover:bg-white/10'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={submit}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-3 py-2 text-sm text-white hover:bg-indigo-600 active:scale-[0.98] transition"
            >
              <Check className="h-4 w-4" /> Submit
            </button>
            <span className="text-white/60 text-sm">Question {index + 1} of {QUESTIONS.length}</span>
          </div>
        </>
      ) : (
        <div className="mt-4">
          <div className="flex items-center gap-2 text-white/90">
            {score >= 2 ? (
              <Check className="h-5 w-5 text-emerald-400" />
            ) : (
              <X className="h-5 w-5 text-rose-400" />
            )}
            <p className="font-medium">You scored {score} / {QUESTIONS.length}</p>
          </div>
          <button
            onClick={restart}
            className="mt-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
};

export default MiniQuiz;
