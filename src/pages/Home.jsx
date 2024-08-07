import HomeBanner from "../assets/headerbanner.png";
import SVG1 from "../assets/SVG1.svg";
import SVG2 from "../assets/SVG2.svg";
import SVG3 from "../assets/SVG3.svg";
import SVG4 from "../assets/SVG4.svg";
import SVG5 from "../assets/SVG5.svg";
import SVG6 from "../assets/SVG6.svg";
import Banner from "../assets/6764555_3433823.png";
import Bank from "../assets/Group_772542613.png";
import Design from "../assets/210049364.png";
import Maskgroup1 from "../assets/Maskgroup.png";
import Maskgroup2 from "../assets/Maskgroup2.png";
import Maskgroup3 from "../assets/Maskgroup3.png";
import Maskgroup4 from "../assets/Maskgroup4.png";
import Maskgroup5 from "../assets/Maskgroup5.png";
import Maskgroup6 from "../assets/Maskgroup6.png";

const Home = () => {
  return (
    <>
      <main>

        <section>
          <div className="bg-[#C12529] text-white py-1 px-10">
            <p className="text-[13px]">Home / Mutual Funds</p>
          </div>
          <div className="relative">
            <img
              src={HomeBanner}
              alt="banner not found"
              className="w-full min-h-[480px] md:min-h-[300px]"
              loading="lazy"
            />
            <div className="bg-[#00000072] w-full h-full absolute top-0 mix-blend-multiply"></div>
            <div className="w-full z-10 absolute top-6 left-0 lg:top-8 2xl:top-16 px-10">
              <div className="flex flex-col md:flex-row md:space-x-10 lg:space-x-32 md:items-center">
                <div className="bg-gradiant h-[222px]  lg:w-[440px] lg:h-[308px] xl:w-[544px] xl:h-[401px] rounded-[10px] px-10">
                  <form className="py-5 lg:py-10 flex flex-col gap-y-2 lg:gap-y-4 xl:gap-y-7">
                    <input
                      type="text"
                      className="shadow-[0px_1px_2px_1px_#0A0A0A1A_inset] rounded xl:rounded-lg p-2 xl:p-4 xl:text-base font-medium outline-none border-none text-sm px-2"
                      placeholder="Enter Full Name"
                    />
                    <div className="flex bg-white rounded xl:rounded-lg overflow-hidden">
                      <p className="w-11 bg-[#FFDCDC] text-[#6A7582] text-center text-sm xl:text-base py-1 xl:py-4">
                        +91
                      </p>
                      <input
                        type="text"
                        className="w-full shadow-[0px_1px_2px_1px_#0A0A0A1A_inset] p-2 xl:p-4 xl:text-base font-medium outline-none border-none text-sm px-2"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                    <input
                      type="text"
                      className="shadow-[0px_1px_2px_1px_#0A0A0A1A_inset] rounded xl:rounded-lg p-2 xl:p-4 xl:text-base font-medium outline-none border-none text-sm px-2"
                      placeholder="Select City"
                    />
                    <button
                      type="button"
                      className="bg-[#DF5759] text-white uppercase text-xs p-2 xl:p-4 rounded xl:rounded-lg outline-none border-none mt-2"
                    >
                      Invest Now
                    </button>
                  </form>
                </div>
                <div className="w-full md:w-2/3 lg:w-[535px] mt-4">
                  <h2 className="text-3xl xl:text-[40px] font-bold text-white">
                    Mutual Funds
                  </h2>
                  <p className="text-white text-sm xl:text-base text-wrap mt-[10px]">
                    Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend
                    proin massa tincidunt viverra lectus pulvinar. Nunc ipsum
                    est pellentesque turpis ultricies.
                  </p>
                  <button
                    type="button"
                    className="bg-[#DF5759] text-white mt-5 md:mt-7 text-lg font-bold px-5 md:px-8 py-2 md:py-3 rounded-lg"
                  >
                    Get Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="xl:px-[135px] py-[25px]">
          <div className="bg-[#F5F5F5] py-16">
            <h2 className="text-[40px] font-bold text-center">
              Explore Mutual Funds
            </h2>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 xl:px-[232px] mt-8">
              <div className="w-[236px] h-[123px] bg-white shadow-[1px_3px_4px_0px_#0000001A] cursor-pointer text-center">
                <img src={SVG1} alt="svg not found" className="inline-block" />
                <p>Mid Cap Funds</p>
              </div>
              <div className="w-[236px] h-[123px] hover:bg-white hover:shadow-[1px_3px_4px_0px_#0000001A] cursor-pointer text-center">
                <img src={SVG2} alt="svg not found" className="inline-block" />
                <p>Index Funds</p>
              </div>
              <div className="w-[236px] h-[123px] hover:bg-white hover:shadow-[1px_3px_4px_0px_#0000001A] cursor-pointer text-center">
                <img src={SVG3} alt="svg not found" className="inline-block" />
                <p>Arbitrage Funds</p>
              </div>
              <div className="w-[236px] h-[123px] hover:bg-white hover:shadow-[1px_3px_4px_0px_#0000001A] cursor-pointer text-center">
                <img src={SVG4} alt="svg not found" className="inline-block" />
                <p>Multi Cap Fund</p>
              </div>
              <div className="w-[236px] h-[123px] hover:bg-white hover:shadow-[1px_3px_4px_0px_#0000001A] cursor-pointer text-center">
                <img src={SVG5} alt="svg not found" className="inline-block" />
                <p>Small Cap Funds</p>
              </div>
              <div className="w-[236px] h-[123px] hover:bg-white hover:shadow-[1px_3px_4px_0px_#0000001A] cursor-pointer text-center">
                <img src={SVG6} alt="svg not found" className="inline-block" />
                <p>ELSS Funds</p>
              </div>
            </div>
            <p className="text-[#DF5759] text-center mt-9 cursor-pointer uppercase">
              Explore All
            </p>
          </div>
        </section>

        <section className="relative w-full h-[1200px] xl:h-auto">
          <div className="w-full">
            <img
              src={Banner}
              alt="banner not found"
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="absolute left-0 top-0 w-full">
            <div className="w-full mt-4 xl:mt-[77px] px-4 md:px-0">
              <h2 className="text-center text-3xl md:text-[40px] text-[#3C3C3C] font-bold">
                How to Invest in Mutual Fund
              </h2>
              <p className="text-center mt-2">
                Access the best and comprehensive Service Suite and products for
                your financial goals. Be up to date with your aggregate
                portfolio.
              </p>
            </div>
            <div className="w-10/12 md:w-2/3 xl:w-[1246px] mx-auto border-[1px] border-[#C1C1C1] rounded-2xl flex flex-wrap mt-11 overflow-hidden">
              <div className="w-full xl:w-[622px] h-[195px] bg-white p-9">
                <div className="flex space-x-2">
                  <button className="bg-[#DF5759] rounded-full text-white w-[40px] h-[40px] p-4 flex items-center justify-center border-none outline-none">
                    1.
                  </button>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold">Open CheerBull App</h2>
                    <p className="text-xs mt-2">
                      The free portfolio tracker tool from Value Research -
                      track your stocks, mutual funds, NPS holdings and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[622px] h-[195px] bg-[#D9D9D9] p-9">
                <div className="flex space-x-2 ">
                  <button className="bg-[#DF5759] rounded-full text-white w-[40px] h-[40px] p-4 flex items-center justify-center border-none outline-none">
                    2.
                  </button>
                  <div>
                    <h2 className="sm:text-xl text-lg font-bold">
                      Find the Fund You Want to Invest
                    </h2>
                    <p className="text-xs mt-2">
                      A Systematic Investment Plan (SIP) Calculator helps
                      ascertain the estimated returns on investing in an SIP
                      scheme for a period of time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[622px] h-auto md:h-[195px] bg-[#D9D9D9] p-9">
                <div className="flex space-x-2">
                  <button className="bg-[#DF5759] rounded-full text-white w-[40px] h-[40px] p-4 flex items-center justify-center border-none outline-none">
                    3.
                  </button>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold">Make Your Investment</h2>
                    <p className="text-xs mt-2">
                      Mutual funds are highly liquid investments, which means
                      that investors can easily buy and sell their units at any
                      time. Mutual funds are highly liquid investments, which
                      means that investors can easily buy and sell their units
                      at any time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[622px] h-[195px] bg-white p-9">
                <div className="flex space-x-2">
                  <button className="bg-[#DF5759] rounded-full text-white w-[40px] h-[40px] p-4 flex items-center justify-center border-none outline-none">
                    4.
                  </button>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold">Invest & Track</h2>
                    <p className="text-xs mt-2">
                      The free portfolio tracker tool from Value Research -
                      track your stocks, mutual funds, NPS holdings and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden">
          <div className="bg-gradiant h-auto lg:h-[445px] text-white flex flex-col lg:flex-row items-center  px-8 lg:px-24">
            <div className="z-10">
              <h2 className="text-lg lg:text-[40px] font-bold mt-4">
                View 15+ Mutual Fund <br />
                Partners
              </h2>
              <p className="mt-6">
                Access the best and comprehensive Service Suite and products for
                your financial goals. Be up to date with your aggregate
                portfolio.
              </p>
              <p className="text-[#DF5759] text-base lg:text-xl font-medium mt-6">
                View All Mutual Fund Partners →
              </p>
            </div>
            <div>
              <img src={Bank} alt="image not found" />
            </div>
          </div>
          <img
            src={Design}
            alt="not found"
            className="absolute w-full top-0 left-0 mix-blend-multiply -z-100"
            loading="lazy"
          />
        </section>

        <section>
          <div className="px-8 lg:px-24 mt-10">
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#3C3C3C]">
              Mutual Fund Calculators
            </h2>
            <div className="flex flex-wrap gap-x-[66px] gap-y-7 mt-5">
              <div className="bg-[#ffd2d360] border border-[#FFD2D3] w-[371px] h-[70px] rounded-lg shadow-[0px_8px_17px_0px_#00000008] flex items-center space-x-2 px-2">
                <img src={Maskgroup1} alt="" />
                <p className="text-[#DF5759] text-xl font-semibold">Sip Calculator</p>
              </div>
              <div className="bg-[#ffd2d360] border border-[#FFD2D3] w-[371px] h-[70px] rounded-lg shadow-[0px_8px_17px_0px_#00000008] flex items-center space-x-2 px-2">
              <img src={Maskgroup2} alt="" />

                <p className="text-[#DF5759] text-xl font-semibold">Lumpsum Calculator</p>
              </div>
              <div className="bg-[#ffd2d360] border border-[#FFD2D3] w-[371px] h-[70px] rounded-lg shadow-[0px_8px_17px_0px_#00000008] flex items-center space-x-2 px-2 ">
              <img src={Maskgroup3} alt="" />

                <p className="text-[#DF5759] text-xl font-semibold">Step Up SIP Calculator</p>
              </div>
              <div className="bg-[#ffd2d360] border border-[#FFD2D3] w-[371px] h-[70px] rounded-lg shadow-[0px_8px_17px_0px_#00000008] flex items-center space-x-2 px-2">
              <img src={Maskgroup4} alt="" />

                <p className="text-[#DF5759] text-xl font-semibold">Mutual Fund Returns Calculator</p>
              </div>
              <div className="bg-[#ffd2d360] border border-[#FFD2D3] w-[371px] h-[70px] rounded-lg shadow-[0px_8px_17px_0px_#00000008] flex items-center space-x-2 px-2">
              <img src={Maskgroup5} alt="" />

                <p className="text-[#DF5759] text-xl font-semibold">SWP Calculator</p>
              </div>
              <div className="bg-[#ffd2d360] border border-[#FFD2D3] w-[371px] h-[70px] rounded-lg shadow-[0px_8px_17px_0px_#00000008] flex items-center space-x-2 px-2">
              <img src={Maskgroup6} alt="" />

                <p className="text-[#DF5759] text-xl font-semibold">ELSS Calculator</p>
              </div>
            </div>
          </div>
          <div className="px-8 lg:px-24 mt-28 mb-12">
            <div>
              <h2 className="text-3xl lg:text-[40px] font-semibold text-[#3C3C3C]">
                Ways to Invest in Mutual Funds
              </h2>
              <p className="mt-2">
                When investing in mutual funds, there are two avenues or modes
                of investment - Systematic Investment Plans (SIP) and Lumpsum
              </p>
              <p className="mt-4">
                <span className="font-semibold">
                  1. SIP (Systematic Investment Plan) :
                </span>
                This approach involves making regular, fixed investments in a
                mutual fund scheme at predefined intervals, typically monthly.
                SIPs enable you to spread your investments over time, reducing
                the impact of market volatility. For example, you invest ₹10,000
                every month to achieve an investment goal of ₹12,00,000 over 10
                years.
              </p>
              <p className="mt-2">
                <span className="font-semibold">2. Lumpsum: </span>
                Lumpsum mode requires a one-time investment in a mutual fund
                scheme. It's like making a substantial down payment. While this
                approach may offer quick returns, it's often considered riskier
                due to market fluctuations. An example of lump-sum investment is
                investing a significant amount like ₹12,00,000 in one go in a
                mutual fund.
              </p>
              <p className="mt-4">
                Both SIP and lumpsum investments have their advantages and
                disadvantages, so your choice should align with your financial
                objectives, risk tolerance, and investment horizon.
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-3xl lg:text-[40px] font-semibold text-[#3C3C3C]">
                Types of Mutual Funds Based on Asset Class
              </h2>
              <p className="mt-3">
                Mutual funds offer diverse investment options, classified
                primarily based on their asset class. Here, we explore three
                main categories:
              </p>
              <p className="mt-6">
                <span className="font-semibold">1. Equity Mutual Funds</span>
                <br />
                Equity mutual funds primarily invest in stocks or shares of
                companies. These funds aim for capital appreciation and are
                well-suited for investors with a higher risk tolerance and a
                long-term investment horizon. Equity funds can be further
                categorised into various subtypes, such as large-cap, mid-cap,
                and small-cap funds, each focusing on companies of the
                respective market capitalisations. Equity mutual funds have the
                potential for significant returns but can also be relatively
                volatile.
              </p>
              <p className="mt-3">
                <span className="font-semibold">2. Debt Mutual Funds</span>
                <br />
                Debt mutual funds allocate their assets to fixed-income
                securities such as bonds, government securities, and corporate
                debentures. They are known for generating regular income through
                interest payments and are considered less risky than equity
                funds. Debt funds are a preferred choice for conservative
                investors seeking stable returns with lower risk. They offer
                liquidity and are commonly chosen for short to medium-term
                financial goals.
              </p>
              <p className="mt-3">
                <span className="font-semibold">3. Hybrid Funds</span>
                <br />
                Hybrid mutual funds blend the best of both worlds by investing
                in a combination of equity and debt instruments. They are
                designed to balance risk and return, offering diversification
                across asset classes. Aggressive hybrid funds, conservative
                hybrid funds, and balanced hybrid funds are subcategories that
                differ in their equity-debt allocation. Hybrid funds are
                versatile, catering to investors looking for a blend of safety
                and growth, making them suitable for various investment
                horizons.
              </p>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
};

export default Home;
