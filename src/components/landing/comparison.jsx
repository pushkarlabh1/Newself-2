import React from 'react';
import Button from '../ui/Button';

export default function Comparison() {
    const comparisonFeatures = [
        'Membership Fee',
        'Insurance Management',
        'Video Provider Visits',
        'Accountability Coach',
        'Weekly Support Groups',
        'Mental Health Counseling',
        '1-on-1 Dietitian Visits',
        'Live Zoom Workouts',
        'GLP-1 Fitness App',
        'GLP-1 Meal Preps'
      ];
     
    return (
        <>
        <section className="w-full bg-neutral-white pt-4 pb-0 md:py-6 ">
            <div className="w-full max-w-[1200px] mx-auto max-[370px]:px-3 px-4 md:px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center gap-12">
                
                {/* Section Header */}
                <div className="flex flex-col items-center gap-6 max-w-[360px] min-[410px]:max-w-full md:max-w-[800px]">
                  <div className="flex justify-center">
                    <span className="text-[12px] md:text-[18px] font-bold leading-tight text-[#8b6f47] text-center  tracking-wide" style={{ fontFamily: 'Satoshi' }}>
                      Compare newself vs the rest
                    </span>
                  </div>
                  <h2 className="text-[30px] min-[380px]:text-[32px] sm:text-[36px] lg:text-[57px] font-black leading-tight text-[#254D45] text-center" style={{ fontFamily: 'Satoshi' }}>
                    Why pay more for less results ?
                  </h2>
                  <p className="text-[12px] md:text-sm sm:text-base font-normal lg:text-[19px] leading-relaxed text-[#4C5647]  max-w-[768px] text-center" style={{ fontFamily: 'Satoshi' }}>
                    Newselfs GLP-1 doesn't just <span className="font-black">cost less</span>, it <span className="font-black">delivers more</span>. More support, more flexibility, and more real results for your money. See how it stacks up:
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="w-full max-w-[900px]">
  
  {/* Table Header */}
  <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[10px] md:gap-4 mb-0 relative">
    {/* Empty cell for feature column */}
    <div className="flex items-end pb-2">
      <span className="text-base font-medium text-[#4a4a4a] text-[18px]" style={{ fontFamily: 'Satoshi' }}>
       
      </span>
    </div>
    
    {/* Newself Column - With Green Background */}
    <div className="flex flex-col items-center min-w-[105px] md:min-w-[200px] relative">
      {/* Badge with extended bottom */}
      <div className="bg-[#2d5f52] text-white px-4 pt-2 pb-6 rounded-t-xl min-w-[105px] md:min-w-[200px] flex items-center justify-center relative z-10">
        <span className="text-[12px] md:text-[14px] text-center font-medium" style={{ fontFamily: 'Satoshi' }}>
          Lowest Price!
        </span>
      </div>
      <div className="relative z-10 flex flex-col items-center w-full bg-[#EBF5E8] rounded-t-xl pb-3 pt-4 -mt-4">
        {/* Logo */}
        <img 
          src="/images/img_logo.png" 
          alt="newself" 
          className="h-6 w-auto object-contain"
        />
      </div>
    </div>

    {/* Competitor 1 Column (ro) */}
    <div className="flex flex-col items-center justify-end pb-2">
      {/* Logo */}
      <img 
        src="/images/img_68c2fd381a6f325.png" 
        alt="ro" 
        className="h-5 w-auto object-contain mb-3"
      />
      {/* Price */}
      <span className="text-base font-medium text-[#d9534f]" style={{ fontFamily: 'Satoshi' }}>
        $145/mo
      </span>
    </div>

    {/* Competitor 2 Column (hims) */}
    <div className="flex flex-col items-center justify-end pb-2">
      {/* Logo */}
      <img 
        src="/images/img_1145548507.png" 
        alt="hims" 
        className="h-5 w-auto object-contain mb-3"
      />
      {/* Price */}
      <span className="text-base font-medium text-[#d9534f]" style={{ fontFamily: 'Satoshi' }}>
        $69/mo
      </span>
    </div>
  </div>

  {/* Feature Rows */}
  <div className="w-full relative">
    {/* Continuous green background for newself column - Desktop (lg and above) */}
    <div className="absolute hidden lg:block bg-[#EBF5E8] rounded-b-xl" 
         style={{ 
           left: '38%', 
           width: '22.2%', 
           top: 0, 
           bottom: 0 
         }}>
    </div>
    {/* Continuous green background for newself column - Tablet (md to lg) */}
    <div className="absolute hidden md:block lg:hidden bg-[#EBF5E8] rounded-b-xl" 
         style={{ 
           left: '35.5%', 
           width: '27%', 
           top: 0, 
           bottom: 0 
         }}>
    </div>
    {/* Continuous green background for newself column - Mobile (below md) */}
    <div className="absolute block md:hidden bg-[#EBF5E8] rounded-b-xl" 
         style={{ 
           left: '34%', 
           width: '29.2%', 
           top: 0, 
           bottom: 0 
         }}>
    </div>
    
    {comparisonFeatures?.map((feature, index) => (
      <div 
        key={index} 
        className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 md:gap-3 items-center py-4 border-b border-gray-200 relative"
      >
        {/* Feature Name */}
        <span className="text-[11px] md:text-[16px] font-normal text-[#4a4a4a] max-w-[90px] md:max-w-none leading-tight" style={{ fontFamily: 'Satoshi' }}>
          {feature}
        </span>

        {/* Newself - Show $0 for Membership Fee, checkmark for others */}
        <div className="flex justify-center relative z-10">
          {index === 0 ? (
            <span className="text-2xl font-bold text-[#5a9b8a]" style={{ fontFamily: 'DM Sans' }}>
              $0
            </span>
          ) : (
            <div className="bg-[#50A896] rounded-full p-2 md:w-10 md:h-10 w-8 h-8 flex items-center justify-center">
              <img 
                src="/images/img_.png" 
                alt="Included" 
                className="w-4 h-4 object-contain"
              />
            </div>
          )}
        </div>
        
        {/* Competitor 1 (ro) */}
        <div className="flex md:justify-center justify-end">
          {index <= 2 ? (
            <div className="bg-[#50A896] rounded-full p-2 md:w-10 md:h-10 w-8 h-8 flex items-center justify-center">
              <img 
                src="/images/img_.png" 
                alt="Included" 
                className="w-4 h-4 object-contain"
              />
            </div>
          ) : (
            <div className="bg-[#fce7e7] rounded-full md:w-10 md:h-10 w-8 h-8 flex items-center justify-center">
              <span className="text-lg font-semibold text-[#dc2626]" style={{ fontFamily: 'DM Sans' }}>
                X
              </span>
            </div>
          )}
        </div>
        
        {/* Competitor 2 (hims) - All X */}
        <div className="flex justify-center">
          <div className="bg-[#fce7e7] rounded-full md:w-10 md:h-10 w-8 h-8 flex items-center justify-center">
            <span className="text-lg font-semibold text-[#dc2626]" style={{ fontFamily: 'DM Sans' }}>
              X
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
        
</div>
                {/* Disclaimer */}
                <div className="lg:min-w-[1260px] min-[387px]:px-1 ">
                  <p className="text-[12px] max-[370px]:text-[11px]  font-medium md:text-[16px] leading-relaxed text-[#4a4a4a] text-left md:text-center" style={{ fontFamily: 'Satoshi' }}>
                    <span className="font-black">Disclaimer:</span> The information in this comparison chart is based on the best available data as of September 1, 2025. Some details may have changed since that time. For questions, please contact us at <span className="font-black">support@joinNewselfs.com</span>. Newselfs is not affiliated with, sponsored by, or endorsed by the other brands whose logos appear in this chart.
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  text="Get started"
                  className="px-25 py-3 rounded-[720px] border border-[#2d5f52] bg-[#E9FF86] text-[#2d5f52] hover:opacity-90 transition-all w-full  lg:max-w-[550px] font-normal text-[16px]"
                  style={{ fontFamily: 'DM Sans' }}
                />
              </div>
            </div>
          </section>
        </>
    );
}