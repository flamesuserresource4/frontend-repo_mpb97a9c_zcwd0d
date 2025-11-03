import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative w-full h-80 sm:h-96 md:h-[28rem] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-white/10">
      <Spline
        scene="https://prod.spline.design/VQ0E0n8W3G3d7q3W/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 max-w-2xl">
          <div className="flex items-center justify-center gap-2 text-indigo-400 mb-2">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide">Boredom Buster</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Tap into instant fun
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/80">
            Quick games, brain teasers, and a dash of humor—just enough to flip your mood.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-indigo-300">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs sm:text-sm">New micro-joy each time you visit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
