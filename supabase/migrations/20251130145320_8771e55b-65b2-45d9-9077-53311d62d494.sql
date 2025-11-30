-- Create jobs table for CAFM operations
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_ref TEXT NOT NULL UNIQUE,
  site_name TEXT NOT NULL,
  site_location TEXT NOT NULL,
  asset_or_area TEXT NOT NULL,
  priority TEXT NOT NULL,
  description TEXT NOT NULL,
  access_requirements TEXT,
  contact_name TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  contact_email TEXT,
  source TEXT NOT NULL DEFAULT 'web-chat',
  status TEXT NOT NULL DEFAULT 'Logged',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admins can view all jobs"
ON public.jobs
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Anyone can create jobs"
ON public.jobs
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can update jobs"
ON public.jobs
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_jobs_updated_at
BEFORE UPDATE ON public.jobs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to generate job reference
CREATE OR REPLACE FUNCTION generate_job_ref()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  next_num INTEGER;
  new_ref TEXT;
BEGIN
  -- Get the highest number from existing job refs
  SELECT COALESCE(MAX(CAST(SUBSTRING(job_ref FROM 'EFM-([0-9]+)') AS INTEGER)), 0) + 1
  INTO next_num
  FROM public.jobs;
  
  -- Format as EFM-0000
  new_ref := 'EFM-' || LPAD(next_num::TEXT, 4, '0');
  
  RETURN new_ref;
END;
$$;