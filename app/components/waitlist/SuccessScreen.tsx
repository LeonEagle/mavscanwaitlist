import Link from "next/link";

export default function SuccessScreen({
  email,
  waitlistPosition,
}: {
  email: string;
  waitlistPosition: number | null;
}) {
  return (
    <div className="space-y-4 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-lime-300">
        You&apos;re in!
      </p>
      <h2 className="text-2xl font-semibold">Thanks for joining.</h2>
      {waitlistPosition && (
        <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2">
          <span className="text-white/70">Your position:</span>
          <span className="text-xl font-bold text-lime-300">#{waitlistPosition}</span>
        </div>
      )}
      <p className="text-white/70">
        We&apos;ll notify you at <span className="text-lime-300">{email}</span> when
        MAVSCAN is ready.
      </p>
      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 font-semibold text-white hover:text-lime-200"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
