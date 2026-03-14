"use client";

import { useEffect, useRef } from "react";
import type { JSX } from "react";
import { cn } from "@/lib/utils";

class Pixel {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeInteger: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;
  /** 0–1: scales maxSize and draw opacity for soft center fade */
  fadeWeight: number;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    speed: number,
    delay: number,
    maxSizeMultiplier: number = 1
  ) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.fadeWeight = Math.max(0, Math.min(1, maxSizeMultiplier));
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger) * this.fadeWeight;
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    if (this.size <= 0 || this.fadeWeight <= 0) return;
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.save();
    this.ctx.globalAlpha = this.fadeWeight;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
    this.ctx.restore();
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

function getEffectiveSpeed(value: number, reducedMotion: boolean) {
  const min = 0;
  const max = 100;
  const throttle = 0.001;

  if (value <= min || reducedMotion) {
    return min;
  } else if (value >= max) {
    return max * throttle;
  } else {
    return value * throttle;
  }
}

const VARIANTS = {
  default: {
    activeColor: null,
    gap: 5,
    speed: 35,
    colors: "#f8fafc,#f1f5f9,#cbd5e1",
    noFocus: false,
  },
  blue: {
    activeColor: "#e0f2fe",
    gap: 10,
    speed: 25,
    colors: "#e0f2fe,#7dd3fc,#0ea5e9",
    noFocus: false,
  },
  yellow: {
    activeColor: "#fef08a",
    gap: 3,
    speed: 20,
    colors: "#fef08a,#fde047,#eab308",
    noFocus: false,
  },
  pink: {
    activeColor: "#fecdd3",
    gap: 6,
    speed: 80,
    colors: "#fecdd3,#fda4af,#e11d48",
    noFocus: true,
  },
  green: {
    activeColor: "#dcfce7",
    gap: 6,
    speed: 35,
    colors: "#ffffff,#dcfce7,#bbf7d0,#86efac",
    noFocus: false,
  },
};

interface PixelCardProps {
  variant?: "default" | "blue" | "yellow" | "pink" | "green";
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  /** Exclude center from pixel animation. Number/string = square; object = rectangle. y can be { top, bottom } for asymmetric (e.g. less clear below text). Add feather for soft fade. */
  excludeCenter?: number | string | {
    x?: number | string;
    y?: number | string | { top?: number | string; bottom?: number | string };
    feather?: number | string;
  };
  className?: string;
  children: React.ReactNode;
}

interface VariantConfig {
  activeColor: string | null;
  gap: number;
  speed: number;
  colors: string;
  noFocus: boolean;
}

