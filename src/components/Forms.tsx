"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { villas } from "@/data/villas";
import Reveal, { Eyebrow } from "./Reveal";

const inputCls = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[#1e1b18] placeholder:text-slate-400 focus:border-[#b08d57] focus:outline-2 focus:outline-[#b08d57]";
const labelCls = "mb-1.5 block text-sm font-semibold text-[#1e1b18]";

export function EnquiryForm() {
  const [villaId, setVillaId] = useState(villas[0].id);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("4");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !checkIn || !checkOut) {
      setError("Please fill in your name, email, check-in and check-out dates.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ villaId, checkIn, checkOut, guests: Number(guests), name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Could not send your enquiry.");
      setSent(true);
    } catch {
      setError("Something went wrong sending your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="enquiry" className="scroll-mt-24 bg-[#1e1b18] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <Reveal className="lg:col-span-2">
          <Eyebrow number="09" light>Your villa is waiting</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">Check availability</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Tell us which villa and when. We confirm availability and send a
            booking summary — this form does not charge you or create a booking
            on its own.
          </p>
          <ul className="mt-8 space-y-3 text-white/80">
            <li>· 7-night minimum for island villas</li>
            <li>· Boat transfers included for island stays</li>
            <li>· Reply within one working day (demo: no email is sent yet)</li>
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          {sent ? (
            <div className="rounded-3xl bg-white p-8 text-center shadow-xl" role="status">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[#b08d57]" aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-[#1e1b18]">Enquiry received — thank you, {name.split(" ")[0]}.</h3>
              <p className="mt-2 text-slate-600">In the live site this would go to the bookings team. In this demo it is validated and acknowledged only — no email or database is involved.</p>
              <button type="button" onClick={() => setSent(false)} className="mt-6 rounded-full bg-[#1e1b18] px-6 py-3 text-sm font-semibold text-white hover:bg-[#966f3f]">Send another enquiry</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="villa" className={labelCls}>Villa</label>
                  <select id="villa" value={villaId} onChange={(e) => setVillaId(e.target.value)} className={inputCls}>
                    {villas.map((v) => (<option key={v.id} value={v.id}>{v.name} — {v.location}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="checkin" className={labelCls}>Check-in</label>
                  <input id="checkin" type="date" required value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="checkout" className={labelCls}>Check-out</label>
                  <input id="checkout" type="date" required value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="guests" className={labelCls}>Guests</label>
                  <input id="guests" type="number" min={1} max={12} value={guests} onChange={(e) => setGuests(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="name" className={labelCls}>Full name</label>
                  <input id="name" type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className={labelCls}>Email</label>
                  <input id="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelCls}>Anything else? <span className="font-normal text-slate-500">(optional)</span></label>
                  <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Celebration, pets, boat trips, dietary needs…" className={inputCls} />
                </div>
              </div>
              {error && <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}
              <button type="submit" disabled={loading} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#b08d57] px-7 py-3.5 text-sm font-semibold text-[#1e1b18] transition hover:bg-[#c9a06a] disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b08d57]">
                {loading ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Send className="h-5 w-5" aria-hidden="true" />}
                {loading ? "Sending…" : "Send enquiry"}
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">Demo form: validated and acknowledged only. No payment, email or booking is created.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  }

  return (
    <section aria-labelledby="newsletter-heading" className="bg-[#e8dcc8] py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 id="newsletter-heading" className="font-display text-3xl font-semibold text-[#1e1b18] sm:text-4xl">Be first to hear about rare openings</h2>
          <p className="mt-3 text-[#1e1b18]/80">New dates, island weeks and quiet-season offers — no spam, and no fake subscription in this demo.</p>
          {done ? (
            <p role="status" className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-[#1e1b18]">
              <CheckCircle2 className="h-5 w-5 text-[#b08d57]" aria-hidden="true" />Thanks — you are on the list (demo confirmation).
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="flex-1 rounded-full border border-[#1e1b18]/20 bg-white px-5 py-3 text-[#1e1b18] placeholder:text-slate-400 focus:outline-2 focus:outline-[#1e1b18]" />
              <button type="submit" className="flex items-center justify-center gap-2 rounded-full bg-[#1e1b18] px-6 py-3 text-sm font-semibold text-white hover:bg-[#966f3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e1b18]">
                <Mail className="h-4 w-4" aria-hidden="true" />Subscribe
              </button>
            </form>
          )}
          {error && <p role="alert" className="mt-3 text-sm font-semibold text-red-800">{error}</p>}
        </Reveal>
      </div>
    </section>
  );
}
