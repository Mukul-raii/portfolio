"use client";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Rocket,
  Download,
} from "lucide-react";
const Aboutme = () => {
  return (
    <div className="min-h-auto w-full flex items-center justify-center px-2 sm:px-4 py-4">
      <div className="max-w-3xl w-full px-2 sm:px-4">
        {/* Description Section */}
        <div className="space-y-4 mb-8">
          <p className="text-sm sm:text-base  leading-relaxed">
            Hey, I'm Mukul, a full stack developer who loves building clean,
            modern websites and apps.
          </p>
          <p className="text-sm sm:text-base  leading-relaxed">
            Tech stack isn't my concern, I'm flexible with whatever the project
            needs, though I prefer modern frameworks and tools. I'm always open
            for new opportunities to learn and grow.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-3 sm:gap-4 mb-8">
          <a
            href="https://github.com/Mukul-raii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-xs sm:text-sm text-gray-700"
          >
            <Download size={16} className="flex-shrink-0" />
            <span>Resume</span>
          </a>

          <a
            href="https://github.com/Mukul-raii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-green-300 hover:bg-green-400 rounded-lg transition text-xs sm:text-sm "
          >
            <span>Avaliable for projects</span>
          </a>
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
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md transition text-xs sm:text-sm text-gray-700"
            >
              <Github size={16} className="flex-shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/mukulrai04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md transition text-xs sm:text-sm text-gray-700"
            >
              <Twitter size={16} className="flex-shrink-0" />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mukulrai31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md transition text-xs sm:text-sm text-gray-700"
            >
              <Linkedin size={16} className="flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:devmukulrai27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md transition text-xs sm:text-sm text-gray-700"
            >
              <Mail size={16} className="flex-shrink-0" />
              <span>Gmail</span>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md transition text-xs sm:text-sm text-gray-700"
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
