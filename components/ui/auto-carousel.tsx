import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AutoCarousel({
  children,
  className,
}: {
  children: ReactNode[];
  className?: string;
  interval?: number;
}) {
  const slides = children.filter(Boolean);
  const count = slides.length;

  return (
    <div className={cn("css-slider", className)}>
      <div className="css-slider-viewport">
        <div className="css-slider-track" data-slides={count}>
          {slides.map((child, i) => (
            <div key={i} className="css-slider-slide">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
