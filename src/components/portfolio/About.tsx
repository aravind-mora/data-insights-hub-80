const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I am a Data Analytics Enthusiast with a strong interest in working with data and transforming it into meaningful insights. I believe that data, when analyzed and communicated clearly, can support better decision-making.
          </p>
          <p>
            Most of my time is spent working with datasets—understanding raw data, cleaning and transforming it, writing SQL queries, and building dashboards. I focus on data analysis, reporting, and visualization using tools such as SQL, Excel, and Power BI.
          </p>
          <p>
            My skill set includes SQL querying, data analysis, data modeling, dashboard creation, and basic Python analytics. I enjoy breaking down complex datasets into simple, logical components and answering business-driven questions using data.
          </p>
          <p>
            I regularly work on end-to-end data analysis projects, which typically begin with understanding the data structure, followed by cleaning and transformation, and end with generating insights that support business decisions. Most of my learning comes from hands-on projects, online platforms, and continuous self-study.
          </p>
          <p>
            Outside of project work, I practice analytical problem-solving and maintain my work on GitHub. I believe in consistent learning and improving analytical thinking through practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
