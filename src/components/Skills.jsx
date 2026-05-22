import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    category: "GenAI & LLMs",
    skills: [
      "LangChain",
      "RAG Pipelines",
      "FAISS",
      "ChromaDB",
      "HuggingFace",
      "Prompt Engineering",
    ],
  },
  {
    category: "ML / DL",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "OpenCV",
      "NLP",
      "CNNs",
    ],
  },
  {
    category: "Deployment & Ops",
    skills: ["FastAPI", "REST APIs", "Docker", "AWS/GCP", "CI/CD"],
  },
  {
    category: "Data & Viz",
    skills: ["Pandas", "NumPy", "Streamlit", "Tableau", "Matplotlib"],
  },
];

const ALL_SKILLS_ROW1 = [
  "Python",
  "LangChain",
  "RAG Pipelines",
  "FAISS",
  "ChromaDB",
  "HuggingFace",
  "TensorFlow",
  "PyTorch",
  "FastAPI",
  "Docker",
  "Pandas",
  "NumPy",
];

const ALL_SKILLS_ROW2 = [
  "JavaScript",
  "SQL",
  "Prompt Engineering",
  "Scikit-Learn",
  "OpenCV",
  "NLP",
  "CNNs",
  "REST APIs",
  "AWS/GCP",
  "CI/CD",
  "Streamlit",
  "Tableau",
  "Matplotlib",
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-black px-6 md:px-12 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span 
            className="text-xs uppercase text-accent font-semibold mb-3 block"
            style={{ letterSpacing: "0.25em" }}
          >
            / CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white tracking-tight leading-none">
            What I Work With
          </h2>
        </div>

        {/* 1. Dual Marquee Showcase (Visual Highlight) */}
        <div className="relative w-full overflow-hidden flex flex-col gap-4 py-8 mb-16 border-y border-white/5 bg-[#030303]/40">
          {/* Fade gradients */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

          {/* Row 1: Left Scrolling */}
          <div className="hover-pause w-full overflow-hidden flex select-none">
            <div className="flex gap-4 animate-marquee-left">
              {ALL_SKILLS_ROW1.map((skill, index) => (
                <span
                  key={`marq1-${skill}-${index}`}
                  className="px-5 py-2.5 bg-cardBg border border-white/5 hover:border-accent/35 text-white hover:text-accent font-grotesk text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex-shrink-0 cursor-default"
                >
                  {skill}
                </span>
              ))}
              {ALL_SKILLS_ROW1.map((skill, index) => (
                <span
                  key={`marq1-dup-${skill}-${index}`}
                  className="px-5 py-2.5 bg-cardBg border border-white/5 hover:border-accent/35 text-white hover:text-accent font-grotesk text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex-shrink-0 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2: Right Scrolling */}
          <div className="hover-pause w-full overflow-hidden flex select-none">
            <div className="flex gap-4 animate-marquee-right">
              {ALL_SKILLS_ROW2.map((skill, index) => (
                <span
                  key={`marq2-${skill}-${index}`}
                  className="px-5 py-2.5 bg-cardBg border border-white/5 hover:border-accent/35 text-white hover:text-accent font-grotesk text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex-shrink-0 cursor-default"
                >
                  {skill}
                </span>
              ))}
              {ALL_SKILLS_ROW2.map((skill, index) => (
                <span
                  key={`marq2-dup-${skill}-${index}`}
                  className="px-5 py-2.5 bg-cardBg border border-white/5 hover:border-accent/35 text-white hover:text-accent font-grotesk text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex-shrink-0 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Structured Category List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {SKILL_GROUPS.map((group, index) => (
            <motion.div
              key={group.category}
              variants={rowVariants}
              className={`border-t border-[#1a1a1a] py-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 ${
                index === SKILL_GROUPS.length - 1 ? "border-b border-[#1a1a1a]" : ""
              }`}
            >
              {/* Category Name (LEFT Column) */}
              <div className="w-full sm:w-[200px] flex-shrink-0 text-white font-bold font-syne text-lg tracking-tight pt-1">
                {group.category}
              </div>

              {/* Skill Badges (RIGHT Column) */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      borderColor: "#4DFFB4",
                      color: "#4DFFB4",
                      boxShadow: "0 0 14px rgba(77, 255, 180, 0.15)",
                    }}
                    className="px-[18px] py-[10px] bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-[6px] transition-all duration-300 font-grotesk cursor-default select-none interactive"
                    style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
