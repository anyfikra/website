import {
  Dices,
  Heart,
  Lock,
  Mail,
  PackageOpen,
  PenLine,
  Users,
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

const HOW_IT_WORKS = [
  {
    icon: <Users className="w-5 h-5 text-rose-400" />,
    title: "Pair Up",
    description: "Connect with your partner",
  },
  {
    icon: <PenLine className="w-5 h-5 text-rose-400" />,
    title: "Add Notes",
    description: "Drop messages or photos",
  },
  {
    icon: <PackageOpen className="w-5 h-5 text-rose-400" />,
    title: "Open Jar",
    description: "Shake for a random note",
  },
  {
    icon: <Heart className="w-5 h-5 text-rose-400" />,
    title: "Share Love",
    description: "Build your love story",
  },
];

const FEATURES = [
  {
    title: "Two-Person Only",
    desc: "Built exclusively for you and your partner — no group chats, no noise",
  },
  {
    title: "Drop Anytime",
    desc: "Leave a note whenever inspiration strikes, they'll find it when they open the jar",
  },
  {
    title: "Random Reveals",
    desc: "Shake or tap to get a surprise note — never know which one you'll get",
  },
  {
    title: "Emoji Reactions",
    desc: "React to a note to let your partner know how it made you feel",
  },
  {
    title: "Note History",
    desc: "Browse all past notes chronologically, filter by sent or received",
  },
  {
    title: "Push Notifications",
    desc: "Get notified when your partner drops a new note in the jar",
  },
  {
    title: "Completely Private",
    desc: "Notes are only visible to the two of you — we never read your messages",
  },
  {
    title: "Works on iOS & Android",
    desc: "Cross-platform so both partners can use their preferred device",
  },
];

export default function DeluluPage() {
  return (
    <PageShell orbs={ORBS}>
      {/*
        DeluluJar's legal pages live on delulujar.com — this site used to carry
        its own copies and they drifted out of date. No contactHref: there is no
        contact page for this app any more.
      */}
      <AppNavBar
        privacyHref="https://delulujar.com/privacy"
        termsHref="https://delulujar.com/terms"
        accentHoverClass="hover:text-rose-400"
        accentBorderHoverClass="hover:border-rose-500/50"
      />
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-5">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-rose-500/40 rounded-2xl blur-xl" />
              <img
                src="/static/icon-delulu-jar.png"
                alt="DeluluJar"
                className="relative w-20 h-20 rounded-2xl shadow-xl shadow-rose-500/30"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-2 font-syne">
                DeluluJar
              </h1>
              <p className="text-base bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent font-medium mb-3 font-syne">
                &ldquo;Love looks good on you&rdquo;
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                A wholesome, private mobile app for couples to store and share
                little compliments, sweet thoughts, and fun &ldquo;delulu&rdquo;
                moments.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <div className="flex flex-row md:flex-col gap-3">
              <StoreButton
                store="ios"
                href="https://apps.apple.com/us/app/delulujar/id6751821045"
                accentColor="rose"
              />
              <StoreButton
                store="android"
                href="https://play.google.com/store/apps/details?id=com.delulujar"
                accentColor="rose"
              />
            </div>
            <StoreButton
              store="web"
              href="https://delulujar.com/"
              label="delulujar.com"
              accentColor="rose"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-14">
          <FeatureCard
            icon={<Mail className="w-7 h-7 text-rose-400" />}
            title="Digital Love Notes"
            description="Drop sweet messages, compliments, or fun thoughts — with a photo or a voice note attached."
            accentColor="rose-500"
          />
          <FeatureCard
            icon={<Dices className="w-7 h-7 text-rose-400" />}
            title="Random Surprises"
            description="Shake or tap to retrieve a random note. Each opening is a delightful surprise."
            accentColor="rose-500"
          />
          <FeatureCard
            icon={<Lock className="w-7 h-7 text-rose-400" />}
            title="Private & Secure"
            description="Only you and your partner can open your jar. Encrypted in transit and at rest."
            accentColor="rose-500"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <SectionDivider title="Screenshots" accentColor="rose" />
        </div>
        <AppScreenshots app="delulu-jar" accentRingClass="ring-rose-500/40" />
      </section>

      <section className="container mx-auto px-6 pb-12">
        <div className="animate-slide-up-delay-2">
          <div className="max-w-4xl mx-auto mb-14">
            <SectionDivider title="Features" accentColor="rose" />
            <div className="grid md:grid-cols-2 gap-3">
              {FEATURES.map(({ title, desc }) => (
                <FeatureCheckItem
                  key={title}
                  title={title}
                  description={desc}
                  checkColor="text-rose-400"
                />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-14">
            <SectionDivider title="How It Works" accentColor="rose" />
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

      <AppFooter footerNote="© 2025 AnyFikra. Made with love." />
    </PageShell>
  );
}
