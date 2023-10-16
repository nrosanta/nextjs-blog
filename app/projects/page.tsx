import SimpleLayout from "components/SimpleLayout";
import ProjectsPlaceholder from "components/skeleton/ProjectsPlaceholder";
import { server } from "config";
import type { Metadata } from "next";
import { Suspense } from "react";
import ListProjects from "./ListProjects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "",
  openGraph: {
    title: "Projects - Mir Sazzat Hossain",
    description:
      "",
    url: `${server}/projects`,
    type: "website",
    siteName: "Test",
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: "Mir Sazzat Hossain",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mir_sazzat",
    creator: "@mir_sazzat",
    title: "Projects - Mir Sazzat Hossain",
    description:
      "",
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: "Mir Sazzat Hossain",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: `${server}/projects`,
    types: {
      "application/rss+xml": `${server}/feed.xml`,
    },
  },
};

export default function Projects(): JSX.Element {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I've tinkered with countless little projects over the years, but these are the ones that make me do a little happy dance. A bunch of them are open-source, so if one catches your eye, dive into the code and sprinkle your genius on it if you've got ideas to make it even snazzier! 🚀"
    >
      <div className="mt-16 sm:mt-20">
        <Suspense fallback={<ProjectsPlaceholder />}>
          {/* @ts-expect-error Server Component */}
          <ListProjects />
        </Suspense>
      </div>
    </SimpleLayout>
  );
}
