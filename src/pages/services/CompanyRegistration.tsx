import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Building, Calendar } from 'lucide-react';

const CompanyRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    'Private Limited Company',
    'Limited Liability Partnership (LLP)',
    'One Person Company (OPC)',
    'Partnership Firm',
    'Proprietorship Registration',
    'Section 8 Company (NGO)',
    'Nidhi Company',
    'Producer Company',
  ];

  const process = [
    'Name Approval',
    'Document Preparation',
    'Filing with MCA',
    'Certificate of Incorporation',
    'PAN & TAN Application',
    'Bank Account Opening',
  ];

  return (
    <>
      <Helmet>
        <title>Company Registration | ABSM & ASSOCIATES - Chandigarh</title>
        <meta name="description" content="Company registration services in Chandigarh. Private limited, LLP, OPC, and partnership firm registration. Start your business today." />
        <link rel="canonical" href="https://absmassociates.com/services/company-registration" />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">INCORPORATION</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Company Registration
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
                Establish your legal entity with our comprehensive incorporation services. 
                Our experts manage all statutory documentation to ensure a seamless formation process.
              </p>
              <Link to="/contact" className="inline-flex items-center space-x-2 btn-primary">
                <Calendar className="w-5 h-5" />
              <span>Initiate Incorporation</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">Types of Companies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((s, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0B1E3C]">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">Registration Process</h2>
                <div className="space-y-4">
                  {process.map((p, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-[#2F6BFF] rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {i + 1}
                      </div>
                      <span className="text-[#0B1E3C]">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-['Sora'] mb-6">Corporate Entity Formation</h2>
            <p className="text-white/70 mb-8">Let us help you start your business the right way.</p>
            <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9]">
              <Building className="w-5 h-5" />
              <span>Initiate Process</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CompanyRegistration;
