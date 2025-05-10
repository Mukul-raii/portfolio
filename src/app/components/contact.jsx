import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon, Mail, TwitterIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center m-10 ">
      <div className="flex flex-col justify-center items-center my-3  gap-4">
        <div className="py-3  px-5 rounded-3xl bg-gradient-to-r from-blue-300 to-purple-200 z-0">
          <p className=" text-md font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent z-10">
            Let's Connect
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold m-3">Get in Touch</h1>
        <p className=" text-lg text-gray-600 max-w-2xl mx-auto text-center">
          Always up for new opportunities, collabs, or idea exchanges. Reach out
          through any of these channels and I'll get back to you ASAP!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 sm:mt-0 gap-8 relative">
        {contactData.map(({ label, icon: Icon, css, contact, display }) => (
          <div
            key={label}
            className="flex flex-row gap-5 p-4 sm:p-6 rounded-3xl shadow-md border-2 border-neutral-100 relative transition-all duration-300 hover:-translate-y-1 ease-in-out  hover:bg-gradient-to-br from-blue-50 to-white"
          >
            <div className={`bg-gradient-to-br ${css} rounded-2xl p-4`}>
              <Icon className="text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">{label}</h1>
              <a
                href={contact}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-neutral-500 py-1  hover:underline break-all"
              >
                {label !== "Email" ? `@${display}` : display}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

const contactData = [
  {
    label: "Email",
    icon: Mail,
    css: "from-blue-500 to-purple-400",
    contact: "mailto:devmukulrai27@gmail.com",
    display: "devmukulrai27@gmail.com",
  },
  {
    label: "GitHub",
    icon: GithubIcon,
    css: "from-black to-neutral-600",
    contact: "https://github.com/Mukul-raii",
    display: "Mukul-raii",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    css: "from-blue-600 to-blue-400",
    contact: "https://www.linkedin.com/in/mukulrai31",
    display: "mukulrai31",
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    css: "from-black to-blue-500",
    contact: "https://twitter.com/mukulrai04",
    display: "mukulrai04",
  },
];
