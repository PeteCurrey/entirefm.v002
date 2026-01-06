-- Content items for blog/FM Insights
CREATE TABLE public.content_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  category TEXT NOT NULL,
  status TEXT DEFAULT 'draft',
  author_id UUID,
  featured_image TEXT,
  meta_title TEXT,
  meta_description TEXT,
  keywords TEXT[],
  scheduled_for TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Social media posts
CREATE TABLE public.social_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_item_id UUID REFERENCES public.content_items(id) ON DELETE CASCADE,
  platform TEXT NOT NULL,
  post_text TEXT NOT NULL,
  media_urls TEXT[],
  scheduled_for TIMESTAMPTZ,
  posted_at TIMESTAMPTZ,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- AI-generated media assets
CREATE TABLE public.media_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_item_id UUID REFERENCES public.content_items(id) ON DELETE SET NULL,
  type TEXT NOT NULL,
  prompt TEXT,
  url TEXT NOT NULL,
  alt_text TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Page templates
CREATE TABLE public.page_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  template_data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Dynamic pages
CREATE TABLE public.dynamic_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES public.page_templates(id) ON DELETE SET NULL,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  page_data JSONB NOT NULL DEFAULT '{}',
  meta_title TEXT,
  meta_description TEXT,
  status TEXT DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Locations database
CREATE TABLE public.locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  region TEXT,
  county TEXT,
  population INTEGER,
  key_industries TEXT[],
  coverage_areas TEXT[],
  local_context TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Service types
CREATE TABLE public.service_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  category TEXT,
  template_content JSONB DEFAULT '{}',
  faqs JSONB DEFAULT '[]',
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.content_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dynamic_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_types ENABLE ROW LEVEL SECURITY;

-- RLS Policies for content_items (admin only for management, public for published)
CREATE POLICY "Admins can manage content items" ON public.content_items FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Public can view published content" ON public.content_items FOR SELECT USING (status = 'published');

-- RLS Policies for social_posts (admin only)
CREATE POLICY "Admins can manage social posts" ON public.social_posts FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for media_assets (admin only)
CREATE POLICY "Admins can manage media assets" ON public.media_assets FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for page_templates (admin only)
CREATE POLICY "Admins can manage page templates" ON public.page_templates FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for dynamic_pages (admin for management, public for published)
CREATE POLICY "Admins can manage dynamic pages" ON public.dynamic_pages FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Public can view published pages" ON public.dynamic_pages FOR SELECT USING (status = 'published');

-- RLS Policies for locations (admin for management, public for viewing)
CREATE POLICY "Admins can manage locations" ON public.locations FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Public can view active locations" ON public.locations FOR SELECT USING (active = true);

-- RLS Policies for service_types (admin for management, public for viewing)
CREATE POLICY "Admins can manage service types" ON public.service_types FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Public can view active service types" ON public.service_types FOR SELECT USING (active = true);