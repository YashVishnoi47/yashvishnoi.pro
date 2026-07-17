import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import { GeistPixelSquare } from "geist/font/pixel";
import { Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import Footer from "@/components/Layout/Footer";
import UniFooterCTA from "@/components/Layout/UniFooterCTA";
import StructuredData from "@/structured-data";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-spaceGrotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://yashvishnoi.pro"),

  title: {
    default: "Legal Intake OS™ — AI Receptionist for Law Firms | Yash Vishnoi",
    template: "%s | Legal Intake OS™",
  },

  description:
    "Legal Intake OS™ is an AI receptionist built for law firms — answering calls 24/7, qualifying leads, booking consultations, and syncing to your CRM automatically. Built by Yash Vishnoi.",

  keywords: [
    "AI receptionist for law firms",
    "AI receptionist",
    "AI calling automation",
    "virtual receptionist for lawyers",
    "law firm call answering service",
    "legal intake automation",
    "AI voice agent for law firms",
    "24/7 law firm answering service",
    "AI phone agent",
    "Yash Vishnoi",
  ],

  authors: [{ name: "Yash Vishnoi", url: "https://yashvishnoi.pro" }],
  creator: "Yash Vishnoi",
  publisher: "Yash Vishnoi",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Legal Intake OS™ — AI Receptionist for Law Firms",
    description:
      "24/7 AI receptionist that answers calls, qualifies leads, books consultations, and follows up — built specifically for law firms by Yash Vishnoi.",
    url: "/",
    siteName: "Legal Intake OS™",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Legal Intake OS™ — AI Receptionist for Law Firms",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Legal Intake OS™ — AI Receptionist for Law Firms",
    description:
      "24/7 AI receptionist that answers calls, qualifies leads, and books consultations for law firms — automatically.",
    images: ["/og-image.png"],
    creator: "https://x.com/Yash_Vishnoi7",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "your-google-search-console-verification-code",
  },

  applicationName: "Legal Intake OS™",
  category: "Technology",
};

export default function RootLayout({ children }) {
  <Script id="theme" strategy="beforeInteractive">
    {`
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
`}
  </Script>;
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${spaceGrotesk.variable} h-full antialiased flex justify-center items-start`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-fit max-w-[1600px] w-full flex flex-col justify-center items-center font-roboto bg-background dark:selection:bg-white dark:selection:text-black selection:bg-black selection:text-white">
        <Toaster />
        <Navbar />
        <TooltipProvider>{children}</TooltipProvider>
        <UniFooterCTA />
        <Footer />
      </body>
    </html>
  );
}
