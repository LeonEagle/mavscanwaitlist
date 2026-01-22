import Image from "next/image";
import Link from "next/link";
import WaitlistProgress from "../WaitlistProgress";

export default function HeroSection() {
  return (
    <header className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
      <div className="space-y-6 lg:max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-lime-400" />
          Join the MAVSCAN early access waitlist
        </div>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-lime-300">
            Counterfeit-proof shopping
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Verify every product with confidence.
          </h1>
          <p className="text-lg text-white/75">
            Tell us about your needs and get notified when we launch. Help shape
            MAVSCAN and get early access to AI-powered verification, safety
            insights, and real-time alerts.
          </p>
        </div>

        <WaitlistProgress />

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-300 px-5 py-3 text-base font-semibold text-[#0f172b] shadow-[0_15px_60px_rgba(163,255,0,0.25)] transition hover:scale-[1.01]"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>

      {/* Logo on the right side */}
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:pt-24">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-lime-400/20 via-emerald-400/10 to-transparent blur-2xl" />
          <Image
            src="/mavscan logo.jpg"
            alt="MAVSCAN Logo"
            width={280}
            height={280}
            className="relative rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
            priority
          />
        </div>
      </div>
    </header>
  );
}
