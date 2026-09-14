export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readTime: string;
  keywords: string[];
  content: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "hatay-defne-psikoteknik-raporu",
    title: "Hatay Defne Psikoteknik Raporu: Aynı Gün Nasıl Alınır?",
    excerpt:
      "Defne / Hatay’da psikoteknik raporu nereden alınır, hangi evraklar gerekir ve rapor e-Devlet’e ne zaman işlenir?",
    date: "2026-09-01",
    dateLabel: "1 Eylül 2026",
    readTime: "4 dk",
    keywords: [
      "hatay psikoteknik",
      "defne psikoteknik",
      "istanbullu psikoteknik",
    ],
    content: [
      {
        type: "p",
        text: "Hatay’da SRC belgesi, ticari ehliyet veya ehliyet iadesi için psikoteknik raporu arıyorsanız adres Defne, Harbiye’deki İstanbullu Psikoteknik’tir. Randevu ile geldiğinizde test ve psikolog değerlendirmesi yaklaşık 1 saatte tamamlanır; rapor aynı gün teslim edilir ve e-Devlet’e işlenir.",
      },
      {
        type: "h2",
        text: "Defne’de psikoteknik merkezi nerede?",
      },
      {
        type: "p",
        text: "İstanbullu Psikoteknik, Harbiye Mh. Harbiye Blv. No:341/1 Defne / Hatay adresinde hizmet verir. Konum için Google Haritalar’dan “yol tarifi” alabilir, randevu için 0544 245 47 83 numarayı arayabilir veya WhatsApp’tan yazabilirsiniz.",
      },
      {
        type: "h2",
        text: "Kimler Hatay’da psikoteknik belgesi almak zorunda?",
      },
      {
        type: "ul",
        items: [
          "SRC belgesi sahipleri (yük ve yolcu taşımacılığı)",
          "Taksi, dolmuş, servis ve ticari araç sürücüleri",
          "100 ceza puanını dolduran sürücüler",
          "Aday sürücülüğü iptal edilenler",
          "Alkollü olarak üçüncü kez yakalanan sürücüler",
        ],
      },
      {
        type: "h2",
        text: "Yanınızda ne getirin?",
      },
      {
        type: "p",
        text: "T.C. kimlik kartı ve ehliyetin aslı ile fotokopileri yeterlidir. SRC belgeniz varsa onu da getirin. Test SPS simülatör sistemleriyle yapılır; dikkat, reaksiyon süresi, koordinasyon, muhakeme ve karar verme becerileri ölçülür. Rapor 5 yıl geçerlidir.",
      },
      {
        type: "p",
        text: "Aynı gün teslim ve güncel ücret için WhatsApp’tan yazmanız yeterlidir. Hatay ve Defne’den gelen sürücülere randevu önceliği veriyoruz.",
      },
    ],
  },
  {
    slug: "100-ceza-puani-psikoteknik-belgesi",
    title: "100 Ceza Puanı Dolan Sürücü Psikoteknik Belgesi Almak Zorunda mı?",
    excerpt:
      "Trafik ihlalleriyle 100 ceza puanını doldurduysanız ehliyet işlemleri için psikoteknik belgesi yasal olarak zorunludur.",
    date: "2026-09-02",
    dateLabel: "2 Eylül 2026",
    readTime: "3 dk",
    keywords: ["100 ceza puanı", "psikoteknik belgesi", "ehliyet iadesi hatay"],
    content: [
      {
        type: "p",
        text: "Trafik ihlalleri sonucu 100 ceza puanını dolduran sürücülerin psikoteknik belgesi alma zorunluluğu vardır. Bu belge olmadan ehliyet iadesi veya ilgili işlemler tamamlanamaz. Hatay Defne’de İstanbullu Psikoteknik olarak bu raporu aynı gün hazırlıyoruz.",
      },
      {
        type: "h2",
        text: "100 ceza puanından sonra ne yapılır?",
      },
      {
        type: "ul",
        items: [
          "Psikoteknik değerlendirme randevusu alınır",
          "Simülatör testi ve psikolog görüşmesi tamamlanır",
          "Onaylı rapor e-Devlet’e işlenir",
          "Ehliyet iadesi için ilgili kuruma başvurulur",
        ],
      },
      {
        type: "h2",
        text: "Süreç ne kadar sürer?",
      },
      {
        type: "p",
        text: "Test yaklaşık 1 saat sürer. Rapor aynı gün teslim edilir. Ceza puanı iadesinde vakit kaybı yaşamamak için randevuyu WhatsApp veya 0544 245 47 83 üzerinden önceden alın. Merkezimiz Harbiye, Defne / Hatay’dadır.",
      },
      {
        type: "p",
        text: "Rapor 5 yıl geçerlidir. Şüpheniz varsa “puanım doldu, belge gerekir mi?” diye yazmanız yeterlidir; yönlendirelim.",
      },
    ],
  },
  {
    slug: "aday-suruculuk-iptali-psikoteknik",
    title: "Aday Sürücülük İptalinde Psikoteknik Belgesi Zorunlu mu?",
    excerpt:
      "Aday sürücü belgesi iptal edilenler ehliyet sürecine devam etmek için psikoteknik belgesi almak zorundadır.",
    date: "2026-09-03",
    dateLabel: "3 Eylül 2026",
    readTime: "3 dk",
    keywords: [
      "aday sürücülük iptali",
      "psikoteknik belgesi",
      "hatay ehliyet",
    ],
    content: [
      {
        type: "p",
        text: "Aday sürücülük iptal durumlarında psikoteknik belgesi almak zorunda olduğunuzu biliyor muydunuz? İptal kararı sonrası ehliyet işlemlerinize devam edebilmek için resmi psikoteknik raporu gerekir. Hatay Defne’de bu raporu İstanbullu Psikoteknik’ten aynı gün alabilirsiniz.",
      },
      {
        type: "h2",
        text: "Neden psikoteknik isteniyor?",
      },
      {
        type: "p",
        text: "Aday sürücülük döneminde ciddi ihlal veya iptal söz konusu olduğunda sürücünün dikkat, tepki ve karar verme becerilerinin bilimsel olarak ölçülmesi istenir. Test, sürüşle ilgili becerilerinizi ölçer; 18–69 yaş aralığındaki herkes bu değerlendirmeye girebilir.",
      },
      {
        type: "h2",
        text: "Hatay’da nasıl randevu alınır?",
      },
      {
        type: "p",
        text: "Kimlik ve ehliyet (veya aday belgesi evraklarınız) ile randevuya gelin. SPS simülatör testinden sonra psikolog değerlendirmesi yapılır, rapor e-Devlet’e işlenir. Adres: Harbiye Mh. Harbiye Blv. No:341/1 Defne / Hatay. Telefon: 0544 245 47 83.",
      },
    ],
  },
  {
    slug: "alkollu-surucu-ucuncu-yakalanma-psikoteknik",
    title:
      "Üçüncü Kez Alkollü Yakalanan Sürücüler Psikoteknik Belgesi Almak Zorunda",
    excerpt:
      "Alkollü olarak üçüncü kez yakalanan sürücülerin ehliyet iadesi için psikoteknik belgesi zorunludur. Hatay Defne’de aynı gün rapor.",
    date: "2026-09-04",
    dateLabel: "4 Eylül 2026",
    readTime: "3 dk",
    keywords: [
      "alkollü sürücü psikoteknik",
      "üçüncü yakalanma",
      "ehliyet iadesi hatay",
    ],
    content: [
      {
        type: "p",
        text: "Üçüncü defa yakalanan alkollü sürücülerin psikoteknik belgesi alma zorunluluğu olduğunu biliyor muydunuz? Ehliyetinizi geri almak için bu belge şarttır. İstanbullu Psikoteknik, Defne / Hatay’da acil ehliyet iadesi randevusu açar.",
      },
      {
        type: "h2",
        text: "Ehliyet iadesinde sıra nasıl işler?",
      },
      {
        type: "ul",
        items: [
          "Psikoteknik randevusu alınır (WhatsApp veya telefon)",
          "Simülatör + psikolog değerlendirmesi yapılır",
          "Rapor aynı gün e-Devlet’e işlenir",
          "İlçe / il emniyet veya ilgili birime iade başvurusu yapılır",
        ],
      },
      {
        type: "h2",
        text: "SRC ve ticari ehliyet de aynı merkezde",
      },
      {
        type: "p",
        text: "Alkol iadesinin yanı sıra SRC belgesi ve ticari araç sürücüleri için de psikoteknik rapor düzenliyoruz. Test yaklaşık 1 saat sürer, rapor 5 yıl geçerlidir. Detaylı bilgi: 0544 245 47 83 — Harbiye, Defne / Hatay.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
