import React from "react";
import { motion } from "framer-motion";
import { Users, Handshake, Clock } from "lucide-react";

const softSkills = [
  {
    label: "Leadership",
    icon: Users,
    color: "text-blue",
    bg: "bg-blue/10 border-blue/20",
    description: "Guiding teams and taking ownership to drive projects toward shared goals.",
  },
  {
    label: "Collaboration",
    icon: Handshake,
    color: "text-purple",
    bg: "bg-purple/10 border-purple/20",
    description: "Working closely with cross-functional teams to deliver better outcomes together.",
  },
  {
    label: "Time Management",
    icon: Clock,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    description: "Prioritizing effectively to consistently meet deadlines without sacrificing quality.",
  },
];

const languages = [
  { label: "Italian", level: 5, note: "Native speaker" },
  { label: "English", level: 5, note: "Like native speaker" },
  { label: "Spanish", level: 4, note: "Advanced speaker" },
  { label: "French", level: 2, note: "Beginner / intermediate" },
  { label: "Portuguese", level: 1, note: "Beginner" },
];

export default function OtherSkillsSection() {
  return (
    <section id="other-skills" className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-xs font-mono text-blue uppercase tracking-widest mb-4">Beyond the Code</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Soft Skills & Languages</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-xl p-5 hover:border-white/15 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className={`h-10 w-10 rounded-lg border flex items-center justify-center mb-4 ${skill.bg}`}>
                <skill.icon className={`h-5 w-5 ${skill.color}`} />
              </div>
              <p className="text-sm font-semibold text-white mb-2">{skill.label}</p>
              <p className="text-sm text-[#8b95a1] leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
          <div className="glass rounded-xl p-6">
            <p className="text-xs font-mono text-purple uppercase tracking-widest mb-6">Languages</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {languages.map((lang) => (
                <div key={lang.label} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">{lang.label}</p>
                    <p className="text-xs text-[#8b95a1]">{lang.note}</p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-none">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-2 w-6 rounded-full ${i < lang.level ? "bg-blue" : "bg-white/10"}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
