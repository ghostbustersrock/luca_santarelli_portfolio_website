import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Backend",
    color: "text-blue",
    bg: "bg-blue/10 border-blue/20",
    skills: ["Python", "FastAPI", "Flask", "SQLAlchemy", "REST APIs", "Pytest"],
  },
  {
    label: "Frontend",
    color: "text-purple",
    bg: "bg-purple/10 border-purple/20",
    skills: ["React", "JavaScript", "TypeScript", "Vue.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    label: "Data & Databases",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    skills: ["PostgreSQL", "Alembic", "Pandas", "NumPy", "ETL Pipelines", "Web Scraping", "Selenium", "BeautifulSoup"],
  },
  {
    label: "Cloud & Infrastructure",
    color: "text-blue",
    bg: "bg-blue/10 border-blue/20",
    skills: ["AWS (EC2, S3, ECS)", "Docker", "CI/CD", "Git / GitLab", "Personal server"],
  },
  {
    label: "AI & Automation",
    color: "text-purple",
    bg: "bg-purple/10 border-purple/20",
    skills: ["Claude API", "LLMs", "MCP Servers", "Prompt Engineering", "Slack Bots", "ChatGPT"],
  },
  {
    label: "Developer Tools & Practices",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    skills: ["Jira", "Confluence", "Agile", "Code Review", "System Design", "Mentoring"],
  },
];

export default function TechnicalSkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-xs font-mono text-blue uppercase tracking-widest mb-4">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-xl p-5 hover:border-white/15 hover:-translate-y-0.5 transition-all duration-200"
            >
              <p className={`text-xs font-mono uppercase tracking-widest mb-4 ${group.color}`}>{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className={`text-xs font-mono px-2.5 py-1 rounded-md border ${group.bg} text-white/80`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
          <div className="glass rounded-xl p-6">
            <p className="text-xs font-mono text-purple uppercase tracking-widest mb-5">Continuous Learning</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm font-semibold text-white mb-3">Currently Exploring</p>
                <ul className="space-y-2">
                  {["System Design", "RAG Systems", "LLM Agents"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#8b95a1]">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue flex-none" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-3">Deepening</p>
                <ul className="space-y-2">
                  {["Data Modelling", "Docker", "Cloud Computing"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#8b95a1]">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple flex-none" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-3">On the Roadmap</p>
                <ul className="space-y-2">
                  {["Product Management", "Technical Writing"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#8b95a1]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-none" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}