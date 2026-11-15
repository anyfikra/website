export const CONTACT_EMAIL = "support@anyfikra.com";
export const PERSONAL_EMAIL = "ajakka.abderrahim@gmail.com";
export const GITHUB_URL = "https://github.com/anyfikra";

export type LinkKind =
  | "website"
  | "app-store"
  | "google-play"
  | "source"
  | "docs";

export interface ProjectLink {
  kind: LinkKind;
  href: string;
}

/** A group of technologies on a project page, such as "iOS app". */
export interface TechGroup {
  label: string;
  items: string[];
}

export interface ProjectDetails {
  /** The small line under the project's name. */
  subtitle: string;
  description: string;
  screenshots: string[];
  /** What each of `screenshots` shows, in the same order. */
  screenshotAlts: string[];
  /** Pixel size of the images, so the page reserves their space before they load. */
  screenshotSize: { width: number; height: number };
  /** Dark mode versions of `screenshots`, in the same order. */
  darkScreenshots?: string[];
  /** What the released version is built with, not unreleased rewrites. */
  tech: TechGroup[];
  legal?: { label: string; href: string }[];
}

/** Grid columns out of 6. Each row of the homepage bento must add up to 6. */
export type TileSize = "full" | "half" | "third";

export interface Project {
  slug: string;
  name: string;
  /** For tiles too narrow for the full name. */
  shortName?: string;
  kind: string;
  platforms: string;
  /** One line for the homepage tile. */
  blurb: string;
  summary: string;
  icon: string;
  /** Tints the tile. */
  accent: string;
  /** Yellow and orange tints turn brown on a dark page; this mutes them. */
  warmAccent?: boolean;
  tile: TileSize;
  /** Homepage images. */
  shots: string[];
  /** The shots are two landscape windows, shown overlapping. */
  landscapeShots?: boolean;
  links: ProjectLink[];
  details: ProjectDetails;
}

const screenshots = (slug: string) =>
  ["01", "02", "03", "04"].map((n) => `/${slug}/${n}.webp`);

