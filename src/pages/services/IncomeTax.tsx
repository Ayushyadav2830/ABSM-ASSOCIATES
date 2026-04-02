import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Calendar } from 'lucide-react';

const IncomeTax = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Income Tax Return (ITR) Filing',
    'Tax Planning & Optimization',
    'Advance Tax Calculation',
    'TDS Return Filing',
    'Tax Refund Claims',
    'Notice Handling & Representation',
    'Capital Gains Computation',
    'NRI Taxation Services',
  ];

  return (
    <>
      <Helmet>
        <title>Income Tax Planning & Filing | ABSM & ASSOCIATES - Chandigarh</title>
        <meta name="description" content="Expert income tax planning and filing services in Chandigarh. ITR filing, tax optimization, and notice handling. Contact us today." />
        <link rel="canonical" href="https://absmassociates.com/services/income-tax" />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">TAX SERVICES</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Income Tax Planning & Filing
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
                Comprehensive income tax services for individuals, professionals, and businesses. 
                From ITR filing to tax planning, we ensure compliance while minimizing your tax liability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex items-center justify-center space-x-2 btn-primary">
                  <Calendar className="w-5 h-5" />
                  <span>Request Consultation</span>
                </Link>
                <a href="tel:+919781064214" className="flex items-center justify-center space-x-2 btn-secondary">
                  <ArrowRight className="w-5 h-5" />
                  <span>Speak with a Specialist</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">Our Income Tax Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0B1E3C]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F6F7F9] rounded-3xl p-8">
                <h3 className="text-xl font-bold text-[#0B1E3C] mb-4">Documents Required</h3>
                <ul className="space-y-3 text-[#5A6A7A]">
                  <li className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#2F6BFF]" /><span>PAN & Aadhaar Card</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#2F6BFF]" /><span>Form 16 (if salaried)</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#2F6BFF]" /><span>Bank Statements</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#2F6BFF]" /><span>Investment Proofs (80C, 80D)</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#2F6BFF]" /><span>Home Loan Certificate</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#2F6BFF]" /><span>Rental Income Details</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-['Sora'] mb-6">Finalize Your Tax Filings Today</h2>
            <p className="text-white/70 mb-8">Request Consultation with our tax experts today.</p>
            <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9]">
              <Calendar className="w-5 h-5" />
              <span>Initiate Filing Service</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default IncomeTax;
