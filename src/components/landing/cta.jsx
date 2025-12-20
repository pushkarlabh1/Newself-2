import React from 'react';
import Button from '../ui/Button';


export default function CTA() {
    return (
        <>
         <section className="w-full hidden md:block relative mt-12 pt-16 pb-6 ">
  {/* Dark Green Background */}
            <div className="absolute inset-0 w-full h-full bg-[#2d5f52] "></div>
            
            <div className="relative w-full max-w-[1500px] mx-auto px-6 lg:px-20 py-20">
              {/* Cream Card Container */}
              <div className="relative bg-[#F4ECE4] rounded-[16px] overflow-hidden min-h-[420px]  flex items-center">
                
                {/* Left Content */}
                <div className="w-full lg:w-1/2 px-8 lg:px-16 py-12 z-10">
                  <div className="flex flex-col gap-6">
                    {/* Heading */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3">
                        <h2 className="text-[48px] lg:text-[64px] font-black leading-tight text-[#2d5f52]" style={{ fontFamily: 'Satoshi' }}>
                          Your
                        </h2>
                        <img 
                          src="/images/Logo (1).png" 
                          alt="newself" 
                          className="h-[48px] pl-4 lg:h-[64px] w-auto object-contain"
                        />
                      </div>
                      <h2 className="text-[48px] lg:text-[64px] font-black leading-tight text-[#2d5f52]" style={{ fontFamily: 'Satoshi' }}>
                        feeling awaits
                      </h2>
                    </div>
                    
                    {/* CTA Button */}
                    <Button
                      text="Start your journey"
                      className="px-[12px] py-3 rounded-[720px] border-2 border-[#2d5f52] bg-[#ebff91] text-[#2d5f52] hover:opacity-90 transition-all font-normal text-[16px] w-fit lg:w-[183px]"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                  </div>
                </div>

                <div 
                      className="absolute bottom-0 left-[715px] z-10 w-[630px] h-[440px] "
                      
                    >
                      <img src="/images/behind.svg" alt="cta" className="w-full h-full object-cover" />
                    </div>
                
                
              </div>
              
              <div className="hidden lg:block absolute z-30 right-0 top-[-50px] w-1/2 h-full">
                  <img 
                    src="/images/img_women_smiling_banner.png" 
                    alt="Happy Women Embracing" 
                    className="w-full h-full object-fit object-left rounded-r-3xl scale-[.9]"
                  />
                </div>

            </div>

            {/* Right Image */}
           
          </section>

          <section className="w-full  md:hidden relative    bg-[#2d5f52]  ">
  {/* Dark Green Background */}
            {/* <div className="absolute inset-0 w-full h-full "></div> */}
            <div className="scale-[1.4] top-[-3px] left-1/2 -translate-x-1/2 absolute z-30 ">
                  <img 
                    src="/images/mobilen8.svg" 
                    alt="Happy Women Embracing" 
                    className=" object-fit"
                  />
                </div> 
            
            <div className="relative w-full max-w-[1500px] px-4 lg:px-20  py-10">
              {/* Cream Card Container */}
              <div className=" bg-[#f5f1e8] rounded-[16px] overflow-hidden min-h-[400px] h-full flex items-end ">
                
                
                {/* Left Content */}
                <div className="w-full px-6 pb-10 z-10">
                  <div className="flex flex-col gap-6">
                    {/* Heading */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex flex-col items-center justify-end gap-3">
                        <div className="flex items-end gap-2">
                        <h2 className="text-[32px] lg:text-[64px] font-black leading-tight text-[#2d5f52]" style={{ fontFamily: 'Satoshi' }}>
                          Your
                        </h2>
                        <img 
                          src="/images/Logo (1).png" 
                          alt="newself" 
                          className="h-[32px] lg:h-[64px] w-auto object-contain"
                        />
                        </div>
                        <h2 className="text-[32px] lg:text-[64px] font-black leading-tight text-[#2d5f52]" style={{ fontFamily: 'Satoshi' }}>
                        feeling awaits
                      </h2>
                      </div>
                      <Button
                      text="Start your journey"
                      className="px-[12px] py-2.5 rounded-[720px] border-2 border-[#2d5f52] bg-[#d4ed4e] text-[#2d5f52] hover:opacity-90 transition-all font-medium text-[16px] w-fit lg:w-[183px]"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                     
                    </div>
                    
                    {/* CTA Button */}
                    
                  </div>
                </div>

               
                
                
              </div>
{/*               
              */}

            </div>

            {/* Right Image */}
           
          </section>
        </>
    );
}