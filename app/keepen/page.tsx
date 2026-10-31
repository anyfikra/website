import type { Metadata } from "next";
import Ocean from "@/components/backdrops/Ocean";
import ProjectPage from "@/components/ProjectPage";

export const metadata: Metadata = {
  title: "Keepen",
  description:
    "A memory for the people you love: the birthday, the allergy, the gift they mentioned once.",
};

export default function KeepenPage() {
  return <ProjectPage slug="keepen" backdrop={<Ocean />} />;
}
