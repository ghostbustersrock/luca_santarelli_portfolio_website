import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", target: "about" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Contact", target: "contact" },
];

export default function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (target) => {
    setMobileOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-white/5" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-semibold text-white text-base tracking-tight">
            Luca Santarelli
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button key={link.target} onClick={() => handleNav(link.target)} className="text-sm text-[#8b95a1] hover:text-white transition-colors">
                {link.label}
              </button>
            ))}
            <button onClick={() => handleNav("contact")} className="text-sm font-medium px-4 py-2 rounded-lg bg-blue text-[#0a0f1e] hover:opacity-90 transition-opacity">
              Get in Touch
            </button>
          </nav>
          <button className="md:hidden p-2 -mr-2 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d1117] md:hidden pt-20 px-6 flex flex-col">
          {NAV_LINKS.map((link) => (
            <button key={link.target} onClick={() => handleNav(link.target)} className="text-left text-2xl font-semibold py-4 border-b border-white/10 text-white">
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}