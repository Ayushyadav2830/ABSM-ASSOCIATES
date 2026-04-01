import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const differentiators = [
    'Always in Safe Hands',
    'Always Adding Value',
    'Strong Professional Network',
    'Quality Assured Services',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: '-6vw', scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      const contentElements = contentRef.current?.querySelectorAll('.animate-item');
      if (contentElements) {
        gsap.fromTo(
          contentElements,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Bullets animation
      const bullets = contentRef.current?.querySelectorAll('.bullet-item');
      if (bullets) {
        gsap.fromTo(
          bullets,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bullets[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-[28px] overflow-hidden card-shadow aspect-[4/5]">
              <img
                src="/images/team-collaboration.jpg"
                alt="Team collaboration at ABSM & ASSOCIATES"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1E3C]/30 to-transparent" />
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:right-8 bg-[#0B1E3C] rounded-2xl p-6 text-white min-w-[200px]">
              <div className="text-center">
                <p className="text-3xl font-bold font-['Sora']">98%</p>
                <p className="text-sm text-white/70">Client Retention</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <span className="animate-item eyebrow block mb-4">
              DISTINCTIVE EDGE
            </span>

            <h2 className="animate-item text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
              Experience the difference.<br />
              Grow with confidence.
            </h2>

            <p className="animate-item text-lg text-[#5A6A7A] leading-relaxed mb-8">
              We combine robust technical expertise with a highly personalized consulting approach—ensuring you receive cost-effective and structurally sound advice. Connect with our expansive professional network to solve complex challenges seamlessly.
            </p>

            {/* Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="bullet-item flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-[#2F6BFF]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#2F6BFF]" />
                  </div>
                  <span className="text-[#0B1E3C] font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="animate-item inline-flex items-center space-x-2 btn-navy"
            >
              <span>Meet the team</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
