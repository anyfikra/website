import type { Metadata } from "next";
import {
  RouteDemo,
  RouteMap,
  RouteModes,
} from "@/components/backdrops/RouteDemo";
import ProjectPage from "@/components/ProjectPage";

export const metadata: Metadata = {
  title: "react-native-here-explore",
  description:
    "An open-source library that brings the HERE SDK Explore Edition to React Native.",
};

export default function HereExplorePage() {
  return (
    <RouteDemo>
      <ProjectPage
        slug="react-native-here-explore"
        backdrop={<RouteMap />}
        controls={<RouteModes />}
      />
    </RouteDemo>
  );
}
