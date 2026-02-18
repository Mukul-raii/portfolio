import Hero from "../components/landingPage/Hero";
import Projects from "../components/projects";
import Aboutme from "@/components/landingPage/aboutme";
import Footer from "../components/footer";
import Experience from "@/components/landingPage/experience";
import Skills from "@/components/landingPage/skills";
import SectionWrapper from "@/components/SectionWrapper";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <div className="relative w-full flex flex-row items-center justify-center">
        {/* Left Vertical line */}
        <div className="absolute left-1/2 -ml-[384px] top-0 h-full z-0 hidden md:block pointer-events-none">
          <div
            className="h-full w-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 14px)",
              backgroundSize: "1px 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl  w-full flex items-center justify-center flex-col mx-auto relative z-10 px-4">
          <FlickeringGrid
            className=" size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
            height={200}
            width={740}
          />

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
        </div>

        {/* Right Vertical line */}
        <div className="absolute left-1/2 ml-[384px] top-0 h-full z-0 hidden md:block pointer-events-none">
          <div
            className="h-full w-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 14px)",
              backgroundSize: "1px 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
