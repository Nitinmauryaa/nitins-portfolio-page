import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Cpu, Brain, Blocks, BarChart3, GraduationCap } from "lucide-react";

const projects = [
  {
    title: "Uber Ride Cancellation Prediction",
    description:
      "Analyzed ride request data to identify cancellation patterns. Developed a predictive model using Random Forest and XGBoost to improve operational efficiency.",
    tech: ["Python", "XGBoost", "Random Forest", "Pandas"],
    github: "https://github.com/Nitinmauryaa/Uber-ride-cancellation-model-using-xgboost",
    icon: BarChart3,
  },
  {
    title: "Customer Churn Prediction (ANN)",
    description:
      "Built an Artificial Neural Network to predict the likelihood of bank customers leaving credit card services. Handled data preprocessing, feature scaling, and model evaluation.",
    tech: ["Python", "ANN", "Deep Learning", "TensorFlow"],
    github: "https://github.com/Nitinmauryaa",
    icon: Brain,
  },
  {
    title: "MNIST Digit Classification",
    description:
      "Implemented a multi-layer neural network using Keras for handwritten digit classification. Optimized the training process on the MNIST dataset.",
    tech: ["Keras", "Neural Networks", "Python"],
    github: "https://github.com/Nitinmauryaa",
    icon: Cpu,
  },
  {
    title: "Blockchain Journey & Implementation",
    description:
      "Maintaining a repository documenting blockchain fundamentals, including implementation of basic cryptographic principles and decentralized consensus mechanisms.",
    tech: ["Cryptography", "Consensus", "Blockchain"],
    github: "https://github.com/Nitinmauryaa",
    icon: Blocks,
  },
  {
    title: "GRE Admission Prediction",
    description:
      "Created a predictive system using ML regression techniques to estimate admission probability into graduate programs based on academic parameters.",
    tech: ["Machine Learning", "Regression", "Python"],
    github: "https://github.com/Nitinmauryaa",
    icon: GraduationCap,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group glass-card rounded-xl p-6 flex flex-col hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <project.icon size={28} className="text-primary" />
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
