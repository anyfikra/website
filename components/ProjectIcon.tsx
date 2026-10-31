import type { Project } from "@/lib/projects";

interface ProjectIconProps {
  project: Project;
  className?: string;
}

export default function ProjectIcon({
  project,
  className = "",
}: Readonly<ProjectIconProps>) {
  return (
    <img
      src={project.icon}
      alt=""
      width={96}
      height={96}
      // The ring keeps the icon's shape visible when its artwork runs to the
      // edge in a color close to the page (BourseIQ's white tree, for one).
      className={`shrink-0 rounded-[22%] shadow-[0_10px_24px_-12px_rgb(0_0_0/0.35)] ring-1 ring-rule ${className}`}
    />
  );
}
