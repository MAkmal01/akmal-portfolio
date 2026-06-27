import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Layers, Server, Wrench, Coffee, Brain } from "lucide-react";
import profilePhoto from "../Image/profile.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

/* ---------- Typewriter tagline (the "mazy" / fun bit) ---------- */
const ROLES = ["MERN Stack Developer", "Java Developer", "AI/ML Enthusiast"];

function Typewriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIndex];
    const speed = deleting ? 35 : 55;
    const pause = deleting ? 400 : 1500;

    if (!deleting && text === full) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      return;
    }
    const t = setTimeout(() => {
      setText(full.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>
      {text}
      <span className="blink-cursor" style={{ height: "1em", transform: "translateY(3px)" }} />
    </span>
  );
}

/* ---------- "About me, as code" card ---------- */
function CodeLine({ n, children }) {
  return (
    <div className="flex">
      <span className="select-none w-7 text-right pr-3 shrink-0" style={{ color: "var(--text-on-dark-faint)" }}>
        {n}
      </span>
      <span className="whitespace-pre">{children}</span>
    </div>
  );
}

function IntroCodeCard() {
  const key = (t) => <span style={{ color: "var(--tok-frontend)" }}>{t}</span>;
  const str = (t) => <span style={{ color: "var(--tok-backend)" }}>"{t}"</span>;
  const punct = (t) => <span style={{ color: "var(--text-on-dark-faint)" }}>{t}</span>;
  const kw = (t) => <span style={{ color: "var(--tok-data)" }}>{t}</span>;

  return (
    <div className="card overflow-hidden" style={{ background: "var(--bg-inset-dark)", borderColor: "transparent" }}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E5534B" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#D9A53D" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#3FA66F" }} />
        <span className="ml-2 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-on-dark-faint)" }}>
          intro.js
        </span>
      </div>
      <div className="p-5 text-[13px] leading-7 overflow-x-auto" style={{ fontFamily: "var(--font-mono)", color: "var(--text-on-dark)" }}>
        <CodeLine n={1}>{kw("const")} {key("akmal")} {punct("=")} {punct("{")}</CodeLine>
        <CodeLine n={2}>{"  "}{key("role")}{punct(":")} {str("Software Engineer")}{punct(",")}</CodeLine>
        <CodeLine n={3}>{"  "}{key("grad")}{punct(":")} {str("BS Software Engineering")}{punct(",")}</CodeLine>
        <CodeLine n={4}>{"  "}{key("university")}{punct(":")} {str("PMAS-Arid Agriculture Univ.")}{punct(",")}</CodeLine>
        <CodeLine n={5}>
          {"  "}{key("stacks")}{punct(":")} {punct("[")}{str("MERN")}{punct(",")} {str("Java")}{punct(",")} {str("AI/ML")}{punct("]")}{punct(",")}
        </CodeLine>
        <CodeLine n={6}>{"  "}{key("location")}{punct(":")} {str("Rawalpindi, PK")}{punct(",")}</CodeLine>
        <CodeLine n={7}>
          {"  "}{key("status")}{punct(":")} {str("open_to_new_opportunities")}
        </CodeLine>
        <CodeLine n={8}>
          {punct("};")}
          <span className="blink-cursor" style={{ height: "1em", transform: "translateY(3px)" }} />
        </CodeLine>
      </div>
    </div>
  );
}

