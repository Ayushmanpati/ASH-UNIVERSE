import { motion } from "framer-motion";

const ISSUERS = {
  infosys: { label: "Infosys Springboard", color: "#0070c0" },
  udemy:   { label: "Udemy",               color: "#a435f0" },
  deloitte:{ label: "Deloitte × Forage",   color: "#86bc25" },
};

const CERTS = [
  {
    issuer: "infosys",
    name: "Deep Learning for Developers",
    date: "June 21, 2025",
    back: "Covered CNNs, RNNs, transfer learning & deployment with TensorFlow.",
  },
  {
    issuer: "infosys",
    name: "Principles of Generative AI",
    date: "June 23, 2025",
    back: "Foundations of LLMs, prompt engineering, RAG & GenAI safety principles.",
  },
  {
    issuer: "infosys",
    name: "Artificial Intelligence Primer",
    date: "June 23, 2025",
    back: "Core ML/AI concepts: supervised, unsupervised, reinforcement learning.",
  },
  {
    issuer: "infosys",
    name: "Internship 6.0 (B3) — AI-Powered Assistive Mobility Tool",
    date: "Sep 15 – Nov 25, 2025  ·  Issued Jan 13, 2026",
    back: "Built a real-time assistive vision system for the visually impaired using OpenCV & deep learning.",
  },
  {
    issuer: "udemy",
    name: "Machine Learning A–Z: AI, Python & R + ChatGPT Prize [2024]",
    date: "Dec 14, 2024  ·  43 hrs",
    back: "End-to-end ML course: regression, classification, clustering, NLP & reinforcement learning.",
  },
  {
    issuer: "deloitte",
    name: "Data Analytics Job Simulation",
    date: "Dec 13, 2025",
    back: "Skills: Data Analysis, Forensic Technology, business insight storytelling.",
  },
];

function CertCard({ cert }) {
  const issuer = ISSUERS[cert.issuer];
  return (
    <div className="cert-card-wrapper group" style={{ perspective: "1000px", height: 200 }}>
      <div
        className="cert-card-inner"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "#0a0a0a",
            border: "1px solid #1c1c1c",
            borderRadius: 12,
            padding: "18px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Issuer pill */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: issuer.color,
                boxShadow: `0 0 6px ${issuer.color}`,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontFamily: '"Space Grotesk", sans-serif',
                fontVariant: "small-caps",
                letterSpacing: "0.12em",
                color: "#888",
                fontWeight: 600,
              }}
            >
              {issuer.label}
            </span>
          </div>

          {/* Cert name */}
          <p
            style={{
              color: "#fff",
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: 14,
              lineHeight: 1.4,
              flex: 1,
            }}
          >
            {cert.name}
          </p>

          {/* Hint */}
          <p
            style={{
              fontSize: 9,
              color: "#444",
              fontFamily: '"Space Grotesk", sans-serif',
              letterSpacing: "0.1em",
              textAlign: "right",
              marginTop: 10,
            }}
          >
            hover to reveal →
          </p>
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "#0d0d0d",
            border: `1px solid ${issuer.color}33`,
            borderRadius: 12,
            padding: "18px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 10,
                fontFamily: '"Space Grotesk", sans-serif',
                fontVariant: "small-caps",
                letterSpacing: "0.12em",
                color: "#4DFFB4",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              {issuer.label}
            </p>
            <p
              style={{
                color: "#fff",
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 600,
                fontSize: 13,
                lineHeight: 1.45,
              }}
            >
              {cert.name}
            </p>
            <p
              style={{
                color: "#666",
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 11,
                marginTop: 8,
                lineHeight: 1.5,
              }}
            >
              {cert.back}
            </p>
          </div>
          <p
            style={{
              fontSize: 10,
              color: "#555",
              fontFamily: '"Space Grotesk", sans-serif',
              letterSpacing: "0.05em",
              marginTop: 10,
            }}
          >
            {cert.date}
          </p>
        </div>
      </div>

      {/* Flip trigger — inject via <style> below */}
      <style>{`
        .cert-card-wrapper:hover .cert-card-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 md:py-32 bg-black px-6 md:px-12 relative overflow-hidden"
    >
      {/* Soft accent glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span
            className="text-xs uppercase text-accent font-semibold mb-3 block"
            style={{ letterSpacing: "0.25em" }}
          >
            / CREDENTIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white tracking-tight leading-none">
            Certifications
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {CERTS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <CertCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
