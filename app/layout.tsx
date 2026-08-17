import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "ALYOXA FORGE",
  description:
    "ALYOXA Forge is a modern project management workspace built to help you organize projects, manage tasks, and turn ideas into progress.",
};

const satoshi = localFont({
  src: [
    {
      path: "../public/assets/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});


export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="min-h-screen antialiased font-sans">
        {children}
      </body>
    </html>
  );
}