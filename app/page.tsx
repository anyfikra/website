import ProjectTile from "@/components/ProjectTile";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CONTACT_EMAIL, GITHUB_URL, PROJECTS } from "@/lib/projects";

const PRINCIPLES = [
  {
    title: "Small on purpose",
    text: "Each fikra does one thing. Macinroid moves files between a Mac and an Android phone over USB, with no drivers or helper apps to install.",
  },
  {
    title: "Honest by default",
    text: "Keepen keeps everything on your iPhone, with no account and no cloud. Ducky Bank works offline. Privacy is part of the design, not a footnote.",
  },
  {
    title: "Open when it helps",
    text: "Macinroid and react-native-here-explore are open source on GitHub, for anyone to read, use and improve.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="wrap pb-14 pt-8 md:pb-20 md:pt-12">
          <h1 className="font-display text-[clamp(2.6rem,6.2vw,5.5rem)] leading-[0.98] tracking-[-0.035em] motion-safe:animate-rise motion-safe:[animation-delay:80ms]">
            Every dream starts
            <br />
            as a <em className="marker">fikra</em>.
          </h1>

          <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-12 md:gap-8">
            <div className="border-y border-ink py-5 motion-safe:animate-rise motion-safe:[animation-delay:200ms] md:col-span-5">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-display text-3xl">
                  fik·ra{" "}
                  <span className="ml-1 font-mono text-[13px] font-normal tracking-normal text-mute">
                    noun
                  </span>
                </p>
                <p lang="ar" className="font-kufi text-4xl text-mute">
                  فكرة
                </p>
              </div>
              <p className="mt-1 font-mono text-[13px] text-mute">
                Arabic / Moroccan Darija
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed marker:font-mono marker:text-[12px] marker:text-mute">
                <li>An idea.</li>
                <li>
                  The small thought that won’t leave you alone until you build
                  it.
                </li>
              </ol>
            </div>
            <p className="text-xl leading-relaxed text-mute motion-safe:animate-rise motion-safe:[animation-delay:280ms] md:col-span-6 md:col-start-7 md:self-end md:text-2xl md:leading-snug">
              AnyFikra is{" "}
              <a href="/about" className="marker link decoration-transparent">
                my
              </a>{" "}
              personal brand where I share my hobby projects. I care for
              details and respect for the people using whatever I make.
            </p>
          </div>
        </section>

        <section id="work" className="wrap scroll-mt-6 pb-28 md:pb-36">
          <h2 className="border-b border-ink pb-5 font-display text-4xl md:text-5xl">
            Fikras
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[236px]">
            {PROJECTS.map((project) => (
              <ProjectTile key={project.slug} project={project} />
            ))}
          </ol>
        </section>

        <section
          id="studio"
          className="wrap grid scroll-mt-6 gap-12 pb-28 md:grid-cols-12 md:gap-8 md:pb-36"
        >
          <div className="md:col-span-5">
            <p className="font-mono text-[13px] text-mute">The studio</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-[-0.03em] md:text-[3.75rem]">
              Small studio,
              <br />
              <em className="text-mute">on purpose.</em>
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-mute md:col-span-6 md:col-start-7 md:pt-12">
            <p>
              AnyFikra is where ideas that won’t let go get seen through, from
              the first sketch to the store listing and every update after.
            </p>
            <p>
              Being one person means every pixel, word and line of code gets
              the same attention, and every decision can be made for the people
              who use the product rather than for a growth chart.
            </p>
          </div>

          <ol className="grid gap-10 md:col-span-12 md:mt-8 md:grid-cols-3 md:gap-8">
            {PRINCIPLES.map(({ title, text }) => (
              <li key={title} className="border-t border-ink pt-6">
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="bg-spark text-coal">
          <div className="wrap py-24 md:py-32">
            <p className="font-mono text-[13px] opacity-70">Contact</p>
            <h2 className="mt-6 font-display text-[clamp(2.75rem,7.8vw,7rem)] leading-[0.98] tracking-[-0.035em]">
              Got a fikra?
              <br />
              Say <em>salam</em>.
            </h2>
            <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-lg leading-relaxed opacity-80">
                Feedback on an app, a bug you found, or an idea worth building
                together: the inbox is open.
              </p>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all font-display text-2xl underline decoration-coal/30 decoration-1 underline-offset-[6px] transition-colors hover:decoration-coal md:text-3xl"
                >
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] opacity-80 transition-opacity hover:opacity-100"
                >
                  github.com/anyfikra ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
