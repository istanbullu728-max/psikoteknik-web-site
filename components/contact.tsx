"use client";

import type { ComponentType } from "react";
import { Clock, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import {
  mapsEmbedSrc,
  mapsHref,
  site,
  telHref,
  whatsappHref,
} from "@/lib/site";

export function Contact() {
  return (
    <section id="iletisim" className="scroll-mt-24 bg-slate-50 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium text-blue-600">İletişim</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Defne Psikoteknik Merkezi Konum ve İletişim
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Randevu hattımız gün içinde açıktır. Konum için tek dokunuşla yol
            tarifi alın.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <ContactCard
              icon={Phone}
              label="Telefon"
              value={site.phoneDisplay}
              href={telHref}
              action="Hemen ara"
            />
            <ContactCard
              icon={WhatsAppIcon}
              label="WhatsApp"
              value="Tek tıkla randevu mesajı"
              href={whatsappHref}
              action="WhatsApp’tan yaz"
              whatsapp
            />
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Adres
                  </p>
                  <p className="mt-1 text-sm font-medium text-navy-900">
                    {site.address}
                    <br />
                    {site.district} / {site.city}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:text-blue-500">
                    <Navigation className="h-3.5 w-3.5" />
                    Haritada aç · yol tarifi
                  </p>
                </div>
              </div>
            </a>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="w-full">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Çalışma saatleri
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {site.hours.map((row) => (
                      <li
                        key={row.days}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <span className="text-slate-600">{row.days}</span>
                        <span className="font-medium text-navy-900">
                          {row.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <iframe
                title="İstanbullu Psikoteknik harita konumu — Defne Hatay"
                src={mapsEmbedSrc}
                className="h-full min-h-[16rem] w-full border-0 grayscale-[20%] sm:min-h-[22rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-10 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 px-3.5 py-2 text-sm font-semibold text-white shadow-md"
              >
                <ExternalLink className="h-4 w-4" />
                Haritada Aç
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={telHref} variant="navy" size="lg" className="sm:w-auto">
            <Phone className="h-5 w-5" />
            {site.phoneDisplay}
          </Button>
          <Button href={whatsappHref} variant="whatsapp" size="lg">
            <WhatsAppIcon />
            WhatsApp Randevu
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  action,
  whatsapp,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  action: string;
  whatsapp?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
            whatsapp ? "bg-emerald-50 text-[#25D366]" : "bg-blue-50 text-blue-600"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {label}
          </p>
          <p className="mt-1 text-sm font-semibold text-navy-900">{value}</p>
          <p className="mt-1 text-sm font-medium text-blue-600 group-hover:text-blue-500">
            {action} →
          </p>
        </div>
      </div>
    </a>
  );
}
