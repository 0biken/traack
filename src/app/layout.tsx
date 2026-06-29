import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tracck | ATS-Optimized Resume Generator",
  description: "Automated professional accomplishment tracker and resume generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
