import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Calculator, Calendar } from 'lucide-react';

const TDSReturns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Monthly/Quarterly TDS Return Filing',
    'TDS Certificates (Form 16/16A) Issuance',
    'TCS Return Processing',
    'TDS Payment & Challan Generation',
    'Notice Resolution & Correction Returns',
    'Lower Deduction Certificate Assistance',
  ];

  return (
    <>
      <Helmet>
        <title>TDS Returns & Compliance | ABSM & ASSOCIATES - Chandigarh</title>
        <meta name="description" content="Professional TDS return filing and compliance services in Chandigarh. Ensure Seamless processing of Form 16/16A, corrections, and lower deduction certificates." />
        <link rel="canonical" href="https://absmassociates.com/services/tds-returns" />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">TAX COMPLIANCE</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                TDS Returns & Compliance
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
                Stay compliant with strict timeline requirements for Tax Deducted at Source (TDS). 
                We manage the entire lifecycle from calculation to return filing and certificate issuance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex items-center justify-center space-x-2 btn-primary">
                  <Calendar className="w-5 h-5" />
                  <span>Request Consultation</span>
                </Link>
                <a href="tel:+919781064214" className="flex items-center justify-center space-x-2 btn-secondary">
                  <span>Consult an Expert</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">Our TDS Solutions</h2>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0B1E3C]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F6F7F9] rounded-3xl p-8">
                <h3 className="text-xl font-bold text-[#0B1E3C] mb-4">Why Timely TDS Filing Matters?</h3>
                <p className="text-[#5A6A7A] mb-4">
                  The Income Tax Department imposes hefty late filing fees (under section 234E) 
                  and interest (under section 201(1A)) for delayed TDS deposits and return filings.
                </p>
                <p className="text-[#5A6A7A]">
                  Our proactive systems ensure your books are reconciled and challans are mapped correctly, 
                  shielding you from unnecessary penalties and department notices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-['Sora'] mb-6">Professional TDS Advisory</h2>
            <p className="text-white/70 mb-8">Speak to our experts to streamline your payroll and vendor TDS compliance.</p>
            <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9]">
              <Calculator className="w-5 h-5" />
              <span>Initiate Compliance Support</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default TDSReturns;
