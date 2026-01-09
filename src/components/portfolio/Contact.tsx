import { Mail, Github, Linkedin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "aravindmora51@gmail.com",
    href: "mailto:aravindmora51@gmail.com?subject=Contact%20from%20Portfolio",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "https://github.com/...",
    href: "https://github.com/aravind-mora",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/...",
    href: "https://www.linkedin.com/in/aravind-mora-7a6191328",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Thanks for visiting my portfolio. Feel free to reach out to me.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-3 bg-background border border-border rounded-lg px-6 py-4 hover:border-primary/50 transition-colors duration-300 w-full sm:w-auto"
            >

              <link.icon className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">{link.label}</p>
                <p className="text-foreground font-medium text-sm">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
