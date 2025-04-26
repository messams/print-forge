import type { Metadata } from "next";
import "./globals.css";

import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import Navbar from "./components/Navbar";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export const metadata: Metadata = {
  title: "PrintForge",
  description: "Your go-to platform for 3D printing files",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/printforge-logo-icon.svg" />
      </head>
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
