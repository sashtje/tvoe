import type { Metadata } from "next";

import { Logo, Navigation, ScrollToTop } from "@/components";

import { ttNormsPro } from "../fonts";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Фильмы, сериалы и мультфильмы смотреть онлайн в хорошем качестве",
  description:
    "Фильмы, сериалы и мультфильмы смотреть онлайн в хорошем качестве",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={ttNormsPro.className}>
        <main>
          <Logo />
          <Navigation />
          <ScrollToTop />

          {children}
        </main>
      </body>
    </html>
  );
}
