import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const noto_sans = Noto_Sans({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Welcome!",
  description: "Taesung's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>{children}</body>
    </html>
  );
}
