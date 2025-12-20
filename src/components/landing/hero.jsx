import React from 'react';
import Button from '../ui/Button';
import BreadCrumb from '../ui/BreadCromb';
import EditText from '../ui/EditText';

export default function Hero() 
{
    const offerCodes = [
        { discount: '$100 OFF', duration: '1 MONTH', code: 'HOLIDAY1' },
        { discount: '$150 OFF', duration: '3 MONTHS', code: 'HOLIDAY3' },
        { discount: '$200 OFF', duration: '6 MONTHS', code: 'HOLIDAY6' },
        { discount: '$400 OFF', duration: '12 MONTHS', code: 'HOLIDAY12' },
      ];
    
    
    return (
        <>
         <section className="w-full bg-neutral-white mt-6 md:mt-11 font-Satoshi">
    <div className="w-full md:max-w-[1500px] mx-auto px-3 sm:px-4 lg:px-[40px]">
      <div className="flex flex-col items-center gap-4 md:gap-12 lg:gap-[20px]">
        
        {/* Breadcrumb - Mobile Design */}
        <div className="w-full max-w-[358px] sm:max-w-full text-[10px] sm:text-[12px] font-medium" style={{ fontFamily: 'Satoshi', color: 'rgba(29, 29, 31, 0.80)' }}>
          Valid through 12/1. First time customers.
        </div>

        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-7 w-full">
          
          {/* Left Content */}
          <div className="flex flex-col max-w-[358px] sm:max-w-full items-start w-full lg:w-[64%]" style={{ gap: '12px' }}>
            
            {/* Hero Title - Mobile: SVG, Desktop: Text */}
            <div className="w-full">
              {/* Mobile View - SVG */}
              <img 
                src="/images/hero-title-mobile.svg" 
                alt="Black Friday / Cyber Monday deals start now !" 
                className="w-full sm:hidden"
              />
              
              {/* Desktop/Tablet View - Text */}
              <div className="hidden sm:block text-left lg:text-left whitespace-nowrap">
                <h1 className="text-[36px] lg:mt-8 sm:text-[51px] lg:text-[63px] font-black md:leading-[46px] sm:leading-[68px] lg:leading-[90px] text-primary-light md:mb-[-18px] tracking-tight" style={{ fontFamily: 'Satoshi' }}>
                  <span className="font-black text-primary-light">Black Friday </span>
                  <span className="font-black text-primary-background">/</span>
                  <span className="font-black text-primary-light"> Cyber Monday </span>
                </h1>
                <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] lg:mt-4 font-black leading-[46px] sm:leading-[68px] lg:leading-[90px] text-primary-background " style={{ fontFamily: 'Satoshi' }}>
                  deals start now !
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-[19px] sm:text-2xl lg:text-5xl font-medium lg:mt-3 lg:leading-8xl lg:my-[10px] text-left lg:text-left" style={{ fontFamily: 'Satoshi', color: '#254d45' }}>
              Once-a-year savings you don't want to miss
            </p>

            {/* Offer Cards */}
            <div className="flex flex-col w-full lg:w-[47%]" style={{ gap: '8px' }}>
              
              {/* Header Row - Mobile: SVG, Desktop: Text */}
              <img 
                src="/images/hero-labels-mobile.svg" 
                alt="Don't miss out on : use code :" 
                className="w-full sm:hidden"
              />
              
              <div className="hidden sm:flex items-center w-full relative mb-5 lg:mt-3">
                <span className="text-[16px] pl-10 font-small md:leading-2xl absolute left-[28%] whitespace-nowrap" style={{ fontFamily: 'Satoshi', transform: 'translateX(-50%)' }}>
                  Don't miss out on :
                </span>
                <span className="text-[16px] font-small leading-2xl absolute left-[97.5%] whitespace-nowrap" style={{ fontFamily: 'Satoshi', transform: 'translateX(-50%)' }}>
                  use code :
                </span>
              </div>

              {/* Offer Cards */}
              <div className="flex flex-col w-full gap-2 lg:gap-4">
                {/* 1 MONTH - SVG for mobile, custom for desktop */}
                <img 
                  src="/images/offer-1month-mobile.svg" 
                  alt="$100 OFF 1 MONTH HOLIDAY1" 
                  className="w-full sm:hidden"
                />
                <div className="hidden sm:flex items-center justify-between bg-[#50a89633] rounded-[40px] px-1.5 py-1.5 lg:min-w-[480px]">
                  <div className="flex items-center justify-between gap-2 md:gap-2 px-2 md:px-8">
                    <span className="text-[16px] lg:text-[20px] font-black leading-8xl text-[#254D45] mr-1 md:mr-2" style={{ fontFamily: 'Satoshi' }}>
                      $100 OFF
                    </span>
                    <span className="text-[16px] lg:text-[20px] font-medium leading-8xl text-primary-background" style={{ fontFamily: 'Satoshi' }}>
                      1 MONTH
                    </span>
                  </div>
                  <div className="bg-primary-light px-[24px] py-1 rounded-[26px]">
                    <span className="text-[16px] lg:text-3xl font-black leading-8xl text-neutral-white" style={{ fontFamily: 'Satoshi' }}>
                      HOLIDAY1
                    </span>
                  </div>
                </div>

                {/* 3 MONTHS - SVG for mobile, custom for desktop */}
                <img 
                  src="/images/offer-3month-mobile.svg" 
                  alt="$150 OFF 3 MONTHS HOLIDAY3" 
                  className="w-full sm:hidden"
                />
                <div className="hidden sm:flex items-center justify-between bg-[#50a89633] rounded-[40px] px-1.5 py-1.5 lg:min-w-[480px]">
                  <div className="flex items-center justify-between gap-1 md:gap-2 px-2 md:px-8">
                    <span className="text-[16px] lg:text-[20px] font-black leading-8xl text-[#254D45] mr-1 md:mr-2" style={{ fontFamily: 'Satoshi' }}>
                      $150 OFF
                    </span>
                    <span className="text-[16px] lg:text-[20px] font-medium leading-8xl text-primary-background" style={{ fontFamily: 'Satoshi' }}>
                      3 MONTHS
                    </span>
                  </div>
                  <div className="bg-primary-light px-[24px] py-1 rounded-[26px]">
                    <span className="text-[16px] lg:text-3xl font-black leading-8xl text-neutral-white" style={{ fontFamily: 'Satoshi' }}>
                      HOLIDAY3
                    </span>
                  </div>
                </div>
                {/* 6 MONTHS - Custom styling for both mobile and desktop */}
                <img 
                  src="/images/6 MONTH.svg" 
                  alt="$100 OFF 1 MONTH HOLIDAY1" 
                  className="w-full sm:hidden"
                />
                <div className="hidden sm:flex items-center justify-between bg-[#50a89633] rounded-[40px] px-1.5 py-1.5 lg:min-w-[480px]">
                  <div className="flex items-center justify-between gap-1 md:gap-2 px-2 md:px-8">
                    <span className="text-[16px] lg:text-[20px] font-black leading-8xl text-[#254D45] mr-1 md:mr-2" style={{ fontFamily: 'Satoshi' }}>
                      $200 OFF
                    </span>
                    <span className="text-[16px] lg:text-[20px] font-medium leading-8xl text-primary-background" style={{ fontFamily: 'Satoshi' }}>
                      6 MONTHS
                    </span>
                  </div>
                  <div className="bg-primary-light px-[24px] py-1 rounded-[26px]">
                    <span className="text-[16px] lg:text-3xl font-black leading-8xl text-neutral-white" style={{ fontFamily: 'Satoshi' }}>
                      HOLIDAY6
                    </span>
                  </div>
                </div>

                {/* 12 MONTHS - Custom styling for both mobile and desktop */}
                <img 
                  src="/images/12 MONTH.svg" 
                  alt="$100 OFF 1 MONTH HOLIDAY1" 
                  className="w-full sm:hidden"
                />
              <div className="hidden sm:flex items-center justify-between bg-[#50a89633] rounded-[40px] px-1.5 py-1.5 lg:min-w-[480px]">
                  <div className="flex items-center justify-between gap-1 md:gap-2 px-2 md:px-8">
                    <span className="text-[16px] lg:text-[20px] font-black leading-8xl text-[#254D45] mr-1 md:mr-2" style={{ fontFamily: 'Satoshi' }}>
                      $400 OFF
                    </span>
                    <span className="text-[16px] lg:text-[20px] font-medium leading-8xl text-primary-background" style={{ fontFamily: 'Satoshi' }}>
                      12 MONTHS
                    </span>
                  </div>
                  <div className="bg-primary-light px-[24px] py-1 rounded-[26px]">
                    <span className="text-[16px] lg:text-3xl font-black leading-8xl text-neutral-white" style={{ fontFamily: 'Satoshi' }}>
                      HOLIDAY12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-[36%] flex justify-end">
            <div className="flex flex-col items-center gap-3 w-full max-w-[454px]">
              
              {/* Top Image Row */}
              <div className="flex gap-3 w-full">
                <div className="bg-secondary-green rounded-none rounded-b-[14px] px-5 py-[22px] w-1/2">
                  <img 
                    src="/images/img_683dd11ccf485b6.png" 
                    alt="GLP-1 Product 1" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-secondary-background rounded-none rounded-bl-[70px] px-5 py-[22px] w-1/2">
                  <img 
                    src="/images/img_683dd11e0e1541e.png" 
                    alt="GLP-1 Product 2" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Bottom Image Section */}
              <div className="bg-[linear-gradient(90deg,#f0f0f0_0%,_#c4c4c4_100%)] rounded-tl-[70px]  w-full relative">
                <div className="flex justify-center gap-[50px] items-center py-0">
                  <img 
                    src="/images/img_683dd11e0e1541e_192x278.png" 
                    alt="" 
                    className="w-[46%] object-contain"
                  />
                  <img 
                    src="/images/img_683dd11ccf485b6_192x266.png" 
                    alt="GLP-1 Product 4" 
                    className="w-[48%] object-contain -ml-[116px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
   
}