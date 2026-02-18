const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen">
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

        <div className="max-w-3xl w-full flex items-center justify-center flex-col mx-auto relative z-10 px-4">
          {children}
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
};

export default PageWrapper;
