import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDown, Code2, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/Nitinmauryaa", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nitin-maurya-53b347328/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/nitinmauryaa_", label: "X (Twitter)" },
  { icon: Code2, href: "https://codolio.com/profile/Nitinmauryaa", label: "Codolio" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pt-20">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/50 box-glow">
              <img
                src={avatar}
                alt="Nitin Kumar Maurya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-mono font-bold text-primary-foreground">✓</span>
            </div>
          </div>
        </motion.div>

        {/* Terminal greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-4"
        >
          <span className="font-mono text-sm text-primary px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
            ~/portfolio $ whoami
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="text-foreground">Nitin </span>
          <span className="gradient-text">Maurya</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl">
            B.Tech Student • ML Enthusiast • Competitive Programmer
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { value: "260+", label: "Problems Solved" },
            { value: "1569", label: "LeetCode Rating" },
            { value: "100", label: "Day Streak" },
            { value: "14", label: "Contests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:box-glow transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all duration-300 box-glow"
          >
            <FileText size={16} />
            Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="animate-float text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
