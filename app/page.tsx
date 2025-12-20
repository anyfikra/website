"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const [mounted, setMounted] = useState(false);
  const words = ["meaningful", "delightful", "personal", "simple"];

  useEffect(() => {
    setMounted(true);
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => {
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rose-500/15 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative">
        <header
          className={`container mx-auto px-6 py-6 flex justify-between items-center transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex items-center gap-3">
            <img
              src="/static/logo.png"
              alt="AnyFikra"
              className="w-10 h-10 rounded-xl"
            />
            <span
              className="font-bold text-lg text-neutral-50"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              AnyFikra
            </span>
          </div>
        </header>

        <section className="container mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <div
            className={`max-w-3xl transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p
              className="text-amber-400 text-xs uppercase tracking-[0.25em] mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Independent App Studio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-50 leading-[1.15] mb-5">
              Crafting apps
              <br />
              that feel{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent blur-xl opacity-60">
                  {words[currentWord]}
                </span>
                <span className="relative bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                  {words[currentWord]}
                </span>
              </span>
            </h1>
            <p className="text-lg text-neutral-300 max-w-xl leading-relaxed">
              One person. Big ideas. Small, thoughtful apps that solve real
              problems and bring a little joy to everyday life.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-20">
          <div
            className={`transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-neutral-700 to-transparent" />
              <h2
                className="text-xs uppercase tracking-[0.25em] text-neutral-400"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                The Philosophy
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-neutral-700 to-transparent" />
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              <div className="group">
                <div className="relative p-6 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/25 to-orange-500/25 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-400">
                      <svg
                        className="w-5 h-5 text-amber-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-50 mb-2">
                      Start with a question
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Every app begins with "How can this be better?" Looking
                      for the human story behind every problem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group md:mt-6">
                <div className="relative p-6 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-rose-500/40 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500/25 to-pink-500/25 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-400">
                      <svg
                        className="w-5 h-5 text-rose-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-50 mb-2">
                      Built with care
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Each app crafted with attention to every detail.
                      Respecting your time, protecting your privacy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-6 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-sky-500/40 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500/25 to-blue-500/25 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-400">
                      <svg
                        className="w-5 h-5 text-sky-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-50 mb-2">
                      Honest & helpful
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
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
          <div
            className={`transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-neutral-700 to-transparent" />
              <h2
                className="text-xs uppercase tracking-[0.25em] text-neutral-400"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Current Projects
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-neutral-700 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <a href="/delulu-jar" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-neutral-700/60 bg-neutral-800/50 backdrop-blur-sm p-6 h-full hover:border-rose-500/40 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-6 right-6">
                    <img
                      src="/static/icon-delulu-jar.png"
                      alt="DeluluJar"
                      className="w-16 h-16 rounded-xl shadow-xl shadow-rose-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400"
                    />
                  </div>
                  <div className="relative pt-16">
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] text-rose-400/80 mb-1.5 block"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      For Couples
                    </span>
                    <h3 className="text-xl font-bold text-neutral-50 mb-2">
                      DeluluJar
                    </h3>
                    <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                      A digital memory jar for couples. Save moments, revisit
                      memories, celebrate your love story.
                    </p>
                    <div className="flex items-center gap-2 text-rose-400 group-hover:gap-3 transition-all duration-300">
                      <span
                        className="text-sm font-medium"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        Explore
                      </span>
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              <a href="/ducky-bank" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-neutral-700/60 bg-neutral-800/50 backdrop-blur-sm p-6 h-full hover:border-amber-500/40 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-6 right-6">
                    <img
                      src="/static/icon-ducky-bank.png"
                      alt="DuckyBank"
                      className="w-16 h-16 rounded-xl shadow-xl shadow-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400"
                    />
                  </div>
                  <div className="relative pt-16">
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] text-amber-400/80 mb-1.5 block"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Personal Finance
                    </span>
                    <h3 className="text-xl font-bold text-neutral-50 mb-2">
                      DuckyBank
                    </h3>
                    <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                      Personal finance made fun. Track spending, set goals, and
                      watch your savings grow.
                    </p>
                    <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all duration-300">
                      <span
                        className="text-sm font-medium"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        Explore
                      </span>
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <footer
          className={`container mx-auto px-6 py-8 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 border-t border-neutral-700/50 pt-6">
            <p className="text-sm text-neutral-400">
              © 2025 AnyFikra. Built with care, one pixel at a time.
            </p>
            <div className="flex items-center gap-1 text-sm text-neutral-500">
              <span>Made with</span>
              <svg
                className="w-4 h-4 text-rose-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
