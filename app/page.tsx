"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["meaningful", "delightful", "personal", "simple"];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => {
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-200 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-yellow-200 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 py-12 relative">
        {/* Simple header */}
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-3">
            <img
              src="/static/logo.png"
              alt="AnyFikra"
              className="w-12 h-12 rounded-xl shadow-soft"
            />
            <span className="font-bold text-xl text-neutral-800">AnyFikra</span>
          </div>
        </header>

        {/* Hero section */}
        <div id="story" className="max-w-6xl mx-auto mb-32">
          <h2 className="text-3xl font-bold text-center mb-16 text-neutral-900">What I do</h2>

          {/* Creative story layout */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Story card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-neutral-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-50 rounded-bl-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  It starts with a question
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Every app begins the same way: "How can I make this better?" Whether it's staying
                  organized or making finance less scary, I'm always looking for the human story
                  behind the problem.
                </p>
              </div>
            </div>

            {/* Story card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-neutral-100 relative overflow-hidden lg:mt-12">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-bl-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Built with love & care</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Each app is a labor of love, crafted in my spare time with attention to every
                  detail. I focus on experiences that respect your time, protect your privacy, and
                  maybe even bring a smile to your face.
                </p>
              </div>
            </div>

            {/* Story card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-neutral-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Honest & helpful</h3>
                <p className="text-neutral-600 leading-relaxed">
                  No unnecessary features, no dark patterns, no tricks. Just honest, helpful tools
                  that solve problems. If my apps make your daily life a little bit easier, that's
                  all the success I need.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Apps showcase */}
        <div id="apps" className="max-w-5xl mx-auto mb-32">
          <h2 className="text-3xl font-bold text-center mb-16 text-neutral-900">
            Current Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* DeluluJar */}
            <a href="/delulu-jar" className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 border border-neutral-100">
                <div className="flex items-start gap-6">
                  <img
                    src="/static/icon-delulu-jar.png"
                    alt="DeluluJar"
                    className="w-20 h-20 rounded-2xl shadow-sm"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">DeluluJar</h3>
                    <p className="text-neutral-600 mb-4">A digital memory jar for couples</p>
                    <div className="inline-flex items-center gap-2 text-pink-600 font-medium group-hover:gap-3 transition-all">
                      <span>Learn more</span>
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* DuckyBank */}
            <a href="/ducky-bank" className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 border border-neutral-100">
                <div className="flex items-start gap-6">
                  <img
                    src="/static/icon-ducky-bank.png"
                    alt="DuckyBank"
                    className="w-20 h-20 rounded-2xl shadow-sm"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">DuckyBank</h3>
                    <p className="text-neutral-600 mb-4">Personal finance made fun</p>
                    <div className="inline-flex items-center gap-2 text-yellow-600 font-medium group-hover:gap-3 transition-all">
                      <span>Learn more</span>
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-neutral-500">
          <p>© 2025 AnyFikra. Built with care, one pixel at a time.</p>
        </footer>
      </div>
    </main>
  );
}
