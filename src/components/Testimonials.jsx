import React from "react";
import Vector from "../assets/vector.svg";

const Testimonials = () => {
  return (
    <div className="mb-[176px]">
      <div className="bg-[#F5F5F5] pb-[142px]">
        <h2 className="text-[40px] font-bold text-center">Testimonials</h2>
        <p className="text-base text-[#6A6A6A] text-center">
          Access the best and comprehensive Service Suite and products for your
          financial goals. Be up <br /> to date with your aggregate portfolio,
        </p>
        <div className="flex gap-x-4">
          <div className="bg-white w-[502px] h-[281px] shadow-[5px_3px_51px_0px_#00000026] rounded-lg mt-5 text-base font-light px-[26px] py-[34px]">
            <p className="w-[429px] text-start">
              I have been using Upstox for over 5 years now and it has provided
              me with an awesome experience and excellent customer support.
              Thanks to Upstox, I have also gained a lot of knowledge about
              stock market.
            </p>
            <img src={Vector} alt="image not found" className="mt-9" />
            <p className="text-lg font-medium mt-3">Prabhakar Dutta</p>
            <p className="text-[#652623] text-xs font-semibold">
              TRADING ON UPSTOX SINCE 2018
            </p>
          </div>
          <div className="bg-white w-[502px] h-[281px] shadow-[5px_3px_51px_0px_#00000026] rounded-lg mt-5 text-base font-light px-[26px] py-[34px]">
            <p className="w-[429px] text-start">
              I have been using Upstox for over 5 years now and it has provided
              me with an awesome experience and excellent customer support.
              Thanks to Upstox, I have also gained a lot of knowledge about
              stock market.
            </p>
            <img src={Vector} alt="image not found" className="mt-9" />
            <p className="text-lg font-medium mt-3">Prabhakar Dutta</p>
            <p className="text-[#652623] text-xs font-semibold">
              TRADING ON UPSTOX SINCE 2018
            </p>
          </div>
          <div className="bg-white w-[502px] h-[281px] shadow-[5px_3px_51px_0px_#00000026] rounded-lg mt-5 text-base font-light px-[26px] py-[34px]">
            <p className="w-[429px] text-start">
              I have been using Upstox for over 5 years now and it has provided
              me with an awesome experience and excellent customer support.
              Thanks to Upstox, I have also gained a lot of knowledge about
              stock market.
            </p>
            <img src={Vector} alt="image not found" className="mt-9" />
            <p className="text-lg font-medium mt-3">Prabhakar Dutta</p>
            <p className="text-[#652623] text-xs font-semibold">
              TRADING ON UPSTOX SINCE 2018
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradiant w-full h-[331px] relative">
        {/* <img src={Banner} alt="banner not found" className='w-full top-[142px]'/> */}
        <div
          className="w-[977px] h-[217px] bg-white rounded-2xl absolute -bottom-1/3 left-1/2 -translate-x-1/2 shadow-[3px_4px_15px_0px_#00000026] flex gap-x-8 items-center justify-center"
        >
            <h2 className="text-3xl font-bold w-[257px]">Sign up to receive 
            our latest news</h2>
            <div className="flex gap-x-6">
                <input type="text" className="h-[60px] py-[18px] px-[50px] border-[1.5px] border-[#C4C4C4] rounded-lg" placeholder="Enter your email"/>
                <button type="button" className="h-[60px] rounded-lg bg-[#DF5759] text-white px-12 py-3 text-[22px] font-medium">Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
