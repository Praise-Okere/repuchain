import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-barlow-condensed",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share-tech-mono",
});

export const metadata: Metadata = {
  title: "RepChain | Universal Web3 Reputation Protocol",
  description: "Cross-chain identity protocol for decentralized trust. Get your universal reputation score.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlowCondensed.variable} ${shareTechMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
