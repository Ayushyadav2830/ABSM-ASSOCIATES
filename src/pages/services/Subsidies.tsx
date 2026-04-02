import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Percent, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Subsidies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scope = [
    'RIPS Incentives: Facilitating benefits under the Rajasthan Investment Promotion Scheme (RIPS) and similar state policies.',
    'PMFME Scheme: Specialized support for formalizing micro food processing enterprises and obtaining capital subsidies.',
    'Central Govt Schemes: Strategic advisory on ZED, PMEGP, and other central government industrial incentives.',
    'Cluster Development: Navigating government grants for common facility centers and industrial clusters.',
    'Submission Management: Professional handling of all subsidy applications and departmental follow-ups.',
    'Eligibility Assessment: Detailed review of business status to identify all relevant state and central incentives.'
  ];

  return (
    <>
      <Helmet>
        <title>Government Subsidies & Industrial Grants | ABSM & ASSOCIATES</title>
        <meta
          name="description"
          content="Navigating state and central government incentives including RIPS, PMFME schemes, and other industrial clusters by ABSM & ASSOCIATES."
        />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">SUBSIDIES & GRANTS</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Strategic mobilization of government incentives
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                We provide institutions and micro-enterprises with a professional approach to government subsidies. Our experts ensure every incentive is identified and mobilized with technical precision.
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
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Benefit Optimization</h4>
                        <p className="text-sm text-[#5A6A7A]">A resolute focus on optimizing the benefits obtainable under various industrial policies.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <Percent className="w-6 h-6 text-[#2F6BFF]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Policy Mapping</h4>
                        <p className="text-sm text-[#5A6A7A]">Ensuring every applicable policy is identified and fulfilled within the erforderlichen deadlines.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0B1E3C] rounded-[28px] p-8 lg:p-10 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-['Sora'] mb-4">Discuss your subsidy requirements</h3>
                    <p className="text-white/70 mb-8">Schedule a professional consultation with our industrial subsidy experts for a structured review of your eligibility.</p>
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

export default Subsidies;
