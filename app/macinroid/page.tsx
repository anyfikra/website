import type { Metadata } from "next";
import MacDesktop, { MacMenuBar } from "@/components/backdrops/MacDesktop";
import ProjectPage from "@/components/ProjectPage";

export const metadata: Metadata = {
  title: "Macinroid",
  description:
    "A native macOS app for moving photos, videos and files between your Mac and an Android phone over USB.",
};

export default function MacinroidPage() {
  return (
    <ProjectPage
      slug="macinroid"
      backdrop={<MacDesktop />}
      bar={<MacMenuBar />}
    />
  );
}
