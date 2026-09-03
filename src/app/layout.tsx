import "./globals.css";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Jalcare RO | Doorstep RO Sales, Repair & AMC Services",
  description: "Certified doorstep repair, filter change, TDS calibration, and annual maintenance (AMC) for household & commercial RO water purifiers. Guaranteed 2-hour doorstep response.",
  keywords: "RO repair, water purifier service, RO membrane replacement, AMC water purifier, Jalcare RO, TDS adjustment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0E5C56" />
      </head>
      <body>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
