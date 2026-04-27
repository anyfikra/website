import { Mail, Lightbulb } from "lucide-react";
import AppFooter from "../../../components/AppFooter";
import AppNavBar from "../../../components/AppNavBar";
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

const FAQ = [
  {
    q: "How do I pair with my partner?",
    a: "After creating your account, you'll receive a unique pairing code. Share it with your partner and they enter it during sign-up to connect your jars.",
  },
  {
    q: "How do I add a note to the jar?",
    a: 'Tap "Add Note", write your message, and hit "Drop in Jar". Your partner discovers it when they shake the jar for a random note.',
  },
  {
    q: "How do I open the jar to read notes?",
    a: "Tap or shake your device to open the jar and retrieve a random love note. Each opening is a delightful surprise!",
  },
  {
    q: "Can I add photos and videos?",
    a: "Currently text-only. Audio recordings, photos, and videos are coming in a future update.",
  },
  {
    q: "Can I see all our notes in one place?",
    a: "Yes! Check the History section to view all love notes chronologically, filtered by sent or received.",
  },
  {
    q: "Can I react to my partner's notes?",
    a: "Absolutely! React with emoji when you open a note to show your partner how their message made you feel.",
  },
  {
    q: "Is my data private and secure?",
    a: "Your data is private and secure. We never read your messages — they're stored securely using Firebase's industry-standard encryption.",
  },
];

export default function DeluluContactPage() {
  return (
    <PageShell orbs={ORBS}>
      <AppNavBar
        privacyHref="/delulu-jar/privacy"
        contactHref="/delulu-jar/contact"
        accentHoverClass="hover:text-rose-400"
        accentBorderHoverClass="hover:border-rose-500/50"
      />
      <section className="container mx-auto px-6 pt-8 pb-14">
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
            Contact Us
          </h1>
          <p className="text-neutral-400 text-sm">
            We&apos;re here to help you and your partner
          </p>
          <p className="text-sm bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent font-medium mt-2 font-syne">
            &ldquo;Love looks good on you&rdquo;
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto animate-slide-up-delay-2">
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="p-5 rounded-2xl border-[3px] border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-rose-500/50 transition-colors duration-300">
              <Mail className="w-7 h-7 text-rose-400 mb-4" />
              <h2 className="text-lg font-bold text-neutral-50 mb-2 font-syne">
                Need Support?
              </h2>
              <p className="text-neutral-400 text-base mb-4 leading-relaxed">
                Having trouble with your love jar? We&apos;re here to keep the
                romance flowing smoothly.
              </p>
              <div className="space-y-1.5 text-sm text-neutral-500">
                <p>support@anyfikra.com</p>
                <p>Response within 24 hours</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl border-[3px] border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-rose-500/50 transition-colors duration-300">
              <Lightbulb className="w-7 h-7 text-rose-400 mb-4" />
              <h2 className="text-lg font-bold text-neutral-50 mb-2 font-syne">
                Feature Requests
              </h2>
              <p className="text-neutral-400 text-base mb-4 leading-relaxed">
                Have an idea to make DeluluJar even more romantic? We love
                hearing from couples!
              </p>
              <div className="space-y-1.5 text-sm text-neutral-500">
                <p>features@anyfikra.com</p>
                <p>Share your love story ideas</p>
              </div>
            </div>
          </div>

          <SectionDivider
            title="Frequently Asked Questions"
            accentColor="rose"
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

      <AppFooter footerNote="© 2025 AnyFikra. Made with love." />
    </PageShell>
  );
}
