import { Lock } from "lucide-react";

interface AppFooterProps {
  privacyHref: string;
  contactHref: string;
  contactIcon: React.ReactNode;
  accentHoverClass: string;
  footerNote: React.ReactNode;
}

export default function AppFooter({
  privacyHref,
  contactHref,
  contactIcon,
  accentHoverClass,
  footerNote,
}: Readonly<AppFooterProps>) {
  return (
    <>
      <div className="container mx-auto px-6 pb-12">
        <div className="flex justify-center gap-8 text-sm">
          <a
            href={privacyHref}
            className={`text-neutral-500 ${accentHoverClass} transition-colors duration-200 flex items-center gap-1.5 hover:gap-2`}
          >
            <Lock className="w-3 h-3" />
            <span className="font-syne text-xs tracking-wide">
              Privacy Policy
            </span>
          </a>
          <a
            href={contactHref}
            className={`text-neutral-500 ${accentHoverClass} transition-colors duration-200 flex items-center gap-1.5 hover:gap-2`}
          >
            {contactIcon}
            <span className="font-syne text-xs tracking-wide">
              Contact & Support
            </span>
          </a>
        </div>
      </div>
      <footer className="container mx-auto px-6 py-6 border-t border-neutral-800">
        <p className="text-center text-xs text-neutral-600 flex items-center justify-center gap-1.5 font-syne tracking-wide">
          {footerNote}
        </p>
      </footer>
    </>
  );
}
