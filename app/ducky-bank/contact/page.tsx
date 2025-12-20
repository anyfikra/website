"use client";

import { useState, useEffect } from "react";

export default function DuckyBankContactPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-3">Contact Us</h1>
            <p className="text-neutral-300">Your friendly financial duck squad is here to help!</p>
            <p className="text-sm bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent font-medium mt-2">
              "Quack your way to financial freedom!"
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
                <div className="text-3xl mb-3">🦆</div>
                <h2 className="text-lg font-bold text-neutral-50 mb-2">Technical Support</h2>
                <p className="text-neutral-300 text-sm mb-4">
                  Having trouble tracking your expenses or need help with the app? Our duck squad is ready to assist!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">📧</span>
                    <span className="text-neutral-300">support@anyfikra.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">⏰</span>
                    <span className="text-neutral-300">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">🌍</span>
                    <span className="text-neutral-300">Available in 5 languages</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm">
                <div className="text-3xl mb-3">💡</div>
                <h2 className="text-lg font-bold text-neutral-50 mb-2">Feature Requests</h2>
                <p className="text-neutral-300 text-sm mb-4">
                  Got ideas to make Ducky Bank even better? We love hearing from our financial wellness community!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">📧</span>
                    <span className="text-neutral-300">features@anyfikra.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">🚀</span>
                    <span className="text-neutral-300">Help us build the future of finance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm mb-10">
              <h2 className="text-xl font-bold text-neutral-50 mb-6 text-center">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <div className="border-l-2 border-amber-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">How do I add a new transaction?</h3>
                  <p className="text-neutral-400 text-sm">
                    Simply tap the "+" button on your home screen, select whether it's income or expense,
                    choose a category, enter the amount and description, and save. It's that easy!
                  </p>
                </div>

                <div className="border-l-2 border-amber-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">Can I create custom categories?</h3>
                  <p className="text-neutral-400 text-sm">
                    Yes! Go to the category management screen and create custom categories with your own names and icons.
                    Perfect for tracking specific spending areas that matter to you.
                  </p>
                </div>

                <div className="border-l-2 border-amber-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">Does the app work offline?</h3>
                  <p className="text-neutral-400 text-sm">
                    Absolutely! Ducky Bank is designed to work completely offline. All your data is stored locally on your device,
                    so you can track expenses anywhere, anytime.
                  </p>
                </div>

                <div className="border-l-2 border-amber-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">How do I view my spending reports?</h3>
                  <p className="text-neutral-400 text-sm">
                    Navigate to the Reports tab to see beautiful visual breakdowns of your spending by day, week, and month.
                    Track your progress and identify spending patterns easily.
                  </p>
                </div>

                <div className="border-l-2 border-amber-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">What are duck achievements?</h3>
                  <p className="text-neutral-400 text-sm">
                    Our gamification system rewards you for building good financial habits! Complete challenges like
                    "Track expenses for 7 days" to unlock achievements and motivational duck messages.
                  </p>
                </div>

                <div className="border-l-2 border-amber-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">Can I export my data?</h3>
                  <p className="text-neutral-400 text-sm">
                    Yes! Contact our support team and we can help you export your transaction data.
                    Your financial records should always be accessible to you.
                  </p>
                </div>

                <div className="border-l-2 border-amber-500/50 pl-4">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-1">How do I switch languages?</h3>
                  <p className="text-neutral-400 text-sm">
                    Go to Settings and select your preferred language from English, French, Spanish, Japanese, or Russian.
                    The entire app will adapt to your chosen language.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-center mb-10">
              <h2 className="text-lg font-bold text-neutral-50 mb-3">Still Need Help? 🦆</h2>
              <p className="text-neutral-300 text-sm mb-5">
                Our rubber duck development team is passionate about helping you achieve financial wellness.
                Whether you need technical support, have feature ideas, or just want to share your success story, we'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:support@anyfikra.com?subject=Ducky Bank Support"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 text-neutral-900 px-5 py-2.5 rounded-xl hover:bg-amber-400 transition-colors font-semibold text-sm"
                >
                  📧 Email Support
                </a>
                <a
                  href="/ducky-bank/privacy"
                  className="inline-flex items-center justify-center gap-2 bg-neutral-800 text-neutral-100 px-5 py-2.5 rounded-xl hover:bg-neutral-700 transition-colors font-semibold text-sm border border-neutral-700"
                >
                  🔒 Privacy Policy
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm">
              <h3 className="text-base font-bold text-neutral-50 mb-4 text-center">Duck Tips for Better Support 🦆</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl mb-2">📱</div>
                  <p className="text-neutral-400 text-xs">Include your device model and app version when reporting issues</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📸</div>
                  <p className="text-neutral-400 text-xs">Screenshots help us understand and resolve problems faster</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-neutral-400 text-xs">Be specific about what you were trying to do when the issue occurred</p>
                </div>
              </div>
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
