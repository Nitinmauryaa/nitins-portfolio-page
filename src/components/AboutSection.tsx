import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Code, Brain } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Hi! I'm <span className="text-foreground font-medium">Nitin Kumar Maurya</span>, 
                a B.Tech student at KIET Group of Institutions, Ghaziabad. I'm passionate about 
                solving complex problems through code and building intelligent systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey spans across competitive programming, machine learning, and blockchain 
                technology. I've solved <span className="text-primary font-mono">260+</span> DSA 
                problems across platforms and maintain a strong rating of{" "}
                <span className="text-primary font-mono">1569</span> on LeetCode.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively participating in coding contests on LeetCode, CodeChef, and Codeforces, 
                and I hold <span className="text-foreground font-medium">Gold Badges</span> on 
                HackerRank in Problem Solving and C++ Programming.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, title: "Location", value: "Barabanki, UP, India" },
                { icon: GraduationCap, title: "Education", value: "B.Tech (2024-2028)" },
                { icon: Code, title: "Focus", value: "DSA & ML" },
                { icon: Brain, title: "Interests", value: "AI, Blockchain" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-4 hover:border-primary/30 transition-colors duration-300"
                >
                  <item.icon size={20} className="text-primary mb-2" />
                  <div className="text-xs text-muted-foreground mb-1">{item.title}</div>
                  <div className="text-sm font-medium text-foreground">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
