import type { WaitlistStep } from "@/app/lib/types";

export default function FormNavigation({
  step,
  onBack,
  onContinue,
  onSubmit,
  isSubmitting,
  nextDisabled,
}: {
  step: WaitlistStep;
  onBack: () => void;
  onContinue: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  nextDisabled: boolean;
}) {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        onClick={onBack}
        disabled={step === 1 || isSubmitting}
        className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white/80 backdrop-blur transition enabled:hover:border-lime-300/40 enabled:hover:text-lime-200 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Back
      </button>

      {step < 7 ? (
        <button
          type="button"
          onClick={onContinue}
          disabled={nextDisabled}
          className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-300 px-6 py-3 font-semibold text-[#0f172b] shadow-[0_15px_60px_rgba(163,255,0,0.25)] transition enabled:hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          Continue
        </button>
      ) : (
        <button
          type="submit"
          onClick={onSubmit}
          disabled={nextDisabled || isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-300 px-6 py-3 font-semibold text-[#0f172b] shadow-[0_15px_60px_rgba(163,255,0,0.25)] transition enabled:hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Joining...
            </>
          ) : (
            "Join the Waitlist"
          )}
        </button>
      )}
    </div>
  );
}
