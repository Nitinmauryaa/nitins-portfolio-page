import { Github, Linkedin, Twitter, Code2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">&lt;</span>
            Designed & Built by Nitin Maurya
            <span className="text-primary"> /&gt;</span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/Nitinmauryaa" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nitin-maurya-53b347328/" },
              { icon: Twitter, href: "https://x.com/nitinmauryaa_" },
              { icon: Code2, href: "https://codolio.com/profile/Nitinmauryaa" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>

          <div className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart size={12} className="text-primary" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
