"use client";

import { useState, useEffect } from "react";

export default function GenieLaughPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative">
        <header
          className={`container mx-auto px-6 py-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <a href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-50 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>Back to AnyFikra</span>
          </a>
        </header>

        <section className="container mx-auto px-6 pt-6 pb-14">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-cyan-500/40 rounded-2xl blur-xl" />
              <img
                src="/static/icon-genie-laugh.png"
                alt="Genie Laugh"
                className="relative w-20 h-20 rounded-2xl shadow-xl shadow-cyan-500/30"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-3">Genie Laugh</h1>
            <p className="text-lg bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-medium mb-4">
              "Capture priceless reactions"
            </p>
            <p className="text-neutral-300 max-w-xl mx-auto leading-relaxed">
              A playful prank app that secretly captures your friend's hilarious reactions 
              while they watch a video. They'll never know the front camera is recording! 😂
            </p>
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
                <div className="relative p-5 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="text-3xl mb-3">🥷</div>
                    <h3 className="text-base font-bold text-neutral-50 mb-2">Ninja Camera</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Secretly records reactions while your friend watches videos. Photo or video mode.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-5 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-violet-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="text-3xl mb-3">🎭</div>
                    <h3 className="text-base font-bold text-neutral-50 mb-2">Fake UI Themes</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Pixel-perfect Instagram Reels and TikTok interfaces. They won't suspect a thing!
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-5 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-pink-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="text-3xl mb-3">🛡️</div>
                    <h3 className="text-base font-bold text-neutral-50 mb-2">Ethical by Design</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      No saving or screenshots allowed. Built for harmless fun with clear consent.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-neutral-700 to-transparent" />
                <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                  How It Works
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-neutral-700 to-transparent" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">📥</span>
                  </div>
                  <h4 className="font-semibold text-neutral-50 text-sm mb-1">Import Video</h4>
                  <p className="text-xs text-neutral-400">Select any funny video</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🎭</span>
                  </div>
                  <h4 className="font-semibold text-neutral-50 text-sm mb-1">Pick Theme</h4>
                  <p className="text-xs text-neutral-400">Instagram or TikTok style</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">📱</span>
                  </div>
                  <h4 className="font-semibold text-neutral-50 text-sm mb-1">Hand Over</h4>
                  <p className="text-xs text-neutral-400">Give to your friend</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🎉</span>
                  </div>
                  <h4 className="font-semibold text-neutral-50 text-sm mb-1">Gotcha!</h4>
                  <p className="text-xs text-neutral-400">Reveal their reactions</p>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-neutral-700 to-transparent" />
                <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Features
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-neutral-700 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">Photo & Video Modes</h4>
                    <p className="text-neutral-400 text-xs">Capture shots every 2s or record 1080p video</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">Custom Profile Pics</h4>
                    <p className="text-neutral-400 text-xs">Make the fake UI even more convincing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">Coin Economy</h4>
                    <p className="text-neutral-400 text-xs">Fair system with rewarded ads</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">6 Languages</h4>
                    <p className="text-neutral-400 text-xs">EN, AR, ES, FR, JP, ZH with RTL support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">Screenshot Blocking</h4>
                    <p className="text-neutral-400 text-xs">Prevents saving on results screen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">Neubrutalism Design</h4>
                    <p className="text-neutral-400 text-xs">Bold, playful, and colorful UI</p>
                  </div>
                </div>
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
            <div className="inline-block bg-neutral-800/60 border border-neutral-700/60 rounded-xl px-6 py-3 mb-6">
              <span className="text-neutral-400 text-sm">🚀 Coming soon to iOS & Android</span>
            </div>

            <div className="flex justify-center gap-6 mt-6 text-sm">
              <a
                href="/genie-laugh/privacy"
                className="text-neutral-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <span>🔒</span>
                <span>Privacy Policy</span>
              </a>
              <a
                href="/genie-laugh/contact"
                className="text-neutral-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <span>🧞</span>
                <span>Contact & Support</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-6 border-t border-neutral-700/50">
          <p className="text-center text-sm text-neutral-500">
            © 2025 AnyFikra. Made with 🧞
          </p>
        </footer>
      </div>
    </main>
  );
}
