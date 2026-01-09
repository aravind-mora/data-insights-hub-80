import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

const Index = () => {
  useFadeInOnScroll();

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main>
        <Hero />
        <div className="fade-in-section">
          <About />
        </div>
        <div className="fade-in-section">
          <Projects />
        </div>
        <div className="fade-in-section">
          <Skills />
        </div>
        <div className="fade-in-section">
          <Certifications />
        </div>
        <div className="fade-in-section">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
