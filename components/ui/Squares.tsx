"use client";

import { useRef, useEffect } from "react";
import "./Squares.css";

export interface SquaresProps {
  direction?: "up" | "down" | "left" | "right" | "diagonal";
  speed?: number;
  borderColor?: string;
  /** Stroke width in pixels; use a value &lt; 1 (e.g. 0.5) for thinner, subtler lines */
  borderWidth?: number;
  squareSize?: number;
  hoverFillColor?: string;
  className?: string;
  /** Ref updated by parent with { clientX, clientY } so hover works when canvas is behind content */
  mouseClientRef?: React.MutableRefObject<{ clientX: number; clientY: number } | null>;
}

export default function Squares({
  direction = "right",
  speed = 1,
  borderColor = "rgba(226, 232, 226, 0.35)",
  borderWidth = 1,
  squareSize = 40,
  hoverFillColor = "rgba(34, 197, 94, 0.12)",
  className = "",
  mouseClientRef,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const updateHoverFromRef = () => {
      if (!mouseClientRef?.current) {
        hoveredSquare.current = null;
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const { clientX, clientY } = mouseClientRef.current;
      if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
        hoveredSquare.current = null;
        return;
      }
      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;
      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;
      const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
      const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);
      hoveredSquare.current = { x: hoveredSquareX, y: hoveredSquareY };
    };

    const drawGrid = () => {
      if (mouseClientRef) updateHoverFromRef();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;
      const offsetX = gridOffset.current.x % squareSize;
      const offsetY = gridOffset.current.y % squareSize;

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - offsetX;
          const squareY = y - offsetY;

          const gridX = Math.floor((x - startX) / squareSize);
          const gridY = Math.floor((y - startY) / squareSize);
          if (
            hoveredSquare.current &&
            gridX === hoveredSquare.current.x &&
            gridY === hoveredSquare.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      const mod = (a: number, b: number) => ((a % b) + b) % b;
      switch (direction) {
        case "right":
          gridOffset.current.x = mod(gridOffset.current.x - effectiveSpeed, squareSize);
          break;
        case "left":
          gridOffset.current.x = mod(gridOffset.current.x + effectiveSpeed, squareSize);
          break;
        case "up":
          gridOffset.current.y = mod(gridOffset.current.y + effectiveSpeed, squareSize);
          break;
        case "down":
          gridOffset.current.y = mod(gridOffset.current.y - effectiveSpeed, squareSize);
          break;
        case "diagonal":
          gridOffset.current.x = mod(gridOffset.current.x - effectiveSpeed, squareSize);
          gridOffset.current.y = mod(gridOffset.current.y - effectiveSpeed, squareSize);
          break;
        default:
          break;
      }
      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let cleanupCanvasListeners: (() => void) | undefined;
    if (!mouseClientRef) {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
        const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;
        const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
        const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);
        if (
          !hoveredSquare.current ||
          hoveredSquare.current.x !== hoveredSquareX ||
          hoveredSquare.current.y !== hoveredSquareY
        ) {
          hoveredSquare.current = { x: hoveredSquareX, y: hoveredSquareY };
        }
      };
      const handleMouseLeave = () => {
        hoveredSquare.current = null;
      };
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
      cleanupCanvasListeners = () => {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);
      cleanupCanvasListeners?.();
    };
  }, [direction, speed, borderColor, borderWidth, hoverFillColor, squareSize, mouseClientRef]);

  return (
    <canvas
      ref={canvasRef}
      className={`squares-canvas ${className}`.trim()}
      aria-hidden
    />
  );
}
