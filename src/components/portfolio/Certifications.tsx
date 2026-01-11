import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "SQL (Basic)",
    platform: "HackerRank",
    link: "https://www.hackerrank.com/certificates/YOUR_BASIC_LINK",
  },
  {
    title: "SQL (Intermediate)",
    platform: "HackerRank",
    link: "https://www.hackerrank.com/certificates/YOUR_INTERMEDIATE_LINK",
  },
  {
    title: "Data Analysis with Excel",
    platform: "Online Course",
    link: "#",
  },
  {
    title: "Power BI Fundamentals",
    platform: "Online Course",
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Courses & <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target={cert.link !== "#" ? "_blank" : undefined}
              rel={cert.link !== "#" ? "noopener noreferrer" : undefined}
              className="bg-background border border-border rounded-lg p-6 flex items-center gap-4 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>

              <div>
                <p className="text-foreground font-medium">{cert.title}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  {cert.platform}
                  {cert.link !== "#" && (
                    <ExternalLink className="w-3 h-3" />
                  )}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
