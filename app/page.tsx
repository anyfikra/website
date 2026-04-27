import { Heart, Lightbulb, Sun } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";
import AppCard from "@/components/AppCard";
import FeelWords from "@/components/FeelWords";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/6 rounded-full blur-[140px]" />
      </div>

      <div className="relative">
        <header className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/static/logo.png"
              alt="AnyFikra"
              className="w-9 h-9 rounded-xl"
            />
            <span className="font-bold text-base text-neutral-100 font-syne tracking-wide">
              AnyFikra
            </span>
          </div>
        </header>

        <section className="container mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28">
          <div className="max-w-3xl">
            <p className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-5 font-syne font-semibold">
              Independent App Studio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-50 leading-[1.12] mb-6 font-syne">
              Crafting apps
              <br />
              that feel <FeelWords />
            </h1>
            <p className="text-base text-neutral-400 max-w-lg leading-relaxed">
              One person. Big ideas. Small, thoughtful apps that solve real
              problems and bring a little joy to everyday life.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-20">
          <div>
            <SectionDivider title="The Philosophy" accentColor="neutral" />

            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto items-stretch">
              <div className="group h-full">
                <div className="relative p-6 rounded-2xl border-2 border-neutral-700/50 bg-neutral-800/40 backdrop-blur-sm hover:border-amber-500/35 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="w-4.5 h-4.5 text-amber-400" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-50 mb-2 font-syne">
                      Start with a question
                    </h3>
                    <p className="text-neutral-500 text-base leading-relaxed">
                      Every app begins with "How can this be better?" Looking
                      for the human story behind every problem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group h-full">
                <div className="relative p-6 rounded-2xl border-2 border-neutral-700/50 bg-neutral-800/40 backdrop-blur-sm hover:border-rose-500/35 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-4.5 h-4.5 text-rose-400" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-50 mb-2 font-syne">
                      Built with care
                    </h3>
                    <p className="text-neutral-500 text-base leading-relaxed">
                      Each app crafted with attention to every detail.
                      Respecting your time, protecting your privacy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group h-full">
                <div className="relative p-6 rounded-2xl border-2 border-neutral-700/50 bg-neutral-800/40 backdrop-blur-sm hover:border-sky-500/35 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Sun className="w-4.5 h-4.5 text-sky-400" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-50 mb-2 font-syne">
                      Honest &amp; helpful
                    </h3>
                    <p className="text-neutral-500 text-base leading-relaxed">
                      No dark patterns, no tricks. Just honest tools that solve
                      real problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-20">
          <div>
            <SectionDivider title="Current Projects" accentColor="neutral" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <AppCard
                href="/delulu-jar"
                icon="/static/icon-delulu-jar.png"
                iconAlt="DeluluJar"
                category="For Couples"
                name="DeluluJar"
                accentBorderHover="hover:border-rose-500/40 hover:shadow-2xl hover:shadow-rose-500/10"
                accentGradientFrom="from-rose-500/8"
                accentGradientVia="via-pink-500/4"
                accentShadow="shadow-rose-500/10"
                accentIconShadow="shadow-rose-500/20"
                accentText="text-rose-400"
              />
              <AppCard
                href="/ducky-bank"
                icon="/static/icon-ducky-bank.png"
                iconAlt="DuckyBank"
                category="Personal Finance"
                name="DuckyBank"
                accentBorderHover="hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10"
                accentGradientFrom="from-amber-500/8"
                accentGradientVia="via-yellow-500/4"
                accentShadow="shadow-amber-500/10"
                accentIconShadow="shadow-amber-500/20"
                accentText="text-amber-400"
              />
              <AppCard
                href="/genie-laugh"
                icon="/static/icon-genie-laugh.png"
                iconAlt="Genie Laugh"
                category="Prank App"
                name="Genie Laugh"
                accentBorderHover="hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
                accentGradientFrom="from-cyan-500/8"
                accentGradientVia="via-violet-500/4"
                accentShadow="shadow-cyan-500/10"
                accentIconShadow="shadow-cyan-500/20"
                accentText="text-cyan-400"
              />
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 border-t border-neutral-800 pt-6">
            <p className="text-xs text-neutral-600 font-syne tracking-wide">
              © 2025 AnyFikra. Built with care, one pixel at a time.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-neutral-700 font-syne">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-rose-600 fill-rose-600" />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
