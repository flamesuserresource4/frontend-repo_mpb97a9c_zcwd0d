import React, { useMemo, useState } from 'react';
import { Brain, Check, X } from 'lucide-react';

const QUESTIONS = [
  {
    q: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
    answer: 1,
  },
  {
    q: 'What is the largest ocean on Earth?',
    options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
    answer: 2,
  },
  {
    q: 'How many bones are there in the adult human body?',
    options: ['196', '206', '210', '186'],
    answer: 1,
  },
];

export default function MiniQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);

  const score = useMemo(() => {
    return answers.reduce((acc, a, i) => (a === QUESTIONS[i].answer ? acc + 1 : acc), 0);
  }, [answers]);

  const select = (idx) => {
    if (done) return;
    const next = [...answers];
    next[step] = idx;
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md">
      <div className="flex items-center gap-2 text-emerald-400 mb-3">
        <Brain className="w-5 h-5" />
        <h2 className="font-semibold">3-Question Quiz</h2>
      </div>

      {!done ? (
        <div>
          <p className="text-white/90 text-sm sm:text-base mb-3">{QUESTIONS[step].q}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {QUESTIONS[step].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => select(i)}
                className="text-left px-3 py-2 rounded-lg border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-500/10 transition"
              >
                {opt}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/60">Question {step + 1} of {QUESTIONS.length}</p>
        </div>
      ) : (
        <div className="text-center">
          <div className="flex justify-center gap-2 mb-2">
            {Array.from({ length: QUESTIONS.length }).map((_, i) => {
              const correct = answers[i] === QUESTIONS[i].answer;
              const Icon = correct ? Check : X;
              return (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    correct ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
              );
            })}
          </div>
          <p className="text-white/90 font-semibold">You scored {score} / {QUESTIONS.length}</p>
          <button
            onClick={reset}
            className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-black font-medium transition"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
