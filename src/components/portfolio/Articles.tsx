import { BookOpen } from "lucide-react";

const Articles = () => {
  return (
    <section id="articles" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Articles & <span className="text-primary">Learning</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I occasionally document my learning related to data analysis, SQL concepts, dashboard design, and analytical problem-solving. Writing helps reinforce my understanding and allows me to share knowledge with others who are learning data analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
