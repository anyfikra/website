import type { Metadata } from "next";
import NoteJar from "@/components/backdrops/NoteJar";
import ProjectPage from "@/components/ProjectPage";

export const metadata: Metadata = {
  title: "DeluluJar",
  description:
    "A wholesome, private app for couples to store and share little compliments, sweet thoughts and fun “delulu” moments.",
};

export default function DeluluJarPage() {
  return <ProjectPage slug="delulu-jar" backdrop={<NoteJar />} />;
}
