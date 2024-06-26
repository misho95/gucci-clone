import { animated, useSpring } from "@react-spring/web";
import image from "../assets/Orizzontale_NoLogo.avif";
import AnimatedPostCover from "./animated-post-cover";

const WelcomePost = () => {
  const spring = useSpring({
    from: { scale: "120%" },
    to: { scale: "100%" },
    config: {
      duration: 500,
    },
    delay: 500,
  });

  return (
    <div className="w-full h-screen sm:h-fit relative select-none pointer-events-none">
      <div className="w-full h-full overflow-hidden">
        <animated.img
          style={spring}
          src={image}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <AnimatedPostCover
        title={{ button: "explore men's loafers", h3: "Horsebit 1953" }}
      />
    </div>
  );
};

export default WelcomePost;
