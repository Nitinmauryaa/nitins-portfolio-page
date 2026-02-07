import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "XGBoost", level: 80 },
      { name: "Random Forest", level: 85 },
      { name: "KNN", level: 75 },
      { name: "Neural Networks", level: 80 },
      { name: "Keras", level: 75 },
      { name: "Scikit-Learn", level: 80 },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Vue.js", level: 65 },
      { name: "Data Cleaning", level: 80 },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "DSA", level: 85 },
      { name: "Blockchain", level: 70 },
      { name: "Cryptography", level: 65 },
      { name: "Consensus Algorithms", level: 65 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIdx * 0.15, duration: 0.5 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="font-mono text-primary text-sm font-semibold mb-5 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: catIdx * 0.15 + skillIdx * 0.05 + 0.3,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, hsl(185 80% 50%), hsl(260 70% 60%))`,
                          }}
                        />
                      </div>
                    </div>
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

export default SkillsSection;