/* ---------- Profile photo with floating skill badges ---------- */
function FloatingBadge({ icon: Icon, label, color, className, delay }) {
  return (
    <motion.div
      className={`absolute card flex items-center gap-1.5 px-2.5 py-1.5 ${className}`}
      style={{ background: "var(--bg-paper)", borderColor: "var(--border-strong)" }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <Icon size={13} style={{ color }} />
      <span className="text-xs font-mono" style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
        {label}
      </span>
    </motion.div>
  );
}

function ProfilePhoto() {
  return (
    <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto">
      <div
        className="w-full h-full rounded-full overflow-hidden"
        style={{
          border: "2px solid var(--accent)",
          boxShadow: "0 0 70px var(--accent-soft)",
        }}
      >
        <img src={profilePhoto} alt="Akmal" className="w-full h-full object-cover" />
      </div>

      <FloatingBadge icon={Code2} label="MERN" color="var(--tok-frontend)" className="-top-2 -left-4 md:-left-8" delay={0} />
      <FloatingBadge icon={Coffee} label="Java" color="var(--tok-data)" className="top-1/3 -right-6 md:-right-10" delay={0.6} />
      <FloatingBadge icon={Brain} label="AI/ML" color="var(--tok-tools)" className="-bottom-2 left-2 md:left-0" delay={1.2} />
    </div>
  );
}

const skillGroups = [
  {
    title: "Languages",
    color: "var(--tok-frontend)",
    icon: Code2,
    items: ["Java", "JavaScript", "Python", "C++", "SQL"],
  },
  {
    title: "Frontend",
    color: "var(--tok-tools)",
    icon: Layers,
    items: ["React", "Angular", "Ionic", "HTML5 / CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "var(--tok-backend)",
    icon: Server,
    items: ["Node.js", "Express", "ASP.NET", "REST APIs"],
  },
  {
    title: "Tools & Data",
    color: "var(--tok-data)",
    icon: Wrench,
    items: ["Git", "MongoDB", "MySQL", "SQL Server", "OOP & DSA", "AWS basics"],
  },
];

function Home() {
  return (
    <div>
      {/* ---------- HERO ---------- */}
      <section className="section pt-14 md:pt-20 pb-10 md:pb-14">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 md:gap-10 items-center">
          <div>
            <h1
              className="font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5.5vw, 3.6rem)", lineHeight: 1.05, color: "var(--text-primary)" }}
            >
              Hi, I'm <span style={{ color: "var(--accent)" }}>Akmal</span>.
            </h1>
            <p className="mt-3 text-lg md:text-xl min-h-[1.75rem]">
              <Typewriter />
            </p>
            <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)", maxWidth: "34rem" }}>
              A Software Engineering graduate building with the{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>MERN stack</span> and{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Java</span>, with a growing interest in{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>AI/ML</span>. Looking for new
              opportunities where I can learn fast and contribute from day one.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn-primary">
                View my work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Get in touch
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <span className="status-dot" />
              Open to new opportunities
            </div>
          </div>

          <motion.div {...fadeUp}>
            <ProfilePhoto />
          </motion.div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <motion.section className="section py-8 md:py-10" {...fadeUp}>
        <div className="card p-7 md:p-10">
          <h2 className="font-bold mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--text-primary)" }}>
            Who I am
          </h2>
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I recently graduated with a BS in Software Engineering from PMAS-Arid Agriculture University,
                Rawalpindi. Through my coursework and final year project I've worked across the full stack —
                from Angular and Ionic on the frontend to ASP.NET, SQL Server and AWS on the backend — and I'm
                equally comfortable in Java and the MERN stack. I'm a fresher with no formal industry experience
                yet, which is exactly why I'm looking for new opportunities: a place to apply what I've built on
                my own, and learn the rest from people doing it for real.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Fast learner", "Detail-oriented", "Team player"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full font-mono"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <IntroCodeCard />
          </div>
        </div>
      </motion.section>

      {/* ---------- SKILLS ---------- */}
      <section className="section py-8 md:py-10">
        <h2 className="font-bold mb-8" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--text-primary)" }}>
          What I work with
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {skillGroups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                className="card p-5"
                {...fadeUp}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${g.color}1A` }}
                  >
                    <Icon size={16} style={{ color: g.color }} />
                  </span>
                  <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>
                    {g.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md font-mono border"
                      style={{ color: "var(--text-secondary)", borderColor: "var(--border)", fontFamily: "var(--font-mono)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <motion.section className="section py-8 md:py-10 pb-20 md:pb-28" {...fadeUp}>
        <div
          className="card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ background: "var(--bg-inset-dark)", borderColor: "transparent" }}
        >
          <div>
            <h3 className="font-bold text-xl md:text-2xl" style={{ fontFamily: "var(--font-display)", color: "var(--text-on-dark)" }}>
              Want to see what I've actually built?
            </h3>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 shrink-0 font-semibold px-5 py-3 rounded-xl"
            style={{ background: "var(--accent)", color: "white" }}
          >
            See my projects <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
