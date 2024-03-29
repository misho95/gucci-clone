import { useWindowScroll } from "@uidotdev/usehooks";
import clsx from "clsx";
import { RiSearch2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoPlus } from "react-icons/go";

const Header = () => {
  const [{ x, y }, scrollTo] = useWindowScroll();

  return (
    <header
      className={clsx(
        "fixed top-0 w-full bg-transparent font-sans px-20 duration-300 z-50",
        {
          "text-white bg-transparent": y === 0,
          "text-black bg-white shadow-sm": y && y > 0,
        }
      )}
    >
      <div className="py-[1.5rem] px-[2rem] flex justify-between">
        <button
          className={clsx("flex items-center gap-2 group duration-1000", {
            "opacity-0": y === 0,
            "opacity-100": y && y > 0,
          })}
        >
          <GoPlus className="group-hover:rotate-90 duration-200" />
          <span>Contact Us</span>
        </button>
        <div className="flex gap-5 items-center ">
          <button className="size-[24px] duration-300">
            <RiSearch2Line className="size-[16px]" />
          </button>

          <button className="flex items-center h-[24px] gap-2 duration-300">
            <RxHamburgerMenu className="size-[16px]" />
            <span className="uppercase font-inherit">menu</span>
          </button>
        </div>
        <div
          className={clsx(
            "absolute left-1/2 -translate-x-1/2 duration-500 select-none ",
            {
              "text-[300px] top-0 tracking-[150px]": y === 0,
              "text-[40px] top-1 tracking-[20px]": y && y > 0,
            }
          )}
        >
          GUCCI
        </div>
      </div>
    </header>
  );
};

export default Header;
