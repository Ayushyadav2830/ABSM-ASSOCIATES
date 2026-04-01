import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      // Quote animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Attribution animation
      const attribution = contentRef.current?.querySelector('.attribution');
      if (attribution) {
        gsap.fromTo(
          attribution,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: attribution,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-[28px] overflow-hidden card-shadow aspect-[4/5]">
              <img
                src="/images/testimonial-scene.jpg"
                alt="Client testimonial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1E3C]/20 to-transparent" />
            </div>
          </div>

          {/* Quote Content */}
          <div ref={contentRef} className="relative lg:pl-10">
            {/* Quote Icon */}
            <div className="absolute -top-12 -left-2 lg:-top-20 lg:-left-4 opacity-[0.03] pointer-events-none">
              <Quote className="w-24 h-24 lg:w-40 lg:h-40 text-[#0B1E3C]" />
            </div>

            <span className="eyebrow block mb-6 relative z-10 tracking-[0.2em] opacity-80">
              CLIENT TESTIMONIAL
            </span>

            <blockquote className="text-xl sm:text-2xl lg:text-[28px] font-medium text-[#0B1E3C] font-['Poppins'] leading-relaxed tracking-normal mb-10 relative z-10 opacity-90 italic">
              "ABSM & ASSOCIATES brought order to our books and clarity to our tax strategy. Deadlines are met, communication is crisp, and we finally feel in control of our corporate compliance."
            </blockquote>

            <div className="attribution flex items-center space-x-5 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2F6BFF] to-[#0B1E3C] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                SG
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-lg text-[#0B1E3C] leading-none mb-1">Shangri-La Group</p>
                <p className="text-sm font-medium text-[#5A6A7A] uppercase tracking-wider opacity-80">Major Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
