import EshopLogo from "../assets/svg/eSHOP-logo.svg";
import SearchBar from "../components/SearchBar"
import HeaderWizard from "./HeaderWizard";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-12">
      <div className="sm:w-1/2 md:w-1/6 align-middle	">
        <img src={EshopLogo} alt="eShop" className="max-sm:w-24 max-md:w-24 max-lg:w-48" />
      </div>
      <SearchBar />
      <HeaderWizard />
    </header>
  );
};

export default Header;
