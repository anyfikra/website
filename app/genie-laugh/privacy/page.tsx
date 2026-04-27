import { Sparkles, ShieldCheck } from "lucide-react";
import AppFooter from "../../../components/AppFooter";
import PageShell from "../../../components/PageShell";
import SectionDivider from "../../../components/SectionDivider";

const ORBS = [
  {
    size: "w-[500px] h-[500px]",
    position: "top-0 right-1/4",
    color: "bg-cyan-500/15",
    blur: "blur-[100px]",
  },
  {
    size: "w-[400px] h-[400px]",
    position: "bottom-0 left-1/4",
    color: "bg-violet-500/15",
    blur: "blur-[80px]",
  },
];

export default function GenieLaughPrivacyPage() {
  return (
    <PageShell orbs={ORBS}>
      <section className="container mx-auto px-6 pt-16 pb-14">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-cyan-500/40 rounded-2xl blur-xl" />
            <img
              src="/static/icon-genie-laugh.png"
              alt="Genie Laugh"
              className="relative w-20 h-20 rounded-2xl shadow-xl shadow-cyan-500/30"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-2 font-syne">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 text-sm">
            Genie Laugh — Ethical Fun by Design
          </p>
          <p className="text-xs text-neutral-600 mt-2">
            Last updated: December 2025
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto animate-slide-up-delay-2">
          <div className="space-y-8">
            <div className="p-5 rounded-2xl border-2 border-cyan-500/30 bg-cyan-500/8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <h3 className="text-base font-bold text-cyan-300 font-syne">
                  Built-in Ethical Protections
                </h3>
              </div>
              <ul className="space-y-1.5 text-sm text-cyan-200/70 leading-relaxed list-disc list-inside">
                <li>Screenshot blocking on results screens</li>
                <li>No save-to-gallery functionality for captured reactions</li>
                <li>Clear consent step before first use</li>
                <li>Onboarding explains ethical guidelines</li>
                <li>Captured content is temporary and session-based</li>
              </ul>
            </div>

            <div>
              <SectionDivider title="What We Use" accentColor="cyan" />
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-neutral-200 mb-2 font-syne">
                    Camera &amp; Media
                  </h3>
                  <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1 leading-relaxed">
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
                  <h3 className="text-base font-semibold text-neutral-200 mb-2 font-syne">
                    App Usage
                  </h3>
                  <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1 leading-relaxed">
                    <li>Coin balance and transaction history</li>
                    <li>App preferences and language settings</li>
                    <li>Anonymous analytics for app improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <SectionDivider title="How We Use It" accentColor="cyan" />
              <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1.5 leading-relaxed">
                <li>Provide the Genie Laugh prank functionality</li>
                <li>
                  Display fake social media UIs with your chosen profile picture
                </li>
                <li>Manage your coin balance and reward ads</li>
                <li>Improve app performance and fix bugs</li>
                <li>Support multiple languages and RTL layouts</li>
              </ul>
            </div>

            <div>
              <SectionDivider title="Data Security" accentColor="cyan" />
              <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1.5 leading-relaxed">
                <li>
                  Captured reactions are stored temporarily in app memory only
                </li>
                <li>No reaction content is uploaded to any server</li>
                <li>Profile pictures are stored locally on your device</li>
                <li>Coin data is synced securely for cross-device access</li>
              </ul>
            </div>

            <div>
              <SectionDivider title="Third-Party Services" accentColor="cyan" />
              <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1.5 leading-relaxed">
                <li>AdMob for rewarded advertisements (earn coins)</li>
                <li>Anonymous analytics for usage statistics</li>
              </ul>
            </div>

            <div>
              <SectionDivider title="Your Rights" accentColor="cyan" />
              <ul className="list-disc list-inside text-neutral-500 text-sm space-y-1.5 leading-relaxed">
                <li>Delete all app data by uninstalling the app</li>
                <li>
                  Revoke camera permissions at any time in device settings
                </li>
                <li>Reset coin balance by contacting support</li>
                <li>Request information about your data</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border-2 border-violet-500/30 bg-violet-500/8">
              <h3 className="text-base font-bold text-violet-300 mb-2 font-syne">
                Responsible Use
              </h3>
              <p className="text-violet-200/70 text-sm leading-relaxed">
                Genie Laugh is designed for harmless fun between friends. Users
                must acknowledge our ethical guidelines before using the app.
                Always reveal the prank afterward!
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
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  privacy@anyfikra.com
                </a>{" "}
                with subject: <em>Genie Laugh Privacy Inquiry</em>
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="/genie-laugh"
              className="inline-flex items-center gap-2 bg-cyan-500 text-neutral-900 px-5 py-2.5 rounded-xl hover:bg-cyan-400 transition-colors font-semibold text-sm font-syne"
            >
              ← Back to Genie Laugh
            </a>
          </div>
        </div>
      </section>

      <AppFooter
        privacyHref="/genie-laugh/privacy"
        contactHref="/genie-laugh/contact"
        contactIcon={<Sparkles className="w-3 h-3" />}
        accentHoverClass="hover:text-cyan-400"
        footerNote={
          <>
            © 2025 AnyFikra. Made with <Sparkles className="w-3 h-3 inline" />
          </>
        }
      />
    </PageShell>
  );
}
