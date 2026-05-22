import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import Counter from "./Counter";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const stats = [
    { value: "2", label: "Internships" },
    { value: "3", label: "Deployed Projects" },
    { value: "5+", label: "ML Models Built" },
    { value: "Top 3", label: "HackNITR (200+ teams)" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-black px-6 md:px-12 relative overflow-hidden">
      {/* Background abstract accent */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Bio & Education */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <motion.span
              variants={itemVariants}
              className="text-xs uppercase tracking-widest text-accent font-semibold mb-3 font-grotesk"
            >
              / PROFILE
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold font-syne text-white tracking-tight leading-tight mb-8"
            >
              building intelligent systems from notebooks to production
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-grotesk text-textMuted leading-relaxed mb-10 select-text"
            >
              AI/ML engineer who builds production-ready intelligent systems end-to-end — not just notebooks. 
              Two industry internships completed by end of sophomore year. Fluent across the full 
              GenAI stack: LLM APIs, RAG pipelines, vector databases, computer vision, and NLP.
            </motion.p>

            {/* Education Badge */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-cardBg hover:bg-cardBgHover border border-white/5 hover:border-accent/20 transition-all duration-300 rounded-[12px] flex items-start gap-4"
            >
              <div className="p-3 bg-white/5 rounded-sm text-accent">
                <GraduationCap size={24} />
              </div>
              <div className="font-grotesk">
                <span className="text-xs uppercase tracking-widest text-accent font-bold block mb-1">Education</span>
                <h4 className="text-white font-medium text-lg">GIET University</h4>
                <p className="text-textMuted text-sm mt-0.5">B.Tech in Computer Science & Engineering</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-textMuted">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-accent" /> 2023 – 2027
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} className="text-accent" /> CGPA: 7.86
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stylized Stats Grid (2x2 on mobile/tablet, 1x4 on large screen) */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center h-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 md:p-8 bg-cardBg border border-white/5 hover:border-accent/20 rounded-[12px] transition-all duration-300 flex flex-col justify-center h-40 glow-card group"
                >
                  <span className="text-3xl md:text-4xl xl:text-5xl font-bold font-syne text-white group-hover:text-accent transition-colors duration-300">
                    <Counter value={stat.value} />
                  </span>
                  <span className="text-[10px] md:text-xs uppercase tracking-wider text-textMuted mt-3 font-grotesk leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
