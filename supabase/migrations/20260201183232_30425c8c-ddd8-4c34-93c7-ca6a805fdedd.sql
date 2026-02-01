-- Drop the restrictive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit proposals" ON public.proposal_requests;

-- Create a permissive INSERT policy that actually allows public submissions
CREATE POLICY "Anyone can submit proposals" 
ON public.proposal_requests 
FOR INSERT 
TO public
WITH CHECK (true);