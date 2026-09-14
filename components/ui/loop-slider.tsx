"use client";

import { useEffect, useRef, useState, type ReactNode, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoopSlider({
  children,
  className,
  interval = 3000,
  hint = true,
}: {
  children: ReactNode[];
  className?: string;
  interval?: number;
  hint?: boolean;
}) {
  const slides = children.filter(Boolean);
  const count = slides.length;
  const items = count > 1 ? [...slides, slides[0]] : slides;
  const [index, setIndex] = useState(0);
  const [snap, setSnap] = useState(false);
  const paused = useRef(false);
  const startX = useRef(0);

  useEffect(() => {
    if (count < 2) return;
    const id = window.setInterval(() => {
      if (paused.current) return;
      setIndex((i) => (i >= count ? i : i + 1));
    }, interval);
    return () => window.clearInterval(id);
  }, [count, interval]);

  useEffect(() => {
    if (index !== count) return;
    const t = window.setTimeout(() => {
      setSnap(true);
      setIndex(0);
      requestAnimationFrame(() => setSnap(false));
    }, 480);
    return () => window.clearTimeout(t);
  }, [index, count]);

  function onStart(e: TouchEvent) {
    paused.current = true;
    startX.current = e.touches[0].clientX;
  }

  function onEnd(e: TouchEvent) {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx < -40) setIndex((i) => i + 1);
    else if (dx > 40) setIndex((i) => (i <= 0 ? count - 1 : i - 1));
    window.setTimeout(() => {
      paused.current = false;
    }, 2500);
  }

  return (
    <div className={cn(className)}>
      <div
        className="overflow-hidden"
        onTouchStart={onStart}
        onTouchEnd={onEnd}
      >
        <div
          className={cn("flex w-full", !snap && "transition-transform duration-500 ease-out")}
          style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        >
          {items.map((child, i) => (
            <div key={i} className="w-full min-w-0 shrink-0 grow-0 basis-full px-0.5">
              {child}
            </div>
          ))}
        </div>
      </div>
      {hint ? (
        <p className="hizmet-hint">
          <ChevronLeft className="h-4 w-4" />
          Kaydırın
          <ChevronRight className="h-4 w-4" />
        </p>
      ) : null}
    </div>
  );
}
