import React from 'react';
import Button from '../ui/Button';

const Footer = () => {
  const footerLinks = [
    { label: 'Blog', href: '#blog' },
    { label: 'GLP-1', href: '#glp1' },
    { label: 'Longevity', href: '#longevity' },
    { label: 'Microdosing', href: '#microdosing' },
    { label: 'Merch', href: '#merch' },
    { label: 'Newselfs Meals', href: '#newselfs' },
    
    { label: 'Contact Us', href: '#contact' }
  ];

  const socialLinks = [
    { src: '/images/img_link_white_a700.svg', alt: 'Facebook', href: '#facebook' },
    { src: '/images/img_link_white_a700_42x42.svg', alt: 'Twitter', href: '#twitter' },
    { src: '/images/img_link_42x42.svg', alt: 'Instagram', href: '#instagram' },
    { src: '/images/img_link_1.svg', alt: 'LinkedIn', href: '#linkedin' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Medications Safety Information', href: '#safety' }
  ];

  return (
    <footer id="contact" className="w-full bg-primary-light">
      <div className="w-full max-w-[1500px] mx-auto max-[361px]:px-2 min-[362px]:px-5 md:px-4 sm:px-6 lg:px-20 py-6 lg:py-28">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
          
          {/* Logo */}
          <div className="w-full lg:w-auto">
            <img 
              src="/images/img_footer_logo.png" 
              alt="Newself Footer Logo" 
              className="w-full max-w-[140px] sm:max-w-[420px] lg:max-w-[560px] h-auto object-contain"
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start lg:items-end md:gap-6 gap-3 w-full lg:w-auto">
            
            {/* Email and Contact Links */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                
                <div className="flex flex-col lg:items-end gap-2">
                  <p className="md:text-lg text-[16px]font-normal leading-xl text-neutral-white mt-3" style={{ fontFamily: 'DM Sans' }}>
                  Contact us
                  </p>
                  <div className="flex  items-start lg:items-start gap-0 ">
                  <img 
                  src="/images/img_img_white_a700.svg" 
                  alt="Email icon" 
                  className="w-6 h-6 mt-0"
                />
                    <a 
                      href="#contact" 
                      className="md:text-lg text-[16px] font-normal leading-xl mb-4  text-neutral-white hover:underline focus:outline-none focus:ring-2 focus:ring-neutral-white focus:ring-offset-2 focus:ring-offset-primary-light rounded px-1"
                      style={{ fontFamily: 'DM Sans' }}
                    >
                      support@joinNewselfs.com
                    </a>
                    
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-start lg:items-end gap-1 ">
              <a 
                      href="#contactanos" 
                      className="md:text-lg text-[16px] font-normal  leading-xl text-neutral-white  hover:underline focus:outline-none focus:ring-2 focus:ring-neutral-white focus:ring-offset-2 focus:ring-offset-primary-light rounded px-1"
                      style={{ fontFamily: 'DM Sans' }}
                    >
                      Contactanos
                    </a>
                    <div className='flex items-center gap-1'>
                <img 
                  src="/images/img_img_white_a700.svg" 
                  alt="Email icon" 
                  className="w-6 h-6"
                />
                <p className="text-lg font-normal leading-xl text-neutral-white" style={{ fontFamily: 'DM Sans' }}>
                  ayuda@joinNewselfs.com
                </p>
                </div>
              </div>
            </div>

            {/* Live Chat Button */}
            <Button
              text="Live Chat"
              className="px-6 py-3 rounded-2xl border border-border-primary bg-accent-highlight text-text-primary hover:opacity-90 transition-all md:mt-1"
              style={{ fontFamily: 'DM Sans' }}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-primary-light md:pt-12 pt-6 md:mt-14">
          <div className="flex flex-wrap justify-start lg:justify-between items-center gap-2 lg:gap-0">
            
            {/* Main Links */}
            <div className="flex flex-wrap items-center gap-2 lg:gap-0 w-full lg:justify-between">
              {footerLinks?.map((link, index) => (
                <React.Fragment key={index}>
                  <a
                    href={link?.href}
                    className="text-[20px] sm:text-3xl lg:text-4xl font-bold leading-9xl text-neutral-white hover:text-accent-highlight transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-white focus:ring-offset-2 focus:ring-offset-primary-light rounded px-1"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {link?.label}
                  </a>
                  {index < footerLinks?.length - 1 && (
                    <img 
                      src="/images/img_clip_path_group.svg" 
                      alt="Separator" 
                      className="md:w-[12px] md:h-[12px] w-[10px] h-[10px] md:mx-1"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* App Download and Social Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-t border-primary-light md:pt-12 mt-12 md:mt-12">
          
          {/* App Download Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xl md:mb-[7px] sm:text-3xl md:text-[24px] font-semibold  text-neutral-white self-start md:self-end" style={{ fontFamily: 'DM Sans' }}>
              Download our app
            </p>
            <div className="flex gap-4">
              <img 
                src="/images/img_link.svg" 
                alt="App Store" 
                className="w-32 sm:w-36 h-12 object-contain hover:opacity-80 transition-opacity cursor-pointer"
              />
              <img 
                src="/images/img_link_black_900.svg" 
                alt="Google Play" 
                className="w-36 sm:w-41 h-12 object-contain hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-5 mr-6">
            {socialLinks?.map((social, index) => (
              <a
                key={index}
                href={social?.href}
                className="w-[42px] h-[42px] border border-neutral-white rounded-full flex items-center justify-center hover:bg-neutral-white hover:bg-opacity-20 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-white focus:ring-offset-2 focus:ring-offset-primary-light"
                aria-label={social?.alt}
              >
                <img 
                  src={social?.src} 
                  alt={social?.alt} 
                  className="w-[20px] h-[20px] object-contain "
                />
              </a>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="relative w-[100%] max-[370px]:overflow-x-hidden mx-auto mt-12">
          <div className=" w-[358px] min-[410px]:w-full md:max-w-[1440px] border-t border-primary-light"></div>
          
          <div className="md:space-y-2  md:mt-12">
            <div className=' w-[358px] min-[410px]:w-full mx-auto md:w-full'>
            <p className=" text-[9px] md:text-lg hidden md:block font-light leading-3xl text-neutral-white" style={{ fontFamily: 'DM Sans' }}>
              The assessment available on the Newselfs website does not create a doctor–patient relationship. Clinical services are provided by OpenLoop Health and other networks of U.S.-licensed clinicians who determine eligibility for GLP-1 treatment based on medical history and assessment responses. Providers retain full discretion to prescribe or decline compounded GLP-1 medications. Compounded medications offered through Newselfs are produced in FDA-registered facilities but are not FDA-approved and have not been evaluated by the FDA for safety, efficacy, or quality. Results may vary and depend on individual adherence, provider guidance, and lifestyle changes. Newselfs does not manufacture compounded medications, and product appearance may differ from website images. Newselfs partners with certified U.S. pharmacies to ensure high standards of safety and quality.
            </p> 
            <p className=" text-[10px] md:text-lg md:hidden font-light md:leading-3xl text-neutral-white" style={{ fontFamily: 'DM Sans' }}>
              The assessment available on the Newselfs website does not create a doctor–patient relationship. Clinical services are provided by OpenLoop Health and other networks of U.S.-licensed clinicians who determine eligibility for GLP-1 treatment based on medical history and assessment responses. Providers retain full discretion to prescribe or decline compounded GLP-1 medications. Compounded medications offered through Newselfs are produced in FDA-registered facilities but are not FDA-approved and have not been evaluated by the FDA for safety, efficacy, or quality. Results may vary and depend on individual adherence, provider guidance, and lifestyle changes. Newselfs does not manufacture compounded medications, and product appearance may differ from website images. Newselfs partners with certified U.S. pharmacies to ensure high standards of safety and quality.
            </p> 
            </div>
            
            <div className=' w-[358px] min-[410px]:w-full mx-auto md:w-full'>            
              <p className=" text-[10px] hidden md:block md:text-lg font-light  md:leading-3xl text-neutral-whiteOpacity w-full md:w-[96%]" style={{ fontFamily: 'DM Sans' }}>
              treatment but may be prescribed off-label for weight management. All trademarks are the property of their respective owners. Unless otherwise noted, results reflect Newselfs patient experiences rather than public clinical studies.
            </p>
            <p className="text-[10px] hidden md:block md:text-lg font-light  md:leading-3xl text-neutral-whiteOpacity w-full md:w-[96%]" style={{ fontFamily: 'DM Sans' }}>
             </p>
            <p className=" text-[10px]  md:hidden md:text-lg font-light  md:leading-3xl text-neutral-whiteOpacity w-full md:w-[96%]" style={{ fontFamily: 'DM Sans' }}>
              treatment but may be prescribed off-label for weight management. All trademarks are the property of their respective owners. Unless otherwise noted, results reflect Newselfs patient experiences rather than public clinical studies.
            </p>
            
            </div>

          </div>
        </div>

        {/* Final Footer Section */}
        <div className=" mt-4 md:mt-8">
          <p className="text-[10px] max-w-[358px] min-[410px]:max-w-full md:max-w-[1440px] mx-auto md:text-[16px] font-medium md:leading-2xl text-neutral-whiteOpacity" style={{ fontFamily: 'Satoshi' }}>
            Medication costs are included in the Newselfs program. Zepbound® is FDA-approved for chronic weight management; Ozempic® is FDA-approved for type 2 diabetes
          </p>
          
          {/* Company Information */}
          <div className="max-w-[358px] min-[410px]:max-w-full md:max-w-[1440px] mx-auto bg-accent-highlight rounded-sm px-1.5 py-3 md:p-4 mt-10 mb-8">
            <div className="flex flex-col items-center ">
              <div className="flex justify-center hidden md:flex items-center  text-center">
                <span className="md:text-lg text-[10px] font-normal md:leading-xl text-text-primary" style={{ fontFamily: 'DM Sans' }}>
                  © 2025 Thrive Health, Inc. All rights reserved. Thrive Health, Inc. is the legal entity operating Newselfs (
                </span>
                <a 
                  href="https://joinNewselfs.com"
                  target="_blank"
                  className="md:text-md text-[10px]  inline md:inline-block font-normal leading-lg text-text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-text-primary focus:ring-offset-2 focus:ring-offset-accent-highlight rounded"
                  style={{ fontFamily: 'DM Sans' }}
                >
                   joinNewselfs.com 
                </a>
                <span> )</span>
              
              </div>
              <div className="text-center">
  <span className="md:text-lg md:hidden text-[10px] font-normal text-text-primary">
    © 2025 Thrive Health, Inc. All rights reserved. Thrive Health, Inc. is the 
  </span>
  <p className="md:text-lg md:hidden text-[10px] font-normal text-text-primary">
    legal entity operating Newselfs{" "}
    <a
      href="https://joinNewselfs.com"
      target="_blank"
      className="underline hover:no-underline"
    >
      (joinNewselfs.com)
    </a>
  </p>
</div>
              
              <div className="flex flex-wrap justify-center items-center gap-4 text-center">
                <a 
                  href="#address"
                  className="md:text-md text-[10px] font-normal leading-lg text-text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-text-primary focus:ring-offset-2 focus:ring-offset-accent-highlight rounded"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  17322 Murphy Ave, Irvine, CA 92614
                </a>
                <a 
                  href="tel:4847159081"
                  className="md:text-md text-[10px] font-normal leading-lg text-text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-text-primary focus:ring-offset-2 focus:ring-offset-accent-highlight rounded"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  (484) 715 9081
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-4 text-center">
                {legalLinks?.map((link, index) => (
                  <a
                    key={index}
                    href={link?.href}
                    className="md:text-md text-[10px] font-normal leading-lg text-text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-text-primary focus:ring-offset-2 focus:ring-offset-accent-highlight rounded"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {link?.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;