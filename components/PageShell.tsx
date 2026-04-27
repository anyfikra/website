interface OrbConfig {
  size: string;
  position: string;
  color: string;
  blur: string;
}

interface PageShellProps {
  orbs: OrbConfig[];
  children: React.ReactNode;
}

export default function PageShell({ orbs, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-neutral-900 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        {orbs.map((orb, i) => (
          <div
            key={i}
            className={`absolute ${orb.size} ${orb.position} ${orb.color} rounded-full ${orb.blur}`}
          />
        ))}
      </div>
      <div className="relative">{children}</div>
    </main>
  );
}
