import { RiSearch2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-transparent font-gucci">
      <div>
        <button className="size-[24px]">
          <RiSearch2Line className="size-[16px]" />
        </button>
        <div>
          <button className="size-[24px]">
            <RxHamburgerMenu className="size-[16px]" />
          </button>
          <span className="uppercase font-inherit">menu</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
