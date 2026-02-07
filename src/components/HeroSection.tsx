import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Code2, FileText, ArrowDown } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/nitinmauryaa_", label: "Twitter" },
  { icon: Github, href: "https://github.com/Nitinmauryaa", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nitin-maurya-53b347328/", label: "LinkedIn" },
  { icon: Code2, href: "https://codolio.com/profile/Nitinmauryaa", label: "Codolio" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 text-xs font-mono font-medium rounded-full border border-primary/40 text-primary bg-primary/5">
                Competitive Programmer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight"
            >
              Making Code{" "}
              <span className="text-foreground">Solve</span>
              <br />
              <span className="text-foreground">Real Problems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Passionate Developer | Competitive Programmer | Open Source Enthusiast
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex gap-10 mb-10"
            >
              <div>
                <span className="text-4xl font-display font-bold text-foreground">260+</span>
                <p className="text-xs text-muted-foreground mt-1">Problems<br />Solved</p>
              </div>
              <div>
                <span className="text-4xl font-display font-bold text-foreground">1569</span>
                <p className="text-xs text-muted-foreground mt-1">LeetCode<br />Rating</p>
              </div>
              <div>
                <span className="text-4xl font-display font-bold text-foreground">5+</span>
                <p className="text-xs text-muted-foreground mt-1">Projects /<br />Contributions</p>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <FileText size={16} />
                View CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right - Avatar with floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />
              
              {/* Avatar */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30">
                <img
                  src={avatar}
                  alt="Nitin Maurya"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card rounded-xl px-3 py-2 text-xs font-mono"
              >
                <span className="text-primary">{'<'}</span>
                <span className="text-foreground">Python</span>
                <span className="text-primary">{' />'}</span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-6 glass-card rounded-xl px-3 py-2 text-xs font-mono"
              >
                <span className="text-primary">{'<'}</span>
                <span className="text-foreground">C++</span>
                <span className="text-primary">{' />'}</span>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-10 glass-card rounded-xl px-3 py-2 text-xs font-mono"
              >
                <span className="text-primary">{'<'}</span>
                <span className="text-foreground">ML</span>
                <span className="text-primary">{' />'}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social links - vertical sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hidden lg:flex fixed left-6 bottom-0 flex-col items-center gap-5 z-40"
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            aria-label={link.label}
          >
            <link.icon size={18} />
          </a>
        ))}
        <div className="w-px h-24 bg-muted-foreground/30" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
