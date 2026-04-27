import { ChevronLeft, Lock, MessageCircle } from "lucide-react";

interface AppNavBarProps {
  privacyHref: string;
  contactHref: string;
  accentHoverClass: string;
  accentBorderHoverClass?: string;
}

export default function AppNavBar({
  privacyHref,
  contactHref,
  accentHoverClass,
  accentBorderHoverClass = "hover:border-neutral-500/60",
}: Readonly<AppNavBarProps>) {
  return (
    <header className="container mx-auto px-6 pt-5 pb-16 flex items-center justify-between">
      <a
        href="/"
        className="inline-flex items-center bg-neutral-800/60 border border-neutral-700/60 hover:border-neutral-500/60 text-neutral-400 hover:text-neutral-200 p-2.5 rounded-xl transition-all duration-300 hover:bg-neutral-800 "
      >
        <ChevronLeft className="w-4 h-4" />
      </a>

      <nav className="flex items-center gap-2">
        <a
          href={privacyHref}
          className={`inline-flex items-center bg-neutral-800/60 border border-neutral-700/60 ${accentBorderHoverClass} ${accentHoverClass} text-neutral-400 p-2.5 rounded-xl transition-all duration-300 hover:bg-neutral-800 `}
        >
          <Lock className="w-4 h-4" />
        </a>
        <a
          href={contactHref}
          className={`inline-flex items-center bg-neutral-800/60 border border-neutral-700/60 ${accentBorderHoverClass} ${accentHoverClass} text-neutral-400 p-2.5 rounded-xl transition-all duration-300 hover:bg-neutral-800 `}
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
}
