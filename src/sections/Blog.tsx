import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const posts = [
    {
      category: 'TAX',
      title: 'ITR filing checklist for FY 2024–25',
      excerpt: 'Documents, deductions, and common mistakes to avoid this filing season.',
      image: '/images/blog-itr.jpg',
      link: '/blog',
    },
    {
      category: 'GST',
      title: 'Reconciling GSTR-2B with your purchase register',
      excerpt: 'A step-by-step approach to catch mismatches before filing.',
      image: '/images/blog-gst.jpg',
      link: '/blog',
    },
    {
      category: 'COMPLIANCE',
      title: 'When does your business need a tax audit?',
      excerpt: 'Turnover thresholds and scenarios that trigger statutory requirements.',
      image: '/images/blog-audit.jpg',
      link: '/blog',
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
      const cards = cardsRef.current?.querySelectorAll('.blog-card');
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
    <section ref={sectionRef} className="section-padding bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-12 lg:mb-16">
          <span className="eyebrow block mb-4">INSIGHTS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
            Latest insights
          </h2>
          <p className="text-lg text-[#5A6A7A]">
            Practical updates on tax, compliance, and business finance.
          </p>
        </div>

        {/* Blog Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              to={post.link}
              className="blog-card group bg-white rounded-[28px] overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="card-image w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3C]/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0B1E3C]">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0B1E3C] font-['Sora'] mb-2 line-clamp-2 group-hover:text-[#2F6BFF] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#5A6A7A] text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center space-x-2 text-[#2F6BFF] font-medium text-sm group-hover:underline">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-[#0B1E3C] font-medium hover:text-[#2F6BFF] transition-colors"
          >
            <span>View all articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
