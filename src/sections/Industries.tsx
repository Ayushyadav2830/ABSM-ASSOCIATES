import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Factory, Briefcase, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.industry-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Image parallax
      const images = cardsRef.current?.querySelectorAll('.card-image');
      if (images) {
        images.forEach((img) => {
          gsap.fromTo(
            img,
            { y: 12 },
            {
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: img,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="section-padding bg-[#F6F7F9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-12 lg:mb-16">
          <span className="eyebrow block mb-4">INDUSTRIES WE SERVE</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
            Sector expertise
          </h2>
          <p className="text-lg text-[#5A6A7A]">
            We understand the regulations, risks, and reporting standards that matter in your industry.
          </p>
        </div>

        {/* Industry Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <Link
              key={index}
              to={industry.link}
              className="industry-card group bg-white rounded-[28px] overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="card-image w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
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
                <div className="flex items-center space-x-2 text-[#2F6BFF] font-medium group-hover:underline">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
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
