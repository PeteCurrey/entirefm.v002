import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Helper to read from local JSON
async function readLocalData(table) {
  const dataPath = path.join(process.cwd(), "data", `${table}.json`);
  try {
    const fileContent = await fs.readFile(dataPath, "utf-8");
    return JSON.parse(fileContent);
  } catch (e) {
    return [];
  }
}

// Helper to write to local JSON
async function writeLocalData(table, data) {
  const dataPath = path.join(process.cwd(), "data", `${table}.json`);
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
}

// This route uses the service role key to bypass RLS for admin reads.
// The service role key is NEVER exposed to the client.
export async function GET() {
  try {
    const contacts = await readLocalData("contact_submissions");
    const proposals = await readLocalData("proposal_requests");

    // Sort by created_at descending
    contacts.sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime());
    proposals.sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime());

    return NextResponse.json({
      contacts,
      proposals
    });
  } catch (err) {
    console.error("Admin leads fetch error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PATCH: Update specific fields of a lead
export async function PATCH(req: Request) {
  try {
    const { type, id, status, assigned_to, priority, admin_notes } = await req.json();
    const table = type === "proposal" ? "proposal_requests" : "contact_submissions";

    const data = await readLocalData(table);
    const itemIndex = data.findIndex(item => item.id === id);

    if (itemIndex === -1) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Build the update object dynamically based on provided fields
    if (status !== undefined) data[itemIndex].status = status;
    if (assigned_to !== undefined) data[itemIndex].assigned_to = assigned_to;
    if (admin_notes !== undefined) data[itemIndex].admin_notes = admin_notes;
    
    if (priority !== undefined) {
      if (type === "proposal") {
        data[itemIndex].urgency_level = priority;
      } else {
        data[itemIndex].priority = priority;
      }
    }

    await writeLocalData(table, data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(`Admin leads update error:`, err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE: Permanently remove a lead
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const type = searchParams.get("type");

    if (!id || !type) {
      return NextResponse.json({ error: "Missing ID or type parameter" }, { status: 400 });
    }

    const table = type === "proposal" ? "proposal_requests" : "contact_submissions";

    let data = await readLocalData(table);
    data = data.filter(item => item.id !== id);

    await writeLocalData(table, data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(`Admin leads delete error:`, err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
