-- Create AI assistant sessions table
CREATE TABLE public.ai_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_activity_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_identifier TEXT,
  transcript JSONB NOT NULL DEFAULT '[]'::jsonb,
  source_page TEXT,
  session_metadata JSONB
);

-- Enable RLS
ALTER TABLE public.ai_sessions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create sessions (anonymous users)
CREATE POLICY "Anyone can create AI sessions" 
ON public.ai_sessions 
FOR INSERT 
WITH CHECK (true);

-- Allow users to update their own sessions
CREATE POLICY "Users can update their own sessions" 
ON public.ai_sessions 
FOR UPDATE 
USING (true);

-- Create index for faster lookups
CREATE INDEX idx_ai_sessions_created_at ON public.ai_sessions(created_at DESC);
CREATE INDEX idx_ai_sessions_user_identifier ON public.ai_sessions(user_identifier);