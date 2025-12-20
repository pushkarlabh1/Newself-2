import React from 'react';
import Button from '../ui/Button';


export default function SecondSection() {

    const productFeatures = [
        'Unlimited Provider Visits',
        'Customer Group Coaching: nutrition, mental health, movement, support groups, nurse education and more!',
        'SESH™ Fitness App Membership Included',
        'Customer 1-on-1 Coaching: Dietitian & Journey Support coach to help set goals, manage challenges and stay on track!'
      ];
    return (
        <>
         <section className="w-full bg-neutral-white py-8 md:py-16 lg:py-20">
            <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-14">
              <div className="flex flex-col items-center md:gap-16 gap-6">
                
                
                {/* Section Title */}
                  <div className="w-full max-w-[358px] min-[410px]:max-w-full md:max-w-[820px] text-center mx-auto">
                    <div className="relative">
                      {/* Main Heading */}
                      <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 mb-0">
                        <h2 className="text-[32px] md:text-[40px] sm:text-[56px] lg:text-[64px] font-black leading-tight text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                          The
                        </h2>
                        <h2 className="text-[32px] md:text-[40px] sm:text-[56px] lg:text-[64px] font-bold not-italic md:italic leading-tight text-[#50a896] tracking-tight" style={{ fontFamily: 'DM Sans' }}>
                          best
                        </h2>
                        <h2 className="text-[32px] hidden md:block md:text-[40px] sm:text-[56px] lg:text-[64px] font-black leading-tight text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                          GLP-1 provider
                        </h2>
                        <h2 className="text-[32px] md:hidden md:text-[40px] sm:text-[56px] lg:text-[64px] font-black leading-tight text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                        in the GLP-1 
                        </h2>
                        
                      </div>
                      
                      {/* Second Line */}
                      <div className="flex flex-wrap items-center justify-center gap-x-4 mb-4 mt-1 md:-mt-2">
                        <h2 className="text-[32px] hidden md:block md:text-[40px] sm:text-[56px] lg:text-[64px] font-black leading-tight text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                          in the game
                        </h2>
                        <h2 className="text-[32px] md:hidden md:text-[40px] sm:text-[56px] lg:text-[64px] font-black leading-tight text-[#4a4a4a]" style={{ fontFamily: 'Satoshi' }}>
                          provider game
                        </h2>
                      </div>
                      
                      {/* Description */}
                      <p className="text-[12px] md:text-[18px] sm:text-lg md:text-[19px] font-medium md:font-normal leading-snug md:leading-relaxed text-[#4a4a4a] text-center px-1 md:px-4" style={{ fontFamily: 'Satoshi' }}>
                        One single price every month, with <span className="font-bold">everything</span> included.<br className="md:hidden"></br> <span className="font-bold">No membership fees</span>. No sign up fees. No lab fees. One single price. Join today and start your journey!
                      </p>
                    </div>
                  </div>
                {/* Product Cards */}
                <div className="flex flex-row md:flex-col lg:flex-row px-3 md:px-0 gap-5 md:gap-[88px] w-full md:w-[74%]">
                  {[1, 2]?.map((product, index) => (
                    <div key={index} className="flex flex-col items-start w-full lg:w-[456px]" style={{ gap: '20px' }}>
                      
                      {/* Product Image - Mobile: Figma design, Desktop: Original */}
                      <img 
                        src={index === 0 ? "/images/product-card-1-mobile.png" : "/images/product-card-2-mobile.png"}
                        alt={`GLP-1 Product ${index + 1}`}
                        className="w-full md:hidden h-auto object-cover"
                        style={{ maxWidth: '169px' }}
                      />
                      <img 
                        src={index === 0 ? "/images/img_image_1.png" : "/images/img_frame_8_1.png"}
                        alt={`GLP-1 Product ${index + 1}`}
                        className="hidden md:block w-full max-w-[456px] h-auto object-contain"
                      />

                      {/* Product Details */}
                      <div className="flex flex-col w-full" style={{ gap: '20px' }}>
                        
                        {/* Product Info */}
                        <div className="flex flex-col items-start" style={{ gap: '0px' }}>
                          <span className="text-[16px] md:text-[15px] font-small mb-1 leading-[1.4]" style={{ fontFamily: 'Satoshi', color: '#4c5647' }}>
                            Compounded
                          </span>
                          <h3 className="text-[20px] md:text-[18px] font-medium mb-1 leading-[1.3]" style={{ fontFamily: 'DM Sans', color: '#4c5647' }}>
                            GLP-1<span className="text-[#a9826c]">*</span>
                          </h3>
                          <span className="text-[13px] md:text-[14px] font-small leading-[1.4]" style={{ fontFamily: 'Satoshi', color: '#4c5647' }}>
                            (Contains: Semaglutide)
                          </span>
                        </div>

                        {/* Pricing */}
                        <div className="flex flex-col" style={{ gap: '0px' }}>
                          <div className="flex flex-col" style={{ gap: '0px' }}>
                            <span className="text-[12px] md:text-[13px] font-medium leading-[1.3]" style={{ fontFamily: 'Satoshi', color: '#363f33' }}>
                              Starting at
                            </span>
                            <div className="flex items-end" style={{ gap: '8px' }}>
                              <span className="text-[32px] md:text-[52px] font-black leading-[1.3]" style={{ fontFamily: 'Satoshi', color: '#363f33' }}>
                                $150
                              </span>
                              <span className="text-[12.8px] md:text-[15px] font-medium leading-[1.6] mb-[2px]" style={{ fontFamily: 'Satoshi', color: '#363f33' }}>
                                /mo
                              </span>
                            </div>
                            <span className="text-[13.6px] md:text-[14px] font-normal mt-2 md:mt-0 block" style={{ fontFamily: 'Satoshi', color: '#50a896', lineHeight: '20.4px' }}>
                              Paid annually, delivered monthly
                            </span>
                          </div>
                          <p className="text-[13.6px] md:text-[14px] font-light md:font-small" style={{ fontFamily: 'DM Sans', color: '#50a896', lineHeight: '20.4px' }}>
                            (<span className="font-bold">$249/mo</span> for month-to-month plan)
                          </p>
                        </div>

                        {/* Features */}
                        <div className="flex flex-col items-start" style={{ gap: '0px' }}>
                          <span className="text-[12px] md:text-[15px] font-normal leading-[1.4]" style={{ fontFamily: 'Satoshi', color: '#50a896' }}>
                            Includes:
                          </span>
                          <div className="flex flex-col w-full">
                            <ul className="list-disc space-y-[2px] md:space-y-[4px] pl-5">
                            {productFeatures?.map((feature, idx) => (
                              <li key={idx} className="text-[11px] md:text-[14px] font-normal leading-[1.3] md:leading-[1.6] pl-0 md:pl-2" style={{ fontFamily: 'Satoshi', color: '#50a896' }}>
                                 {feature}
                              </li>
                            ))}
                            </ul>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center md:justify-start">
                          <Button
                            text="Get started"
                            className="px-6 py-2.5 md:px-[34px] md:py-[13px] rounded-full border border-border-primary bg-accent-highlight text-[14px] md:text-[15px] font-medium md:font-light hover:opacity-90 transition-all whitespace-nowrap"
                            style={{ fontFamily: 'Satoshi', color: '#000000' }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
    );

}