import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Yubin's Blog",
  description: "채유빈의 블로그입니다.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.className}>
      <body>
        <section className="mx-auto max-w-2xl px-4 xl:max-w-3xl">
          <NavBar />
          {children}
        </section>
      </body>
    </html>
  );
}
