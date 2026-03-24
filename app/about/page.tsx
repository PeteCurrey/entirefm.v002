import About from "@/legacy-pages/About";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'About EntireFM | UK FM Company Founded 2009 | Our Story',
  description: 'Learn about EntireFM — founded by Peter Currey in 2009 and grown into a nationwide FM provider serving residential, commercial, retail, and industrial sectors with 24/7 helpdesk support.',
  alternates: {
    canonical: 'https://www.entirefm.com/about',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.entirefm.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About EntireFM",
        "item": "https://www.entirefm.com/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <About />
    </>
  );
}
