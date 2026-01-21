import Image from "next/image";
import Link from "next/link";
import WaitlistProgress from "./components/WaitlistProgress";

const features = [
  {
    title: "Quick Scanning",
    copy: "Point and shoot to instantly verify product authenticity with our AI.",
    icon: "📱",
  },
  {
    title: "Serial Number Verification",
    copy: "Cross-reference with manufacturer databases to ensure legitimacy.",
    icon: "🔎",
  },
  {
    title: "Security Alerts",
    copy: "Real-time notifications about counterfeit threats near you.",
    icon: "🛡️",
  },
  {
    title: "Product History",
    copy: "View supply chain details for any product in seconds.",
    icon: "💾",
  },
  {
    title: "Global Database",
    copy: "Comprehensive verified products database worldwide.",
    icon: "🌍",
  },
  {
    title: "Smart Integration",
    copy: "Works with your favorite shopping and inventory apps.",
    icon: "⚙️",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172b] text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172b] via-[#11253f] to-[#0f172b]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_50%_-20%,rgba(163,255,0,0.12),transparent_50%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-12 md:px-8 lg:px-10">
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
                Tell us about your needs and get notified when we launch. Help
                shape MAVSCAN and get early access to AI-powered verification,
                safety insights, and real-time alerts.
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

        <section className="space-y-6">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-lime-300">
                Feature preview
              </p>
              <h2 className="text-3xl font-semibold">Powerful Features</h2>
              <p className="text-white/70">
                Adapted from your feature image with vibrant cards.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              Inspired by your provided feature grid visual
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-lime-300/60"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    {item.icon}
                  </span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
