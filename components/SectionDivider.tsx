interface SectionDividerProps {
  title: string;
  accentColor?: string;
}

const lineColorMap: Record<string, string> = {
  rose: "from-rose-500/40",
  pink: "from-pink-500/40",
  amber: "from-amber-500/40",
  yellow: "from-yellow-500/40",
  cyan: "from-cyan-500/40",
  violet: "from-violet-500/40",
  emerald: "from-emerald-500/40",
  green: "from-green-500/40",
  neutral: "from-neutral-600",
};

const textColorMap: Record<string, string> = {
  rose: "text-rose-400",
  pink: "text-pink-400",
  amber: "text-amber-400",
  yellow: "text-yellow-400",
  cyan: "text-cyan-400",
  violet: "text-violet-400",
  emerald: "text-emerald-400",
  green: "text-green-400",
  neutral: "text-neutral-400",
};

export default function SectionDivider({
  title,
  accentColor = "neutral",
}: Readonly<SectionDividerProps>) {
  const lineColor = lineColorMap[accentColor] ?? "from-neutral-600";
  const textColor = textColorMap[accentColor] ?? "text-neutral-400";

  return (
    <div className="flex items-center gap-4 mb-8">
      <div
        className={`h-px flex-1 bg-gradient-to-r ${lineColor} to-transparent`}
      />
      <h2
        className={`text-xs uppercase tracking-[0.3em] ${textColor} font-syne font-semibold`}
      >
        {title}
      </h2>
      <div
        className={`h-px flex-1 bg-gradient-to-l ${lineColor} to-transparent`}
      />
    </div>
  );
}
