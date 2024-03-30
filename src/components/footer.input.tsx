import clsx from "clsx";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const FooterInput = ({ placeHolder }: { placeHolder: string }) => {
  const [input, setInput] = useState("");

  return (
    <div className="w-full h-fit relative group">
      <input
        type="text"
        className="bg-transparent focus:outline-none pt-[1rem] pr-[1rem] pb-[0.5rem] border-b-[1px] border-white/50 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div
        className={clsx(
          `absolute top-1/2 -translate-y-1/2 pointer-events-none  duration-300`,
          {
            "group-has-[:focus]:text-xs group-has-[:focus]:top-[2px]":
              input === "",
            "text-xs top-[2px]": input !== "",
          }
        )}
      >
        {placeHolder}
      </div>
      <div className="w-[0px] group-has-[:focus]:w-full h-[1px] bg-white absolute left-1/2 -translate-x-1/2 duration-300" />
      <button className="absolute top-1/2 -translate-y-1/2 right-0 p-2">
        <FaAngleRight />
      </button>
    </div>
  );
};

export default FooterInput;
