-- Add admin_notes column to jobs table for tracking internal notes
ALTER TABLE public.jobs ADD COLUMN admin_notes text;

-- Add attachment_url column to jobs table for file attachments
ALTER TABLE public.jobs ADD COLUMN attachment_url text;