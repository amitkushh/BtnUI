import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BtnUi - Sleek Buttons for Modern UI",
  description:
    "A minimal collection of Tailwind-powered buttons ready to use in your next project. Copy, customize, and use them instantly in your projects.",
  authors: [
    { name: "Amit Kushwaha", url: "https://www.amitkush.com/" },
    { name: "Amit Kushh", url: "https://x.com/amitkushh" },
  ],

  keywords: [
    "button UI library",
    "CSS button library",
    "open source button library",
    "lightweight CSS button library",
    "customizable UI button components",
    "responsive button design library",
    "button library for web developers",
    "free button UI toolkit",
    "download button UI kit free",
    "best button library for React",
    "how to use button UI library",
    "button UI components",
    "modern button design CSS",
    "call to action buttons",
    "interactive button effects CSS",
  ],
  creator: "Amit Kushwaha",
  publisher: "BtnUi",
  metadataBase: new URL("https://www.btnui.xyz/"),
  openGraph: {
    title: "Sleek Buttons for Modern UI",
    description:
      "A minimal collection of Tailwind-powered buttons ready to use in your project.",
    url: "https://www.btnui.xyz/",
    siteName: "BtnUi",
    images: [
      {
        url: "/og-image.png",
        height: 720,
        width: 1280,
        alt: "BtnUi logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BtnUi - Sleek Buttons for Modern UI",
    description:
      "A minimal collection of Tailwind-powered buttons ready to use in your project.",
    creator: "@amitkushh",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
