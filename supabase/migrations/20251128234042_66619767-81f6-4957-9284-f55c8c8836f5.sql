-- Link validation results table
CREATE TABLE public.link_validation_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  total_links_checked INTEGER NOT NULL,
  broken_links INTEGER NOT NULL,
  health_score INTEGER NOT NULL,
  results_data JSONB NOT NULL,
  scan_duration_ms INTEGER
);

-- 404 error tracking table
CREATE TABLE public.error_404_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  url_requested TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  ip_address TEXT,
  count INTEGER NOT NULL DEFAULT 1
);

-- Index for efficient querying
CREATE INDEX idx_error_404_url ON public.error_404_logs(url_requested);
CREATE INDEX idx_error_404_created ON public.error_404_logs(created_at DESC);
CREATE INDEX idx_link_validation_created ON public.link_validation_results(created_at DESC);

-- Enable RLS
ALTER TABLE public.link_validation_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.error_404_logs ENABLE ROW LEVEL SECURITY;

-- Admin-only read access for link validation results
CREATE POLICY "Admins can view link validation results"
  ON public.link_validation_results
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

-- Admin-only read access for 404 logs
CREATE POLICY "Admins can view 404 logs"
  ON public.error_404_logs
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

-- Public insert for 404 logging (no auth required)
CREATE POLICY "Anyone can log 404 errors"
  ON public.error_404_logs
  FOR INSERT
  WITH CHECK (true);