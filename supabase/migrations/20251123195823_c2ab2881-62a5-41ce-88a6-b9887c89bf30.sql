-- Create supplier_applications table
CREATE TABLE public.supplier_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  registered_address TEXT NOT NULL,
  years_established INTEGER NOT NULL,
  website TEXT,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  regions TEXT[] NOT NULL,
  service_categories TEXT[] NOT NULL,
  insurance_documents JSONB DEFAULT '[]'::jsonb,
  accreditation_documents JSONB DEFAULT '[]'::jsonb,
  rams_template JSONB,
  has_safety_policy BOOLEAN DEFAULT false,
  has_near_miss_reporting BOOLEAN DEFAULT false,
  has_engineer_qualification_tracking BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.supplier_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit applications
CREATE POLICY "Anyone can submit supplier applications"
ON public.supplier_applications
FOR INSERT
WITH CHECK (true);

-- Admins can view all applications
CREATE POLICY "Admins can view all supplier applications"
ON public.supplier_applications
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update applications
CREATE POLICY "Admins can update supplier applications"
ON public.supplier_applications
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create updated_at trigger
CREATE TRIGGER update_supplier_applications_updated_at
BEFORE UPDATE ON public.supplier_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for performance
CREATE INDEX idx_supplier_applications_status ON public.supplier_applications(status);
CREATE INDEX idx_supplier_applications_created_at ON public.supplier_applications(created_at DESC);
CREATE INDEX idx_supplier_applications_email ON public.supplier_applications(email);

-- Create storage bucket for supplier documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('supplier-documents', 'supplier-documents', false);

-- Storage policies for supplier documents
CREATE POLICY "Anyone can upload supplier documents"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'supplier-documents');

CREATE POLICY "Users can view their own documents"
ON storage.objects
FOR SELECT
USING (bucket_id = 'supplier-documents');

CREATE POLICY "Admins can view all supplier documents"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'supplier-documents' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete supplier documents"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'supplier-documents' 
  AND has_role(auth.uid(), 'admin'::app_role)
);