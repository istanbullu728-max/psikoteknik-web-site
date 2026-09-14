import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MobileLoop({ children }: { children: ReactNode[] }) {
  const slides = children.filter(Boolean);
  const items = slides.length > 1 ? [...slides, slides[0]] : slides;

  return (
    <div>
      <div className="mobile-loop">
        <div className="mobile-loop-track">
          {items.map((child, i) => (
            <div key={i} className="mobile-loop-slide">
              {child}
            </div>
          ))}
        </div>
      </div>
      <p className="hizmet-hint">
        <ChevronLeft className="h-4 w-4" />
        Kaydırın
        <ChevronRight className="h-4 w-4" />
      </p>
    </div>
  );
}
