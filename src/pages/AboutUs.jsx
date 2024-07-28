import Aboutus from "../assets/aboutusbanner.png";
import Image1 from "../assets/image33.png";
import Image2 from "../assets/image32.png";
import Image3 from "../assets/image31.png";
import Target from "../assets/Frame1346.png";
import Design from "../assets/210049364.png";
import Pattern from "../assets/Group.png";
import Ellipse from "../assets/Group20.png";

const AboutUs = () => {
  return (
    <>
      <main>

        <section>
          <div className="bg-[#C12529] text-white py-1 px-10">
            <p className="text-[13px]">Home / About Us</p>
          </div>
          <div className="relative">
            <img
              src={Aboutus}
              alt="banner not found"
              className="w-full min-h-52"
              loading="lazy"
            />
            <div className="bg-[#00000072] w-full h-full absolute top-0 mix-blend-multiply"></div>
            <div className="w-full absolute left-0 top-2 md:top-10 px-4 md:px-20 mt-6  lg:top-14 xl:mt-20  lg:px-24 xl:w-[745px]">
              <h2 className="text-3xl lg:text-5xl text-white font-bold px-2">
                Invest in your Tomorrow
              </h2>
              <p className="text-white text-xs xl:text-base mt-2 xl:mt-4 w-screen px-2">
                Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
                massa tincidunt viverra lectus pulvinar. Nunc ipsum est
                pellentesque turpis ultricies.
              </p>
              <button className="xl:mt-5 mt-3 bg-[#DF5759] text-white text-sm xl:text-lg font-medium xl:font-bold xl:px-8 xl:py-3 px-4 py-1 rounded xl:rounded-lg">
                Get Start
              </button>
            </div>
          </div>
        </section>

        <section className="my-16 flex flex-col xl:flex-row space-x-5 px-4 md:px-20 lg:px-24">
          <div className="w-auto lg:w-[823px]">
            <h2 className="md:text-[40px] text-3xl font-semibold md:font-bold"> About Us </h2>
            <p className="w-full mt-5 xl:w-auto px-2">
              Established in 2020 by a team of seasoned Chartered Accountants,
              OIA Wealth is a comprehensive Wealth Management firm committed to
              delivering exceptional financial advisory, investment, and wealth
              planning services. Our foundation is built on knowledge and
              integrity, ensuring that our interests are always aligned with
              those of our clients.
            </p>
            <p className="w-full mt-4 xl:w-auto px-2">
              Introducing "CheerBull," our cutting-edge DIY (Do-It-Yourself)
              digital platform. Leveraging the latest technology, CheerBull
              offers a seamless and fully digital investing and wealth creation
              experience, making investing easy and accessible for everyone,
              with or without an Advisor.
            </p>
          </div>
          <div className="w-4/5 sm:w-[400px] mx-auto h-auto xl:h-[372px] rounded-[20px] shadow-[5px_4px_12px_0px_#00000040] overflow-hidden mt-4 xl:mt-0">
            <img src={Image1} alt="image not found" className="w-full" />
          </div>
        </section>

        <section className="bg-[#F5F5F5] pb-10">
          <div className="pt-20">
            <h2 className="text-3xl md:text-[40px] font-semibold md:font-bold text-center px-4 md:px-0">
              Our Values/We Stands For
            </h2>
            <p className="mt-3 text-center px-2">
              Access the best and comprehensive Service Suite and products for
              your financial goals. Be up to date with your aggregate portfolio,
            </p>
            <div className="mt-8 xl:px-24 flex flex-col xl:flex-row">
              <div className="w-4/5 sm:w-[527px] mx-auto h-auto xl:h-[400px] rounded-[20px] shadow-[5px_4px_12px_0px_#00000040] overflow-hidden">
                <img src={Image2} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col mt-8 xl:mt-0">
                <div className="flex">
                  <div className="xl:w-[200px]">
                    <img src={Target} alt="" className="w-[200px]" />
                  </div>
                  <div className="w-full">
                    <h2 className="text-lg md:text-2xl font-bold">
                      Customer Excellence
                    </h2>
                    <p>
                      The new-age technologies summed up with our commitment and
                      dedication has made us a trusted partner to our clients{" "}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[200px]">
                    <img src={Target} alt="" className="w-[200px]" />
                  </div>
                  <div className="w-full">
                    <h2 className="text-lg md:text-2xl font-bold">
                      Technology Driven
                    </h2>
                    <p>
                      We have introduced a new podium for tech-savvy millennials
                      and Genz that are venturing into the financial
                      marketplace.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[200px]">
                    <img src={Target} alt="" className="w-[200px]" />
                  </div>
                  <div className="w-full">
                    <h2 className="text-lg md:text-2xl font-bold">
                      Transparency
                    </h2>
                    <p>
                      We believe in transparency at every step of your
                      investment process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row">
            <div className="xl:w-[716px] px-4 xl:px-24 mt-4">
              <h2 className="text-3xl sm:text-[40px] font-semibold md:font-bold">
                Why Start Investing?
              </h2>
              <p className="mt-3">
                Access the best and comprehensive Service Suite and products for
                your financial goals. Be up to date with your aggregate
                portfolio, and execute transactions seamlessly with no extra
                charges. Access the best and comprehensive Service Suite and
                products for your financial goals. Be up to date with your
                aggregate portfolio, and execute transactions seamlessly with no
                extra charges
              </p>
              <h3 className="text-lg font-medium mt-2">24x7 Reporting</h3>
              <p>A comprehensive reporting of your portfolio</p>
              <h3 className="text-lg font-medium mt-2">Your own Technology</h3>
              <p>
                A self learning portal that guides you and knows what’s best for
                you
              </p>
              <h3 className="text-lg font-medium mt-2">Partner Support</h3>
              <p>
                A registered and trained partner available at your service 24×7
              </p>
            </div>

            <div className="w-4/5 sm:w-[527px] mx-auto h-auto xl:h-[512px] rounded-[20px] shadow-[5px_4px_12px_0px_#00000040] overflow-hidden mt-4 xl:mt-0">
              <img src={Image3} alt="" />
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="bg-gradiant h-[142px] xl:h-[274px] relative overflow-hidden">
            <img src={Design} alt="" className="w-full mix-blend-multiply" />
            <div className="absolute z-10 text-white top-0 md:px-24 px-4 xl:py-5 xl:w-1/2">
              <h2 className="text-xl xl:text-[40px] font-semibold">
                Want to Join Us?
              </h2>
              <p className="mt-3 text-xs xl:text-base">
                Access the best and comprehensive Service Suite and products for
                your financial goals. Be up to date with your aggregate
                portfolio, and execute transactions seamlessly with no extra
                charges.
              </p>
              <button
                type="button"
                className="bg-[#DF5759] text-white xl:mt-7 xl:text-lg xl:font-bold xl:px-8 xl:py-3 px-4 py-1 text-xs font-medium mt-2 rounded-lg"
              >
                Get Start
              </button>
            </div>
          </div>
        </section>

        <section className="min-h-[315px]">
          <div className="relative px-24 bg-[#F5F5F5] overflow-hidden min-h-[315px]">
            <img src={Pattern} alt="" className="w-full" />
            <img src={Ellipse} alt="" className="absolute top-0 left-[18%]" />
            <div className="absolute top-0 z-10 left-0 w-full">
              <h2 className="mt-5 sm:mt-10 xl:mt-16 text-center text-3xl md:text-[40px] font-semibold">
                Legacy of Committed Excellence
              </h2>
              <p className="text-center xl:w-[716px] mx-auto mt-2 px-4 md:px-0">
                Access the best and comprehensive Service Suite and products for
                your financial goals. Be up to date with your aggregate
                portfolio,
              </p>
              <div className="mt-4 md:mt-11 flex gap-x-2 md:gap-x-6 px-4 sm:px-24 mx-auto">
                <div className="w-[142px] h-[100px] lg:w-[293px] lg:h-[152px] bg-white rounded-2xl shadow-[24px_30px_51px_0px_#0000001A] flex flex-col justify-center items-center">
                  <h3 className="text-[#DF5759] text-lg md:text-3xl lg:text-[50px] font-bold">
                    20+
                  </h3>
                  <p className="text-[#323232] text-xs md:text-sm lg:text-xl font-semibold mt-2 text-center">
                    Year Exprience
                  </p>
                </div>
                <div className="w-[142px] h-[100px] lg:w-[293px] lg:h-[152px] bg-white rounded-2xl shadow-[24px_30px_51px_0px_#0000001A] flex flex-col justify-center items-center">
                  <h3 className="text-[#DF5759] text-lg md:text-3xl lg:text-[50px] font-bold">
                    5k
                  </h3>
                  <p className="text-[#323232] text-xs md:text-smlg:text-xl  font-semibold mt-2 text-center">
                    Happy Clients
                  </p>
                </div>
                <div className="w-[142px] h-[100px] lg:w-[293px] lg:h-[152px] bg-white rounded-2xl shadow-[24px_30px_51px_0px_#0000001A] flex flex-col justify-center items-center">
                  <h3 className="text-[#DF5759] text-lg md:text-3xl lg:text-[50px] font-bold">
                    99.9%
                  </h3>
                  <p className="text-[#323232] text-xs md:text-sm lg:text-xl  font-semibold mt-2 text-center">
                    Successfull Projects
                  </p>
                </div>
                <div className="w-[142px] h-[100px] lg:w-[293px] lg:h-[152px] bg-white rounded-2xl shadow-[24px_30px_51px_0px_#0000001A] flex flex-col justify-center items-center">
                  <h3 className="text-[#DF5759] text-lg md:text-3xl lg:text-[50px] font-bold">
                    520+
                  </h3>
                  <p className="text-[#323232] text-xs md:text-sm lg:text-xl  font-semibold mt-2 text-center">
                    Expert Staff
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default AboutUs;
