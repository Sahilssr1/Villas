import Image from "next/image";
import { journalPosts } from "@/data/skandic";

export default function JournalSection() {
  return (
    <section id="journal" className="scroll-mt-24 border-t border-black/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
            11—From the house
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[#1E201E] sm:text-5xl">
            Written from the house, not from an office.
          </h2>
          <p className="mt-3 text-xs text-[#5E655F]">
            Written from the kitchen table over four winters.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {journalPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 font-mono text-xs text-[#5E655F]">{post.date}</p>
                <h3 className="mt-1 font-display text-xl font-normal text-[#1E201E]">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5E655F]">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

