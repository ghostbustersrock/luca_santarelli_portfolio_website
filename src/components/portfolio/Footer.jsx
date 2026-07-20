import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[#8b95a1]">© {new Date().getFullYear()} Luca Santarelli · EU or London, UK</p>
        <div className="flex gap-6 text-sm">
          {[
            { label: "GitHub", href: "https://github.com/ghostbustersrock" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/luca-s-a68182118/" },
            { label: "Maison Scanner", href: "https://maison-scanner.com" },
            { label: "luca.santarelli@hotmail.it", href: "mailto:luca.santarelli@hotmail.it" },
          ].map(({ label, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer" className="text-[#8b95a1] hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}