import Link from "next/link";
import { ChevronRight, Phone, X } from "lucide-react";
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
              Hatay Defne Psikoteknik Merkezi
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
            <span className="nav-burger">
              <span className="nav-burger-icon nav-icon-closed" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <X className="nav-icon-open h-5 w-5 text-navy-900" />
            </span>
          </summary>
          <div className="nav-drawer">
            <nav className="nav-drawer-sheet">
              <p className="px-1 text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                Menü
              </p>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="nav-drawer-link">
                      <span>{link.label}</span>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-slate-200 pt-5">
                <a href={telHref} className="block text-center text-sm font-medium text-navy-900">
                  {site.phoneDisplay}
                </a>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Button href={telHref} variant="navy" className="h-12 w-full">
                    <Phone className="h-4 w-4" />
                    Ara
                  </Button>
                  <Button href={whatsappHref} variant="whatsapp" className="h-12 w-full">
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
