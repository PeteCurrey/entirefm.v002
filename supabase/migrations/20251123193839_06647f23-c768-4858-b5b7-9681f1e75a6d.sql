-- Create enum for proposal status
CREATE TYPE public.proposal_status AS ENUM ('new', 'reviewing', 'contacted', 'quoted', 'won', 'lost');

-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create proposal_requests table
CREATE TABLE public.proposal_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status public.proposal_status NOT NULL DEFAULT 'new',
  
  -- Step 1: Organization Details
  company_name TEXT NOT NULL,
  contact_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  business_type TEXT,
  
  -- Step 2: Site Locations (stored as JSONB array)
  sites JSONB NOT NULL DEFAULT '[]'::jsonb,
  
  -- Step 3: Services Required
  services JSONB NOT NULL DEFAULT '[]'::jsonb,
  
  -- Step 4: Governance & Procurement
  has_existing_provider BOOLEAN,
  contract_expiry_date DATE,
  budget_approval_status TEXT,
  urgency_level TEXT,
  
  -- Step 5: Supporting Documents (file URLs)
  documents JSONB DEFAULT '[]'::jsonb,
  
  -- Admin notes
  admin_notes TEXT
);

-- Enable RLS
ALTER TABLE public.proposal_requests ENABLE ROW LEVEL SECURITY;

-- Create user_roles table for role-based access
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS Policies for proposal_requests
-- Anyone can insert (submit proposals)
CREATE POLICY "Anyone can submit proposals"
  ON public.proposal_requests
  FOR INSERT
  WITH CHECK (true);

-- Only admins can view all proposals
CREATE POLICY "Admins can view all proposals"
  ON public.proposal_requests
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can update proposals
CREATE POLICY "Admins can update proposals"
  ON public.proposal_requests
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for user_roles
-- Users can view their own roles
CREATE POLICY "Users can view own roles"
  ON public.user_roles
  FOR SELECT
  USING (auth.uid() = user_id);

-- Only admins can manage roles
CREATE POLICY "Admins can manage all roles"
  ON public.user_roles
  FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add trigger for updated_at
CREATE TRIGGER update_proposal_requests_updated_at
  BEFORE UPDATE ON public.proposal_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better query performance
CREATE INDEX idx_proposal_requests_status ON public.proposal_requests(status);
CREATE INDEX idx_proposal_requests_created_at ON public.proposal_requests(created_at DESC);
CREATE INDEX idx_user_roles_user_id ON public.user_roles(user_id);