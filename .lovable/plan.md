

## Fix EICR Manual Download and Admin Visibility

Two root-cause issues are preventing downloads and admin editing:

### Problem 1: Download button does nothing
The `handleDownload` function on the EICR Manual page (and all 4 other resource download pages) only shows a toast message -- it never calls any PDF generation function. The existing `downloadElectricalChecklist()` function in `generateCompliancePDF.ts` already generates the right type of PDF, but it's never wired up.

### Problem 2: No dedicated EICR Manual template in the database
The `pdf_templates` table has an `electrical` template (a general electrical checklist), but no `eicr-manual` template. This means it doesn't appear in the admin PDF Templates panel, and there's nothing specific to the EICR Survival Manual content to edit.

---

### Changes

**1. Create a new `eicr-manual` PDF template in the database**
- Insert a new row in `pdf_templates` with `template_key: "eicr-manual"` containing EICR-specific checklist items (EICR requirements, C1/C2/C3 codes, testing cycles, remedial priorities, contractor accreditation, BS 7671 compliance)
- This makes it appear in the admin PDF Templates panel for editing

**2. Add a `downloadEICRManual()` function to `generateCompliancePDF.ts`**
- New exported function that calls `fetchTemplate("eicr-manual", ...)` with EICR-specific fallback items, then calls `generateCompliancePDF()` to produce the PDF

**3. Wire up `handleDownload` in `EICRManual.tsx`**
- Import and call `downloadEICRManual()` so clicking "Download EICR Survival Manual" actually generates and downloads the PDF

**4. Fix the same broken download on the other 4 resource pages**
- `FireRiskGuide.tsx` -- wire to `downloadFireAlarmChecklist()`
- `EmergencyLightingChecklist.tsx` -- wire to `downloadEmergencyLightingChecklist()`
- `FGasTracker.tsx` -- wire to `downloadHVACChecklist()`
- `LegionellaGuide.tsx` -- wire to `downloadWaterHygieneChecklist()`

**5. Add "EICR Manual" to the admin display name map in `PDFTemplatesAdmin.tsx`**
- Add `"eicr-manual": "⚡ EICR Survival Manual"` to the `getTemplateDisplayName` mapping so it shows a friendly name in the admin table

---

### Technical Details

- **Database**: One `INSERT` into `pdf_templates` for the `eicr-manual` template with ~8 EICR-specific checklist items
- **`src/utils/generateCompliancePDF.ts`**: Add `eicrManualItems` array and `downloadEICRManual()` export function (same pattern as the other 5 download functions)
- **`src/pages/resources/EICRManual.tsx`**: Import `downloadEICRManual`, call it in `handleDownload`
- **`src/pages/resources/FireRiskGuide.tsx`**: Import `downloadFireAlarmChecklist`, call it in `handleDownload`
- **`src/pages/resources/EmergencyLightingChecklist.tsx`**: Import `downloadEmergencyLightingChecklist`, call it in `handleDownload`
- **`src/pages/resources/FGasTracker.tsx`**: Import `downloadHVACChecklist`, call it in `handleDownload`
- **`src/pages/resources/LegionellaGuide.tsx`**: Import `downloadWaterHygieneChecklist`, call it in `handleDownload`
- **`src/pages/admin/PDFTemplatesAdmin.tsx`**: Add one line to the display name map
- No new tables, no schema changes, no RLS changes needed
