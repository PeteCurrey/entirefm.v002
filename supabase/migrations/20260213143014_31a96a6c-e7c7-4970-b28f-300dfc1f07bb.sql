INSERT INTO public.pdf_templates (template_key, title, subtitle, company_name, footer_note, items)
VALUES (
  'eicr-manual',
  'EICR Survival Manual',
  'Electrical Installation Condition Report — Compliance Checklist',
  'EntireFM',
  'Based on BS 7671 (IET Wiring Regulations) and Electricity at Work Regulations 1989. For guidance only.',
  '[
    {"system": "EICR Testing Cycle", "frequency": "Every 5 years", "regulation": "BS 7671", "scope": "All fixed electrical installations"},
    {"system": "C1 (Danger Present) Remedials", "frequency": "Immediate", "regulation": "EAW 1989", "scope": "Defects posing immediate risk of injury"},
    {"system": "C2 (Potentially Dangerous) Remedials", "frequency": "Within 28 days", "regulation": "BS 7671", "scope": "Defects likely to become dangerous"},
    {"system": "C3 (Improvement Recommended)", "frequency": "Next inspection", "regulation": "BS 7671", "scope": "Non-compliant but not immediately dangerous"},
    {"system": "FI (Further Investigation)", "frequency": "As required", "regulation": "BS 7671", "scope": "Areas requiring additional testing or access"},
    {"system": "Contractor Accreditation Check", "frequency": "Annual", "regulation": "NICEIC/NAPIT", "scope": "Verify contractor competent person scheme membership"},
    {"system": "Distribution Board Inspection", "frequency": "Every 5 years", "regulation": "BS 7671", "scope": "Consumer units, RCDs, MCBs, labelling"},
    {"system": "Emergency Lighting Circuit Test", "frequency": "Monthly/Annual", "regulation": "BS 5266", "scope": "Emergency lighting on electrical circuits"}
  ]'::jsonb
)
ON CONFLICT (template_key) DO NOTHING;