-- Add alt_text column to client_logos table
ALTER TABLE public.client_logos 
ADD COLUMN alt_text text;