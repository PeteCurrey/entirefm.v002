-- Create GSC connections table to store OAuth tokens per user/site
CREATE TABLE IF NOT EXISTS public.gsc_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  site_url TEXT NOT NULL,
  access_token TEXT,
  refresh_token TEXT,
  token_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, site_url)
);

-- Create GSC crawl data cache table
CREATE TABLE IF NOT EXISTS public.gsc_crawl_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  connection_id UUID REFERENCES public.gsc_connections(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  last_crawled TIMESTAMPTZ,
  crawl_status TEXT,
  indexed BOOLEAN DEFAULT false,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  position DECIMAL(5,2),
  fetched_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(connection_id, url)
);

-- Enable Row Level Security
ALTER TABLE public.gsc_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gsc_crawl_data ENABLE ROW LEVEL SECURITY;

-- RLS Policies for gsc_connections
CREATE POLICY "Users can view their own GSC connections"
  ON public.gsc_connections
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own GSC connections"
  ON public.gsc_connections
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own GSC connections"
  ON public.gsc_connections
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own GSC connections"
  ON public.gsc_connections
  FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for gsc_crawl_data
CREATE POLICY "Users can view their own GSC crawl data"
  ON public.gsc_crawl_data
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.gsc_connections
      WHERE gsc_connections.id = gsc_crawl_data.connection_id
      AND gsc_connections.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert their own GSC crawl data"
  ON public.gsc_crawl_data
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.gsc_connections
      WHERE gsc_connections.id = gsc_crawl_data.connection_id
      AND gsc_connections.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update their own GSC crawl data"
  ON public.gsc_crawl_data
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.gsc_connections
      WHERE gsc_connections.id = gsc_crawl_data.connection_id
      AND gsc_connections.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete their own GSC crawl data"
  ON public.gsc_crawl_data
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.gsc_connections
      WHERE gsc_connections.id = gsc_crawl_data.connection_id
      AND gsc_connections.user_id = auth.uid()
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_gsc_connections_user_id ON public.gsc_connections(user_id);
CREATE INDEX IF NOT EXISTS idx_gsc_crawl_data_connection_id ON public.gsc_crawl_data(connection_id);
CREATE INDEX IF NOT EXISTS idx_gsc_crawl_data_url ON public.gsc_crawl_data(url);

-- Add trigger to update updated_at timestamp
CREATE TRIGGER update_gsc_connections_updated_at
  BEFORE UPDATE ON public.gsc_connections
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();