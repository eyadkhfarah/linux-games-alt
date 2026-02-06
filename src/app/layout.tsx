import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Viewport settings for mobile optimization
export const viewport: Viewport = {
  themeColor: "#6366f1", // Indigo-500 to match your UI
  width: "device-width",
  initialScale: 1,
};

const siteUrl =  
    process.env.NEXT_PUBLIC_DOMAIN_URL || "https://linuxgamesalt.com";

export const metadata: Metadata = {
  title: {
    default: "Linux Games Alt | Tactical Gaming Alternatives",
    template: "%s | Linux Games Alt",
  },
  description: 
    "Deploy superior gaming alternatives. Verify anti-cheat compatibility, Proton tiers, and tactical game data for Linux and Steam Deck.",
  keywords: [
    "Gaming Alternatives", 
    "Anti-cheat Compatibility", 
    "Linux Gaming", 
    "Steam Deck Verified", 
    "ProtonDB", 
    "Linux Games Alt"
  ],
  authors: [{ name: "Linux Games Alt Team" }],
  creator: "Linux Games Alt",
  metadataBase: new URL(siteUrl), // Use the dynamic site URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Linux Games Alt",
    title: "Linux Games Alt | Tactical Gaming Alternatives",
    description: "Find playable alternatives for games with restrictive anti-cheats on Linux and Steam Deck.",
    images: [
      {
        url: "/og-image.png", // Ensure this exists in your public folder
        width: 1200,
        height: 630,
        alt: "Linux Games Alt Interface Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linux Games Alt",
    description: "Deploy superior gaming alternatives with verified compatibility.",
    creator: "@combatredirect", // Replace with your X handle if you have one
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-zinc-950 selection:bg-indigo-500/30">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}