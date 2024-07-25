import React from "react";

const Header = () => {
  return (
    <nav className="flex space-x-12">
      <div className="w-24 h-[72px] bg-black flex items-center justify-center">
        <p className="text-white text-[32px] italic font-bold">
          Logo
        </p>
      </div>
      <div className="w-full">
        <div className="flex justify-between bg-[#EDEDED] rounded-bl">
          <div className="flex px-5 py-4 ">
            <p>1800 2666</p>
            <p>callback</p>
            <p>live chat</p>
          </div>
          <div className="flex space-x-8 items-center mr-24">
            <button className="bg-[#014579] text-white text-sm font-bold px-5 py-4">Become a partner</button>
            <button className="w-32 bg-[#DF5759] text-white text-sm font-bold rounded-md py-2">Login/Register</button>
          </div>
        </div>
        <div>
          <ul className="flex space-x-6 py-3 text-sm">
            <li className="text-[#F47B20] font-medium">Home</li>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Mutual Funds/SIP</li>
            <li>Insurance</li>
            <li>Succession & Will</li>
            <li>Track Porfolio Free!!</li>
            <li>Goal Calculator</li>
            <li>Download mobile app -</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
