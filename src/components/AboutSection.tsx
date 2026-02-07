import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Code, Brain, Palette, Terminal } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Competitive Programming",
    description: "260+ DSA problems solved across LeetCode, Codeforces, and CodeChef with a peak rating of 1569.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Built predictive models using XGBoost, Random Forest, and Neural Networks for real-world datasets.",
  },
  {
    icon: Terminal,
    title: "Front End Development",
    description: "Experience with HTML, CSS, JavaScript, React, and modern web technologies for building applications.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary mb-4 block">Introduce</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Hi, I'm <span className="text-primary">Nitin</span>
              <br />Kumar Maurya
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate software developer and competitive programmer pursuing my B.Tech at 
                KIET Group of Institutions, Ghaziabad. I love solving complex problems through 
                efficient algorithms and building intelligent systems.
              </p>
              <p>
                My journey spans across competitive programming, machine learning, and blockchain 
                technology. I actively participate in coding contests and hold{" "}
                <span className="text-foreground font-medium">Gold Badges</span> on HackerRank 
                in Problem Solving and C++ Programming.
              </p>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: MapPin, label: "Barabanki, UP, India" },
                { icon: GraduationCap, label: "B.Tech (2024-2028)" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon size={14} className="text-primary flex-shrink-0" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - highlight cards */}
          <div className="space-y-5">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.5 }}
                className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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

export default AboutSection;
