import type { Metadata } from "next";
import PriceLine from "@/components/backdrops/PriceLine";
import ProjectPage from "@/components/ProjectPage";

export const metadata: Metadata = {
  title: "BourseIQ",
  description:
    "A portfolio tracker for the Casablanca Stock Exchange, with price alerts, a home-screen widget and a broker-fee calculator.",
};

export default function BourseIQPage() {
  return <ProjectPage slug="bourseiq" backdrop={<PriceLine />} />;
}
