-- Migration to add lead management columns for Admin Dashboard
-- Created at 2026-04-03

-- Add priority column to contact_submissions
ALTER TABLE "public"."contact_submissions" 
ADD COLUMN IF NOT EXISTS "priority" text;

-- Add assigned_to column to proposal_requests
ALTER TABLE "public"."proposal_requests" 
ADD COLUMN IF NOT EXISTS "assigned_to" text;

-- Ensure admin_notes exist (they should, based on types, but let's be safe)
ALTER TABLE "public"."contact_submissions" 
ADD COLUMN IF NOT EXISTS "admin_notes" text;

ALTER TABLE "public"."proposal_requests" 
ADD COLUMN IF NOT EXISTS "admin_notes" text;
