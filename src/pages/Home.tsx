import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import WhyChooseUs from '../sections/WhyChooseUs';
import Industries from '../sections/Industries';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import Blog from '../sections/Blog';
import FAQSection from '../sections/FAQ';
import CTA from '../sections/CTA';
import ContactSection from '../sections/Contact';

const Home = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>ABSM & ASSOCIATES | Chartered Accountant Firm in Chandigarh</title>
        <meta
          name="description"
          content="Professional Chartered Accountant Firm in Chandigarh. GST Registration, Income Tax Filing, Audit & Assurance Services. 10+ years of experience. Schedule Your Consultation."
        />
        <meta
          name="keywords"
          content="Chartered Accountant Firm in Chandigarh, CA Firm in Chandigarh, GST Consultant Chandigarh, Income Tax Consultant Chandigarh, Business Advisory Chandigarh"
        />
        <link rel="canonical" href="https://absmassociates.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ABSM & ASSOCIATES | Chartered Accountant Firm in Chandigarh" />
        <meta property="og:description" content="Professional Chartered Accountant Firm in Chandigarh. GST Registration, Income Tax Filing, Audit & Assurance Services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://absmassociates.com/" />
        <meta property="og:image" content="https://absmassociates.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ABSM & ASSOCIATES | Chartered Accountant Firm in Chandigarh" />
        <meta name="twitter:description" content="Professional Chartered Accountant Firm in Chandigarh. GST Registration, Income Tax Filing, Audit & Assurance Services." />
        
        {/* Additional Meta */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ABSM & ASSOCIATES" />
        <meta name="geo.region" content="IN-CH" />
        <meta name="geo.placename" content="Chandigarh" />
      </Helmet>

      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Process />
        <Testimonials />
        <Blog />
        <FAQSection />
        <CTA />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
