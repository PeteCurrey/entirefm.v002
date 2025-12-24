-- Create search_analytics table to persist search queries
CREATE TABLE public.search_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query TEXT NOT NULL,
  results_count INTEGER NOT NULL DEFAULT 0,
  clicked_result TEXT,
  click_position INTEGER,
  category TEXT,
  source_page TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.search_analytics ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert search tracking (anonymous tracking)
CREATE POLICY "Anyone can track searches"
ON public.search_analytics
FOR INSERT
WITH CHECK (true);

-- Only admins can view search analytics
CREATE POLICY "Admins can view search analytics"
ON public.search_analytics
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete search analytics
CREATE POLICY "Admins can delete search analytics"
ON public.search_analytics
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster queries on common filters
CREATE INDEX idx_search_analytics_created_at ON public.search_analytics(created_at DESC);
CREATE INDEX idx_search_analytics_query ON public.search_analytics(query);