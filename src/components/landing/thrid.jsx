import React from 'react';
import Button from '../ui/Button';
import BreadCrumb from '../ui/BreadCromb';
import EditText from '../ui/EditText';

export default function ThirdSection() {
    return (
        <>
          <section className="w-full bg-neutral-white md:py-10 pb-4">
            <div className="w-full max-w-[1440px] mx-auto px-3 md:px-4 sm:px-6 lg:px-10">
              <div className="flex flex-col items-center md:gap-10 gap-6">
                
                {/* FDA Disclaimer Box */}
                <div className="bg-neutral-beige rounded-2xl px-4 md:px-6 py-3 md:py-4 w-full md:w-[76%]">
                  {/* Mobile version - with line break */}
                  <div className="md:hidden text-[11px] font-normal leading-sung tracking-tight text-text-brown" style={{ fontFamily: 'Satoshi' }}>
                    <div>*Compounded medications have not been evaluated or approved by the FDA for safety, efficacy, or quality. Your provider will work with you to determine what, if any, medication is right for your own healthcare needs. Visit our</div>
                    <div style={{ marginTop: '2px' }}> <span className="font-normal">Medication Safety Information.</span></div>
                  </div>
                  
                  {/* Desktop version - no line break */}
                  <p className="hidden md:block text-sm font-normal leading-sung tracking-tight text-text-brown" style={{ fontFamily: 'Satoshi' }}>
                    *Compounded medications have not been evaluated or approved by the FDA for safety, efficacy, or quality. Your provider will work with you to determine what, if any, medication is right for your own healthcare needs. Visit our <span className="font-normal">Medication Safety Information.</span>
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="bg-neutral-warm rounded-lg px-[22px] py-[22px] w-full md:w-[76%]">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center w-full">
                      <img 
                        src="/images/img_container.svg" 
                        alt="Trust Badge 1" 
                        className="md:w-[10%] w-[40%] h-auto object-contain"
                      />
                      <img 
                        src="/images/img_img.svg" 
                        alt="Trust Badge 2" 
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <img 
                      src="/images/img_container_gray_800_02.svg" 
                      alt="Trust Badge 3" 
                      className="md:w-[16%] w-[50%] h-auto object-contain"
                    />
                    <div className="flex items-center">
                      <p className="text-xs font-normal leading-xs text-text-warm" style={{ fontFamily: 'Inter' }}>
                        <span className="font-medium" style={{ fontFamily: 'Satoshi' }}>Excellent</span>
                        <span className="font-black" style={{ fontFamily: 'Satoshi' }}> 2,000+</span>
                        <span className="font-medium" style={{ fontFamily: 'Satoshi' }}> reviews.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}