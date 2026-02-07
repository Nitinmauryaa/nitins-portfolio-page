import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter, Code2, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "nitinmauryaa95@gmail.com",
    href: "mailto:nitinmauryaa95@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Nitinmauryaa",
    href: "https://github.com/Nitinmauryaa",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Nitin Maurya",
    href: "https://www.linkedin.com/in/nitin-maurya-53b347328/",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    value: "@nitinmauryaa_",
    href: "https://x.com/nitinmauryaa_",
  },
  {
    icon: Code2,
    label: "Codolio",
    value: "Nitinmauryaa",
    href: "https://codolio.com/profile/Nitinmauryaa",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-mono text-primary text-sm">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          </div>

          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or competitive programming challenges. Feel free to reach out!
          </p>

          <div className="grid gap-4 mb-10">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="glass-card rounded-xl px-6 py-4 flex items-center gap-4 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <link.icon size={20} className="text-primary flex-shrink-0" />
                <div className="flex-1 text-left">
                  <div className="text-xs text-muted-foreground">{link.label}</div>
                  <div className="text-sm font-medium text-foreground">{link.value}</div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </motion.a>
            ))}
          </div>

          <a
            href="mailto:nitinmauryaa95@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-300 box-glow"
          >
            <Mail size={16} />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
