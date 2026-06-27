import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const tabs = [
  { to: "/", label: "home.jsx" },
  { to: "/projects", label: "projects.jsx" },
  { to: "/contact", label: "contact.jsx" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ background: "rgba(11,14,20,0.8)", backdropFilter: "blur(10px)", borderColor: "var(--border)" }}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-strong)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-strong)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent)" }} />
          </span>
          <span
            className="font-semibold"
            style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--text-primary)" }}
          >
            akmal<span style={{ color: "var(--accent)" }}>.dev</span>
          </span>
        </NavLink>

        {/* Desktop tabs */}
        <nav className="hidden md:flex items-stretch h-16">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.to === "/"}
              className={({ isActive }) =>
                "flex items-center px-5 h-full text-sm font-mono border-x first:border-l-0 transition-colors"
              }
              style={({ isActive }) => ({
                fontFamily: "var(--font-mono)",
                color: isActive ? "var(--text-primary)" : "var(--text-faint)",
                borderColor: "var(--border)",
                background: isActive ? "var(--bg-paper)" : "transparent",
                borderTop: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                marginTop: "-1px",
              })}
            >
              {t.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1 ml-2">
          <a
            href="https://github.com/MAkmal01"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg transition-colors"
            style={{ color: "var(--text-faint)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-faint)")}
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/m-akmal-509985371/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg transition-colors"
            style={{ color: "var(--text-faint)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-faint)")}
          >
            <Linkedin size={18} />
          </a>
        </div>

        <a
          href="mailto:babuajmal55@gmail.com"
          className="hidden md:inline-flex btn-primary ml-3"
          style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem" }}
        >
          Get in touch
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ color: "var(--text-primary)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t flex flex-col" style={{ borderColor: "var(--border)", background: "var(--bg-paper)" }}>
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.to === "/"}
              onClick={() => setOpen(false)}
              className="px-5 py-3.5 text-sm border-b"
              style={({ isActive }) => ({
                fontFamily: "var(--font-mono)",
                color: isActive ? "var(--accent)" : "var(--text-secondary)",
                borderColor: "var(--border)",
              })}
            >
              {t.label}
            </NavLink>
          ))}
          <a
            href="mailto:babuajmal55@gmail.com"
            className="px-5 py-3.5 text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Get in touch →
          </a>
          <div className="flex gap-4 px-5 py-3.5">
            <a href="https://github.com/MAkmal01" target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)" }}>
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/m-akmal-509985371/" target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)" }}>
              <Linkedin size={18} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Nav;
