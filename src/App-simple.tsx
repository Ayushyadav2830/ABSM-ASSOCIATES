import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

// Service Pages
import GSTRegistration from './pages/services/GSTRegistration';
import IncomeTax from './pages/services/IncomeTax';
import AuditAssurance from './pages/services/AuditAssurance';
import CorporateTax from './pages/services/CorporateTax';
import Accounting from './pages/services/Accounting';
import NRITaxation from './pages/services/NRITaxation';
import CompanyRegistration from './pages/services/CompanyRegistration';
import TaxAudit from './pages/services/TaxAudit';
import InternalAudit from './pages/services/InternalAudit';

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
  return (
    <Router>
      <div className="min-h-screen bg-[#F6F7F9]">
        <div className="grain-overlay"></div>
        
        <Routes>
          {/* Landing Pages - No Navigation/Footer */}
          <Route path="/landing/ca-thane" element={<LandingCA />} />
          <Route path="/landing/gst-thane" element={<LandingGST />} />
          <Route path="/landing/income-tax-mumbai" element={<LandingIncomeTax />} />
          <Route path="/landing/company-registration-thane" element={<LandingCompany />} />
          
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
                
                {/* Service Pages */}
                <Route path="/services/gst-registration-filing" element={<GSTRegistration />} />
                <Route path="/services/income-tax-planning" element={<IncomeTax />} />
                <Route path="/services/audit-assurance" element={<AuditAssurance />} />
                <Route path="/services/corporate-taxation" element={<CorporateTax />} />
                <Route path="/services/accounting-bookkeeping" element={<Accounting />} />
                <Route path="/services/nri-taxation" element={<NRITaxation />} />
                <Route path="/services/company-registration" element={<CompanyRegistration />} />
                <Route path="/services/tax-audit" element={<TaxAudit />} />
                <Route path="/services/internal-audit" element={<InternalAudit />} />
                
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
