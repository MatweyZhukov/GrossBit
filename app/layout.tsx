//Global
import React from "react";
import type { Metadata } from "next";

//Fonts
import { Inter } from "next/font/google";

//Styles
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Test",
  description: "Created by Zhukov Matvey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
