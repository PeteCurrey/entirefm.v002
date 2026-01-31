-- Create job activity log table for tracking all changes
CREATE TABLE public.job_activity_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL,
  job_type TEXT NOT NULL CHECK (job_type IN ('cafm', 'helpdesk')),
  action TEXT NOT NULL,
  field_name TEXT,
  old_value TEXT,
  new_value TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by TEXT
);

-- Create index for fast lookups by job
CREATE INDEX idx_job_activity_logs_job ON public.job_activity_logs(job_id, job_type);
CREATE INDEX idx_job_activity_logs_created ON public.job_activity_logs(created_at DESC);

-- Enable RLS
ALTER TABLE public.job_activity_logs ENABLE ROW LEVEL SECURITY;

-- Admins can view all activity logs
CREATE POLICY "Admins can view job activity logs"
  ON public.job_activity_logs
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can insert activity logs
CREATE POLICY "Admins can insert job activity logs"
  ON public.job_activity_logs
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));