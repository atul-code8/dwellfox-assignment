import {useState} from "react";
import GooglePlayStore from "../assets/image13.svg";
import AppleStore from "../assets/image14.svg";
import { Link } from "react-router-dom";
import Hamburger from "../assets/hamburger.svg"

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex space-x-2 md:space-x-5 xl:space-x-12 md:pl-4 xl:pl-24 overflow-x-scroll md:overflow-x-auto">
      <div className="hidden md:flex w-14 h-12 md:w-24 md:h-[72px] bg-black  items-center justify-center my-2 px-2 md:px-0">
        <p className="text-white text-2xl md:text-[32px] italic font-bold">Logo</p>
      </div>
      <div className="inline-block xl:hidden mt-3">
        <div onClick={toggleDropdown} className="cursor-pointer w-[20px] md:w-[50px]">
        <img src={Hamburger} alt=""  className="w-[20px] md:w-[50px]"/>
        </div>
        <div className={`${dropdownOpen ? 'block' : "hidden"} absolute left-0 top-11 md:top-20 w-full bg-white z-50 py-2`}>
          <ul className="flex flex-wrap justify-center gap-y-4 space-x-6 py-3 text-sm px-3">
            <Link to="/" className="text-[#F47B20] font-medium">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Our Products</Link>
            <Link to="/sip">Mutual Funds/SIP</Link>
            <Link to="/insurance">Insurance</Link>
            <Link to="/succession">Succession & Will</Link>
            <Link to="/portfolio">Track Porfolio Free!!</Link>
            <Link to="calculator">Goal Calculator</Link>
            <div className="flex space-x-2">
              <p className="font-bold">Download mobile app -</p>
              <img src={GooglePlayStore} alt="" />
              <img src={AppleStore} alt="" />
            </div>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center justify-between py-2 md:py-0 bg-[#EDEDED] rounded-bl">
          <div className="flex px-2 md:px-5 md:py-4 gap-x-2 md:gap-x-3">
            <p className="md:w-[90px] md:h-[26px] text-xs md:text-sm text-[#282828] font-medium md:font-bold">
              1800 2666
            </p>
            <p className=" md:w-[90px] md:h-[26px] text-xs md:text-sm text-[#282828] font-medium md:font-bold">
              Call Back
            </p>
            <p className="md:w-[90px] md:h-[26px] text-xs md:text-sm text-[#282828] font-medium md:font-bold">
              Live Chat
            </p>
          </div>
          <div className="flex ml-2 md:ml-0 space-x-8 items-center md:mr-24">
            <button className="hidden lg:inline-block bg-[#014579] text-white text-xs md:text-sm font-bold  md:px-2 md:py-3 lg:px-5 lg:py-4">
              Become a partner
            </button>
            <button className="w-32 bg-[#DF5759] text-white text-xs md:text-sm font-medium md:font-bold rounded-md py-2">
              Login/Register
            </button>
          </div>
        </div>
        <div className="hidden xl:block">
          <ul className="flex space-x-6 py-3 text-sm">
            <Link to="/" className="text-[#F47B20] font-medium">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Our Products</Link>
            <Link to="/sip">Mutual Funds/SIP</Link>
            <Link to="/insurance">Insurance</Link>
            <Link to="/succession">Succession & Will</Link>
            <Link to="/portfolio">Track Porfolio Free!!</Link>
            <Link to="calculator">Goal Calculator</Link>
            <div className="flex space-x-2">
              <p className="font-bold">Download mobile app -</p>
              <img src={GooglePlayStore} alt="" />
              <img src={AppleStore} alt="" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
