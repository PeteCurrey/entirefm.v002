-- Create enum for section types
CREATE TYPE public.section_type AS ENUM (
  'hero',
  'text',
  'image',
  'two_column',
  'three_column',
  'cards_grid',
  'features',
  'testimonials',
  'cta',
  'faq',
  'stats',
  'gallery',
  'video',
  'custom'
);

-- Create page_content table to store all editable page content
CREATE TABLE public.page_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path TEXT NOT NULL,
  page_title TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  is_published BOOLEAN DEFAULT false,
  sections JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  published_at TIMESTAMPTZ,
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id),
  version INTEGER DEFAULT 1,
  UNIQUE(page_path)
);

-- Create page_content_versions table for version history
CREATE TABLE public.page_content_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_content_id UUID REFERENCES public.page_content(id) ON DELETE CASCADE NOT NULL,
  version INTEGER NOT NULL,
  sections JSONB NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Create cms_media table for uploaded media assets
CREATE TABLE public.cms_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_url TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  width INTEGER,
  height INTEGER,
  alt_text TEXT,
  folder TEXT DEFAULT 'general',
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  uploaded_by UUID REFERENCES auth.users(id)
);

-- Enable RLS on all tables
ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_content_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cms_media ENABLE ROW LEVEL SECURITY;

-- RLS policies for page_content
CREATE POLICY "Admins can manage page content"
ON public.page_content
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can view published page content"
ON public.page_content
FOR SELECT
USING (is_published = true);

-- RLS policies for page_content_versions
CREATE POLICY "Admins can manage content versions"
ON public.page_content_versions
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS policies for cms_media
CREATE POLICY "Admins can manage media"
ON public.cms_media
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can view media"
ON public.cms_media
FOR SELECT
USING (true);

-- Create trigger for updated_at
CREATE TRIGGER update_page_content_updated_at
BEFORE UPDATE ON public.page_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for CMS media
INSERT INTO storage.buckets (id, name, public) VALUES ('cms-media', 'cms-media', true);

-- Storage policies for cms-media bucket
CREATE POLICY "Anyone can view CMS media"
ON storage.objects
FOR SELECT
USING (bucket_id = 'cms-media');

CREATE POLICY "Admins can upload CMS media"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'cms-media' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update CMS media"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'cms-media' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete CMS media"
ON storage.objects
FOR DELETE
USING (bucket_id = 'cms-media' AND has_role(auth.uid(), 'admin'::app_role));