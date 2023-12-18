import SearchIcon from "../assets/svg/searchIcon.svg";

const SearchBar = () => {
  return (
    <div className="max-sm:hidden max-md:hidden  max-lg:flex border flex justify-between border-black w-2/4">
      <input
        type="text"
        placeholder="Search Products"
        className="w-2/3 focus-visible:outline-0 border border-y-0 p-5 border-r-gray border-l-0 text-2rem"
      />
      <div className="w-1/3 flex justify-end">
        <select className="focus-visible:outline-0 border-0">
          <option>All Categories</option>
        </select>
        <button className="bg-gray-dark px-5 m-1">
          <img src={SearchIcon} alt="magnifier" className="p-15" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
