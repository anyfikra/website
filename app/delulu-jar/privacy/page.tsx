"use client";

import { useState, useEffect } from "react";

export default function DeluluPrivacyPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-3">Privacy Policy</h1>
            <p className="text-neutral-300">DeluluJar - Protecting Your Love Notes</p>
            <p className="text-xs text-neutral-500 mt-2">Last updated: December 2025</p>
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
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Our Commitment to Privacy</h2>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  At DeluluJar, we understand that your love notes and personal moments are deeply
                  private. We are committed to protecting your privacy and ensuring that your intimate
                  conversations with your partner remain completely secure and confidential.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Information We Collect</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-200 mb-1">Personal Information</h3>
                    <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                      <li>Email address (for account creation and authentication)</li>
                      <li>Basic profile information (nickname, relationship details from onboarding)</li>
                      <li>Love notes content (text, audio, images, videos you share)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-200 mb-1">Technical Information</h3>
                    <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                      <li>Device information and app usage analytics</li>
                      <li>Timestamps for synchronization between partners</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">How We Use Your Information</h2>
                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                  <li>Provide and maintain the DeluluJar service</li>
                  <li>Synchronize love notes between you and your partner</li>
                  <li>Authenticate your account and ensure security</li>
                  <li>Improve our app functionality and user experience</li>
                  <li>Send important service-related notifications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Data Security & Privacy</h2>
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-rose-300 mb-2">🔒 Your Love Notes Are Private</h3>
                  <ul className="list-disc list-inside text-rose-200/80 text-sm space-y-1">
                    <li>All notes are encrypted and stored securely in Firebase</li>
                    <li>Only you and your paired partner can access your shared jar</li>
                    <li>We never read, analyze, or share your personal content</li>
                    <li>Data is transmitted using industry-standard encryption</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Information Sharing</h2>
                <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                  <strong>We do not sell, trade, or share your personal information with third parties.</strong>{" "}
                  Your love notes remain private between you and your partner. We may only disclose information when:
                </p>
                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                  <li>Required by law or legal process</li>
                  <li>To protect the safety and security of our users</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Your Rights</h2>
                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and all associated data</li>
                  <li>Export your love notes (data portability)</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Data Retention</h2>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  We retain your love notes and account information as long as your account is active.
                  If you delete your account, we will permanently delete all your data within 30 days,
                  except where required by law to retain certain information.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Contact Us</h2>
                <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                  If you have any questions about this Privacy Policy or your data, please contact us:
                </p>
                <div className="bg-neutral-700/30 rounded-xl p-3">
                  <p className="text-neutral-300 text-sm">
                    <strong>Email:</strong> privacy@anyfikra.com
                    <br />
                    <strong>Subject:</strong> DeluluJar Privacy Inquiry
                  </p>
                </div>
              </section>
            </div>

            <div className="text-center mt-10">
              <a
                href="/delulu-jar"
                className="inline-flex items-center gap-2 bg-rose-500 text-white px-5 py-2.5 rounded-xl hover:bg-rose-400 transition-colors font-semibold text-sm"
              >
                ← Back to DeluluJar
              </a>
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
