import React, { useEffect, useRef, useState } from 'react';
import { Zap, Play, Pause } from 'lucide-react';

const STORAGE_KEY = 'best-clicks';

const ClickerGame = () => {
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [clicks, setClicks] = useState(0);
  const [best, setBest] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? parseInt(saved, 10) : 0;
    });
  const timerRef = useRef(null);

  useEffect(() => {
    if (!running) return;
    if (timeLeft <= 0) return;

    timerRef.current = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [running, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      setRunning(false);
      if (clicks > best) {
        setBest(clicks);
        localStorage.setItem(STORAGE_KEY, String(clicks));
      }
    }
  }, [timeLeft, clicks, best]);

  const toggle = () => {
    if (timeLeft === 0) return; // can't resume after end
    setRunning((r) => !r);
  };

  const startOver = () => {
    setRunning(false);
    setTimeLeft(10);
    setClicks(0);
  };

  const handleClick = () => {
    if (!running) return;
    setClicks((c) => c + 1);
  };

  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/90">
          <Zap className="h-5 w-5" />
          <h3 className="font-medium">10s Click Challenge</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-3 py-1.5 text-sm text-white hover:bg-indigo-600 active:scale-[0.98] transition"
            disabled={timeLeft === 0}
          >
            {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {running ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={startOver}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-lg border border-white/10 bg-black/20 p-3">
          <div className="text-xs text-white/60">Time</div>
          <div className="text-2xl font-semibold text-white">{timeLeft}s</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/20 p-3">
          <div className="text-xs text-white/60">Clicks</div>
          <div className="text-2xl font-semibold text-white">{clicks}</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/20 p-3">
          <div className="text-xs text-white/60">Best</div>
          <div className="text-2xl font-semibold text-white">{best}</div>
        </div>
      </div>

      <button
        onClick={handleClick}
        className={`mt-4 h-28 rounded-xl border border-white/10 text-lg font-semibold text-white transition active:scale-[0.98] ${
          running ? 'bg-emerald-500/20 hover:bg-emerald-500/30' : 'bg-white/5 hover:bg-white/10'
        }`}
      >
        {timeLeft === 0 ? 'Time up!' : running ? 'Tap! Tap! Tap!' : 'Press Start'}
      </button>
    </div>
  );
};

export default ClickerGame;
