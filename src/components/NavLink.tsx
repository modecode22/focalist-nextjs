"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

const NavLink = ({ children , link }: { children: React.ReactNode , link:string}) => {
  const path = usePathname();
  return (
    <Link
      href={link}
      className={`hover:text-font/80 active:hover:text-font/90 duration-100 text-xs font-medium flex justify-center items-center ${
        path === link ? "text-font" : "text-font/50"
      }  gap-2`}
    >
      {children}
    </Link>
  );
};

export default NavLink