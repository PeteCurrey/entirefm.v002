

## Add Introduction Sections and Remove Unrealistic Metrics from Core Service Pages

### Overview

All 7 core service pages need two changes: (1) a proper introduction section explaining the service, and (2) removal of specific metrics that cannot be substantiated.

### Unrealistic Metrics to Remove or Replace

| Page | Current Metric | Issue | Replacement |
|---|---|---|---|
| **HVAC** | "500+ HVAC Sites" | Unverifiable claim | Remove stat |
| **HVAC** | "30% Energy Savings" | Guarantee-like | "Energy Optimisation" (qualitative) |
| **HVAC** | "99% Uptime" | Unrealistic absolute | Remove stat |
| **Electrical** | "1000+ EICRs Completed" | Unverifiable | Remove stat |
| **Electrical** | "100% Compliance Rate" | Unrealistic absolute | Remove stat |
| **Fire Safety** | "10000+ Fire Assets Maintained" | Unverifiable | Remove stat |
| **Fire Safety** | "100% Audit Pass Rate" | Unrealistic absolute | Remove stat |
| **Fire Safety** | "500+ Sites Covered" | Unverifiable | Remove stat |
| **Water Hygiene** | "Zero Outbreaks" | Dangerous guarantee | Remove stat |
| **Water Hygiene** | "100% Audit Pass Rate" | Unrealistic absolute | Remove stat |
| **Emergency Lighting** | "100% Compliance Rate" | Unrealistic absolute | Remove stat |
| **Emergency Lighting** | "Zero Test Failures" | Impossible claim | Remove stat |
| **PPM** (FAQ) | "reducing costs by up to 40%" | Unsubstantiated | Soften to "significantly" |

For pages with StatsBanner, the remaining stats will be replaced with qualitative, verifiable facts (e.g., certification types, response SLAs, coverage descriptions) rather than numerical claims.

### Replacement Stats (per page)

**HVAC**: F-Gas Certified | SFG20 Compliant | 24/7 Emergency Cover | UK Wide Coverage

**Electrical**: NICEIC Approved | Same-Day Remedials | 24/7 Emergency Cover | BS 7671 Compliant

**Fire Safety**: BS 5839 Certified | 24/7 Emergency Response | UK Wide Coverage | Digital Certification

**Water Hygiene**: ACOP L8 Compliant | UKAS Accredited Labs | Rapid Remedials | Digital Audit Trail

**Emergency Lighting**: BS 5266 Certified | 3hr Duration Tested | Rapid Remedials | Digital Certificates

### Introduction Sections to Add

Each page gets a new `ContentSection` inserted between the TrustBar and the FeatureCardGrid (or equivalent). Content will be 2-3 paragraphs explaining:
- What the service is
- Who needs it and why
- How EntireFM delivers it

| Page | Intro Title | Focus |
|---|---|---|
| **HVAC** | "What Is Commercial HVAC Maintenance?" | Explains heating, ventilation, and AC servicing obligations for commercial buildings |
| **Electrical** | "What Is Electrical Compliance Testing?" | Explains EICR, PAT, and electrical safety obligations under UK law |
| **Fire Safety** | "What Is Fire Safety Compliance?" | Explains the Responsible Person's duties under the Fire Safety Order 2005 |
| **Water Hygiene** | "What Is Water Hygiene Compliance?" | Explains Legionella risk, ACOP L8, and the duty holder's obligations |
| **Gas Safety** | "What Is Commercial Gas Safety?" | Explains Gas Safe registration requirements and CP certification |
| **Emergency Lighting** | "What Is Emergency Lighting Compliance?" | Explains BS 5266, escape route illumination, and testing obligations |
| **PPM** | "What Is Planned Preventive Maintenance?" | Explains PPM strategy, compliance integration, and lifecycle benefits |

### Additional Language Softening

- **HVAC** line 299: "typically delivering 20-30% energy savings" changed to "with potential for meaningful energy savings depending on site conditions"
- **PPM** FAQ: "reducing costs by up to 40%" changed to "significantly reducing costs over time"
- **Fire Safety** case study metric "99.8% uptime" removed -- replaced with qualitative description

### PPM Page Structure Note

The PPM page uses the old sidebar layout (with `SidebarCTA`). It will not be fully restructured in this change -- only the introduction section and metric softening will be applied. A full layout upgrade would be a separate task.

### Technical Summary

| Change | Files |
|---|---|
| Add intro ContentSection + replace stats | `src/pages/services/HVAC.tsx` |
| Add intro ContentSection + replace stats | `src/pages/services/Electrical.tsx` |
| Add intro ContentSection + replace stats | `src/pages/services/FireSafety.tsx` |
| Add intro ContentSection + replace stats | `src/pages/services/WaterHygiene.tsx` |
| Add intro ContentSection | `src/pages/services/GasSafety.tsx` |
| Add intro ContentSection + replace stats | `src/pages/services/EmergencyLighting.tsx` |
| Add intro section + soften language | `src/pages/services/PPM.tsx` |

**No new files. No new dependencies. No database changes.**
