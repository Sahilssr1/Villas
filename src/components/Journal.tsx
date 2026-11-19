import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { journalArticles } from "@/data/villas";
import Reveal, { Eyebrow, SkandicTag } from "./Reveal";

export default function Journal() {
  return (
    <section id="journal" className="scroll-mt-24 border-t border-[#1F382B]/10 bg-[#FAF9F5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <Eyebrow number="06">The Journal</Eyebrow>
                <SkandicTag code="SLOW TRAVEL">NORDIC LIFE &middot; ARCHIPELAGO STORIES</SkandicTag>
              </div>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#171B18] sm:text-5xl">
                Stories from the edge of the forest
              </h2>
            </div>
            <Link
              href="#newsletter"
              className="hidden items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1F382B] hover:underline sm:inline-flex"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              <span>Read All Essays</span>
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-base text-[#59635D]">
            Curated dispatches on Scandinavian timber architecture, wild coastal foraging, sauna
            traditions, and navigating the peaceful archipelago waters.
          </p>
        </Reveal>

        {/* Article Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {journalArticles.map((article, idx) => (
            <Reveal
              key={article.id}
              delay={idx * 0.1}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#1F382B]/15 bg-white p-3 shadow-xs transition hover:border-[#1F382B]/40 hover:shadow-md"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-[#171B18]/80 px-3 py-1 font-mono text-[10px] text-white backdrop-blur-md">
                    {article.category}
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-3 text-xs text-[#59635D]">
                    <span className="font-mono text-[11px]">{article.date}</span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-display text-xl font-semibold leading-snug text-[#171B18] transition group-hover:text-[#1F382B]">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#59635D]">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#1F382B]/10 p-3 pt-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F382B] group-hover:underline">
                  <span>Read Article</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

