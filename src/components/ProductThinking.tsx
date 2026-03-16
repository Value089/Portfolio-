import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { BookOpen, TrendingUp, Users, Zap } from "lucide-react";

const frameworks = [
  {
    icon: Users,
    title: "User-Centric",
    desc: "I believe every product decision starts with deep user empathy. Research, interviews, and feedback loops drive what gets built.",
  },
  {
    icon: TrendingUp,
    title: "Metrics-Driven",
    desc: "Define the right success metrics before building. Track leading indicators, not just lagging ones. Numbers tell a story.",
  },
  {
    icon: Zap,
    title: "Ruthless Prioritization",
    desc: "Not everything can be built. Using frameworks like RICE and MoSCoW to decide what to build and in what order.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "I document teardowns, PRDs, and product case studies. Learning from the best products makes me a better builder.",
  },
];


export function ProductThinking() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="product-thinking" className="py-24 bg-card/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Product Thinking</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How I Think About <span className="gradient-text">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Product Management is more than roadmaps — it's a mindset. Here's how I approach
            building, deciding, and shipping.
          </p>
        </motion.div>

        {/* Frameworks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {frameworks.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-5 rounded-xl card-glass hover:border-primary/30 transition-all group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-2">Product Thinking & Case Studies</h3>
          <p className="text-muted-foreground text-sm mb-3">
            I enjoy analyzing how successful products are designed and how user experience decisions influence usability and growth. This section will feature product breakdowns, feature ideas, and case studies of real-world platforms.
          </p>
          <p className="text-sm text-primary/80 font-medium italic">
            Case studies coming soon.
          </p>
        </motion.div>


      </div>
    </section>
  );
}
