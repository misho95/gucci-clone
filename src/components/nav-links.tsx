import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const NavLinks = ({
  title,
  style,
}: {
  title: string;
  style?: React.CSSProperties;
}) => {
  return (
    <a
      style={{ ...style }}
      href="#"
      className="w-fit text-[1.25rem] font-medium leading-[1.5rem] capitalize flex gap-2 items-center group"
    >
      <span>{title}</span>
      {
        <IoIosArrowForward className="size-[12px] opacity-0 group-hover:opacity-100 duration-500 ease-in" />
      }
    </a>
  );
};

export default NavLinks;
