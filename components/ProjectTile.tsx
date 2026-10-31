import type { CSSProperties } from "react";
import type { Project, TileSize } from "@/lib/projects";
import ProjectIcon from "./ProjectIcon";

const SIZES: Record<TileSize, string> = {
  full: "h-[520px] md:col-span-6 md:row-span-2 md:grid md:h-auto md:grid-cols-[1fr_1.15fr] md:items-center md:gap-14 md:p-10",
  half: "h-[400px] md:col-span-3 md:row-span-2 md:h-auto",
  third: "h-[400px] md:col-span-2 md:row-span-2 md:h-auto",
};

const SHOT = "rounded-[14px] shadow-[0_14px_34px_-14px_rgb(17_17_20/0.3)]";

/** Portrait screenshots, cut off by the bottom edge of the tile. */
function PeekingShots({ project }: Readonly<{ project: Project }>) {
  // Wider tiles only fit all three shots at full desktop width.
  const fitted = project.shots.length === 1 ? "w-[62%]" : "w-[46%]";
  const { width, height } = project.details.screenshotSize;
  const size =
    project.tile === "third"
      ? fitted
      : "w-[46%] lg:w-[31%] [&:nth-child(3)]:hidden lg:[&:nth-child(3)]:block";
  return (
    <div
      className={`mt-auto flex shrink-0 justify-center gap-3 ${
        project.tile === "full" ? "md:-mb-16 md:self-end" : ""
      }`}
    >
      {project.shots.map((shot) => (
        <img
          key={shot}
          src={shot}
          alt=""
          width={width}
          height={height}
          loading="lazy"
          className={`min-w-0 bg-raised ${SHOT} ${size}`}
        />
      ))}
    </div>
  );
}

/** Two landscape windows, overlapping corner to corner. */
function OverlappingShots({ project }: Readonly<{ project: Project }>) {
  const [back, front] = project.shots;
  const { width, height } = project.details.screenshotSize;
  return (
    <div className="pointer-events-none relative mt-auto aspect-[8/5] w-[88%] shrink-0 self-center">
      <img
        src={back}
        alt=""
        width={width}
        height={height}
        loading="lazy"
        className={`absolute left-0 top-0 w-[74%] ${SHOT}`}
      />
      <img
        src={front}
        alt=""
        width={width}
        height={height}
        loading="lazy"
        className={`absolute bottom-0 right-0 z-10 w-[74%] ${SHOT}`}
      />
    </div>
  );
}

export default function ProjectTile({ project }: Readonly<{ project: Project }>) {
  const full = project.tile === "full";
  const name = full ? project.name : (project.shortName ?? project.name);
  return (
    <li
      style={{ "--accent": project.accent } as CSSProperties}
      className={`tile relative flex flex-col overflow-hidden rounded-[28px] p-6 md:p-7 ${
        project.warmAccent ? "tile-warm" : ""
      } ${SIZES[project.tile]}`}
    >
      <div
        className={`flex min-w-0 flex-col gap-2.5 pb-7 ${full ? "md:pb-0" : ""}`}
      >
        <div className="flex items-center gap-3">
          <ProjectIcon
            project={project}
            className={full ? "h-14 w-14" : "h-11 w-11"}
          />
          <h3
            className={`min-w-0 font-display leading-[1.05] ${
              full ? "text-[2.5rem]" : "text-[1.75rem]"
            }`}
          >
            {/* The ::after covers the tile, so the whole card opens the page. */}
            <a
              href={`/${project.slug}`}
              className="tile-title after:absolute after:inset-0"
            >
              {name}
            </a>
          </h3>
        </div>
        <p className={full ? "font-display text-lg font-medium italic" : "text-[15px] text-mute"}>
          {project.blurb}
        </p>
        {full && (
          <>
            <p className="max-w-lg text-[15px] leading-relaxed text-mute">
              {project.summary}
            </p>
            <p className="font-mono text-[13px] text-mute">
              {project.kind} · {project.platforms}
            </p>
          </>
        )}
      </div>
      {project.landscapeShots ? (
        <OverlappingShots project={project} />
      ) : (
        <PeekingShots project={project} />
      )}
    </li>
  );
}
