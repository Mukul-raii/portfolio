"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 pointer-events-none left-1/2 -translate-x-1/2 z-50 mb-6 pt-6 px-4",
        className
      )}
    >
      <div className="pointer-events-auto flex items-center gap-1 md:gap-3 bg-gradient-to-b from-background/10 to-background/5 border border-foreground/10 backdrop-blur-xl py-2 px-2 rounded-xl shadow-2xl max-w-[calc(100vw-2rem)] overflow-hidden relative">
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          const isHovered = hoveredTab === item.name;
          return (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-3 md:px-6 py-2 rounded-xl transition-all duration-300 flex items-center gap-2",
                  "text-foreground/70 hover:text-foreground",
                  isActive && "text-foreground",
                  isHovered && !isActive && "bg-foreground/5"
                )}
              >
                <span className="hidden md:inline">
                  <Icon
                    size={18}
                    strokeWidth={2}
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </span>

                <span className="hidden md:inline text-foreground drop-shadow-sm">
                  {item.name}
                </span>

                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>

                {isActive && (
                  <>
                    <motion.div
                      layoutId="active-bg"
                      className="absolute inset-0 bg-foreground/8 rounded-xl -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                      }}
                    />

                    <motion.div
                      layoutId="glow-line"
                      className="absolute -top-1 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                      }}
                      style={{
                        width: "60%",
                      }}
                    />
                  </>
                )}

                {isHovered && !isActive && (
                  <motion.div
                    layoutId="hover-glow"
                    className="absolute inset-0 rounded-xl bg-foreground/5 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
