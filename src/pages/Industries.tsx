import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Rocket,
  Factory,
  Briefcase,
  Building2,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    {
      icon: Rocket,
      title: 'Startups & SaaS',
      description:
        'From incorporation to investor-ready financials, we help startups navigate compliance while focusing on growth.',
      services: [
        'Company incorporation',
        'Cap table management',
        'GST registration & filing',
        'TDS compliance',
        'Investor reporting',
        'ESOP structuring',
      ],
      image: '/images/industry-startup.jpg',
    },
    {
      icon: Factory,
      title: 'Manufacturing & Trade',
      description:
        'Inventory-linked tax planning and supply chain compliance for manufacturing and trading businesses.',
      services: [
        'Inventory valuation',
        'Input tax credit optimization',
        'Excise & customs compliance',
        'Cost accounting',
        'GST e-way bill compliance',
        'Export documentation',
      ],
      image: '/images/industry-manufacturing.jpg',
    },
    {
      icon: Briefcase,
      title: 'Professionals & Consultants',
      description:
        'Individual tax planning, invoicing, and expense optimization for independent professionals.',
      services: [
        'Individual tax planning',
        'Professional invoicing',
        'Expense tracking',
        'Advance tax calculations',
        'ITR filing',
        'GST for professionals',
      ],
      image: '/images/industry-professionals.jpg',
    },
    {
      icon: Building2,
      title: 'Real Estate & Construction',
      description:
        'Specialized services for real estate developers, builders, and construction companies.',
      services: [
        'Project cost accounting',
        'RERA compliance',
        'GST on under-construction properties',
        'Joint venture structuring',
        'TDS on property transactions',
        'Rental income taxation',
      ],
      image: '/images/industry-manufacturing.jpg',
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description:
        'End-to-end compliance solutions for retail stores and online businesses.',
      services: [
        'E-commerce GST compliance',
        'Multi-state registration',
        'Marketplace reconciliations',
        'Inventory management',
        'POS integration',
        'Return filing automation',
      ],
      image: '/images/industry-startup.jpg',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare & Pharma',
      description:
        'Compliance services tailored for hospitals, clinics, pharmacies, and pharmaceutical companies.',
      services: [
        'Medical practice accounting',
        'Pharma licensing support',
        'Clinical trial documentation',
        'Import-export compliance',
        'Research expense claims',
        'Healthcare GST compliance',
      ],
      image: '/images/industry-professionals.jpg',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve | ABSM & ASSOCIATES - Chartered Accountant</title>
        <meta
          name="description"
          content="We serve diverse industries including startups, manufacturing, professionals, real estate, retail, and healthcare. Industry-specific CA services in Chandigarh."
        />
        <link rel="canonical" href="https://absmassociates.com/industries" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">INDUSTRIES WE SERVE</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Expertise across sectors
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                We understand the unique challenges and compliance requirements of different 
                industries. Our sector-specific expertise ensures you get relevant, practical advice.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="rounded-[28px] overflow-hidden card-shadow">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="w-14 h-14 bg-[#0B1E3C] rounded-2xl flex items-center justify-center mb-6">
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                      {industry.title}
                    </h2>
                    <p className="text-[#5A6A7A] mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {industry.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#2F6BFF] flex-shrink-0" />
                          <span className="text-sm text-[#5A6A7A]">{service}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 text-[#2F6BFF] font-medium hover:underline"
                    >
                      <span>Discuss your requirements</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <GraduationCap className="w-12 h-12 text-[#2F6BFF] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Sora'] mb-6">
              Don't see your industry?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              We serve clients across many more sectors. Reach out to discuss how we can help 
              your specific business needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Industries;
