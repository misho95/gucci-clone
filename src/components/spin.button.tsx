import { GoPlus } from "react-icons/go";

const SpinButton = ({ title }: { title: string }) => {
  return (
    <button className="flex items-center gap-2 group font-semibold">
      <GoPlus className="group-hover:rotate-90 duration-200" />
      <span>{title}</span>
    </button>
  );
};

export default SpinButton;
