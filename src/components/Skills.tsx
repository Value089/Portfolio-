import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Code2, Lightbulb, Heart } from "lucide-react";

const categories = [
  {
    label: "Software Skills",
    icon: Code2,
    color: "violet",
    iconClass: "text-violet-400",
    iconBg: "bg-violet-500/10",
    pillBase: "border-violet-500/25 bg-violet-500/10 text-violet-300 hover:border-violet-400/50 hover:bg-violet-500/20 hover:text-violet-200",
    glow: "group-hover:shadow-violet-500/10",
    headerBorder: "border-violet-500/20",
    skills: [
      "Python",
      "Machine Learning",
      "OpenCV",
      "NLP",
      "Flask",
      "Data Analysis",
      "Git",
    ],
  },
  {
    label: "Product Skills",
    icon: Lightbulb,
    color: "sky",
    iconClass: "text-sky-400",
    iconBg: "bg-sky-500/10",
    pillBase: "border-sky-500/25 bg-sky-500/10 text-sky-300 hover:border-sky-400/50 hover:bg-sky-500/20 hover:text-sky-200",
    glow: "group-hover:shadow-sky-500/10",
    headerBorder: "border-sky-500/20",
    skills: [
      "Product Thinking",
      "User Research",
      "Feature Design",
      "Product Strategy",
      "Data-driven decisions",
    ],
  },
  {
    label: "Soft Skills",
    icon: Heart,
    color: "rose",
    iconClass: "text-rose-400",
    iconBg: "bg-rose-500/10",
    pillBase: "border-rose-500/25 bg-rose-500/10 text-rose-300 hover:border-rose-400/50 hover:bg-rose-500/20 hover:text-rose-200",
    glow: "group-hover:shadow-rose-500/10",
    headerBorder: "border-rose-500/20",
    skills: [
      "Communication",
      "Analytical Thinking",
      "Collaboration",
      "Adaptability",
      "Leadership",
    ],
  },
];

export function Skills() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            A blend of technical depth, product intuition, and the soft skills
            that make collaboration effective.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: ci * 0.12 }}
              className={`group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-opacity-60 hover:shadow-xl ${cat.glow}`}
            >
              {/* Card header */}
              <div className={`flex items-center gap-3 mb-6 pb-5 border-b ${cat.headerBorder}`}>
                <div className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <cat.icon size={18} className={cat.iconClass} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{cat.label}</h3>
              </div>

              {/* Floating pills */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.35,
                      delay: ci * 0.12 + si * 0.06 + 0.2,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.07,
                      transition: { duration: 0.18, ease: "easeOut" },
                    }}
                    className={`cursor-default px-3.5 py-1.5 text-sm font-medium rounded-full border transition-all duration-200 ${cat.pillBase}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Subtle count badge */}
              <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-end">
                <span className="text-xs text-muted-foreground/50 font-mono">
                  {cat.skills.length} skills
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
