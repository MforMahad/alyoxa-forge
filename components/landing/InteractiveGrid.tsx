"use client";

import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    const gridSpacing = 48; // Architectural grid unit size

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const render = () => {
      // Smooth lerp for fluid cursor tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / gridSpacing);
      const rows = Math.ceil(height / gridSpacing);

      // Draw faint structural grid lines
      ctx.strokeStyle = "rgba(24, 24, 27, 0.04)";
      ctx.lineWidth = 1;

      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSpacing, 0);
        ctx.lineTo(i * gridSpacing, height);
        ctx.stroke();
      }

      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        ctx.moveTo(0, j * gridSpacing);
        ctx.lineTo(width, j * gridSpacing);
        ctx.stroke();
      }

      // Draw interactive CAD intersection nodes
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const originX = i * gridSpacing;
          const originY = j * gridSpacing;

          const dx = mouse.x - originX;
          const dy = mouse.y - originY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180; // Reaction radius

          let nodeX = originX;
          let nodeY = originY;
          let radius = 1.5;
          let alpha = 0.12;

          if (dist < maxDist) {
            const factor = (1 - dist / maxDist);
            // Magnetic drift effect towards cursor
            nodeX += dx * factor * 0.25;
            nodeY += dy * factor * 0.25;
            radius = 1.5 + factor * 3.5;
            alpha = 0.12 + factor * 0.65;
          }

          ctx.fillStyle = `rgba(24, 24, 27, ${alpha})`;
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}