import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ClipboardList, Calendar } from 'lucide-react';

const InternalAudit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    'Operational Audit',
    'Compliance Audit',
    'Financial Internal Audit',
    'Process Review & Improvement',
    'Risk Assessment',
    'Internal Control Evaluation',
    'Fraud Detection & Prevention',
    'Management Audit Reports',
  ];

  const benefits = [
    'Identify operational inefficiencies',
    'Ensure regulatory compliance',
    'Detect and prevent fraud',
    'Strengthen internal controls',
    'Improve decision-making',
    'Enhance stakeholder confidence',
  ];

  return (
    <>
      <Helmet>
        <title>Internal Audit Services | ABSM & ASSOCIATES - Chandigarh</title>
        <meta name="description" content="Internal audit services in Chandigarh. Operational audits, compliance reviews, and risk assessment for businesses." />
        <link rel="canonical" href="https://absmassociates.com/services/internal-audit" />
      </Helmet>

      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">INTERNAL AUDIT</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Internal Audit
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
                Comprehensive internal audit services to evaluate your organization's operations, 
                identify risks, and recommend improvements for better governance.
              </p>
              <Link to="/contact" className="inline-flex items-center space-x-2 btn-primary">
                <Calendar className="w-5 h-5" />
                <span>Schedule Internal Audit</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">Our Internal Audit Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((s, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0B1E3C]">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F6F7F9] rounded-3xl p-8">
                <h3 className="text-xl font-bold text-[#0B1E3C] mb-4">Benefits of Internal Audit</h3>
                <ul className="space-y-3">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2F6BFF]" />
                      <span className="text-[#5A6A7A]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-['Sora'] mb-6">Strengthen your internal controls</h2>
            <p className="text-white/70 mb-8">Our internal audit services help you identify risks and improve operations.</p>
            <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9]">
              <ClipboardList className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default InternalAudit;
