import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import { getPost, posts } from "@/lib/blog";
import { site, telHref, whatsappHref } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Yazı bulunamadı" };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-slate-50 pt-28 pb-20 sm:pt-32 sm:pb-28">
      <article className="mx-auto max-w-2xl px-4 sm:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-navy-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Tüm yazılar
        </Link>
        <p className="mt-6 text-xs text-slate-400">
          {post.dateLabel} · {post.readTime} okuma
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        <div className="article-prose mt-8">
          {post.content.map((block, i) => {
            if (block.type === "h2") {
              return <h2 key={i}>{block.text}</h2>;
            }
            if (block.type === "ul") {
              return (
                <ul key={i}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{block.text}</p>;
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-navy-800 bg-navy-900 p-6 text-white">
          <p className="text-sm font-medium text-blue-300">{site.name}</p>
          <p className="mt-1 text-lg font-semibold">
            Defne / Hatay · aynı gün rapor
          </p>
          <p className="mt-2 text-sm text-slate-300">
            {site.address}, {site.district} / {site.city}
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Button href={whatsappHref} variant="whatsapp">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Randevu
            </Button>
            <Button href={telHref} variant="outline">
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </Button>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-12">
            <p className="text-sm font-semibold text-navy-900">Diğer yazılar</p>
            <ul className="mt-3 space-y-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </main>
  );
}
