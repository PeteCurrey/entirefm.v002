import Home from "@/legacy-pages/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Facilities Management Company | Nationwide UK Coverage | EntireFM',
  description: 'EntireFM — expert facilities management services across the UK. Hard FM, PPM, industrial cleaning and 24/7 support for commercial, residential, and industrial clients since 2009.',
  alternates: {
    canonical: 'https://www.entirefm.com/',
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What facilities management services does EntireFM provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EntireFM provides a complete range of FM services including hard FM (M&E, HVAC, fire safety), soft FM (cleaning, security, grounds), planned preventative maintenance (PPM), drone inspections, industrial cleaning, and a 24/7 reactive helpdesk across the UK."
        }
      },
      {
        "@type": "Question",
        "name": "Does EntireFM operate nationwide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. EntireFM operates across the whole of the UK with strategically located regional offices. We serve clients in London, Birmingham, Sheffield, Leeds, Chesterfield, and many more locations."
        }
      },
      {
        "@type": "Question",
        "name": "What is planned preventative maintenance (PPM)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Planned preventative maintenance is a proactive approach where building assets are serviced at scheduled intervals to prevent failures. EntireFM's PPM programmes are SFG20-aligned and cover HVAC, M&E, fire safety, electrical testing, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Does EntireFM offer a 24/7 helpdesk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. EntireFM's 24/7 helpdesk provides round-the-clock support for reactive maintenance, emergency call-outs, and compliance reporting for commercial and multi-site clients."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Home />
    </>
  );
}
