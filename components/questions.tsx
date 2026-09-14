import { faqs } from "@/lib/site";

export function Questions() {
  return (
    <section id="sss" className="scroll-mt-24 bg-white py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm font-medium text-blue-600">Sıkça sorulan sorular</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          Sıkça Sorulan Sorular (Defne - Samandağ - Antakya Psikoteknik)
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <summary className="faq-summary text-sm font-semibold text-navy-900">
                {item.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
