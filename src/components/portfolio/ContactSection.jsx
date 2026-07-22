import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Missing information",
        description: "Please fill in your name, email and message.",
        variant: "destructive",
      });
      return;
    }

    if (!EMAIL_PATTERN.test(form.email)) {
      toast({
        title: "Invalid email address",
        description: "Please double-check your email and try again.",
        variant: "destructive",
      });
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      toast({
        title: "Contact form isn't configured yet",
        description: "Missing VITE_WEB3FORMS_ACCESS_KEY.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New portfolio message from ${form.name}`,
          from_name: "Luca Santarelli Website",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setForm({ name: "", email: "", message: "" });
        toast({ title: "Message sent", description: "Thanks — I'll get back to you shortly.", variant: "success" });
      } else {
        toast({ title: "Something went wrong", description: result.message || "Please try again or email me directly.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or email me directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const contacts = [
    { icon: Mail, label: "luca.santarelli@hotmail.it", href: "mailto:luca.santarelli@hotmail.it" },
    { icon: Linkedin, label: "Luca Santarelli", href: "https://www.linkedin.com/in/luca-s-a68182118/" },
    { icon: Github, label: "ghostbustersrock", href: "https://github.com/ghostbustersrock" },
    { icon: MapPin, label: "EU or London, United Kingdom", href: null },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-mono text-blue uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-[#8b95a1] leading-relaxed mb-8 max-w-md">
              Open to new roles, freelance projects and technical collaborations. The fastest way to reach me is by email.
            </p>

            <div className="space-y-3 mb-8">
              {contacts.map(({ icon: Icon, label, href }) => (
                href ? (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center border border-white/5 group-hover:border-blue/30 transition-colors">
                      <Icon size={17} className="text-[#8b95a1] group-hover:text-blue transition-colors" />
                    </div>
                    <span className="text-sm text-[#8b95a1] group-hover:text-white transition-colors">{label}</span>
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center border border-white/5">
                      <Icon size={17} className="text-[#8b95a1]" />
                    </div>
                    <span className="text-sm text-[#8b95a1]">{label}</span>
                  </div>
                )
              ))}
            </div>

            <div className="glass rounded-xl p-4 border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-[#8b95a1] uppercase mb-1">Availability</p>
                <p className="text-white font-medium text-sm flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to new roles & freelance
                </p>
              </div>
              <a href="/Luca_Santarelli_CV.pdf" download className="flex items-center gap-2 text-sm text-blue hover:underline">
                <Download size={14} /> CV
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-[#8b95a1] h-12 focus:border-blue/50" required />
              <Input type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-[#8b95a1] h-12 focus:border-blue/50" required />
              <Textarea placeholder="Your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-[#8b95a1] min-h-[140px] focus:border-blue/50" required />
              <Button type="submit" disabled={sending}
                className="w-full bg-blue hover:opacity-90 text-[#0a0f1e] font-semibold h-12 transition-opacity">
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}