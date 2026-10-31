import type { Metadata } from "next";
import DuckWave from "@/components/backdrops/DuckWave";
import ProjectPage from "@/components/ProjectPage";

export const metadata: Metadata = {
  title: "Ducky Bank",
  description:
    "A simple expense manager with a rubber duck as your financial guide. Track spending, see where it goes and build better habits.",
};

export default function DuckyBankPage() {
  return <ProjectPage slug="ducky-bank" backdrop={<DuckWave />} />;
}
