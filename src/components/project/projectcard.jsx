import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project, index }) => {
  const isLive = project.status === "Completed";
  const dotColor = isLive ? "bg-green-500" : "bg-orange-500";
  const dotTextColor = isLive ? "text-green-500" : "text-orange-500";

  return (
    <div>
      {/* Card */}
      <div className="relative z-10 p-3">
        <Link
          href={`/project/${project.slug}`}
          className="flex flex-col gap-2 cursor-pointer group w-full"
        >
          {/* Image area */}
          <div className="p-[4px] rounded-[10px] border border-gray-200">
            <div className="relative w-full bg-gray-100 rounded-[6px] border border-gray-200 h-[200px] md:h-[200px] sm:h-[170px] overflow-hidden select-none">
              {/* Hover background */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${project.background})` }}
              />

              {/* Thumbnail panel */}
              <div className="bg-white rounded-t-[6px] absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[70%] group-hover:translate-y-[8%] transition-transform duration-300 p-[2px] pb-0">
                <div className="w-full h-full rounded-t-[4px] overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Info area */}
          <div className="px-2 flex flex-col gap-1">
            {/* Title + status */}
            <div className="flex items-center justify-between">
              <h3 className="text-[1.10rem] leading-[1.10] font-bold">
                {project.title}
              </h3>
              <div className="flex items-center gap-1 select-none">
                <div className="relative flex items-center justify-center">
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping group-hover:hidden rounded-full opacity-40 ${dotColor}`}
                    style={{ width: 10, height: 10 }}
                  />
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className={`relative z-10 ${dotTextColor}`}
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  {isLive ? "Live" : "Building"}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 line-clamp-2">
              {project.description}
            </p>

            {/* View Project */}
            <div className="flex items-center gap-1 select-none">
              <p className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-900">
                View Project
              </p>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500 transition-all duration-300 group-hover:rotate-45 group-hover:text-gray-900"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile divider */}
      <div className="block md:hidden">
        <div
          className="w-full h-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 14px)",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
