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
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-100/70 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-100/60 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-sky-100/50 rounded-full blur-[80px]" />
      </div>

      <div className="relative">
        <header
          className={`container mx-auto px-6 py-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-base" style={{ fontFamily: "'Syne', sans-serif" }}>
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
              <div className="absolute inset-0 bg-amber-200/60 rounded-2xl blur-xl" />
              <img
                src="/static/icon-ducky-bank.png"
                alt="DuckyBank"
                className="relative w-20 h-20 rounded-2xl shadow-lg shadow-amber-200/60"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">Ducky Bank</h1>
            <p className="text-lg bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent font-semibold mb-4">
              "Quack your way to financial freedom!"
            </p>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              A simple yet powerful expense manager with a rubber duck as your
              financial guide. Track spending, manage budgets, and build better
              habits.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.duckybank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl hover:bg-slate-700 transition-all font-semibold shadow-md duration-300"
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
              {[
                { icon: <CreditCard className="w-6 h-6 text-amber-500" />, title: "Quick Entry", desc: "Fast recording with smart categorization.", bg: "bg-amber-100", hover: "hover:border-amber-200" },
                { icon: <BarChart2 className="w-6 h-6 text-amber-500" />, title: "Visual Reports", desc: "Daily, weekly, monthly breakdowns.", bg: "bg-yellow-100", hover: "hover:border-yellow-200" },
                { icon: <Trophy className="w-6 h-6 text-amber-500" />, title: "Achievements", desc: "Gamified with duck messages.", bg: "bg-orange-100", hover: "hover:border-orange-200" },
                { icon: <Globe className="w-6 h-6 text-amber-500" />, title: "Multi-Language", desc: "EN, FR, ES, JP, RU support.", bg: "bg-lime-100", hover: "hover:border-lime-200" },
              ].map(({ icon, title, desc, bg, hover }) => (
                <div key={title} className="group">
                  <div className={`relative p-4 rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md ${hover} transition-all duration-300 h-full`}>
                    <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-2`}>
                      {icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mb-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-sky-200 to-transparent" />
                <h2
                  className="text-sm uppercase tracking-[0.25em] text-slate-400"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Key Features
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-sky-200 to-transparent" />
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
                  <div key={title} className="flex items-start gap-3 p-3 rounded-xl border border-sky-100 bg-white/70">
                    <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-amber-500" />
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
                href="/ducky-bank/privacy"
                className="text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Privacy Policy</span>
              </a>
              <a
                href="/ducky-bank/contact"
                className="text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-1.5"
              >
                <Bird className="w-3.5 h-3.5" />
                <span>Contact & Support</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-6 border-t border-sky-100">
          <p className="text-center text-base text-slate-400 flex items-center justify-center gap-1">
            © 2025 AnyFikra. Made with <Bird className="w-3.5 h-3.5 inline" />
          </p>
        </footer>
      </div>
    </main>
  );
}
