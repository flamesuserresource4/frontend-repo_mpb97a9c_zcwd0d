import React from 'react';
import Hero3D from './components/Hero3D';
import JokeBox from './components/JokeBox';
import MiniQuiz from './components/MiniQuiz';
import ClickerGame from './components/ClickerGame';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-fuchsia-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
        <Hero3D />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <JokeBox />
          <MiniQuiz />
          <ClickerGame />
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md">
            <h2 className="font-semibold text-sky-300 mb-3">How it works</h2>
            <ul className="text-white/85 text-sm space-y-2 list-disc pl-5">
              <li>Grab a quick laugh with a fresh joke.</li>
              <li>Challenge your brain with a rapid-fire quiz.</li>
              <li>Burn boredom energy in a 10s click sprint.</li>
              <li>Come back anytime for a new burst of fun.</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-white/50 mt-8">Made for micro-joy. Have fun ✨</p>
      </div>
    </div>
  );
}

export default App;
