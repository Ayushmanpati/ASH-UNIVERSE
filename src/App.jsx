import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  const GlowingDivider = () => (
    <div className="w-full flex justify-center py-12 relative overflow-hidden pointer-events-none select-none">
      <div 
        className="w-20 h-1 bg-accent rounded-full blur-[0.5px]" 
        style={{ boxShadow: "0 0 20px #4DFFB4" }}
      />
    </div>
  );

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-accent selection:text-black antialiased overflow-x-hidden">
      {/* SVG Noise Overlay */}
      <div className="noise-overlay" />

      {/* Custom Trailing Cursor Dot + Ring */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Sections Wrapper */}
      <main>
        {/* Hero Section */}
        <Hero />

        <GlowingDivider />

        {/* About Section */}
        <About />

        <GlowingDivider />

        {/* Skills/Capabilities Cloud */}
        <Skills />

        <GlowingDivider />

        {/* Projects Horizontal Slider */}
        <Projects />

        <GlowingDivider />

        {/* Experience Timeline */}
        <Experience />

        <GlowingDivider />

        {/* Wins & Recognition */}
        <Achievements />

        <GlowingDivider />

        {/* Certifications — 3D Flip Cards */}
        <Certifications />

        <GlowingDivider />

        {/* Contact Form / Copy Box & Footer */}
        <Contact />
      </main>
    </div>
  );
}
