import { Award } from "lucide-react";

const certifications = [
  "SQL for Data Analysis",
  "Data Analysis with Excel",
  "Power BI Fundamentals",
  "Python for Data Analysis",
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
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-6 flex items-center gap-4 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
