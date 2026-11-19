import { guestReviewsList, skandicProperty } from "@/data/skandic";

export default function GuestBook() {
  return (
    <section className="border-t border-black/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
              04—The guest book
            </p>
            <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[#1E201E] sm:text-4xl">
              The only words here we didn’t write.
            </h2>
            <p className="mt-2 text-xs text-[#5E655F]">
              Left in the book on the kitchen table, then typed up. We have never edited one.
            </p>
          </div>

          <div className="rounded-xl border border-black/10 p-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-medium text-[#1E201E]">
                {skandicProperty.hosts.rating}
              </span>
              <span className="text-xs text-[#5E655F]">
                {skandicProperty.hosts.staysCount}
              </span>
            </div>
            <p className="mt-1 text-xs text-[#5E655F]">
              {skandicProperty.hosts.names} &middot; Caretakers
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guestReviewsList.map((review, i) => (
            <div
              key={review.author}
              className={`flex flex-col justify-between border-b border-black/10 pb-8 md:border-b-0 ${
                i !== guestReviewsList.length - 1 ? "md:border-r md:border-black/10 md:pr-8" : ""
              }`}
            >
              <blockquote className="text-sm leading-relaxed text-[#1E201E]">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="text-xs font-medium text-[#1E201E]">{review.author}</p>
                <p className="text-xs text-[#5E655F]">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
