-- Update contact_submissions status check constraint to match UI values
-- Current: ('new', 'read', 'responded', 'archived')
-- Target: ('new', 'read', 'responded', 'in-progress', 'closed', 'archived')

ALTER TABLE public.contact_submissions 
DROP CONSTRAINT IF EXISTS contact_submissions_status_check;

ALTER TABLE public.contact_submissions 
ADD CONSTRAINT contact_submissions_status_check 
CHECK (status IN ('new', 'read', 'responded', 'in-progress', 'closed', 'archived'));
