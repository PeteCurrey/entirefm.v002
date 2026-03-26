import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import ChatWidget from "@/components/ChatWidget";
import Script from "next/script";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.entirefm.com'),
  title: {
    default: 'EntireFM | Facilities Management Company | Nationwide UK',
    template: '%s | EntireFM',
  },
  description: 'EntireFM delivers expert facilities management services across the UK — hard FM, planned preventative maintenance, industrial cleaning, and 24/7 helpdesk support for commercial and residential clients. Founded 2009.',
  keywords: ['facilities management UK', 'hard FM', 'soft FM', 'PPM', 'planned preventative maintenance', 'building maintenance UK', 'commercial cleaning', 'facilities management company'],
  authors: [{ name: 'EntireFM' }],
  creator: 'EntireFM',
  publisher: 'EntireFM',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.entirefm.com',
    siteName: 'EntireFM',
    title: 'EntireFM | Facilities Management Company | Nationwide UK Coverage',
    description: 'Bespoke facilities management solutions across the UK. Hard FM, PPM, industrial cleaning, 24/7 support. Trusted by residential, commercial, and industrial clients since 2009.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EntireFM — UK Facilities Management Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EntireFM | Facilities Management | Nationwide UK',
    description: 'Hard FM, PPM, industrial cleaning and 24/7 helpdesk support across the UK. Bespoke FM solutions since 2009.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.entirefm.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EntireFM",
    "url": "https://www.entirefm.com",
    "logo": "https://www.entirefm.com/logo.png",
    "description": "UK facilities management company providing hard FM, soft FM, PPM, industrial cleaning, drone inspection, and 24/7 helpdesk services nationwide since 2009.",
    "foundingDate": "2009",
    "founder": {
      "@type": "Person",
      "name": "Peter Currey"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English",
      "contactOption": "TollFree",
      "hoursAvailable": "Mo-Su 00:00-24:00"
    },
    "sameAs": [
      "https://uk.linkedin.com/company/entirefm"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "serviceType": [
      "Facilities Management",
      "Planned Preventative Maintenance",
      "Hard FM",
      "Soft FM",
      "Industrial Cleaning",
      "Building Maintenance",
      "Drone Inspection",
      "24/7 Helpdesk"
    ]
  };

  return (
    <html lang="en" className={`${openSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <TooltipProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <ChatWidget />
            </div>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
