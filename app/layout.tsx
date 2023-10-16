import AnalyticsWrapper from "components/analytics";
import Header from "components/Header";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import { server } from "../config";
import "../styles/globals.css";
import ClientThemeProvider from "./theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s - Ross Meitei",
  },
  description:
    "Blog about QE stuff.",
  generator: "Personal Website",
  applicationName: "Personal Website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "QE",
    "SDET",
    "Testing Best Practices",
    "Test Automation"
  ],
  authors: [
    {
      name: "Ross Meitei",
      url: `${server}`,
    },
  ],
  themeColor: "#ffffff",
  colorScheme: "light",
  creator: "Ross Meitei",
  publisher: "Ross Meitei",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Ross Meitei - QE Leader and Skilled Mentor",
    description:
      "Ross Meitei is a QE leader.",
    url: `${server}`,
    siteName: "Ross Meitei - QE Leader and Skilled Mentor",
    images: [
      {
        url: `${server}/images/favicon.png`,
        width: 1200,
        height: 630,
        alt: "Ross Meitei - Innovative Researcher and Skilled Mentor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": 0,
      "max-image-preview": "large",
      "max-snippet": 0,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      new URL("/favicon.ico", server).href,
      {
        url: "/favicon.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: `${server}/site.webmanifest`,
  twitter: {
    card: "summary_large_image",
    site: "@testingfly",
    title: "Ross Meiteir",
    description:
      "Ross Meitei is a QE leader.",
    creator: "@testingfly",
    images: [
      {
        url: `${server}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ross Meitei - QE Professional",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification=0",
    // bing: "msvalidate.01=0",
    // yandex: "yandex-verification=0",
  },

  alternates: {
    canonical: `${server}`,
    types: {
      "application/rss+xml": `${server}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full antialiased" lang="en">
      <head />
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black min-h-screen">
        <ClientThemeProvider>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            {/* set width of container */}
            <div className="flex w-full max-w-7xl lg:px-8"> 
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative">
            <Header />
            <main>{children}</main>
            <AnalyticsWrapper />
            <Footer />
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
