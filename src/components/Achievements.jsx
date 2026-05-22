import { motion } from "framer-motion";

const WINS = [
  {
    emoji: "🥉",
    title: "Top 3 Finalist",
    sub: "HackNITR (200+ teams)",
    desc: "Competed against 200+ teams in one of East India's largest hackathons.",
  },
  {
    emoji: "🏆",
    title: "Winner",
    sub: "Hacknovation Hackathon",
    desc: "Secured first position with an innovative automated product prototype.",
  },
  {
    emoji: "👑",
    title: "President",
    sub: "Multimedia Club, GIET University (30+ member team)",
    desc: "Leading a 30+ member creative team managing tech events and media pipelines.",
  },
];

const CERTS = [
  "Deep Learning (Infosys)",
  "GenAI (Infosys)",
  "AI/ML using Python (CTTC)",
  "Machine Learning A-Z (Udemy)",
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="achievements" className="py-24 md:py-32 bg-black px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full bg-accent/4 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-3 font-grotesk block">
            / ACHIEVEMENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white tracking-tight leading-none">
            Wins & Recognition
          </h2>
        </div>

        {/* Win Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {WINS.map((win) => (
            <motion.div
              key={win.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 bg-cardBg border border-white/5 hover:border-accent/20 rounded-[12px] transition-all duration-300 flex flex-col justify-between h-64 glow-card group"
            >
              <div>
                <span className="text-4xl mb-4 block" role="img" aria-label={win.title}>
                  {win.emoji}
                </span>
                <h3 className="text-xl font-bold font-syne text-white group-hover:text-accent transition-colors duration-300">
                  {win.title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-accent font-semibold font-grotesk mt-1.5 mb-3 leading-snug">
                  {win.sub}
                </p>
              </div>
              <p className="text-textMuted font-grotesk text-sm leading-relaxed mt-2 select-text">
                {win.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Sub-shelf */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="pt-8 border-t border-white/5"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.2em] text-textMuted font-bold font-grotesk mb-6"
          >
            Verified Certifications
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3.5"
          >
            {CERTS.map((cert) => (
              <div
                key={cert}
                className="px-4 py-2 bg-cardBg border border-white/5 text-textMuted font-grotesk text-xs tracking-wider uppercase rounded-sm hover:border-accent/10 hover:text-white transition-all duration-300 flex items-center gap-2 select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {cert}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
