import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Calculator, 
  ClipboardCheck, 
  Globe2, 
  Building,
  Receipt,
  Users,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allServices = [
    {
      icon: FileText,
      title: 'GST Registration & Filing',
      description: 'Comprehensive GST solutions including registration, monthly returns, reconciliation, and audit support.',
      link: '/services/gst-registration',
      delay: '0'
    },
    {
      icon: Calculator,
      title: 'Income Tax Planning',
      description: 'Strategic tax planning and return filing for individuals, HNIs, and corporate entities.',
      link: '/services/income-tax',
      delay: '100'
    },
    {
      icon: ClipboardCheck,
      title: 'Audit & Assurance',
      description: 'Independent reviews and statutory audits that strengthen stakeholder confidence and compliance.',
      link: '/services/audit-assurance',
      delay: '200'
    },
    {
      icon: Globe2,
      title: 'NRI Taxation',
      description: 'Expert advisory on FEMA compliance, repatriation, and tax optimization for Non-Resident Indians.',
      link: '/services/nri-taxation',
      delay: '100'
    },
    {
      icon: Building,
      title: 'Company Registration',
      description: 'End-to-end incorporation services for Private Limited, LLP, OPC, and Startup India registration.',
      link: '/services/company-registration',
      delay: '200'
    },
    {
      icon: Receipt,
      title: 'TDS Returns',
      description: 'Quarterly TDS return filing, corrections, certificate generation, and compliance management.',
      link: '/services/tds-returns',
      delay: '100'
    },
    {
      icon: Users,
      title: 'PF & ESIC Compliance',
      description: 'Monthly payroll compliance, EPF/ESIC registrations, chalans, and return filings.',
      link: '/services/pf-esic-compliance',
      delay: '200'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | ABSM & ASSOCIATES - Chandigarh</title>
        <meta
          name="description"
          content="Explore our comprehensive range of Chartered Accountant services in Chandigarh including GST, Income Tax, Audit, and Company Registration."
        />
        <link rel="canonical" href="https://absmassociates.com/services" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">OUR SERVICES</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Comprehensive financial solutions
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                From basic compliance to complex advisory, we offer a full spectrum of Chartered Accountant services tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {allServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-[#F6F7F9] rounded-[28px] p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                >
                  <div className="w-14 h-14 bg-[#0B1E3C] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2F6BFF] transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-3">
                    {service.title}
                  </h2>
                  
                  <p className="text-[#5A6A7A] mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-[#2F6BFF] font-medium mt-auto group-hover:underline">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 lg:py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Sora'] mb-6">
              Not sure which service you need?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a professional discovery call with ABSM & ASSOCIATES to discuss your specific requirements and get a tailored solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Request Consultation
              </Link>
              <a
                href="https://wa.me/919781064214"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-colors font-medium"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
