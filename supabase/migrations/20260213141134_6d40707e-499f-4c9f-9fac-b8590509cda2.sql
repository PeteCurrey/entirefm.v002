
-- Add folder and assigned_to columns to contact_submissions
ALTER TABLE public.contact_submissions
ADD COLUMN IF NOT EXISTS folder text DEFAULT 'inbox',
ADD COLUMN IF NOT EXISTS assigned_to text;
