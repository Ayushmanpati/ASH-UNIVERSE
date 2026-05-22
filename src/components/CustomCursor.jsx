import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  const [isMobile, setIsMobile] = useState(true);
  const [cursorType, setCursorType] = useState("default"); // "default", "interactive", "heading"
  const [isVisible, setIsVisible] = useState(false);

  // Mouse coordinate refs
  const mouseCoords = useRef({ x: -100, y: -100 });
  const ringCoords = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if device is mobile or touch-enabled
    const checkDevice = () => {
      const mobileQuery = window.matchMedia("(max-width: 768px)");
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(mobileQuery.matches || hasTouch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleMouseMove = (e) => {
      if (isMobile) return;
      if (!isVisible) setIsVisible(true);
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect hovered element class or tag
    const handleMouseOver = (e) => {
      if (isMobile) return;
      const target = e.target;
      if (!target) return;

      const isScrambleTitle = target.classList.contains("scramble-title") || target.closest(".scramble-title");
      if (isScrambleTitle) {
        setCursorType("heading");
        return;
      }

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive") ||
        target.closest(".glow-card") ||
        target.getAttribute("role") === "button";

      if (isInteractive) {
        setCursorType("interactive");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, isVisible]);

  // Lerp loop for the trailing ring
  useEffect(() => {
    if (isMobile) return;

    let animFrameId;

    const render = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;

      if (dot && ring) {
        // Zero delay for dot
        dot.style.transform = `translate3d(${mouseCoords.current.x}px, ${mouseCoords.current.y}px, 0)`;

        // Lerp lag for ring (lerp factor ~0.1)
        const lerpFactor = 0.1;
        ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * lerpFactor;
        ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * lerpFactor;
        
        ring.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0)`;
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animFrameId);
  }, [isMobile]);

  if (isMobile || !isVisible) return null;

  // Render sizing and styles based on cursorType
  let dotSize = 8;
  let ringSize = 40;
  let ringStyle = {
    borderColor: "rgba(77, 255, 180, 0.3)",
    backgroundColor: "rgba(77, 255, 180, 0.05)",
    borderWidth: "1.5px",
  };

  if (cursorType === "interactive") {
    ringSize = 80;
    ringStyle = {
      borderColor: "rgba(77, 255, 180, 0.6)",
      backgroundColor: "rgba(77, 255, 180, 0.15)",
      borderWidth: "2px",
    };
  } else if (cursorType === "heading") {
    dotSize = 0; // Dot disappears
    ringSize = 250; // Spotlight sweeps
    ringStyle = {
      borderWidth: "0px",
      backgroundColor: "transparent",
      backgroundImage: "radial-gradient(circle, rgba(77, 255, 180, 0.15) 0%, rgba(77, 255, 180, 0.04) 40%, rgba(0, 0, 0, 0) 70%)",
      mixBlendMode: "screen",
    };
  }

  return (
    <>
      {/* 1. Zero-delay Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      >
        <div
          className="rounded-full bg-accent transition-all duration-200 ease-out"
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            marginLeft: `-${dotSize / 2}px`,
            marginTop: `-${dotSize / 2}px`,
            opacity: dotSize === 0 ? 0 : 1,
          }}
        />
      </div>

      {/* 2. Trailing Ring / Spotlight */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
      >
        <div
          className="rounded-full border transition-all duration-300 ease-out"
          style={{
            width: `${ringSize}px`,
            height: `${ringSize}px`,
            marginLeft: `-${ringSize / 2}px`,
            marginTop: `-${ringSize / 2}px`,
            ...ringStyle,
          }}
        />
      </div>
    </>
  );
}
