"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

type Glint = {
  id: number;
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
  delay: number; // frames before becoming visible
};

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createGlint(id: number, width: number, height: number): Glint {
  return {
    id,
    x: randomBetween(width * 0.05, width * 0.95),
    y: randomBetween(height * 0.05, height * 0.95),
    size: randomBetween(4, 10),
    life: 0,
    maxLife: randomBetween(180, 320), // long lived — ~3–5 seconds at 60fps
    delay: Math.floor(randomBetween(0, 120)),
  };
}

// Draw a 4-point lens-flare glint: thin cross + tiny center dot
function drawGlint(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  opacity: number
) {
  const color = "#d4af8a"; // champagne gold only
  ctx.save();
  ctx.globalAlpha = opacity;

  // Horizontal line
  const grad = ctx.createLinearGradient(x - size, y, x + size, y);
  grad.addColorStop(0, "transparent");
  grad.addColorStop(0.5, color);
  grad.addColorStop(1, "transparent");
  ctx.strokeStyle = grad;
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(x - size, y);
  ctx.lineTo(x + size, y);
  ctx.stroke();

  // Vertical line (slightly shorter for elegance)
  const gradV = ctx.createLinearGradient(x, y - size * 0.75, x, y + size * 0.75);
  gradV.addColorStop(0, "transparent");
  gradV.addColorStop(0.5, color);
  gradV.addColorStop(1, "transparent");
  ctx.strokeStyle = gradV;
  ctx.beginPath();
  ctx.moveTo(x, y - size * 0.75);
  ctx.lineTo(x, y + size * 0.75);
  ctx.stroke();

  // Center dot
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 0.8, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

interface SparklesProps {
  className?: string;
  count?: number; // total simultaneous glints
  children?: React.ReactNode;
}

export function Sparkles({ className, count = 5, children }: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glintsRef = useRef<Glint[]>([]);
  const animationRef = useRef<number>(0);
  const counterRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const resize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    setDimensions({ width: container.offsetWidth, height: container.offsetHeight });
  }, []);

  useEffect(() => {
    resize();
    const observer = new ResizeObserver(resize);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [resize]);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas || dimensions.width === 0) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Stagger initial glints so they don't all appear at once
    glintsRef.current = Array.from({ length: count }, (_, i) => {
      const g = createGlint(i, dimensions.width, dimensions.height);
      g.delay = Math.floor((i / count) * 180); // spread across 3 seconds
      return g;
    });
    counterRef.current = count;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      glintsRef.current = glintsRef.current.map((g) => {
        // Waiting to appear
        if (g.delay > 0) {
          return { ...g, delay: g.delay - 1 };
        }

        const progress = g.life / g.maxLife;
        // Ease in over first 20%, hold, ease out over last 30%
        const opacity =
          progress < 0.2
            ? (progress / 0.2) * 0.65
            : progress > 0.7
            ? ((1 - progress) / 0.3) * 0.65
            : 0.65;

        drawGlint(ctx, g.x, g.y, g.size, opacity);

        if (g.life >= g.maxLife) {
          return createGlint(counterRef.current++, canvas.width, canvas.height);
        }

        return { ...g, life: g.life + 1 };
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [dimensions, count]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
