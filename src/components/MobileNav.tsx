"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoCloseOutline } from "react-icons/io5";
import Socials from "./Socials";

type MobileNavProps = {
  setMobileNav: (value: boolean) => void;
};

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

const MobileNav = ({ setMobileNav }: MobileNavProps) => {
  const pathName = usePathname();

  return (
    <nav className='relative flex flex-col justify-between h-full p-8'>
      <IoCloseOutline
        onClick={() => setMobileNav(false)}
        className='text-4xl cursor-pointer text-accent'
      />
      <ul className='flex flex-col gap-10 text-white text-xl'>
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={`${
              pathName === link.href && "border-b-2 border-accent"
            } uppercase max-w-max mx-auto`}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <Socials containerStyles='text-white text-lg flex gap-6 justify-center' />
    </nav>
  );
};

export default MobileNav;
