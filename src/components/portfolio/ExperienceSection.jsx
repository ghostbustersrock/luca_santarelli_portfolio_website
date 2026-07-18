import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer — Python",
    company: "AlliedOffsets",
    period: "2024 — Present",
    location: "London, UK",
    type: "Backend, Data & AI Engineering",
    overview: "AlliedOffsets is a carbon market intelligence platform providing data-driven insights to analysts, traders and Environmental, Social, and Governance (ESG) professionals across the global voluntary carbon market.",
    impact: "Owned and scaled the data infrastructure that powers the core product — ensuring reliable, up-to-date carbon market data from 40+ registries flows into production daily.",
    achievements: [
      "Built and maintained ETL pipelines scraping carbon projects data across 40+ global registries using Python, Requests, and Selenium",
      "Led R&D into LLM-based scraping techniques, significantly reducing time spent on manual data extraction",
      "Designed and built RavenAI — an AI-powered Slack assistant built on a custom Claude MCP server, enabling the team to query meeting data and our company's API operational metrics in natural language",
      "Trained and mentored new developers and analysts joining the team, documenting systems and reviewing code",
      "Owned production reliability — debugging live data/API incidents, managing deploys, and improving observability",
      "Developed full-stack features across the React frontend and Python/FastAPI backend",
      "Contributed to a new API platform, improving developer experience and enabling faster client integrations",
    ],
    tags: ["Python", "FastAPI", "AWS", "Selenium", "Claude API", "MCP", "PostgreSQL", "React"],
    challenge: "Scraping highly inconsistent, poorly structured registry websites at scale — each with different layouts, authentication mechanisms, and anti-bot protections — while maintaining pipeline reliability in production.",
    lesson: "Owning a production system teaches you things no tutorial ever can. Reliability, observability and graceful failure handling are not optional extras — they're the product.",
  },
  {
    role: "Software Engineer",
    company: "Hullabalook",
    period: "2021 — 2022 · 2023 — 2024",
    location: "London, UK",
    type: "Full Stack Development",
    overview: "Hullabalook is a B2B e-commerce technology company providing visual merchandising and product discovery tools to major furniture retail brands.",
    impact: "Contributed to client-facing features and internal tooling that improved the product discovery experience for shoppers across major retail websites.",
    achievements: [
      "Developed full-stack features across the Vue.js frontend and JavaScript backend",
      "Built and shipped internal MVP tools enabling the team to configure and manage retail client integrations",
      "Improved product filtering and merchandising logic used by millions of shoppers on partner retail sites",
      "Implemented data validation techniques to normalize client data ahead of frontend usage",
      "Participated in code reviews and agile ceremonies in a collaborative engineering team",
    ],
    tags: ["Python", "Vue.js", "JavaScript"],
    challenge: "Building a product that had to work seamlessly across highly varied retail client environments, each with different product catalogues and branding requirements.",
    lesson: "Working in a product company with a real user base sharpens your instinct for product thinking — the best engineers understand not just how to build, but why.",
  },
  {
    role: "Python Developer",
    company: "QuantSpark",
    period: "2022 — 2023",
    location: "London, UK",
    type: "Backend & Data Engineering",
    overview: "QuantSpark is a financial data consultancy delivering bespoke data platforms, analytics tooling and engineering solutions to clients in financial services.",
    impact: "Delivered backend systems and data pipelines that powered analytical workflows anda data dashboards used by financial analysts and data teams at enterprise clients.",
    achievements: [
      "Developed and maintained multiple clients financial dashboards",
      "Designed and built backend APIs powering internal applications used daily by analysts across the financial industry",
      "Built automation tooling that reduced repetitive manual data processing tasks by replacing them with scheduled Python jobs",
      "Responded to production incidents — diagnosing root causes, implementing fixes, and improving monitoring",
    ],
    tags: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "AWS", "Docker"],
    challenge: "Translating complex, bespoke client data requirements into reliable backend systems while maintaining clean architecture across multiple simultaneous client projects.",
    lesson: "The best backend systems are invisible to the end user. Fast, reliable and self-explanatory — that's the standard to aim for.",
  },
  {
    role: "MSc Computer Science · BEng (Hons) Electrical and Electronic Engineering",
    company: "Queen Mary University of London",
    period: "2017 — 2021",
    location: "London, UK",
    type: "Education",
    overview: "Queen Mary is a Russell Group university. The BEng in Electrical and Electronic Engineering provided a rigorous foundation in designing, testing, and building electrical circuits, power systems, and electronic devices. The MSc in Computer Science deepened expertise in algorithms, data structures and applied software systems.",
    impact: "Academic training that built rigorous problem-solving skills, systems thinking and a strong engineering foundation.",
    achievements: [
      "Completed MSc Computer Science with Distinction",
      "Achieved First Class Honours in BEng Electrical and Electronic Engineering",
      "Built iRecycle as final-year project — an iOS app using barcode scanning to provide recycling guidance",
      "Developed strong fundamentals in algorithms, data structures, operating systems and software architecture",
    ],
    tags: ["Python", "C++", "Swift Programming", "Algorithms", "Systems Design", "Signal Processing"],
    challenge: "Transitioning from hardware and signal-processing thinking to software engineering and applied computer science — learning to build for scale and correctness simultaneously.",
    lesson: "The engineering mindset transfers. Whether you're designing circuits or data pipelines, the discipline of understanding a system before building it never changes.",
  },
];

export default function ExperienceSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-blue uppercase tracking-widest mb-4">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Experience</h2>
        </motion.div>

        <div className="space-y-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
                  <div>
                    <span className="text-white font-semibold">{exp.role}</span>
                    <span className="hidden md:inline text-[#8b95a1] mx-3">·</span>
                    <span className="text-blue font-medium md:inline block">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#8b95a1]">{exp.period}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-[#8b95a1] hidden md:inline">{exp.type}</span>
                  </div>
                </div>
                <ChevronDown size={18} className={`text-[#8b95a1] flex-none ml-4 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-6 border-t border-white/5 pt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-5">
                        <div>
                          <p className="text-xs font-mono text-[#8b95a1] uppercase mb-2">Overview</p>
                          <p className="text-sm text-[#8b95a1] leading-relaxed">{exp.overview}</p>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-[#8b95a1] uppercase mb-2">Business Impact</p>
                          <p className="text-sm text-[#8b95a1] leading-relaxed">{exp.impact}</p>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-[#8b95a1] uppercase mb-2">Key Challenge</p>
                          <p className="text-sm text-[#8b95a1] leading-relaxed italic">{exp.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-[#8b95a1] uppercase mb-2">Lesson Learned</p>
                          <p className="text-sm text-[#8b95a1] leading-relaxed italic">"{exp.lesson}"</p>
                        </div>
                      </div>
                      <div className="space-y-5">
                        <div>
                          <p className="text-xs font-mono text-[#8b95a1] uppercase mb-3">Achievements</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((a, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-[#8b95a1]">
                                <span className="text-blue mt-1 flex-none">→</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-[#8b95a1] uppercase mb-3">Technologies</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                              <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue/10 text-blue border border-blue/20">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}