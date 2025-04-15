import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400"] });

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
      <body className={courier.className}>
        <div className="min-h-screen min-w-screen flex flex-col p-4 gap-4">
          <header className="mx-auto">
            <a href="/">[home]</a>
            <a href="/about">[about]</a>
            <a href="/projects">[projects]</a>
            <a href="https://github.com/yoontsy2000/">[github]</a>
            <a href="https://linkedin.com/in/taesung-yoon">[linkedin]</a>
          </header>
          {children}
          <footer>
            <p>Works in progress</p>
            <p>All Rights Reserved.</p>
            <p>© 2025 Taesung Yoon</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
