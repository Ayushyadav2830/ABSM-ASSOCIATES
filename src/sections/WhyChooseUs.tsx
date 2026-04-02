import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {

  const differentiators = [
    'Confidential Data Security',
    'Strategic Value Creation',
    'Expansive Professional Network',
    'Technical Quality Assurance',
  ];

  // Removed animations for static website

  return (
    <section className="section-padding bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
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
          <div>
            <span className="eyebrow block mb-4">
              DISTINCTIVE EDGE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
              The Strategic Advantage.<br />
              Growth with Precision.
            </h2>

            <p className="text-lg text-[#5A6A7A] leading-relaxed mb-8">
              We combine robust technical expertise with a highly personalized consulting approach—ensuring you receive cost-effective and structurally sound advice. Connect with our expansive professional network to solve complex challenges seamlessly.
            </p>

            {/* Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
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
              className="inline-flex items-center space-x-2 btn-navy"
            >
              <span>Professional Profile</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
