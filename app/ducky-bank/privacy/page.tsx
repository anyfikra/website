import { Bird, ShieldCheck } from "lucide-react";
import AppFooter from "../../../components/AppFooter";
import PageShell from "../../../components/PageShell";
import SectionDivider from "../../../components/SectionDivider";

const ORBS = [
  {
    size: "w-[500px] h-[500px]",
    position: "top-0 left-1/4",
    color: "bg-amber-500/15",
    blur: "blur-[100px]",
  },
  {
    size: "w-[400px] h-[400px]",
    position: "bottom-0 right-1/4",
    color: "bg-yellow-500/15",
    blur: "blur-[80px]",
  },
];

export default function DuckyBankPrivacyPage() {
  return (
    <PageShell orbs={ORBS}>
      <section className="container mx-auto px-6 pt-16 pb-14">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-amber-500/40 rounded-2xl blur-xl" />
            <img
              src="/static/icon-ducky-bank.png"
              alt="Ducky Bank"
              className="relative w-20 h-20 rounded-2xl shadow-xl shadow-amber-500/30"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-2 font-syne">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 text-sm">
            Ducky Bank — Your Financial Privacy Matters
          </p>
          <p className="text-xs text-neutral-600 mt-2">
            Last updated: December 2025
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto animate-slide-up-delay-2">
          <div className="space-y-8">
            <div className="p-5 rounded-2xl border-2 border-amber-500/30 bg-amber-500/8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <h3 className="text-base font-bold text-amber-300 font-syne">
                  Offline-First &amp; Secure
                </h3>
              </div>
              <ul className="space-y-1.5 text-sm text-amber-200/70 leading-relaxed list-disc list-inside">
                <li>All data is stored locally on your device</li>
                <li>No financial data is transmitted to external servers</li>
                <li>Your transaction history never leaves your device</li>
                <li>Complete offline functionality — works without internet</li>
              </ul>
            </div>

            <div>
              <SectionDivider title="What We Collect" accentColor="amber" />
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-neutral-200 mb-2 font-syne">
                    Financial Data
                  </h3>
                  <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1 leading-relaxed">
                    <li>
                      Transaction records (income and expenses you manually
                      enter)
                    </li>
                    <li>Category preferences and custom categories</li>
                    <li>Budget goals and financial targets</li>
                    <li>Achievement progress and milestones</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-200 mb-2 font-syne">
                    App Preferences
                  </h3>
                  <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1 leading-relaxed">
                    <li>Language and theme preferences</li>
                    <li>App settings and customizations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-200 mb-2 font-syne">
                    Technical Information
                  </h3>
                  <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1 leading-relaxed">
                    <li>Device information and app performance data</li>
                    <li>Anonymized usage analytics to improve the app</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <SectionDivider title="How We Use It" accentColor="amber" />
              <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1.5 leading-relaxed">
                <li>
                  Provide transaction tracking and expense management features
                </li>
                <li>Generate spending reports and financial insights</li>
                <li>
                  Provide personalized duck insights and motivational messages
                </li>
                <li>
                  Track achievement progress and celebrate your financial
                  milestones
                </li>
                <li>Improve app performance and add new features</li>
              </ul>
            </div>

            <div>
              <SectionDivider title="Information Sharing" accentColor="amber" />
              <p className="text-neutral-400 text-sm leading-relaxed">
                <strong className="text-neutral-200">
                  We do not share, sell, or transmit your financial data.
                </strong>{" "}
                Since Ducky Bank operates offline-first, your financial
                information stays on your device. We may collect anonymized
                usage analytics to improve the app, but never personal financial
                details.
              </p>
            </div>

            <div>
              <SectionDivider title="Your Rights" accentColor="amber" />
              <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1.5 leading-relaxed">
                <li>Complete control over your data (stored on your device)</li>
                <li>Export your financial data at any time</li>
                <li>Delete all data by uninstalling the app</li>
                <li>Disable analytics collection in app settings</li>
              </ul>
            </div>

            <div>
              <SectionDivider title="Data Backup" accentColor="amber" />
              <p className="text-neutral-400 text-sm leading-relaxed">
                Since data is stored locally, we recommend regular device
                backups to protect your financial records. Future updates may
                include optional cloud backup with end-to-end encryption, but
                currently all data remains on your device for maximum privacy.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-800/50 border-2 border-neutral-700/50">
              <h3 className="text-base font-semibold text-neutral-200 mb-1 font-syne">
                Questions?
              </h3>
              <p className="text-neutral-500 text-sm">
                Email us at{" "}
                <a
                  href="mailto:privacy@anyfikra.com"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  privacy@anyfikra.com
                </a>{" "}
                with subject: <em>Ducky Bank Privacy Inquiry</em>
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="/ducky-bank"
              className="inline-flex items-center gap-2 bg-amber-500 text-neutral-900 px-5 py-2.5 rounded-xl hover:bg-amber-400 transition-colors font-semibold text-sm font-syne"
            >
              ← Back to Ducky Bank
            </a>
          </div>
        </div>
      </section>

      <AppFooter
        privacyHref="/ducky-bank/privacy"
        contactHref="/ducky-bank/contact"
        contactIcon={<Bird className="w-3 h-3" />}
        accentHoverClass="hover:text-amber-400"
        footerNote={
          <>
            © 2025 AnyFikra. Made with <Bird className="w-3 h-3 inline" />
          </>
        }
      />
    </PageShell>
  );
}
