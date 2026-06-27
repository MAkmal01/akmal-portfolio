import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const CONTACT_EMAIL = "babuajmal55@gmail.com";

const infoRows = [
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Phone, label: "Phone / WhatsApp", value: "0340 0104206", href: "tel:+923400104206" },
  { icon: MapPin, label: "Location", value: "Rawalpindi, Pakistan", href: null },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="section py-14 md:py-20">
      <h1 className="font-bold mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.6rem)", color: "var(--text-primary)" }}>
        Let's talk
      </h1>
      <p className="mb-12" style={{ color: "var(--text-secondary)", maxWidth: "36rem" }}>
        I'm actively looking for new opportunities — happy to chat about a role, a project, or just software in
        general. Reach out however's easiest for you.
      </p>

      <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-10">
        {/* Info column */}
        <motion.div {...fadeUp}>
          <div className="space-y-5">
            {infoRows.map((row) => {
              const Icon = row.icon;
              const content = (
                <div className="flex items-start gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "var(--accent-soft)" }}
                  >
                    <Icon size={16} style={{ color: "var(--accent)" }} />
                  </span>
                  <div>
                    <p className="text-xs font-mono mb-0.5" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
                      {row.label}
                    </p>
                    <p className="font-medium" style={{ color: "var(--text-primary)" }}>
                      {row.value}
                    </p>
                  </div>
                </div>
              );
              return row.href ? (
                <a key={row.label} href={row.href} className="block hover:opacity-80 transition-opacity">
                  {content}
                </a>
              ) : (
                <div key={row.label}>{content}</div>
              );
            })}
          </div>

          <div className="flex gap-3 mt-8">
            <a href="https://github.com/MAkmal01" target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding: "0.6rem 1rem" }}>
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/m-akmal-509985371/" target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding: "0.6rem 1rem" }}>
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Form column */}
        <motion.form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-4" {...fadeUp}>
          <div>
            <label className="text-xs font-mono block mb-1.5" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
              name
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full px-3.5 py-2.5 rounded-lg border outline-none text-sm"
              style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "var(--bg-inset)" }}
            />
          </div>
          <div>
            <label className="text-xs font-mono block mb-1.5" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
              email
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full px-3.5 py-2.5 rounded-lg border outline-none text-sm"
              style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "var(--bg-inset)" }}
            />
          </div>
          <div>
            <label className="text-xs font-mono block mb-1.5" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
              message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the role or just say hi..."
              className="w-full px-3.5 py-2.5 rounded-lg border outline-none text-sm resize-none"
              style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "var(--bg-inset)" }}
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            Send message <Send size={15} />
          </button>
          <p className="text-xs text-center" style={{ color: "var(--text-faint)" }}>
            Opens your email app — no backend needed
          </p>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
