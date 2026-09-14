import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { LogoMark, WhatsAppIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { navLinks, site, telHref, whatsappHref } from "@/lib/site";

export function Navbar() {
  return (
    <header className="fixed top-0 isolate z-[70] w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center gap-3 px-4 sm:px-6 lg:justify-between">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2.5 overflow-hidden lg:flex-none"
        >
          <LogoMark priority />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[15px] font-semibold tracking-tight text-navy-900">
              <span className="xl:hidden">{site.shortName}</span>
              <span className="hidden xl:inline">{site.name}</span>
            </span>
            <span className="block truncate text-[11px] font-medium text-slate-500">
              Psikoteknik · Defne / Hatay
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-2.5 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={telHref} variant="secondary" size="sm">
            <Phone className="h-4 w-4" />
            <span className="xl:hidden">Ara</span>
            <span className="hidden xl:inline">{site.phoneDisplay}</span>
          </Button>
          <Button href={whatsappHref} variant="whatsapp" size="sm">
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        <details className="nav-menu relative z-[80] ml-auto shrink-0 lg:hidden">
          <summary aria-label="Menü" className="nav-summary">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-navy-900">
              <Menu className="nav-icon-closed h-5 w-5" />
              <X className="nav-icon-open h-5 w-5" />
            </span>
          </summary>
          <div className="fixed inset-0 top-[4.25rem] z-[75] overflow-y-auto bg-white">
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-4 text-base font-medium text-navy-900"
                >
                  {link.label}
                </Link>
              ))}
              <a href={telHref} className="px-3 py-2 text-sm text-slate-500">
                {site.phoneDisplay}
              </a>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button href={telHref} variant="navy" className="h-12 w-full">
                  <Phone className="h-4 w-4" />
                  Ara
                </Button>
                <Button href={whatsappHref} variant="whatsapp" className="h-12 w-full">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
