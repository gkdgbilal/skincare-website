import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Treatments",
    href: "/treatments",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav>
      <div className='container mx-auto flex gap-8'>
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={`${
              pathName === link.href && "border-b-2 border-accent"
            } uppercase`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
