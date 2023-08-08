import "@/app/globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

import { Navbar } from "@/components/nav/Navbar";
import { Providers } from "../context/Providers";
import { GenerateMetadata } from "@/lib/types/metadata";

export const generateMetadata: GenerateMetadata = () => {
  return {
    title: {
      default: "Kriguer's Portifolio",
      template: "%s | Kriguer's Portifolio",
    },
    description: "This is my portifolio, and it tells about me and my career.",
    keywords:
      "Kriguer, Portifolio, Kriguer's Portifolio, zKriguer, Kriguer Freitas, Kriguer Oliveira Freitas",
    viewport: "width=device-width, initial-scale=1",
    creator: "Kriguer Freitas",
    publisher: "Kriguer Freitas",
    authors: [{ name: "Kriguer Freitas" }],
    robots: "index, follow",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    openGraph: {
      type: "website",
      locale: "en",
      siteName: "Kriguer's Portifolio",
      url: "https://kriguer.vercel.app/assets/images/og.png",
      title: "Kriguer's Portifolio",
      description:
        "This is my portifolio, and it tells about me and my career.",
      images: [
        {
          url: "https://kriguer.vercel.app/",
          width: 1280,
          height: 720,
          alt: "Kriguer's Portifolio",
        },
      ],
    },
  };
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={plusJakartaSans.className}>
        <Providers locale={params.locale}>
          <Navbar />

          {children}
        </Providers>
      </body>
    </html>
  );
}
