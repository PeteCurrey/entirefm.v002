-- Fix storage bucket vulnerability: Add proper user ownership validation

-- Drop the insecure policies
DROP POLICY IF EXISTS "Anyone can upload supplier documents" ON storage.objects;
DROP POLICY IF EXISTS "Users can view their own documents" ON storage.objects;

-- Create secure policy: Authenticated users can upload to their own folder
CREATE POLICY "Authenticated users can upload to their own folder"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'supplier-documents'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Create secure policy: Users can view only their own documents
CREATE POLICY "Users can view only their uploaded documents"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'supplier-documents'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Create policy: Users can update their own documents
CREATE POLICY "Users can update their own documents"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'supplier-documents'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Create policy: Users can delete their own documents
CREATE POLICY "Users can delete their own documents"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'supplier-documents'
  AND auth.uid()::text = (storage.foldername(name))[1]
);