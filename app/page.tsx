import HeroSection from "./components/home/HeroSection";
import FeaturesSection from "./components/home/FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172b] text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172b] via-[#11253f] to-[#0f172b]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_50%_-20%,rgba(163,255,0,0.12),transparent_50%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-12 md:px-8 lg:px-10">
        <HeroSection />
        <FeaturesSection />
      </div>
    </div>
  );
}
