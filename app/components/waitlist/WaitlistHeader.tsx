import Link from "next/link";

export default function WaitlistHeader({
  step,
  totalSteps,
}: {
  step: number;
  totalSteps: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-lime-200"
      >
        <span aria-hidden>‹</span>
        Back
      </Link>
      <div className="text-xs text-white/60">
        Step <span className="text-white">{step}</span> of {totalSteps}
      </div>
    </div>
  );
}
