import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FolderOpen, ArrowDown } from "lucide-react";

/* ─── Particle / AI-node canvas ─── */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COUNT = 60;
    const LINK_DIST = 130;
    const PRIMARY = "139, 92, 246"; // purple-ish matching --primary

    let W = 0;
    let H = 0;
    let particles: Particle[] = [];
    let raf = 0;

    function resize() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    }

    function init() {
      resize();
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.8,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.18;
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(${PRIMARY}, ${alpha})`;
            ctx!.lineWidth = 0.8;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${PRIMARY}, ${p.opacity})`;
        ctx!.fill();
      }
    }

    function update() {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
    }

    function loop() {
      update();
      draw();
      raf = requestAnimationFrame(loop);
    }

    init();
    loop();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas!);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const staggerButtons = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } },
};

const buttonItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ─── Buttons config ─── */
const buttons = [
  {
    label: "View Projects",
    icon: FolderOpen,
    type: "primary" as const,
    href: "#projects",
    internal: true,
  },
  {
    label: "GitHub",
    icon: Github,
    type: "outline" as const,
    href: "https://github.com/Value089",
    internal: false,
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    type: "outline" as const,
    href: "https://www.linkedin.com/in/ayush-kapse-2468a3221",
    internal: false,
  },
  {
    label: "Contact",
    icon: Mail,
    type: "ghost" as const,
    href: "#contact",
    internal: true,
  },
];

const typeClass: Record<"primary" | "outline" | "ghost", string> = {
  primary:
    "bg-primary text-primary-foreground glow-primary hover:opacity-90",
  outline:
    "border border-border text-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary",
  ghost:
    "border border-border/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-accent",
};

/* ─── Role badge cycling text ─── */
const roles = [
  "Computer Engineering Student",
  "Aspiring Product Manager",
  "AI Builder",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Particle background ── */}
      <ParticleCanvas />

      {/* ── Gradient blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-3xl" />
        <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full bg-chart-2/[0.07] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">

        {/* Status pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 leading-[1.05]"
        >
          Ayush{" "}
          <span className="gradient-text">Kapse</span>
        </motion.h1>

        {/* Role line */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.22}
          className="text-base sm:text-lg font-medium text-muted-foreground mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
        >
          {roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              <span className="text-foreground/80">{role}</span>
              {i < roles.length - 1 && (
                <span className="text-primary/50 select-none">|</span>
              )}
            </span>
          ))}
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.34}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build{" "}
          <span className="text-foreground font-medium">AI-driven products</span>{" "}
          that solve real-world problems by combining{" "}
          <span className="text-foreground font-medium">machine learning</span>{" "}
          with{" "}
          <span className="text-foreground font-medium">product thinking</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={staggerButtons}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {buttons.map(({ label, icon: Icon, type, href, internal }) => (
            <motion.a
              key={label}
              variants={buttonItem}
              href={href}
              onClick={
                internal
                  ? (e) => {
                      e.preventDefault();
                      document
                        .querySelector(href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  : undefined
              }
              target={!internal ? "_blank" : undefined}
              rel={!internal ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${typeClass[type]}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <Icon size={15} />
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* Floating AI node illustration hint */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="mt-14 flex justify-center gap-3 opacity-40"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.4,
                delay: i * 0.22,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
