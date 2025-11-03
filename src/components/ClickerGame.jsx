import React, { useEffect, useRef, useState } from 'react';
import { Zap, Play, Pause } from 'lucide-react';

export default function ClickerGame() {
  const DURATION = 10; // seconds
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => Number(localStorage.getItem('best-clicks') || 0));
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(intervalRef.current);
          setRunning(false);
          setBest((b) => {
            const next = Math.max(b, score);
            localStorage.setItem('best-clicks', String(next));
            return next;
          });
          return DURATION;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [running, score]);

  const start = () => {
    setScore(0);
    setTimeLeft(DURATION);
    setRunning(true);
  };

  const toggle = () => {
    setRunning((r) => !r);
  };

  const click = () => {
    if (!running) return;
    setScore((s) => s + 1);
  };

  const progress = ((DURATION - timeLeft) / DURATION) * 100;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md">
      <div className="flex items-center gap-2 text-fuchsia-400 mb-3">
        <Zap className="w-5 h-5" />
        <h2 className="font-semibold">10s Click Challenge</h2>
      </div>

      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-fuchsia-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div>
          <p className="text-white/60 text-xs">Time</p>
          <p className="text-white text-xl font-bold">{timeLeft}s</p>
        </div>
        <div>
          <p className="text-white/60 text-xs">Score</p>
          <p className="text-white text-xl font-bold">{score}</p>
        </div>
        <div>
          <p className="text-white/60 text-xs">Best</p>
          <p className="text-white text-xl font-bold">{best}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          onClick={start}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-fuchsia-500/90 hover:bg-fuchsia-500 text-black font-medium transition"
        >
          <Play className="w-4 h-4" /> Start
        </button>
        <button
          onClick={toggle}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 bg-white/10 hover:bg-white/15 transition"
        >
          <Pause className="w-4 h-4" /> {running ? 'Pause' : 'Resume'}
        </button>
        <button
          onClick={click}
          className="ml-auto inline-flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 text-black font-bold shadow hover:opacity-90 transition w-full sm:w-auto"
        >
          Tap!
        </button>
      </div>
    </div>
  );
}
