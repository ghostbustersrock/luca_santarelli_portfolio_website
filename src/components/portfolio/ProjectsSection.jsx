import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Maison Scanner",
    category: "Full-Stack Web App",
    tagline: "Aggregating UK property listings in one place.",
    problem: "Finding rental properties in London required manually checking multiple portals — OpenRent, OnTheMarket, RightRent and others — every day. No single tool aggregated them reliably.",
    goal: "Build a fast, reliable property search platform that aggregates listings across multiple UK portals with live results and map integration.",
    solution: "A full-stack application with a React frontend and FastAPI backend. The backend runs live scraping jobs across multiple portals, streaming results back to the UI in real-time using server-sent events. Property locations are geocoded and displayed on an interactive Google Maps interface.",
    architecture: ["React (Frontend)", "FastAPI (Backend API)", "Selenium + BeautifulSoup (Scrapers)", "PostgreSQL (Storage)", "Docker (Containerisation)", "Render (Deployment)"],
    tags: ["React", "FastAPI", "Python", "Docker", "Render", "Google Maps API"],
    challenges: "Building reliable scrapers across portals that actively resist automated access — handling dynamic JavaScript rendering, rotating user agents, and maintaining uptime when target sites change their layouts.",
    results: "A fully deployed, working application at maison-scanner.com used to find rental properties across multiple London portals from a single search.",
    improvements: "Add email alerts for new matching listings, improve scraper resilience with proxy rotation, and expand coverage to more portals.",
    link: "https://maison-scanner.com",
    linkLabel: "maison-scanner.com",
  },
  {
    title: "AlliedOffsets ETL Platform",
    category: "Data Engineering",
    tagline: "Scraping 15+ carbon registries at scale.",
    problem: "Carbon market analysts needed up-to-date data from 15+ global registries — each with different structures, authentication, and anti-bot protections. Maintaining this manually was not sustainable.",
    goal: "Build a reliable, automated ETL platform that scrapes, transforms and loads carbon credit data into a central database daily.",
    solution: "A modular Python ETL framework where each registry has a dedicated scraper module. Jobs run on a schedule via AWS, with robust error handling, retry logic and alerting. Data is cleaned, normalised and loaded into PostgreSQL via SQLAlchemy ORM models.",
    architecture: ["Python (Core ETL)", "Selenium + Requests (Scrapers)", "SQLAlchemy (ORM)", "PostgreSQL (Database)", "AWS EC2 + S3 (Infra)", "Alerting + Monitoring"],
    tags: ["Python", "Selenium", "SQLAlchemy", "PostgreSQL", "AWS", "ETL"],
    challenges: "Maintaining scrapers against constantly changing registry websites without breaking the production pipeline. Implementing graceful degradation so one failing scraper doesn't block the entire job.",
    results: "A production ETL system processing daily data from 15+ registries, feeding the core AlliedOffsets product used by analysts across the carbon markets industry.",
    improvements: "Move to a more declarative scraper config format, add data quality checks at the pipeline level, and explore LLM-based extraction for unstructured document parsing.",
    link: null,
  },
  {
    title: "RavenAI — Internal AI Assistant",
    category: "AI Tooling",
    tagline: "Natural language queries over internal meeting data.",
    problem: "The team used Fathom to record and transcribe meetings, but extracting insights — like 'how many client calls did we have this week?' — required manually digging through transcripts.",
    goal: "Build an AI-powered Slack bot that could answer natural-language questions about meeting data, statistics, and summaries using the Fathom API.",
    solution: "A Claude-powered Slack bot backed by a custom MCP (Model Context Protocol) server built on top of the Fathom API. The MCP server exposes time-aware function tools that the model can call to retrieve accurate statistics — handling ambiguous queries like 'last week' or 'yesterday' intelligently.",
    architecture: ["Claude API (LLM)", "MCP Server (Custom)", "Fathom API (Data source)", "Slack Bot API (Interface)", "Python (Backend)"],
    tags: ["Python", "Claude API", "MCP", "Slack", "FastAPI"],
    challenges: "Making the model reliably interpret time-relative queries and call the right tools with the right parameters. Getting MCP tool definitions right so Claude calls them correctly without hallucinating results.",
    results: "An internal tool used by the AlliedOffsets team to query meeting data conversationally, saving hours of manual transcript review per week.",
    improvements: "Extend to other internal data sources, add memory across conversations, and surface weekly digests automatically.",
    link: "https://github.com/ghostbustersrock",
    linkLabel: "GitHub",
  },
  {
    title: "iRecycle",
    category: "iOS Application",
    tagline: "Barcode scanning for intelligent recycling guidance.",
    problem: "Most people don't know how to recycle product packaging correctly — different materials, different councils, different rules. The information exists but isn't accessible at the point of disposal.",
    goal: "Build an iOS app that scans a product's barcode and returns clear, actionable recycling guidance for the product and its components.",
    solution: "A native iOS app built in Swift that uses the device camera to scan barcodes, looks up product information, and returns per-component recycling guidance. Designed to be fast, intuitive and work offline for previously scanned products.",
    architecture: ["Swift (iOS Native)", "AVFoundation (Camera/Barcode)", "Product API (Lookup)", "Core Data (Local cache)"],
    tags: ["Swift", "iOS", "AVFoundation", "Core Data"],
    challenges: "Handling the enormous variability in product barcode databases and building a UI that communicated complex recycling rules clearly enough for any user to act on immediately.",
    results: "A fully functional iOS application submitted as a first-class final-year project at Queen Mary University of London.",
    improvements: "Expand the product database coverage, add community-sourced recycling tips, and integrate local council recycling rules by postcode.",
    link: null,
  },
];

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="bg-[#0d1117] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs font-mono text-blue uppercase tracking-widest mb-1">{project.category}</p>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-[#8b95a1] mt-1">{project.tagline}</p>
            </div>
            <button onClick={onClose} className="text-[#8b95a1] hover:text-white ml-4 flex-none"><X size={20} /></button>
          </div>

          <div className="space-y-6">
            {[
              { label: "Problem", content: project.problem },
              { label: "Goal", content: project.goal },
              { label: "Solution", content: project.solution },
            ].map(({ label, content }) => (
              <div key={label}>
                <p className="text-xs font-mono text-[#8b95a1] uppercase mb-2">{label}</p>
                <p className="text-sm text-[#8b95a1] leading-relaxed">{content}</p>
              </div>
            ))}

            <div>
              <p className="text-xs font-mono text-[#8b95a1] uppercase mb-3">Architecture</p>
              <div className="flex flex-col gap-1.5">
                {project.architecture.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#8b95a1]">
                    <ChevronRight size={13} className="text-blue flex-none" />
                    {item}
                    {i < project.architecture.length - 1 && <div className="w-px h-3 bg-white/10 ml-1" />}
                  </div>
                ))}
              </div>
            </div>

            {[
              { label: "Challenges", content: project.challenges },
              { label: "Results", content: project.results },
              { label: "What I'd Improve", content: project.improvements },
            ].map(({ label, content }) => (
              <div key={label}>
                <p className="text-xs font-mono text-[#8b95a1] uppercase mb-2">{label}</p>
                <p className="text-sm text-[#8b95a1] leading-relaxed">{content}</p>
              </div>
            ))}

            <div>
              <p className="text-xs font-mono text-[#8b95a1] uppercase mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue/10 text-blue border border-blue/20">{tag}</span>
                ))}
              </div>
            </div>

            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue hover:underline">
                {project.linkLabel} <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-xs font-mono text-blue uppercase tracking-widest mb-4">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Featured Projects</h2>
          <p className="text-[#8b95a1] max-w-lg">Click any project for a full case study — problem, architecture, challenges and results.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-6 cursor-pointer hover:border-white/15 hover:-translate-y-1 transition-all duration-200 group"
              onClick={() => setSelected(project)}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-blue uppercase tracking-wide">{project.category}</span>
                <ArrowUpRight size={16} className="text-[#8b95a1] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-[#8b95a1] leading-relaxed mb-5">{project.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-[#8b95a1]">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}