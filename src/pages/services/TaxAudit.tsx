import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, FileSearch, Calendar } from 'lucide-react';

const TaxAudit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    'Section 44AB Tax Audit',
    'Form 3CA/3CB Preparation',
    'Form 3CD Compliance',
    'Books of Accounts Verification',
    'Tax Computation Review',
    'Deductions Eligibility Check',
    'Depreciation Calculation',
    'Audit Report Filing',
  ];

  return (
    <>
      <Helmet>
        <title>Tax Audit Services | ABSM & ASSOCIATES - Chandigarh</title>
        <meta name="description" content="Tax audit services under Section 44AB in Chandigarh. Professional tax audit reports and compliance. Contact us today." />
        <link rel="canonical" href="https://absmassociates.com/services/tax-audit" />
      </Helmet>

      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">TAX AUDIT</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Tax Audit
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
                Professional tax audit services under Section 44AB of the Income Tax Act. 
                We ensure compliance and provide accurate audit reports within deadlines.
              </p>
              <Link to="/contact" className="inline-flex items-center space-x-2 btn-primary">
                <Calendar className="w-5 h-5" />
                <span>Schedule Tax Audit</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">When is Tax Audit Mandatory?</h2>
                <div className="bg-[#F6F7F9] rounded-2xl p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0B1E3C]">Business turnover exceeds Rs. 1 crore</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0B1E3C]">Professional receipts exceed Rs. 50 lakhs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0B1E3C]">Opting for presumptive taxation with income exceeding basic limit</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">Our Tax Audit Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((s, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0B1E3C]">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-['Sora'] mb-6">Need a tax audit?</h2>
            <p className="text-white/70 mb-8">Ensure compliance with our professional tax audit services.</p>
            <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9]">
              <FileSearch className="w-5 h-5" />
              <span>Get a Quote</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default TaxAudit;
