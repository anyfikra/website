"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Heart, Lightbulb, Sun } from "lucide-react";

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
              className="text-amber-400 text-base uppercase tracking-[0.25em] mb-4"
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
                className="text-sm uppercase tracking-[0.25em] text-neutral-400"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                The Philosophy
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-neutral-700 to-transparent" />
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              <div className="group">
                <div className="relative p-6 rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/25 to-orange-500/25 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-400">
                      <Lightbulb className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-50 mb-2">
                      Start with a question
                    </h3>
                    <p className="text-neutral-300 text-base leading-relaxed">
                      Every app begins with "How can this be better?" Looking
                      for the human story behind every problem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group md:mt-6">
                <div className="relative p-6 rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-rose-500/40 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500/25 to-pink-500/25 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-400">
                      <Heart className="w-5 h-5 text-rose-400" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-50 mb-2">
                      Built with care
                    </h3>
                    <p className="text-neutral-300 text-base leading-relaxed">
                      Each app crafted with attention to every detail.
                      Respecting your time, protecting your privacy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-6 rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-sky-500/40 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500/25 to-blue-500/25 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-400">
                      <Sun className="w-5 h-5 text-sky-400" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-50 mb-2">
                      Honest & helpful
                    </h3>
                    <p className="text-neutral-300 text-base leading-relaxed">
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
                className="text-sm uppercase tracking-[0.25em] text-neutral-400"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Current Projects
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-neutral-700 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <a href="/delulu-jar" className="group block">
                <div className="relative overflow-hidden rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/50 backdrop-blur-sm p-5 h-full hover:border-rose-500/40 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-5 right-5">
                    <img
                      src="/static/icon-delulu-jar.png"
                      alt="DeluluJar"
                      className="w-14 h-14 rounded-xl shadow-xl shadow-rose-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400"
                    />
                  </div>
                  <div className="relative pt-14">
                    <span
                      className="text-sm uppercase tracking-[0.25em] text-neutral-400"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      For Couples
                    </span>
                    <h3 className="text-lg font-bold text-neutral-50 mb-1.5">
                      DeluluJar
                    </h3>
                    <p className="text-neutral-300 text-base mb-3 leading-relaxed">
                      A digital memory jar for couples. Save moments, celebrate
                      your love story.
                    </p>
                    <div className="flex items-center gap-2 text-rose-400 group-hover:gap-3 transition-all duration-300">
                      <span
                        className="text-lg font-medium"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        Explore
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>

              <a href="/ducky-bank" className="group block">
                <div className="relative overflow-hidden rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/50 backdrop-blur-sm p-5 h-full hover:border-amber-500/40 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-5 right-5">
                    <img
                      src="/static/icon-ducky-bank.png"
                      alt="DuckyBank"
                      className="w-14 h-14 rounded-xl shadow-xl shadow-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400"
                    />
                  </div>
                  <div className="relative pt-14">
                    <span
                      className="text-sm uppercase tracking-[0.25em] text-neutral-400"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Personal Finance
                    </span>
                    <h3 className="text-lg font-bold text-neutral-50 mb-1.5">
                      DuckyBank
                    </h3>
                    <p className="text-neutral-300 text-base mb-3 leading-relaxed">
                      Personal finance made fun. Track spending and watch your
                      savings grow.
                    </p>
                    <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all duration-300">
                      <span
                        className="text-lg font-medium"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        Explore
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>

              <a href="/genie-laugh" className="group block">
                <div className="relative overflow-hidden rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/50 backdrop-blur-sm p-5 h-full hover:border-cyan-500/40 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-5 right-5">
                    <img
                      src="/static/icon-genie-laugh.png"
                      alt="Genie Laugh"
                      className="w-14 h-14 rounded-xl shadow-xl shadow-cyan-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400"
                    />
                  </div>
                  <div className="relative pt-14">
                    <span
                      className="text-sm uppercase tracking-[0.25em] text-neutral-400"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Prank App
                    </span>
                    <h3 className="text-lg font-bold text-neutral-50 mb-1.5">
                      Genie Laugh
                    </h3>
                    <p className="text-neutral-300 text-base mb-3 leading-relaxed">
                      Secretly capture hilarious reactions while friends watch
                      videos.
                    </p>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all duration-300">
                      <span
                        className="text-lg font-medium"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        Explore
                      </span>
                      <ArrowRight className="w-4 h-4" />
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 border-t-2 border-neutral-700/50 pt-6">
            <p className="text-sm text-neutral-400">
              © 2025 AnyFikra. Built with care, one pixel at a time.
            </p>
            <div className="flex items-center gap-1 text-base text-neutral-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
