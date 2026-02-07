import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Github, Twitter, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors">
          Nitin<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop social */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://x.com/nitinmauryaa_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter size={15} />
            <span>Twitter</span>
          </a>
          <a
            href="https://github.com/Nitinmauryaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={15} />
            <span>Github</span>
          </a>
          <a
            href="mailto:nitinmauryaa95@gmail.com"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={15} />
            <span>Email</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-3 border-t border-border">
                <a href="https://x.com/nitinmauryaa_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="https://github.com/Nitinmauryaa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={16} />
                </a>
                <a href="mailto:nitinmauryaa95@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
