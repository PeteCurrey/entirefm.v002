-- Fix function search_path for generate_job_ref
CREATE OR REPLACE FUNCTION public.generate_job_ref()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
DECLARE
  next_num INTEGER;
  new_ref TEXT;
BEGIN
  -- Get the highest number from existing job refs
  SELECT COALESCE(MAX(CAST(SUBSTRING(job_ref FROM 'EFM-([0-9]+)') AS INTEGER)), 0) + 1
  INTO next_num
  FROM public.jobs;
  
  -- Format as EFM-0000
  new_ref := 'EFM-' || LPAD(next_num::TEXT, 4, '0');
  
  RETURN new_ref;
END;
$function$;

-- Restrict anonymous access to storage by requiring authentication for helpdesk attachments
-- Remove the overly permissive anonymous policy
DROP POLICY IF EXISTS "Attachments are publicly accessible" ON storage.objects;

-- Add authenticated-only policy for helpdesk attachments SELECT
CREATE POLICY "Authenticated users can view helpdesk attachments"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'helpdesk-attachments');

-- Add authenticated-only policy for helpdesk attachments INSERT
CREATE POLICY "Authenticated users can upload helpdesk attachments"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'helpdesk-attachments');