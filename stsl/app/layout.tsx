import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STSL | Shivshahi Transport & Logistics",
  description: "LR booking, tracking, customers, drivers and fleet management for Shivshahi Transport & Logistics.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mr">
      <body>{children}</body>
    </html>
  );
}
