-- Create helpdesk_jobs table
CREATE TABLE public.helpdesk_jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'new',
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  site_location TEXT NOT NULL,
  category TEXT NOT NULL,
  priority TEXT NOT NULL,
  asset_reference TEXT NOT NULL,
  description TEXT NOT NULL,
  source_page TEXT,
  ai_summary TEXT,
  attachment_url TEXT
);

-- Enable RLS
ALTER TABLE public.helpdesk_jobs ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit jobs
CREATE POLICY "Anyone can submit helpdesk jobs"
ON public.helpdesk_jobs
FOR INSERT
WITH CHECK (true);

-- Admins can view all jobs
CREATE POLICY "Admins can view all helpdesk jobs"
ON public.helpdesk_jobs
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update jobs
CREATE POLICY "Admins can update helpdesk jobs"
ON public.helpdesk_jobs
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster queries
CREATE INDEX idx_helpdesk_jobs_status ON public.helpdesk_jobs(status);
CREATE INDEX idx_helpdesk_jobs_created_at ON public.helpdesk_jobs(created_at DESC);