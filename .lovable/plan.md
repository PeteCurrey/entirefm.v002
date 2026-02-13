

## Build Out Routine Service Pages and Upgrade Helpdesk/Support Pages

### Overview

This plan covers two workstreams: (1) upgrading existing pages that use the old sidebar layout to the premium full-width design, and (2) creating new pages for routine/day-to-day services that are currently missing.

### Workstream 1: Upgrade Existing Pages to Premium Layout

These 3 pages currently use the old sidebar layout (with `SidebarCTA`) and need upgrading to the full-width premium pattern (ServiceHeroSection, ContentSection, TrustBar, FeatureCardGrid, CTASection, FAQSection):

**`src/pages/services/BuildingFabric.tsx`** (currently old sidebar layout)
- Replace sidebar layout with full-width ServiceHeroSection
- Add intro ContentSection explaining what building fabric maintenance covers
- Add FeatureCardGrid for sub-services (internal repairs, external structure, fire doors, joinery, paint/decor, accessibility)
- Add StatsBanner with qualitative stats (Multi-Trade, Same-Day Response, UK Wide, Digital Reporting)
- Replace inline CTA with shared CTASection
- Remove unrealistic FAQ claim "reduce reactive requests by 30-50%"

**`src/pages/services/EmergencyResponse.tsx`** (currently old sidebar layout)
- Replace sidebar layout with full-width ServiceHeroSection
- Add intro ContentSection explaining what emergency response covers
- Add FeatureCardGrid for emergency categories (fire, water, electrical, HVAC, lift)
- Add StatsBanner with qualitative stats (24/7/365, Multi-Trade, Immediate Dispatch, UK Wide)
- Replace inline CTA with shared CTASection

**`src/pages/services/CommercialPlumbing.tsx`** (currently old sidebar layout)
- Replace sidebar layout with full-width ServiceHeroSection
- Add intro ContentSection
- Add FeatureCardGrid and StatsBanner
- Replace inline CTA with shared CTASection

### Workstream 2: Unrealistic Metrics Cleanup on Existing Premium Pages

**`src/pages/fm-operations/Helpdesk.tsx`**
- Remove stat "41 min Avg Response" (unverifiable)
- Remove stat "80% First-Time Fix" (unverifiable)
- Remove stat "98% SLA Compliance" (unrealistic absolute)
- Replace with qualitative: 24/7/365 | Multi-Channel | Real-Time Tracking | UK Wide
- Remove "80%+ First-Time Fix" from keyFeatures description -- soften to "High first-time fix rates"
- Add intro ContentSection between hero and key features

**`src/pages/fm-operations/ReactiveMaintenance.tsx`**
- Remove stat "80% First-Time Fix" and "95% SLA Compliance"
- Replace with qualitative: P1 Priority | Data-Led | Transparent SLAs | UK Wide
- Add intro ContentSection
- Soften "P1 emergencies attended within 1 hour" to "P1 emergencies prioritised for immediate dispatch"

### Workstream 3: New Routine Service Pages

Create 4 new pages using the premium full-width layout pattern (matching HVAC, Electrical, etc.):

**`src/pages/services/LeakDetectionRepair.tsx`** -- `/services/leak-detection-repair`
- ServiceHeroSection: "Leak Detection and Repair Services"
- Intro ContentSection: Explains water damage risks, hidden leaks, and why rapid response matters
- FeatureCardGrid: Burst pipes, roof leaks, internal leaks, thermal imaging, trace-and-access, temporary containment
- StatsBanner: Rapid Response | Trace & Access | Thermal Imaging | 24/7 Cover
- Testing frequency table for water system inspections
- FAQSection and CTASection

**`src/pages/services/ElectricalDefects.tsx`** -- `/services/electrical-defects`
- ServiceHeroSection: "Electrical Fault Finding and Remedial Works"
- Intro ContentSection: Explains common electrical defects (tripping circuits, faulty sockets, lighting failures), safety obligations, and when remedials are needed
- FeatureCardGrid: Circuit faults, lighting repairs, socket/switch replacement, distribution board work, emergency power loss, minor installations
- StatsBanner: NICEIC Approved | Same-Day Remedials | BS 7671 Compliant | 24/7 Cover
- FAQSection and CTASection

**`src/pages/services/GeneralMaintenance.tsx`** -- `/services/general-maintenance`
- ServiceHeroSection: "General Maintenance and Handyman Services"
- Intro ContentSection: Explains the role of multi-skilled maintenance in commercial buildings -- furniture assembly, signage, notice boards, shelving, minor adjustments, snagging works
- FeatureCardGrid: Fixtures and fittings, furniture assembly, signage installation, snagging and defects, minor carpentry, general repairs
- StatsBanner: Multi-Skilled | Same-Day Service | UK Wide | No Job Too Small
- FAQSection and CTASection

**`src/pages/services/OutOfHoursSupport.tsx`** -- `/services/out-of-hours-support`
- ServiceHeroSection: "Out of Hours Support and Emergency Attendance"
- Intro ContentSection: Explains why 24/7 coverage matters for commercial estates -- tenant obligations, insurance requirements, building security, critical system failures outside business hours
- FeatureCardGrid: Emergency callouts, security attendance, alarm response, engineer dispatch, BMS monitoring, site lockdown
- StatsBanner: 24/7/365 | Multi-Trade | Immediate Triage | UK Wide
- How it works section (call receipt, triage, dispatch, resolution)
- FAQSection and CTASection

### Routing

Add 4 new routes to `src/App.tsx`:
- `/services/leak-detection-repair` -> LeakDetectionRepair
- `/services/electrical-defects` -> ElectricalDefects
- `/services/general-maintenance` -> GeneralMaintenance
- `/services/out-of-hours-support` -> OutOfHoursSupport

### Per-Page Components Used

All pages follow the same premium pattern:
- ServiceHeroSection (hero with breadcrumbs, stats, CTAs)
- TrustBar (accreditation logos)
- ContentSection (intro, how-it-works, compliance sections)
- FeatureCardGrid (sub-service cards)
- StatsBanner (qualitative stats only -- no unverifiable numbers)
- CTASection (shared bottom CTA)
- FAQSection (4-5 relevant FAQs per page)
- ServiceSchema, FAQSchema, BreadcrumbSchema (SEO structured data)

### Files Summary

| Action | File |
|---|---|
| Rewrite (upgrade layout) | `src/pages/services/BuildingFabric.tsx` |
| Rewrite (upgrade layout) | `src/pages/services/EmergencyResponse.tsx` |
| Rewrite (upgrade layout) | `src/pages/services/CommercialPlumbing.tsx` |
| Edit (metrics + intro) | `src/pages/fm-operations/Helpdesk.tsx` |
| Edit (metrics + intro) | `src/pages/fm-operations/ReactiveMaintenance.tsx` |
| Create | `src/pages/services/LeakDetectionRepair.tsx` |
| Create | `src/pages/services/ElectricalDefects.tsx` |
| Create | `src/pages/services/GeneralMaintenance.tsx` |
| Create | `src/pages/services/OutOfHoursSupport.tsx` |
| Edit (add routes) | `src/App.tsx` |

### No database changes. No new dependencies.

