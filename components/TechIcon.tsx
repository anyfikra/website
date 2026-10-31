import {
  Box,
  ChartLine,
  Cpu,
  Database,
  Eye,
  HardDrive,
  Layers,
  LayoutGrid,
  Mic,
  Palette,
  Sparkles,
  Usb,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  siApple,
  siDocusaurus,
  siExpo,
  siFirebase,
  siHere,
  siJetpackcompose,
  siKotlin,
  siMaterialdesign,
  siMongodb,
  siNextdotjs,
  siOpenjdk,
  siReact,
  siRevenuecat,
  siSentry,
  siSpringboot,
  siSwift,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

// Keyed by the names used in `details.tech`. A real logo where one exists,
// otherwise a plain icon for what the framework does.
const LOGOS: Record<string, string> = {
  AppKit: siApple.path,
  Docusaurus: siDocusaurus.path,
  Expo: siExpo.path,
  "Expo config plugin": siExpo.path,
  "Firebase Auth": siFirebase.path,
  "Firebase Cloud Messaging": siFirebase.path,
  "Cloud Firestore": siFirebase.path,
  "Cloud Storage": siFirebase.path,
  "HERE SDK Explore Edition": siHere.path,
  Java: siOpenjdk.path,
  "Jetpack Compose": siJetpackcompose.path,
  Kotlin: siKotlin.path,
  "Material 3": siMaterialdesign.path,
  MongoDB: siMongodb.path,
  "Next.js": siNextdotjs.path,
  "React Native": siReact.path,
  "React Native New Architecture": siReact.path,
  RevenueCat: siRevenuecat.path,
  Sentry: siSentry.path,
  "Spring Boot": siSpringboot.path,
  Swift: siSwift.path,
  "Tailwind CSS": siTailwindcss.path,
  TypeScript: siTypescript.path,
};

const GLYPHS: Record<string, LucideIcon> = {
  "App Intents": Zap,
  "Foundation Models": Sparkles,
  Glance: LayoutGrid,
  IOKit: Cpu,
  MMKV: HardDrive,
  "MTP over USB": Usb,
  "Quick Look": Eye,
  Speech: Mic,
  "Swift Charts": ChartLine,
  SwiftData: Database,
  SwiftUI: Layers,
  Unistyles: Palette,
  Vision: Eye,
  WidgetKit: LayoutGrid,
  Zustand: Box,
};

export default function TechIcon({ name }: Readonly<{ name: string }>) {
  const Glyph = GLYPHS[name];
  if (Glyph) {
    return <Glyph aria-hidden className="h-[18px] w-[18px] shrink-0" />;
  }
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-[18px] w-[18px] shrink-0 fill-current"
    >
      <path d={LOGOS[name]} />
    </svg>
  );
}
