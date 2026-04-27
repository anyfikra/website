import {
  BarChart2,
  Bird,
  CreditCard,
  Globe,
  PlusCircle,
  Trophy,
} from "lucide-react";
import SectionDivider from "../../components/SectionDivider";
import FeatureCard from "../../components/FeatureCard";
import FeatureCheckItem from "../../components/FeatureCheckItem";
import HowItWorksStep from "../../components/HowItWorksStep";
import StoreButton from "../../components/StoreButton";
import AppFooter from "../../components/AppFooter";
import AppNavBar from "../../components/AppNavBar";
import AppScreenshots from "../../components/AppScreenshots";
import PageShell from "../../components/PageShell";

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

const HOW_IT_WORKS = [
  {
    icon: <PlusCircle className="w-5 h-5 text-amber-400" />,
    title: "Add Entry",
    description: "Log income or expense in seconds",
  },
  {
    icon: <CreditCard className="w-5 h-5 text-amber-400" />,
    title: "Pick Category",
    description: "Assign a custom category with icon",
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-amber-400" />,
    title: "View Reports",
    description: "See daily, weekly, monthly charts",
  },
  {
    icon: <Trophy className="w-5 h-5 text-amber-400" />,
    title: "Earn Rewards",
    description: "Unlock duck achievements as you save",
  },
];

const FEATURES = [
  { title: "Category Management", desc: "Custom categories with visual icons" },
  { title: "Dark Mode Support", desc: "Beautiful theme with auto switching" },
  { title: "Offline-First", desc: "Works without internet" },
  { title: "Duck Insights", desc: "Tips from your duck guide" },
  { title: "Transaction History", desc: "Filter and search all entries" },
  { title: "Budget Tracking", desc: "Monthly budgets (coming soon)" },
];

export default function DuckyBankPage() {
  return (
    <PageShell orbs={ORBS}>
      <AppNavBar
        privacyHref="/ducky-bank/privacy"
        contactHref="/ducky-bank/contact"
        accentHoverClass="hover:text-amber-400"
        accentBorderHoverClass="hover:border-amber-500/50"
      />
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-5">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-amber-500/40 rounded-2xl blur-xl" />
              <img
                src="/static/icon-ducky-bank.png"
                alt="DuckyBank"
                className="relative w-20 h-20 rounded-2xl shadow-xl shadow-amber-500/30"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-2 font-syne">
                Ducky Bank
              </h1>
              <p className="text-base bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent font-medium mb-3 font-syne">
                &ldquo;Quack your way to financial freedom!&rdquo;
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                A simple yet powerful expense manager with a rubber duck as your
                financial guide. Track spending, manage budgets, and build
                better habits.
              </p>
            </div>
          </div>
          <div className="flex flex-row md:flex-col gap-3 flex-shrink-0">
            <StoreButton
              store="android"
              href="https://play.google.com/store/apps/details?id=com.duckybank"
              accentColor="amber"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
          <FeatureCard
            icon={<CreditCard className="w-7 h-7 text-amber-400" />}
            title="Quick Entry"
            description="Fast recording with smart categorization."
            accentColor="amber-500"
          />
          <FeatureCard
            icon={<BarChart2 className="w-7 h-7 text-amber-400" />}
            title="Visual Reports"
            description="Daily, weekly, monthly breakdowns."
            accentColor="amber-500"
          />
          <FeatureCard
            icon={<Trophy className="w-7 h-7 text-amber-400" />}
            title="Achievements"
            description="Gamified with duck messages."
            accentColor="amber-500"
          />
          <FeatureCard
            icon={<Globe className="w-7 h-7 text-amber-400" />}
            title="Multi-Language"
            description="EN, FR, ES, JP, RU support."
            accentColor="amber-500"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <SectionDivider title="Screenshots" accentColor="amber" />
        </div>
        <AppScreenshots app="ducky-bank" accentRingClass="ring-amber-500/40" />
      </section>

      <section className="container mx-auto px-6 pb-12">
        <div className="animate-slide-up-delay-2">
          <div className="max-w-4xl mx-auto mb-14">
            <SectionDivider title="Features" accentColor="amber" />
            <div className="grid md:grid-cols-2 gap-3">
              {FEATURES.map(({ title, desc }) => (
                <FeatureCheckItem
                  key={title}
                  title={title}
                  description={desc}
                  checkColor="text-amber-400"
                />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-14">
            <SectionDivider title="How It Works" accentColor="amber" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {HOW_IT_WORKS.map(({ icon, title, description }, i) => (
                <HowItWorksStep
                  key={title}
                  icon={icon}
                  title={title}
                  description={description}
                  step={i + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <AppFooter
        footerNote={
          <>
            © 2025 AnyFikra. Made with <Bird className="w-3 h-3 inline" />
          </>
        }
      />
    </PageShell>
  );
}
