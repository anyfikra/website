interface AppFooterProps {
  footerNote: React.ReactNode;
}

export default function AppFooter({ footerNote }: Readonly<AppFooterProps>) {
  return (
    <footer className="container mx-auto px-6 py-6 border-t border-neutral-800">
      <p className="text-center text-xs text-neutral-600 flex items-center justify-center gap-1.5 font-syne tracking-wide">
        {footerNote}
      </p>
    </footer>
  );
}
