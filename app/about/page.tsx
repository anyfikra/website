import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CONTACT_EMAIL, GITHUB_URL } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description: "Who is behind AnyFikra.",
};

export default function About() {
  return (
    <>
      <SiteHeader />
      <main className="wrap pb-24 pt-8 md:pb-32 md:pt-12">
        <h1 className="mt-5 font-display text-[clamp(2.6rem,6.2vw,5.5rem)] leading-[0.98] tracking-[-0.035em]">
          Hi, I’m <em className="marker">Abderrahim Ajakka</em>.
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-mute md:mt-12">
          <p>
            AnyFikra is my personal brand, where I share my hobby projects.
            Fikra means idea in Moroccan Darija, and everything here started
            as one.
          </p>
          <p>
            I design, build and look after each project myself, with care for
            the details and respect for the people using whatever I make.
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-lg">
          <li>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub ↗
            </a>
          </li>
          <li>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link">
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
