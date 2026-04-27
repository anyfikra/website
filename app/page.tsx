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
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-200/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100/70 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-50/80 rounded-full blur-[140px]" />
      </div>

      <div className="relative">
        {/* Header */}
        <header
          className={`container mx-auto px-6 py-6 flex justify-between items-center transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex items-center gap-3">
            <img
              src="/static/logo.png"
              alt="AnyFikra"
              className="w-10 h-10 rounded-xl shadow-sm"
            />
            <span
              className="font-bold text-lg text-slate-800"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              AnyFikra
            </span>
          </div>
        </header>

        {/* Hero */}
        <section className="container mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <div
            className={`max-w-3xl transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p
              className="text-sky-500 text-base uppercase tracking-[0.25em] mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Independent App Studio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-[1.15] mb-5">
              Crafting apps
              <br />
              that feel{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent blur-xl opacity-50">
                  {words[currentWord]}
                </span>
                <span className="relative bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  {words[currentWord]}
                </span>
              </span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              One person. Big ideas. Small, thoughtful apps that solve real
              problems and bring a little joy to everyday life.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="container mx-auto px-6 pb-20">
          <div
            className={`transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-sky-200 to-transparent" />
              <h2
                className="text-sm uppercase tracking-[0.25em] text-slate-400"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                The Philosophy
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-sky-200 to-transparent" />
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              <div className="group">
                <div className="relative p-6 rounded-2xl border border-sky-100 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Lightbulb className="w-5 h-5 text-sky-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      Start with a question
                    </h3>
                    <p className="text-slate-500 text-base leading-relaxed">
                      Every app begins with "How can this be better?" Looking
                      for the human story behind every problem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group md:mt-6">
                <div className="relative p-6 rounded-2xl border border-sky-100 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-rose-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Heart className="w-5 h-5 text-rose-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      Built with care
                    </h3>
                    <p className="text-slate-500 text-base leading-relaxed">
                      Each app crafted with attention to every detail.
                      Respecting your time, protecting your privacy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative p-6 rounded-2xl border border-sky-100 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Sun className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      Honest & helpful
                    </h3>
                    <p className="text-slate-500 text-base leading-relaxed">
                      No dark patterns, no tricks. Just honest tools that solve
                      real problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apps */}
        <section className="container mx-auto px-6 pb-20">
          <div
            className={`transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-sky-200 to-transparent" />
              <h2
                className="text-sm uppercase tracking-[0.25em] text-slate-400"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Current Projects
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-sky-200 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {/* DeluluJar */}
              <a href="/delulu-jar" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-sm shadow-sm p-5 h-full hover:shadow-lg hover:border-rose-200 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50/70 via-pink-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-5 right-5">
                    <img
                      src="/static/icon-delulu-jar.png"
                      alt="DeluluJar"
                      className="w-14 h-14 rounded-xl shadow-md shadow-rose-200/60 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300"
                    />
                  </div>
                  <div className="relative pt-14">
                    <span
                      className="text-sm uppercase tracking-[0.25em] text-slate-400"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      For Couples
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mb-1.5">
                      DeluluJar
                    </h3>
                    <p className="text-slate-500 text-base mb-3 leading-relaxed">
                      A digital memory jar for couples. Save moments, celebrate
                      your love story.
                    </p>
                    <div className="flex items-center gap-2 text-rose-400 group-hover:gap-3 transition-all duration-300">
                      <span className="text-base font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>
                        Explore
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>

              {/* DuckyBank */}
              <a href="/ducky-bank" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-sm shadow-sm p-5 h-full hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/70 via-yellow-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-5 right-5">
                    <img
                      src="/static/icon-ducky-bank.png"
                      alt="DuckyBank"
                      className="w-14 h-14 rounded-xl shadow-md shadow-amber-200/60 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    />
                  </div>
                  <div className="relative pt-14">
                    <span
                      className="text-sm uppercase tracking-[0.25em] text-slate-400"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Personal Finance
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mb-1.5">
                      DuckyBank
                    </h3>
                    <p className="text-slate-500 text-base mb-3 leading-relaxed">
                      Personal finance made fun. Track spending and watch your
                      savings grow.
                    </p>
                    <div className="flex items-center gap-2 text-amber-500 group-hover:gap-3 transition-all duration-300">
                      <span className="text-base font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>
                        Explore
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Genie Laugh */}
              <a href="/genie-laugh" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-sm shadow-sm p-5 h-full hover:shadow-lg hover:border-cyan-200 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/70 via-sky-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-5 right-5">
                    <img
                      src="/static/icon-genie-laugh.png"
                      alt="Genie Laugh"
                      className="w-14 h-14 rounded-xl shadow-md shadow-cyan-200/60 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300"
                    />
                  </div>
                  <div className="relative pt-14">
                    <span
                      className="text-sm uppercase tracking-[0.25em] text-slate-400"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Prank App
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mb-1.5">
                      Genie Laugh
                    </h3>
                    <p className="text-slate-500 text-base mb-3 leading-relaxed">
                      Secretly capture hilarious reactions while friends watch
                      videos.
                    </p>
                    <div className="flex items-center gap-2 text-cyan-500 group-hover:gap-3 transition-all duration-300">
                      <span className="text-base font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>
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

        {/* Footer */}
        <footer
          className={`container mx-auto px-6 py-8 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 border-t border-sky-100 pt-6">
            <p className="text-sm text-slate-400">
              © 2025 AnyFikra. Built with care, one pixel at a time.
            </p>
            <div className="flex items-center gap-1 text-base text-slate-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
