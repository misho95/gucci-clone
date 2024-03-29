import image from "../assets/Orizzontale_NoLogo.avif";
import clsx from "clsx";
import { useEffect, useState } from "react";

const WelcomePost = () => {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    setSeen(true);
  }, []);

  return (
    <div className="w-full h-fit relative select-none pointer-events-none">
      <img src={image} />

      <div className="w-full sticky bottom-2">
        <div className="absolute bottom-[2.5rem] left-1/2 -translate-x-1/2 flex flex-col gap-[1rem] justify-center items-center">
          <h3
            className={clsx(
              "text-[2rem] text-white duration-[0.8s] ease-in-out delay-300",
              {
                "opacity-0 translate-y-[100%]": seen === false,
                "opacity-100": seen === true,
              }
            )}
          >
            Horsebit 1953
          </h3>
          <button
            className={clsx(
              "bg-white rounded-[2px] duration-[0.8s] hover:scale-90 py-[16px] px-[24px] uppercase font-bold text-[0.75rem] ease-in-out pointer-events-auto",
              {
                "opacity-0 translate-y-[100%]": seen === false,
                "opacity-100": seen === true,
              }
            )}
          >
            explore men's loafers
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePost;
