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
    title: "Testingfly",
    description:
      "",
    url: `${server}/projects`,
    type: "website",
    siteName: "Projects",
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: "Testingfly",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hellotestingfly",
    creator: "testingfly",
    title: "Projects - Testinfly",
    description:
      "",
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: "n",
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
      title="Side Projects"
      intro="These projects are personal in nature, and I haven't consistently made the effort to publish them. However, I'm willing to share some that could be beneficial to others."
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
