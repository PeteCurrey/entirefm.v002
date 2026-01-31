-- Create client_logos table for the "Trusted by" section
CREATE TABLE public.client_logos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.client_logos ENABLE ROW LEVEL SECURITY;

-- Public can view active logos
CREATE POLICY "Public can view active client logos"
ON public.client_logos
FOR SELECT
USING (active = true);

-- Admins can manage all logos
CREATE POLICY "Admins can manage client logos"
ON public.client_logos
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_client_logos_updated_at
BEFORE UPDATE ON public.client_logos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for client logos
INSERT INTO storage.buckets (id, name, public) VALUES ('client-logos', 'client-logos', true);

-- Storage policies for client logos bucket
CREATE POLICY "Public can view client logos"
ON storage.objects
FOR SELECT
USING (bucket_id = 'client-logos');

CREATE POLICY "Admins can upload client logos"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'client-logos' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update client logos"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'client-logos' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete client logos"
ON storage.objects
FOR DELETE
USING (bucket_id = 'client-logos' AND has_role(auth.uid(), 'admin'::app_role));