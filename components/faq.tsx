import { Check, FileText, IdCard } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const documents = [
  "T.C. kimlik kartı (asıl)",
  "Kimlik fotokopisi",
  "Ehliyet (asıl)",
  "Ehliyet fotokopisi",
  "SRC belgesi (varsa, asıl + fotokopi)",
];

export function Faq() {
  return (
    <section id="evraklar" className="scroll-mt-24 bg-white py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium text-blue-600">Evraklar</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Gerekli Evraklar ve Test Öncesi Bilgiler
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Eksik evrak yüzünden gün kaybetmeyin. Aşağıdaki liste yeterlidir.
          </p>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-navy-900">
              <IdCard className="h-5 w-5 text-blue-600" />
              <p className="text-sm font-semibold">Evrak listesi</p>
            </div>
            <ul className="space-y-3">
              {documents.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm ring-1 ring-slate-200">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
              <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Fotokopiyi merkezde de çekebilirsiniz; asıllar test günü yanınızda
              olsun.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
