import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Infosys Springboard",
    role: "Machine Learning Intern",
    date: "2025",
    location: "Remote",
    logo: "🏢",
    highlights: [
      "25% accuracy improvement across 3+ ML models",
      "40% reduction in experiment iteration time",
      "Benchmarked TensorFlow/OpenCV/Scikit-Learn architectures",
    ],
  },
  {
    company: "CTTC — Ministry of MSME",
    role: "AI & ML Intern",
    date: "2025",
    location: "Bhubaneswar, Odisha",
    logo: "🏭",
    highlights: [
      "5+ ML models at 88–92% accuracy",
      "Face Recognition Attendance System",
      "NLP text classification & predictive modeling end-to-end",
    ],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-black px-6 md:px-12 relative overflow-hidden">
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-3 font-grotesk block">
            / JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white tracking-tight leading-none">
            Where I've Worked
          </h2>
        </div>

        {/* Timeline Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-0 sm:pl-12"
        >
          {/* Glowing Vertical Line - Desktop Only */}
          <motion.div
            variants={lineVariants}
            style={{ originY: 0 }}
            className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-accent via-accent/50 to-transparent hidden sm:block"
          />

          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="relative mb-12 last:mb-0">
              {/* Timeline Bullet Indicator - Desktop Only */}
              <div className="absolute -left-[42px] top-1.5 z-10 items-center justify-center hidden sm:flex">
                <div className="w-[16px] h-[16px] rounded-full bg-black border-[3px] border-accent ring-4 ring-accent/15" />
              </div>

              {/* Experience Card */}
              <motion.div
                variants={cardVariants}
                className="bg-cardBg border border-white/5 hover:border-accent/25 rounded-[12px] p-6 md:p-8 glow-card transition-all duration-300 group"
              >
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <span className="text-2xl mr-2 inline-block">{exp.logo}</span>
                    <h3 className="text-2xl font-bold font-syne text-white inline-block">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-grotesk text-accent font-medium mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-textMuted font-grotesk">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-accent" /> {exp.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-accent" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights list */}
                <ul className="space-y-3.5 select-text">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-textMuted font-grotesk text-sm md:text-base leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
