import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes("all-products")) {
      setShowSearch(false); 
    }
  }, [location, setShowSearch]); 

  if (!location.pathname.includes("all-products") || !showSearch) {
    return null; 
  }

  return (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="w-4" />
      </div>
      <MdCancel
        className="inline w-6 h-6 cursor-pointer"
        onClick={() => setShowSearch(false)} // Close search when clicked
      />
    </div>
  );
};

export default SearchBar;
