import { Mail, Lightbulb, Bird } from "lucide-react";
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

const FAQ = [
  {
    q: "How do I add a new transaction?",
    a: 'Tap the "+" button, select income or expense, choose a category, enter the amount and description, then save.',
  },
  {
    q: "Can I create custom categories?",
    a: "Yes! Go to category management and create custom categories with your own names and icons.",
  },
  {
    q: "Does the app work offline?",
    a: "Absolutely! All data is stored locally on your device so you can track expenses anywhere, anytime.",
  },
  {
    q: "How do I view my spending reports?",
    a: "Navigate to the Reports tab to see visual breakdowns of your spending by day, week, and month.",
  },
  {
    q: "What are duck achievements?",
    a: 'Complete challenges like "Track expenses for 7 days" to unlock achievements and motivational duck messages.',
  },
  {
    q: "Can I export my data?",
    a: "Contact our support team and we can help you export your transaction data.",
  },
  {
    q: "How do I switch languages?",
    a: "Go to Settings and select your preferred language from English, French, Spanish, Japanese, or Russian.",
  },
];

export default function DuckyBankContactPage() {
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
            Contact Us
          </h1>
          <p className="text-neutral-400 text-sm">
            Your friendly financial duck squad is here to help!
          </p>
          <p className="text-sm bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent font-medium mt-2 font-syne">
            &ldquo;Quack your way to financial freedom!&rdquo;
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto animate-slide-up-delay-2">
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="p-5 rounded-2xl border-[3px] border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-amber-500/50 transition-colors duration-300">
              <Mail className="w-7 h-7 text-amber-400 mb-4" />
              <h2 className="text-lg font-bold text-neutral-50 mb-2 font-syne">
                Technical Support
              </h2>
              <p className="text-neutral-400 text-base mb-4 leading-relaxed">
                Having trouble tracking expenses? Our duck squad is ready to
                assist!
              </p>
              <div className="space-y-1.5 text-sm text-neutral-500">
                <p>support@anyfikra.com</p>
                <p>Response within 24 hours</p>
                <p>Available in 5 languages</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl border-[3px] border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm hover:border-amber-500/50 transition-colors duration-300">
              <Lightbulb className="w-7 h-7 text-amber-400 mb-4" />
              <h2 className="text-lg font-bold text-neutral-50 mb-2 font-syne">
                Feature Requests
              </h2>
              <p className="text-neutral-400 text-base mb-4 leading-relaxed">
                Ideas to make Ducky Bank even better? We love hearing from our
                community!
              </p>
              <div className="space-y-1.5 text-sm text-neutral-500">
                <p>features@anyfikra.com</p>
                <p>Help us build the future of finance</p>
              </div>
            </div>
          </div>

          <SectionDivider
            title="Frequently Asked Questions"
            accentColor="amber"
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
