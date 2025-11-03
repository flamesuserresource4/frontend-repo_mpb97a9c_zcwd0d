import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6U9k8l3flgr1kE5a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability; does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex items-end">
        <div className="p-6 sm:p-8 md:p-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Micro-joy for your day
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Boredom Buster
          </h1>
          <p className="mt-2 text-white/80 max-w-xl">
            Jump into quick hits of fun—jokes, quizzes, and a tap challenge. No sign-up. Just play.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-indigo-200">
            <Rocket className="h-5 w-5" />
            <span>Launch into something delightful</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
