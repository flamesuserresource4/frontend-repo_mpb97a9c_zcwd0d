import React from 'react';
import Hero3D from './components/Hero3D';
import JokeBox from './components/JokeBox';
import MiniQuiz from './components/MiniQuiz';
import ClickerGame from './components/ClickerGame';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        <Hero3D />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <JokeBox />
          <MiniQuiz />
          <ClickerGame />

          <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h3 className="font-medium text-white/90">How it works</h3>
            <ul className="mt-3 list-disc pl-4 text-white/80 space-y-1 text-sm">
              <li>Tap the button in the joke card to load a fresh dad joke.</li>
              <li>Answer three quick questions in the quiz and see your score.</li>
              <li>Start the 10-second click challenge and try to beat your best score.</li>
            </ul>
            <p className="mt-3 text-white/60 text-sm">
              All features run instantly in your browser—have fun and come back anytime for a fresh dose of micro-joy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
