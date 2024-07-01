import type { Metadata } from "next";
import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CursorProvider from "@/components/CursorContext";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "SkinCare Beauty",
  description: "SkinCare Beauty - Beauty and Skincare Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${marcellus.variable} ${montserrat.variable} overflow-x-hidden`}
      >
        {/* <CursorProvider> */}
        <Transition />
        <Header />
        <PageTransition>{children}</PageTransition>
        {/* </CursorProvider> */}
      </body>
    </html>
  );
}
