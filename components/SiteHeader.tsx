import { Mark, Wordmark } from "./Logo";

const NAV = [
  { label: "Work", href: "/#work" },
  { label: "Studio", href: "/#studio" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  return (
    <header className="wrap flex items-center justify-between py-6">
      <a href="/" className="flex items-center gap-2.5">
        <Mark className="h-8 w-8" />
        <Wordmark className="text-[22px] sm:text-[25px]" />
      </a>
      <nav aria-label="Main">
        <ul className="flex items-center gap-5 text-sm sm:gap-8">
          {NAV.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-mute transition-colors hover:text-ink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
