import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-8 font-medium">
      <Link to="/" className="text-2xl font-bold">
        Mirico Ri Coli
      </Link>

      <ul className="hidden gap-5 sm:flex text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700  hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/all-products"
          className="flex flex-col items-center gap-1"
        >
          <p>ALL PRODUCTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <FaSearch
          onClick={() => setShowSearch(true)}
          className="w-8 cursor-pointer"
        />

        <div className="group relative">
          <Link to={'/login'}>
            <CgProfile className="w-8 cursor-pointer" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-o pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-sm">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <FaCartShopping className="w-8 min-w-8" />

          <p className="absolute right-[-5px] bottom-[-5px] w-4 h-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px] flex items-center justify-center z-10">
            {getCartCount()}
          </p>
        </Link>

        <MdMenu
          onClick={() => setOpenMenu(true)}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          openMenu ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setOpenMenu(false)}
            className="flex cursor-pointer items-center gap-4 p-3"
          >
            <IoIosArrowDropdown className="h-4 rotate-180" />

            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setOpenMenu(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setOpenMenu(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            ALL PRODUCTS
          </NavLink>
          <NavLink
            onClick={() => setOpenMenu(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setOpenMenu(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
