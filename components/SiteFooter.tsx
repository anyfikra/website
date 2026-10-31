import { GITHUB_URL } from "@/lib/projects";
import { Mark } from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function SiteFooter() {
  return (
    <footer className="wrap">
      <div className="flex flex-col gap-6 border-t border-rule py-10 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="text-ink" aria-label="AnyFikra home">
            <Mark className="h-6 w-6" />
          </a>
          <p>
            © {new Date().getFullYear()} AnyFikra. Made from one{" "}
            <span lang="ar" className="font-kufi">
              فكرة
            </span>{" "}
            at a time.
          </p>
        </div>
        <div className="flex items-center justify-between gap-6">
          <ul className="flex gap-6">
            <li>
              <a href="/about" className="transition-colors hover:text-ink">
                About
              </a>
            </li>
            <li>
              <a href="/privacy" className="transition-colors hover:text-ink">
                Privacy
              </a>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink"
              >
                GitHub
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
