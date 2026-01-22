export default function StepHeader({ step, title }: { step: number; title: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-white/60">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime-400/20 text-lime-200">
          {step}
        </span>
        {title}
      </div>
    </div>
  );
}
