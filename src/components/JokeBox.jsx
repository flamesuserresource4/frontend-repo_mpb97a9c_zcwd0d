import React, { useEffect, useState } from 'react';
import { RefreshCw, Smile } from 'lucide-react';

export default function JokeBox() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchJoke = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setJoke(data.joke);
    } catch (e) {
      setError('Could not fetch a joke. Try again!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md">
      <div className="flex items-center gap-2 text-amber-400 mb-3">
        <Smile className="w-5 h-5" />
        <h2 className="font-semibold">Instant Joke</h2>
      </div>
      <p className="text-white/90 text-sm sm:text-base min-h-[48px]">
        {loading ? 'Loading a good one…' : error ? error : joke}
      </p>
      <button
        onClick={fetchJoke}
        className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-500 text-black font-medium transition"
        aria-label="Get another joke"
      >
        <RefreshCw className="w-4 h-4" /> New Joke
      </button>
    </div>
  );
}
