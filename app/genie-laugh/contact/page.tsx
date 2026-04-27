import { Mail, Lightbulb, Sparkles } from "lucide-react";
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

const FAQ = [
  {
    q: "How does the Ninja Camera work?",
    a: "When your friend watches the video, the front camera secretly records their reactions. Photo mode captures every 2s; video mode records continuously in 1080p.",
  },
  {
    q: "Can the results be saved or screenshotted?",
    a: "No! Screenshot blocking is enabled on results screens (Android), and there's no save-to-gallery option. Pranks stay harmless and in the moment.",
  },
  {
    q: "What are the Instagram and TikTok themes?",
    a: "We've recreated pixel-perfect interfaces that look exactly like real Reels and TikTok. Your friend will think they're watching a normal video!",
  },
  {
    q: "How does the coin system work?",
    a: "Photo pranks cost 10 coins, video pranks cost 20. You get 50 coins on signup and can earn more by watching rewarded ads (+10 each).",
  },
  {
    q: "What languages are supported?",
    a: "Genie Laugh supports 6 languages: English, Arabic (with RTL), Spanish, French, Japanese, and Chinese.",
  },
  {
    q: "How do I end the prank?",
    a: "Long-press anywhere on the screen to stop recording and view the captured reactions. The gotcha moment is the best part!",
  },
];

export default function GenieLaughContactPage() {
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
            Contact Us
          </h1>
          <p className="text-neutral-400 text-sm">
            We&apos;re here to help with your prank questions
          </p>
          <p className="text-sm bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-medium mt-2 font-syne">
            &ldquo;Capture priceless reactions&rdquo;
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto animate-slide-up-delay-2">
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="p-5 rounded-2xl border-[3px] border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-300">
              <Mail className="w-7 h-7 text-cyan-400 mb-4" />
              <h2 className="text-lg font-bold text-neutral-50 mb-2 font-syne">
                Need Support?
              </h2>
              <p className="text-neutral-400 text-base mb-4 leading-relaxed">
                Having trouble with the genie? We&apos;re here to help you
                capture those laughs!
              </p>
              <div className="space-y-1.5 text-sm text-neutral-500">
                <p>support@anyfikra.com</p>
                <p>Response within 24 hours</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl border-[3px] border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-300">
              <Lightbulb className="w-7 h-7 text-cyan-400 mb-4" />
              <h2 className="text-lg font-bold text-neutral-50 mb-2 font-syne">
                Feature Requests
              </h2>
              <p className="text-neutral-400 text-base mb-4 leading-relaxed">
                Ideas for new prank features or themes? We&apos;d love to hear
                them!
              </p>
              <div className="space-y-1.5 text-sm text-neutral-500">
                <p>features@anyfikra.com</p>
                <p>Share your prank ideas</p>
              </div>
            </div>
          </div>

          <SectionDivider
            title="Frequently Asked Questions"
            accentColor="cyan"
          />

          <div className="space-y-3 mb-12">
            {FAQ.map(({ q, a }) => (
              <div
                key={q}
                className="flex items-start gap-3 p-4 rounded-xl border-2 border-neutral-700/50 bg-neutral-800/30 hover:bg-neutral-800/60 hover:border-neutral-600/60 transition-all duration-300"
              >
                <div>
                  <h3 className="font-semibold text-neutral-100 text-base font-syne mb-0.5">
                    {q}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {a}
                  </p>
                </div>
              </div>
            ))}
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
