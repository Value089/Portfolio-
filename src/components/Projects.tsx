import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Green Guard",
    subtitle: "Plant Identification System",
    description:
      "Green Guard is a community-driven platform that combines AI-based plant identification with social features. Users can identify plants from images, share plant posts, discover nearby plants through geolocation, and request plant adoption. The platform also enables users to follow others, chat, and explore plants on an interactive map to encourage collaborative plant care. \nInspired by the idea of a “LinkedIn for plants,” where communities collaborate to care for local greenery.",
    tags: ["Python", "TensorFlow", "OpenCV", "Flask", "CNN"],
    github: "https://github.com/Value089/Green-Guard-Complete.git",
    accent: "from-green-500/20 via-emerald-500/10 to-transparent",
    dot: "bg-green-400",
    border: "hover:border-green-500/30",
    iconColor: "text-green-400",
    tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    title: "AI Essay Grading System",
    subtitle: "Automated Essay Evaluation",
    description:
      "An NLP-based automated grading system that evaluates essays on parameters like grammar, coherence, vocabulary, and argument strength. Generates detailed feedback for students and educators.",
    tags: ["Python", "NLP", "scikit-learn", "NLTK", "Streamlit"],
    github: "https://github.com/Value089/Essay-Grading-System.git",
    accent: "from-violet-500/20 via-purple-500/10 to-transparent",
    dot: "bg-violet-400",
    border: "hover:border-violet-500/30",
    iconColor: "text-violet-400",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  {
    title: "Air Canvas",
    subtitle: "Gesture-Controlled Drawing",
    description:
      "A virtual drawing canvas controlled by hand gestures using computer vision. Users can draw, erase, and change colors in the air — no touch required. Built with real-time hand tracking.",
    tags: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    github: "https://github.com/Value089/Air_Canvas.git",
    accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
    dot: "bg-sky-400",
    border: "hover:border-sky-500/30",
    iconColor: "text-sky-400",
    tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  },
  {
    title: "Global Air Quality Analysis",
    subtitle: "Environmental Data Insights",
    description:
      "A comprehensive data analysis project examining global air quality trends across countries and cities. Features interactive visualizations of pollutant levels, AQI comparisons, and temporal patterns.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/Value089/Global-air-quality-analysis-.git",
    accent: "from-orange-500/20 via-amber-500/10 to-transparent",
    dot: "bg-orange-400",
    border: "hover:border-orange-500/30",
    iconColor: "text-orange-400",
    tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
];

export function Projects() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            A collection of projects where I applied AI, computer vision, and data science
            to solve real-world problems.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className={`group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-300 ${project.border} hover:shadow-xl hover:shadow-black/30`}
            >
              {/* Gradient wash on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
              />

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.accent} opacity-60`} />

              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <motion.div
                      className={`w-2.5 h-2.5 rounded-full ${project.dot}`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
                    />
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* GitHub button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-muted-foreground transition-all hover:border-current ${project.iconColor} hover:bg-current/10`}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={13} />
                    <span>GitHub</span>
                    <ExternalLink size={10} className="opacity-60" />
                  </motion.a>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md border ${project.tagColor} transition-all`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Value089"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
          >
            <Github size={15} />
            See all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
