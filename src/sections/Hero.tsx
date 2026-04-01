import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Shield, Clock, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation (auto-play on load)
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Image entrance
      loadTl.fromTo(
        imageRef.current,
        { opacity: 0, x: -60, scale: 0.98 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9 }
      );

      // Content staggered entrance
      const contentElements = contentRef.current?.querySelectorAll('.animate-item');
      if (contentElements) {
        loadTl.fromTo(
          contentElements,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out' },
          '-=0.5'
        );
      }

      // Trust pills entrance
      const trustElements = trustRef.current?.querySelectorAll('.trust-item');
      if (trustElements) {
        loadTl.fromTo(
          trustElements,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
          '-=0.3'
        );
      }

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      // Content exit on scroll
      scrollTl.fromTo(
        contentRef.current,
        { opacity: 1, x: 0 },
        { opacity: 0.25, x: 40, ease: 'none' },
        0.7
      );

      // Image exit on scroll
      scrollTl.fromTo(
        imageRef.current,
        { opacity: 1, y: 0, scale: 1 },
        { opacity: 0.35, y: '-10vh', scale: 0.98, ease: 'none' },
        0.7
      );

      // Trust pills exit
      scrollTl.fromTo(
        trustRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'none' },
        0.8
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const trustPills = [
    { icon: Shield, text: 'Confidential & Secure' },
    { icon: Clock, text: 'Timely Compliance' },
    { icon: Award, text: 'Experienced CA Support' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-80px)] bg-[#F6F7F9] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center py-10 lg:pt-12 lg:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Image Card */}
          <div
            ref={imageRef}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-[28px] overflow-hidden card-shadow aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="/images/hero-portrait.jpg"
                alt="ABSM & ASSOCIATES - Chartered Accountants"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3C]/20 to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:right-8 flex flex-col items-end space-y-4">
              <div className="bg-white rounded-2xl p-4 card-shadow flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#2F6BFF]/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#2F6BFF]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0B1E3C] font-['Sora']">15+</p>
                  <p className="text-xs text-[#5A6A7A]">Years of Excellence</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3 card-shadow flex items-center space-x-3 pr-6">
                <div className="w-10 h-10 relative overflow-hidden flex-shrink-0 animate-pulse-slow">
                  <img
                    src="/images/ca-logo.jpg"
                    alt="Chartered Accountant Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-bold text-[#0B1E3C] leading-none mb-1">Chartered</span>
                  <span className="text-[10px] font-bold text-[#5A6A7A] uppercase tracking-wider opacity-80 leading-none">Accountant India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="order-1 lg:order-2">
            <span className="animate-item eyebrow block mb-6 tracking-[0.2em] font-semibold opacity-80">
              PREMIUM ADVISORY & COMPLIANCE
            </span>

            <h1 className="animate-item text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0B1E3C] font-['Sora'] leading-[1.1] tracking-[-0.03em] mb-8">
              Strategic Financial<br />
              <span className="text-[#2F6BFF]">Partnership.</span>
            </h1>

            <div className="animate-item w-20 h-1 bg-[#2F6BFF] rounded-full mb-6" />

            <p className="animate-item text-lg text-[#5A6A7A] leading-relaxed mb-8 max-w-lg">
              ABSM & ASSOCIATES provides bespoke financial solutions, precision auditing, and proactive tax strategies for discerning businesses and private clients.
            </p>

            <div className="animate-item flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="flex items-center justify-center space-x-2 btn-primary"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
              </Link>
              <a
                href="tel:+919781064214"
                className="flex items-center justify-center space-x-2 btn-secondary"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div ref={trustRef} className="flex flex-wrap gap-3">
              {trustPills.map((pill, index) => (
                <div
                  key={index}
                  className="trust-item flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-[rgba(11,30,60,0.08)]"
                >
                  <pill.icon className="w-4 h-4 text-[#2F6BFF]" />
                  <span className="text-sm text-[#5A6A7A]">{pill.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
