"use client";
import { Github, Linkedin, Twitter, Mail, Rocket } from "lucide-react";
const Aboutme = () => {
  return (
    <div className="min-h-auto w-full flex items-center justify-center px-2 sm:px-4 py-4">
      <div className="max-w-3xl w-full px-2 sm:px-4">
        {/* Description Section */}
        <div className="space-y-4 mb-8">
          <p className="text-sm sm:text-base  leading-relaxed">
            I build web apps with clean code. Working as a Frontend Developer
            Intern @Klimb
          </p>
          <p className="text-sm sm:text-base  leading-relaxed">
            My journey began in 2023 and continues through 2025 as a B.Tech
            student at @aktu. Along the way, I've developed a passion for clean,
            efficient code and knowledge-sharing whether through participating
            in college hackathons or engaging with students and seniors.
          </p>
          <p className="text-sm sm:text-base  leading-relaxed">
            Tech stack isn't my concern, I'm flexible with whatever the project
            needs, though I prefer modern frameworks and tools. I'm always open
            for new opportunities to learn and grow.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-3 sm:gap-4 mb-8">
          <button className="px-4 py-2 rounded-[9px] border-2 border-gray-300 font-medium hover:bg-gray-50 transition text-sm sm:text-base">
            Resume
          </button>
          <span className="text-green-500 border-green-600 font-medium py-2 px-4 sm:px-6 rounded-xl border-2 text-center text-sm sm:text-base">
            Available for new project
          </span>
        </div>

        {/* Social Links */}
        <div className="w-full">
          <p className="text-sm sm:text-base  font-medium mb-3">
            Here are my socials
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a
              href="https://github.com/Mukul-raii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-xs sm:text-sm text-gray-700"
            >
              <Github size={16} className="flex-shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/mukulrai04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-xs sm:text-sm text-gray-700"
            >
              <Twitter size={16} className="flex-shrink-0" />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mukulrai31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-xs sm:text-sm text-gray-700"
            >
              <Linkedin size={16} className="flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:devmukulrai27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-xs sm:text-sm text-gray-700"
            >
              <Mail size={16} className="flex-shrink-0" />
              <span>Gmail</span>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-xs sm:text-sm text-gray-700"
            >
              <Rocket size={16} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Anonymous message</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
