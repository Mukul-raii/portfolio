"use client";
import Image from "next/image";
import { Github, Linkedin, Twitter, X } from "lucide-react";

const Hero = () => {
  return (
    <div className=" mx-auto my-24 sm:mt-80 mb-d px-4 flex flex-col item-center justify-center sm:flex-row gap-12 sm:gap-16">
      <div className="flex flex-col items-center justify-center  text-center md:text-left ">
        <div className="w-max py-1 flex justify-center px-3 rounded-3xl bg-gradient-to-r from-blue-300 to-purple-200 ">
          <p className=" text-md font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ">
            Developer
          </p>
        </div>
        <article className="max-w-full  pt-6 sm:max-w-md text-wrap ">
          <h1 className="  text-4xl  md:text-5xl lg:text-6xl flex flex-col justify-center font-bold tracking-tight mb-6  ">
            <p className="inline-block mr-4">Hey, I'm</p>
            <p className="relative">Mukul Rai✨</p>
          </h1>
          <p className=" relative sm:text-left mx-auto sm:mx-0 mb-10 text-base sm:text-lg text-neutral-800 whitespace-normal break-words">
            <span>
              Full-stack developer passionate about crafting user-centric
            </span>
            <span>applications. Based in Jhansi/Delhi, India.</span>
          </p>
        </article>
        <div className="flex flex-col md:flex-row items-center gap-4 ">
          <button className="py-2 px-6 rounded-xl  border-2 ">Resume</button>
          <span className="text-green-500 border-green-600 font-medium py-2 px-6 rounded-xl border-2">
            Available for new project
          </span>
        </div>
        <div className="flex flex-row  gap-10  mt-10">
          <a
            href="https://github.com/Mukul-raii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-600 transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/mukulrai31"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://twitter.com/mukulrai04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-500 transition"
          >
            <Twitter size={28} />
          </a>
        </div>
      </div>
      <div className="group relative w-80 h-96 p-0 mx-auto   bg-gray-100 border-gray-200 rounded-2xl border-4 overflow-hidden hover:shadow-2xl transition-all  duration-300 hover:bg-neutral-100  hover:p-5  hover:scale-105 flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dmvzjbgwp/image/upload/v1746870665/Tanjiro_Kamado_Demon_Slayer_Fanart_Wallpaper_yl7azu.jpg"
          alt="Mukul Rai"
          width={400}
          height={600}
          className="w-full h-full object-cover rounded-2xl transition-all duration-200 ease-in-out"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;

/*     <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
      <div className="grid max-w-6xl gap-16 items-center md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Hey, I'm Mukul
          </h1>
          <p className="text-lg">
            Full-stack developer passionate about crafting user-centric
            applications. Based in Jhansi/Delhi, India.
          </p>
        </div>

        <div className="flex space-x-4">
          <ShimmerButton
            className="rounded-lg transition-transform hover:scale-105"
            background="#2563eb"
          >
            <span className="text-sm font-medium tracking-wide">
              Say Hello 👋
            </span>
          </ShimmerButton>
        </div>

        <ShimmerButton
          className="rounded-lg border border-primary/20 transition-transform hover:scale-105"
          background="#9333ea"
        >
          <span className="text-sm font-medium tracking-wide">
            Download Resume 📄
          </span>
        </ShimmerButton>

        <div className="relative w-64 h-64 rounded-full border-4 border-primary/20 overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/40 hover:scale-105">
          <Image
            src={image}
            alt="Mukul Rai"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
     */
