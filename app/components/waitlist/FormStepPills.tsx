import type { WaitlistStep } from "@/app/lib/types";

export default function FormStepPills({
  currentStep,
  totalSteps,
  onStepClick,
}: {
  currentStep: WaitlistStep;
  totalSteps: number;
  onStepClick: (step: WaitlistStep) => void;
}) {
  return (
    <div className="mb-6 flex items-center justify-center gap-1.5">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((n) => {
        const step = n as WaitlistStep;
        return (
          <button
            key={n}
            type="button"
            onClick={() => onStepClick(step)}
            className={[
              "h-7 w-7 rounded-full border text-xs font-semibold transition",
              n === currentStep
                ? "border-lime-300/60 bg-lime-400/20 text-lime-200"
                : "border-white/10 bg-white/5 text-white/70 hover:border-lime-300/30",
            ].join(" ")}
            aria-current={n === currentStep ? "step" : undefined}
          >
            {n}
          </button>
        );
      })}
    </div>
  );
}
