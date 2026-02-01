-- Admin Settings Table for system configuration
CREATE TABLE public.admin_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key TEXT NOT NULL UNIQUE,
  setting_value JSONB NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  description TEXT,
  updated_at TIMESTAMPTZ DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.admin_settings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for admin_settings
CREATE POLICY "Admins can view all settings"
ON public.admin_settings
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert settings"
ON public.admin_settings
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update settings"
ON public.admin_settings
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete settings"
ON public.admin_settings
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- API Integrations Table
CREATE TABLE public.api_integrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  service_type TEXT NOT NULL,
  credentials JSONB DEFAULT '{}'::jsonb,
  is_active BOOLEAN DEFAULT true,
  last_tested TIMESTAMPTZ,
  test_status TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.api_integrations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for api_integrations
CREATE POLICY "Admins can view all integrations"
ON public.api_integrations
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert integrations"
ON public.api_integrations
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update integrations"
ON public.api_integrations
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete integrations"
ON public.api_integrations
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Email Templates Table
CREATE TABLE public.email_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  body_html TEXT NOT NULL,
  body_text TEXT,
  template_type TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.email_templates ENABLE ROW LEVEL SECURITY;

-- RLS Policies for email_templates
CREATE POLICY "Admins can view all email templates"
ON public.email_templates
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert email templates"
ON public.email_templates
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update email templates"
ON public.email_templates
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete email templates"
ON public.email_templates
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Add estimated_value column to proposal_requests for revenue tracking
ALTER TABLE public.proposal_requests ADD COLUMN IF NOT EXISTS estimated_value DECIMAL(12,2);

-- Add follow_up_date column to proposal_requests for reminders
ALTER TABLE public.proposal_requests ADD COLUMN IF NOT EXISTS follow_up_date DATE;

-- Add assigned_to column to jobs for assignment tracking
ALTER TABLE public.jobs ADD COLUMN IF NOT EXISTS assigned_to TEXT;

-- Add tags column to contact_submissions for categorization
ALTER TABLE public.contact_submissions ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}';

-- Add lead_score column to contact_submissions
ALTER TABLE public.contact_submissions ADD COLUMN IF NOT EXISTS lead_score INTEGER DEFAULT 0;

-- Insert default settings
INSERT INTO public.admin_settings (setting_key, setting_value, category, description) VALUES
('job_number_prefix', '"EFM-"', 'numbering', 'Prefix for job reference numbers'),
('job_number_next', '1', 'numbering', 'Next job number to use'),
('invoice_prefix', '"INV-"', 'numbering', 'Prefix for invoice numbers'),
('invoice_next', '1', 'numbering', 'Next invoice number to use'),
('company_name', '"EntireFM"', 'company', 'Company name'),
('company_email', '"enquiries@entirefm.com"', 'company', 'Primary company email'),
('support_email', '"helpdesk@entirefm.com"', 'company', 'Support email address'),
('notification_new_proposal', 'true', 'notifications', 'Send notification on new proposal'),
('notification_new_contact', 'true', 'notifications', 'Send notification on new contact'),
('notification_new_job', 'true', 'notifications', 'Send notification on new job')
ON CONFLICT (setting_key) DO NOTHING;

-- Create trigger for updated_at on admin_settings
CREATE TRIGGER update_admin_settings_updated_at
BEFORE UPDATE ON public.admin_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for updated_at on api_integrations
CREATE TRIGGER update_api_integrations_updated_at
BEFORE UPDATE ON public.api_integrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for updated_at on email_templates
CREATE TRIGGER update_email_templates_updated_at
BEFORE UPDATE ON public.email_templates
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();