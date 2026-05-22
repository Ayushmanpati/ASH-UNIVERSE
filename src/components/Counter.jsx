import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function Counter({ value, duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numerical digits and preserve any prefix or suffix (e.g. "5+" or "Top 3")
    const numMatch = value.match(/\d+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(numMatch[0], 10);
    const prefix = value.substring(0, numMatch.index);
    const suffix = value.substring(numMatch.index + numMatch[0].length);

    const count = animate(0, targetNumber, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(`${prefix}${Math.floor(latest)}${suffix}`);
      },
    });

    return () => count.stop();
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}
