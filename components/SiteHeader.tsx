import { Mark, Wordmark } from "./Logo";

const NAV = [
  { label: "Fikras", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  return (
    <header className="wrap flex items-center justify-between gap-3 py-6">
      <a href="/" className="flex items-center gap-2 min-[360px]:gap-2.5">
        <Mark className="h-7 w-7 min-[360px]:h-8 min-[360px]:w-8" />
        <Wordmark className="text-[18px] min-[360px]:text-[22px] sm:text-[25px]" />
      </a>
      <nav aria-label="Main">
        <ul className="flex items-center gap-3 text-sm min-[360px]:gap-5 sm:gap-8">
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
