import Menu from "../assets/svg/menu.svg";
import DownArrow from "../assets/svg/downArrow.svg";
import Helper from "../assets/svg/headPhone.svg";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-dark px-10 max-sm:hidden sm:hidden md:flex xl:flex justify-between">
      <button className="bg-red lg:text-1.8rem xl:text-2.4rem flex text-white items-center gap-4 p-4">
        <img src={Menu} alt="menu" /> All Categories
        <img src={DownArrow} alt="arrow" />
      </button>
      <nav className="items-center flex w-1/2">
        <ul className="text-white lg:text-1.4rem xl:text-1.6rem flex justify-evenly uppercase w-full">
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="flex gap-4 items-center">
        <img src={Helper} alt="help" className="w-12 h-12" />
        <div className="text-white flex flex-col">
          <span className="lg:text-1.3rem xl:text-1.5rem  whitespace-nowrap font-light">
            Contact Us 24/7
          </span>
          <span className="lg:text-1.6rem xl:text-1.8rem">+12012987481</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
