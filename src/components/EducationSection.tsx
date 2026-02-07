import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    institution: "KIET Group of Institutions (AKTU)",
    degree: "Bachelor of Technology (B.Tech)",
    location: "Ghaziabad, India",
    period: "2024 – 2028",
    grade: "In Progress",
    current: true,
  },
  {
    institution: "Sri Sai Inter College",
    degree: "Class XII (Senior Secondary)",
    location: "Barabanki, UP",
    period: "2024",
    grade: "92.6%",
    current: false,
  },
  {
    institution: "St. Anthony's School",
    degree: "Class X (Secondary)",
    location: "Barabanki, UP",
    period: "2022",
    grade: "90.5%",
    current: false,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-mono text-primary mb-3 block">Background</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 ${
                    edu.current
                      ? "border-primary bg-primary/30 animate-pulse-glow"
                      : "border-muted-foreground/40 bg-background"
                  }`}
                />

                <div className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                    <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                      <GraduationCap size={18} className="text-primary" />
                      {edu.institution}
                    </h3>
                    {edu.current && (
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-primary" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-primary" />
                      {edu.location}
                    </span>
                    <span className="font-mono text-primary font-semibold">{edu.grade}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
