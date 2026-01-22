export default function FeatureCard({
  title,
  copy,
  icon,
}: {
  title: string;
  copy: string;
  icon: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-lime-300/60">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-2xl">
          {icon}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70">{copy}</p>
    </div>
  );
}
