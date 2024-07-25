import React from "react";
import GooglePlayStore from "../assets/image13.svg";
import AppleStore from "../assets/image14.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex space-x-12 pl-24">
      <div className="w-24 h-[72px] bg-black flex items-center justify-center">
        <p className="text-white text-[32px] italic font-bold">Logo</p>
      </div>
      <div className="w-full">
        <div className="flex justify-between bg-[#EDEDED] rounded-bl">
          <div className="flex px-5 py-4 gap-x-3">
            <p className=" rounded-xl w-[90px] h-[26px] text-center text-sm text-[#282828] font-bold">
              1800 2666
            </p>
            <p className=" rounded-xl w-[90px] h-[26px] text-center text-sm text-[#282828] font-bold">
              Call Back
            </p>
            <p className="bg-white rounded-xl w-[90px] h-[26px] text-center text-sm text-[#282828] font-bold">
              Live Chat
            </p>
          </div>
          <div className="flex space-x-8 items-center mr-24">
            <button className="bg-[#014579] text-white text-sm font-bold px-5 py-4">
              Become a partner
            </button>
            <button className="w-32 bg-[#DF5759] text-white text-sm font-bold rounded-md py-2">
              Login/Register
            </button>
          </div>
        </div>
        <div>
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
