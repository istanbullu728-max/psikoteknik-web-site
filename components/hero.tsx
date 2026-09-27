import { BadgeCheck, MapPin, MonitorPlay, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/ui/rotating-text";
import { mapsHref } from "@/lib/site";

const badges = [
  { icon: ShieldCheck, label: "T.C. Sağlık Bakanlığı Onaylı" },
  { icon: MonitorPlay, label: "Simülatörlü Test" },
  { icon: BadgeCheck, label: "Hızlı Sonuç" },
];

export function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-slate-50">
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-24 text-center sm:px-6 sm:pt-28 lg:pb-16 lg:pt-32">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Hatay / Defne
        </p>
        <h1 className="mx-auto mt-2 max-w-3xl text-[1.55rem] font-semibold leading-[1.2] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
          Hatay Defne Psikoteknik Değerlendirme Merkezi
        </h1>
        <p className="relative mx-auto mt-3 block text-[1.35rem] font-semibold text-blue-600 sm:text-3xl">
          <RotatingText />
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-[15px] font-medium leading-snug text-slate-600 sm:text-xl">
          Defne, Antakya ve Samandağ İçin Psikoteknik Raporu
        </h2>

        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button href="#randevu" variant="whatsapp" size="lg">
            Hemen Randevu Al
          </Button>
          <Button href={mapsHref} variant="secondary" size="lg">
            <MapPin className="h-5 w-5" />
            Konum &amp; Yol Tarifi
          </Button>
        </div>

        <ul className="mt-7 flex flex-wrap justify-center gap-2">
          {badges.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-blue-600" />
              {label}
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 hidden max-w-md lg:mt-12 lg:block lg:max-w-lg">
          <HeroReportCard />
        </div>
      </div>

      <div className="relative border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {[
            { value: "1 saat", label: "Toplam süreç" },
            { value: "Hızlı", label: "Sonuç" },
            { value: "5 yıl", label: "Geçerlilik" },
            { value: "Aynı gün", label: "Teslim" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-slate-200 px-3 py-3.5 text-center even:border-l sm:px-4 sm:py-5 sm:border-l sm:first:border-l-0"
            >
              <p className="text-sm font-semibold tracking-tight text-navy-900 sm:text-lg">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroReportCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Resmi değerlendirme
          </p>
          <p className="mt-0.5 text-lg font-semibold text-navy-900">
            Psikoteknik Raporu
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Onaylandı
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          ["Süre", "58 dk"],
          ["Geçerlilik", "5 yıl"],
          ["Kanal", "e-Devlet"],
          ["Teslim", "Aynı gün"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5"
          >
            <p className="text-[11px] text-slate-500">{label}</p>
            <p className="text-sm font-medium text-navy-900">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
