import { WhatsAppIcon } from "@/components/icons";

const SLOTS = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function toISODate(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function nextOpenDay(from: Date) {
  const d = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  while (d.getDay() === 0) d.setDate(d.getDate() + 1);
  return d;
}

export function Booking() {
  const today = new Date();
  const min = toISODate(today);
  const defaultDate = toISODate(nextOpenDay(today));

  return (
    <section id="randevu" className="scroll-mt-24 bg-slate-50 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
        <div className="mb-8 lg:mb-0">
          <p className="text-sm font-medium text-blue-600">Randevu</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Hatay Samandağ ve Antakya İçin Hemen Randevu Alın
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
            Tarih ve saat seçin, WhatsApp’tan gönderin.
          </p>
        </div>

        <form
          action="/api/randevu"
          method="get"
          className="relative z-30 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
        >
          <div>
            <label htmlFor="randevu-tarih" className="text-sm font-medium text-navy-900">
              Tarih
            </label>
            <input
              id="randevu-tarih"
              type="date"
              name="date"
              required
              min={min}
              defaultValue={defaultDate}
              className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-base text-navy-900"
            />
          </div>

          <fieldset className="mt-5">
            <legend className="text-sm font-medium text-navy-900">Saat</legend>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {SLOTS.map((slot) => (
                <label key={slot} className="time-chip">
                  <input type="radio" name="time" value={slot} required />
                  <span>{slot}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp’tan randevu iste
          </button>
        </form>
      </div>
    </section>
  );
}
