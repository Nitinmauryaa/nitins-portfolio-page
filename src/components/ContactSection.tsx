import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Twitter, Code2, ArrowUpRight, Send } from "lucide-react";

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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:nitinmauryaa95@gmail.com?subject=${subject}&body=${body}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-mono text-primary mb-3 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Let's Connect
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-2 block uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-2 block uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-2 block uppercase tracking-wider">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                maxLength={1000}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about your project or just say hi..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all duration-300"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm always open to discussing new opportunities, interesting projects,
              or competitive programming challenges. Feel free to reach out!
            </p>
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.08, duration: 0.4 }}
                className="glass-card rounded-xl px-5 py-4 flex items-center gap-4 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon size={16} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">{link.label}</div>
                  <div className="text-sm font-medium text-foreground">{link.value}</div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
