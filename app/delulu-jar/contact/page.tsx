"use client";

import { useState, useEffect } from "react";

export default function DeluluContactPage() {
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
            href="/delulu-jar"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
              Back to DeluluJar
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
                className="relative w-16 h-16 rounded-2xl shadow-xl shadow-rose-500/30"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-3">Contact Us</h1>
            <p className="text-neutral-300">We're here to help you and your partner</p>
            <p className="text-sm bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent font-medium mt-2">
              "Love looks good on you"
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
                <div className="text-3xl mb-3">💕</div>
                <h2 className="text-lg font-bold text-neutral-50 mb-2">Need Support?</h2>
                <p className="text-neutral-300 text-sm mb-4">
                  Having trouble with your love jar? We're here to help you keep the romance flowing smoothly.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">📧</span>
                    <span className="text-neutral-300">support@anyfikra.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">⏰</span>
                    <span className="text-neutral-300">Response within 24 hours</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm">
                <div className="text-3xl mb-3">💡</div>
                <h2 className="text-lg font-bold text-neutral-50 mb-2">Feature Requests</h2>
                <p className="text-neutral-300 text-sm mb-4">
                  Have an idea to make DeluluJar even more romantic? We love hearing from couples!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">📧</span>
                    <span className="text-neutral-300">features@anyfikra.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">💭</span>
                    <span className="text-neutral-300">Share your love story ideas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm mb-10">
              <h2 className="text-xl font-bold text-neutral-50 mb-6 text-center">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <div className="border-l-2 border-rose-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">How do I pair with my partner?</h3>
                  <p className="text-neutral-400 text-sm">
                    After creating your account, you'll receive a unique pairing code. Share this code
                    with your partner, and they can enter it during their sign-up process to connect your jars together.
                  </p>
                </div>

                <div className="border-l-2 border-rose-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">How do I add a note to the jar?</h3>
                  <p className="text-neutral-400 text-sm">
                    Simply tap the "Add Note" button, write your sweet message, and hit "Drop in Jar".
                    Your partner will be able to discover it when they shake the jar for a random note.
                  </p>
                </div>

                <div className="border-l-2 border-rose-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">How do I open the jar to read notes?</h3>
                  <p className="text-neutral-400 text-sm">
                    Tap or shake your device to open the jar and retrieve a random love note from your
                    partner. Each opening is a delightful surprise!
                  </p>
                </div>

                <div className="border-l-2 border-rose-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">Can I add photos and videos to my notes?</h3>
                  <p className="text-neutral-400 text-sm">
                    As of now, we only support text. We will add audio recordings, photos, and videos in the future.
                  </p>
                </div>

                <div className="border-l-2 border-rose-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">Can I see all our notes in one place?</h3>
                  <p className="text-neutral-400 text-sm">
                    Yes! Check the History section to view all your love notes chronologically. You
                    can filter to see notes you've sent or received from your partner.
                  </p>
                </div>

                <div className="border-l-2 border-rose-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">Can I react to my partner's notes?</h3>
                  <p className="text-neutral-400 text-sm">
                    Absolutely! When you open a note, you can react with emoji to show your partner
                    how their message made you feel. It's a sweet way to acknowledge their love notes.
                  </p>
                </div>

                <div className="border-l-2 border-rose-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">Is my data private and secure?</h3>
                  <p className="text-neutral-400 text-sm">
                    Your data is private and secure. We never read your messages and they're stored
                    securely using Firebase's industry-standard security.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 text-center">
              <h2 className="text-lg font-bold text-neutral-50 mb-3">Still Need Help?</h2>
              <p className="text-neutral-300 text-sm mb-5">
                Our team is dedicated to helping couples strengthen their relationships through
                DeluluJar. Don't hesitate to reach out with any questions, concerns, or just to share your love story with us!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:support@anyfikra.com?subject=DeluluJar Support"
                  className="inline-flex items-center justify-center gap-2 bg-rose-500 text-white px-5 py-2.5 rounded-xl hover:bg-rose-400 transition-colors font-semibold text-sm"
                >
                  📧 Email Support
                </a>
                <a
                  href="/delulu-jar/privacy"
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
            © 2025 AnyFikra. Made with love.
          </p>
        </footer>
      </div>
    </main>
  );
}
