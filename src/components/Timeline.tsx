import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { GraduationCap, Briefcase, Star } from "lucide-react";

const events = [
  {
    year: "2025",
    icon: Briefcase,
    title: "Web Development Intern",
    place: "Internship",
    desc: "Worked on real-world web applications and contributed to feature development while collaborating with developers. This experience helped me understand how user requirements translate into technical implementations and how production applications are built and deployed.",
    type: "work",

  },
  {
    year: "2023",
    icon: Star,
    title: "AI Builder Phase Begins",
    place: "Self-directed",
    desc: "Started building AI-powered applications — integrating machine learning models into real products, experimenting with prompt engineering, and building end-to-end AI pipelines.",
    type: "milestone",
  },
  {
    year: "2022",
    icon: GraduationCap,
    title: "Started Computer Engineering",
    place: "Vidyalankar Institute of Technology",
    desc: "Began pursuing a Bachelor's degree in Computer Engineering with a focus on software systems, algorithms, and applied AI while actively building software projects alongside academics.",
    type: "education",
  },
  {
    year: "2022",
    icon: GraduationCap,
    title: "Higher Secondary (12th)",
    place: "",
    desc: "Completed 12th grade with a focus on Physics, Chemistry, and Mathematics while developing strong analytical thinking and problem-solving skills.",
    type: "education",
  },
  {
    year: "2020",
    icon: GraduationCap,
    title: "Secondary School (10th)",
    place: "",
    desc: "Completed secondary school education and developed an early interest in technology and computing.",
    type: "education",
  },
];

const typeStyles: Record<string, string> = {
  education: "bg-primary/10 text-primary border-primary/20",
  milestone: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  work: "bg-chart-2/10 text-chart-2 border-chart-2/20",
};

const typeIconBg: Record<string, string> = {
  education: "bg-primary/15",
  milestone: "bg-chart-3/15",
  work: "bg-chart-2/15",
};

const typeIconColor: Record<string, string> = {
  education: "text-primary",
  milestone: "text-chart-3",
  work: "text-chart-2",
};

export function Timeline() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="timeline" className="py-24 bg-card/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Journey</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A look at the key milestones and experiences that have shaped who I am today.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0;
              const Icon = event.icon;

              return (
                <motion.div
                  key={event.title + event.year}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } md:gap-0`}
                >
                  {/* Mobile & Desktop: icon on the line */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center ${typeStyles[event.type]} md:absolute md:left-1/2 md:-translate-x-1/2`}
                    >
                      <Icon size={20} className={typeIconColor[event.type]} />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pb-2 md:w-[calc(50%-3rem)] ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
                      }`}
                  >
                    <div
                      className={`p-5 rounded-xl card-glass hover:border-primary/30 transition-all ${isLeft ? "md:ml-0" : "md:mr-0"
                        }`}
                    >
                      <div
                        className={`flex items-center gap-2 mb-2 ${isLeft ? "md:flex-row-reverse" : "flex-row"
                          }`}
                      >
                        <span className="text-xs text-muted-foreground font-mono">{event.year}</span>
                        <span
                          className={`px-2 py-0.5 text-xs rounded-full border ${typeStyles[event.type]}`}
                        >
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold mb-1">{event.title}</h3>
                      <p className="text-xs text-primary font-medium mb-2">{event.place}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
