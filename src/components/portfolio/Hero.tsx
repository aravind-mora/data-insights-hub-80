const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
  Hi, I am <span className="text-primary">Aravind</span>
</h1>

        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
          Welcome to my Data Analytics Portfolio!
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          You can find my projects, analysis work, dashboards, and ideas here.
        </p>
        <div className="mt-10">
          <a
            href="#projects"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
