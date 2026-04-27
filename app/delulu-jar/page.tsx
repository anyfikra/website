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
    <main className="min-h-screen bg-neutral-900 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pink-500/15 rounded-full blur-[80px]" />
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
              <div className="absolute inset-0 bg-rose-500/40 rounded-2xl blur-xl" />
              <img
                src="/static/icon-delulu-jar.png"
                alt="DeluluJar"
                className="relative w-20 h-20 rounded-2xl shadow-xl shadow-rose-500/30"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-3">
              DeluluJar
            </h1>
            <p className="text-lg bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent font-medium mb-4">
              "Love looks good on you"
            </p>
            <p className="text-neutral-300 max-w-xl mx-auto leading-relaxed">
              A wholesome, private mobile app for couples to store and share
              little compliments, sweet thoughts, and fun "delulu" moments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="https://apps.apple.com/us/app/delulujar/id6751821045"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-neutral-800 border-2 border-neutral-700 text-white px-8 py-4 rounded-xl hover:bg-neutral-700 hover:border-neutral-600 transition-all font-semibold shadow-xl duration-300"
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
                className="inline-flex items-center gap-3 bg-neutral-800 border-2 border-neutral-700 text-white px-8 py-4 rounded-xl hover:bg-neutral-700 hover:border-neutral-600 transition-all font-semibold shadow-xl duration-300"
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
                <div className="relative p-5 rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-rose-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <Mail className="w-8 h-8 text-rose-400 mb-3" />
                    <h3 className="text-lg font-bold text-neutral-50 mb-2">
                      Digital Love Notes
                    </h3>
                    <p className="text-neutral-300 text-base leading-relaxed">
                      Drop sweet messages, compliments, or fun thoughts. Support
                      text, audio, images, and videos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-5 rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-pink-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <Dices className="w-8 h-8 text-rose-400 mb-3" />
                    <h3 className="text-lg font-bold text-neutral-50 mb-2">
                      Random Surprises
                    </h3>
                    <p className="text-neutral-300 text-base leading-relaxed">
                      Shake or tap to retrieve a random note. Each opening is a
                      delightful surprise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-5 rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-fuchsia-500/40 transition-all duration-400 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <Lock className="w-8 h-8 text-rose-400 mb-3" />
                    <h3 className="text-lg font-bold text-neutral-50 mb-2">
                      Private & Secure
                    </h3>
                    <p className="text-neutral-300 text-base leading-relaxed">
                      Your love notes are completely private. Securely stored
                      with end-to-end privacy.
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
                  How It Works
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-neutral-700 to-transparent" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500/25 to-pink-500/25 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-5 h-5 text-rose-400" />
                  </div>
                  <h4 className="font-semibold text-neutral-50 text-base mb-1">
                    Pair Up
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Connect with your partner
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500/25 to-pink-500/25 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <PenLine className="w-5 h-5 text-rose-400" />
                  </div>
                  <h4 className="font-semibold text-neutral-50 text-base mb-1">
                    Add Notes
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Drop messages or photos
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500/25 to-pink-500/25 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <PackageOpen className="w-5 h-5 text-rose-400" />
                  </div>
                  <h4 className="font-semibold text-neutral-50 text-base mb-1">
                    Open Jar
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Shake for a random note
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500/25 to-pink-500/25 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-5 h-5 text-rose-400" />
                  </div>
                  <h4 className="font-semibold text-neutral-50 text-base mb-1">
                    Share Love
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Build your love story
                  </p>
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
            <div className="flex justify-center gap-6 mt-8 text-sm">
              <a
                href="/delulu-jar/privacy"
                className="text-neutral-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Privacy Policy</span>
              </a>
              <a
                href="/delulu-jar/contact"
                className="text-neutral-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Contact & Support</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-6 border-t-2 border-neutral-700/50">
          <p className="text-center text-base text-neutral-500">
            © 2025 AnyFikra. Made with love.
          </p>
        </footer>
      </div>
    </main>
  );
}
