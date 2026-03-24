

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
}

export const ServiceSchema = ({ name, description, provider, areaServed }: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "telephone": "+44-204-586-5422",
      "url": "https://entirefm.com"
    },
    "areaServed": areaServed,
    "serviceType": "Facilities Management"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface LocalBusinessSchemaProps {
  name: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  email?: string;
  serviceType?: string;
}

export const LocalBusinessSchema = ({ name, address, email, serviceType }: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "postalCode": address.postalCode,
      "addressCountry": address.country
    },
    "telephone": "+44-204-586-5422",
    ...(email && { "email": email }),
    ...(serviceType && { "department": {
      "@type": "Service",
      "serviceType": serviceType
    }})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface SchemaMarkupProps {
  schema: Record<string, any>;
}

export const SchemaMarkup = ({ schema }: SchemaMarkupProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Organization Schema with SameAs (authority signals)
interface OrganizationSchemaProps {
  name?: string;
  description?: string;
  sameAs?: string[];
}

export const OrganizationSchema = ({ 
  name = "EntireFM", 
  description = "Total facilities management and compliance solutions across the UK",
  sameAs = [
    "https://www.linkedin.com/company/entirefm",
    "https://www.facebook.com/entirefm",
    "https://uk.trustpilot.com/review/entirefm.com"
  ]
}: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "description": description,
    "url": "https://entirefm.com",
    "logo": "https://entirefm.com/logo.png",
    "telephone": "+44-204-586-5422",
    "email": "hello@entirefm.com",
    "sameAs": sameAs,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Homepage Organization Schema with Aggregate Rating from Google Reviews
interface HomepageOrganizationSchemaProps {
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
}

export const HomepageOrganizationSchema = ({ 
  aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 47,
    bestRating: 5,
    worstRating: 1
  }
}: HomepageOrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EntireFM",
    "alternateName": "Entire Facilities Management",
    "description": "UK facilities management company delivering compliance-focused hard FM, PPM, and reactive maintenance services across commercial, industrial, and critical infrastructure estates.",
    "url": "https://entirefm.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://entirefm.com/logo.png",
      "width": 300,
      "height": 60
    },
    "image": "https://entirefm.com/images/entirefm-office.jpg",
    "telephone": "+44-204-586-5422",
    "email": "hello@entirefm.com",
    "foundingDate": "2009",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 100
    },
    "slogan": "FM That Performs — Not Promises",
    "knowsAbout": [
      "Facilities Management",
      "Building Compliance",
      "Fire Safety Testing",
      "Electrical Compliance",
      "HVAC Maintenance",
      "Water Hygiene",
      "PPM Services",
      "Critical Infrastructure"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England"
    },
    "sameAs": [
      "https://www.linkedin.com/company/entirefm",
      "https://www.facebook.com/entirefm",
      "https://www.google.com/maps/place/EntireFM"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || 5,
      "worstRating": aggregateRating.worstRating || 1
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Facilities Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fire Safety Compliance",
            "description": "BS 5839 certified fire alarm testing and maintenance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Compliance",
            "description": "EICR testing and BS 7671 certification"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PPM Services",
            "description": "Planned preventative maintenance programmes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Reactive Maintenance",
            "description": "Emergency response and reactive repair services"
          }
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-204-586-5422",
      "contactType": "Customer Service",
      "email": "hello@entirefm.com",
      "areaServed": "GB",
      "availableLanguage": "English",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ContactPoint Schema
export const ContactPointSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": "+44-204-586-5422",
    "email": "hello@entirefm.com",
    "contactType": "Customer Service",
    "areaServed": "GB",
    "availableLanguage": "English",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Person Schema (for leadership pages)
interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
}

export const PersonSchema = ({ name, jobTitle, description, image }: PersonSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "image": image,
    "worksFor": {
      "@type": "Organization",
      "name": "EntireFM",
      "url": "https://entirefm.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Review/Case Study Schema
interface ReviewSchemaProps {
  name: string;
  reviewBody: string;
  author: string;
  rating?: number;
  datePublished?: string;
}

export const ReviewSchema = ({ name, reviewBody, author, rating = 5, datePublished }: ReviewSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": name,
      "provider": {
        "@type": "Organization",
        "name": "EntireFM"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rating,
      "bestRating": 5
    },
    "author": {
      "@type": "Organization",
      "name": author
    },
    "reviewBody": reviewBody,
    "datePublished": datePublished || new Date().toISOString()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// WebApplication Schema (for tools)
interface WebApplicationSchemaProps {
  name: string;
  description: string;
  applicationCategory: string;
}

export const WebApplicationSchema = ({ name, description, applicationCategory }: WebApplicationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": name,
    "description": description,
    "applicationCategory": applicationCategory,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "provider": {
      "@type": "Organization",
      "name": "EntireFM",
      "url": "https://entirefm.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Enhanced FAQ Schema with Speakable for voice search
interface SpeakableFAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const SpeakableFAQSchema = ({ faqs }: SpeakableFAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".faq-question", ".faq-answer"]
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
