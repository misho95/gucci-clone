import clsx from "clsx";
import NavLinks from "./nav-links";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import AnimatedLinks from "./animated-links";

const NavBar = ({
  open,
  set,
}: {
  open: boolean;
  set: (arg: boolean) => void;
}) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <div
      onClick={() => set(false)}
      className={clsx(
        "w-full h-full bg-black/50 backdrop-blur-md fixed top-0 left-0 z-50 duration-300 flex justify-end",
        {
          "opacity-0 pointer-events-none": !open,
          "opacity-100": open,
        }
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "h-full w-full sm:w-fit p-[5rem] bg-white duration-700 relative ease-[cubic-bezier(0.5,0,0,1)] overflow-y-auto overflow-x-hidden",
          {
            "translate-y-full sm:translate-y-0 sm:translate-x-full": !open,
            "translate-y-0 sm:translate-x-0": open,
          }
        )}
      >
        <button
          onClick={() => set(false)}
          className="bg-black rounded-full size-[48px] absolute top-1 right-1 flex justify-center items-center hover:scale-75 duration-500"
        >
          <IoMdClose className="size-[24px] text-white" />
        </button>
        <div className="w-full sm:w-[420px] h-full flex flex-col gap-[2.5rem] mb-[10rem]">
          <nav className="flex flex-col gap-[1.5rem]">
            <NavLinks title="new in" />
            <NavLinks title="handbags" />
            <NavLinks title="travel" />
            <NavLinks title="women" />
            <NavLinks title="men" />
            <NavLinks title="children" />
            <NavLinks title="jewerly & watches" />
            <NavLinks title="decor & lifestyle" />
            <NavLinks title="fragrances & make-up" />
            <NavLinks title="gifts" />
          </nav>
          <div className="flex flex-col gap-[1rem] pb-[2rem]">
            <NavLinks title="gucci services" style={{ fontSize: "1rem" }} />
            <NavLinks title="world of gucci" style={{ fontSize: "1rem" }} />
          </div>
          <div className="flex flex-col gap-[2rem] pt-[3rem] px-[0.25rem]">
            <AnimatedLinks title={"sign in"} color="black" />
            <AnimatedLinks title={"my orders"} color="black" />
            <AnimatedLinks title={"contact us"} color="black" />
            <AnimatedLinks title={"+1 8774822430"} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
