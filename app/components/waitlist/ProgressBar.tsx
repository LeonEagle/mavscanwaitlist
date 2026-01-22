export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-xs text-white/60">
        <span>Completion</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-300 shadow-[0_0_20px_rgba(163,255,0,0.45)] transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
