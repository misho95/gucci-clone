import { useEffect, useState } from "react";
import Image from "../assets/HP_Portrait_Gucci-G-Timeless-Feb24-SHOT_05_HS_231219_GUCCI_LOAFERS_0451_001_Default.avif";
import SpinButton from "./spin.button";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { animated, useSpring } from "@react-spring/web";

const Featured = () => {
  const [stop, setStop] = useState(false);
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const [spring, animate] = useSpring(() => ({
    from: { transform: "scale(120%)" },
  }));

  useEffect(() => {
    if (entry?.isIntersecting && !stop) {
      animate.start({
        from: { transform: "scale(120%)" },
        to: { transform: "scale(100%)" },
        config: {
          duration: 800,
        },
        delay: 500,
      });

      setStop(true);
    }
  }, [entry?.isIntersecting]);

  return (
    <section className="mt-[4rem] sm:mt-[8rem] mx-[1rem] sm:mx-[4rem] mb-[5rem] sm:mb-[10rem] max-w-[1440px] ">
      <h3 className="mb-[5rem] sm:mb-[10rem] text-[1rem] font-bold uppercase w-full text-center">
        featured
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2rem]">
        <figure
          ref={ref}
          className="w-full aspect-[0.75] sm:w-[calc(100%-8rem)] h-fit relative overflow-hidden"
        >
          <animated.img
            style={spring}
            src={Image}
            className="w-full h-full object-cover brightness-[0.90]"
          />
        </figure>
        <figure className="flex justify-center items-center">
          <div className="max-w-[420px] text-center whitespace-break-spaces text-wrap p-2 font-extralight flex flex-col items-center">
            <h1 className="text-[3rem] uppercase mb-[2rem] leading-[3rem]">
              THE HORSEBIT 1953 LOAFER
            </h1>
            <p className="text-[1rem] mb-[3rem]">
              Kingsley Ben-Adir wears the iconic style in the new campaign.
            </p>
            <SpinButton title="Discover More" />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Featured;
