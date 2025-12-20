"use client";

import { useState, useEffect } from "react";

export default function GenieLaughPrivacyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative">
        <header
          className={`container mx-auto px-6 py-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <a
            href="/genie-laugh"
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
              Back to Genie Laugh
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
              <div className="absolute inset-0 bg-cyan-500/40 rounded-2xl blur-xl" />
              <img
                src="/static/icon-genie-laugh.png"
                alt="Genie Laugh"
                className="relative w-16 h-16 rounded-2xl shadow-xl shadow-cyan-500/30"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-3">
              Privacy Policy
            </h1>
            <p className="text-neutral-300">
              Genie Laugh - Ethical Fun by Design
            </p>
            <p className="text-xs text-neutral-500 mt-2">
              Last updated: December 2025
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-14">
          <div
            className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="p-6 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm space-y-8">
              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">
                  Our Commitment to Privacy
                </h2>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Genie Laugh is designed with privacy and ethics at its core.
                  We understand that prank apps require special care, which is
                  why we've built in multiple safeguards to ensure the app is
                  used responsibly and all captured content remains private.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">
                  Information We Use (Not Collected)
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-200 mb-1">
                      Camera & Media
                    </h3>
                    <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                      <li>
                        Front camera access (only during active prank sessions)
                      </li>
                      <li>Videos you import from your gallery for pranks</li>
                      <li>
                        Custom profile pictures you upload for fake UI themes
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-200 mb-1">
                      App Usage
                    </h3>
                    <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                      <li>Coin balance and transaction history</li>
                      <li>App preferences and language settings</li>
                      <li>Anonymous analytics for app improvement</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">
                  Ethical Safeguards
                </h2>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-cyan-300 mb-2">
                    🛡️ Built-in Protections
                  </h3>
                  <ul className="list-disc list-inside text-cyan-200/80 text-sm space-y-1">
                    <li>Screenshot blocking on results screens</li>
                    <li>
                      No save-to-gallery functionality for captured reactions
                    </li>
                    <li>Clear consent step before first use</li>
                    <li>Onboarding explains ethical guidelines</li>
                    <li>Captured content is temporary and session-based</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                  <li>Provide the Genie Laugh prank functionality</li>
                  <li>
                    Display fake social media UIs with your chosen profile
                    picture
                  </li>
                  <li>Manage your coin balance and reward ads</li>
                  <li>Improve app performance and fix bugs</li>
                  <li>Support multiple languages and RTL layouts</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">
                  Data Security
                </h2>
                <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                  We take data security seriously:
                </p>
                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                  <li>
                    Captured reactions are stored temporarily in app memory only
                  </li>
                  <li>No reaction content is uploaded to any server</li>
                  <li>Profile pictures are stored locally on your device</li>
                  <li>Coin data is synced securely for cross-device access</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">
                  Third-Party Services
                </h2>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  We use the following third-party services:
                </p>
                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1 mt-2">
                  <li>AdMob for rewarded advertisements (earn coins)</li>
                  <li>Analytics for anonymous usage statistics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">
                  Your Rights
                </h2>
                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                  <li>Delete all app data by uninstalling the app</li>
                  <li>Revoke camera permissions at any time</li>
                  <li>Reset coin balance by contacting support</li>
                  <li>Request information about your data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">
                  Responsible Use
                </h2>
                <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4">
                  <p className="text-violet-200/80 text-sm">
                    <strong>Important:</strong> Genie Laugh is designed for
                    harmless fun between friends. Users must acknowledge our
                    ethical guidelines before using the app. We encourage
                    pranking responsibly and always revealing the prank to your
                    friend afterward!
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">
                  Contact Us
                </h2>
                <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                  Questions about this Privacy Policy or your data? Contact us:
                </p>
                <div className="bg-neutral-700/30 rounded-xl p-3">
                  <p className="text-neutral-300 text-sm">
                    <strong>Email:</strong> privacy@anyfikra.com
                    <br />
                    <strong>Subject:</strong> Genie Laugh Privacy Inquiry
                  </p>
                </div>
              </section>
            </div>

            <div className="text-center mt-10">
              <a
                href="/genie-laugh"
                className="inline-flex items-center gap-2 bg-cyan-500 text-neutral-900 px-5 py-2.5 rounded-xl hover:bg-cyan-400 transition-colors font-semibold text-sm"
              >
                ← Back to Genie Laugh
              </a>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-6 border-t border-neutral-700/50">
          <p className="text-center text-sm text-neutral-500">
            © 2025 AnyFikra. Made with 🧞
          </p>
        </footer>
      </div>
    </main>
  );
}
