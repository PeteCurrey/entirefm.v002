-- Create table for user alert preferences
CREATE TABLE IF NOT EXISTS public.gsc_alert_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  alert_frequency TEXT DEFAULT 'daily' CHECK (alert_frequency IN ('daily', 'weekly', 'immediate')),
  alert_types JSONB DEFAULT '["indexation_issues", "crawl_errors", "performance_drops"]'::jsonb,
  enabled BOOLEAN DEFAULT true,
  last_alert_sent TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id)
);

-- Create table to track alert history
CREATE TABLE IF NOT EXISTS public.gsc_alert_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  alert_type TEXT NOT NULL,
  alert_data JSONB NOT NULL,
  sent_at TIMESTAMPTZ DEFAULT now(),
  email_sent_to TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.gsc_alert_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gsc_alert_history ENABLE ROW LEVEL SECURITY;

-- RLS Policies for gsc_alert_preferences
CREATE POLICY "Users can view their own alert preferences"
  ON public.gsc_alert_preferences
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own alert preferences"
  ON public.gsc_alert_preferences
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own alert preferences"
  ON public.gsc_alert_preferences
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own alert preferences"
  ON public.gsc_alert_preferences
  FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for gsc_alert_history
CREATE POLICY "Users can view their own alert history"
  ON public.gsc_alert_history
  FOR SELECT
  USING (auth.uid() = user_id);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_gsc_alert_preferences_user_id ON public.gsc_alert_preferences(user_id);
CREATE INDEX IF NOT EXISTS idx_gsc_alert_history_user_id ON public.gsc_alert_history(user_id);
CREATE INDEX IF NOT EXISTS idx_gsc_alert_history_sent_at ON public.gsc_alert_history(sent_at);

-- Add trigger to update updated_at timestamp
CREATE TRIGGER update_gsc_alert_preferences_updated_at
  BEFORE UPDATE ON public.gsc_alert_preferences
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();