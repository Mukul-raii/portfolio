"use client";

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <div className={`w-screen ${className}`}>
      {/* Top horizontal dashed line */}
      <div
        className="w-full h-px"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 14px)",
          backgroundSize: "100% 1px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      {children}

      {/* Bottom horizontal dashed line */}
      <div
        className="w-full h-px"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 14px)",
          backgroundSize: "100% 1px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default SectionWrapper;
