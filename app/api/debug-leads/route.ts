import { NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";

export async function GET() {
  const { data, error } = await supabase.from('contact_submissions').select('count');
  return NextResponse.json({ count: data, error });
}
