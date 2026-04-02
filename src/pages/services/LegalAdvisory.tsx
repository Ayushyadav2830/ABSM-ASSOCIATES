import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Gavel, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scope = [
    'Financial Litigation: Specialized support for financial and corporate disputes across various jurisdictions.',
    'Arbitration & Mediation: Expert representation and resolution of commercial conflicts through alternative dispute resolution (ADR) mechanisms.',
    'Business Agreements: Drafting of specialized commercial contracts, joint venture agreements, and equity participation documents.',
    'Corporate Mediation: Professional services for internal and external corporate conciliation to ensure business continuity.',
    'Risk Management: Technical advisory on legal and operational risks within the corporate framework.',
    'Contractual Reviews: Detailed due diligence and review of existing business commitments to ensure legal prudence.'
  ];

  return (
    <>
      <Helmet>
        <title>Legal Advisory & Litigation Support | ABSM & ASSOCIATES</title>
        <meta
          name="description"
          content="Technical support for financial litigation, arbitration, and drafting of specialized business agreements to mitigate corporate risk by ABSM & ASSOCIATES."
        />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">LEGAL ADVISORY</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Strategic legal support for complex corporate needs
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                We provide technical support for financial litigation, arbitration, and a wide range of corporate legal requirements. Our experts work meticulously to mitigate your business risks through specialized advisory.
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
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Legal Prudence</h4>
                        <p className="text-sm text-[#5A6A7A]">A resolute focus on legal and regulatory prudence in every business decision.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <Gavel className="w-6 h-6 text-[#2F6BFF]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Litigation Support</h4>
                        <p className="text-sm text-[#5A6A7A]">Comprehensive support for financial and corporate litigation proceedings.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0B1E3C] rounded-[28px] p-8 lg:p-10 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-['Sora'] mb-4">Discuss your legal advisory needs</h3>
                    <p className="text-white/70 mb-8">Schedule a professional consultation with our legal experts to explore strategic advisory.</p>
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

export default LegalAdvisory;
