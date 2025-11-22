# EntireFM Performance & SEO Implementation Guide

## ✅ Implemented Features

### 1. XML Sitemap (`/sitemap.xml`)
- ✅ All service pages (Priority 1.0)
- ✅ All sector pages (Priority 0.9)
- ✅ All location pages (Priority 0.8)
- ✅ All case studies (Priority 0.8)
- ✅ Tools & calculators (Priority 0.9)
- ✅ Brand trust pages (Priority 0.7)
- ✅ Resources (Priority 0.7)

### 2. Robots.txt Configuration
- ✅ Allows all pages except /admin/ and /internal/
- ✅ Sitemap declaration pointing to https://entirefm.com/sitemap.xml

### 3. Enhanced Schema Markup
All schema types implemented in `/src/components/shared/SchemaMarkup.tsx`:

#### ✅ Service Schema
- Used on: All service pages
- Includes: Provider info, area served, service type

#### ✅ FAQ Schema with Speakable
- Used on: Service pages, resources
- Features: Voice search optimization
- CSS Selectors: `.faq-question`, `.faq-answer`

#### ✅ Organization Schema with SameAs
- Used on: Contact, About pages
- Authority signals: LinkedIn, Facebook, Trustpilot
- Company details & contact info

#### ✅ ContactPoint Schema
- Used on: Contact page
- Features: 24/7 availability, multiple contact methods
- Area served: GB (United Kingdom)

#### ✅ Person Schema
- Used on: Leadership pages
- Includes: Name, job title, description, organization link

#### ✅ Review Schema
- Used on: Case study pages
- Features: Rating, review body, author
- Service provider association

#### ✅ WebApplication Schema
- Used on: Tool pages (Cost Calculator, SLA Benchmark)
- Features: Free pricing, application category
- Provider information

#### ✅ LocalBusiness Schema
- Used on: Location pages
- Features: Address, postal code, phone

#### ✅ BreadcrumbList Schema
- Used on: All pages
- Improves navigation in search results

### 4. Conversion Tracking System
Custom hook implemented: `/src/hooks/useConversionTracking.ts`

#### Tracked Events:
- ✅ `proposal_request` - Request Proposal button clicks (Value: £1000)
- ✅ `contact_form_submit` - Contact form submissions
- ✅ `phone_click` - Phone number clicks (Value: £500)
- ✅ `download_playbook` - Switching Playbook downloads (Value: £200)
- ✅ `download_calendar` - Compliance Calendar downloads (Value: £200)
- ✅ `tool_completion` - Calculator/tool completions (Value: £300)
- ✅ `portal_demo_request` - Portal demo requests

#### Integrations Ready:
- Google Analytics 4 (gtag)
- Facebook Pixel (fbq)
- Custom analytics endpoint

### 5. Performance Optimizations

#### ✅ LazyImage Component
- Location: `/src/components/ui/lazy-image.tsx`
- Features:
  - Intersection Observer for viewport detection
  - 50px rootMargin for smooth loading
  - Placeholder with pulse animation
  - Native lazy loading attribute
  - Smooth opacity transitions

#### ✅ Index.html Optimizations
- Preconnect to external domains
- DNS prefetch for analytics
- Proper meta tags for SEO & social

## 📋 Implementation Checklist

### Immediate Actions Required:

#### 1. Replace Static Images with LazyImage Component
```tsx
// Before
<img src="/image.jpg" alt="Description" />

// After
import { LazyImage } from "@/components/ui/lazy-image";
<LazyImage src="/image.jpg" alt="Engineer testing commercial fire alarm panel (BS 5839 compliance)" />
```

#### 2. Add Alt Tags to All Images
Follow this format for descriptive, SEO-rich alt tags:

**BAD ❌:**
- "Engineer working"
- "Building"
- "Person"

**GOOD ✔:**
- "Engineer testing commercial fire alarm panel (BS 5839 compliance)"
- "Industrial HVAC system maintenance in logistics facility"
- "Corporate office reception with EntireFM branded signage"

#### 3. Convert Images to WebP/AVIF
Use modern image formats for better compression:
- Original: ~500KB JPEG
- WebP: ~150KB (70% smaller)
- AVIF: ~100KB (80% smaller)

#### 4. Implement Google Analytics 4
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### 5. Add Facebook Pixel (Optional)
Add to `index.html` before `</head>`:
```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🎯 Core Web Vitals Optimization

### Largest Contentful Paint (LCP) - Target: <2.5s
- ✅ LazyImage component with Intersection Observer
- ✅ Preconnect to external domains
- ⚠️ TODO: Optimize hero images (compress to WebP/AVIF)
- ⚠️ TODO: Implement critical CSS inline

### First Input Delay (FID) / INP - Target: <100ms
- ✅ React 18 concurrent features enabled
- ⚠️ TODO: Code splitting for routes
- ⚠️ TODO: Defer non-critical JavaScript

### Cumulative Layout Shift (CLS) - Target: <0.1
- ✅ Placeholder states in LazyImage
- ⚠️ TODO: Set explicit width/height on all images
- ⚠️ TODO: Reserve space for dynamic content

## 📊 Conversion Funnel Setup

### Primary Funnels to Track:

1. **Service Discovery → Proposal**
   - Home → Service Page → Request Proposal
   - Goal: 5% conversion rate

2. **Tool Engagement → Contact**
   - Tool Page → Complete Calculator → Request Proposal
   - Goal: 15% conversion rate

3. **Sector Research → Contact**
   - Home → Sector Page → Contact Form
   - Goal: 8% conversion rate

4. **Resource Download → Lead**
   - Resource Page → Download → Contact
   - Goal: 10% conversion rate

### Implementation:
All tracking is already set up via `useConversionTracking` hook. Just add GA4/FB tracking codes to activate.

## 🔍 SEO Monitoring

### Tools to Use:
1. **Google Search Console**
   - Submit sitemap.xml
   - Monitor indexing status
   - Check Core Web Vitals
   - Review search queries

2. **PageSpeed Insights**
   - Test all high-priority pages
   - Target: 90+ mobile, 95+ desktop

3. **Schema Markup Validator**
   - Test: https://validator.schema.org/
   - Verify all structured data

## 📈 Expected Results Timeline

### Week 1-2:
- Sitemap indexed by Google
- Schema markup appearing in search results
- Conversion tracking data populating

### Week 3-4:
- Improved rankings for location + service keywords
- Rich snippets showing in SERPs
- CWV scores improving

### Month 2-3:
- Top 3 rankings for primary keywords
- Increased organic traffic (30-50%)
- Higher conversion rates from tracking optimizations

## 🚀 Next Steps

1. ✅ Deploy sitemap.xml and robots.txt updates
2. ⚠️ Replace all images with LazyImage component
3. ⚠️ Convert images to WebP format
4. ⚠️ Add GA4 tracking code
5. ⚠️ Submit sitemap to Google Search Console
6. ⚠️ Set up conversion goals in GA4
7. ⚠️ Monitor Core Web Vitals weekly
8. ⚠️ Test schema markup in validator

---

**Ready for deployment!** All foundational SEO infrastructure is in place. Focus now shifts to content optimization and image performance.