export const PROJECTS: Project[] = [
  {
    slug: "bourseiq",
    name: "BourseIQ",
    kind: "App",
    platforms: "Android, iOS beta",
    blurb: "Your Casablanca portfolio, at a glance.",
    summary:
      "A portfolio tracker for the Casablanca Stock Exchange, with price alerts, a home-screen widget and a broker-fee calculator. Independent: no trading, no investment advice.",
    icon: "/icons/bourse-iq.png",
    accent: "#1F4E9E",
    tile: "full",
    shots: screenshots("bourse-iq").slice(0, 3),
    links: [
      { kind: "website", href: "https://bourseiq.com" },
      {
        kind: "google-play",
        href: "https://play.google.com/store/apps/details?id=com.bourseiq",
      },
    ],
    details: {
      subtitle: "Portfolio tracker for the Casablanca Stock Exchange",
      description:
        "BourseIQ tracks a portfolio on the Casablanca Stock Exchange. You enter the stocks you bought and sold, and it shows the live value, your real gains and the day’s top movers. It also has price alerts, a home-screen widget and a broker-fee calculator. It’s independent, with no trading and no investment advice.",
      screenshots: screenshots("bourse-iq"),
      screenshotAlts: [
        "Portfolio screen with a value of MAD 475,653, a one-month chart and holdings",
        "Stock detail for TGCC with a price history chart and key statistics",
        "Allocation chart, performance summary and recent transactions",
        "Markets screen listing the day’s top gainers",
      ],
      screenshotSize: { width: 1242, height: 2688 },
      tech: [
        {
          label: "Android app",
          items: ["Kotlin", "Jetpack Compose", "Material 3", "Glance"],
        },
        {
          label: "iOS app",
          items: ["Swift", "SwiftUI", "Swift Charts", "WidgetKit", "App Intents"],
        },
        {
          label: "Backend",
          items: ["Java", "Spring Boot", "MongoDB", "Firebase Cloud Messaging", "Sentry"],
        },
        { label: "Website", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      ],
      legal: [
        { label: "Privacy policy", href: "https://bourseiq.com/privacy" },
        { label: "Support", href: "https://bourseiq.com/support" },
      ],
    },
  },
  {
    slug: "keepen",
    name: "Keepen",
    kind: "App",
    platforms: "iOS",
    blurb: "A memory for the people you love.",
    summary:
      "Keep the birthday, the allergy and the gift they mentioned once. Everything stays on your device, with no account and no cloud.",
    icon: "/icons/keepen.png",
    accent: "#F26A1B",
    warmAccent: true,
    tile: "half",
    shots: ["01", "02", "03"].map((n) => `/keepen/${n}.webp`),
    links: [
      { kind: "website", href: "https://keepen.anyfikra.com" },
      {
        kind: "app-store",
        href: "https://apps.apple.com/us/app/keepen/id6796786575",
      },
    ],
    details: {
      subtitle: "A memory for the people you love",
      description:
        "Keepen is an iPhone app for remembering the people in your life: the birthday, the allergy, the gift they mentioned once. Everyone becomes a sticker on your board, upcoming events sit in one agenda, and you get a reminder before they happen. It all stays on your device, with no account and no cloud.",
      screenshots: screenshots("keepen"),
      screenshotAlts: [
        "People board with a sticker for each person",
        "Profile of Sarah Martin with upcoming events and notes on what she loves, avoids and would like as a gift",
        "Agenda of upcoming birthdays and events, with a birthday reminder on top",
        "Chat answering a gift question from the saved notes",
      ],
      screenshotSize: { width: 600, height: 1299 },
      tech: [
        {
          label: "iOS app",
          items: [
            "Swift",
            "SwiftUI",
            "SwiftData",
            "Foundation Models",
            "Vision",
            "Speech",
            "RevenueCat",
          ],
        },
        { label: "Website", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      ],
      legal: [
        { label: "Privacy policy", href: "https://keepen.anyfikra.com/privacy" },
        { label: "Terms of use", href: "https://keepen.anyfikra.com/terms" },
      ],
    },
  },
  {
    slug: "macinroid",
    name: "Macinroid",
    kind: "Mac app, open source",
    platforms: "macOS 14+",
    blurb: "Android files, the Mac way.",
    summary:
      "Browse your phone in a Finder-style window and drag files across over USB, with no drivers or helper apps.",
    icon: "/icons/macinroid.png",
    accent: "#128A63",
    tile: "half",
    shots: ["/macinroid/browse.webp", "/macinroid/transfer.webp"],
    landscapeShots: true,
    links: [
      { kind: "website", href: "https://macinroid.anyfikra.com" },
      { kind: "source", href: "https://github.com/anyfikra/macinroid" },
    ],
    details: {
      subtitle: "Android file transfer for the Mac",
      description:
        "Macinroid is a native macOS app for moving photos, videos and files between a Mac and an Android phone over USB. Plug in the phone and its storage opens in a Finder-style window, with drag and drop, thumbnails and Quick Look. There are no drivers or helper apps to install, and it’s free and open source.",
      screenshots: ["/macinroid/browse.webp", "/macinroid/transfer.webp"],
      screenshotAlts: [
        "Finder-style window showing the phone’s Camera folder as photo thumbnails",
        "List of the phone’s folders with a file copy in progress",
      ],
      screenshotSize: { width: 1200, height: 756 },
      darkScreenshots: [
        "/macinroid/browse-dark.webp",
        "/macinroid/transfer-dark.webp",
      ],
      tech: [
        {
          label: "Mac app",
          items: ["Swift", "SwiftUI", "AppKit", "IOKit", "Quick Look", "MTP over USB"],
        },
      ],
    },
  },
  {
    slug: "react-native-here-explore",
    name: "react-native-here-explore",
    shortName: "here-explore",
    kind: "Library, open source",
    platforms: "iOS, Android",
    blurb: "HERE Maps for React Native.",
    summary:
      "HERE Maps for React Native: map schemes, markers, polylines, polygons and routing across ten transport modes.",
    icon: "/icons/react-native-here-explore.svg",
    accent: "#1C7C8C",
    tile: "third",
    shots: [
      "/react-native-here-explore/routing.webp",
    ],
    links: [
      { kind: "docs", href: "https://react-native-here-explore.anyfikra.com" },
      {
        kind: "source",
        href: "https://github.com/anyfikra/react-native-here-explore",
      },
    ],
    details: {
      subtitle: "HERE Maps for React Native",
      description:
        "An open-source library that brings the HERE SDK Explore Edition to React Native, built from scratch in Kotlin and Swift on the New Architecture. It covers interactive maps, custom markers, polylines, polygons and routing across ten transport modes, with a useRouting hook and an Expo config plugin.",
      screenshots: [
        "/react-native-here-explore/routing.webp",
        "/react-native-here-explore/routing-car.webp",
        "/react-native-here-explore/polyline.webp",
        "/react-native-here-explore/map-day.webp",
      ],
      screenshotAlts: [
        "Walking route across Berlin with a picker for the transport mode",
        "Car route across Berlin with the same transport picker",
        "A polyline drawn on a dark map of Berlin",
        "Light map of the Americas with a button to switch the coordinate box",
      ],
      screenshotSize: { width: 540, height: 1212 },
      tech: [
        {
          label: "Library",
          items: [
            "TypeScript",
            "Kotlin",
            "Swift",
            "React Native New Architecture",
            "HERE SDK Explore Edition",
            "Expo config plugin",
          ],
        },
        { label: "Docs", items: ["Docusaurus"] },
      ],
      legal: [
        {
          label: "MIT license",
          href: "https://github.com/anyfikra/react-native-here-explore/blob/main/LICENSE",
        },
      ],
    },
  },
  {
    slug: "delulu-jar",
    name: "DeluluJar",
    kind: "App",
    platforms: "iOS, Android",
    blurb: "A private jar for two.",
    summary:
      "A private jar for two. Drop little notes for your partner, then shake the jar for a surprise.",
    icon: "/icons/delulu-jar.png",
    accent: "#E884B6",
    tile: "third",
    shots: screenshots("delulu-jar").slice(0, 1),
    links: [
      { kind: "website", href: "https://delulujar.anyfikra.com" },
      {
        kind: "app-store",
        href: "https://apps.apple.com/us/app/delulujar/id6751821045",
      },
      {
        kind: "google-play",
        href: "https://play.google.com/store/apps/details?id=com.delulujar",
      },
    ],
    details: {
      subtitle: "A private jar for two",
      description:
        "DeluluJar is a private app for couples. You drop little notes, photos and voice messages into a shared jar, and your partner shakes it to pull one out at random. Only the two of you can open your jar, and it works across iOS and Android.",
      screenshots: screenshots("delulu-jar"),
      screenshotAlts: [
        "Home screen with a glass jar of notes and the days you have been together",
        "Note editor with paper colors, handwriting fonts and photo and voice attachments",
        "Rituals screen with a weekly calendar and shared lists",
        "Timeline of received notes, shown half in light and half in dark mode",
      ],
      screenshotSize: { width: 1242, height: 2688 },
      tech: [
        {
          label: "Apps",
          items: ["React Native", "Expo", "TypeScript", "RevenueCat"],
        },
        {
          label: "Backend",
          items: ["Firebase Auth", "Cloud Firestore", "Cloud Storage"],
        },
        { label: "Website", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      ],
      // DeluluJar's legal pages live on delulujar.anyfikra.com. There is no contact
      // page for it on this site any more.
      legal: [
        { label: "Privacy policy", href: "https://delulujar.anyfikra.com/privacy" },
        { label: "Terms of use", href: "https://delulujar.anyfikra.com/terms" },
      ],
    },
  },
  {
    slug: "ducky-bank",
    name: "Ducky Bank",
    kind: "App",
    platforms: "Android",
    blurb: "An expense tracker with a rubber duck for a guide.",
    summary:
      "An expense tracker with a rubber duck for a guide. Offline-first, with clear reports and achievements that make saving a habit.",
    icon: "/icons/ducky-bank.png",
    accent: "#F4C21F",
    warmAccent: true,
    tile: "third",
    shots: screenshots("ducky-bank").slice(0, 1),
    links: [
      {
        kind: "google-play",
        href: "https://play.google.com/store/apps/details?id=com.duckybank",
      },
    ],
    details: {
      subtitle: "Expense tracker with a rubber duck for a guide",
      description:
        "Ducky Bank is an offline-first expense tracker for Android. You log income and expenses in seconds, see daily, weekly and monthly reports, and unlock achievements as you save, with a rubber duck as your guide. It’s available in five languages.",
      screenshots: screenshots("ducky-bank"),
      screenshotAlts: [
        "Home screen with the total balance, an add button and recent transactions",
        "Monthly report with income, expenses and spending by category",
        "Achievements screen with 3 of 7 unlocked",
        "Category management with default and custom categories",
      ],
      screenshotSize: { width: 1080, height: 2400 },
      tech: [
        {
          label: "App",
          items: ["React Native", "Expo", "TypeScript", "Unistyles", "MMKV", "Zustand"],
        },
      ],
      legal: [
        { label: "Privacy policy", href: "/ducky-bank/privacy" },
        { label: "Support", href: "/ducky-bank/contact" },
      ],
    },
  },
];

export function getProject(slug: string) {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    throw new Error(`No project "${slug}"`);
  }
  return project;
}
