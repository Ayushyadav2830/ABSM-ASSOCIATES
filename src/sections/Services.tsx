import { Link } from 'react-router-dom';
import { FileText, Calculator, ClipboardCheck, ArrowRight } from 'lucide-react';

const Services = () => {

  const services = [
    {
      icon: FileText,
      title: 'GST Registration & Filing',
      description: 'Monthly, quarterly, and annual filings with reconciliation.',
      link: '/services/gst-registration',
      bullets: ['Registration', 'Return filing', 'Reconciliation', 'Notice support'],
    },
    {
      icon: Calculator,
      title: 'Income Tax Planning',
      description: 'Planning and filing for individuals, firms, and companies.',
      link: '/services/income-tax',
      bullets: ['Tax optimization', 'ITR filing', 'Scrutiny handling', 'Refund tracking'],
    },
    {
      icon: ClipboardCheck,
      title: 'Audit & Assurance',
      description: 'Independent reviews that strengthen stakeholder confidence.',
      link: '/services/audit-assurance',
      bullets: ['Statutory audit', 'Internal audit', 'Tax audit', 'Certification work'],
    },
  ];

  // Removed animations for static website

  return (
    <section
      id="services"
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-8 lg:mb-12">
          <span className="eyebrow block mb-4">ADVISORY SERVICES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-[#5A6A7A]">
            We provide a sophisticated suite of tax, audit, and advisory services tailored to meet the complex requirements of modern businesses and high-net-worth individuals.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="service-card bg-white rounded-[28px] p-6 lg:p-8 card-shadow"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#0B1E3C] rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-3">
                {service.title}
              </h3>
              <p className="text-[#5A6A7A] mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-[#5A6A7A]">
                    <span className="w-1.5 h-1.5 bg-[#2F6BFF] rounded-full" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center space-x-2 text-[#2F6BFF] font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services */}
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-[#0B1E3C] font-medium hover:text-[#2F6BFF] transition-colors"
          >
            <span>View all services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
