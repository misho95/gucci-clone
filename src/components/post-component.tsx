import { animated, useInView, useSpring } from "@react-spring/web";
import AnimatedPostCover from "./animated-post-cover";
import TitleTag from "./title-tag";
import { useEffect, useState } from "react";

type PropsType = {
  cat: string;
  img: string;
  title: string;
  button: string;
};

const PostComponent = ({ cat, img, title, button }: PropsType) => {
  const [ref, inView] = useInView();
  const [stop, setStop] = useState(false);

  const [spring, animate] = useSpring(() => ({
    from: { transform: "scale(120%)" },
  }));

  useEffect(() => {
    if (inView && !stop) {
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
  }, [inView]);

  return (
    <figure className="aspect-[0.75] w-full h-fit relative" ref={ref}>
      <TitleTag title={cat} />
      <div className="w-full h-full overflow-hidden">
        <animated.img
          style={spring}
          src={img}
          className="w-full h-full object-cover brightness-[0.90]"
        />
      </div>
      <AnimatedPostCover
        title={{ h3: title, button: button }}
        upperCase={true}
      />
    </figure>
  );
};

export default PostComponent;
