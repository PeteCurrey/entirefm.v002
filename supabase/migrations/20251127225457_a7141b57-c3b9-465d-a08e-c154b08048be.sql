-- Add missing columns to contact_submissions table
ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS sector text,
ADD COLUMN IF NOT EXISTS location text,
ADD COLUMN IF NOT EXISTS subject text,
ADD COLUMN IF NOT EXISTS source_page text;