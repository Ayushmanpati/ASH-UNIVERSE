import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ayushmanpati07@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-black px-6 md:px-12 relative overflow-hidden flex flex-col justify-between">
      {/* Background soft grid & accent glow */}
      <div className="absolute inset-0 grid-bg opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        {/* Section Header */}
        <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-6 font-grotesk block">
          get in touch ✌️
        </span>

        {/* Massive Bold Heading */}
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold font-syne text-white tracking-tighter leading-none mb-12 hover:text-accent transition-colors duration-300">
          Let's build something real.
        </h2>

        {/* Email Direct / Copy Box */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-cardBg border border-white/5 p-2 pr-4 rounded-sm hover:border-accent/30 transition-all duration-300 w-full max-w-lg justify-between">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 px-4 py-3 font-grotesk text-white text-base md:text-lg hover:text-accent transition-colors w-full sm:w-auto"
            >
              <Mail size={18} className="text-accent" />
              {email}
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-4 py-2.5 bg-white/5 hover:bg-accent text-white hover:text-black font-grotesk text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={14} /> Copied!
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy
                </>
              )}
            </button>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-full text-xs text-textMuted font-grotesk">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <MapPin size={12} className="text-accent" />
            Gunupur, Odisha, India 🇮🇳
          </div>
        </div>

        {/* Social Icons row */}
        <div className="flex gap-8 justify-center items-center mb-16">
          <a
            href="https://github.com/Ayushmanpati"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-accent transform hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/ayushman-pati-9b273b289"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-accent transform hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href="https://leetcode.com/u/Ayushman_patii/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-accent transform hover:-translate-y-1 transition-all duration-300"
            aria-label="LeetCode"
          >
            <LeetCodeIcon className="w-6 h-6" />
          </a>
        </div>

        {/* Footer info */}
        <div className="border-t border-white/5 pt-8 text-center text-xs text-textMuted font-grotesk tracking-widest uppercase">
          <p>© {new Date().getFullYear()} · Built by Ayush · CSE '27 · GIET University</p>
          <p className="mt-4 opacity-40 font-mono text-[10px] lowercase tracking-normal block select-none">
            // currently debugging life at 2am ☕
          </p>
        </div>
      </div>
    </section>
  );
}
