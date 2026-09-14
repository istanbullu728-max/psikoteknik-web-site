const phrases = [
  "Psikoteknik Raporu",
  "SRC Belgesi",
  "Ehliyet İadesi",
  "100 Ceza Puanı",
  "Aday Sürücü İptali",
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
