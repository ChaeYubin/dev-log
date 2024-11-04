import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
