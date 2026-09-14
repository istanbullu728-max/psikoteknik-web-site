import { MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { mapsHref, telHref, whatsappHref } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="pointer-events-none fixed right-3 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-10 flex flex-col gap-2 md:hidden">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile randevu al"
        className="pointer-events-auto float-cta flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-md"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="mt-0.5 text-[9px] font-semibold">WhatsApp</span>
      </a>
      <a
        href={telHref}
        aria-label="Hemen ara"
        className="pointer-events-auto float-cta float-cta-delay flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-[#5c4033] text-white shadow-md"
      >
        <Phone className="h-5 w-5" />
        <span className="mt-0.5 text-[9px] font-semibold">Ara</span>
      </a>
      <a
        href={mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konumu haritada aç"
        className="pointer-events-auto float-cta float-cta-delay-2 flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md"
      >
        <MapPin className="h-5 w-5" />
        <span className="mt-0.5 text-[9px] font-semibold">Konum</span>
      </a>
    </div>
  );
}
