import Hero from "../components/Hero";
import Docke from "../components/dock";
import Projects from "../components/projects";
import { Aboutme } from "../components/aboutme";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Docke />
      <header id="home" className="">
        <Hero />
      </header>
      <section id="about" className="py-20">
        <Aboutme />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
