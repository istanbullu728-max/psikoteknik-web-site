import Link from "next/link";
import { Phone } from "lucide-react";
import { LogoMark, WhatsAppIcon } from "@/components/icons";
import { mapsHref, navLinks, site, telHref, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <LogoMark />
            <span>
              <span className="block text-[15px] font-semibold text-white">
                {site.name}
              </span>
              <span className="block text-[11px] text-slate-400">
                Defne / Hatay
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            İl Sağlık onaylı, e-Devlet entegreli psikoteknik raporu. SRC, ticari
            ehliyet ve ehliyet iadesi için aynı gün teslim.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Menü
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Hızlı iletişim
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={telHref}
                className="inline-flex items-center gap-2 text-sm hover:text-white"
              >
                <Phone className="h-4 w-4 text-blue-300" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                WhatsApp randevu
              </a>
            </li>
            <li>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-white"
              >
                {site.address}
                <br />
                {site.district} / {site.city}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <p>Kişisel verileriniz KVKK kapsamında korunur.</p>
        </div>
      </div>
    </footer>
  );
}
