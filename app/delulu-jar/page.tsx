"use client";

import { useState, useEffect } from "react";
import { siApple, siGoogleplay } from "simple-icons";
import { Dices, Heart, Lock, Mail, PackageOpen, PenLine, Users } from "lucide-react";

export default function DeluluPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose-100/70 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pink-100/60 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-sky-100/50 rounded-full blur-[80px]" />
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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
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
              <div className="absolute inset-0 bg-rose-200/60 rounded-2xl blur-xl" />
              <img
                src="/static/icon-delulu-jar.png"
                alt="DeluluJar"
                className="relative w-20 h-20 rounded-2xl shadow-lg shadow-rose-200/60"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">DeluluJar</h1>
            <p className="text-lg bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent font-semibold mb-4">
              "Love looks good on you"
            </p>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              A wholesome, private mobile app for couples to store and share
              little compliments, sweet thoughts, and fun "delulu" moments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="https://apps.apple.com/us/app/delulujar/id6751821045"
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
              <a
                href="https://play.google.com/store/apps/details?id=app.delulujar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all font-semibold shadow-sm duration-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={siGoogleplay.path} />
                </svg>
                Get it on Android
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
                <div className="relative p-5 rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center mb-3">
                      <Mail className="w-5 h-5 text-rose-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Digital Love Notes</h3>
                    <p className="text-slate-500 text-base leading-relaxed">
                      Drop sweet messages, compliments, or fun thoughts. Support
                      text, audio, images, and videos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-5 rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-pink-200 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center mb-3">
                      <Dices className="w-5 h-5 text-rose-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Random Surprises</h3>
                    <p className="text-slate-500 text-base leading-relaxed">
                      Shake or tap to retrieve a random note. Each opening is a
                      delightful surprise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-5 rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-fuchsia-200 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-fuchsia-100 flex items-center justify-center mb-3">
                      <Lock className="w-5 h-5 text-fuchsia-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Private & Secure</h3>
                    <p className="text-slate-500 text-base leading-relaxed">
                      Your love notes are completely private. Securely stored
                      with end-to-end privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-sky-200 to-transparent" />
                <h2
                  className="text-sm uppercase tracking-[0.25em] text-slate-400"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  How It Works
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-sky-200 to-transparent" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <Users className="w-5 h-5 text-rose-400" />, title: "Pair Up", desc: "Connect with your partner", bg: "bg-rose-100" },
                  { icon: <PenLine className="w-5 h-5 text-rose-400" />, title: "Add Notes", desc: "Drop messages or photos", bg: "bg-rose-100" },
                  { icon: <PackageOpen className="w-5 h-5 text-rose-400" />, title: "Open Jar", desc: "Shake for a random note", bg: "bg-rose-100" },
                  { icon: <Heart className="w-5 h-5 text-rose-400" />, title: "Share Love", desc: "Build your love story", bg: "bg-rose-100" },
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
          </div>
        </section>

        <section
          className={`container mx-auto px-6 pb-14 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center">
            <div className="flex justify-center gap-6 mt-8 text-sm">
              <a
                href="/delulu-jar/privacy"
                className="text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Privacy Policy</span>
              </a>
              <a
                href="/delulu-jar/contact"
                className="text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Contact & Support</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-6 border-t border-sky-100">
          <p className="text-center text-base text-slate-400">
            © 2025 AnyFikra. Made with love.
          </p>
        </footer>
      </div>
    </main>
  );
}
