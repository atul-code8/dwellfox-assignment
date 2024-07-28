import React from 'react';
import Facebook from "../assets/Facebook.svg";
import Linkedin from "../assets/Linkedin.svg";
import Twitter from "../assets/Twitter.svg";
import Youtube from "../assets/Youtube.svg";


const Footer = () => {
  return (
    <footer>
        <div className='flex flex-col lg:flex-row gap-x-14  px-4 sm:px-24 pb-[35px] border-b border-[#C3C3C3]'>
            <div className='w-full md:w-[472px] text-[#6A6A6A]'>
                <div className='w-40 h-28 bg-black'>
                    <p className='text-white text-[57px] text-center italic font-bold'>Logo</p>
                </div>
                <div className='mt-3.5'>
                    <p className='w-[272px] md:w-auto'>Access the best and comprehensive Service Suite and products for your financial goals. Be up to date with your aggregate portfolio, and execute transactions seamlessly with no extra charges.</p>
                </div>
                <div className='flex gap-x-4 mt-6'>
                    <img src={Facebook} alt="image not found" />
                    <img src={Linkedin} alt="image not found" />
                    <img src={Twitter} alt="image not found" />
                    <img src={Youtube} alt="image not found" />
                </div>
                <p className='mt-[52px]'>2024 Your Company - All right reserved.</p>
            </div>

            <div className='flex gap-x-10 mt-4 lg:mt-0'>
                <div>
                    <h3 className='text-[17.5px] text-[#343434] font-semibold'>Investment Services</h3>
                    <div className='text-sm text-[#6C6363] flex flex-col gap-y-2 mt-2.5'>
                        <p>Mutual Funds</p>
                        <p>Portfolio Management Services (PMS)</p>
                        <p>Alternative Investment Funds (AIF)</p>
                        <p>Market-Linked Debentures</p>
                        <p>Unlisted Equities</p>
                        <p>Pre-IPO</p>
                        <p>ESOP</p>
                        <p>Fixed Income Instruments</p>
                        <p>Corporate FD</p>
                        <p>Corporate Bonds</p>
                        <p>Non-Convertible Debentures (NCDs)</p>
                        <p>Sovereign Gold Bonds (SGBs)</p>
                        <p>Tax Free Bonds</p>
                        <p>High Yield Bonds</p>
                        <p>Demat & Trading</p>
                        <p>Equity Intraday Trading</p>
                        <p>Futures and options</p>
                        <p>Equity Cash Market</p>
                        <p>Exchange Traded Funds (ETF)</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-[17.5px] text-[#343434] font-semibold'>Financial Services</h3>
                    <div className='text-sm text-[#6C6363] flex flex-col gap-y-2 mt-2.5'>
                        <p>Education Loan</p>
                        <p>Personal Loan</p>
                        <p>Business Loan</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-[17.5px] text-[#343434] font-semibold'>Company</h3>
                    <div className='text-sm text-[#6C6363] flex flex-col gap-y-2 mt-2.5'>
                        <p>About Us</p>
                        <p>Our Services</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-[#6A6A6A] px-4 sm:px-24 pb-12 mt-[35px]'>
            <p><span className='font-semibold'>Disclaimer: </span>InCred Premier (Mvalu Technology Services Private Limited) is an AMFI registered Mutual Fund Distributor under ARN: 275918. Some services are offered through group companies. InCred Premier is also registered with APMI having registration no: APRN00175</p>
            <p>Mutual funds & Securities are subject to market risks, please read all your scheme/securities-related documents carefully before investing.</p>
            <p className='mt-3'>InCred Premier (Mvalu Technology Services Private Limited) of distributor for Products such as PMS, AIF, OFS, NCD etc</p>
            <p className='mt-3'>Guided view is indicative in nature and is based on the information provided by the user voluntarily. Each user of this information should make such an investigation as it deems necessary to arrive at an independent evaluation of an investment in the securities of companies referred here (including the merits and risks involved) and should consult his own advisors to determine the merits and risks of such investment.</p>
            <p className='mt-3'> <span className='font-semibold'>Registered Office and Corporate Office Address : </span>Plot No. C, The Capital, Unit No. 1203, 12th floor, B Wing, 70, G Block Rd, Bandra Kurla Complex, Mumbai, Maharashtra 400051
            </p>
            <p><span className='font-semibold'>CIN :</span>U66220MH2018PTC313289</p>
        </div>
    </footer>
  )
}

export default Footer