import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://aurevia.com"),
  title: {
    template: "%s | Aurevia Interiors",
    default: "Aurevia Interiors | Crafting Timeless Luxury Spaces",
  },
  description: "Award-winning luxury interior design studio specializing in timeless, minimal, and sophisticated spaces for high-end residential and commercial projects.",
  keywords: ["Luxury Interior Design", "Minimalist Interiors", "High-end Residential", "Boutique Hotel Design", "Aurevia Interiors"],
  openGraph: {
    title: "Aurevia Interiors | Crafting Timeless Luxury Spaces",
    description: "Award-winning luxury interior design studio specializing in timeless, minimal, and sophisticated spaces.",
    url: "https://aurevia.com", // Placeholder
    siteName: "Aurevia Interiors",
    images: [
      {
        url: "/images/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Aurevia Interiors Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurevia Interiors",
    description: "Crafting Timeless Luxury Spaces.",
    images: ["/images/og-image.jpg"], // Placeholder
  },
  alternates: {
    canonical: "https://aurevia.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased min-h-screen flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
