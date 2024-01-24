import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Map Project ai",
  description: "For Map search with ai",
  icons: {
    icon: "/favicon.ico",
  },
  /*
  openGraph: {
    title: 'map project ai',
    description: 'ai와 함께 찾는 장소 맵',
    url: 'map-project-ai.vercel.app',
    siteName: 'map project ai',
    images: [
      {
        url: 'https://map-project-ai.vercel.app/images/og.jpg',
        width: 800,
        height: 600,
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  }
  */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
