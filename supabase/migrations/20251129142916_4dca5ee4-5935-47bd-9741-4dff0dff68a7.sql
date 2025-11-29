-- Create storage bucket for helpdesk attachments
INSERT INTO storage.buckets (id, name, public)
VALUES ('helpdesk-attachments', 'helpdesk-attachments', true);

-- Allow anyone to upload attachments (public uploads)
CREATE POLICY "Anyone can upload helpdesk attachments"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'helpdesk-attachments');

-- Allow anyone to view attachments (public bucket)
CREATE POLICY "Attachments are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'helpdesk-attachments');