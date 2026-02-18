import Footer from "@/components/footer";
import PageWrapper from "@/components/pageWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function ProjectLayout({ children }) {
  return (
    <PageWrapper>
      <FlickeringGrid
        className=" size-full pb-6"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={200}
        width={740}
      />
      <SectionWrapper>{children}</SectionWrapper>
      <FlickeringGrid
        className=" size-full pt-6"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={200}
        width={740}
      />
    </PageWrapper>
  );
}
