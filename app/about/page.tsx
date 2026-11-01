import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SocialIcon, { type SocialIconName } from "@/components/SocialIcon";
import { CONTACT_EMAIL, GITHUB_URL, PERSONAL_EMAIL } from "@/lib/projects";

const CONTACTS: {
  label: string;
  links: { icon: SocialIconName; text: string; href: string }[];
}[] = [
  {
    label: "AnyFikra",
    links: [
      { icon: "email", text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      { icon: "github", text: "anyfikra", href: GITHUB_URL },
    ],
  },
  {
    label: "Me",
    links: [
      {
        icon: "email",
        text: PERSONAL_EMAIL,
        href: `mailto:${PERSONAL_EMAIL}`,
      },
      { icon: "github", text: "ajakka", href: "https://github.com/ajakka" },
      {
        icon: "linkedin",
        text: "abdajakka",
        href: "https://www.linkedin.com/in/abdajakka/",
      },
      {
        icon: "x",
        text: "@benevolent_lama",
        href: "https://x.com/benevolent_lama",
      },
      {
        icon: "stackoverflow",
        text: "Abderrahim Ajakka",
        href: "https://stackoverflow.com/users/8679455/abderrahim-ajakka",
      },
    ],
  },
];

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
        <div className="mt-12 grid max-w-2xl gap-10 border-t border-ink pt-8 sm:grid-cols-2">
          {CONTACTS.map(({ label, links }) => (
            <section key={label}>
              <h2 className="font-mono text-[13px] text-mute">{label}</h2>
              <ul className="mt-4 space-y-3 text-lg">
                {links.map(({ icon, text, href }) => {
                  const external = !href.startsWith("mailto:");
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        {...(external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="link flex items-center gap-3 break-all"
                      >
                        <SocialIcon name={icon} />
                        {text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
