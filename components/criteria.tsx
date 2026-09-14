import {
  AlertTriangle,
  Car,
  Truck,
  Wine,
} from "lucide-react";

const cards = [
  { icon: Truck, text: "SRC belgesi için psikoteknik zorunludur" },
  { icon: Car, text: "Ticari araç ve taksi için psikoteknik zorunludur" },
  { icon: AlertTriangle, text: "100 ceza puanı için psikoteknik zorunludur" },
  { icon: Car, text: "Aday sürücülük iptalinde psikoteknik zorunludur" },
  { icon: Wine, text: "Üçüncü alkollü yakalanmada psikoteknik zorunludur" },
  { icon: AlertTriangle, text: "Ehliyet iadesi için psikoteknik zorunludur" },
];

export function Criteria() {
  return (
    <section id="kriterler" className="scroll-mt-24 bg-white py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium text-blue-600">Kimler almalı</p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          Yasal olarak kimler almak zorunda?
        </h2>

        <div className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.text}
              href="#randevu"
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-200">
                <card.icon className="h-4 w-4" />
              </span>
              <p className="text-sm font-medium leading-snug text-navy-900">
                {card.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
