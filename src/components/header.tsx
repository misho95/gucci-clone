import { useWindowScroll } from "@uidotdev/usehooks";
import clsx from "clsx";
import { RiSearch2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import SpinButton from "./spin.button";
import { createPortal } from "react-dom";
import NavBar from "./nav-bar";
import { useState } from "react";
import Logo from "./logo";

const Header = () => {
  const [{ y }] = useWindowScroll();

  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <>
      {createPortal(
        <NavBar open={navBarOpen} set={setNavBarOpen} />,
        document.body
      )}
      <header
        className={clsx(
          "fixed top-0 w-full bg-transparent font-sans duration-300 z-40 select-none",
          {
            "text-white bg-transparent": y === 0,
            "text-black bg-white shadow-sm": y !== 0,
          }
        )}
      >
        <div className="py-[1.5rem] px-[1rem] sm:px-[4rem] flex justify-end sm:justify-between max-w-[1440px] m-auto">
          <div
            className={clsx("hidden sm:block duration-1000 opacity-0", {
              "opacity-0": y === 0,
              "opacity-100": y !== 0,
            })}
          >
            {y !== 0 && <SpinButton title="Contact Us" />}
          </div>

          <div className="flex gap-5 items-center ">
            <button className="size-[24px] duration-300">
              <FiUser className="size-[20px]" />
            </button>
            <button className="size-[24px] duration-300">
              <MdOutlineShoppingBag className="size-[20px]" />
            </button>
            <button className="size-[24px] duration-300">
              <RiSearch2Line className="size-[20px]" />
            </button>

            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center h-[24px] gap-2 duration-300"
            >
              <RxHamburgerMenu className="size-[20px]" />
              <span className="uppercase font-inherit hidden sm:block">
                menu
              </span>
            </button>
          </div>
          <div
            className={clsx(
              "w-full absolute left-0 p-[1rem] pt-[4rem] sm:p-[5rem] z-50 flex justify-start sm:justify-center pointer-events-none",
              {
                "-top-[calc(100%-35px)] sm:-top-[calc(100%-18px)]": y !== 0,
                "top-0": y === 0,
              }
            )}
          >
            <div
              className={clsx("duration-[0.8s]", {
                "w-[143px]": y !== 0,
                "w-full": y === 0,
              })}
            >
              <Logo
                className={clsx(
                  "duration-[0.8s] ease-[cubic-bezier(0.5,0,0,1)]",
                  {
                    "opacity-50 fill-white": y === 0,
                    "opacity-100 fill-black": y !== 0,
                  }
                )}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
