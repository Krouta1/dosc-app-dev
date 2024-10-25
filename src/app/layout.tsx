import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProviders from "@/components/provider";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>
          <div className="h-screen w-full">
            <header className="sticky top-0 z-50">
              <Header />
            </header>
            <main className="h-full">{children}</main>
            <footer>footer</footer>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
