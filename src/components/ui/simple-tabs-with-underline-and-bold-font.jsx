import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BaggageClaim, Heart, School, LayoutTemplateIcon } from "lucide-react";

function AboutMeTabs() {
  return (
    <Tabs className="" defaultValue="aboutme">
      <TabsList className="sticky top-0 z-10 h-auto w-full flex flex-wrap items-start justify-start sm:gap-8 gap-y-4 gap-x-6 border-b border-border bg-white px-0 py-1 text-foreground">
        <TabsTrigger value="aboutme" className="tab-trigger">
          <Heart />
          About me
        </TabsTrigger>
        <TabsTrigger value="experience" className="tab-trigger">
          <BaggageClaim />
          Experience
        </TabsTrigger>
        <TabsTrigger value="education" className="tab-trigger">
          <School />
          Education
        </TabsTrigger>
        <TabsTrigger value="skills" className="tab-trigger">
          <LayoutTemplateIcon />
          Skills
        </TabsTrigger>
      </TabsList>
      <TabsContent value="aboutme" className="min-h-[344px]">
        <div className="flex flex-col gap-4 max-w-[476px] min-h-[344px] py-4">
          <p>
            I build web apps with clean code. Working as an Frontend Developer
            Intern @Klimb
          </p>
          <p>
            My journey began in 2023 and continues through 2025 as a B.Tech
            student at @aktu. Along the way, I've developed a passion for clean,
            efficient code and knowledge-sharing whether through participating
            in college hackathons or engaging with students and seniors.
          </p>
          <p>
            I believe technology holds the power to transform lives and
            communities. My mission is to use my skills to build impactful
            solutions that truly make a difference.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="experience" className="min-h-[344px]">
        <div className="py-4 max-w-[476px] min-h-[344px]">
          <div className=" px-5 py-2  border-l-4">
            <p>May-Aug (2025)</p>
            <p className="font-bold">Frontend Developer Intern</p>
            <p>Klimb</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="education" className="min-h-[344px]">
        <div className="py-4 max-w-[476px] min-h-[344px]">
          <div className=" px-5 py-2  border-l-4  border-gray-200">
            <p>2023-2027</p>
            <p className="font-bold">B.Tech in Computer Science Engineering</p>
            <p>APJ Abdul Kalam University,Lucknow</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="skills" className="min-h-[344px]">
        <div className="grid grid-cols-2 gap-6 py-4 max-w-[476px] min-h-[344px]">
          {Object.entries(skills).map(([category, item]) => (
            <div className="bg-neutral-50 p-3 opacity-100" key={category}>
              <h4 className="mb-2 font-semibold">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {item.map((skill) => (
                  <span
                    className="font-features bg-neutral-200 px-2 py-1 rounded text-sm"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

export { AboutMeTabs };

const skills = {
  Fronted: ["React", "React Native", "Next.js", "Shadcn", "Tailwincss"],
  Backend: ["Node.js", "Express.js", "REST Apis", "Web Sockets", "JWT"],
  "Databases & Services": [
    "Postgress",
    "Prisma ORM",
    "Docker",
    "Supabase",
    "MongoDB",
  ],
  "Workflow Tools": [
    "Git",
    "GitHub",
    "Prompt Engineering",
    "Postman",
    "Clerk Auth",
    "Appwrite",
    "OAuth ",
  ],
};
