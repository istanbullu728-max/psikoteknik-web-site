import { Brain, Check, FilePlus2, RefreshCw } from "lucide-react";
import { MobileLoop } from "@/components/ui/mobile-loop";

const services = [
  {
    icon: Brain,
    title: "Psikoteknik Test",
    description:
      "Kapsamlı psikoteknik değerlendirme testleri ile sürücü yeterliliğinizi ölçüyoruz.",
    points: ["Dikkat Testi", "Reaksiyon Süresi", "Görsel Algı"],
  },
  {
    icon: FilePlus2,
    title: "Psikoteknik Rapor",
    description:
      "Resmi kurumlar tarafından kabul edilen detaylı psikoteknik raporları hazırlıyoruz.",
    points: ["Resmi Onaylı", "Detaylı Analiz", "Hızlı Teslimat"],
  },
  {
    icon: RefreshCw,
    title: "Belge Yenileme",
    description:
      "Sürücü belgenizi yenilerken ihtiyaç duyacağınız psikoteknik testleri.",
    points: ["Yenileme", "Güncel Test", "Kolay Süreç"],
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-24 bg-slate-50 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-blue-600 sm:text-4xl">
            Hizmetlerimiz
          </h2>
          <span className="mx-auto mt-3 block h-1 w-12 rounded-full bg-[#f57c00]" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Defne, Antakya ve Samandağ için e-Devlet onaylı psikoteknik raporu.
          </p>
        </div>

        <div className="mt-10 hidden gap-5 lg:grid lg:grid-cols-3">
          {services.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <MobileLoop>
            {services.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </MobileLoop>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item }: { item: (typeof services)[number] }) {
  const Icon = item.icon;
  return (
    <a
      href="#randevu"
      className="group flex h-full flex-col rounded-3xl bg-white px-6 py-8 text-center shadow-md ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-sm">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-navy-900">
        {item.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {item.description}
      </p>
      <ul className="mx-auto mt-5 space-y-2 text-left">
        {item.points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2 text-sm font-medium text-slate-600"
          >
            <Check className="h-4 w-4 shrink-0 text-blue-600" strokeWidth={2.5} />
            {point}
          </li>
        ))}
      </ul>
    </a>
  );
}
