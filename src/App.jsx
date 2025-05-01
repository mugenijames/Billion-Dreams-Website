import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* About Section */}
      <section>
        <Title subTitle="About Us" />
        <About />
      </section>

      {/* Services Section */}
      <section>
        <Title subTitle="Our Services" />
        <Services />
      </section>

      {/* Projects Section */}
      <section>
        <Title subTitle="Our Projects" />
        <Projects />
      </section>

      {/* Testimonials Section */}
      <section>
        <Title subTitle="Testimonials" />
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section>
        <Title subTitle="Contact Us" />
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
