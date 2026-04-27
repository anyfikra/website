import { siApple, siGoogleplay } from "simple-icons";

interface StoreButtonProps {
  store: "ios" | "android";
  href: string;
  accentColor?: string;
}

const accentStyles: Record<string, string> = {
  rose: "hover:border-rose-500/60",
  amber: "hover:border-amber-500/60",
  cyan: "hover:border-cyan-500/60",
  emerald: "hover:border-emerald-500/60",
  neutral: "hover:border-neutral-500/60",
};

export default function StoreButton({
  store,
  href,
  accentColor = "neutral",
}: Readonly<StoreButtonProps>) {
  const isIos = store === "ios";
  const borderHover = accentStyles[accentColor] ?? accentStyles.neutral;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 bg-neutral-800/80 border-2 border-neutral-700/70 text-white px-5 py-3 rounded-xl ${borderHover} hover:bg-neutral-800 transition-colors duration-300 font-syne`}
    >
      <svg
        className="w-4 h-4 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={isIos ? siApple.path : siGoogleplay.path} />
      </svg>
      <span className="text-sm font-semibold">
        {isIos ? "App Store" : "Google Play"}
      </span>
    </a>
  );
}
