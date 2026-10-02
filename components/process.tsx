import Image from "next/image";
import {
  Brain,
  CalendarCheck,
  Check,
  ClipboardCheck,
  MonitorPlay,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { MobileLoop } from "@/components/ui/mobile-loop";
import { Button } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    icon: CalendarCheck,
    title: "Randevu & Kayıt",
    summary: "Takvimden gün seçin, WhatsApp’tan gönderin.",
    details: [
      "Uygun saati birlikte netleştiriyoruz",
      "Kimlik ve ehliyet bilgileriniz kayda alınır",
      "Test öncesi kısa bilgilendirme yapılır",
    ],
  },
  {
    n: "02",
    icon: MonitorPlay,
    title: "Simülatör Testi",
    summary: "Dikkat, tepki ve koordinasyon ölçümü.",
    details: [
      "Profesyonel SPS sürüş simülatörü",
      "Görsel dikkat ve tepki süresi",
      "Yaklaşık 1 saatlik değerlendirme",
    ],
    image: true,
  },
  {
    n: "03",
    icon: Brain,
    title: "Sonuçlandırma ve Raporlama",
    summary: "Psikolog değerlendirmesi, aynı gün rapor.",
    details: [
      "Psikolog görüşmesi ve sonuç yorumu",
      "Psikoteknik belgesi teslimi",
      "Anında teslim",
    ],
  },
];

export function Process() {
  return (
    <section id="surec" className="scroll-mt-24 bg-slate-50 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium text-blue-600">Test süreci</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Defne Psikoteknik Test Süreci ve Raporlama
          </h2>
        </FadeIn>

        <div className="mt-8 hidden gap-5 lg:grid lg:grid-cols-3">
          {steps.map((step) => (
            <StepCard key={step.n} step={step} />
          ))}
        </div>

        <div className="mt-8 lg:hidden">
          <MobileLoop>
            {steps.map((step) => (
              <StepCard key={step.n} step={step} />
            ))}
          </MobileLoop>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: (typeof steps)[number] }) {
  const Icon = step.icon;
  return (
    <div className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      {step.image && (
        <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200">
          <Image
            src="/images/similator.png"
            alt="SPS test simülatörü — İstanbullu Psikoteknik"
            width={1600}
            height={1200}
            className="h-40 w-full object-cover sm:h-56"
            sizes="(max-width: 768px) 92vw, 720px"
          />
        </div>
      )}
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-900 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-blue-600">
        Adım {step.n}
      </p>
      <h3 className="mt-1 text-xl font-semibold tracking-tight text-navy-900">
        {step.title}
      </h3>
      <ul className="mt-4 space-y-2">
        {step.details.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <Button href="#randevu" variant="navy" className="mt-5 w-full">
        <ClipboardCheck className="h-4 w-4" />
        Randevu al
      </Button>
    </div>
  );
}
