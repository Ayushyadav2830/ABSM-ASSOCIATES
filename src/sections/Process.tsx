import { useEffect, useRef } from 'react';
import { Search, FileCheck, HeadphonesIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Scope',
      description: 'We review your books, prior filings, and current compliance status.',
      tags: ['Checklist', 'Timeline', 'Quote'],
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Execution & Review',
      description: 'We prepare filings, reconcile records, and share drafts for approval.',
      tags: ['Drafts', 'Reconciliation', 'Sign-off'],
    },
    {
      number: '03',
      icon: HeadphonesIcon,
      title: 'Filing & Support',
      description: 'We file on time and provide ongoing support for notices or queries.',
      tags: ['Timely filing', 'Support', 'Documentation'],
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
      const cards = cardsRef.current?.querySelectorAll('.process-card');
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

      // Tags animation
      const tags = cardsRef.current?.querySelectorAll('.tag-item');
      if (tags) {
        gsap.fromTo(
          tags,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: tags[0],
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
    <section ref={sectionRef} className="section-padding bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
          <span className="eyebrow block mb-4">OUR PROCESS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
            How we work
          </h2>
          <p className="text-lg text-[#5A6A7A]">
            A simple, documented process designed to save time and reduce back-and-forth.
          </p>
        </div>

        {/* Process Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-card bg-white rounded-[28px] p-6 lg:p-8 card-shadow relative"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-5xl font-bold text-[#0B1E3C]/10 font-['Sora']">
                  {step.number}
                </span>
                <div className="w-12 h-12 bg-[#2F6BFF]/10 rounded-xl flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[#2F6BFF]" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-3">
                {step.title}
              </h3>
              <p className="text-[#5A6A7A] mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="tag-item px-3 py-1.5 bg-[#F6F7F9] rounded-full text-xs font-medium text-[#5A6A7A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#0B1E3C]/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
