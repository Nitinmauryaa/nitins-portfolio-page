import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Cpu, Brain, Blocks, BarChart3, GraduationCap, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Uber Ride Cancellation Prediction",
    description:
      "Analyzed ride request data to identify cancellation patterns. Built a predictive model using Random Forest and XGBoost to improve operational efficiency.",
    tech: ["Python", "XGBoost", "Random Forest", "Pandas"],
    github: "https://github.com/Nitinmauryaa/Uber-ride-cancellation-model-using-xgboost",
    icon: BarChart3,
  },
  {
    title: "Customer Churn Prediction (ANN)",
    description:
      "Built an Artificial Neural Network to predict bank customers leaving credit card services. Handled preprocessing, feature scaling, and model evaluation.",
    tech: ["Python", "ANN", "Deep Learning", "TensorFlow"],
    github: "https://github.com/Nitinmauryaa",
    icon: Brain,
  },
  {
    title: "MNIST Digit Classification",
    description:
      "Implemented a multi-layer neural network using Keras for handwritten digit classification on the MNIST dataset.",
    tech: ["Keras", "Neural Networks", "Python"],
    github: "https://github.com/Nitinmauryaa",
    icon: Cpu,
  },
  {
    title: "Blockchain Journey",
    description:
      "Repository documenting blockchain fundamentals, including implementation of cryptographic principles and consensus mechanisms.",
    tech: ["Cryptography", "Consensus", "Blockchain"],
    github: "https://github.com/Nitinmauryaa",
    icon: Blocks,
  },
  {
    title: "GRE Admission Prediction",
    description:
      "Predictive system using ML regression techniques to estimate graduate admission probability based on academic parameters.",
    tech: ["Machine Learning", "Regression", "Python"],
    github: "https://github.com/Nitinmauryaa",
    icon: GraduationCap,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-mono text-primary mb-3 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group glass-card rounded-2xl p-6 flex flex-col hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon size={20} className="text-primary" />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>

              <h3 className="text-lg font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
