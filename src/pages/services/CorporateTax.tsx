import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Building2, Calendar } from 'lucide-react';

const CorporateTax = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    'Corporate Tax Planning',
    'Transfer Pricing Compliance',
    'International Taxation',
    'MAT Computation',
    'Dividend Distribution Tax',
    'Corporate Restructuring',
    'Merger & Acquisition Tax',
    'Tax Holiday Benefits',
  ];

  return (
    <>
      <Helmet>
        <title>Corporate Taxation | ABSM & ASSOCIATES - Chandigarh</title>
        <meta name="description" content="Corporate taxation services in Chandigarh. Tax planning, transfer pricing, and international taxation for businesses." />
        <link rel="canonical" href="https://absmassociates.com/services/corporate-taxation" />
      </Helmet>

      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">CORPORATE SERVICES</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Corporate Taxation
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
                Strategic corporate tax solutions for businesses of all sizes. From tax planning 
                to compliance, we help you navigate complex corporate tax regulations.
              </p>
              <Link to="/contact" className="inline-flex items-center space-x-2 btn-primary">
                <Calendar className="w-5 h-5" />
                <span>Consult Our Experts</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-8 text-center">Corporate Tax Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-[#F6F7F9] rounded-2xl p-6 flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0B1E3C] font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-['Sora'] mb-6">Optimize your corporate tax</h2>
            <p className="text-white/70 mb-8">Get in touch for customized corporate tax solutions.</p>
            <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9]">
              <Building2 className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CorporateTax;
