"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Loader2,
  Calendar,
  Sparkles,
  TreePine,
  ArrowRight,
} from "lucide-react";
import { villas } from "@/data/villas";
import Reveal from "./Reveal";

const inputCls =
  "w-full rounded-xl border border-[#1F382B]/20 bg-white px-4 py-3 text-sm text-[#171B18] placeholder:text-[#59635D]/50 transition focus:border-[#1F382B] focus:outline-2 focus:outline-[#1F382B]";
const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#171B18]";

const countryCodes = [
  { code: "+1", label: "US / CA (+1)" },
  { code: "+46", label: "SE (+46)" },
  { code: "+47", label: "NO (+47)" },
  { code: "+358", label: "FI (+358)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+49", label: "DE (+49)" },
  { code: "+33", label: "FR (+33)" },
  { code: "+41", label: "CH (+41)" },
  { code: "+31", label: "NL (+31)" },
  { code: "+61", label: "AU (+61)" },
];

export function EnquiryForm({ initialVillaId }: { initialVillaId?: string } = {}) {
  const [villaId, setVillaId] = useState(
    initialVillaId && villas.some((v) => v.id === initialVillaId) ? initialVillaId : villas[0].id
  );
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("4");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !checkIn || !checkOut) {
      setError("Please provide your name, email, check-in, and check-out dates.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (checkOut <= checkIn) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    setLoading(true);
    try {
      const fullPhone = phone.trim() ? `${countryCode} ${phone.trim()}` : "";
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          villaId,
          checkIn,
          checkOut,
          guests: Number(guests),
          name,
          email,
          phone: fullPhone,
          message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Failed to register your reservation request.");
      setSent(true);
    } catch {
      setError("Something went wrong with your reservation submission. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const selectedVilla = villas.find((v) => v.id === villaId) || villas[0];

  return (
    <section id="enquiry" className="scroll-mt-24 border-t border-[#1F382B]/10 bg-[#15271E] py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left Column: Context & Guarantees */}
        <Reveal className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8FA89B]">
              [ 08 / RESERVATIONS ]
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 font-mono text-[10px] text-white">
              DIRECT BOOKING
            </span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Reserve your quiet place by the water
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/80">
            Submit your requested dates. Our private concierge verifies residence availability,
            arranges any bespoke requirements, and prepares your official reservation summary.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-white/15 bg-white/5 p-5 text-xs text-white/80 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#C89446]" />
              <div>
                <strong className="text-white">Zero Booking Commissions:</strong> You book directly with
                the villa team without 15-20% third-party platform markups.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TreePine className="mt-0.5 h-4 w-4 shrink-0 text-[#8FA89B]" />
              <div>
                <strong className="text-white">Boat Transfers Included:</strong> Scheduled island
                transfers from the mainland marina are complimentary for all island stays.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#8FA89B]" />
              <div>
                <strong className="text-white">Calendar Hold:</strong> Submitting this form temporarily
                reserves your dates for 48 hours with no upfront charge.
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/15 pt-6 text-xs font-mono text-white/60">
            CONCIERGE DESK // RESPONSE WITHIN 24 HOURS
          </div>
        </Reveal>

        {/* Right Column: Skandic Booking Form */}
        <Reveal delay={0.1} className="lg:col-span-7">
          {sent ? (
            <div
              className="rounded-3xl border border-white/15 bg-[#FAF9F5] p-8 text-center text-[#171B18] shadow-2xl sm:p-12"
              role="status"
            >
              <CheckCircle2 className="mx-auto h-12 w-12 text-[#1F382B]" aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-[#171B18]">
                Reservation Request Registered
              </h3>
              <p className="mt-2 text-sm text-[#59635D]">
                Thank you, {name.split(" ")[0]}. We have placed a 48-hour preliminary hold on{" "}
                <strong className="text-[#171B18]">{selectedVilla.name}</strong> for your selected
                dates.
              </p>
              <div className="mt-6 rounded-2xl bg-[#EAF0EB] p-4 text-xs font-mono text-[#1F382B]">
                {checkIn} &rarr; {checkOut} &middot; {guests} Guests &middot; {selectedVilla.location}
              </div>
              <p className="mt-4 text-xs text-[#59635D]">
                Demo status: This inquiry was validated and recorded. In the production site, your
                concierge itinerary will arrive via email.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-full bg-[#1F382B] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#15271E]"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-white/15 bg-[#FAF9F5] p-6 text-[#171B18] shadow-2xl sm:p-8"
            >
              {error && (
                <div
                  className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700"
                  role="alert"
                >
                  {error}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Villa Selector */}
                <div className="sm:col-span-2">
                  <label htmlFor="villa" className={labelCls}>
                    Select Residence
                  </label>
                  <select
                    id="villa"
                    value={villaId}
                    onChange={(e) => setVillaId(e.target.value)}
                    className={inputCls}
                  >
                    {villas.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.type}) &mdash; {v.location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Check-In */}
                <div>
                  <label htmlFor="checkin" className={labelCls}>
                    Check-in Date
                  </label>
                  <input
                    id="checkin"
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className={inputCls}
                  />
                </div>

                {/* Check-Out */}
                <div>
                  <label htmlFor="checkout" className={labelCls}>
                    Check-out Date
                  </label>
                  <input
                    id="checkout"
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className={inputCls}
                  />
                </div>

                {/* Guest Count */}
                <div>
                  <label htmlFor="guests" className={labelCls}>
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className={inputCls}
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Primary Guest Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Henrik Lindqvist"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputCls}
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className={labelCls}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="guest@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputCls}
                  />
                </div>

                {/* Phone with Country Code Selector (Skandic Signature Feature) */}
                <div>
                  <label htmlFor="phone" className={labelCls}>
                    Telephone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      aria-label="Country calling code"
                      className="w-28 rounded-xl border border-[#1F382B]/20 bg-white px-2 py-3 font-mono text-xs text-[#171B18]"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="555 0123"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Special Requests / Notes */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelCls}>
                    Special Requests or Arrival Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="e.g. Please preheat the cedar sauna for our 5:00 pm boat arrival; interested in private chef dinner."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F382B] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition hover:bg-[#15271E] disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Checking Calendar...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Reservation Request</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-[#59635D]">
                  No payment charged now &middot; 48-hour hold
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
    }
  }

  return (
    <section id="newsletter" className="border-t border-[#1F382B]/10 bg-[#FAF9F5] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4E6B5A]">
              [ SKANDIC GAZETTE ]
            </span>
          </div>

          <h2 className="mt-3 font-display text-3xl font-semibold text-[#171B18] sm:text-4xl">
            Seasonal dispatches &amp; private openings
          </h2>

          <p className="mt-3 text-sm text-[#59635D]">
            Receive quiet notes four times a year: solstice calendar releases, new architectural
            additions, and seasonal archipelago travel guides. No promotional clutter.
          </p>

          {subscribed ? (
            <div className="mt-6 rounded-2xl bg-[#EAF0EB] p-4 text-xs font-mono text-[#1F382B]">
              Thank you for subscribing. You will receive our next seasonal dispatch.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-sm rounded-full border border-[#1F382B]/20 bg-white px-5 py-3 text-xs text-[#171B18] placeholder:text-[#59635D]/60 focus:border-[#1F382B] focus:outline-2 focus:outline-[#1F382B]"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#1F382B] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#15271E] sm:w-auto"
              >
                <span>Subscribe</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