export default function PixelCard({
  variant = "default",
  gap,
  speed,
  colors,
  noFocus,
  excludeCenter,
  className = "",
  children,
}: PixelCardProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const timePreviousRef = useRef(performance.now());
  const reducedMotion = useRef(
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  ).current;

  const variantCfg: VariantConfig = VARIANTS[variant] ?? VARIANTS.default;
  const finalGap = gap ?? variantCfg.gap;
  const finalSpeed = speed ?? variantCfg.speed;
  const finalColors = colors ?? variantCfg.colors;
  const finalNoFocus = noFocus ?? variantCfg.noFocus;

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.current.getContext("2d");

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;

    const cx = width / 2;
    const cy = height / 2;
    let excludeHalfX = 0;
    let excludeHalfYTop = 0;
    let excludeHalfYBottom = 0;
    let featherPx = 0;
    const parseHalf = (v: number | string, size: number): number => {
      if (typeof v === "string") {
        const pct = parseFloat(v.replace("%", ""));
        return Number.isNaN(pct) ? 0 : (size * pct) / 100;
      }
      return Number(v) ?? 0;
    };
    if (excludeCenter !== undefined && excludeCenter !== 0) {
      if (typeof excludeCenter === "object" && excludeCenter !== null && ("x" in excludeCenter || "y" in excludeCenter)) {
        const ox = excludeCenter.x ?? (typeof excludeCenter.y === "object" ? undefined : excludeCenter.y);
        if (ox !== undefined) excludeHalfX = typeof ox === "string" ? parseHalf(ox, width) : ox;
        const oy = excludeCenter.y;
        if (oy !== undefined) {
          if (typeof oy === "object" && oy !== null && ("top" in oy || "bottom" in oy)) {
            if (oy.top !== undefined) excludeHalfYTop = typeof oy.top === "string" ? parseHalf(oy.top, height) : oy.top;
            if (oy.bottom !== undefined) excludeHalfYBottom = typeof oy.bottom === "string" ? parseHalf(oy.bottom, height) : oy.bottom;
            if (excludeHalfYTop === 0 && excludeHalfYBottom === 0) {
              excludeHalfYTop = excludeHalfYBottom = parseHalf(typeof oy.top !== "undefined" ? oy.top : oy.bottom ?? 0, height);
            }
          } else {
            const half =
              typeof oy === "string" ? parseHalf(oy, height) : typeof oy === "number" ? oy : 0;
            excludeHalfYTop = half;
            excludeHalfYBottom = half;
          }
        }
        const f = excludeCenter.feather;
        if (f !== undefined) {
          featherPx = typeof f === "string" ? (Math.min(width, height) * parseFloat(f.replace("%", ""))) / 100 : Number(f);
        }
      } else {
        const single = typeof excludeCenter === "string"
          ? (Math.min(width, height) * parseFloat(excludeCenter.replace("%", ""))) / 100 / 2
          : Number(excludeCenter) ?? 0;
        excludeHalfX = single;
        excludeHalfYTop = single;
        excludeHalfYBottom = single;
      }
    }

    const useFeather = featherPx > 0;
    const colorsArray = finalColors.split(",");
    const pxs: Pixel[] = [];
    for (let x = 0; x < width; x += Number(finalGap)) {
      for (let y = 0; y < height; y += Number(finalGap)) {
        let weight = 1;
        if (excludeHalfX > 0 || excludeHalfYTop > 0 || excludeHalfYBottom > 0) {
          if (useFeather) {
            const outX = Math.max(0, Math.abs(x - cx) - excludeHalfX);
            const outY =
              y < cy - excludeHalfYTop
                ? (cy - excludeHalfYTop) - y
                : y > cy + excludeHalfYBottom
                  ? y - (cy + excludeHalfYBottom)
                  : 0;
            const outsideDist = Math.sqrt(outX * outX + outY * outY);
            const t = Math.min(1, outsideDist / featherPx);
            // Smoother falloff: power curve stretches the fade for a softer, more feathered look
            const curve = t * t * (3 - 2 * t);
            // Let a little pixel bleed through in the center (feathered opacity) instead of hard clear
            const centerBleed = 0.07;
            weight = centerBleed + (1 - centerBleed) * curve;
          } else {
            const inCenterX = excludeHalfX > 0 && Math.abs(x - cx) <= excludeHalfX;
            const hasYExclude = excludeHalfYTop > 0 || excludeHalfYBottom > 0;
            const inY = hasYExclude && y >= cy - excludeHalfYTop && y <= cy + excludeHalfYBottom;
            if (inCenterX && (!hasYExclude || inY)) continue;
          }
        }
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = reducedMotion ? 0 : distance;
        if (!ctx) return;
        pxs.push(
          new Pixel(
            canvasRef.current,
            ctx,
            x,
            y,
            color.trim(),
            getEffectiveSpeed(finalSpeed, reducedMotion),
            delay,
            weight
          )
        );
      }
    }
    pixelsRef.current = pxs;
  };

  const doAnimate = (fnName: "appear" | "disappear") => {
    if (animationRef.current !== null) {
      animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
    }
    const timeNow = performance.now();
    const timePassed = timeNow - timePreviousRef.current;
    const timeInterval = 1000 / 60;

    if (timePassed < timeInterval) return;
    timePreviousRef.current = timeNow - (timePassed % timeInterval);

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !canvasRef.current) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    for (let i = 0; i < pixelsRef.current.length; i++) {
      const pixel = pixelsRef.current[i];
      pixel[fnName]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }
    if (allIdle && animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const handleAnimation = (name: "appear" | "disappear") => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    animationRef.current = requestAnimationFrame(() => doAnimate(name));
  };

  const onMouseEnter = () => handleAnimation("appear");
  const onMouseLeave = () => handleAnimation("disappear");
  const onFocus: React.FocusEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    handleAnimation("appear");
  };
  const onBlur: React.FocusEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    handleAnimation("disappear");
  };

  useEffect(() => {
    initPixels();
    const observer = new ResizeObserver(() => {
      initPixels();
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [finalGap, finalSpeed, finalColors, finalNoFocus, excludeCenter]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden grid place-items-center border border-border rounded-(--radius) isolate transition-colors duration-200 ease-[cubic-bezier(0.5,1,0.89,1)] select-none",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={finalNoFocus ? undefined : onFocus}
      onBlur={finalNoFocus ? undefined : onBlur}
      tabIndex={finalNoFocus ? -1 : 0}
    >
      <canvas className="absolute inset-0 w-full h-full block" ref={canvasRef} />
      {children}
    </div>
  );
}
