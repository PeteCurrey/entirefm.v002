import { NextResponse } from "next/server";
import { regionalOffices, RegionalOffice } from "@/lib/regionalOffices";

function toRad(deg: number) {
  return deg * (Math.PI / 180);
}

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function kmToMiles(km: number) {
  return km * 0.621371;
}

export async function POST(req: Request) {
  try {
    const { postcode } = await req.json();
    if (!postcode || typeof postcode !== "string") {
      return NextResponse.json({ error: "Invalid postcode" }, { status: 400 });
    }

    const clean = postcode.trim().replace(/\s+/g, "").toUpperCase();

    const postcodeRes = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(clean)}`);
    if (!postcodeRes.ok) {
      return NextResponse.json({ error: "Postcode not found" }, { status: 404 });
    }

    const postcodeData = await postcodeRes.json();
    if (!postcodeData.result) {
      return NextResponse.json({ error: "Postcode not found" }, { status: 404 });
    }

    const { latitude: lat, longitude: lng, admin_district: district, region } = postcodeData.result;

    // Find nearest office
    let nearestOffice: RegionalOffice = regionalOffices[0];
    let nearestDistanceKm = Infinity;

    for (const office of regionalOffices) {
      const dist = haversineKm(lat, lng, office.lat, office.lng);
      if (dist < nearestDistanceKm) {
        nearestDistanceKm = dist;
        nearestOffice = office;
      }
    }

    const withinCoverage = nearestDistanceKm <= nearestOffice.coverageRadius;

    return NextResponse.json({
      postcode: postcodeData.result.postcode,
      lat,
      lng,
      district,
      region,
      nearestOffice,
      distanceKm: Math.round(nearestDistanceKm * 10) / 10,
      distanceMiles: Math.round(kmToMiles(nearestDistanceKm) * 10) / 10,
      withinCoverage,
      covered: true, // EntireFM covers all of UK via national network
    });
  } catch (error) {
    console.error("Coverage lookup error:", error);
    return NextResponse.json({ error: "Lookup failed" }, { status: 500 });
  }
}
