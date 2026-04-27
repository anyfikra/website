interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
}

const borderMap: Record<string, string> = {
  "rose-500": "hover:border-rose-500/50",
  "pink-500": "hover:border-pink-500/50",
  "fuchsia-500": "hover:border-fuchsia-500/50",
  "amber-500": "hover:border-amber-500/50",
  "yellow-500": "hover:border-yellow-500/50",
  "orange-500": "hover:border-orange-500/50",
  "lime-500": "hover:border-lime-500/50",
  "cyan-500": "hover:border-cyan-500/50",
  "violet-500": "hover:border-violet-500/50",
  "emerald-500": "hover:border-emerald-500/50",
  "green-500": "hover:border-green-500/50",
  "sky-500": "hover:border-sky-500/50",
};

const glowMap: Record<string, string> = {
  "rose-500": "group-hover:opacity-100 from-rose-500/10",
  "pink-500": "group-hover:opacity-100 from-pink-500/10",
  "fuchsia-500": "group-hover:opacity-100 from-fuchsia-500/10",
  "amber-500": "group-hover:opacity-100 from-amber-500/10",
  "yellow-500": "group-hover:opacity-100 from-yellow-500/10",
  "orange-500": "group-hover:opacity-100 from-orange-500/10",
  "lime-500": "group-hover:opacity-100 from-lime-500/10",
  "cyan-500": "group-hover:opacity-100 from-cyan-500/10",
  "violet-500": "group-hover:opacity-100 from-violet-500/10",
  "emerald-500": "group-hover:opacity-100 from-emerald-500/10",
  "green-500": "group-hover:opacity-100 from-green-500/10",
  "sky-500": "group-hover:opacity-100 from-sky-500/10",
};

export default function FeatureCard({
  icon,
  title,
  description,
  accentColor,
}: FeatureCardProps) {
  const borderClass = borderMap[accentColor] ?? "hover:border-neutral-500/50";
  const glowClass =
    glowMap[accentColor] ?? "group-hover:opacity-100 from-neutral-500/10";

  return (
    <div className="group">
      <div
        className={`relative p-5 rounded-2xl border-2 border-neutral-700/60 bg-neutral-800/40 backdrop-blur-sm ${borderClass} transition-all duration-400 h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${glowClass} to-transparent rounded-2xl opacity-0 transition-opacity duration-400`}
        />
        <div className="relative">
          <div className="mb-4 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 w-fit">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-neutral-50 mb-2 font-syne">
            {title}
          </h3>
          <p className="text-neutral-400 text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
