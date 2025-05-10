import { AboutMeTabs } from "@/components/ui/simple-tabs-with-underline-and-bold-font";

export const Aboutme = () => {
  return (
    <div className="w-full flex flex-col px-4 sm:flex-row items-start justify-center  gap-10">
      <div className="  ">
        <img
          src="https://framerusercontent.com/images/0u9nLJhQ0GmYXvXpzvQx551F70.gif"
          alt="Space Nebula"
          className="w-full h-auto rounded-xl"
        />
      </div>
      {/* Right side: About and Tabs */}
      <div className=" max-w-screen-md sm:max-w-xl flex flex-col gap-8">
        <div className="text-4xl font-bold">
          <div className=" w-max py-1  px-2 rounded-3xl bg-gradient-to-r from-blue-300 to-purple-200 z-0">
            <p className=" text-sm font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent z-10">
              About me
            </p>
          </div>
          <h1>Developer by Choice</h1>
        </div>
        <AboutMeTabs />
      </div>
    </div>
  );
};
