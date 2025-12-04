"use client";

import { useEffect, useRef, useCallback, useState } from "react";

// Sharper character set - fewer chars with more distinct density levels
const ASCII_CHARS = " .:-=+*#%@";

// ============================================================================
// VERSION 1 - Simple world map (72 cols x 36 rows)
// ============================================================================
const WORLD_MAP_V1 = [
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000001111100000000000000011111111000000000001111000000000000",
  "000000000001111111111111100000000001111111111110000000011111110000000000",
  "000000000011111111111111110000000011111111111111000000111111111000000000",
  "000000001111111111111111111000001111111111111111100001111111111100000000",
  "000000011111111111111111111100011111111111111111110011111111111110000000",
  "000001111111111111111111111110111111111111111111111111111111111111000000",
  "000011111111111111111111111111111111111111111111111111111111111111100000",
  "000111111111111111111111111111111111111111111111111111111011111111100000",
  "001111111111111111111111111111111111111111111111111111100001111111110000",
  "001111111111111111111111111111111111111111111111111110000000111111110000",
  "011111111111111111111111111111111111111111111111111100000000011111100000",
  "011111111111111111111111111111111111111111111111110000000000001111100000",
  "011111111111111111111111111111111111111111111111000000000000000111000000",
  "001111111111111111111111111111111111111111111100000000000000000110000000",
  "001111111111111111111111111111111111111111110000000000000000000000000000",
  "000111111111111111111111111111111111111111000000000000000000000000000000",
  "000011111111111111111111111111111111111100000000000000000000000000000000",
  "000001111111111111111111111111111111110000000000000000000000000000000000",
  "000000111111111111111111111111111111000000000000000000000011100000000000",
  "000000011111111111111111111111111100000000000000000000001111110000000000",
  "000000001111111111111111111111110000000000000000000000011111111000000000",
  "000000000111111111111111111111000000000000000000000000111111111100000000",
  "000000000011111111111111111100000000000000000000000001111111111110000000",
  "000000000001111111111111110000000000000000000000000011111111111111000000",
  "000000000000111111111111000000000000000000000000000111111111111111100000",
  "000000000000011111111100000000000000000000000000001111111111111111110000",
  "000000000000001111110000000000000000000000000000011111111111111111110000",
  "000000000000000111100000000000000000000000000000011111111111111111100000",
  "000000000000000011000000000000000000000000000000001111111111111111000000",
  "000000000000000000000000000000000000000000000000000011111111111100000000",
  "000000000000000000000000000000000000000000000000000000111111110000000000",
  "000000000000000000000000000000000000000000000000000000001111000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
];

