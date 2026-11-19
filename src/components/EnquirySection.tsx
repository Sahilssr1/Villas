"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const countryCodes = [
  { code: "+47", label: "NO (+47)" },
  { code: "+46", label: "SE (+46)" },
  { code: "+358", label: "FI (+358)" },
  { code: "+1", label: "US (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+49", label: "DE (+49)" },
  { code: "+31", label: "NL (+31)" },
  { code: "+33", label: "FR (+33)" },
  { code: "+41", label: "CH (+41)" },
];

export default function EnquirySection() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("4");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+47");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
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
      const fullPhone = phone.trim() ? `${countryCode} ${phone.trim()}` : "";
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          villaId: "skandic-house",
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
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Failed to submit enquiry.");
      }
      setSent(true);
    } catch {
      setError("Something went wrong with your submission. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="enquiry" className="scroll-mt-24 border-t border-black/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Description */}
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
              Enquiry
            </p>
            <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[#1E201E] sm:text-5xl">
              A house that knows how to be quiet.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5E655F]">
              Tell us roughly when you want to be here and how many of you there are. We answer the same
              day, ourselves, in plain language.
            </p>

            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="text-xs font-mono text-[#5E655F]">
                MARTE &amp; ANDERS // DIRECT CONTACT
              </p>
              <p className="mt-1 text-xs text-[#5E655F]">
                Dates held for 48 hours &middot; No immediate charge
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            {sent ? (
              <div className="rounded-2xl border border-black/10 bg-white p-8 text-center sm:p-12">
                <CheckCircle2 className="mx-auto h-10 w-10 text-[#1E201E]" />
                <h3 className="mt-4 font-display text-2xl font-normal text-[#1E201E]">
                  Thank you, {name.split(" ")[0]}.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5E655F]">
                  We have received your dates ({checkIn} to {checkOut}). We reply to every request
                  personally, usually the same afternoon.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 inline-flex rounded-full bg-[#1E201E] px-6 py-2.5 text-xs font-medium text-white transition hover:bg-black"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
                {error && (
                  <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                    {error}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="checkin" className="mb-1 block text-xs font-mono uppercase text-[#5E655F]">
                      Check-in
                    </label>
                    <input
                      id="checkin"
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full rounded-lg border border-black/10 px-3 py-2 text-xs text-[#1E201E] focus:border-[#1E201E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="checkout" className="mb-1 block text-xs font-mono uppercase text-[#5E655F]">
                      Check-out
                    </label>
                    <input
                      id="checkout"
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full rounded-lg border border-black/10 px-3 py-2 text-xs text-[#1E201E] focus:border-[#1E201E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="mb-1 block text-xs font-mono uppercase text-[#5E655F]">
                      Guests (max 6)
                    </label>
                    <select
                      id="guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full rounded-lg border border-black/10 px-3 py-2 text-xs text-[#1E201E] focus:border-[#1E201E] focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="name" className="mb-1 block text-xs font-mono uppercase text-[#5E655F]">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-black/10 px-3 py-2 text-xs text-[#1E201E] placeholder:text-[#5E655F]/50 focus:border-[#1E201E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-xs font-mono uppercase text-[#5E655F]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-black/10 px-3 py-2 text-xs text-[#1E201E] placeholder:text-[#5E655F]/50 focus:border-[#1E201E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block text-xs font-mono uppercase text-[#5E655F]">
                      Phone (optional)
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-24 rounded-lg border border-black/10 px-2 py-2 text-xs text-[#1E201E]"
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
                        placeholder="123 456"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-lg border border-black/10 px-3 py-2 text-xs text-[#1E201E] placeholder:text-[#5E655F]/50 focus:border-[#1E201E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1 block text-xs font-mono uppercase text-[#5E655F]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us a little about your trip, who is travelling, or any questions you have."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-lg border border-black/10 px-3 py-2 text-xs text-[#1E201E] placeholder:text-[#5E655F]/50 focus:border-[#1E201E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-full bg-[#1E201E] px-6 py-2.5 text-xs font-medium text-white transition hover:bg-black disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Start an enquiry</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

