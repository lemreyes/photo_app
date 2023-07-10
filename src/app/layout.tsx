"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import { NextAuthProvider } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title: "Photo App",
  description: "Share your photography to the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={poppins.className}>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
