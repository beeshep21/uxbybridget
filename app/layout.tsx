import type { Metadata } from "next";
import { Raleway, Merriweather } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Bridget Shepherd — UX Designer",
  description:
    "Trained in architecture. Rooted in research. Building systems that scale.",
  openGraph: {
    title: "Bridget Shepherd — UX Designer",
    description:
      "Trained in architecture. Rooted in research. Building systems that scale.",
    url: "https://uxbybridget.com",
    siteName: "UX by Bridget",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${merriweather.variable}`}
    >
      <body className="bg-white text-teal-900 antialiased">{children}</body>
    </html>
  );
}
