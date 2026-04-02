import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ClipboardCheck, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuditAssurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scope = [
    'Statutory Audit: Independent validation of financial statements as mandated by the Companies Act, 2013.',
    'Internal Audit: Strategic evaluation of internal controls and risk management frameworks.',
    'Tax Audit: Specialized auditing services as required under Section 44AB of the Income Tax Act.',
    'Concurrent Audit: Ongoing monitoring and validation of financial transactions for institutional clients.',
    'Risk Management: Technical advisory on identifying and mitigating operational and financial risks.',
    'Stock Audit: Physical verification and valuation of inventory and biological assets.'
  ];

  return (
    <>
      <Helmet>
        <title>Audit & Assurance Services | ABSM & ASSOCIATES - Chartered Accountants</title>
        <meta
          name="description"
          content="Professional audit and assurance in Chandigarh. Statutory, internal, and risk-based audits ensuring fiscal transparency by ABSM & ASSOCIATES."
        />
        <link rel="canonical" href="https://absmassociates.com/services/audit-assurance" />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">AUDIT SOLUTIONS</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Institutionalizing fiscal transparency and control
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                We provide institutions and corporate entities with a robust framework for financial validation. Our experts ensure every audit engagement is performed with technical precision and independence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-8">Scope of Service</h2>
                <div className="space-y-6">
                  {scope.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#2F6BFF]" />
                      </div>
                      <p className="text-[#5A6A7A] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-[#F6F7F9] rounded-[28px] p-8 lg:p-10 border border-[rgba(11,30,60,0.05)]">
                  <h3 className="text-2xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">Our Approach</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <ShieldCheck className="w-6 h-6 text-[#2F6BFF]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Risk-Based Methodology</h4>
                        <p className="text-sm text-[#5A6A7A]">A resolute focus on identifying high-risk areas to ensure thorough validation and compliance.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <ClipboardCheck className="w-6 h-6 text-[#2F6BFF]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Factual Accuracy</h4>
                        <p className="text-sm text-[#5A6A7A]">Technical precision to ensure every audit report is factually accurate and legally defensible.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0B1E3C] rounded-[28px] p-8 lg:p-10 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-['Sora'] mb-4">Discuss your audit requirements</h3>
                    <p className="text-white/70 mb-8">Schedule a professional consultation with our audit specialists for a structured walkthrough of your mandate.</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9] transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Request Consultation</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AuditAssurance;
