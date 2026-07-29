import { motion } from "framer-motion";
import { Github, ScanLine, MessageSquareText, Plane, CalendarDays, Dumbbell, LayoutDashboard, UserPlus, Users2, Building2, Wallet, Search } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const projects = [
  {
    badge: "Final Year Project",
    badgeColor: "#F2A94E",
    title: "AI-Powered Tourism & Travel Portal",
    description:
      "A full-stack travel platform built as my final year project. I designed the REST API layer and client-server architecture end to end — the same request/response and auth patterns I now build with Express and MongoDB — while two ML-driven features handled the harder parts: an OCR pipeline that verifies travel documents automatically, and an NLP chatbot that answers travel questions and assists with planning.",
    features: [
      { icon: Plane, text: "End-to-end trip planning workflow" },
      { icon: ScanLine, text: "OCR-based automated document verification" },
      { icon: MessageSquareText, text: "NLP chatbot for travel assistance" },
      { icon: CalendarDays, text: "Cloud-hosted backend on AWS" },
    ],
    tech: ["Angular.js", "Ionic", "ASP.NET", "SQL Server", "AWS", "OCR", "NLP Chatbot"],
    source: "https://github.com/MAkmal01",
    sourceNote: "↳ links to your GitHub profile — swap for the exact repo once it's pushed",
  },
  {
    badge: "5th Semester Project",
    badgeColor: "#34D399",
    title: "Gym Management System",
    description:
      "A gym management interface built in my 5th semester with plain HTML, CSS and JavaScript — the vanilla-JS foundation (DOM manipulation, state handling, event-driven UI) that I later carried into component-based React development. Covers member sign-up, membership plans, and trainer/schedule info end to end on the frontend.",
    features: [
      { icon: UserPlus, text: "Member registration & profiles" },
      { icon: Dumbbell, text: "Membership plan selection" },
      { icon: CalendarDays, text: "Trainer & class schedule listing" },
      { icon: LayoutDashboard, text: "Responsive layout, no frameworks" },
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    source: "https://github.com/MAkmal01",
    sourceNote: "↳ links to your GitHub profile — swap for the exact repo once it's pushed",
  },
  {
    badge: "Academic Project",
    badgeColor: "#6E8CFF",
    title: "Employee Management System",
    description:
      "A CRUD application for managing employee records — add, update, search and remove staff, track departments, and keep basic attendance/salary info. Building the data layer and query logic here is where I picked up the relational-modeling instincts I now apply when designing MongoDB schemas and Mongoose models for MERN projects.",
    features: [
      { icon: Users2, text: "Employee records (add / update / delete)" },
      { icon: Building2, text: "Department & role management" },
      { icon: Wallet, text: "Basic attendance & salary tracking" },
      { icon: Search, text: "Search & filter employee records" },
    ],
    tech: ["Java", "JDBC", "MySQL"],
    source: "https://github.com/MAkmal01",
    sourceNote: "↳ links to your GitHub profile — swap for the exact repo, and tell me if the stack/features above need correcting",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="card overflow-hidden mb-6"
      {...fadeUp}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
    >
      <div className="grid md:grid-cols-[0.85fr_1.15fr]">
        {/* Visual side — abstract representation, not a fake screenshot */}
        <div className="p-8 flex flex-col justify-center gap-4" style={{ background: "var(--bg-inset-dark)" }}>
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-md self-start"
            style={{ fontFamily: "var(--font-mono)", color: project.badgeColor, background: `${project.badgeColor}26` }}
          >
            {project.badge}
          </span>
          <h3 className="font-bold text-xl md:text-2xl" style={{ fontFamily: "var(--font-display)", color: "white" }}>
            {project.title}
          </h3>
          <div className="space-y-3 mt-2">
            {project.features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.text} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-on-dark)" }}>
                  <Icon size={16} className="shrink-0 mt-0.5" style={{ color: "var(--tok-frontend)" }} />
                  <span>{f.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail side */}
        <div className="p-7 md:p-9">
          <p className="leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md font-mono border"
                style={{ color: "var(--text-secondary)", borderColor: "var(--border)", fontFamily: "var(--font-mono)" }}
              >
                {t}
              </span>
            ))}
          </div>

          <a href={project.source} target="_blank" rel="noreferrer" className="btn-ghost">
            <Github size={16} /> Source code
          </a>
          <p className="text-xs mt-2" style={{ color: "var(--text-faint)" }}>
            {project.sourceNote}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <div className="section py-14 md:py-20">
      <h1 className="font-bold mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.6rem)", color: "var(--text-primary)" }}>
        My Projects
      </h1>
      <p className="mb-10" style={{ color: "var(--text-secondary)", maxWidth: "36rem" }}>
        Real coursework projects — no filler, just what I've actually built.
      </p>

      {projects.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={i} />
      ))}
    </div>
  );
}

export default Projects;
