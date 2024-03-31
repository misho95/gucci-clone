import { animated, useInView, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

type PropsType = {
  title: {
    button: string;
    h3: string;
  };
  upperCase?: boolean;
};

const AnimatedPostCover = ({ title, upperCase = false }: PropsType) => {
  const [ref, inView] = useInView();
  const [stop, setStop] = useState(false);

  const [springTitle, animateTitle] = useSpring(() => ({
    from: { opacity: 0, transform: "translate(0%,100%)" },
  }));

  const [springButton, animateButton] = useSpring(() => ({
    from: { opacity: 0, transform: "translate(0%,100%)" },
  }));

  useEffect(() => {
    if (inView && !stop) {
      animateTitle.start({
        from: { opacity: 0, transform: "translate(0%,100%)" },
        to: { opacity: 1, transform: "translate(0%,0%)" },
        config: {
          duration: 800,
        },
        delay: 500,
      });
      animateButton.start({
        from: { opacity: 0, transform: "translate(0%,100%)" },
        to: { opacity: 1, transform: "translate(0%,0%)" },
        config: {
          duration: 800,
        },
        delay: 500,
      });
      setStop(true);
    }
  }, [inView]);

  return (
    <div className="w-full h-[50%] bottom-0 absolute" ref={ref}>
      <div className="w-full h-full relative">
        <div className="w-full h-full" />
        <div className="w-full h-fit sticky bottom-2">
          <div className="w-full absolute bottom-[2.5rem] left-1/2 -translate-x-1/2 flex flex-col gap-[1rem] justify-center items-center">
            <animated.h3
              style={springTitle}
              className={`text-[1.5rem] sm:text-[2rem] text-white ${
                upperCase ? "uppercase" : "capitalize"
              }`}
            >
              {title.h3}
            </animated.h3>
            <animated.div style={springButton}>
              <button className="w-full bg-white rounded-[2px] py-[16px] px-[24px] uppercase font-bold text-[0.75rem] pointer-events-auto hover:scale-90 duration-[0.8s]">
                {title.button}
              </button>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPostCover;
