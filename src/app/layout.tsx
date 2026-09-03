import "./globals.css";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Jalcare RO | Doorstep RO Sales, Repair & AMC Services",
  description: "Certified doorstep repair, filter change, TDS calibration, and annual maintenance (AMC) for household & commercial RO water purifiers. Direct WhatsApp booking within 2 hours.",
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
      <body className="relative">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Floating WhatsApp Quick Action Button */}
        <a
          href="https://wa.me/919876543210?text=Hi%20Jalcare%20RO%2C%20I%20need%20doorstep%20RO%20water%20purifier%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 rounded-full shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981z"/>
          </svg>
          <span className="text-xs font-semibold pr-1 hidden sm:inline-block">WhatsApp Service</span>
        </a>
      </body>
    </html>
  );
}
