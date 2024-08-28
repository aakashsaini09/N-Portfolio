import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat"
})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aakash Saini Portfolio",
  description: "Portfolio Website || Aakash Saini",
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
