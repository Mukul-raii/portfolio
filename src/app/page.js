import Hero from "../components/landingPage/HeroWithViews";
import Projects from "@/components/project/projects";
import Aboutme from "@/components/landingPage/aboutme";
import Footer from "../components/footer";
import Experience from "@/components/landingPage/experience";
import Skills from "@/components/landingPage/skills";
import SectionWrapper from "@/components/SectionWrapper";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <>
      {/* Main Content */}

      <header id="home">
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
        <Aboutme />
      </header>
      <Experience />
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <Skills />
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </>
  );
}
