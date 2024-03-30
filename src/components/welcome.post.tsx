import { animated, useSpring } from "@react-spring/web";
import image from "../assets/Orizzontale_NoLogo.avif";

const WelcomePost = () => {
  const springTitle = useSpring({
    from: { opacity: 0, transform: "translate(0%,100%)" },
    to: { opacity: 1, transform: "translate(0%,0%)" },
    config: {
      duration: 800,
    },
    delay: 500,
  });

  const springButton = useSpring({
    from: { opacity: 0, transform: "translate(0%,100%)" },
    to: { opacity: 1, transform: "translate(0%,0%)" },
    config: {
      duration: 800,
    },
    delay: 500,
  });

  return (
    <div className="w-full h-fit relative select-none pointer-events-none">
      <img src={image} />

      <div className="w-full sticky bottom-2">
        <div className="absolute bottom-[2.5rem] left-1/2 -translate-x-1/2 flex flex-col gap-[1rem] justify-center items-center">
          <animated.h3 style={springTitle} className="text-[2rem] text-white">
            Horsebit 1953
          </animated.h3>
          <animated.div style={springButton}>
            <button className="bg-white rounded-[2px] py-[16px] px-[24px] uppercase font-bold text-[0.75rem] pointer-events-auto hover:scale-90 duration-[0.8s]">
              explore men's loafers
            </button>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePost;
