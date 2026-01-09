import { BarChart3, Users, ShoppingCart, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    image: "/project-images/sales-analysis.png",
    title: "Sales Performance Analysis",
    subtitle: "SQL & Excel",
    description:
      "In this project, I analyzed a retail sales dataset to understand revenue trends, profitability, and regional performance. I used SQL to aggregate sales data, calculate revenue and profit metrics, and identify top-performing products and regions. Excel pivot tables and charts were used to create summary reports suitable for business stakeholders.",
    skills: ["SQL", "Joins", "Data Aggregation", "Excel Reporting", "Business Analysis"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/aravind-mora/data-analytics-portfolio/tree/main/sales-performance-analysis", icon: Github },
    ],
  },
  {
    icon: Users,
    image: "/project-images/hr-dashboard.png",
    title: "HR Analytics Dashboard",
    subtitle: "Power BI",
    description:
      "This project focused on analyzing employee attrition and workforce patterns using HR data. I cleaned and transformed the dataset using Power Query and built an interactive Power BI dashboard with KPIs, slicers, and trend visualizations. The dashboard highlights attrition trends by department, job role, and tenure, helping identify potential retention issues.",
    skills: ["Power BI", "Data Cleaning", "Dashboard Design", "Data Visualization"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/aravind-mora/data-analytics-portfolio/tree/main/hr-analytics-dashboard", icon: Github },
    ],
  },
  {
    icon: ShoppingCart,
    image: "/project-images/ecommerce-modeling.png",
    title: "E-Commerce Data Modeling & Analytics",
    subtitle: "Data Modeling & SQL",
    description:
      "In this project, I worked with a real-world e-commerce dataset to design an analytics-ready data model and perform multi-table SQL analysis. I analyzed customers, orders, order items, products, sellers, and payments. Based on business requirements, I identified fact and dimension tables and designed a star schema. Revenue was derived directly from transactional order item data rather than summary order tables. The analysis included seller performance, customer behavior, delivery outcomes, and payment methods using complex SQL joins and aggregations.",
    skills: ["Data Modeling", "SQL Joins", "Fact & Dimension Design", "Analytical Thinking", "ETL Concepts"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/aravind-mora/data-analytics-portfolio/tree/main/ecommerce-analytics-elt", icon: Github },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Some Things I've <span className="text-primary">Worked On</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my data analytics projects showcasing SQL, Excel, Power BI, and data modeling skills.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-6 min-h-[560px] flex flex-col hover:border-primary/50 transition-colors duration-300"
            >
              {/* Project Image */}
              <div className="mb-4 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-primary">{project.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Skills + Links pushed to bottom */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
