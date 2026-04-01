import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ClipboardCheck, Calendar } from 'lucide-react';

const AuditAssurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    'Statutory Audit under Companies Act',
    'Internal Audit Services',
    'Tax Audit under Section 44AB',
    'GST Audit',
    'Stock Audit',
    'Due Diligence',
    'Certification Services',
    'Management Audit',
  ];

  return (
    <>
      <Helmet>
        <title>Audit & Assurance | ABSM & ASSOCIATES - Chandigarh</title>
        <meta name="description" content="Professional audit and assurance services in Chandigarh. Statutory audit, tax audit, internal audit, and certification services." />
        <link rel="canonical" href="https://absmassociates.com/services/audit-assurance" />
      </Helmet>

      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">AUDIT SERVICES</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Audit & Assurance
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
                Independent audit services that strengthen stakeholder confidence and ensure 
                regulatory compliance. Our thorough approach identifies risks and provides 
                actionable recommendations.
              </p>
              <Link to="/contact" className="inline-flex items-center space-x-2 btn-primary">
                <Calendar className="w-5 h-5" />
                <span>Schedule an Audit</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-8 text-center">Our Audit Services</h2>
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
            <h2 className="text-3xl font-bold text-white font-['Sora'] mb-6">Need an audit?</h2>
            <p className="text-white/70 mb-8">Contact us to discuss your audit requirements.</p>
            <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9]">
              <ClipboardCheck className="w-5 h-5" />
              <span>Get a Quote</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default AuditAssurance;
