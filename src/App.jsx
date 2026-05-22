import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  const GlowingDivider = () => (
    <div className="w-full flex justify-center py-4 relative overflow-hidden pointer-events-none select-none">
      <div className="w-3/4 md:w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[6px] bg-accent/30 blur-[4px] rounded-full" />
      </div>
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

        {/* Contact Form / Copy Box & Footer */}
        <Contact />
      </main>
    </div>
  );
}
