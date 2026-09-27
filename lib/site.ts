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
    q: "Hatay Defne'de psikoteknik belgesi nereden ve nasıl alınır?",
    a: "Defne merkezimizde, Sağlık Bakanlığı onaylı test cihazlarımız ve uzman psikolog eşliğinde işlemlerinizi gerçekleştiriyoruz. Hatay Defne psikoteknik belgesi gereksinimleriniz için İl Sağlık Müdürlüğü onaylı resmi raporunuzu aynı gün içinde teslim alarak yasal zorunluluğunuzu hızlıca tamamlayabilirsiniz.",
  },
  {
    q: "Antakya, Harbiye ve Samandağ'dan merkeze ulaşım nasıl sağlanır?",
    a: "Merkezimiz Hatay'ın Defne ilçesinde son derece merkezi bir konumdadır. Antakya, Hatay Harbiye psikoteknik merkezi bölgesi ve Hatay Samandağ psikoteknik merkezi hattından gelen sürücülerimiz kendi araçlarıyla veya toplu taşımayla kısa sürede gelebilir, test işlemlerini aynı gün içinde bitirebilirler.",
  },
  {
    q: "Psikoteknik testi ne kadar sürüyor ve raporu ne zaman alabilirim?",
    a: "Bilgisayar destekli simülasyon testleri ve uzman psikolog görüşmesi toplamda yaklaşık 1 saat sürmektedir. Testi başarıyla tamamlayan sürücüler, resmi raporlarını aynı gün içerisinde bekletilmeden teslim alabilirler.",
  },
  {
    q: "Alkol, hız veya ceza puanı nedeniyle ehliyet iadesi için bu test zorunlu mu?",
    a: "Evet. Alkol, hız ihlali veya ceza puanı gibi nedenlerle ehliyetine el konulan ve ehliyet iadesi almak isteyen sürücülerin yasal olarak bu testi vermesi zorunludur. Hatay Defne psikoteknik merkezi olarak bu süreç resmi mevzuata tam uygunlukla yürütülür.",
  },
  {
    q: "SRC belgesi ve ticari araç sürücüleri için psikoteknik şart mı?",
    a: "Evet. Taksiciler, dolmuş ve minibüs şoförleri ile otobüs, tır ve kamyon gibi ticari araç kullanan tüm sürücülerin SRC belgesinin yanı sıra geçerli bir Hatay Samandağ psikoteknik belgesi veya Hatay Harbiye psikoteknik belgesi standartlarında resmi rapora sahip olması yasal bir zorunluluktur.",
  },
  {
    q: "Randevuya gelirken yanımda hangi belgeler olmalı?",
    a: "Randevu saatinizde yanınızda T.C. kimlik kartınız, ehliyetiniz ve varsa SRC belgeniz (asıl ve fotokopi) bulunması yeterlidir. Belge fotokopisi veya çıktı ihtiyaçlarınız merkezimizde de hızlıca karşılanabilmektedir.",
  },
] as const;

export const navLinks = [
  { href: "/#hizmetler", label: "Hizmetlerimiz" },
  { href: "/#kriterler", label: "Kimler almalı" },
  { href: "/#iletisim", label: "İletişim" },
  { href: "/blog", label: "Blog" },
] as const;
