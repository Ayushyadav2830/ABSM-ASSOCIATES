import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import WhyChooseUs from './pages/WhyChooseUs';
import Industries from './pages/Industries';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import Sitemap from './pages/Sitemap';
import Appointment from './pages/Appointment';
import Career from './pages/Career';
import Resources from './pages/Resources';

// Service Pages
import Services from './pages/Services';
import AuditAssurance from './pages/services/AuditAssurance';
import Taxation from './pages/services/Taxation';
import Insolvency from './pages/services/Insolvency';
import LegalAdvisory from './pages/services/LegalAdvisory';
import MSMEServices from './pages/services/MSMEServices';
import SuccessionPlanning from './pages/services/SuccessionPlanning';
import StartupAdvisory from './pages/services/StartupAdvisory';
import RegulatoryCompliance from './pages/services/RegulatoryCompliance';
import Valuation from './pages/services/Valuation';
import FundRaising from './pages/services/FundRaising';
import MergerAcquisition from './pages/services/MergerAcquisition';
import CapitalAdvisory from './pages/services/CapitalAdvisory';
import Subsidies from './pages/services/Subsidies';
import InvestmentAdvisory from './pages/services/InvestmentAdvisory';
import BusinessIncorporation from './pages/services/BusinessIncorporation';
import BusinessStartup from './pages/services/BusinessStartup';

// Legacy/Internal Service Pages
import GSTRegistration from './pages/services/GSTRegistration';
import IncomeTax from './pages/services/IncomeTax';
import CorporateTax from './pages/services/CorporateTax';
import Accounting from './pages/services/Accounting';
import NRITaxation from './pages/services/NRITaxation';
import CompanyRegistration from './pages/services/CompanyRegistration';
import TaxAudit from './pages/services/TaxAudit';
import InternalAudit from './pages/services/InternalAudit';
import TDSReturns from './pages/services/TDSReturns';
import PFESICCompliance from './pages/services/PFESICCompliance';

// Landing Pages
import LandingCA from './pages/landing/LandingCA';
import LandingGST from './pages/landing/LandingGST';
import LandingIncomeTax from './pages/landing/LandingIncomeTax';
import LandingCompany from './pages/landing/LandingCompany';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import StickyCallButton from './components/StickyCallButton';
import ExitIntentPopup from './components/ExitIntentPopup';
import ScrollPopup from './components/ScrollPopup';

function App() {
  useEffect(() => {
    // Schema markup for LocalBusiness
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "ABSM & ASSOCIATES",
      "description": "Professional Chartered Accountants firm in Chandigarh. Specializing in Audit, Taxation, Corporate Compliance, and Strategic Financial Consulting.",
      "url": "https://absmassociates.com",
      "telephone": "+91-9781064214",
      "email": "info@absmassociates.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "SCO 35, 2nd Floor, Sector 7-C, Madhya Marg",
        "addressLocality": "Chandigarh",
        "addressRegion": "Chandigarh",
        "addressCountry": "IN",
        "postalCode": "160019"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "30.7333",
        "longitude": "76.7794"
      },
      "openingHours": "Mo-Sa 10:00-18:30",
      "priceRange": "$$$",
      "areaServed": ["Chandigarh", "Panchkula", "Mohali", "India"],
      "serviceType": [
        "Statutory & Tax Audit",
        "International Taxation & NRI Services",
        "GST Compliance & Consulting",
        "Corporate Advisory & Business Setup",
        "Strategic Financial Planning"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#F6F7F9]">
        <div className="grain-overlay"></div>
        
        <Routes>
          {/* Landing Pages - No Navigation/Footer */}
          <Route path="/landing/ca-chandigarh" element={<LandingCA />} />
          <Route path="/landing/gst-chandigarh" element={<LandingGST />} />
          <Route path="/landing/income-tax-chandigarh" element={<LandingIncomeTax />} />
          <Route path="/landing/company-registration" element={<LandingCompany />} />
          
          {/* Main Website Pages */}
          <Route path="*" element={
            <>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/why-choose-us" element={<WhyChooseUs />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/careers" element={<Career />} />
                <Route path="/resources" element={<Resources />} />
                
                {/* Service Pages */}
                <Route path="/services" element={<Services />} />
                <Route path="/services/audit-assurance" element={<AuditAssurance />} />
                <Route path="/services/taxation" element={<Taxation />} />
                <Route path="/services/insolvency-ibc" element={<Insolvency />} />
                <Route path="/services/legal-advisory" element={<LegalAdvisory />} />
                <Route path="/services/msme-services" element={<MSMEServices />} />
                <Route path="/services/succession-planning" element={<SuccessionPlanning />} />
                <Route path="/services/startup-advisory" element={<StartupAdvisory />} />
                <Route path="/services/regulatory-compliance" element={<RegulatoryCompliance />} />
                <Route path="/services/valuation" element={<Valuation />} />
                <Route path="/services/fund-raising" element={<FundRaising />} />
                <Route path="/services/merger-acquisition" element={<MergerAcquisition />} />
                <Route path="/services/capital-advisory" element={<CapitalAdvisory />} />
                <Route path="/services/subsidies" element={<Subsidies />} />
                <Route path="/services/investment-advisory" element={<InvestmentAdvisory />} />
                <Route path="/services/business-incorporation" element={<BusinessIncorporation />} />
                <Route path="/services/business-startup" element={<BusinessStartup />} />
                
                {/* Specific Compliance Routes */}
                <Route path="/services/gst-registration" element={<GSTRegistration />} />
                <Route path="/services/income-tax" element={<IncomeTax />} />
                <Route path="/services/corporate-taxation" element={<CorporateTax />} />
                <Route path="/services/accounting" element={<Accounting />} />
                <Route path="/services/nri-taxation" element={<NRITaxation />} />
                <Route path="/services/company-registration" element={<CompanyRegistration />} />
                <Route path="/services/tax-audit" element={<TaxAudit />} />
                <Route path="/services/internal-audit" element={<InternalAudit />} />
                <Route path="/services/tds-returns" element={<TDSReturns />} />
                <Route path="/services/pf-esic-compliance" element={<PFESICCompliance />} />
                
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
              <WhatsAppButton />
              <StickyCallButton />
              <ExitIntentPopup />
              <ScrollPopup />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
