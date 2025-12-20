"use client";

import { useState, useEffect } from "react";

export default function GenieLaughContactPage() {
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
          <a href="/genie-laugh" className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-50 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>Back to Genie Laugh</span>
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
                className="relative w-16 h-16 rounded-2xl shadow-xl shadow-cyan-500/30"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-3">Contact Us</h1>
            <p className="text-neutral-300">We're here to help with your prank questions</p>
            <p className="text-sm bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-medium mt-2">
              "Capture priceless reactions"
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-14">
          <div
            className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <div className="p-5 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm">
                <div className="text-3xl mb-3">🧞</div>
                <h2 className="text-lg font-bold text-neutral-50 mb-2">Need Support?</h2>
                <p className="text-neutral-300 text-sm mb-4">
                  Having trouble with the genie? We're here to help you capture those laughs!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">📧</span>
                    <span className="text-neutral-300">support@anyfikra.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">⏰</span>
                    <span className="text-neutral-300">Response within 24 hours</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm">
                <div className="text-3xl mb-3">💡</div>
                <h2 className="text-lg font-bold text-neutral-50 mb-2">Feature Requests</h2>
                <p className="text-neutral-300 text-sm mb-4">
                  Have ideas for new prank features or themes? We'd love to hear them!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">📧</span>
                    <span className="text-neutral-300">features@anyfikra.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">💭</span>
                    <span className="text-neutral-300">Share your prank ideas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm mb-10">
              <h2 className="text-xl font-bold text-neutral-50 mb-6 text-center">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <div className="border-l-2 border-cyan-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">How does the Ninja Camera work?</h3>
                  <p className="text-neutral-400 text-sm">
                    When your friend watches the video, the front camera secretly records their reactions. 
                    In photo mode, it captures shots every 2 seconds. In video mode, it records continuously in 1080p.
                  </p>
                </div>

                <div className="border-l-2 border-cyan-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">Can the results be saved or screenshotted?</h3>
                  <p className="text-neutral-400 text-sm">
                    No! We've built in ethical protections. Screenshot blocking is enabled on results screens (Android), 
                    and there's no save-to-gallery option. This ensures pranks stay harmless and in the moment.
                  </p>
                </div>

                <div className="border-l-2 border-cyan-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">What are the Instagram and TikTok themes?</h3>
                  <p className="text-neutral-400 text-sm">
                    We've recreated pixel-perfect interfaces that look exactly like real Reels and TikTok. 
                    Your friend will think they're watching a normal video while you capture their reactions!
                  </p>
                </div>

                <div className="border-l-2 border-cyan-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">How does the coin system work?</h3>
                  <p className="text-neutral-400 text-sm">
                    Photo pranks cost 10 coins, video pranks cost 20 coins. You get 50 coins on signup, 
                    and can earn more by watching rewarded ads (+10 coins each). Coins are only deducted after a successful prank.
                  </p>
                </div>

                <div className="border-l-2 border-cyan-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">What languages are supported?</h3>
                  <p className="text-neutral-400 text-sm">
                    Genie Laugh supports 6 languages: English, Arabic (with RTL), Spanish, French, Japanese, and Chinese.
                  </p>
                </div>

                <div className="border-l-2 border-cyan-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">How do I end the prank?</h3>
                  <p className="text-neutral-400 text-sm">
                    Long-press anywhere on the screen to stop recording and view the captured reactions. 
                    The gotcha moment is the best part!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-center">
              <h2 className="text-lg font-bold text-neutral-50 mb-3">Still Need Help?</h2>
              <p className="text-neutral-300 text-sm mb-5">
                Our team is here to help you capture those priceless reactions. Don't hesitate to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:support@anyfikra.com?subject=Genie Laugh Support"
                  className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-neutral-900 px-5 py-2.5 rounded-xl hover:bg-cyan-400 transition-colors font-semibold text-sm"
                >
                  📧 Email Support
                </a>
                <a
                  href="/genie-laugh/privacy"
                  className="inline-flex items-center justify-center gap-2 bg-neutral-800 text-neutral-100 px-5 py-2.5 rounded-xl hover:bg-neutral-700 transition-colors font-semibold text-sm border border-neutral-700"
                >
                  🔒 Privacy Policy
                </a>
              </div>
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

