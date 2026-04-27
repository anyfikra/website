import { ChevronLeft } from "lucide-react";

interface BackHeaderProps {
  href: string;
  label: string;
  mounted: boolean;
}

export default function BackHeader({
  href,
  label,
  mounted,
}: Readonly<BackHeaderProps>) {
  return (
    <header
      className={`container mx-auto px-6 py-5 transition-all duration-700 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <a
        href={href}
        className="group inline-flex items-center gap-1.5 text-neutral-500 hover:text-neutral-200 transition-colors duration-200"
      >
        <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
        <span className="text-sm font-syne tracking-wide">{label}</span>
      </a>
    </header>
  );
}
