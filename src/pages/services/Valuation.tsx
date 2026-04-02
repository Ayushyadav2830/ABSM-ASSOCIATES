import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { PieChart, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Valuation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scope = [
    'Business Valuation: Certified valuation of enterprise worth for strategic investments and acquisition modeling.',
    'Equity Valuation: Precise calculation of equity share value for regulatory and strategic purposes.',
    'Intellectual Property (IPR): Technical valuation of intangible assets including trademarks, patents, and goodwill.',
    'Fixed Assets: Certified valuation of land, buildings, and plant & machinery for statutory requirements.',
    'Regulatory Compliance: Valuation assessments as mandated by ICAI standards and Companies Act, 2013.',
    'Strategic Consulting: Valuation-based insights for joint ventures and mergers.'
  ];

  return (
    <>
      <Helmet>
        <title>Certified Valuation Services | ABSM & ASSOCIATES</title>
        <meta
          name="description"
          content="Certified valuation of business entities, equity shares, intangible assets (IPR), and immovable properties for statutory purposes by ABSM & ASSOCIATES."
        />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">VALUATION SERVICES</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Technical precision in asset and business valuation
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                We provide certified valuation assessments that fulfill statutory and strategic requirements. Our experts work with technical precision to calculate asset and business worth within the regulatory landscape.
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
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Standardized Methodologies</h4>
                        <p className="text-sm text-[#5A6A7A]">A resolute focus on standardized valuation methodologies recognized by statutory authorities.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <PieChart className="w-6 h-6 text-[#2F6BFF]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Technical Precision</h4>
                        <p className="text-sm text-[#5A6A7A]">Technical precision to ensure every valuation is robust and legally defensible.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0B1E3C] rounded-[28px] p-8 lg:p-10 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-['Sora'] mb-4">Discuss your valuation needs</h3>
                    <p className="text-white/70 mb-8">Schedule a professional consultation with our certified valuation experts for a structured assessment.</p>
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

export default Valuation;
