import Heart from "../assets/svg/heart.svg";
import Cart from "../assets/svg/bi_cart.svg";
import Magnifier from "../assets/svg/magnifier.svg";
import User from "../assets/svg/user.svg"
import Hamburg from "../assets/svg/hamburger.svg"
const HeaderWizard = () => {
  return (
    <div>
      <ul className="flex gap-4 text-2rem leading-normal items-start ">
        <li className="sm:flex md:flex lg:hidden xl:hidden ">
          <button className="border-0" title="Cart">
            <img src={Magnifier} alt="Magnifier" className="invert opacity-50 w-9" />
          </button>
        </li>
        <li className="sm:flex md:flex lg:hidden xl:hidden ">
          <button className="border-0" title="Cart">
            <img src={User} alt="Login" className="w-9" />
          </button>
        </li>
        <li className="sm:hidden md:hidden lg:flex">Login</li>
        <li className="sm:hidden md:hidden lg:flex">Signup</li>
        <li>
          <button className="border-0" title="Like">
            <img src={Heart} alt="heart" className="w-9  max-sm:opacity-50 max-md:opacity-50 lg:opacity-100" />
          </button>
        </li>
        <li>
          <button className="border-0 relative mr-3" title="Cart">
            <img src={Cart} alt="Cart"  className="w-9  max-sm:opacity-50 max-md:opacity-50 lg:opacity-100"/>
            <span className="absolute bg-red text-white text-1.2rem rounded-full block w-8 h-8 -top-2 -right-3 pt-1">6</span>
          </button>
        </li>
        <li className="sm:flex md:flex lg:hidden xl:hidden">
          <button className="border-0 bg-red w-14 h-14 relative -top-3 ">
            <img src={Hamburg} alt="Magnifier" className="w-9 m-auto" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderWizard;
