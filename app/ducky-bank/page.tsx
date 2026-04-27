"use client";

import { useState, useEffect } from "react";
import { siGoogleplay } from "simple-icons";
import {
  BarChart2,
  Bird,
  ChevronLeft,
  Check,
  CreditCard,
  Globe,
  Lock,
  Trophy,
} from "lucide-react";

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
            <ChevronLeft className="w-4 h-4" />
            <span
              className="text-base"
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
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.duckybank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-neutral-800 border-2 border-neutral-700 text-white px-8 py-4 rounded-xl hover:bg-neutral-700 hover:border-neutral-600 transition-all font-semibold shadow-xl duration-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={siGoogleplay.path} />
                </svg>
                Download for Android
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
              <div className="group">
                <div className="relative p-4 rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <CreditCard className="w-7 h-7 text-amber-400 mb-2" />
                    <h3 className="text-lg font-bold text-neutral-50 mb-1">
                      Quick Entry
                    </h3>
                    <p className="text-neutral-400 text-base leading-relaxed">
                      Fast recording with smart categorization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-4 rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <BarChart2 className="w-7 h-7 text-amber-400 mb-2" />
                    <h3 className="text-lg font-bold text-neutral-50 mb-1">
                      Visual Reports
                    </h3>
                    <p className="text-neutral-400 text-base leading-relaxed">
                      Daily, weekly, monthly breakdowns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-4 rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <Trophy className="w-7 h-7 text-amber-400 mb-2" />
                    <h3 className="text-lg font-bold text-neutral-50 mb-1">
                      Achievements
                    </h3>
                    <p className="text-neutral-400 text-base leading-relaxed">
                      Gamified with duck messages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-4 rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-lime-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <Globe className="w-7 h-7 text-amber-400 mb-2" />
                    <h3 className="text-lg font-bold text-neutral-50 mb-1">
                      Multi-Language
                    </h3>
                    <p className="text-neutral-400 text-base leading-relaxed">
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
                  className="text-sm uppercase tracking-[0.25em] text-neutral-400"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Key Features
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-neutral-700 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: "Category Management", desc: "Custom categories with visual icons" },
                  { title: "Dark Mode Support", desc: "Beautiful theme with auto switching" },
                  { title: "Offline-First", desc: "Works without internet" },
                  { title: "Duck Insights", desc: "Tips from your duck guide" },
                  { title: "Transaction History", desc: "Filter and search all entries" },
                  { title: "Budget Tracking", desc: "Monthly budgets (coming soon)" },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3 p-3 rounded-xl border-2 border-neutral-700/40 bg-neutral-800/30">
                    <div className="w-7 h-7 bg-gradient-to-br from-amber-500/25 to-yellow-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-50 text-base">{title}</h4>
                      <p className="text-neutral-400 text-sm">{desc}</p>
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
                href="/ducky-bank/privacy"
                className="text-neutral-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Privacy Policy</span>
              </a>
              <a
                href="/ducky-bank/contact"
                className="text-neutral-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Bird className="w-3.5 h-3.5" />
                <span>Contact & Support</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-6 border-t-2 border-neutral-700/50">
          <p className="text-center text-base text-neutral-500 flex items-center justify-center gap-1">
            © 2025 AnyFikra. Made with <Bird className="w-3.5 h-3.5 inline" />
          </p>
        </footer>
      </div>
    </main>
  );
}
