import SimpleLayout from "components/SimpleLayout";
import { server } from "config";
import { allArticles, Article } from "contentlayer/generated";
import type { Metadata } from "next";
import SearchArticles from "./SearchArticles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "!",

  // Open Graph
  openGraph: {
    title: "Articles",
    description:
      "!",
    url: `${server}/articles`,
    type: "website",
    siteName: "",
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: "",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "",
    creator: "",
    title: "Articles",
    description:
      "!",
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: "",
        width: 1200,
        height: 630,
      },
    ],
  },

  // Canonical
  alternates: {
    canonical: `${server}/articles`,
    types: {
      "application/rss+xml": `${server}/feed.xml`,
    },
  },
};

// Get sorted articles from the contentlayer
async function getSortedArticles(): Promise<Article[]> {
  let articles = await allArticles;

  articles = articles.filter(
    (article: Article) => article.status === "published"
  );

  return articles.sort((a: Article, b: Article) => {
    if (a.publishedAt && b.publishedAt) {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }
    return 0;
  });
}

export default async function Articles({
  params,
  searchParams,
}: {
  params?: any;
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<JSX.Element> {
  const articles = await getSortedArticles();
  const page = searchParams?.page ? parseInt(searchParams.page as string) : 1;

  return (
    <SimpleLayout
      title="Creating content about Quality Engineering, Automation, and Programming."
      intro="Every article I compose is crafted with the intention of aiding you in acquiring fresh knowledge. I trust you find them enjoyable!"
    >
      <SearchArticles articles={articles} page={page} />
    </SimpleLayout>
  );
}
