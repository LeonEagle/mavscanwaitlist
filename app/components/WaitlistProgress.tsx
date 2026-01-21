"use client";

import { useEffect, useState } from "react";

type WaitlistStats = {
  count: number;
  target: number;
  progress: number;
  isFull: boolean;
};

export default function WaitlistProgress() {
  const [stats, setStats] = useState<WaitlistStats>({
    count: 0,
    target: 1000,
    progress: 0,
    isFull: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/waitlist");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch waitlist stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const getStatusText = () => {
    if (loading) return "Loading...";
    if (stats.isFull) return "Waitlist full!";
    if (stats.count === 0) return "Be the first!";
    if (stats.progress < 25) return "You're early!";
    if (stats.progress < 50) return "Filling up";
    if (stats.progress < 75) return "Going fast!";
    if (stats.progress < 100) return "Almost full!";
    return "Waitlist full!";
  };

  return (
    <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center justify-between text-sm text-white/70">
        <span>Waitlist progress</span>
        <span className="text-lime-300">{getStatusText()}</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-300 shadow-[0_0_20px_rgba(163,255,0,0.5)] transition-all duration-1000 ease-out"
          style={{ width: loading ? "0%" : `${stats.progress}%` }}
        />
      </div>
    </div>
  );
}
