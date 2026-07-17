import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, RefreshCw, Clock, BookOpen, Code2 } from "lucide-react";

const journey = [
  { label: "Electrical Engineering (BEng, First Class)", sub: "Queen Mary University of London" },
  { label: "Computer Science (MSc, Distinction)", sub: "Queen Mary University of London" },
  { label: "Full Stack & E-Commerce Development", sub: "Hullabalook · 2021–2022" },
  { label: "Backend & Data Engineering", sub: "QuantSpark · 2022–2024" },
  { label: "AI-Powered Applications & ETL Platforms", sub: "AlliedOffsets · 2024–Present" },
];

const principles = [
  { icon: Zap, title: "Solve Real Problems", desc: "Build software that delivers tangible value, not complexity for its own sake." },
  { icon: Shield, title: "Prioritise Maintainability", desc: "Write code the next engineer will thank you for — clear, tested and documented." },
  { icon: RefreshCw, title: "Automate Everything Repetitive", desc: "If it's done more than twice, it should run automatically." },
  { icon: Clock, title: "Deliver Value Early", desc: "Ship working software fast, iterate based on real feedback." },
  { icon: Code2, title: "Own Production Systems", desc: "Take full responsibility from architecture to debugging live incidents." },
  { icon: BookOpen, title: "Never Stop Learning", desc: "Every project is an opportunity to understand systems more deeply." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Bio + Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div {...fadeUp(0)}>
            <p className="text-xs font-mono text-blue uppercase tracking-widest mb-4">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Engineering software that owns problems end-to-end.
            </h2>
            <div className="space-y-4 text-[#8b95a1] leading-relaxed">
              <p>
                I'm a software engineer with a background that spans electrical engineering, computer science, and nearly five years of professional software development. What drives me is the whole journey — from understanding a business problem to owning the system that solves it in production.
              </p>
              <p>
                I started as an Electrical Engineer before completing an MSc in Computer Science with distinction at Queen Mary University of London. That academic foundation gave me a deep appreciation for systems thinking, which I've applied across full-stack development, financial data pipelines, and AI-powered tooling.
              </p>
              <p>
                At AlliedOffsets, I own the data infrastructure that powers carbon market intelligence for analysts across the industry — scraping 15+ registries, running ETL pipelines, and building internal AI tools that save hours of manual work every week.
              </p>
              <p>
                Outside of work, I build side projects that scratch real itches — like Maison Scanner, a property aggregator that started as a personal frustration with flat-hunting in London.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <p className="text-xs font-mono text-purple uppercase tracking-widest mb-6">My Journey</p>
            <div className="space-y-0">
              {journey.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full border-2 border-blue bg-[#0d1117] mt-1 flex-none" />
                    {i < journey.length - 1 && <div className="w-px flex-1 bg-white/10 my-1" />}
                  </div>
                  <div className={`pb-6 ${i === journey.length - 1 ? "" : ""}`}>
                    <p className="text-white font-medium text-sm">{item.label}</p>
                    <p className="text-[#8b95a1] text-xs mt-0.5 font-mono">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Engineering Philosophy */}
        <div>
          <motion.div {...fadeUp(0)} className="mb-10">
            <p className="text-xs font-mono text-blue uppercase tracking-widest mb-4">Engineering Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How I think about software.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.07)} className="glass rounded-xl p-5 hover:border-white/15 transition-all hover:-translate-y-0.5 duration-200">
                <div className="w-9 h-9 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                  <p.icon size={18} className="text-blue" />
                </div>
                <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-[#8b95a1] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}