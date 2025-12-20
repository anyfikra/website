"use client";

import { useState, useEffect } from "react";

export default function DuckyBankPrivacyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-500/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative">
        <header
          className={`container mx-auto px-6 py-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <a
            href="/ducky-bank"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
              Back to Ducky Bank
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
              <div className="absolute inset-0 bg-amber-500/40 rounded-2xl blur-xl" />
              <img
                src="/static/icon-ducky-bank.png"
                alt="Ducky Bank"
                className="relative w-16 h-16 rounded-2xl shadow-xl shadow-amber-500/30"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-3">Privacy Policy</h1>
            <p className="text-neutral-300">Ducky Bank - Your Financial Privacy Matters</p>
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
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Our Commitment to Your Financial Privacy</h2>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  At Ducky Bank, we understand that your financial information is sensitive and personal.
                  We are committed to protecting your privacy and keeping your financial data secure while
                  helping you achieve your money management goals.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Information We Collect</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-200 mb-1">Financial Data</h3>
                    <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                      <li>Transaction records (income and expenses you manually enter)</li>
                      <li>Category preferences and custom categories</li>
                      <li>Budget goals and financial targets</li>
                      <li>Achievement progress and milestones</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-200 mb-1">App Preferences</h3>
                    <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                      <li>Language and theme preferences</li>
                      <li>App settings and customizations</li>
                      <li>Duck message preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-200 mb-1">Technical Information</h3>
                    <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                      <li>Device information and app performance data</li>
                      <li>Usage analytics to improve app functionality</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">How We Use Your Information</h2>
                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                  <li>Provide transaction tracking and expense management features</li>
                  <li>Generate spending reports and financial insights</li>
                  <li>Sync your data across devices (locally stored)</li>
                  <li>Provide personalized duck insights and motivational messages</li>
                  <li>Track achievement progress and celebrate your financial milestones</li>
                  <li>Improve app performance and add new features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Data Storage & Security</h2>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-amber-300 mb-2">🦆 Offline-First & Secure</h3>
                  <ul className="list-disc list-inside text-amber-200/80 text-sm space-y-1">
                    <li>All data is stored locally on your device</li>
                    <li>No financial data is transmitted to external servers</li>
                    <li>Your transaction history never leaves your device</li>
                    <li>Complete offline functionality - works without internet</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Information Sharing</h2>
                <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                  <strong>We do not share, sell, or transmit your financial data to any third parties.</strong>{" "}
                  Since Ducky Bank operates offline-first, your financial information stays on your device.
                  We may only collect anonymized usage analytics to improve the app experience, but never personal financial details.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Your Rights</h2>
                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                  <li>Complete control over your data (it's stored on your device)</li>
                  <li>Export your financial data at any time</li>
                  <li>Delete all data by uninstalling the app</li>
                  <li>Disable analytics collection in app settings</li>
                  <li>Access to all data stored locally on your device</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Multi-Language Support</h2>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Ducky Bank supports multiple languages (English, French, Spanish, Japanese, Russian).
                  Language preferences are stored locally and do not involve data transmission to external servers.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Data Backup & Recovery</h2>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Since data is stored locally, we recommend regular device backups to protect your financial records.
                  Future updates may include optional cloud backup features with end-to-end encryption,
                  but currently all data remains on your device for maximum privacy.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-neutral-50 mb-3">Analytics & Improvements</h2>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  We may collect anonymized usage statistics to understand how the app is used and improve features.
                  This includes things like which screens are visited most often and app performance metrics,
                  but never includes your actual transaction data or amounts.
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
                    <strong>Subject:</strong> Ducky Bank Privacy Inquiry
                  </p>
                </div>
              </section>
            </div>

            <div className="text-center mt-10">
              <a
                href="/ducky-bank"
                className="inline-flex items-center gap-2 bg-amber-500 text-neutral-900 px-5 py-2.5 rounded-xl hover:bg-amber-400 transition-colors font-semibold text-sm"
              >
                ← Back to Ducky Bank
              </a>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-6 border-t border-neutral-700/50">
          <p className="text-center text-sm text-neutral-500">
            © 2025 AnyFikra. Made with 🦆
          </p>
        </footer>
      </div>
    </main>
  );
}
