"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AutoCarousel } from "@/components/ui/auto-carousel";
import { posts } from "@/lib/blog";

export function BlogPreview() {
  return (
    <section className="scroll-mt-24 bg-white py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-blue-600">Blog</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Hatay & Defne rehberi
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-blue-600"
          >
            Tümü
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>

        <AutoCarousel className="mt-8" interval={2000}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex h-full min-h-[13.5rem] flex-col rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <p className="text-xs text-slate-400">
                {post.dateLabel} · {post.readTime}
              </p>
              <h3 className="mt-3 text-[15px] font-semibold leading-snug text-navy-900">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Oku
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </AutoCarousel>
      </div>
    </section>
  );
}
