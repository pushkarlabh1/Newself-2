import React from 'react';
import Button from '../ui/Button';
import BreadCrumb from '../ui/BreadCromb';
import EditText from '../ui/EditText';

export default function Compundmed() {
    return (
        <>
         <section className="w-full hidden  md:block bg-[#DFE3E2] py-16 lg:py-20 px-20 mt-20">
            <div className="w-full max-w-[1440px] bg-[#D3DECE]  mx-auto lg:py-10 lg:rounded-[16px]">
              <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-10 lg:gap-0 ">
                
                {/* Left Content */}
                <div className=" lg:w-[45%] flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-bold leading-tight text-[#4a4a4a]" style={{ fontFamily: 'DM Sans', lineHeight: '1.1' }}>
                      <span>Compounded</span><br />
                      <span className="italic">GLP-1</span><br />
                      <span className="text-[#4a9b8a]">medications</span>
                    </h2>
                   
                    <div 
                    >
                    <p className="text-[11px] sm:text-lg md:text-[17px] w-full  lg:max-w-[544px] font-normal leading-relaxed text-[#4C5647]" style={{ fontFamily: 'DM Sans' }}>
                      Start your newself weight loss journey with confidence, knowing
                    </p>
                    <p className="text-[11px] sm:text-lg md:text-[17px] w-full  lg:max-w-[544px] font-normal leading-relaxed text-[#4C5647]" style={{ fontFamily: 'DM Sans' }}>
                    that any compounded GLP-1 medication prescribed comes exclusively from highly regulated pharmacies.
                    </p>
                    </div>
                  </div>
                  <Button
                    text="Learn more"
                    className="px-8 py-3 rounded-full border-2 border-[#2d5f52] bg-[#E9FF86] text-[#000000] hover:opacity-90 transition-all font-medium text-[16px] w-fit"
                    style={{ fontFamily: 'DM Sans' }}
                  />
                </div>

                {/* Right Visual Section */}
                <div className="w-full lg:w-[45%] relative">
                  <div className="relative bg-[#D3DECE] rounded-[32px] p-8 min-h-[400px] ">
                    
                    {/* Dark Teal Rounded Shape - Top Left */}
                    <div 
                      className="absolute top-0 left-12 w-[260px] h-[260px] bg-[#2d5f52]"
                      style={{
                        borderRadius: '0% 0% 50% 50%',
                        
                      }}
                    ></div>
                    
                    {/* Yellow/Lime Rounded Shape - Bottom Left */}
                    <div 
                      className="absolute bottom-0 left-12 w-[260px] h-[150px] bg-[#E9FF86]"
                      style={{
                        borderRadius: '00% 90% 0% 0%',
                        transform: 'rotate(0deg)'
                      }}
                    >
                      <img src="/images/Rectangle-3.svg" alt="compundmed" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* White Rounded Shape - Right Side */}
                    <div 
                      className="absolute bottom-[-8px] right-[1px] w-[250px] h-[430px] "
                      style={{
                        borderRadius: '25% 30% 0% 0%',
                       
                      }}
                    >
                        <img src="/images/Rectangle-5.svg" alt="compundmed" className="w-full h-full object-cover" />
                      
                    </div>



                    {/* Product Images Container */}
                    <div className="relative z-10 flex items-center justify-around h-full pt-19 pl-5 lg:pl-15">
                      
                      {/* Left Product - Semaglutide */}
                      <div className="w-[45%] lg:mb-[50px] flex justify-center items-center ml-5">
                        <img 
                          src="/images/img_gemini_generate.png" 
                          alt="Semaglutide GLP-1 Medication" 
                          className="w-[193px] h-[309px] object-contain relative z-20"
                        />
                      </div>
                      
                      {/* Right Product - Tirzepatide */}
                      <div className="w-[45%] flex justify-around ml-24">
                        <img 
                          src="/images/img_683dd11ccf485b6_326x204.png" 
                          alt="Tirzepatide GLP-1 Product" 
                          className="w-[250px] h-auto object-contain relative z-10"
                        />
                        
                      </div>
                    </div>

                    {/* Badge: Personalized Care - Top Right */}
                    <div 
                      className="absolute top-[0px] right-[160px] lg:min-w-[170px] z-30 bg-[#c4d4c0] border-2 border-[#2d5f52] rounded-full pl-2 pr-10 py-1.5 flex justify-between items-center gap-4"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#2d5f52] p-1 flex items-center justify-center">
                       
                        <img src="/images/icon-1.svg" alt="Personalized Care" className="w-5 h-5 object-contain" />
                      </div>
                      <span className="text-sm lg:text-[18px] font-medium text-[#2d5f52]" style={{ fontFamily: 'Satoshi' }}>
                        personalized care
                      </span>
                    </div>

                    {/* Badge: Free Medication Delivery - Bottom Center */}
                    <div 
                      className="absolute bottom-2 left-[154px] transform -translate-x-1/2 z-30 bg-[#2d5f52] border-2 border-[#2d5f52] rounded-full pl-2 pr-6 py-1 flex items-center justify-start gap-4"
                    >
                      <div className="w-7 h-7 rounded-full p-1 bg-white flex items-center justify-start">
                        
                        <img src="/images/mage_tablet.svg" alt="Free Medication Delivery" className="w-5 h-5 object-contain" />
                      </div>
                      <span className="text-sm md:text-[18px] font-medium text-white" style={{ fontFamily: 'Satoshi' }}>
                        free medication delivery
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-[#DFE3E2]  md:hidden py-4 max-[361px]:px-3 min-[362px]:px-5 lg:py-20 mt-10 md:mt-20">
            <div className="w-full max-w-[1440px] bg-[#D3DECE]  mx-auto lg:py-10 rounded-[16px]">
              <div className="flex flex-col lg:flex-row lg:justify-between items-center py-3 gap-8 lg:gap-12 ">
                
                {/* Left Content */}
                <div className="w-full flex flex-col items-center gap-4">
                  <div className="flex flex-col items-center gap-6">
                    <h2 className="text-[32px] sm:text-[52px] text-center font-bold lg:text-[64px] font-normal leading-tight text-[#4a4a4a]" style={{ fontFamily: 'DM Sans', lineHeight: '1.1' }}>
                      <span>Compounded</span><br />
                      <span className="italic">GLP-1</span><br />
                      <span className="text-[#4a9b8a]">medications</span>
                    </h2>
                    {/* <div className="block max-w-[365px]:px-3"> */}
                    <div className='w-[336px] '
                    //  style={{
                    //   width: '336px',
                    //   maxWidth: '336px',
                    //   minWidth: '336px'
                    // }}
                    >
                    <p className="text-[12px]  sm:text-lg md:text-[12px]  lg:max-w-[544px] text-center font-normal  text-[#4C5647]" style={{ fontFamily: 'DM Sans' }}>
                      Start your newself weight loss journey with confidence, knowing
                    </p>
                    <p className="text-[12px] sm:text-lg md:text-[12px] lg:max-w-[544px] text-center font-normal  text-[#4C5647]" style={{ fontFamily: 'DM Sans' }}>
                    that any compounded GLP-1 medication prescribed comes exclusively from highly regulated pharmacies.
                    </p>
                    </div>
                    {/* </div> */}
                  </div>
                  <Button
                    text="Learn more"
            y        className="px-8 py-3 rounded-full border-2 border-[#2d5f52] bg-[#E9FF86] text-[#000000] hover:opacity-90 transition-all font-medium text-[16px] w-fit"
                    style={{ fontFamily: 'DM Sans' }}
                  />
                </div>

                {/* Right Visual Section */}
                <div className="w-fullrelative">
                  <div className="relative bg-[#D3DECE] max-h-[264px] ">
                    
                    {/* Dark Teal Rounded Shape - Top Left */}
                    <div 
                      className="absolute top-0 left-[-20px] "
                     
                    >
                         <img src="/images/r4.svg" alt="compundmed" className="object-cover" />
                    </div>
                    
                    {/* Yellow/Lime Rounded Shape - Bottom Left */}
                    <div 
                      className="absolute bottom-0 left-[-20px] "
                      
                    >
                      <img src="/images/r13.svg" alt="compundmed" className="object-cover" />
                    </div>
                    
                    {/* White Rounded Shape - Right Side */}
                    <div 
                      className="absolute bottom-0 right-[-20px] "
                      
                    >
                        <img src="/images/r5.svg" alt="compundmed" className="w-full h-full object-cover" style={{ filter: 'none', boxShadow: 'none' }} />
                      
                    </div>



                    {/* Product Images Container */}
                    <div className="relative z-10 flex items-end justify-between h-full pt-8 px-2">
                      
                      {/* Left Product - Semaglutide */}
                      <div className="flex justify-center items-center">
                        <img 
                          src="/images/leftone.png" 
                          alt="Semaglutide GLP-1 Medication" 
                          className="relative z-20 bottom-[45px] scale-[1] left-[-10px]"
                        />
                      </div>
                      
                      {/* Right Product - Tirzepatide */}
                      <div className="flex justify-center items-center">
                        <img 
                          src="/images/rightone.png" 
                          alt="Tirzepatide GLP-1 Product" 
                          className="object-contain relative z-20 right-[-33px]"
                        />
                        
                      </div>
                    </div>

                    {/* Badge: Personalized Care - Top Right */}
                    <div 
                      className="absolute top-[-7px] right-[16px] max-w-[190px] z-30 bg-[#c4d4c0] border-2 border-[#2d5f52] rounded-full pl-2 pr-3 py-1.5 flex justify-between items-center gap-2"
                    >
                      <div className="w-[20px] h-[20px] rounded-full bg-[#2d5f52] p-[4px] flex items-center justify-center">
                       
                        <img src="/images/icon-1.svg" alt="Personalized Care" className="w-[20px] h-[20px] object-contain" />
                      </div>
                      <span className="text-sm lg:text-[12px] font-medium text-[#2d5f52]" style={{ fontFamily: 'Satoshi' }}>
                        personalized care
                      </span>
                    </div>

                    {/* Badge: Free Medication Delivery - Bottom Center */}
                    <div 
                      className="absolute bottom-2 left-[-20px] w-[180px] z-30 bg-[#2d5f52] border-2 border-[#2d5f52] rounded-full pl-2  py-1 flex items-center justify-start gap-2"
                    >
                      <div className="w-[20px] h-[20px] rounded-full p-[4px] bg-white flex items-center justify-start">
                        
                        <img src="/images/mage_tablet.svg" alt="Free Medication Delivery" className="w-[20px] h-[20px] object-contain" />
                      </div>
                      <span className="text-sm md:text-[12px] font-medium text-white" style={{ fontFamily: 'Satoshi' }}>
                        free medication delivery
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}