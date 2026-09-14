/** İstanbullu Psikoteknik — Defne / Hatay iletişim bilgileri */
export const site = {
  name: "İstanbullu Psikoteknik",
  shortName: "İstanbullu",
  legalName: "İstanbullu Psikoteknik Değerlendirme Merkezi",
  url: "https://istanbullupsikoteknik.com",
  tagline: "1 Saatte İl Sağlık Onaylı Psikoteknik Raporu",
  seoTitle: "Defne Psikoteknik Merkezi | Antakya & Samandağ Hızlı Randevu",
  description:
    "Hatay Defne, Antakya ve Samandağ bölgesinde Sağlık Bakanlığı onaylı 1 saatte psikoteknik testi. e-Devlet onaylı rapor için hemen randevu alın.",
  areas: ["Defne", "Antakya", "Samandağ"],
  phoneDisplay: "0544 245 47 83",
  phoneTel: "+905442454783",
  whatsapp: "905442454783",
  whatsappMessage:
    "Merhaba, İstanbullu Psikoteknik’ten randevu almak istiyorum.",
  email: "randevu@istanbullupsikoteknik.com",
  address: "Harbiye Mh. Harbiye Blv. No:341/1",
  district: "Defne",
  city: "Hatay",
  mapsQuery: "Harbiye Mh. Harbiye Blv. No:341/1 Defne Hatay",
  hours: [
    { days: "Pazartesi – Cuma", time: "09:00 – 18:30" },
    { days: "Cumartesi", time: "09:00 – 16:00" },
    { days: "Pazar", time: "Kapalı" },
  ],
} as const;

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const telHref = `tel:${site.phoneTel}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&output=embed`;

export function whatsappBookingHref(dateLabel: string, time?: string) {
  const lines = [
    "Merhaba, İstanbullu Psikoteknik’ten randevu almak istiyorum.",
    `Tarih: ${dateLabel}`,
    time ? `Saat: ${time}` : "Uygun bir saat için dönüş yapabilir misiniz?",
    "Onaylarsanız gelirim.",
  ];
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const faqs = [
  {
    q: "Defne’de psikoteknik raporu ne kadar sürer?",
    a: "Test ve değerlendirme yaklaşık 1 saat sürer. Sonuç aynı gün e-Devlet’e işlenir.",
  },
  {
    q: "Antakya ve Samandağ’dan gelebilir miyim?",
    a: "Evet. Merkezimiz Defne’dedir; Antakya ve Samandağ’dan gelen sürücülere aynı gün hizmet veriyoruz.",
  },
  {
    q: "Rapor e-Devlet’e işlenir mi?",
    a: "Evet. İl Sağlık onaylı resmi rapor aynı gün e-Devlet’e işlenir ve teslim edilir.",
  },
  {
    q: "Yanımda hangi evraklar olmalı?",
    a: "T.C. kimlik, ehliyet ve varsa SRC belgesi (asıl + fotokopi) yeterlidir. Fotokopiyi merkezde de çekebilirsiniz.",
  },
  {
    q: "SRC ve ticari ehliyet için psikoteknik zorunlu mu?",
    a: "Evet. SRC, taksi, servis ve ticari araç sürücüleri ile ehliyet iadesi işlemlerinde psikoteknik belgesi zorunludur.",
  },
] as const;

export const navLinks = [
  { href: "/#hizmetler", label: "Hizmetlerimiz" },
  { href: "/#kriterler", label: "Kimler almalı" },
  { href: "/#iletisim", label: "İletişim" },
  { href: "/blog", label: "Blog" },
] as const;
