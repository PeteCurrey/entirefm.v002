import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// This route uses the service role key to bypass RLS for admin reads.
// The service role key is NEVER exposed to the client.
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    // Fallback: if no service role key, try using anon key with auth bypass hint
    // This means the admin must be properly logged into Supabase
    return NextResponse.json(
      { error: "SUPABASE_SERVICE_ROLE_KEY is not configured. Please add it to your .env.local file. You can find it in your Supabase dashboard under Settings → API." },
      { status: 500 }
    );
  }

  const adminClient = createClient(url, serviceKey, {
    auth: { persistSession: false }
  });

  const [contactsRes, proposalsRes] = await Promise.all([
    adminClient.from("contact_submissions").select("*").order("created_at", { ascending: false }),
    adminClient.from("proposal_requests").select("*").order("created_at", { ascending: false })
  ]);

  if (contactsRes.error) {
    console.error("Admin leads fetch error:", contactsRes.error);
    return NextResponse.json({ error: contactsRes.error.message }, { status: 500 });
  }

  return NextResponse.json({
    contacts: contactsRes.data || [],
    proposals: proposalsRes.data || []
  });
}

// PATCH: Update specific fields of a lead
export async function PATCH(req: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return NextResponse.json({ error: "SUPABASE_SERVICE_ROLE_KEY is not configured." }, { status: 500 });
  }

  const adminClient = createClient(url, serviceKey, {
    auth: { persistSession: false }
  });

  const { type, id, status, assigned_to, priority, admin_notes } = await req.json();
  const table = type === "proposal" ? "proposal_requests" : "contact_submissions";

  // Build the update object dynamically based on provided fields
  const updateData: any = {};
  if (status !== undefined) updateData.status = status;
  if (assigned_to !== undefined) updateData.assigned_to = assigned_to;
  if (admin_notes !== undefined) updateData.admin_notes = admin_notes;
  
  if (priority !== undefined) {
    if (type === "proposal") {
      updateData.urgency_level = priority;
    } else {
      updateData.priority = priority; // Future proofing, though types currently don't show this column for contact_submissions
    }
  }

  const { error } = await adminClient.from(table).update(updateData).eq("id", id);

  if (error) {
    console.error(`Admin leads update error (${table}):`, error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

// DELETE: Permanently remove a lead
export async function DELETE(req: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return NextResponse.json({ error: "SUPABASE_SERVICE_ROLE_KEY is not configured." }, { status: 500 });
  }

  const adminClient = createClient(url, serviceKey, {
    auth: { persistSession: false }
  });

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const type = searchParams.get("type");

  if (!id || !type) {
    return NextResponse.json({ error: "Missing ID or type parameter" }, { status: 400 });
  }

  const table = type === "proposal" ? "proposal_requests" : "contact_submissions";

  const { error } = await adminClient.from(table).delete().eq("id", id);

  if (error) {
    console.error(`Admin leads delete error (${table}):`, error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
