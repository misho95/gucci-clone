import clsx from "clsx";

const AnimatedLinks = ({
  title,
  color,
  styles,
}: {
  title: string;
  color: "white" | "black";
  styles?: React.CSSProperties;
}) => {
  return (
    <a
      style={{ ...styles }}
      href="#"
      className={clsx(
        "text-[1rem] font-medium leading-[1.5rem] capitalize w-fit group relative pb-[3px] ",
        {
          "text-white": color === "white",
          "text-black": color === "black",
        }
      )}
    >
      {title}
      <div
        className={clsx(
          "w-full h-[1px] bottom-0 absolute group-hover:animate-underline duration-300",
          {
            "bg-white": color === "white",
            "bg-black": color === "black",
          }
        )}
      />
    </a>
  );
};

export default AnimatedLinks;
