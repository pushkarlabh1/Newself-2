import React from 'react';
import Button from '../ui/Button';
import {useState} from 'react';
export default function FAQ() {
    //const [selectedOffer, setSelectedOffer] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
    const faqItems = [
        { question: 'What happens after I complete the eligibility quiz?', answer: 'After completing the eligibility quiz, our medical team will review your responses and determine if you qualify for GLP-1 treatment.' },
        { question: 'Who qualifies for weight loss medications?', answer: 'Qualification depends on various factors including BMI, medical history, and current health status. Our providers will evaluate your individual case.' },
        { question: 'How old do I have to be to participate in the Newselfs program?', answer: 'Participants must be at least 18 years old to enroll in the Newselfs GLP-1 program.' },
        { question: 'What is the cost of the weight loss program?', answer: 'Our program starts at $150/month when paid annually, with all medications and support services included.' },
        { question: 'What happens if my BMI falls below 25?', answer: 'If your BMI falls below 25, our medical team will work with you to adjust your treatment plan accordingly.' }
      ];
    
      const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
      };
    return (
        <>
        <section className="w-full hidden md:block relative lg:min-h-[680px]">
            
            <div className="relative bg-neutral-warm w-full h-full py-[20px]">
              <div className="w-full max-w-[1440px] h-full mx-auto py-21 mt-21">
                <div className="flex items-start justify-center w-full lg:h-full max-w-[1280px] mx-auto">

                  <div 
                        className="absolute bottom-0 z-[3] left-0 w-[300px] h-[620px]  opacity-90"
                      style={{
                        borderRadius: '0% 0% 42% 42%',
                      }}
                    >
                      <img src="/images/left-shyt.svg" alt="faq" className="w-full h-full object-cover" />
                    </div>

                    {/* <div 
                        className="absolute bottom-0 z-[3] left-[60px] w-[300] h-[480px] bg-[#EFD5C7] opacity-0"
                      style={{
                        borderRadius: '0% 0% 50% 50%',
                      }}
                    ></div> */}

                      <div 
                        className="absolute lg:mt-[90px] z-[3] lg:left-[310px] w-[300px] h-[300px]  opacity-90"
                      style={{
                        borderRadius: '50% 50% 0% 0%',
                      }}
                    >
                      <img src="/images/right_top.svg" alt="faq" className="w-full h-full object-cover" />
                    </div>

                    <div 
                        className="absolute bottom-0 z-[3] lg:left-[310px] w-[300px] h-[300px] opacity-90"
                      style={{
                        borderRadius: '50% 50% 50% 50%',
                      }}
                    >
                      <img src="/images/bottom-left.svg" alt="faq" className="w-full h-full object-cover" />
                    </div>
                  
                  {/* Left Content */}
                  <div className="flex flex-col z-10 lg:h-[680px]  gap-6 lg:py-[120px] items-center w-[40%] ml-2">
                    
                    <h2 className="text-[28px] sm:text-[42px] lg:text-7xl font-black leading-[38px] sm:leading-[56px] lg:leading-[75px] text-text-muted" style={{ fontFamily: 'Satoshi' }}>
                      Get the answers you need
                    </h2>
                    <p className="text-[18px] font-small leading-5xl " style={{ fontFamily: 'Satoshi' }}>
                      Find answers to frequently asked questions about our weight loss program and community.
                    </p>
                    <div className="flex flex-col gap-2.5 w-full">
                      <div className="flex items-center w-full mt-1.5">
                        <span className="text-lg font-black leading-2xl text-text-muted" style={{ fontFamily: 'Satoshi' }}>
                          Still have questions?
                        </span>
                      </div>
                      <Button
                        text="Contact Us"
                        className="px-6 py-3 rounded-2xl border border-border-primary font-medium bg-accent-highlight text-[16px] hover:opacity-90 transition-all lg:max-w-[138px]"
                        style={{ fontFamily: 'DM Sans' }}
                      />
                    </div>
                  </div>

                  {/* Right FAQ Section */}
                  <div className="flex flex-col gap-8 items-end self-center flex-1">
                    <div className="flex flex-col gap-4 w-[90%]">
                      {faqItems?.map((faq, index) => (
                        <div key={index} className="w-full">
                          <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full bg-expandHeader-background border border-border-warm rounded-sm px-6 py-5 text-left hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light"
                          >
                            <span className="text-lg font-black leading-2xl text-text-muted opacity-95" style={{ fontFamily: 'Satoshi' }}>
                              {faq?.question}
                            </span>
                          </button>
                          {expandedFAQ === index && (
                            <div className="bg-white border-x border-b border-border-warm rounded-b-sm px-6 py-4">
                              <p className="text-base font-medium leading-2xl text-text-muted" style={{ fontFamily: 'Satoshi' }}>
                                {faq?.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <Button
                      text="Load More"
                      className="px-6 py-3 rounded-2xl border border-border-primary bg-neutral-white text-text-primary hover:bg-gray-50 transition-all mr-[278px] lg:max-w-[200px]"
                      style={{ fontFamily: 'Satoshi' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full md:hidden relative  lg:min-h-[680px]">
            
            <div className="relative  bg-neutral-warm w-full h-full py-10">
              <div className=" w-[360px] max-[362px]:px-2 min-[363px]:px-3 relative h-full mx-auto py-21 mt-21">
              <div 
                        className="absolute top-0 z-1 left-[10%] opacity-90"
                      // style={{
                      //   borderRadius: '0% 0% 42% 42%',
                      // }}
                    >
                      <img src="/images/leftbottom.svg" alt="faq" className=" object-cover" />
                    </div>
                    <div 
                        className="absolute  top-[150px] z-1 right-[10%]  opacity-90"
                      
                    >
                      <img src="/images/rightbottom.svg" alt="faq" className=" object-cover" />
                    </div>
                  
                      <div 
                        className="absolute lg:mt-[90px] z-1 right-[10%]    opacity-90"
                      // style={{
                      //   borderRadius: '50% 50% 0% 0%',
                      // }}
                    >
                      <img src="/images/rightop.svg" alt="faq" className=" object-cover" />
                    </div>

                   
                <div className="flex flex-col items-start gap-6 z-10 justify-between w-full lg:h-full max-w-[1280px] mx-auto">
                  <div className="relative">

                  
                  
                  {/* Left Content */}
                  <div className="flex flex-col z-100  justify-center gap-6 lg:py-[120px] items-center w-full">
                    
                    <h2 className="text-[32px] text-center sm:text-[42px] lg:text-7xl font-black leading-[38px] sm:leading-[56px] lg:leading-[75px] text-text-muted" style={{ fontFamily: 'Satoshi' }}>
                      Get the answers you need
                    </h2>
                    <p className="text-[12px] font-medium text-center px-4 " style={{ fontFamily: 'Satoshi' }}>
                      Find answers to frequently asked questions about our weight loss program and community.
                    </p>
                    <div className="flex flex-col gap-2.5 w-full">
                      <div className="flex items-center w-full mt-1.5 justify-center">
                        <span className="text-[12px] font-black   text-text-muted" style={{ fontFamily: 'Satoshi' }}>
                          Still have questions?
                        </span>
                      </div>
                      <Button
                        text="Contact Us"
                        className="px-3 py-3 rounded-2xl mx-auto border border-border-primary font-medium bg-accent-highlight text-[16px] hover:opacity-90 transition-all max-w-[123px]"
                        style={{ fontFamily: 'DM Sans' }}
                      />
                    </div>
                  </div>
                  </div>

                  {/* Right FAQ Section */}
                  <div className="flex flex-col gap-8 z-10 items-center  flex-1">
                    <div className="flex flex-col gap-4 max-w-[358px]">
                      {faqItems?.map((faq, index) => (
                        <div key={index} className="w-full">
                          <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full bg-expandHeader-background border border-border-warm rounded-sm px-2 py-5 text-left hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light"
                          >
                            <span className="text-[16px] font-black opacity-70" style={{ fontFamily: 'Satoshi' }}>
                              {faq?.question}
                            </span>
                          </button>
                          {expandedFAQ === index && (
                            <div className="bg-white border-x border-b border-border-warm rounded-b-sm px-4 py-4">
                              <p className="text-base font-medium leading-2xl text-text-muted" style={{ fontFamily: 'Satoshi' }}>
                                {faq?.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <Button
                      text="Load More"
                      className="px-2 py-2 mx-auto rounded-2xl border border-border-primary bg-neutral-white text-text-primary hover:bg-gray-50 transition-all  min-w-[130px]"
                      style={{ fontFamily: 'Satoshi' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}