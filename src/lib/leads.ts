import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { supabase } from "@/integrations/supabase/client";

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
  source_page?: string;
  status?: string;
  subject?: string;
  created_at?: string;
}

export async function saveLead(lead: ContactSubmission) {
  const newLead = {
    ...lead,
    id: lead.id || crypto.randomUUID(),
    status: lead.status || "new",
    created_at: lead.created_at || new Date().toISOString(),
  };

  // Try saving to local JSON fallback
  const dataPath = path.join(process.cwd(), "data", "contact_submissions.json");
  try {
    let existing = [];
    try {
      const fileContent = await fs.readFile(dataPath, "utf-8");
      existing = JSON.parse(fileContent);
    } catch (e) {
      // file might not exist yet or be empty
    }
    existing.push(newLead);
    await fs.writeFile(dataPath, JSON.stringify(existing, null, 2));
    console.log("Successfully saved lead to local storage:", newLead.id);
  } catch (fsError) {
    console.error("Local save error:", fsError);
  }

  // Also try Supabase (it might be restored later)
  try {
    if (supabase) {
      const { data, error } = await supabase.from("contact_submissions").insert({
        name: newLead.name,
        email: newLead.email,
        phone: newLead.phone,
        company: newLead.company,
        message: newLead.message,
        source_page: newLead.source_page,
        status: newLead.status,
        subject: newLead.subject || "General Inquiry",
      }).select().single();
      
      if (error) {
        console.warn("Supabase insert failed (but lead saved locally):", error.message);
      } else {
        return data;
      }
    }
  } catch (e) {
    console.warn("Supabase connection failed (but lead saved locally)");
  }

  return newLead;
}

export async function getLeads() {
  const dataPath = path.join(process.cwd(), "data", "contact_submissions.json");
  try {
    const fileContent = await fs.readFile(dataPath, "utf-8");
    return JSON.parse(fileContent);
  } catch (e) {
    return [];
  }
}
