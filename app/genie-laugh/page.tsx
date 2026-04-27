import {
  Download,
  EyeOff,
  Layers,
  PartyPopper,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Theater,
} from "lucide-react";
import SectionDivider from "../../components/SectionDivider";
import FeatureCard from "../../components/FeatureCard";
import HowItWorksStep from "../../components/HowItWorksStep";
import FeatureCheckItem from "../../components/FeatureCheckItem";
import StoreButton from "../../components/StoreButton";
import AppFooter from "../../components/AppFooter";
import AppNavBar from "../../components/AppNavBar";
import AppScreenshots from "../../components/AppScreenshots";
import PageShell from "../../components/PageShell";

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

const HOW_IT_WORKS = [
  {
    icon: <Download className="w-5 h-5 text-cyan-400" />,
    title: "Import Video",
    desc: "Select any funny video",
  },
  {
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    title: "Pick Theme",
    desc: "Instagram or TikTok style",
  },
  {
    icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
    title: "Hand Over",
    desc: "Give to your friend",
  },
  {
    icon: <PartyPopper className="w-5 h-5 text-cyan-400" />,
    title: "Gotcha!",
    desc: "Reveal their reactions",
  },
];

const FEATURES = [
  {
    title: "Photo & Video Modes",
    desc: "Capture shots every 2s or record 1080p video",
  },
  {
    title: "Custom Profile Pics",
    desc: "Make the fake UI even more convincing",
  },
  { title: "Coin Economy", desc: "Fair system with rewarded ads" },
  { title: "6 Languages", desc: "EN, AR, ES, FR, JP, ZH with RTL support" },
  { title: "Screenshot Blocking", desc: "Prevents saving on results screen" },
  { title: "Neubrutalism Design", desc: "Bold, playful, and colorful UI" },
];

export default function GenieLaughPage() {
  return (
    <PageShell orbs={ORBS}>
      <AppNavBar
        privacyHref="/genie-laugh/privacy"
        contactHref="/genie-laugh/contact"
        accentHoverClass="hover:text-cyan-400"
        accentBorderHoverClass="hover:border-cyan-500/50"
      />
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-5">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-cyan-500/40 rounded-2xl blur-xl" />
              <img
                src="/static/icon-genie-laugh.png"
                alt="Genie Laugh"
                className="relative w-20 h-20 rounded-2xl shadow-xl shadow-cyan-500/30"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-2 font-syne">
                Genie Laugh
              </h1>
              <p className="text-base bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-medium mb-3 font-syne">
                &ldquo;Capture priceless reactions&rdquo;
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                A playful prank app that secretly captures your friend&apos;s
                hilarious reactions while they watch a video. They&apos;ll never
                know the front camera is recording!
              </p>
            </div>
          </div>
          <div className="flex flex-row md:flex-col gap-3 flex-shrink-0">
            <StoreButton
              store="ios"
              href="https://apps.apple.com/us/app/genie-laugh/id6756788441"
              accentColor="cyan"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-14">
          <FeatureCard
            icon={<EyeOff className="w-7 h-7 text-cyan-400" />}
            title="Ninja Camera"
            description="Secretly records reactions while your friend watches videos. Photo or video mode."
            accentColor="cyan-500"
          />
          <FeatureCard
            icon={<Theater className="w-7 h-7 text-cyan-400" />}
            title="Fake UI Themes"
            description="Pixel-perfect Instagram Reels and TikTok interfaces. They won't suspect a thing!"
            accentColor="cyan-500"
          />
          <FeatureCard
            icon={<ShieldCheck className="w-7 h-7 text-cyan-400" />}
            title="Ethical by Design"
            description="No saving or screenshots allowed. Built for harmless fun with clear consent."
            accentColor="cyan-500"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <SectionDivider title="Screenshots" accentColor="cyan" />
        </div>
        <AppScreenshots app="genie-laugh" accentRingClass="ring-cyan-500/40" />
      </section>

      <section className="container mx-auto px-6 pb-12">
        <div className="animate-slide-up-delay-2">
          <div className="max-w-4xl mx-auto mb-14">
            <SectionDivider title="Features" accentColor="cyan" />
            <div className="grid md:grid-cols-2 gap-3">
              {FEATURES.map(({ title, desc }) => (
                <FeatureCheckItem
                  key={title}
                  title={title}
                  description={desc}
                  checkColor="text-cyan-400"
                />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-14">
            <SectionDivider title="How It Works" accentColor="cyan" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {HOW_IT_WORKS.map(({ icon, title, desc }, i) => (
                <HowItWorksStep
                  key={title}
                  icon={icon}
                  title={title}
                  description={desc}
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
            © 2025 AnyFikra. Made with <Sparkles className="w-3 h-3 inline" />
          </>
        }
      />
    </PageShell>
  );
}
