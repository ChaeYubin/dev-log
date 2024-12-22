import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Yubin's Blog",
  description: "채유빈의 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <section className="mx-auto max-w-3xl px-4 xl:max-w-3xl">
            <NavBar />
            {children}
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
