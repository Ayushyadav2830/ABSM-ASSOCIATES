import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, Calendar } from 'lucide-react';

const Accounting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    'Bookkeeping & Accounting',
    'Bank Reconciliation',
    'Accounts Payable & Receivable',
    'Financial Statement Preparation',
    'MIS Reports',
    'Payroll Processing',
    'Fixed Asset Management',
    'Year-end Closing',
  ];

  return (
    <>
      <Helmet>
        <title>Accounting & Bookkeeping | ABSM & ASSOCIATES - Chandigarh</title>
        <meta name="description" content="Professional accounting and bookkeeping services in Chandigarh. Monthly accounting, payroll, and financial reporting." />
        <link rel="canonical" href="https://absmassociates.com/services/accounting-bookkeeping" />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">ACCOUNTING SERVICES</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Accounting & Bookkeeping
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
                Reliable accounting and bookkeeping services to keep your financial records 
                accurate and up-to-date. Focus on your business while we handle the numbers.
              </p>
              <Link to="/contact" className="inline-flex items-center space-x-2 btn-primary">
                <Calendar className="w-5 h-5" />
                <span>Get a Quote</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-8 text-center">Our Accounting Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-[#F6F7F9] rounded-2xl p-6 flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0B1E3C] font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-['Sora'] mb-6">Need accounting support?</h2>
            <p className="text-white/70 mb-8">Let us handle your books while you focus on growth.</p>
            <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9]">
              <BookOpen className="w-5 h-5" />
              <span>Start Today</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Accounting;
