import { Link } from 'react-router-dom';
import { Calendar, Mail } from 'lucide-react';

const CTA = () => {

  // Removed animations for static website

  return (
    <section
      className="section-padding bg-[#0B1E3C] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Sora'] mb-6">
            Elevate Your Business Compliance
          </h2>

          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Partner with ABSM & ASSOCIATES for strategic financial oversight and a dedicated approach to regulatory excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#2F6BFF]/25"
            >
              <Calendar className="w-5 h-5" />
              <span>Request Consultation</span>
            </Link>

            <a
              href="mailto:info@absmassociates.com"
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 text-white rounded-xl font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Inquire via Email</span>
            </a>
          </div>

          <p className="mt-8 text-sm text-white/50 tracking-wide uppercase">
            Strictly Confidential & Professional Engagement
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
