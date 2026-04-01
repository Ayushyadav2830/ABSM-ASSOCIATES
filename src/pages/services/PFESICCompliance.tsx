import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Calendar } from 'lucide-react';

const PFESICCompliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'EPF & ESIC Registration for Employers',
    'Monthly PF/ESIC Contribution Calculations',
    'Challan Generation and Payment',
    'Employee KYC UAN Linking',
    'PF Withdrawal & Transfer Assistance',
    'Annual Return Filing',
  ];

  return (
    <>
      <Helmet>
        <title>PF & ESIC Compliance | ABSM & ASSOCIATES - Chandigarh</title>
        <meta name="description" content="Expert Provident Fund (PF) and Employee State Insurance (ESIC) compliance services in Chandigarh. Ensure your business meets all statutory labor requirements." />
        <link rel="canonical" href="https://absmassociates.com/services/pf-esic-compliance" />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">LABOR LAW COMPLIANCE</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                PF & ESIC Compliance
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
                Protect your business from labor law penalties. Our comprehensive payroll compliance 
                services ensure smooth monthly EPF and ESIC processing, allowing you to focus on business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex items-center justify-center space-x-2 btn-primary">
                  <Calendar className="w-5 h-5" />
                  <span>Talk to an Expert</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">Our Core Services</h2>
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
                <h3 className="text-xl font-bold text-[#0B1E3C] mb-4">Why is Compliance Crucial?</h3>
                <p className="text-[#5A6A7A] mb-4">
                  Failure to comply with PF and ESIC regulations can result in severe financial penalties, 
                  prosecution under the EPF & MP Act, and damage to corporate reputation.
                </p>
                <p className="text-[#5A6A7A]">
                  Our end-to-end management takes the burden off your HR department so you can maintain 
                  seamless relationships with your workforce.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-['Sora'] mb-6">Streamline your HR compliance</h2>
            <p className="text-white/70 mb-8">Let our team handle your monthly labor law obligations.</p>
            <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9]">
              <Users className="w-5 h-5" />
              <span>Contact Us Today</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default PFESICCompliance;
