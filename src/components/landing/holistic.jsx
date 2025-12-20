import React from 'react';
import Button from '../ui/Button';
import BreadCrumb from '../ui/BreadCromb';
import EditText from '../ui/EditText';

export default function Holistic() {
    return (
        <>
        <section className="w-full bg-neutral-white pt-10  md:py-16 lg:py-20">
          <div className="w-full max-w-[1440px] mx-auto max-[364px]:px-3 min-[365px]:px-5 sm:px-6 lg:px-20">
            <div className="flex flex-col gap-2 md:gap-16">
              
              {/* Section Header */}
              <div className="flex flex-col hidden md:flex items-center gap-8 max-w-[800px] mx-auto">
                <span className="text-sm font-bold md:text-[16px] leading-tight text-[#8b6f47] text-center  tracking-wide" style={{ fontFamily: 'Satoshi' }}>
                  What to expect when you join newself
                </span>
                <div className="flex flex-col md:gap-6 items-center text-center">
                  <h2 className="text-[36px] sm:text-[48px] mb-[40px] md:mb-0 lg:text-[56px] font-black leading-tight text-center max-w-[806px]" style={{ fontFamily: 'Satoshi' }}>
                    <span className="text-[#2d5f52] text-center">A</span>
                    <span className="text-[#5a9b8a] text-center "> holistic</span>
                    <span className="text-[#2d5f52]"> approach to </span>
                    <span className="text-[#2d5f52]">transform your lifestyle</span>
                  </h2>
                  <p className="text-base sm:text-lg font-normal md:text-[18px] leading-relaxed max-w-[760px] text-[#4a4a4a] text-center" style={{ fontFamily: 'Satoshi' }}>
                    Medication is only the tip of the iceberg. We provide a holistic approach to weight loss, supporting your overall well-being for a simple, fixed monthly fee.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:hidden items-center gap-4 mx-auto px-0 w-full max-w-[400px]">
                <span className="text-sm font-bold md:text-[16px] leading-tight text-[#8b6f47] text-center tracking-wide" style={{ fontFamily: 'Satoshi' }}>
                  What to expect when you join newself
                </span>
                <div className="flex flex-col w-full gap-[20px] items-center text-center">
                  <h2 className="text-[30px] sm:text-[48px] font-black leading-tight text-center w-full" style={{ fontFamily: 'Satoshi' }}>
                    <span className="text-[#2d5f52] text-center">A</span>
                    <span className="text-[#5a9b8a] text-center"> holistic</span>
                    <span className="text-[#2d5f52] text-[30px]"> approach to transform your lifestyle</span>
                   
                  </h2>
                  <div className="w-full">
                  <p className="text-[12px] sm:text-lg font-normal md:text-[18px] leading-snug text-[#4a4a4a] text-center" style={{ fontFamily: 'Satoshi' }}>
                    Medication is only the tip of the iceberg. We provide a holistic
                  </p>
                  <p className="text-[12px] sm:text-lg font-normal md:text-[18px] leading-snug text-[#4a4a4a] text-center" style={{ fontFamily: 'Satoshi' }}>
                     approach to weight loss, 
                  </p>
                  <p className="text-[12px] sm:text-lg font-normal md:text-[18px] leading-snug text-[#4a4a4a] text-center" style={{ fontFamily: 'Satoshi' }}>
                    supporting your overall well-being for a simple, fixed monthly fee.
                  </p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="w-full max-w-[1200px] mx-auto">
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 text-[#010101] ">
                  
                  {/* Engaged Community - Spans 5 columns */}
                  <div className="lg:col-span-6 border-2 border-[#2d5f52] rounded-[16px] overflow-hidden lg:max-h-[390px] flex md:flex-row flex-col">
                    <div className="p-4 w-full md:max-w-[50%]">
                      <h3 className="text-2xl text-[#010101] font-bold leading-tight  mb-3" style={{ fontFamily: 'Satoshi' }}>
                        Engaged Community
                      </h3>
                      <p className="text-[12px] md:text-[16px] font-normal leading-relaxed text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                        Find support and motivation from our community in our Coaching Hub. Share experiences, celebrate wins, and overcome challenges together.
                      </p>
                    </div>
                    <div className="max-h-[340px] md:min-h-[300px] px-[10px] py-[10px] rounded-[8px]">
                      <img 
                        src="/images/img_engaged_community.png" 
                        alt="Engaged Community" 
                        className="w-full h-[100%] rounded-[8px] md:object-fill object-cover"
                      />
                    </div>
                  </div>

                  {/* Customized Platform - Spans 4 columns */}
                  <div className="lg:col-span-3 hidden md:flex border-2 border-[#2d5f52]  mid:max-h-[375px] rounded-[16px] overflow-hidden flex flex-col">
                    <div className="px-4 pt-6">
                      <h3 className="text-2xl text-black font-bold leading-tight text-[#2d5f52] mb-1" style={{ fontFamily: 'Satoshi' }}>
                        Customized Platform
                      </h3>
                      <p className="text-[16px] font-normal leading-relaxed text-[#4a4a4a] mb-0" style={{ fontFamily: 'Satoshi' }}>
                        Newselfs' platform offers seamless visit scheduling, weight tracking, and access to weekly coaching sessions to support your health journey.
                      </p>
                    </div>
                    <div className=" px-6 py-3 mb-6 bg-[#DFE3E2]  md:max-w-[295px] md:max-h-[182px] mx-auto my-auto flex items-center justify-center rounded-[8px]">
                      <img 
                        src="/images/img_customized_platform.png" 
                        alt="Customized Platform" 
                        className="md:w-full  hidden md:block md:h-auto md:object-cover object-contain rounded-0"
                      />
                      <img 
                        src="/images/Frame-17.svg" 
                        alt="Customized Platform" 
                        className="md:w-full min-w-[293px] max-h-[158px] md:hidden md:h-auto md:object-cover object-contain rounded-0"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-3  flex md:hidden border-2 border-[#2d5f52] max-h-[340px] rounded-[16px]  flex flex-col">
                    <div className="px-4 pt-3">
                      <h3 className="text-2xl text-black font-bold leading-tight text-[#2d5f52] mb-2" style={{ fontFamily: 'Satoshi' }}>
                        Customized Platform
                      </h3>
                      <p className="text-[12px] max-w-[316px] md:text-[16px] font-normal leading-relaxed text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                        Newselfs' platform offers seamless visit scheduling, weight tracking, and access to weekly coaching sessions to 
                      </p>
                      <p className="text-[12px] max-w-[316px] md:text-[16px] font-normal leading-relaxed text-[#4a4a4a] mb-3" style={{ fontFamily: 'Satoshi' }}>
                        support your health journey.
                      </p>
                    </div>
                    <div className=" px-4 py-3.5 mb-[8px] bg-[#DFE3E2]  md:max-w-[295px] md:max-h-[182px] mx-auto my-auto flex items-center justify-center rounded-[16px]">
                     
                      <img 
                        src="/images/Frame-17.svg" 
                        alt="Customized Platform" 
                        className="md:w-full min-w-[293px] max-h-[158px] md:hidden md:h-auto md:object-cover object-contain rounded-0"
                      />
                    </div>
                  </div>

                  {/* Lifestyle Coaching - Spans 3 columns */}
                  <div className="lg:col-span-3 hidden md:flex border-2 border-[#2d5f52] max-h-[348px] max-w-[308px] rounded-3xl overflow-hidden flex flex-col">
                    <div className="px-4 pt-1.5 pb-2">
                      <img 
                        src="/images/img_lifestyle_coaching.png" 
                        alt="Lifestyle Coaching" 
                        className="w-full h-auto object-cover rounded-2xl mb-4"
                      />
                    </div>
                    <div className="px-6 pb-3">
                      <h3 className="text-[20px] text-black font-bold leading-tight text-[#2d5f52] mb-1" style={{ fontFamily: 'Satoshi' }}>
                        Lifestyle Coaching
                      </h3>
                      <p className=" font-normal text-[16px] leading-relaxed text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                        Work with our expert lifestyle coaches to develop healthy habits and build a sustainable foundation for long-term success.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-3 md:hidden border-2 border-[#2d5f52] max-h-[357px]  rounded-[16px] overflow-hidden flex flex-col">
                    <div className="px-4 pt-4 min-w-[332px] pb-2 rounded-[8px]">
                      <img 
                        src="/images/img_lifestyle_coaching.png" 
                        alt="Lifestyle Coaching" 
                        className="w-full h-auto object-fill rounded-[8px] mb-4"
                      />
                    </div>
                    <div className="px-4 pb-3">
                      <h3 className="text-[20px] text-black font-bold leading-tight text-[#2d5f52] mb-1" style={{ fontFamily: 'Satoshi' }}>
                        Lifestyle Coaching
                      </h3>
                      <p className=" font-normal text-[12px] leading-relaxed text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                        Work with our expert lifestyle coaches to develop healthy habits and build a sustainable foundation for long-term success.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
                  
                  {/* Medication Support - Spans 3 columns */}
                  <div className="lg:col-span-3 hidden md:flex border-2 border-[#2d5f52] max-w-[310px] max-h-[352px] rounded-[16px] overflow-hidden flex flex-col">
                    <div className="p-6">
                      <h3 className="text-2xl text-black font-bold leading-tight text-[#2d5f52] mb-3" style={{ fontFamily: 'Satoshi' }}>
                        Medication Support
                      </h3>
                      <p className="text-[16px] max-w-[258px] font-normal leading-relaxed text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                        Access to prescription  
                      </p>
                      <p className="text-[16px] max-w-[258px] font-normal leading-relaxed text-[#4a4a4a] mb-1" style={{ fontFamily: 'Satoshi' }}>
                          medications, if appropriate, to support your weight loss journey.
                      </p>
                    </div>
                    <div className="mt-auto px-6 pb-6">
                      <div className="bg-[#89C0B4] rounded-[10px] px-6 py-3 flex justify-center items-center">
                        <img 
                          src="/images/img_group.svg" 
                          alt="Medication Support" 
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 md:hidden md:flex border-2 border-[#2d5f52] max-h-[337px] rounded-[16px] overflow-hidden flex flex-col">
                    <div className="p-4">
                      <h3 className="text-2xl text-black font-bold leading-tight text-[#2d5f52] mb-3" style={{ fontFamily: 'Satoshi' }}>
                        Medication Support
                      </h3>
                      <p className="text-[12px]  font-normal leading-relaxed text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                        Access to prescription  medications  if appropriate, to
                      </p>
                      <p className="text-[12px]  font-normal leading-relaxed text-[#4a4a4a] mb-1" style={{ fontFamily: 'Satoshi' }}>
                           support your weight loss journey.
                      </p>
                    </div>
                    <div className="mt-auto px-6 pb-6">
                      <div className="bg-[#89C0B4] rounded-[10px] px-2 py-2.5 flex justify-center items-center">
                        <img 
                          src="/images/Group-4.svg" 
                          alt="Medication Support" 
                          
                        />
                      </div>
                    </div>
                  </div>

                  {/* Insurance Support - Spans 4 columns */}
                  <div className="lg:col-span-3 hidden md:flex border-2 max-w-[310px] max-h-[374px] border-[#2d5f52] rounded-[16px] overflow-hidden flex flex-col">
                    <div className="px-4 pt-3 pb-2">
                      <img 
                        src="/images/img_insurance_support.png" 
                        alt="Insurance Support" 
                        className="w-full h-auto object-cover rounded-[8px] mb-1"
                      />
                    </div>
                    <div className="px-6 pb-6">
                      <h3 className="text-2xl text-black font-bold leading-tight text-[#2d5f52] mb-3" style={{ fontFamily: 'Satoshi' }}>
                        Insurance Support
                      </h3>
                      <p className="text-[16px] font-normal leading-relaxed max-w-[258px] text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                        Our dedicated insurance 
                      </p>
                      <p className="text-[16px] font-normal leading-relaxed max-w-[258px] text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                      concierge team helps you understand your coverage and ensures you maximize your
                      </p>
                      <p className="text-[16px] font-normal leading-relaxed max-w-[258px] text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                      benefits.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-3  md:hidden border-2 max-h-[357px] border-[#2d5f52] rounded-[16px] overflow-hidden flex flex-col">
                    <div className="px-4 pt-3 pb-2">
                      <img 
                        src="/images/img_insurance_support.png" 
                        alt="Insurance Support" 
                        className="w-full h-auto object-cover rounded-[8px] mb-1"
                      />
                    </div>
                    <div className="px-4 pb-3">
                      <h3 className="text-2xl text-black font-bold leading-tight text-[#2d5f52] mb-3" style={{ fontFamily: 'Satoshi' }}>
                        Insurance Support
                      </h3>
                      <p className="md:text-[16px] text-[12px] font-normal leading-relaxed  text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                        Our dedicated insurance concierge team  helps you
                      </p>
                      <p className="md:text-[16px] text-[12px] font-normal leading-relaxed  text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                       understand your coverage and ensures you maximize your  benefits.
                      </p>
                      
                    </div>
                  </div>

                  {/* Personalized Support - Spans 5 columns */}
                  <div className="lg:col-span-6 hidden md:flex border-2 max-w-[637px] max-h-[440px] border-[#2d5f52] rounded-[16px] overflow-hidden flex flex-col lg:flex-row">
                    <div className="p-6 lg:w-[60%] flex flex-col justify-center">
                      <h3 className="text-2xl text-black font-bold leading-tight text-[#2d5f52] mb-3" style={{ fontFamily: 'Satoshi' }}>
                        Personalized Support
                      </h3>
                      <p className="font-normal leading-relaxed text-[16px]  text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                        Receive 1:1 guidance from a licensed healthcare provider who tailors your program to your unique needs and goals.
                      </p>
                    </div>
                    <div className="lg:w-[60%] flex items-center justify-center p-4">
                      <div className="bg-[#d4ed4e] rounded-[8px] w-full h-full min-h-[200px] max-h-[405px] flex items-center justify-center">
                        <img 
                          src="/images/img_66c8eb7ca810cfb.svg" 
                          alt="Personalized Support" 
                          className="w-full h-full object-contain rounded-[8px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-6 flex md:hidden border-2 justify-around  max-h-[250px] border-[#2d5f52] rounded-[16px] overflow-hidden flex  lg:flex-row">
                    <div className="p-1 max-w-[156px] flex flex-col justify-center">
                      <h3 className="text-2xl text-black font-bold leading-tight text-[#2d5f52] mb-3" style={{ fontFamily: 'Satoshi' }}>
                        Personalized Support
                      </h3>
                      <p className="font-normal leading-relaxed text-[12px]  text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                        Receive 1:1 guidance from a licensed healthcare provider who tailors your program to your unique needs and goals.
                      </p>
                    </div>
                    <div className="max-w-[156px] flex items-center justify-center py-2">
                      <div className="bg-[#d4ed4e] rounded-[8px] w-full h-full flex items-center justify-center">
                        <img 
                          src="/images/grp-3.svg" 
                          alt="Personalized Support" 
                          
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
    );
}