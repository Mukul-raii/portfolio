import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <Image src="/favicon.ico" alt="Logo" width={100} height={50}></Image>
      </div>
      <div>
        {navigationLinks.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
export default Navbar;
