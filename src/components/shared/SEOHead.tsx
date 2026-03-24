"use client";

interface SEOHeadProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    twitterHandle?: string;
}

const SEOHead = ({
    title,
    description,
    canonicalUrl,
    ogImage,
    ogType = 'website',
    twitterHandle = '@entirefm'
}: SEOHeadProps) => {
    // In Next.js App Router, metadata should be handled via the Metadata API 
    // in the corresponding page.js or layout.js file.
    // This component is kept for compatibility with legacy pages but renders nothing.
    return null;
};

export default SEOHead;
