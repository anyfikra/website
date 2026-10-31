import type { ReactNode } from "react";
import { siApple, siGithub, siGoogleplay } from "simple-icons";
import { getProject, type LinkKind } from "@/lib/projects";
import "./backdrops/backdrops.css";
import ProjectIcon from "./ProjectIcon";
import ProjectLinkAnchor, { linkLabel } from "./ProjectLinkAnchor";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import TechIcon from "./TechIcon";

const STORE_GLYPHS: Partial<Record<LinkKind, string>> = {
  "app-store": siApple.path,
  "google-play": siGoogleplay.path,
};

const LINK_GLYPHS: Partial<Record<LinkKind, string>> = {
  ...STORE_GLYPHS,
  source: siGithub.path,
};

function SectionTitle({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <h2 className="pb-4 font-display text-2xl md:text-[1.75rem]">
      <span className="project-title">{children}</span>
    </h2>
  );
}

interface ProjectPageProps {
  slug: string;
  /** The project's own touch, drawn behind everything down to the screenshots. */
  backdrop: ReactNode;
  /** A strip above the site header. */
  bar?: ReactNode;
  /** Controls for the backdrop, under the links. */
  controls?: ReactNode;
}

export default function ProjectPage({
  slug,
  backdrop,
  bar,
  controls,
}: Readonly<ProjectPageProps>) {
  const project = getProject(slug);
  const { details, landscapeShots } = project;
  // Store buttons first; they're the main call to action.
  const links = [...project.links].sort(
    (a, b) => Number(!STORE_GLYPHS[a.kind]) - Number(!STORE_GLYPHS[b.kind]),
  );
  // Screenshots sit on one row, so wide windows get two columns and phones four.
  const shotSize = landscapeShots
    ? "w-[84vw] sm:w-auto"
    : "w-[62vw] sm:w-auto";

  return (
    <div data-project={slug} className="project">
      <main>
        <div className="project-lead">
          {backdrop}
          {bar}
          <div className="project-content">
            <SiteHeader />
            <div className="wrap">
              <div className="project-text">
                <div className="flex min-w-0 items-center gap-5">
                  <ProjectIcon
                    project={project}
                    className="h-[76px] w-[76px] md:h-24 md:w-24"
                  />
                  <div className="min-w-0">
                    <h1 className="font-display text-[clamp(1.9rem,4.4vw,3.5rem)] leading-[1.04] tracking-[-0.03em] [overflow-wrap:anywhere]">
                      {project.name}
                    </h1>
                    <p className="mt-1 text-[17px] text-mute">
                      {details.subtitle}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {links.map((link) => {
                    const store = STORE_GLYPHS[link.kind];
                    const glyph = LINK_GLYPHS[link.kind];
                    return (
                      <li key={link.href}>
                        <ProjectLinkAnchor
                          link={link}
                          project={slug}
                          className={`inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-medium transition-colors ${
                            store
                              ? "bg-ink text-canvas hover:bg-ink/85"
                              : "ring-1 ring-inset ring-ink/25 hover:bg-ink/10"
                          }`}
                        >
                          {glyph && (
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden
                              className="h-4 w-4 fill-current"
                            >
                              <path d={glyph} />
                            </svg>
                          )}
                          {linkLabel(link)}
                          {!glyph && " ↗"}
                        </ProjectLinkAnchor>
                      </li>
                    );
                  })}
                </ul>

                {controls}
              </div>

              <div className="project-column">
                <section className="pt-6 md:pt-8">
                  <SectionTitle>Description</SectionTitle>
                  <p className="max-w-[38em] text-[clamp(1.05rem,1.5vw,1.2rem)] leading-relaxed">
                    {details.description}
                  </p>
                  <p className="mt-3 font-mono text-[13px] text-mute">
                    {project.kind} · {project.platforms}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

        <section className="wrap relative pt-6 md:pt-8">
          <SectionTitle>Built with</SectionTitle>
          <dl className="grid gap-3">
            {details.tech.map(({ label, items }) => (
              <div
                key={label}
                className="grid gap-x-4 gap-y-1.5 md:grid-cols-[104px_minmax(0,1fr)]"
              >
                <dt className="text-sm text-mute md:pt-[7px]">{label}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-[10px] bg-canvas/60 py-1.5 pl-2.5 pr-3 text-sm ring-1 ring-inset ring-rule"
                      >
                        <TechIcon name={item} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="wrap relative pt-6 md:pt-8">
          <SectionTitle>Screenshots</SectionTitle>
          <ul
            className={`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1.5 sm:grid sm:overflow-visible ${
              landscapeShots ? "sm:grid-cols-2" : "sm:grid-cols-4"
            }`}
          >
            {details.screenshots.map((shot, i) => {
              const dark = details.darkScreenshots?.[i];
              const look = `w-full ${
                landscapeShots ? "rounded-xl" : "rounded-[18px]"
              } shadow-[0_18px_34px_-22px_rgb(17_17_20/0.45)]`;
              return (
                <li key={shot} className={`shrink-0 snap-start ${shotSize}`}>
                  <img
                    src={shot}
                    alt={details.screenshotAlts[i]}
                    width={details.screenshotSize.width}
                    height={details.screenshotSize.height}
                    loading="lazy"
                    className={`${look} ${dark ? "only-light" : ""}`}
                  />
                  {dark && (
                    <img
                      src={dark}
                      alt={`${details.screenshotAlts[i]}, in dark mode`}
                      width={details.screenshotSize.width}
                      height={details.screenshotSize.height}
                      loading="lazy"
                      className={`${look} only-dark`}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        {details.legal && (
          <nav aria-label={`${project.name} legal`} className="wrap relative pt-6 md:pt-8">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-mute">
              {details.legal.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </main>

      <div className="relative mt-6">
        <SiteFooter />
      </div>
    </div>
  );
}
