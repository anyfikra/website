import {
  HardDrive,
  Lock,
  Shield,
  Smartphone,
  Zap,
  FolderSearch,
} from "lucide-react";
import SectionDivider from "../../components/SectionDivider";
import FeatureCard from "../../components/FeatureCard";
import AppFooter from "../../components/AppFooter";
import PageShell from "../../components/PageShell";

const ORBS = [
  {
    size: "w-[500px] h-[500px]",
    position: "top-0 left-1/4",
    color: "bg-emerald-500/15",
    blur: "blur-[100px]",
  },
  {
    size: "w-[400px] h-[400px]",
    position: "bottom-0 right-1/4",
    color: "bg-green-500/15",
    blur: "blur-[80px]",
  },
];

export default function StorageSqueezePage() {
  return (
    <PageShell orbs={ORBS}>
      <section className="container mx-auto px-6 pt-16 pb-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 max-w-4xl mx-auto animate-slide-up">
          <div className="flex items-center gap-5">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-emerald-500/40 rounded-2xl blur-xl" />
              <div className="relative w-20 h-20 rounded-2xl shadow-xl shadow-emerald-500/30 bg-gradient-to-br from-emerald-500/30 to-green-500/30 border border-emerald-500/20 flex items-center justify-center">
                <HardDrive className="w-9 h-9 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs px-3 py-1.5 rounded-full font-syne tracking-wider uppercase mb-3">
                <Smartphone className="w-3 h-3" />
                Coming Soon
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-2 font-syne">
                Storage Squeeze
              </h1>
              <p className="text-base bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent font-medium mb-3 font-syne">
                &ldquo;Free up space, keep your memories&rdquo;
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                Optimize your device storage with smart compression technology.
                Free up space without losing quality or important files.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <div className="animate-slide-up-delay-2">
          <div className="max-w-4xl mx-auto mb-14">
            <SectionDivider title="What to Expect" accentColor="emerald" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FeatureCard
                icon={<HardDrive className="w-7 h-7 text-emerald-400" />}
                title="Smart Compression"
                description="Advanced algorithms that compress photos and videos while maintaining perceived quality."
                accentColor="emerald-500"
              />
              <FeatureCard
                icon={<Shield className="w-7 h-7 text-emerald-400" />}
                title="100% Local"
                description="All processing happens on your device. No cloud uploads, no servers, complete privacy."
                accentColor="emerald-500"
              />
              <FeatureCard
                icon={<FolderSearch className="w-7 h-7 text-emerald-400" />}
                title="Duplicate Finder"
                description="Scans your gallery to identify and remove duplicate files wasting precious space."
                accentColor="emerald-500"
              />
              <FeatureCard
                icon={<Zap className="w-7 h-7 text-emerald-400" />}
                title="Batch Processing"
                description="Process hundreds of files at once. Reclaim gigabytes without the manual work."
                accentColor="emerald-500"
              />
              <FeatureCard
                icon={<Lock className="w-7 h-7 text-emerald-400" />}
                title="Non-Destructive"
                description="Original files are always preserved. Preview before committing to any changes."
                accentColor="emerald-500"
              />
              <div className="group">
                <div className="relative p-5 rounded-2xl border border-dashed border-neutral-700/50 bg-neutral-800/20 h-full flex items-center justify-center">
                  <p className="text-neutral-600 text-sm text-center font-syne">
                    More features
                    <br />
                    in development&hellip;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-green-500/8 to-transparent border border-emerald-500/25 text-center">
              <h2 className="text-base font-bold text-neutral-50 mb-2 font-syne">
                Get Notified at Launch
              </h2>
              <p className="text-neutral-400 text-sm mb-5 leading-relaxed">
                Be the first to know when Storage Squeeze is available.
              </p>
              <a
                href="mailto:hello@anyfikra.com?subject=Storage Squeeze - Notify Me"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-neutral-900 px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition-colors font-semibold text-sm font-syne"
              >
                Notify Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <AppFooter
        privacyHref="/storage-squeeze/privacy"
        contactHref="/storage-squeeze/contact"
        contactIcon={<Lock className="w-3 h-3" />}
        accentHoverClass="hover:text-emerald-400"
        footerNote="© 2025 AnyFikra. Made with care."
      />
    </PageShell>
  );
}