// ============================================================================
// VERSION 2 - More accurate Earth map (90 cols x 45 rows, ~4° resolution)
// ============================================================================
const WORLD_MAP_V2 = [
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", // 90°N
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000111111111111111111111111100000000000000000000000000000000000000", // Greenland/Arctic
  "000000000000000000000001111111111111111111111111111111000000000000000000011111111100000000",
  "000000000000000000000111111111111111111111111111111111110000000000000001111111111110000000", // N Canada/Russia
  "000000000000111111111111111111111111111111111111111111111100000000000011111111111111100000",
  "000000000011111111111111111111111111111111111111111111111110000000000111111111111111110000", // Alaska/Siberia
  "000000000111111111111111111111111100111111111111111111111111000000001111111111111111111000",
  "000000001111111111111111111111110000011111111111111111111111100000011111111111111111111100", // Canada
  "000000011111111111111111111111100000001111111111111111111111110000111111111111111111111110",
  "000000111111111111111111111111000000000111111111111111111111111001111111111111111111111110", // N America/Europe
  "000001111111111111111111111110000000000011111111111111111111111111111111111111111111111100",
  "000011111111111111111111111100000000000001111111111111111111111111111111111111111111111000", // USA/Europe
  "000111111111111111111111111000000000000000111111111111111111111111111111111111111111110000",
  "001111111111111111111111110000000000000000011111111111111111111111111111111111111111100000", // USA/Med
  "001111111111111111111111100000000000000000001111111111111111111111111111111111111111000000",
  "000111111111111111111111000000000000000000000111111111111111111111111111111111111110000000", // Mexico/N Africa
  "000011111111111111111110000000000000000000000011111111111111111111111111111111111100000000",
  "000001111111111111111100000000000000000000000001111111111111111111111111111111111000000000", // C America/Sahara
  "000000111111111111111000000000000000000000000000111111111111111111111111111111110000000000",
  "000000011111111111110000000000000000000000000000011111111111111111111111111111100000000000", // Caribbean/Africa
  "000000001111111111100000000000000000000000000000001111111111111111111111111111000000000000",
  "000000000111111111000000000000000000000000000000000111111111111111111111111110000000000000", // S America/C Africa
  "000000000011111110000000000000000000000000000000000011111111111111111111111100000011100000",
  "000000000011111100000000000000000000000000000000000001111111111111111111111000000111110000", // Brazil/Africa
  "000000000011111000000000000000000000000000000000000000111111111111111111110000001111111000",
  "000000000011110000000000000000000000000000000000000000011111111111111111100000011111111100", // S Brazil/S Africa
  "000000000011100000000000000000000000000000000000000000001111111111111111000000111111111110",
  "000000000011000000000000000000000000000000000000000000000111111111111110000001111111111111", // Argentina
  "000000000001000000000000000000000000000000000000000000000011111111111100000011111111111111",
  "000000000000000000000000000000000000000000000000000000000001111111110000000111111111111111", // Patagonia/Australia
  "000000000000000000000000000000000000000000000000000000000000111111100000001111111111111111",
  "000000000000000000000000000000000000000000000000000000000000011110000000011111111111111110", // S tip/Australia
  "000000000000000000000000000000000000000000000000000000000000001100000000111111111111111100",
  "000000000000000000000000000000000000000000000000000000000000000000000001111111111111111000", // NZ area
  "000000000000000000000000000000000000000000000000000000000000000000000011111111111111110000",
  "000000000000000000000000000000000000000000000000000000000000000000000111111111111111100000",
  "000000000000000000000000000000000000000000000000000000000000000000001111111111111111000000",
  "000000000000000000000000000000000000000000000000000000000000000000000111111111111110000000",
  "000000000000000000000000000000000000000000000000000000000000000000000011111111111100000000",
  "000000000000000000000000000000000000000000000000000000000000000000000001111111111000000000", // Antarctica
  "000000000000000000000000000000000000000000000000000000000000000000000000111111110000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000011111000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000001110000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", // 90°S
];

const MAP_V1_WIDTH = 72;
const MAP_V1_HEIGHT = 36;
const MAP_V2_WIDTH = 90;
const MAP_V2_HEIGHT = 45;

interface AsciiPanelProps {
  version?: 1 | 2;
  onClick?: () => void;
}

