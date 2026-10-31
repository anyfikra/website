import type { LinkKind, ProjectLink } from "@/lib/projects";
import TrackedLink from "./TrackedLink";

const LABELS: Record<LinkKind, string> = {
  website: "Website",
  "app-store": "App Store",
  "google-play": "Google Play",
  source: "Source code",
  docs: "Documentation",
};

// Matches the `store` values the GA store_click event has always used.
const STORE_PARAM: Partial<Record<LinkKind, string>> = {
  "app-store": "ios",
  "google-play": "android",
  website: "web",
};

export const linkLabel = ({ kind }: ProjectLink) => LABELS[kind];

interface ProjectLinkAnchorProps {
  link: ProjectLink;
  project: string;
  className?: string;
  children: React.ReactNode;
}

/** An outbound project link. Store and website clicks are reported to GA. */
export default function ProjectLinkAnchor({
  link,
  project,
  className,
  children,
}: Readonly<ProjectLinkAnchorProps>) {
  const props = {
    href: link.href,
    target: "_blank",
    rel: "noopener noreferrer",
    className,
  };
  const store = STORE_PARAM[link.kind];

  return store ? (
    <TrackedLink
      {...props}
      event="store_click"
      eventParams={{ store, project, link_url: link.href }}
    >
      {children}
    </TrackedLink>
  ) : (
    <a {...props}>{children}</a>
  );
}
