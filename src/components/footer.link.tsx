import { animated, useSpring } from "@react-spring/web";
import { ReactNode } from "react";

const FooterLink = ({ children }: { children: ReactNode }) => {
  const [props, api] = useSpring(() => ({
    from: {
      width: "100%",
      right: "auto",
      left: "auto",
    },
  }));

  const animateHandler = () => {
    api.start({
      from: {
        width: "100%",
        right: "0",
        left: "auto",
      },
      to: [
        {
          width: "0",
          right: "0",
        },
        {
          width: "100%",
          left: "0",
          right: "auto",
        },
      ],
    });
  };

  return (
    <a href="#" className="w-fit relative" onMouseEnter={animateHandler}>
      <span className="text-white text-[0.75rem] font-medium leading-[1rem]">
        {children}
      </span>
      <animated.div style={props} className={"h-[1px] bg-white absolute"} />
    </a>
  );
};

export default FooterLink;
