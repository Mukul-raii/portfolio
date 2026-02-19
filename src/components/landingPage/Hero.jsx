"use client";
import {
  Github,
  Linkedin,
  Twitter,
  Eye,
  Moon,
  Mail,
  Rocket,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme, setTheme } = useTheme();

  function themeToggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div className="min-h-auto w-full flex items-center justify-center px-4 py-4 sm:py-6">
      <div className="max-w-3xl w-full px-2 sm:px-4">
        {/* Header Section */}
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            {/* Profile Image */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dmvzjbgwp/image/upload/v1746870665/Tanjiro_Kamado_Demon_Slayer_Fanart_Wallpaper_yl7azu.jpg"
                alt="Mukul Rai"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Title */}
            <div className="flex flex-col min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold  truncate text-border">
                Mukul Rai
              </h1>
              <p className=" text-xs sm:text-sm md:text-base">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Right Side Icons */}
          {/*    <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2 ">
              <Eye size={18} className="sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">3.3k</span>
            </div>
            <button
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => themeToggle()}
            >
              {theme === "dark" ? (
                <Sun size={18} className="sm:w-5 sm:h-5 " />
              ) : (
                <Moon size={18} className="sm:w-5 sm:h-5 " />
              )}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
