import { animated, useSpring } from "@react-spring/web";
import AnimatedPostCover from "./animated-post-cover";
import TitleTag from "./title-tag";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

type PropsType = {
  cat: string;
  img: string;
  title: string;
  button: string;
};

const PostComponent = ({ cat, img, title, button }: PropsType) => {
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
