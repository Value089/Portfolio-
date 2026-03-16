import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Code2, Lightbulb, Target } from "lucide-react";

const traits = [
  {
    icon: Code2,
    title: "Builder",
    desc: "I turn ideas into working software. From full-stack apps to AI prototypes, I ship fast and iterate faster.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "I break down complex problems into clear, actionable steps, always keeping the user's experience at the center.",
  },
  {
    icon: Target,
    title: "Product Thinker",
    desc: "I think beyond features — about retention, growth loops, and the \"why\" behind every decision.",
  },
];

export function About() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Hey! I'm Ayush — a Computer Engineering student with a passion for building products
            that solve real problems. I sit at the crossroads of engineering, design, and business,
            which makes me think differently about what we build and why.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm currently studying Computer Engineering and simultaneously exploring the world of
              Product Management and AI. I love building things — whether it's a web app, an AI
              pipeline, or a product strategy doc.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My goal is to become a PM who can deeply understand the technical side while keeping
              users at the center of every decision. I believe the best products come from people
              who understand both the code and the customer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm dissecting products I love, writing about product strategy,
              or exploring how AI can change the way we work and live.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Product Strategy", "AI / ML", "React", "Full-Stack", "User Research", "Systems Thinking"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm rounded-full border border-primary/30 bg-primary/10 text-primary font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-primary/20 via-card to-chart-2/10 border border-border flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5" />
              <div className="relative z-10 text-center p-8">
                <div className="text-7xl font-black gradient-text mb-3">AK</div>
                <div className="text-muted-foreground text-sm">Ayush Kapse</div>
                <div className="text-xs text-muted-foreground/60 mt-1">CE Student · PM Aspirant · AI Builder</div>
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary/10 blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-chart-2/10 blur-xl" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {traits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="p-6 rounded-xl card-glass hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
