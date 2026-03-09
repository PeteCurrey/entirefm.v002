
CREATE TABLE public.competitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  website TEXT,
  logo_url TEXT,
  description TEXT,
  strengths TEXT[] DEFAULT '{}',
  weaknesses TEXT[] DEFAULT '{}',
  key_services TEXT[] DEFAULT '{}',
  target_sectors TEXT[] DEFAULT '{}',
  estimated_revenue TEXT,
  employee_count TEXT,
  headquarters TEXT,
  domain_authority INTEGER,
  organic_keywords INTEGER,
  monthly_traffic TEXT,
  top_keywords JSONB DEFAULT '[]',
  content_gaps TEXT[] DEFAULT '{}',
  threat_level TEXT DEFAULT 'medium',
  notes TEXT,
  last_reviewed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.competitors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage competitors"
ON public.competitors
FOR ALL
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
