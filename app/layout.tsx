import type { Metadata } from "next";
import { Cantarell } from "next/font/google";

const cantarell = Cantarell({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

import "./globals.css";

export const metadata: Metadata = {
  title: "Max Xu // Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    // Apply the class name here
    <html lang="en" className={cantarell.className}> 
      <body>{children}</body>
    </html>
  );
}
