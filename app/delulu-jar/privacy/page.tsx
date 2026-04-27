import { Heart, ShieldCheck } from "lucide-react";
import AppFooter from "../../../components/AppFooter";
import PageShell from "../../../components/PageShell";
import SectionDivider from "../../../components/SectionDivider";

const ORBS = [
  {
    size: "w-[500px] h-[500px]",
    position: "top-0 right-1/4",
    color: "bg-rose-500/15",
    blur: "blur-[100px]",
  },
  {
    size: "w-[400px] h-[400px]",
    position: "bottom-0 left-1/4",
    color: "bg-pink-500/15",
    blur: "blur-[80px]",
  },
];

export default function DeluluPrivacyPage() {
  return (
    <PageShell orbs={ORBS}>
      <section className="container mx-auto px-6 pt-16 pb-14">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-rose-500/40 rounded-2xl blur-xl" />
            <img
              src="/static/icon-delulu-jar.png"
              alt="DeluluJar"
              className="relative w-20 h-20 rounded-2xl shadow-xl shadow-rose-500/30"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-2 font-syne">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 text-sm">
            DeluluJar — Protecting Your Love Notes
          </p>
          <p className="text-xs text-neutral-600 mt-2">
            Last updated: December 2025
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto animate-slide-up-delay-2">
          <div className="space-y-8">
            <div className="p-5 rounded-2xl border-2 border-rose-500/30 bg-rose-500/8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <h3 className="text-base font-bold text-rose-300 font-syne">
                  Your Love Notes Are Private
                </h3>
              </div>
              <ul className="space-y-1.5 text-sm text-rose-200/70 leading-relaxed list-disc list-inside">
                <li>
                  Only you and your paired partner can access your shared jar
                </li>
                <li>We never read, analyze, or share your personal content</li>
                <li>Data is transmitted using industry-standard encryption</li>
              </ul>
            </div>

            <div>
              <SectionDivider title="What We Collect" accentColor="rose" />
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-neutral-200 mb-2 font-syne">
                    Personal Information
                  </h3>
                  <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1 leading-relaxed">
                    <li>
                      Email address (for account creation and authentication)
                    </li>
                    <li>
                      Basic profile information (nickname, relationship details)
                    </li>
                    <li>
                      Love notes content (text you share with your partner)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-200 mb-2 font-syne">
                    Technical Information
                  </h3>
                  <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1 leading-relaxed">
                    <li>Device information and app usage analytics</li>
                    <li>Timestamps for synchronization between partners</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <SectionDivider title="How We Use It" accentColor="rose" />
              <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1.5 leading-relaxed">
                <li>Provide and maintain the DeluluJar service</li>
                <li>Synchronize love notes between you and your partner</li>
                <li>Authenticate your account and ensure security</li>
                <li>Improve our app functionality and user experience</li>
                <li>Send important service-related notifications</li>
              </ul>
            </div>

            <div>
              <SectionDivider title="Information Sharing" accentColor="rose" />
              <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                <strong className="text-neutral-200">
                  We do not sell, trade, or share your personal information.
                </strong>{" "}
                Your love notes remain private between you and your partner. We
                may only disclose information when:
              </p>
              <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1 leading-relaxed">
                <li>Required by law or legal process</li>
                <li>To protect the safety and security of our users</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div>
              <SectionDivider title="Your Rights" accentColor="rose" />
              <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1.5 leading-relaxed">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and all associated data</li>
                <li>Export your love notes (data portability)</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>

            <div>
              <SectionDivider title="Data Retention" accentColor="rose" />
              <p className="text-neutral-400 text-sm leading-relaxed">
                We retain your data as long as your account is active. If you
                delete your account, all data is permanently deleted within 30
                days, except where required by law.
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
                  className="text-rose-400 hover:text-rose-300 transition-colors"
                >
                  privacy@anyfikra.com
                </a>{" "}
                with subject: <em>DeluluJar Privacy Inquiry</em>
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="/delulu-jar"
              className="inline-flex items-center gap-2 bg-rose-500 text-white px-5 py-2.5 rounded-xl hover:bg-rose-400 transition-colors font-semibold text-sm font-syne"
            >
              ← Back to DeluluJar
            </a>
          </div>
        </div>
      </section>

      <AppFooter
        privacyHref="/delulu-jar/privacy"
        contactHref="/delulu-jar/contact"
        contactIcon={<Heart className="w-3 h-3" />}
        accentHoverClass="hover:text-rose-400"
        footerNote="© 2025 AnyFikra. Made with love."
      />
    </PageShell>
  );
}
