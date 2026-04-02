import { Link } from 'react-router-dom';
import { Rocket, Factory, Briefcase, ArrowRight } from 'lucide-react';

const Industries = () => {

  const industries = [
    {
      icon: Rocket,
      title: 'Startups & SaaS',
      description: 'Cap table hygiene, GST, TDS, and investor-ready compliance.',
      image: '/images/industry-startup.jpg',
      link: '/industries',
    },
    {
      icon: Factory,
      title: 'Manufacturing & Trade',
      description: 'Inventory-linked tax planning and supply chain compliance.',
      image: '/images/industry-manufacturing.jpg',
      link: '/industries',
    },
    {
      icon: Briefcase,
      title: 'Professionals & Consultants',
      description: 'Individual tax, invoicing, and expense optimization.',
      image: '/images/industry-professionals.jpg',
      link: '/industries',
    },
  ];

  // Removed animations for static website

  return (
    <section
      id="industries"
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-8 lg:mb-12">
          <span className="eyebrow block mb-4">WHO WE SERVE</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
            Industry Expertise
          </h2>
          <p className="text-lg text-[#5A6A7A]">
            We understand the regulations, risks, and reporting standards that matter in your industry.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <Link
              key={index}
              to={industry.link}
              className="industry-card bg-white rounded-[28px] overflow-hidden card-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="card-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3C]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <industry.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-2">
                  {industry.title}
                </h3>
                <p className="text-[#5A6A7A] mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="flex items-center space-x-2 text-[#2F6BFF] font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
