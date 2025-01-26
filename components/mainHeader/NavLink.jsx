"use client";
import React from "react";
import Link from "next/link";
import classes from "./MainHeader.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  const getLinkClass = (pathStart) => {
    return path.startsWith(pathStart) ? classes.active : undefined;
  };

  return (
    <Link href={href} className={getLinkClass(href)}>
      {children}
    </Link>
  );
};

export default NavLink;
