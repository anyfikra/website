import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export interface DocSection {
  title: string;
  content: React.ReactNode;
}

interface DocPageProps {
  kicker: React.ReactNode;
  title: string;
  intro?: React.ReactNode;
  updated?: string;
  /** Shown above the first section, e.g. a short summary. */
  lead?: React.ReactNode;
  sections: DocSection[];
}

const anchor = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const pad = (i: number) => String(i + 1).padStart(2, "0");

/** A highlighted summary card, passed to DocPage as its `lead`. */
export function DocSummary({
  title,
  items,
}: Readonly<{ title: string; items: string[] }>) {
  return (
    <aside className="rounded-2xl bg-raised p-6 md:p-8">
      <p className="flex items-center gap-3 font-mono text-[13px]">
        <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-spark" />
        {title}
      </p>
      <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="text-mute">
              —
            </span>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

/** Layout for long-form pages: privacy policies, support and FAQs. */
export default function DocPage({
  kicker,
  title,
  intro,
  updated,
  lead,
  sections,
}: Readonly<DocPageProps>) {
  return (
    <>
      <SiteHeader />

      <main className="wrap pb-24 pt-8 md:pb-32 md:pt-12">
        <p className="font-mono text-[13px] text-mute">{kicker}</p>
        <h1 className="mt-10 font-display text-[clamp(3rem,7.4vw,6rem)] leading-[0.98] tracking-[-0.035em] motion-safe:animate-rise md:mt-14">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
            {intro}
          </p>
        )}
        {updated && (
          <p className="mt-4 font-mono text-[13px] text-mute">
            Last updated {updated}
          </p>
        )}

        <div className="mt-14 grid gap-12 border-t border-ink pt-10 md:mt-20 md:grid-cols-12 md:gap-8">
          <nav aria-label="On this page" className="hidden md:col-span-3 md:block">
            <ol className="sticky top-8 space-y-2.5 font-mono text-[12.5px] text-mute">
              {sections.map(({ title }, i) => (
                <li key={title}>
                  <a
                    href={`#${anchor(title)}`}
                    className="flex gap-3 transition-colors hover:text-ink"
                  >
                    <span className="opacity-60">{pad(i)}</span>
                    {title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-14 md:col-span-8 md:col-start-5">
            {lead}
            {sections.map(({ title, content }, i) => (
              <section
                key={title}
                id={anchor(title)}
                className="scroll-mt-8"
              >
                <h2 className="flex items-baseline gap-4 font-display text-2xl md:text-3xl">
                  <span className="font-mono text-[13px] font-normal tracking-normal text-mute">
                    {pad(i)}
                  </span>
                  {title}
                </h2>
                <div className="doc mt-5">{content}</div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
