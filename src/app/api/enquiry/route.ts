import { NextResponse } from "next/server";
import { villas } from "@/data/villas";

type Body = {
  villaId?: unknown;
  checkIn?: unknown;
  checkOut?: unknown;
  guests?: unknown;
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const villaId = typeof body.villaId === "string" ? body.villaId : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const checkIn = typeof body.checkIn === "string" ? body.checkIn : "";
  const checkOut = typeof body.checkOut === "string" ? body.checkOut : "";
  const guests = typeof body.guests === "number" ? body.guests : Number(body.guests);
  const message = typeof body.message === "string" ? body.message.slice(0, 2000) : "";

  if (!villas.some((v) => v.id === villaId)) {
    return NextResponse.json({ ok: false, error: "Please choose a villa." }, { status: 400 });
  }
  if (!name || !email || !checkIn || !checkOut) {
    return NextResponse.json({ ok: false, error: "Name, email, check-in and check-out are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }
  if (checkOut <= checkIn) {
    return NextResponse.json({ ok: false, error: "Check-out must be after check-in." }, { status: 400 });
  }
  if (!Number.isFinite(guests) || guests < 1 || guests > 20) {
    return NextResponse.json({ ok: false, error: "Guests must be between 1 and 20." }, { status: 400 });
  }

  // Demo only: validated and acknowledged. No email is sent and nothing is
  // stored in a database. Wire this up to a real mailbox/CRM before launch.
  void message;
  return NextResponse.json({ ok: true });
}
