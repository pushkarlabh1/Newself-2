import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import BreadCrumb from '../components/ui/BreadCromb';
import EditText from '../components/ui/EditText';


import Hero from '../components/landing/hero';
import SecondSection from '../components/landing/secondSection';
import ThirdSection from '../components/landing/thrid';
import Comparison from '../components/landing/comparison';
import Compundmed from '../components/landing/compundmed';
import Holistic from '../components/landing/holistic';
import CTA from '../components/landing/cta';
import FAQ from '../components/landing/faq';

const LandingPage = () => {
 
  return (
    <>
      <Helmet>
        <title>Black Friday GLP-1 Deals - Up to $400 OFF Weight Loss Medications | Newself Healthcare</title>
        <meta
          name="description"
          content="Exclusive Black Friday & Cyber Monday deals on FDA-approved GLP-1 weight loss medications. Save up to $400 on semaglutide treatments with comprehensive support at Newself Healthcare. Limited time offers with codes HOLIDAY1, HOLIDAY3, HOLIDAY6, HOLIDAY12."
        />
        <meta property="og:title" content="Black Friday GLP-1 Deals - Up to $400 OFF Weight Loss Medications | Newself Healthcare" />
        <meta property="og:description" content="Exclusive Black Friday & Cyber Monday deals on FDA-approved GLP-1 weight loss medications. Save up to $400 on semaglutide treatments with comprehensive support at Newself Healthcare." />
      </Helmet>
      <div className="w-full bg-neutral-white">
        <Header />

        <main className='w-full overflow-x-hidden'>
          
          <Hero />
           {/* Best GLP-1 Provider Section */}
           <div id="pricing">
          <SecondSection />
          </div>
          {/* FDA Disclaimer Section */}
          <ThirdSection />

         

         
          {/* Comparison Section */}
          <Comparison />

          {/* Compounded Medications Section */}
          <Compundmed />
          {/* Holistic Approach Section */}
          <Holistic />
          {/* CTA Section with Background */}
          <div className="bg-[#2d5f52] md:hidden h-[10px]"></div>
          <CTA />

          {/* FAQ Section */}
          <FAQ />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;