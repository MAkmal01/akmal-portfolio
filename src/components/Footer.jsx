import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer style={{ background: "var(--bg-inset-dark)" }}>
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-xs"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-on-dark-faint)" }}
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="status-dot" />
            <span style={{ color: "var(--text-on-dark)" }}>open_to_new_opportunities</span>
          </span>
          <span className="hidden sm:inline">Rawalpindi, PK</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/MAkmal01" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Github size={14} /> <span className="hidden sm:inline">github</span>
          </a>
          <a href="https://www.linkedin.com/in/m-akmal-509985371/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Linkedin size={14} /> <span className="hidden sm:inline">linkedin</span>
          </a>
          <a href="mailto:babuajmal55@gmail.com" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Mail size={14} /> <span className="hidden sm:inline">email</span>
          </a>
          <span>© 2026 Muhammad Akmal</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
