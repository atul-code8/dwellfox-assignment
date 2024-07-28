import React from "react";
import Vector from "../assets/vector.svg";
import Ellipse from "../assets/Group20.png";
import Figure from "../assets/Figure1.png";
import Google from "../assets/g-ply-icon.png";
import Apple from "../assets/ios_icon.png"

const Testimonials = () => {
  return (
    <div className="mb-[176px]">
      <div className="bg-[#F5F5F5] pb-[142px] pt-16">
        <h2 className="text-3xl md:text-[40px] font-semibold md:font-bold text-center">Testimonials</h2>
        <p className="text-base text-[#6A6A6A] text-center px-4 md:px-0">
          Access the best and comprehensive Service Suite and products for your
          financial goals. Be up <br /> to date with your aggregate portfolio,
        </p>
        <div className="flex flex-col md:flex-row gap-x-4 2xl:overflow-x-scroll overflow-x-auto pb-8">
          <div className="bg-white w-[90%] mx-auto h-auto md:w-[502px] md:h-[281px] shadow-[5px_3px_51px_0px_#00000026] rounded-lg mt-5 text-base font-light px-[26px] py-[34px]">
            <p className=" md:w-[429px] text-start">
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
          <div className="bg-white w-[90%] mx-auto h-auto md:w-[502px] md:h-[281px] shadow-[5px_3px_51px_0px_#00000026] rounded-lg mt-5 text-base font-light px-[26px] py-[34px]">
            <p className="md:w-[429px] text-start">
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
          <div className="bg-white w-[90%] mx-auto h-auto md:w-[502px] md:h-[281px] shadow-[5px_3px_51px_0px_#00000026] rounded-lg mt-5 text-base font-light px-[26px] py-[34px]">
            <p className="md:w-[429px] text-start">
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
      <div className="bg-gradiant w-full h-[342px] relative text-center px-4 md:px-24">
        <img src={Ellipse} alt="" className="inline-block mix-blend-overlay" />
        <img src={Figure} alt="" className="absolute bottom-0 xl:right-20 md:right-4 w-[300px] md:w-[500px] lg:w-auto" />
        <div className="absolute top-0 flex md:flex-col lg:flex-row md:gap-x-11 gap-x-2">
          <h2 className="w-32 text-xl md:text-3xl xl:text-4xl font-semibold text-white sm:w-[333px] text-start pt-4 xl:pt-16">
            Download One of India's Best Trading Apps
          </h2>
          <div className="xl:pt-20 pt-5">
            <img src={Google} alt="" />
            <img src={Apple} alt="" className="mt-2"/>
          </div>
        </div>
        <div className="w-4/5 h-34 lg:w-[977px] lg:h-[217px] bg-white rounded-2xl absolute -bottom-1/3 left-1/2 -translate-x-1/2 shadow-[3px_4px_15px_0px_#00000026] flex gap-x-8 items-center justify-center flex-col lg:flex-row pb-8">
          <h2 className="text-xl md:text-3xl font-bold lg:w-[257px] mt-2">
            Sign up to receive our latest news
          </h2>
          <div className="flex md:flex-row flex-col gap-y-2 gap-x-6 mt-4">
            <input
              type="text"
              className="h-auto lg:h-[60px] py-2 lg:py-[18px] px-4 lg:px-[50px] border-[1.5px] border-[#C4C4C4] rounded-lg"
              placeholder="Enter your email"
            />
            <button
              type="button"
              className="h-auto lg:h-[60px] rounded-lg bg-[#DF5759] text-white px-8 py-1 lg:px-12 lg:py-3 text-lg lg:text-[22px] font-medium"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
