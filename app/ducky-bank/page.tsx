"use client";

import { useState, useEffect } from "react";

export default function DuckyBankPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-500/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative">
        <header
          className={`container mx-auto px-6 py-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-50 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span
              className="text-sm"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Back to AnyFikra
            </span>
          </a>
        </header>

        <section className="container mx-auto px-6 pt-6 pb-14">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-amber-500/40 rounded-2xl blur-xl" />
              <img
                src="/static/icon-ducky-bank.png"
                alt="DuckyBank"
                className="relative w-20 h-20 rounded-2xl shadow-xl shadow-amber-500/30"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-3">
              Ducky Bank
            </h1>
            <p className="text-lg bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent font-medium mb-4">
              "Quack your way to financial freedom!"
            </p>
            <p className="text-neutral-300 max-w-xl mx-auto leading-relaxed">
              A simple yet powerful expense manager with a rubber duck as your
              financial guide. Track spending, manage budgets, and build better
              habits.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <div
            className={`transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
              <div className="group">
                <div className="relative p-4 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="text-2xl mb-2">💳</div>
                    <h3 className="text-sm font-bold text-neutral-50 mb-1">
                      Quick Entry
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Fast recording with smart categorization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-4 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="text-2xl mb-2">📊</div>
                    <h3 className="text-sm font-bold text-neutral-50 mb-1">
                      Visual Reports
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Daily, weekly, monthly breakdowns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-4 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="text-2xl mb-2">🎆</div>
                    <h3 className="text-sm font-bold text-neutral-50 mb-1">
                      Achievements
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Gamified with duck messages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-4 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-lime-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="text-2xl mb-2">🌍</div>
                    <h3 className="text-sm font-bold text-neutral-50 mb-1">
                      Multi-Language
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      EN, FR, ES, JP, RU support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-neutral-700 to-transparent" />
                <h2
                  className="text-xs uppercase tracking-[0.25em] text-neutral-400"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Key Features
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-neutral-700 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-amber-500/25 to-yellow-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">
                      Category Management
                    </h4>
                    <p className="text-neutral-400 text-xs">
                      Custom categories with visual icons
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-amber-500/25 to-yellow-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">
                      Dark Mode Support
                    </h4>
                    <p className="text-neutral-400 text-xs">
                      Beautiful theme with auto switching
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-amber-500/25 to-yellow-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">
                      Offline-First
                    </h4>
                    <p className="text-neutral-400 text-xs">
                      Works without internet
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-amber-500/25 to-yellow-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">
                      Duck Insights
                    </h4>
                    <p className="text-neutral-400 text-xs">
                      Tips from your duck guide
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-amber-500/25 to-yellow-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">
                      Transaction History
                    </h4>
                    <p className="text-neutral-400 text-xs">
                      Filter and search all entries
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-700/40 bg-neutral-800/30">
                  <div className="w-7 h-7 bg-gradient-to-br from-amber-500/25 to-yellow-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-50 text-sm">
                      Budget Tracking
                    </h4>
                    <p className="text-neutral-400 text-xs">
                      Monthly budgets (coming soon)
                    </p>
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
            <a
              href="https://play.google.com/store/apps/details?id=com.duckybank"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-900 px-8 py-4 rounded-xl hover:from-amber-400 hover:to-yellow-400 transition-all font-semibold shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 duration-300"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M 7.5 1 C 7.372 1 7.2439844 1.0489844 7.1464844 1.1464844 C 6.9514844 1.3414844 6.9514844 1.6585156 7.1464844 1.8535156 L 8.4570312 3.1640625 C 6.9691108 4.2559188 6 6.0127547 6 8 L 18 8 C 18 6.0127547 17.030889 4.2559188 15.542969 3.1640625 L 16.853516 1.8535156 C 17.048516 1.6575156 17.048516 1.3424844 16.853516 1.1464844 C 16.658516 0.95148437 16.341484 0.95148438 16.146484 1.1464844 L 14.664062 2.6289062 C 13.860616 2.2295595 12.95819 2 12 2 C 11.04181 2 10.139384 2.2295595 9.3359375 2.6289062 L 7.8535156 1.1464844 C 7.7560156 1.0489844 7.628 1 7.5 1 z M 9 5 L 10 5 L 10 6 L 9 6 L 9 5 z M 14 5 L 15 5 L 15 6 L 14 6 L 14 5 z M 4 9 C 3.448 9 3 9.448 3 10 L 3 16 C 3 16.552 3.448 17 4 17 C 4.552 17 5 16.552 5 16 L 5 10 C 5 9.448 4.552 9 4 9 z M 6 9 L 6 17 C 6 17.552 6.448 18 7 18 L 8 18 L 8 21.5 C 8 22.328 8.672 23 9.5 23 C 10.328 23 11 22.328 11 21.5 L 11 18 L 13 18 L 13 21.5 C 13 22.328 13.672 23 14.5 23 C 15.328 23 16 22.328 16 21.5 L 16 18 L 17 18 C 17.552 18 18 17.552 18 17 L 18 9 L 6 9 z M 20 9 C 19.448 9 19 9.448 19 10 L 19 16 C 19 16.552 19.448 17 20 17 C 20.552 17 21 16.552 21 16 L 21 10 C 21 9.448 20.552 9 20 9 z"></path>
              </svg>
              Download for Android
            </a>

            <p className="text-neutral-400 text-sm mt-5 max-w-sm mx-auto">
              Join the duck squad and take control of your finances!
            </p>

            <div className="flex justify-center gap-6 mt-6 text-sm">
              <a
                href="/ducky-bank/privacy"
                className="text-neutral-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <span>🔒</span>
                <span>Privacy Policy</span>
              </a>
              <a
                href="/ducky-bank/contact"
                className="text-neutral-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <span>🦆</span>
                <span>Contact & Support</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-6 border-t border-neutral-700/50">
          <p className="text-center text-sm text-neutral-500">
            © 2025 AnyFikra. Made with 🦆
          </p>
        </footer>
      </div>
    </main>
  );
}
