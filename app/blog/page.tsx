import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | Hatay Defne Psikoteknik Rehberi",
  description: `Hatay ve Defne’de psikoteknik raporu, 100 ceza puanı, aday sürücülük iptali ve ehliyet iadesi hakkında yazılar. ${site.name}.`,
};

export default function BlogIndexPage() {
  return (
    <main className="bg-slate-50 pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium text-blue-600">Blog</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          Hatay Defne psikoteknik rehberi
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          Yasal zorunluluklar, evraklar ve aynı gün rapor süreci. {site.city} /{" "}
          {site.district} için güncel bilgiler.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <p className="text-xs text-slate-400">
                {post.dateLabel} · {post.readTime} okuma
              </p>
              <h2 className="mt-3 text-lg font-semibold leading-snug text-navy-900 group-hover:text-blue-700">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Yazıyı oku
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
