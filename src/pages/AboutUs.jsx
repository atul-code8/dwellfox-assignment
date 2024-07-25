import Aboutus from "../assets/aboutusbanner.png";
import Image1 from "../assets/image33.png";
import Image2 from "../assets/image32.png";
import Image3 from "../assets/image31.png";
import Target from "../assets/Frame1346.png";
import Design from "../assets/210049364.png"

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
              className="w-full"
              loading="lazy"
            />
            <div className="bg-[#00000072] w-full h-full absolute top-0 mix-blend-multiply"></div>
            <div className="absolute left-0 top-0 mt-20 px-24 w-[745px]">
              <h2 className="text-5xl text-white font-bold">
                Invest in your Tomorrow
              </h2>
              <p className="text-white mt-4">
                Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
                massa tincidunt viverra lectus pulvinar. Nunc ipsum est
                pellentesque turpis ultricies.
              </p>
              <button className="mt-5 bg-[#DF5759] text-white text-lg font-bold px-8 py-3 rounded-lg">
                Get Start
              </button>
            </div>
          </div>
        </section>
        <section className="my-16 flex space-x-5 px-24">
          <div className="w-[823px]">
            <h2 className="text-[40px] font-bold"> About Us </h2>
            <p className="mt-5 text-wrap">
              Established in 2020 by a team of seasoned Chartered Accountants,
              OIA Wealth is a comprehensive Wealth Management firm committed to
              delivering exceptional financial advisory, investment, and wealth
              planning services. Our foundation is built on knowledge and
              integrity, ensuring that our interests are always aligned with
              those of our clients.
            </p>
            <p className="mt-4">
              Introducing "CheerBull," our cutting-edge DIY (Do-It-Yourself)
              digital platform. Leveraging the latest technology, CheerBull
              offers a seamless and fully digital investing and wealth creation
              experience, making investing easy and accessible for everyone,
              with or without an Advisor.
            </p>
          </div>
          <div className="w-[400px] h-[372px] rounded-[20px] shadow-[5px_4px_12px_0px_#00000040] overflow-hidden">
            <img src={Image1} alt="image not found" />
          </div>
        </section>
        <section className="bg-[#F5F5F5]">
          <div className="pt-20">
            <h2 className="text-[40px] font-bold text-center">
              Our Values/We Stands For
            </h2>
            <p className="mt-3 text-center">
              Access the best and comprehensive Service Suite and products for
              your financial goals. Be up to date with your aggregate portfolio,
            </p>
            <div className="mt-8 px-24 flex">
              <div className="w-[527px] h-[400px] rounded-[20px] shadow-[5px_4px_12px_0px_#00000040] overflow-hidden">
                <img src={Image2} alt=""  className="w-full h-full"/>
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <div className="w-[200px]">
                    <img src={Target} alt="" className="w-[200px]"/>
                  </div>
                  <div className="w-full">
                    <h2 className="text-2xl font-bold">Customer Excellence</h2>
                    <p>
                      The new-age technologies summed up with our commitment and
                      dedication has made us a trusted partner to our clients{" "}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div  className="w-[200px]">
                    <img src={Target} alt=""  className="w-[200px]"/>
                  </div>
                  <div className="w-full">
                    <h2 className="text-2xl font-bold">Technology Driven</h2>
                    <p>
                      We have introduced a new podium for tech-savvy millennials
                      and Genz that are venturing into the financial
                      marketplace.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[200px]">
                    <img src={Target} alt="" className="w-[200px]"/>
                  </div>
                  <div className="w-full">
                    <h2 className="text-2xl font-bold">Transparency</h2>
                    <p>We believe in transparency at every step of your investment process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[716px] px-24">
              <h2 className="text-[40px] font-semibold">Why Start Investing?</h2>
              <p className="mt-3">Access the best and comprehensive Service Suite and products for your financial goals. Be up to date with your aggregate portfolio, and execute transactions seamlessly with no extra charges. Access the best and comprehensive Service Suite and products for your financial goals. Be up to date with your aggregate portfolio, and execute transactions seamlessly with no extra charges</p>
              <h3 className="text-lg font-medium mt-2">

              24x7 Reporting
              </h3>
              <p>
              A comprehensive reporting of your portfolio
              </p>
              <h3 className="text-lg font-medium mt-2">

                Your own Technology
              </h3>
              <p>
              A self learning portal that guides you and knows what’s best for you</p>
              <h3 className="text-lg font-medium mt-2">

                Partner Support
              </h3>
              <p>
              A registered and trained partner available at your service 24×7</p>
            </div>

            <div className="w-[527px] h-[512px] rounded-[20px] shadow-[5px_4px_12px_0px_#00000040] overflow-hidden">
              <img src={Image3} alt="" />
            </div>
          </div>
        </section>
        <section className="mt-28">
          <div className="bg-gradiant h-[274px] relative overflow-hidden">
            <img src={Design} alt=""  className="w-full mix-blend-multiply"/>
            <div className="absolute z-10 text-white top-0 left-0  px-24 py-5">
              <h2 className="text-[40px] font-semibold">Want to Join Us?</h2>
              <p className="mt-3">Access the best and comprehensive Service Suite and products for your financial goals. Be up to date with your aggregate portfolio, and execute transactions seamlessly with no extra charges.</p>
              <button type="button" className="bg-[#DF5759] text-white mt-7 text-lg font-bold px-8 py-3 rounded-lg">Get Start</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
