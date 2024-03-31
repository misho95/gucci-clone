import clsx from "clsx";

const NavBar = ({
  open,
  set,
}: {
  open: boolean;
  set: (arg: boolean) => void;
}) => {
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
        className={clsx("h-full w-1/3 bg-white duration-700", {
          "translate-x-full": !open,
          "translate-x-0": open,
        })}
      >
        modal here
      </div>
    </div>
  );
};

export default NavBar;