export function AsciiPanel({ version = 2, onClick }: AsciiPanelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const dprRef = useRef<number>(1);

  // Store displacement state for each cell (for magnetic snap-back)
  const displacementRef = useRef<Float32Array | null>(null);

  // Interactive spin state
  const rotationRef = useRef<number>(0);
  const velocityRef = useRef<number>(0.0016); // Base rotation speed (matches original time * 0.1 where dt=0.016)
  const isDraggingRef = useRef<boolean>(false);
  const lastDragXRef = useRef<number>(0);
  const dragVelocitiesRef = useRef<number[]>([]);
  const clickStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  const cols = 100;
  const rows = 35;
  const charWidth = 10;
  const charHeight = 16;
  const hoverRadius = 10; // radius of hover effect in grid cells

  // Set up canvas for HiDPI displays
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;

    // Set the canvas buffer size (actual pixels)
    canvas.width = cols * charWidth * dpr;
    canvas.height = rows * charHeight * dpr;

    // Set the display size via CSS
    canvas.style.width = `${cols * charWidth}px`;
    canvas.style.height = `${rows * charHeight}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Scale the context to match DPR
      ctx.scale(dpr, dpr);
    }
  }, [cols, rows, charWidth, charHeight]);

  // Initialize displacement array
  if (displacementRef.current == null) {
    displacementRef.current = new Float32Array(cols * rows * 2); // x, y displacement for each cell
  }

  const MAP_WIDTH = version === 1 ? MAP_V1_WIDTH : MAP_V2_WIDTH;
  const MAP_HEIGHT = version === 1 ? MAP_V1_HEIGHT : MAP_V2_HEIGHT;
  const WORLD_MAP = version === 1 ? WORLD_MAP_V1 : WORLD_MAP_V2;

  const getCharForValue = useCallback((value: number) => {
    const index = Math.floor(value * (ASCII_CHARS.length - 1));
    return ASCII_CHARS[Math.max(0, Math.min(ASCII_CHARS.length - 1, index))];
  }, []);

  const isLand = useCallback((lon: number, lat: number) => {
    const mapX = Math.floor(((lon + Math.PI) / (2 * Math.PI)) * MAP_WIDTH) % MAP_WIDTH;
    const mapY = Math.floor(((Math.PI / 2 - lat) / Math.PI) * MAP_HEIGHT);

    if (mapY < 0 || mapY >= MAP_HEIGHT) return false;
    const wrappedX = ((mapX % MAP_WIDTH) + MAP_WIDTH) % MAP_WIDTH;

    return WORLD_MAP[mapY]?.[wrappedX] === "1";
  }, [MAP_WIDTH, MAP_HEIGHT, WORLD_MAP]);

  const calculate3DGlobe = useCallback(
    (x: number, y: number, rotation: number) => {
      const nx = (x / cols) * 2 - 1;
      const ny = (y / rows) * 2 - 1;

      const radiusX = 0.85;
      const radiusY = 0.75;
      const rotationY = rotation;

      const normalizedX = nx / radiusX;
      const normalizedY = ny / radiusY;
      const distFromCenter = Math.sqrt(
        normalizedX * normalizedX + normalizedY * normalizedY
      );

      if (distFromCenter <= 1) {
        const sphereZ = Math.sqrt(
          1 - normalizedX * normalizedX - normalizedY * normalizedY
        );

        const rotatedX =
          normalizedX * Math.cos(rotationY) + sphereZ * Math.sin(rotationY);
        const rotatedZ =
          -normalizedX * Math.sin(rotationY) + sphereZ * Math.cos(rotationY);

        const longitude = Math.atan2(rotatedX, rotatedZ);
        const latitude = Math.asin(Math.max(-1, Math.min(1, normalizedY)));

        const land = isLand(longitude, latitude);

        const lightX = 0.4;
        const lightY = -0.3;
        const lightZ = 0.85;
        const lightMag = Math.sqrt(
          lightX * lightX + lightY * lightY + lightZ * lightZ
        );

        const normalVecX = normalizedX;
        const normalVecY = normalizedY;
        const normalVecZ = sphereZ;
        const normalMag = Math.sqrt(
          normalVecX * normalVecX +
            normalVecY * normalVecY +
            normalVecZ * normalVecZ
        );

        const dotProduct =
          (normalVecX * lightX + normalVecY * lightY + normalVecZ * lightZ) /
          (normalMag * lightMag);
        const diffuse = Math.max(0, dotProduct);

        const edgeFade = Math.pow(sphereZ, 0.6);

        if (land) {
          const baseShade = 0.4 + diffuse * 0.5;
          return Math.min(1, baseShade * edgeFade + (1 - edgeFade) * 0.15);
        } else {
          const baseShade = 0.08 + diffuse * 0.15;
          return Math.min(1, baseShade * edgeFade + (1 - edgeFade) * 0.02);
        }
      }

      return 0.0;
    },
    [cols, rows, isLand]
  );

  // Handle mouse/touch interactions for spinning
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Detect if this is a mobile device
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const getClientX = (e: MouseEvent | TouchEvent): number => {
      return 'touches' in e ? e.touches[0].clientX : e.clientX;
    };

    // Track whether mouse is currently over the canvas
    const isHoveringRef = { current: false };

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
    };

    const handleMouseLeaveCanvas = () => {
      isHoveringRef.current = false;
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      // On mobile, just track for click detection, don't start dragging
      if (isMobile && 'touches' in e) {
        clickStartRef.current = { x: clientX, y: clientY, time: Date.now() };
        return;
      }

      // Desktop: enable drag-to-spin
      isDraggingRef.current = true;
      lastDragXRef.current = getClientX(e);
      dragVelocitiesRef.current = [];
      clickStartRef.current = { x: clientX, y: clientY, time: Date.now() };
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      // Update hover position for particle effect (desktop only)
      if (!isMobile || !('touches' in e)) {
        const rect = canvas.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        const x = Math.floor((clientX - rect.left) / charWidth);
        const y = Math.floor((clientY - rect.top) / charHeight);
        setMousePos({ x, y });
      }

      // Handle drag for spinning (desktop only)
      if (isDraggingRef.current && !isMobile) {
        const currentX = getClientX(e);
        const deltaX = currentX - lastDragXRef.current;

        // Convert pixel movement to rotation (scale factor for sensitivity)
        const rotationDelta = deltaX * 0.003;

        // Track velocity for momentum (store last few velocities for smoothing)
        dragVelocitiesRef.current.push(rotationDelta);
        if (dragVelocitiesRef.current.length > 5) {
          dragVelocitiesRef.current.shift();
        }

        // Apply rotation directly while dragging
        velocityRef.current = rotationDelta;

        lastDragXRef.current = currentX;
      }
    };

    const handleEnd = (e: MouseEvent | TouchEvent) => {
      // Mobile: simple tap detection - any touch that ends quickly is a tap
      if (isMobile && 'changedTouches' in e && clickStartRef.current && onClick) {
        const clientX = e.changedTouches[0].clientX;
        const clientY = e.changedTouches[0].clientY;
        const dx = Math.abs(clientX - clickStartRef.current.x);
        const dy = Math.abs(clientY - clickStartRef.current.y);
        const duration = Date.now() - clickStartRef.current.time;

        // Very forgiving: treat anything under 50px movement and 1 second as a tap
        if (dx < 50 && dy < 50 && duration < 1000) {
          onClick();
        }
        clickStartRef.current = null;
        return;
      }

      // Desktop: handle drag-to-spin
      if (isDraggingRef.current) {
        isDraggingRef.current = false;

        // Check if this was a click (minimal movement and short duration)
        if (clickStartRef.current && onClick) {
          const clientX = (e as MouseEvent).clientX;
          const clientY = (e as MouseEvent).clientY;
          const dx = Math.abs(clientX - clickStartRef.current.x);
          const dy = Math.abs(clientY - clickStartRef.current.y);
          const duration = Date.now() - clickStartRef.current.time;

          if (dx < 10 && dy < 10 && duration < 500) {
            onClick();
            clickStartRef.current = null;
            return;
          }
        }
        clickStartRef.current = null;

        // Calculate average velocity from recent movements for smooth momentum
        const velocities = dragVelocitiesRef.current;
        if (velocities.length > 0) {
          const avgVelocity = velocities.reduce((a, b) => a + b, 0) / velocities.length;
          // Boost the release velocity for more satisfying spin
          velocityRef.current = avgVelocity * 2;
        }
      }
    };

    const handleMouseLeave = () => {
      setMousePos(null);
      isDraggingRef.current = false;
      clickStartRef.current = null;
      isHoveringRef.current = false;
    };

    // Handle scroll wheel to spin the globe when hovering
    const handleWheel = (e: WheelEvent) => {
      // Only spin if hovering over the canvas
      if (isHoveringRef.current) {
        e.preventDefault();

        // Convert scroll delta to rotation velocity
        // deltaY is positive when scrolling down, negative when scrolling up
        // Scale it appropriately for smooth spinning
        const scrollSensitivity = 0.001;
        const scrollDelta = e.deltaY * scrollSensitivity;

        // Add to current velocity for smooth acceleration
        velocityRef.current += scrollDelta;

        // Clamp velocity to prevent it from getting too fast
        const maxVelocity = 0.05;
        velocityRef.current = Math.max(-maxVelocity, Math.min(maxVelocity, velocityRef.current));
      }
    };

    // Mouse events
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseup", handleEnd);
    canvas.addEventListener("wheel", handleWheel, { passive: false });

    // Touch events
    canvas.addEventListener("touchstart", handleStart, { passive: true });
    canvas.addEventListener("touchmove", handleMove, { passive: true });
    canvas.addEventListener("touchend", handleEnd);

    return () => {
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("mousedown", handleStart);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseup", handleEnd);
      canvas.removeEventListener("wheel", handleWheel);
      canvas.removeEventListener("touchstart", handleStart);
      canvas.removeEventListener("touchmove", handleMove);
      canvas.removeEventListener("touchend", handleEnd);
    };
  }, [charWidth, charHeight, onClick]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const displacement = displacementRef.current!;
    const springStrength = 0.08; // Very gentle spring
    const damping = 0.94; // Smoother
    const pushStrength = 0.6; // Very subtle push

    const animate = () => {
      timeRef.current += 0.016;

      // Apply velocity to rotation
      rotationRef.current += velocityRef.current;

      // Apply friction when not dragging (gradually return to base speed)
      if (!isDraggingRef.current) {
        const baseSpeed = 0.0016; // Original: time * 0.1 with dt=0.016
        const friction = 0.98;
        const returnStrength = 0.01;

        // Apply friction to slow down
        velocityRef.current *= friction;

        // Gradually return to base speed
        const diff = baseSpeed - velocityRef.current;
        velocityRef.current += diff * returnStrength;

        // Clamp very small velocities to base speed
        if (Math.abs(velocityRef.current - baseSpeed) < 0.0005) {
          velocityRef.current = baseSpeed;
        }
      }

      const rotation = rotationRef.current;
      const dpr = dprRef.current;

      // Reset transform and clear
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Reapply DPR scale
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Crisp text rendering
      ctx.imageSmoothingEnabled = false;
      ctx.font = "bold 11px 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace";
      ctx.textBaseline = "top";

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = (y * cols + x) * 2;
          const value = calculate3DGlobe(x, y, rotation);

          if (value > 0.01) {
            // Calculate hover effect
            let hoverIntensity = 0;
            let targetDispX = 0;
            let targetDispY = 0;

            if (mousePos) {
              const dx = x - mousePos.x;
              const dy = y - mousePos.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < hoverRadius && dist > 0.1) {
                // Very smooth gaussian-like falloff
                const normalizedDist = dist / hoverRadius;
                const falloff = Math.exp(-normalizedDist * normalizedDist * 3);
                hoverIntensity = falloff;

                // Gentle outward push
                const pushFactor = falloff * pushStrength;
                targetDispX = (dx / dist) * pushFactor;
                targetDispY = (dy / dist) * pushFactor;
              }
            }

            // Spring physics for displacement - smooth snap back
            const currentDispX = displacement[idx];
            const currentDispY = displacement[idx + 1];

            const forceX = (targetDispX - currentDispX) * springStrength;
            const forceY = (targetDispY - currentDispY) * springStrength;

            displacement[idx] = (currentDispX + forceX) * damping;
            displacement[idx + 1] = (currentDispY + forceY) * damping;

            // Calculate final position with subtle displacement
            const finalX = x * charWidth + displacement[idx] * charWidth * 0.3;
            const finalY = y * charHeight + displacement[idx + 1] * charHeight * 0.3;

            // Keep original character - no morphing
            const char = getCharForValue(value);

            // Very subtle darkening on hover
            const hoverBoost = hoverIntensity * 0.2;
            const adjustedValue = Math.min(1, value + hoverBoost);

            // All grayscale - higher contrast
            const gray = Math.floor((1 - adjustedValue) * 200 + 20);
            ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
            ctx.fillText(char, finalX, finalY);
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [calculate3DGlobe, getCharForValue, mousePos, hoverRadius, cols, rows, charWidth, charHeight]);

  return (
    <canvas
      ref={canvasRef}
      className="block cursor-crosshair touch-none"
      style={{ touchAction: 'none' }}
    />
  );
}
