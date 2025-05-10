
"use client"


const Skills = () => {
 
    const techStack = [
        { id: "stage1-div-1", alt: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { id: "stage1-div-2", alt: "Next.js", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage1-div-3", alt: "Typescript", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage1-div-4", alt: "Tailwind CSS", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage1-div-5", alt: "Rust", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage2-div-1", alt: "Docker", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage2-div-2", alt: "Git", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage3-div-1", alt: "MongoDB", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage3-div-2", alt: "SQL", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage4-div-1", alt: "NodeJS", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage4-div-2", alt: "Redux", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage4-div-3", alt: "Socket.io", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage4-div-4", alt: "Python", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { id: "stage4-div-5", alt: "Go", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
      ];
    
      return (
        <div className="w-full grid grid-cols-5 gap-4 place-items-center">
          {techStack.map((tech) => (
            <div key={tech.id} id={tech.id} className="relative flex flex-col w-36 h-36">
              <img
                alt={tech.alt}
                loading="lazy"
                width="300"
                height="300"
                decoding="async"
                className="rounded-xl scale-50"
                style={{ color: "transparent" }}
                src={tech.src}
              />
            </div>
          ))}
        </div>
      );
    };
    

export default Skills



