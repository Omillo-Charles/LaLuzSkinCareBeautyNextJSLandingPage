import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "LaLuz - Premium Beauty Products in Nairobi | Skincare, Makeup & Fragrance",
    template: "%s | LaLuz Beauty",
  },
  description:
    "Discover luxury beauty products at LaLuz Nairobi. Premium skincare, makeup, haircare, and fragrance collections. Professional treatments and curated products for radiant, healthy skin.",
  keywords: [
    "beauty products Nairobi",
    "skincare Kenya",
    "makeup Nairobi",
    "fragrance Kenya",
    "luxury beauty",
    "premium skincare",
    "beauty treatments",
    "cosmetics Nairobi",
    "haircare products",
    "LaLuz beauty",
  ],
  authors: [{ name: "LaLuz Beauty" }],
  creator: "LaLuz Beauty",
  publisher: "LaLuz Beauty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://laluz.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LaLuz - Premium Beauty Products in Nairobi",
    description:
      "Discover luxury beauty products at LaLuz Nairobi. Premium skincare, makeup, haircare, and fragrance collections.",
    url: "https://laluz.co.ke",
    siteName: "LaLuz Beauty",
    images: [
      {
        url: "/laluzlogo.png",
        width: 1200,
        height: 630,
        alt: "LaLuz Beauty - Premium Beauty Products",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaLuz - Premium Beauty Products in Nairobi",
    description:
      "Discover luxury beauty products at LaLuz Nairobi. Premium skincare, makeup, haircare, and fragrance collections.",
    images: ["/laluzlogo.png"],
    creator: "@laluzbeauty",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/laluzlogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/laluzlogo.png" />
        <meta name="theme-color" content="#f43f5e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LaLuz Beauty",
              description:
                "Premium beauty products and treatments in Nairobi, Kenya",
              url: "https://laluz.co.ke",
              logo: "https://laluz.co.ke/laluzlogo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254742927569",
                contactType: "customer service",
                areaServed: "KE",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nairobi",
                addressCountry: "Kenya",
              },
              sameAs: [
                "https://facebook.com/laluzbeauty",
                "https://instagram.com/laluzbeauty",
                "https://tiktok.com/@laluzbeauty",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
