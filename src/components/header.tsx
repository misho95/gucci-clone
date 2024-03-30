import { useWindowScroll } from "@uidotdev/usehooks";
import clsx from "clsx";
import { RiSearch2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import SpinButton from "./spin.button";

const Header = () => {
  const [{ y }] = useWindowScroll();

  return (
    <header
      className={clsx(
        "fixed top-0 w-full bg-transparent font-sans duration-300 z-50 select-none",
        {
          "text-white bg-transparent": y === 0,
          "text-black bg-white shadow-sm": y && y > 0,
        }
      )}
    >
      <div className="py-[1.5rem] px-[1rem] sm:px-[4rem] flex justify-end sm:justify-between max-w-[1440px] m-auto">
        <div
          className={clsx("hidden sm:block duration-1000 opacity-0", {
            "opacity-0": y === 0,
            "opacity-100": y && y > 0,
          })}
        >
          {y !== 0 && <SpinButton title="Contact Us" />}
        </div>

        <div className="flex gap-5 items-center ">
          <button className="size-[24px] duration-300">
            <RiSearch2Line className="size-[16px]" />
          </button>

          <button className="flex items-center h-[24px] gap-2 duration-300">
            <RxHamburgerMenu className="size-[16px]" />
            <span className="uppercase font-inherit hidden sm:block">menu</span>
          </button>
        </div>
        <div
          className={clsx("absolute left-1/2 -translate-x-1/2 duration-500", {
            "text-[90px] sm:text-[150px] lg:text-[300px] top-5 sm:top-0 tracking-[25px] sm:tracking-[50px] lg:tracking-[150px] text-white/50":
              y === 0,
            "text-[40px] top-1 sm:top-0 left-5 sm:left-1/2 translate-x-0 sm:-translate-x-1/2 tracking-[20px] text-black":
              y && y > 0,
          })}
        >
          GUCCI
        </div>
      </div>
    </header>
  );
};

export default Header;
