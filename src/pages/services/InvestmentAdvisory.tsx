import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scope = [
    'Private Equity: Identification and financial due diligence of private equity opportunities for HNI investors.',
    'Alternative Investment Funds (AIF): Structural advisory and distribution for Category I, II, and III AIFs.',
    'Family Office Services: Comprehensive management of family office wealth and multi-generational assets.',
    'Wealth Preservation: Integrating tax-efficient investment strategies within the broader wealth preservation goal.',
    'Mutual Fund Distribution: Strategic portfolio allocation across diversified mutual fund categories.',
    'Ongoing Monitoring: Periodic review and rebalancing of portfolios to ensure alignment with financial objectives.'
  ];

  return (
    <>
      <Helmet>
        <title>Investment Advisory & Wealth Management | ABSM & ASSOCIATES</title>
        <meta
          name="description"
          content="Bespoke wealth management through Private Equity, Alternative Investment Funds (AIF), and family office structures by ABSM & ASSOCIATES."
        />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">INVESTMENT SOLUTIONS</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Bespoke wealth management for individuals and family offices
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                We provide HNI clients and institutions with a professional approach to wealth management. Our experts ensure every investment is strategically aligned and tax-efficient.
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
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Tailored Portfolios</h4>
                        <p className="text-sm text-[#5A6A7A]">A resolute focus on creating tailored investment portfolios that meet your unique risk-reward profile.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <BarChart3 className="w-6 h-6 text-[#2F6BFF]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0B1E3C] mb-1">Independent Monitoring</h4>
                        <p className="text-sm text-[#5A6A7A]">Ensuring every investment is monitored and evaluated with technical precision.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0B1E3C] rounded-[28px] p-8 lg:p-10 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-['Sora'] mb-4">Discuss your investment goals</h3>
                    <p className="text-white/70 mb-8">Schedule a professional consultation with our wealth advisory team for a structured portfolio review.</p>
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

export default InvestmentAdvisory;
