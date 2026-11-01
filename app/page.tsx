import ProjectTile from "@/components/ProjectTile";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CONTACT_EMAIL, GITHUB_URL, PROJECTS } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="wrap grid gap-10 pb-10 pt-8 md:grid-cols-12 md:gap-8 md:pb-14 md:pt-12">
          <div className="md:col-span-7">
            <h1 className="font-display text-[clamp(2.6rem,6.2vw,5.5rem)] leading-[0.98] tracking-[-0.035em] motion-safe:animate-rise motion-safe:[animation-delay:80ms]">
              Every dream starts
              <br />
              as a <em className="marker">fikra</em>.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-snug text-mute motion-safe:animate-rise motion-safe:[animation-delay:200ms] md:mt-8 md:text-2xl">
              Hi, I’m <a href="/about" className="link text-ink"><em className="marker">Abderrahim Ajakka</em></a>, and this is my personal brand where I share the hobby projects I design and build.
            </p>
          </div>
          <div className="border-y border-ink py-5 motion-safe:animate-rise motion-safe:[animation-delay:280ms] md:col-span-5 md:col-start-8 md:self-end">
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

        <section id="contact" className="bg-spark text-coal">
          <div className="wrap py-20 md:py-24">
            <p className="font-mono text-[13px] opacity-70">Contact</p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-[-0.035em]">
              Got a fikra?
              <br />
              Say <em>salam</em>.
            </h2>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
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
