

## Enhance All Tool Pages with Premium Design and Informative Content

### Current State
All 6 tool pages (PPM Calculator, Cost Savings Calculator, SLA Benchmark, TM44 Checker, Water Risk Grader, Risk Diagnostic) share a similar pattern: a `ToolHero` at the top, then immediately into a form/results layout with plain white backgrounds. None have a proper introduction section explaining what the tool is and why it matters. Some use overly assertive language (e.g., "No Vendor Survives This Comparison").

### What's Changing

**For all 6 tools**, the following enhancements will be applied:

1. **Introduction Section** -- Add a `ContentSection` below the hero with a clear explanation of what the tool does, who it's for, and why it matters. Written informatively, not as guarantees.

2. **Visual Upgrades** -- Wrap calculator/form sections in alternating `ContentSection` variants (muted, gradient) to break up the page visually, matching the premium pattern used across service and location pages.

3. **Language Audit** -- Remove any guarantees or overly aggressive claims. Replace with softer, professional language:
   - "No Vendor Survives This Comparison" becomes "How Does Your Provider Compare?"
   - Results framed as "estimates" and "indicative" rather than definitive
   - Add small disclaimers where appropriate (e.g., "Results are indicative and based on industry benchmarks")

4. **Bottom CTA** -- Replace inline CTAs with the shared `CTASection` component for consistency.

5. **Animation** -- Wrap key content blocks in `motion.div` with scroll-triggered fade-in animations.

### Per-Tool Changes

| Tool | Introduction Focus | Language Changes |
|---|---|---|
| **PPM Calculator** | Explains what PPM is, why reactive costs escalate, and how this tool helps estimate ROI | Remove toast saying "report sent to email" (it doesn't actually send). Add "estimates are indicative" note |
| **Cost Savings Calculator** | Explains the reactive vs preventive maintenance cost difference and who benefits from calculating | Add "indicative estimates" disclaimer to results |
| **SLA Benchmark** | Explains what SLA benchmarking is, what metrics matter, and how comparing helps decision-making | Change "No Vendor Survives This Comparison" to "How Does Your Provider Compare?" and soften "Performance Gap Identified" messaging |
| **TM44 Checker** | Already has good "What is TM44?" content -- enhance with fuller intro section above the form | Review penalty language for accuracy |
| **Water Risk Grader** | Explains ACOP L8 obligations, what legionella risk means, and why regular assessment matters | Already good -- add "indicative assessment" note |
| **Risk Diagnostic** | Explains what a compliance diagnostic is, who the Responsible Person is, and what risks exist | Soften "Is Your FM Provider Putting You at Risk?" to be less accusatory. Add disclaimer that results are indicative |

### Detailed File Changes

**`src/pages/tools/PPMCalculator.tsx`**
- Add `ContentSection` import and intro section below hero with 2-3 paragraphs about PPM
- Add "How It Works" mini-section with 3 icon steps
- Wrap form area in `ContentSection` variant="muted"
- Replace bottom area with `CTASection`
- Add disclaimer text below results: "These figures are indicative estimates based on industry benchmarks"
- Remove misleading toast about emailing a report

**`src/pages/tools/CostSavingsCalculator.tsx`**
- Add intro `ContentSection` explaining reactive vs preventive cost dynamics
- Add "How It Works" steps section
- Wrap calculator in `ContentSection` variant="muted"
- Add disclaimer to results card
- Replace bottom CTA section with shared `CTASection`

**`src/pages/tools/SLABenchmark.tsx`**
- Add intro `ContentSection` explaining SLA benchmarking and why it matters
- Change "No Vendor Survives This Comparison" to "How Does Your Provider Compare?"
- Soften "Performance Gap Identified" to "Areas for Improvement"
- Add disclaimer: "Benchmarks are based on industry standards and may vary"
- Wrap form in `ContentSection` variant="muted"
- Replace bottom CTA with shared `CTASection`

**`src/pages/tools/TM44Checker.tsx`**
- Move and expand the "What is TM44?" content into a full intro `ContentSection` above the form
- Add "How It Works" steps
- Wrap form in `ContentSection` variant="muted"
- Add `CTASection` at bottom
- Add disclaimer on results

**`src/pages/tools/WaterRiskGrader.tsx`**
- Expand "Why Assess Water Risk?" into a full intro `ContentSection`
- Add "How It Works" steps
- Wrap form in `ContentSection` variant="muted"
- Add `CTASection` at bottom
- Add disclaimer: "This is an indicative assessment and does not replace a formal ACOP L8 risk assessment"

**`src/pages/ComplianceDiagnostic.tsx`**
- Add intro `ContentSection` explaining compliance diagnostics and Responsible Person obligations
- Soften hero title from "Is Your FM Provider Putting You at Risk?" to something like "How Compliant Is Your Estate?"
- Change `bg-white` on the diagnostic flow section to use `ContentSection` variant="muted"
- Replace bottom CTA with shared `CTASection`
- Add disclaimer to results: "This is an indicative risk assessment and does not constitute formal compliance advice"

### Components Reused
- `ContentSection` (existing) for intro sections and visual wrapping
- `CTASection` (existing) for consistent bottom calls-to-action
- `motion.div` from framer-motion for scroll animations
- All existing form components remain unchanged

### What's NOT Changing
- Calculator logic and form fields stay the same
- ToolHero component stays as-is (already premium)
- Schema markup and SEO meta remain
- Breadcrumb positioning stays

### No database changes. No new dependencies.

