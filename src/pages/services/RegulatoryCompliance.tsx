import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckSquare, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegulatoryCompliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scope = [
    'FEMA-FDI/ODI: Technical advisory and compliance management for foreign direct investment (FDI) and overseas investment (ODI).',
    'SEBI Compliance: Ongoing support for listed entities and fund structures under SEBI (LODR) and other regulations.',
    'ROC Filings: Comprehensive management of all MCA and Registrar of Companies (ROC) statutory filing mandates.',
    'RERA Compliance: Ensuring adherence to Real Estate Regulatory Authority (RERA) registration and quarterly mandates.',
    'Corporate Laws: Strategic advisory on Companies Act, 2013 and amendments to ensure corporate governance.',
    'Professional Representation: Acting as authorized representatives before regulatory and adjudicating authorities.'
  ];

  return (
    <>
      <Helmet>
        <title>Regulatory Compliance & Corporate Laws | ABSM & ASSOCIATES</title>
        <meta
          name="description"
          content="Ensuring adherence to SEBI mandates, FEMA-FDI/ODI regulations, ROC filings, and state-specific RERA requirements by ABSM & ASSOCIATES."
        />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">REGULATORY SOLUTIONS</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Institutionalizing corporate governance and compliance
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                We provide institutions and corporate entities with a resolute framework for regulatory compliance. Our experts ensure every mandate is met with technical and legal precision.
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
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Governance Excellence</h4>
                        <p className="text-sm text-[#5A6A7A]">A resolute focus on institutionalizing governance excellence within your corporate structure.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <CheckSquare className="w-6 h-6 text-[#2F6BFF]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Mandatory Compliance</h4>
                        <p className="text-sm text-[#5A6A7A]">Ensuring every statutory mandate is identified and fulfilled within the required timelines.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0B1E3C] rounded-[28px] p-8 lg:p-10 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-['Sora'] mb-4">Discuss your regulatory requirements</h3>
                    <p className="text-white/70 mb-8">Schedule a professional consultation with our compliance experts for a structured review of your corporate status.</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9] transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Schedule Your Consultation</span>
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

export default RegulatoryCompliance;
