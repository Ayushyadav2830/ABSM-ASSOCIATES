import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Taxation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scope = [
    'Direct Taxation: Income Tax planning, return filing, and representation for individuals, firms, and corporates.',
    'Indirect Taxation: Comprehensive GST compliance management, GSTR filings, and input tax credit (ITC) reconciliation.',
    'Transfer Pricing: Strategic documentation and compliance for cross-border and specified domestic transactions.',
    'Assessment & Appeals: Professional representation before Income Tax and GST authorities for scrutiny and appeals.',
    'E-Scrutiny Handling: Technical responses and documentation for electronic notices and departmental audits.',
    'International Taxation: Advisory on Double Taxation Avoidance Agreements (DTAA) and foreign remittance compliance.'
  ];

  return (
    <>
      <Helmet>
        <title>Taxation Advisory | ABSM & ASSOCIATES - Chartered Accountants</title>
        <meta
          name="description"
          content="Expert taxation services in Chandigarh. Strategic planning, GST compliance, transfer pricing, and departmental representation by ABSM & ASSOCIATES."
        />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">TAXATION SERVICES</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Fiscal discipline and tax optimization
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                Navigating the evolving tax landscape requires precision and foresight. We provide end-to-end taxation solutions that ensure statutory compliance while optimizing your fiscal position.
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
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Preventive Compliance</h4>
                        <p className="text-sm text-[#5A6A7A]">Proactive identifies of potential tax risks before they escalate into departmental notices.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <Calculator className="w-6 h-6 text-[#2F6BFF]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Strategic Planning</h4>
                        <p className="text-sm text-[#5A6A7A]">Tailored tax strategies that align with your business objectives and financial growth.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0B1E3C] rounded-[28px] p-8 lg:p-10 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-['Sora'] mb-4">Discuss your tax requirements</h3>
                    <p className="text-white/70 mb-8">Schedule a professional consultation with our taxation experts to streamline your compliance.</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9] transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Book Consultation</span>
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

export default Taxation;
