"use client";

import { useState, useEffect } from "react";
import { siApple } from "simple-icons";
import {
  Check,
  ChevronLeft,
  Download,
  EyeOff,
  Layers,
  Lock,
  PartyPopper,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Theater,
} from "lucide-react";

export default function GenieLaughPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-100/70 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-sky-100/60 rounded-full blur-[80px]" />
      </div>

      <div className="relative">
        <header
          className={`container mx-auto px-6 py-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <a href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span className="text-base" style={{ fontFamily: "'Syne', sans-serif" }}>Back to AnyFikra</span>
          </a>
        </header>

        <section className="container mx-auto px-6 pt-6 pb-14">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-cyan-200/60 rounded-2xl blur-xl" />
              <img
                src="/static/icon-genie-laugh.png"
                alt="Genie Laugh"
                className="relative w-20 h-20 rounded-2xl shadow-lg shadow-cyan-200/60"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">Genie Laugh</h1>
            <p className="text-lg bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent font-semibold mb-4">
              "Capture priceless reactions"
            </p>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              A playful prank app that secretly captures your friend's hilarious reactions
              while they watch a video. They'll never know the front camera is recording!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="https://apps.apple.com/us/app/genie-laugh/id6756788441"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl hover:bg-slate-700 transition-all font-semibold shadow-md duration-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={siApple.path} />
                </svg>
                Download for iOS
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <div
            className={`transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-14">
              <div className="group">
                <div className="relative p-5 rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center mb-3">
                      <EyeOff className="w-5 h-5 text-cyan-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Ninja Camera</h3>
                    <p className="text-slate-500 text-base leading-relaxed">
                      Secretly records reactions while your friend watches videos. Photo or video mode.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-5 rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-3">
                      <Theater className="w-5 h-5 text-violet-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Fake UI Themes</h3>
                    <p className="text-slate-500 text-base leading-relaxed">
                      Pixel-perfect Instagram Reels and TikTok interfaces. They won't suspect a thing!
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-5 rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center mb-3">
                      <ShieldCheck className="w-5 h-5 text-sky-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Ethical by Design</h3>
                    <p className="text-slate-500 text-base leading-relaxed">
                      No saving or screenshots allowed. Built for harmless fun with clear consent.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-sky-200 to-transparent" />
                <h2 className="text-sm uppercase tracking-[0.25em] text-slate-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                  How It Works
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-sky-200 to-transparent" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <Download className="w-5 h-5 text-cyan-500" />, title: "Import Video", desc: "Select any funny video", bg: "bg-cyan-100" },
                  { icon: <Layers className="w-5 h-5 text-violet-500" />, title: "Pick Theme", desc: "Instagram or TikTok style", bg: "bg-violet-100" },
                  { icon: <Smartphone className="w-5 h-5 text-sky-500" />, title: "Hand Over", desc: "Give to your friend", bg: "bg-sky-100" },
                  { icon: <PartyPopper className="w-5 h-5 text-cyan-500" />, title: "Gotcha!", desc: "Reveal their reactions", bg: "bg-cyan-100" },
                ].map(({ icon, title, desc, bg }) => (
                  <div key={title} className="text-center">
                    <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      {icon}
                    </div>
                    <h4 className="font-semibold text-slate-800 text-base mb-1">{title}</h4>
                    <p className="text-sm text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-sky-200 to-transparent" />
                <h2 className="text-sm uppercase tracking-[0.25em] text-slate-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Features
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-sky-200 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: "Photo & Video Modes", desc: "Capture shots every 2s or record 1080p video" },
                  { title: "Custom Profile Pics", desc: "Make the fake UI even more convincing" },
                  { title: "Coin Economy", desc: "Fair system with rewarded ads" },
                  { title: "6 Languages", desc: "EN, AR, ES, FR, JP, ZH with RTL support" },
                  { title: "Screenshot Blocking", desc: "Prevents saving on results screen" },
                  { title: "Neubrutalism Design", desc: "Bold, playful, and colorful UI" },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3 p-3 rounded-xl border border-sky-100 bg-white/70">
                    <div className="w-7 h-7 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-base">{title}</h4>
                      <p className="text-slate-400 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className={`container mx-auto px-6 pb-14 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center">
            <div className="flex justify-center gap-6 mt-6 text-sm">
              <a
                href="/genie-laugh/privacy"
                className="text-slate-400 hover:text-cyan-500 transition-colors flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Privacy Policy</span>
              </a>
              <a
                href="/genie-laugh/contact"
                className="text-slate-400 hover:text-cyan-500 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Contact & Support</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-6 border-t border-sky-100">
          <p className="text-center text-base text-slate-400 flex items-center justify-center gap-1">
            © 2025 AnyFikra. Made with <Sparkles className="w-3.5 h-3.5 inline" />
          </p>
        </footer>
      </div>
    </main>
  );
}
