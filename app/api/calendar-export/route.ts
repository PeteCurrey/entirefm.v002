import { NextResponse } from "next/server";
import type { ComplianceEvent, ComplianceFrequency } from "@/lib/calendarRules";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatICSDate(date: Date): string {
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
}

function getRRULE(frequency: ComplianceFrequency): string {
  switch (frequency) {
    case "monthly": return "RRULE:FREQ=MONTHLY";
    case "quarterly": return "RRULE:FREQ=MONTHLY;INTERVAL=3";
    case "sixMonthly": return "RRULE:FREQ=MONTHLY;INTERVAL=6";
    case "annual": return "RRULE:FREQ=YEARLY";
    case "twoYearly": return "RRULE:FREQ=YEARLY;INTERVAL=2";
  }
}

function escapeICS(str: string): string {
  return str.replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

function buildUID(eventId: string, date: Date): string {
  return `${eventId}-${date.getTime()}@entirefm.com`;
}

export async function POST(req: Request) {
  try {
    const { events, buildingName, startDate } = await req.json() as {
      events: ComplianceEvent[];
      buildingName: string;
      startDate: string; // ISO date string
    };

    if (!events?.length || !buildingName) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const start = new Date(startDate || new Date().toISOString().slice(0, 7) + "-01");
    const now = new Date();
    const tstamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;

    const lines: string[] = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//EntireFM//Compliance Calendar//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      `X-WR-CALNAME:EntireFM Compliance Calendar — ${escapeICS(buildingName)}`,
      "X-WR-TIMEZONE:Europe/London",
    ];

    for (const event of events) {
      const dtstart = formatICSDate(start);

      lines.push("BEGIN:VEVENT");
      lines.push(`UID:${buildUID(event.id, start)}`);
      lines.push(`DTSTAMP:${tstamp}`);
      lines.push(`DTSTART;VALUE=DATE:${dtstart}`);
      lines.push(`SUMMARY:${escapeICS(`[${buildingName}] ${event.title}`)}`);
      lines.push(`DESCRIPTION:${escapeICS(event.icsDescription)}`);
      lines.push(`CATEGORIES:${escapeICS(event.category)}`);
      lines.push(`URL:https://www.entirefm.com${event.entireFMService}`);
      lines.push(getRRULE(event.frequency));

      // 7-day alarm before each event
      lines.push("BEGIN:VALARM");
      lines.push("TRIGGER:-P7D");
      lines.push("ACTION:DISPLAY");
      lines.push(`DESCRIPTION:Reminder: ${escapeICS(event.title)} due in 7 days`);
      lines.push("END:VALARM");

      lines.push("END:VEVENT");
    }

    lines.push("END:VCALENDAR");

    const icsContent = lines.join("\r\n");

    return new Response(icsContent, {
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": `attachment; filename="EntireFM-Compliance-Calendar.ics"`,
      },
    });
  } catch (error) {
    console.error("Calendar export error:", error);
    return NextResponse.json({ error: "Could not generate calendar" }, { status: 500 });
  }
}
