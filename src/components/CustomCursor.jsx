import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotWrapRef  = useRef(null); // outer: position only — no CSS transition
  const dotRef      = useRef(null); // inner: size/color transitions only
  const ringWrapRef = useRef(null); // outer: position only — no CSS transition
  const ringRef     = useRef(null); // inner: size/border transitions only
  const labelRef    = useRef(null);

  useEffect(() => {
    // Kill on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const dotWrap  = dotWrapRef.current;
    const dot      = dotRef.current;
    const ringWrap = ringWrapRef.current;
    const ring     = ringRef.current;
    const label    = labelRef.current;
    if (!dotWrap || !dot || !ringWrap || !ring || !label) return;

    // The visible text span lives inside the label wrapper div
    const labelSpan = label.querySelector("span");

    // Current actual mouse position
    let mx = -200, my = -200;
    // Ring lerp position
    let rx = -200, ry = -200;
    let rafId;
    let cursorState = "default"; // "default" | "interactive" | "heading"

    // ── RAF loop ──────────────────────────────────────────────
    // Key: ONLY transform is updated here. No CSS transition on wrappers.
    const lerp = (a, b, t) => a + (b - a) * t;
    const LERP_FACTOR = 0.18; // snappier feel

    const tick = () => {
      // Dot tracks mouse instantly
      dotWrap.style.transform  = `translate(${mx}px,${my}px)`;

      // Label tracks mouse instantly (offset by 16px)
      label.style.transform    = `translate(${mx + 16}px,${my + 16}px)`;

      // Ring lerps toward mouse
      rx = lerp(rx, mx, LERP_FACTOR);
      ry = lerp(ry, my, LERP_FACTOR);
      ringWrap.style.transform = `translate(${rx}px,${ry}px)`;

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // ── State helpers ─────────────────────────────────────────
    const applyState = (state) => {
      if (state === cursorState) return;
      cursorState = state;

      // Clear state classes from INNER elements only
      ring.className = "c-ring-inner";
      dot.className  = "c-dot-inner";
      if (labelSpan) labelSpan.style.opacity = "0";

      if (state === "interactive") {
        ring.classList.add("ring-hover");
        dot.classList.add("dot-hover");
        if (labelSpan) labelSpan.style.opacity = "1";
      } else if (state === "heading") {
        ring.classList.add("ring-heading");
        dot.classList.add("dot-heading");
      }
    };

    // ── Event listeners ───────────────────────────────────────
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dotWrap.style.opacity  = "1";
      ringWrap.style.opacity = "1";
    };

    const onOver = (e) => {
      const t = e.target;
      if (!t) return;

      if (t.closest(".scramble-title")) {
        applyState("heading");
        return;
      }

      const el =
        t.closest("a") ||
        t.closest("button") ||
        t.closest(".interactive") ||
        t.closest(".glow-card");

      if (el) {
        const href = el.getAttribute("href") || "";
        const txt  = (el.textContent || "").toLowerCase();
        let text = "VIEW →";
        if (href.includes("github"))   text = "CODE ↗";
        else if (href.includes("linkedin")) text = "CONNECT ↗";
        else if (href.includes("leetcode")) text = "SOLVE ↗";
        else if (href.includes("mailto"))   text = "SAY HI ✉";
        else if (txt.includes("work") || txt.includes("project")) text = "EXPLORE ↓";
        else if (txt.includes("touch") || txt.includes("contact"))text = "LET'S GO →";
        if (labelSpan) labelSpan.textContent = text;
        applyState("interactive");
      } else {
        applyState("default");
      }
    };

    const onDown = () => {
      ring.classList.add("ring-click");
      setTimeout(() => ring.classList.remove("ring-click"), 200);
    };

    const onLeave = () => {
      dotWrap.style.opacity  = "0";
      ringWrap.style.opacity = "0";
    };
    const onEnter = () => {
      dotWrap.style.opacity  = "1";
      ringWrap.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove,  { passive: true });
    window.addEventListener("mouseover", onOver,  { passive: true });
    window.addEventListener("mousedown", onDown);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      {/* ── Inject all cursor styles once ── */}
      <style>{`
        @media (hover: hover) {
          *, *::before, *::after { cursor: none !important; }
        }

        /* ── Position wrappers: NO transition (RAF owns these) ── */
        .c-dot-wrap, .c-ring-wrap {
          position: fixed;
          top: 0; left: 0;
          width: 0; height: 0;
          pointer-events: none;
          will-change: transform;
          z-index: 999999;
        }
        .c-label-wrap {
          position: fixed;
          top: 0; left: 0;
          width: 0; height: 0;
          pointer-events: none;
          will-change: transform;
          z-index: 999999;
        }

        /* ── DOT inner ── */
        .c-dot-inner {
          width: 8px; height: 8px;
          margin-left: -4px; margin-top: -4px;
          border-radius: 50%;
          background: #4DFFB4;
          box-shadow: 0 0 8px #4DFFB4, 0 0 16px rgba(77,255,180,0.35);
          /* transition ONLY for size & color — never for position */
          transition:
            width  0.22s cubic-bezier(.22,1,.36,1),
            height 0.22s cubic-bezier(.22,1,.36,1),
            margin 0.22s cubic-bezier(.22,1,.36,1),
            background-color 0.22s ease,
            box-shadow 0.22s ease,
            opacity 0.22s ease;
        }
        .c-dot-inner.dot-hover {
          width: 4px; height: 4px;
          margin-left: -2px; margin-top: -2px;
          background: #fff;
          box-shadow: 0 0 6px rgba(255,255,255,0.8);
        }
        .c-dot-inner.dot-heading {
          opacity: 0;
        }

        /* ── RING inner ── */
        .c-ring-inner {
          width: 40px; height: 40px;
          margin-left: -20px; margin-top: -20px;
          border-radius: 50%;
          border: 1.5px solid rgba(77,255,180,0.65);
          background: transparent;
          box-shadow: 0 0 10px rgba(77,255,180,0.15);
          /* transition ONLY for size & border — never for position */
          transition:
            width  0.32s cubic-bezier(.22,1,.36,1),
            height 0.32s cubic-bezier(.22,1,.36,1),
            margin 0.32s cubic-bezier(.22,1,.36,1),
            border-color 0.28s ease,
            box-shadow 0.28s ease,
            background-color 0.28s ease,
            transform 0.15s cubic-bezier(.22,1,.36,1);
          animation: ring-pulse 2.8s ease-in-out infinite;
        }
        @keyframes ring-pulse {
          0%,100% { box-shadow: 0 0 10px rgba(77,255,180,0.15); }
          50%      { box-shadow: 0 0 20px rgba(77,255,180,0.30), 0 0 40px rgba(77,255,180,0.08); }
        }
        .c-ring-inner.ring-hover {
          width: 64px; height: 64px;
          margin-left: -32px; margin-top: -32px;
          border-color: #4DFFB4;
          background: rgba(77,255,180,0.04);
          box-shadow: 0 0 24px rgba(77,255,180,0.45), 0 0 48px rgba(77,255,180,0.12);
          animation: none;
        }
        .c-ring-inner.ring-heading {
          width: 90px; height: 90px;
          margin-left: -45px; margin-top: -45px;
          border-color: rgba(77,255,180,0.22);
          background: radial-gradient(circle, rgba(77,255,180,0.07) 0%, transparent 70%);
          box-shadow: none;
          animation: none;
        }
        .c-ring-inner.ring-click {
          transform: scale(0.80);
          animation: none;
        }

        /* ── Label ── */
        .c-label {
          font-size: 10px;
          color: #4DFFB4;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          letter-spacing: 0.15em;
          white-space: nowrap;
          opacity: 0;
          text-shadow: 0 0 8px rgba(77,255,180,0.55);
          transition: opacity 0.18s ease;
        }
      `}</style>

      {/* DOT — outer wrap (no transition) + inner visual */}
      <div ref={dotWrapRef} className="c-dot-wrap">
        <div ref={dotRef} className="c-dot-inner" />
      </div>

      {/* RING — outer wrap (no transition) + inner visual */}
      <div ref={ringWrapRef} className="c-ring-wrap">
        <div ref={ringRef} className="c-ring-inner" />
      </div>

      {/* LABEL */}
      <div className="c-label-wrap" style={{ position:"fixed",top:0,left:0,width:0,height:0,pointerEvents:"none",willChange:"transform",zIndex:999999 }}
        ref={(el) => { labelRef.current = el; }}
      >
        <span className="c-label" />
      </div>
    </>
  );
}
