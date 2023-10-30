import AnalyticsWrapper from "components/analytics";
import Header from "components/Header";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import { server } from "../config";
import "../styles/globals.css";
import ClientThemeProvider from "./theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Testingfly",
    template: "%s - Testingfly",
  },
  description:
    "Hi there! This is a place where I share insights about Quality Engineering and Test Automation, covering topics that seasoned QEs should be familiar with. Whether you're an experienced pro or just starting out, you'll find something helpful here.",
  generator: "Hi there! This is a place where I share insights about Quality Engineering and Test Automation, covering topics that seasoned QEs should be familiar with. Whether you're an experienced pro or just starting out, you'll find something helpful here.",
  applicationName: "Hi there! This is a place where I share insights about Quality Engineering and Test Automation, covering topics that seasoned QEs should be familiar with. Whether you're an experienced pro or just starting out, you'll find something helpful here.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "QE",
    "SDET",
    "Testing Best Practices",
    "Test Automation"
  ],
  authors: [
    {
      name: "Testingfly",
      url: `${server}`,
    },
  ],
  themeColor: "#ffffff",
  colorScheme: "light",
  creator: "Testingfly",
  publisher: "Testingfly",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Testingfly",
    description:
      "Testingfly",
    url: `${server}`,
    siteName: "Hi there! This is a place where I share insights about Quality Engineering and Test Automation, covering topics that seasoned QEs should be familiar with. Whether you're an experienced pro or just starting out, you'll find something helpful here.",
    images: [
      {
        url: `${server}/images/favicon.png`,
        width: 1200,
        height: 630,
        alt: "Testingfly - Blog about QE stuff.",
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
    title: "Testingfly",
    description:
      "Hi there! This is a place where I share insights about Quality Engineering and Test Automation, covering topics that seasoned QEs should be familiar with. Whether you're an experienced pro or just starting out, you'll find something helpful here.",
    creator: "@testingfly",
    images: [
      {
        url: `${server}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Testingfly",
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
    yandex: "yandex-verification=0",
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
