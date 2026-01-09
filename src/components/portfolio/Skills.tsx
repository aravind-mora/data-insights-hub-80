import { Database, BarChart2, Layers, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Database,
    title: "Data Analysis",
    skills: [
      "SQL (Joins, Group By, Subqueries, CASE WHEN)",
      "Excel (Pivot Tables, Charts, Reporting)",
    ],
  },
  {
    icon: BarChart2,
    title: "Business Intelligence",
    skills: ["Power BI (Dashboards, KPIs, Slicers, Basic DAX)"],
  },
  {
    icon: Layers,
    title: "Data Concepts",
    skills: [
      "Data Cleaning",
      "Data Modeling (Star Schema)",
      "ETL & Data Transformation (Conceptual)",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Python (Pandas – basic)", "Git & GitHub"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors duration-300"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
