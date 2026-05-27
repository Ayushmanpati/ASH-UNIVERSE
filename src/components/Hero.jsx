import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import ParticlesBg from "./ParticlesBg";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";

const TAGLINES = [
  "ai / ml engineer",
  "アイ・エムエル・エンジニア",
  "code. train. improve.",
  "知能を構築する",
  "giet univ · cse '27",
  "from notebooks → production",
];

const SCRAMBLE_CHARS = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789!@#$%&*?+=-アウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

function ScrambleLetter({ char, triggerOnMount, delay = 0 }) {
  const [displayChar, setDisplayChar] = useState(char);
  const isScrambling = useRef(false);

  const runScramble = () => {
    if (isScrambling.current) return;
    isScrambling.current = true;
    
    let count = 0;
    const maxCycles = 12;
    const interval = setInterval(() => {
      setDisplayChar(SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]);
      count++;
      
      if (count >= maxCycles) {
        clearInterval(interval);
        setDisplayChar(char);
        isScrambling.current = false;
      }
    }, 40);
  };

  useEffect(() => {
    if (triggerOnMount) {
      const timeout = setTimeout(() => {
        runScramble();
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [triggerOnMount, delay]);

  return (
    <span
      className="inline-block cursor-pointer transition-colors duration-200 hover:text-accent"
      onMouseEnter={runScramble}
    >
      {displayChar}
    </span>
  );
}

export default function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Tagline rotation
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTaglineIdx((prev) => (prev + 1) % TAGLINES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden bg-black select-none">
      {/* 1px teal scan line sweeps upward on loop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 opacity-40">
        <div className="w-full h-[1px] bg-accent/15 absolute left-0 animate-scanline" />
      </div>

      {/* Network Particle Background */}
      <ParticlesBg />

      {/* Grid Overlay for premium texture */}
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />

      {/* Soft gradient blob in center background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="z-10 text-center flex flex-col items-center max-w-4xl">
        {/* Confident lowercase tag */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6 font-semibold"
        >
          hi there, welcome to my universe
        </motion.span>

        {/* Large bold header with letter-by-letter scramble */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="scramble-title font-bold tracking-tighter leading-none cursor-pointer text-white hover:text-accent transition-colors duration-300 pb-2 relative flex items-baseline justify-center"
          style={{ 
            fontSize: "clamp(52px, 10vw, 82px)", 
            fontFamily: '"Space Grotesk", sans-serif' 
          }}
        >
          <span className="flex gap-[1px]">
            {"ayush".split("").map((char, index) => (
              <ScrambleLetter
                key={index}
                char={char}
                triggerOnMount={mounted}
                delay={200 + index * 100}
              />
            ))}
          </span>
          <motion.span
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-accent inline-block ml-0.5 filter drop-shadow-[0_0_8px_rgba(77,255,180,0.8)]"
          >
            .
          </motion.span>
        </motion.h1>

        {/* Katakana Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center gap-4 my-6 select-none"
        >
          <div className="w-12 h-[1px] bg-[#222]" />
          <div 
            className="flex gap-2 font-bold uppercase tracking-wider text-[#333] transition-colors"
            style={{ 
              fontFamily: '"Noto Sans JP", sans-serif', 
              fontSize: 'clamp(13px, 2.5vw, 18px)' 
            }}
          >
            {["ア", "ユ", "シ", "ュ", "マ", "ン"].map((char, index) => (
              <span
                key={index}
                className="animate-katakana text-[#333]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="w-12 h-[1px] bg-[#222]" />
        </motion.div>

        {/* Rotating tagline */}
        <div className="h-12 md:h-16 flex items-center justify-center overflow-hidden my-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineIdx}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font-grotesk text-textMuted max-w-lg md:max-w-2xl px-4 text-center font-light leading-relaxed uppercase tracking-wider"
              style={{ fontSize: "clamp(11px, 1.8vw, 14px)" }}
            >
              {TAGLINES[taglineIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center px-4 max-w-md sm:max-w-none"
        >
          <a
            href="#work"
            className="group px-8 py-4 bg-white text-black hover:bg-accent hover:text-black font-semibold font-grotesk flex items-center justify-center gap-2 transition-all duration-300 rounded-sm w-full sm:w-auto interactive"
          >
            View My Work
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 hover:border-accent text-white hover:text-accent font-semibold font-grotesk transition-all duration-300 rounded-sm bg-black/40 backdrop-blur-sm w-full sm:w-auto interactive"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-6 mt-12 items-center justify-center"
        >
          <a
            href="https://github.com/Ayushmanpati"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-accent transform hover:-translate-y-1 transition-all duration-300 interactive"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5.5 h-5.5" />
          </a>
          <a
            href="https://linkedin.com/in/ayushman-pati-9b273b289"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-accent transform hover:-translate-y-1 transition-all duration-300 interactive"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5.5 h-5.5" />
          </a>
          <a
            href="https://leetcode.com/u/Ayushman_patii/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-accent transform hover:-translate-y-1 transition-all duration-300 interactive"
            aria-label="LeetCode"
          >
            <LeetCodeIcon className="w-5.5 h-5.5" />
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-textMuted hover:text-accent hover:opacity-100 transition-all duration-300 interactive"
      >
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-accent" />
        </motion.div>
      </motion.a>
    </section>
  );
}
