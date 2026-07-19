import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown, MapPin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function HeroSection() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 md:px-8 overflow-hidden animated-gradient">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-[#8b95a1] font-mono">Available for new roles</span>
              <span className="text-[#8b95a1] mx-1">·</span>
              <span className="flex items-center gap-1 text-sm text-[#8b95a1]"><MapPin size={13} /> EU or London, UK</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Building scalable backend systems, data platforms and{" "}
              <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
                AI-powered software.
              </span>
            </motion.h1>

            <motion.p {...fadeUp(0.35)} className="text-lg text-[#8b95a1] leading-relaxed max-w-xl mb-10">
              I'm Luca Santarelli, a Software Engineer based in the EU and London specialising in Python, cloud infrastructure, automation and modern web applications.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 mb-10">
              <button onClick={() => scrollTo("projects")} className="px-5 py-2.5 rounded-lg bg-blue text-[#0a0f1e] font-semibold text-sm hover:opacity-90 transition-opacity">
                View Projects
              </button>
              <a href="/cv-luca.pdf" download className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">
                <Download size={15} /> Download CV
              </a>
              <a href="https://github.com/ghostbustersrock" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">
                <Github size={15} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/luca-s-a68182118/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">
                <Linkedin size={15} /> LinkedIn
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-6 text-sm font-mono text-[#8b95a1]">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">4+</span>
                <span className="text-xs mt-0.5">Years Experience</span>
              </div>
              <div className="w-px bg-white/10" />
              
              {/* Remove the section showing how many registries I've scraped */}
              {/* <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">15+</span>
                <span className="text-xs mt-0.5">Registries Scraped</span>
              </div>
              <div className="w-px bg-white/10" /> */}
              
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">MSc</span>
                <span className="text-xs mt-0.5">Distinction, QMUL</span>
              </div>
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-60 h-72 md:w-72 md:h-[22rem] rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ boxShadow: "0 0 60px rgba(59,130,246,0.12)" }}>
                <img
                  src="/profile-photo.jpg"
                  alt="Luca Santarelli"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 glass-dark rounded-xl px-4 py-2.5 text-xs font-mono text-white border border-white/10">
                <span className="text-blue">Software Engineer</span> · AlliedOffsets
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp(1)} className="mt-20 flex justify-center">
          <button onClick={() => scrollTo("about")} className="text-[#8b95a1] hover:text-white transition-colors animate-bounce">
            <ArrowDown size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}