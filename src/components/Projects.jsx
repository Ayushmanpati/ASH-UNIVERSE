import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Mediclare",
    emoji: "🏥",
    subtitle: "AI Medical Intelligence System",
    tags: ["GenAI", "RAG", "LLMs", "FastAPI", "NLP", "TTS", "FAISS"],
    description:
      "Production-ready medical AI platform — 90% extraction accuracy, 92% precision in drug interaction detection, multilingual support for 5+ languages, doctor verification workflow.",
    github: "https://github.com/Ayushmanpati/MEDCLARE",
  },
  {
    title: "AuditFlow",
    emoji: "💰",
    subtitle: "AI Financial Intelligence Platform",
    tags: ["Anomaly Detection", "Scikit-Learn", "Pandas", "Streamlit"],
    description:
      "AI-driven financial auditing engine with 90% anomaly recall. Interactive dashboards let auditors investigate suspicious transactions without writing a single query.",
    github: "https://github.com/Ayushmanpati/Auditflow",
  },
  {
    title: "Assistive Vision",
    emoji: "👁️",
    subtitle: "Real-Time Navigation Aid",
    tags: ["Computer Vision", "OpenCV", "Deep Learning", "Audio Pipeline"],
    description:
      "Real-time CV system detecting 9 object classes at 86% accuracy with sub-100ms latency. Voice-based audio feedback for hands-free, screen-free navigation.",
    github: "https://github.com/Ayushmanpati",
  },
  {
    title: "SnakeOver",
    emoji: "🐍",
    subtitle: "Hand Gesture Controlled Snake Game",
    tags: ["MediaPipe", "OpenCV", "Pygame", "Computer Vision"],
    description:
      "Real-time Snake game controlled via hand gestures using MediaPipe Tasks API with EMA-based smoothing.",
    github: "https://github.com/Ayushmanpati/SnakeOver",
  },
  {
    title: "Disease Predictor",
    emoji: "🩺",
    subtitle: "Multi-Disease ML Web App",
    tags: ["Streamlit", "Scikit-Learn", "RandomForest", "ML"],
    description:
      "Web app predicting COVID-19, Diabetes, and Heart Disease likelihood using ML models.",
    github: "https://github.com/Ayushmanpati/Disease-prediction",
  },
];

export default function Projects() {
  const ProjectCard = ({ project }) => (
    <motion.div
      whileHover={{
        scale: 1.05,
        borderColor: "#4DFFB4",
      }}
      className="w-full h-full min-h-[340px] bg-[#111] border border-[#222] hover:border-accent/30 rounded-[16px] p-8 flex flex-col justify-between transition-all duration-300 relative group pointer-events-auto shadow-lg hover:shadow-[0_0_24px_rgba(77,255,180,0.12)]"
    >
      {/* Card Content */}
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl" role="img" aria-label={project.title}>
              {project.emoji}
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-syne text-white group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-[10px] text-textMuted uppercase tracking-wider font-grotesk mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-white/5 text-textMuted font-grotesk text-[10px] uppercase tracking-wider rounded-sm border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-textMuted font-grotesk text-sm leading-relaxed mb-4 select-text">
          {project.description}
        </p>
      </div>

      {/* Card CTA Footer */}
      <div className="border-t border-[#222] pt-4 mt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest text-accent font-bold font-grotesk flex items-center gap-1.5 hover:text-white transition-colors interactive z-20"
        >
          View on GitHub →
        </a>
      </div>
    </motion.div>
  );

  return (
    <section id="work" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        {/* Title Block */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-3 font-grotesk block">
              / PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-syne text-white tracking-tight leading-none">
              Things I've Built
            </h2>
          </div>
          <span className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-textMuted font-grotesk">
            hover cards to pause & explore <ArrowRight size={14} className="text-accent" />
          </span>
        </div>
      </div>

      {/* Mobile Stack View */}
      <div className="sm:hidden px-6 flex flex-col items-center gap-6">
        {PROJECTS.map((project, index) => (
          <div key={`mobile-${project.title}-${index}`} className="w-[min(300px,90vw)]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Desktop Infinite Scrolling Marquee */}
      <div className="hidden sm:block w-full overflow-hidden hover-pause relative py-8">
        {/* Fade gradients */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

        {/* Marquee Track */}
        <div className="flex gap-6 animate-marquee-left w-max">
          {PROJECTS.map((project, index) => (
            <div key={`track1-${project.title}-${index}`} className="w-[380px] flex-shrink-0">
              <ProjectCard project={project} />
            </div>
          ))}
          {PROJECTS.map((project, index) => (
            <div key={`track2-${project.title}-${index}`} className="w-[380px] flex-shrink-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
