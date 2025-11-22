# Image Alt-Tag & Visual Asset Guide

## 🎯 Alt-Tag Best Practices

Alt tags must:
1. **Describe action + asset** (What's happening in the image)
2. **Reinforce SEO keywords naturally** (Include relevant search terms)
3. **Avoid generic descriptions** (Be specific and descriptive)
4. **Include compliance standards** when relevant (BS codes, certifications)

---

## ✅ GOOD vs ❌ BAD Examples

### Service Pages

#### HVAC Maintenance
❌ **BAD:** "Technician working"  
✔ **GOOD:** "Engineer inspecting commercial HVAC system for preventive maintenance compliance"

❌ **BAD:** "Air conditioning unit"  
✔ **GOOD:** "Industrial air handling unit undergoing PPM inspection (CIBSE standards)"

#### Fire Safety
❌ **BAD:** "Fire alarm"  
✔ **GOOD:** "Engineer testing commercial fire alarm panel (BS 5839 compliance)"

❌ **BAD:** "Emergency lighting"  
✔ **GOOD:** "Emergency lighting testing with certification (BS 5266-1 compliance)"

#### Water Hygiene
❌ **BAD:** "Water testing"  
✔ **GOOD:** "Legionella testing and water sampling (ACOP L8 compliance)"

❌ **BAD:** "Pipes"  
✔ **GOOD:** "Commercial water system monitoring for legionella prevention"

### Sector Pages

#### Logistics & Industrial
❌ **BAD:** "Warehouse"  
✔ **GOOD:** "Industrial logistics facility with EntireFM maintenance team on-site"

❌ **BAD:** "Forklift"  
✔ **GOOD:** "Warehouse loading bay with FM compliance signage and safety systems"

#### Retail & Service Stations
❌ **BAD:** "Shop front"  
✔ **GOOD:** "Retail forecourt with branded lighting and safety compliance systems"

❌ **BAD:** "Gas station"  
✔ **GOOD:** "Service station electrical compliance upgrade with minimal disruption"

#### Corporate Offices
❌ **BAD:** "Office space"  
✔ **GOOD:** "Corporate headquarters reception area maintained by EntireFM"

❌ **BAD:** "Meeting room"  
✔ **GOOD:** "Modern office workspace with HVAC comfort optimization and IAQ monitoring"

### Location Pages

❌ **BAD:** "London skyline"  
✔ **GOOD:** "EntireFM facilities management services across London commercial properties"

❌ **BAD:** "Manchester building"  
✔ **GOOD:** "Manchester corporate office maintained by EntireFM with 24/7 helpdesk support"

### Case Studies

#### Before & After
❌ **BAD:** "Before photo"  
✔ **GOOD:** "Industrial facility before EntireFM fabric maintenance upgrade"

❌ **BAD:** "After renovation"  
✔ **GOOD:** "Retail reception after EntireFM lighting and presentation improvements"

#### Results & Metrics
❌ **BAD:** "Graph"  
✔ **GOOD:** "Cost savings dashboard showing 40% reactive maintenance reduction"

❌ **BAD:** "Chart"  
✔ **GOOD:** "SLA performance metrics exceeding industry standards for logistics FM"

### Engineer & Team Photos

❌ **BAD:** "Team photo"  
✔ **GOOD:** "EntireFM certified engineers performing planned preventive maintenance"

❌ **BAD:** "Person in uniform"  
✔ **GOOD:** "Gas Safe registered engineer conducting commercial boiler safety inspection"

❌ **BAD:** "Worker on site"  
✔ **GOOD:** "Electrical compliance engineer testing EICR systems in corporate office"

### Equipment & Assets

❌ **BAD:** "Electrical panel"  
✔ **GOOD:** "Commercial electrical distribution board during EICR compliance inspection"

❌ **BAD:** "Boiler"  
✔ **GOOD:** "Industrial gas boiler system undergoing annual safety certification"

❌ **BAD:** "Fire extinguisher"  
✔ **GOOD:** "Fire suppression systems maintenance with sprinkler testing (BS EN 12845)"

---

## 📋 Alt-Tag Templates by Content Type

### Hero Images
```
"[Sector] facilities management by EntireFM - [Key Benefit]"

Examples:
- "Corporate office facilities management by EntireFM - 24/7 uptime and compliance"
- "Industrial logistics FM services - Proactive maintenance and safety compliance"
```

### Service Demonstrations
```
"Engineer [action] [asset] ([standard/certification])"

Examples:
- "Engineer testing fire alarm control panel (BS 5839-1 compliance)"
- "Technician performing HVAC maintenance (CIBSE guidance)"
```

### Facility Types
```
"[Environment type] showing [FM element] by EntireFM"

Examples:
- "Modern corporate reception showing EntireFM front-of-house maintenance"
- "Industrial plant floor with EntireFM safety compliance systems"
```

### Results & Metrics
```
"[Metric type] showing [improvement] for [client/sector]"

Examples:
- "Cost reduction dashboard showing 45% savings for retail client"
- "SLA performance metrics exceeding 95% first-time fix rate"
```

### Before & After
```
"[Location] [before/after] EntireFM [service type]"

Examples:
- "Reception area before EntireFM fabric repair and lighting upgrade"
- "Office space after EntireFM comfort optimization and IAQ improvement"
```

---

## 🎯 Keyword Integration Strategy

### Primary Keywords to Include:
- Facilities management / FM
- Compliance (+ specific standards: BS 5839, ACOP L8, BS 5266)
- Maintenance (planned, preventive, reactive)
- Engineer / technician
- Sector-specific terms (retail, logistics, corporate, industrial)
- Location terms (London FM, Manchester facilities management)

### Secondary Keywords:
- Life safety systems
- Building fabric
- H&S governance
- SLA performance
- 24/7 helpdesk
- Uptime optimization
- Cost reduction

### Compliance Standards to Reference:
- **Fire:** BS 5839-1, BS EN 54
- **Emergency Lighting:** BS 5266-1, BS EN 1838
- **Water:** ACOP L8, HSG274
- **Gas:** Gas Safety (Installation and Use) Regulations
- **Electrical:** BS 7671, EICR
- **HVAC:** CIBSE TM40, HSG 274
- **Sprinklers:** BS EN 12845

---

## 🔍 Accessibility Requirements

All images MUST have alt text for:
1. **Screen reader users** - Descriptive content
2. **SEO ranking** - Keyword optimization
3. **Context when images fail to load** - Meaningful fallback

### Decorative Images
If an image is purely decorative (no informational value):
```html
<img src="decoration.jpg" alt="" role="presentation" />
```

### Complex Images (Charts/Diagrams)
Provide detailed descriptions:
```html
<img 
  src="performance-chart.jpg" 
  alt="Bar chart showing 40% reduction in reactive costs, 95% SLA compliance, and 53% downtime decrease after switching to EntireFM PPM"
  longdesc="performance-details.html"
/>
```

---

## 📊 Image Quality Standards

### Resolution Requirements:
- **Hero images:** 1920x1080 (16:9)
- **Service cards:** 800x600 (4:3)
- **Case study images:** 1200x800 (3:2)
- **Team photos:** 600x600 (1:1)
- **Icons/logos:** SVG (vector) where possible

### Format Optimization:
1. **Primary:** WebP (70% smaller than JPEG)
2. **Fallback:** JPEG (optimized, 80% quality)
3. **Alpha channel:** PNG only when necessary
4. **Modern browsers:** AVIF (80% smaller than JPEG)

### File Size Targets:
- Hero images: < 200KB (WebP)
- Service images: < 100KB (WebP)
- Icons: < 10KB (SVG)
- Team photos: < 80KB (WebP)

---

## 🚀 Implementation Checklist

### Phase 1: Audit Existing Images
- [ ] List all images across the site
- [ ] Identify missing alt tags
- [ ] Flag generic descriptions for rewrite

### Phase 2: Write Descriptive Alt Tags
- [ ] Service pages (10 pages x 3-5 images = ~40 images)
- [ ] Sector pages (6 pages x 3-5 images = ~24 images)
- [ ] Location pages (7 pages x 2-3 images = ~18 images)
- [ ] Case studies (9 pages x 4-6 images = ~45 images)
- [ ] Home page (8-10 images)

### Phase 3: Optimize Image Assets
- [ ] Convert all JPEGs to WebP
- [ ] Compress images (target 70% reduction)
- [ ] Add width/height attributes to prevent CLS
- [ ] Implement lazy loading with LazyImage component

### Phase 4: Test & Validate
- [ ] Run accessibility audit (WAVE, axe)
- [ ] Verify screen reader compatibility
- [ ] Check PageSpeed Insights image scores
- [ ] Validate all alt tags are descriptive

---

## ✅ Final Quality Check

Before publishing any image, verify:
1. ✅ Alt tag describes action + asset
2. ✅ Keywords included naturally (not stuffed)
3. ✅ Compliance standards mentioned where relevant
4. ✅ No generic terms like "image", "photo", "picture"
5. ✅ File optimized (WebP < 200KB)
6. ✅ Width/height attributes set
7. ✅ Lazy loading enabled (LazyImage component)

---

**Remember:** Every image is an SEO opportunity. Make it count.
