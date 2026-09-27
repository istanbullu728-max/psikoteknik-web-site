const phrases = [
  "İzinsiz Çakar Kullanımı",
  "Drift Atma",
  "3 Defa Kırmızı Işıkta Geçme",
  "Ticari Amaçla Sürücülük Yapanlar",
  "Üçüncü Defa Alkollü Yakalanma",
];

export function RotatingText() {
  return (
    <span className="phrase-rotator" aria-live="polite">
      <span className="phrase-track">
        {phrases.map((phrase) => (
          <span key={phrase}>{phrase}</span>
        ))}
      </span>
    </span>
  );
}
