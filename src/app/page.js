import Hero from "./components/Hero";
import Docke from "./components/dock";
import Projects from "./components/projects";
import { Aboutme } from "./components/aboutme";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Docke />
      <header id="home" className="flex items-center justify-center">
        <Hero />
      </header>
      <section id="about">
        <Aboutme />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
