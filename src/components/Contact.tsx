import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    display: "ayushkapse13@gmail.com",
    href: "mailto:ayushkapse13@gmail.com",
    desc: "Best for detailed conversations",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    border: "hover:border-violet-500/30",
    pill: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    display: "ayush-kapse-2468a3221",
    href: "https://www.linkedin.com/in/ayush-kapse-2468a3221",
    desc: "Connect professionally",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
    border: "hover:border-sky-500/30",
    pill: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    display: "github.com/Value089",
    href: "https://github.com/Value089",
    desc: "See what I'm building",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    border: "hover:border-rose-500/30",
    pill: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  },
];

export function Contact() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="contact" className="py-24 bg-card/20" ref={ref}>
      <div className="section-container max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Feel free to reach out if you'd like to collaborate, discuss AI products,
            or talk about technology.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {links.map(({ icon: Icon, label, display, href, desc, iconBg, iconColor, border, pill }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
              className={`group relative flex flex-col items-center text-center p-7 rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 ${border} hover:shadow-xl hover:shadow-black/20`}
            >
              {/* Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={15} className="text-muted-foreground" />
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-200`}>
                <Icon size={20} className={iconColor} />
              </div>

              {/* Label pill */}
              <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${pill} mb-3`}>
                {label}
              </span>

              {/* Display value */}
              <p className="text-sm font-medium text-foreground break-all leading-snug mb-2">
                {display}
              </p>

              {/* Desc */}
              <p className="text-xs text-muted-foreground">{desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center text-muted-foreground/50 text-xs mt-10"
        >
          Usually responds within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
