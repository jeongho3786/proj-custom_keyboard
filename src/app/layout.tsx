import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "../../public/fonts";

export const metadata: Metadata = {
  title: "custom-keyboard",
  description: "custom-keyboard web site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} antialiased`}>{children}</body>
    </html>
  );
}
