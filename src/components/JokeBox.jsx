import React, { useEffect, useState } from 'react';
import { Smile, RefreshCw } from 'lucide-react';

const JokeBox = () => {
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
      if (!res.ok) throw new Error('Failed to fetch joke');
      const data = await res.json();
      setJoke(data.joke);
    } catch (e) {
      setError('Could not load a joke right now. Try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/90">
          <Smile className="h-5 w-5" />
          <h3 className="font-medium">Instant Joke</h3>
        </div>
        <button
          onClick={fetchJoke}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15 active:scale-[0.98] transition disabled:opacity-60"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          New
        </button>
      </div>
      <div className="mt-4 min-h-[72px]">
        {error ? (
          <p className="text-red-300/90 text-sm">{error}</p>
        ) : (
          <p className="text-white/90 leading-relaxed">{loading ? 'Loading…' : joke}</p>
        )}
      </div>
    </div>
  );
};

export default JokeBox;
