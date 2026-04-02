import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Award,
  MessageSquare,
  Send,
  Check,
} from 'lucide-react';

const LandingCA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({ name: '', phone: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const differentiators = [
    '10+ Years Experience',
    '500+ Clients Served',
    'Timely Compliance',
    'Dedicated Support',
    'Transparent Pricing',
    'Confidential & Secure',
  ];

  const testimonials = [
    {
      name: 'Rajesh Patel',
      role: 'Business Owner',
      text: 'Excellent service! They handled my tax filing professionally and on time.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Startup Founder',
      text: 'Very knowledgeable team. Helped us with company registration and GST compliance.',
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: 'What services do you offer?',
      a: 'We offer GST registration & filing, income tax planning, audit & assurance, company registration, and accounting services.',
    },
    {
      a: 'You can request a consultation by filling the form above or contacting our specialists directly at +91 97810 64214.',
    },
    {
      q: 'Do you serve clients outside Chandigarh?',
      a: 'Yes, we serve clients across Punjab, Haryana and even pan-India through our digital services.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Chartered Accountant in Chandigarh | ABSM & ASSOCIATES</title>
        <meta name="description" content="Looking for a Chartered Accountant in Chandigarh? ABSM & ASSOCIATES offers GST, Income Tax, Audit & Company Registration services. Schedule a professional consultation today!" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://absmassociates.com/landing/ca-chandigarh" />
      </Helmet>

      <div className="min-h-screen bg-[#F6F7F9]">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 relative overflow-hidden flex-shrink-0">
                <img 
                  src="/images/ca-logo.jpg" 
                  alt="CA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-[#0B1E3C] font-['Sora']">
                ABSM & ASSOCIATES
              </span>
            </Link>
            <a href="tel:+919781064214" className="flex items-center space-x-2 bg-[#2F6BFF] text-white px-4 py-2 rounded-lg font-medium">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 97810 64214</span>
              <span className="sm:hidden">Consult an Expert</span>
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-[#0B1E3C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1 bg-[#2F6BFF]/20 text-[#2F6BFF] rounded-full text-sm font-medium mb-4">
                  Chartered Accountant in Chandigarh
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Sora'] mb-4">
                  Trusted CA Services in Chandigarh & Mohali
                </h1>
                <p className="text-lg text-white/70 mb-6">
                  GST Registration, Income Tax Filing, Audit & Company Registration. 
                  10+ years of experience serving 500+ clients.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {differentiators.slice(0, 4).map((d, i) => (
                    <span key={i} className="flex items-center space-x-1 text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 text-[#2F6BFF]" />
                      <span>{d}</span>
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 bg-[#2F6BFF] rounded-full border-2 border-[#0B1E3C] flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-white/60">Rated 4.9 by 500+ clients</p>
                  </div>
                </div>
              </div>

              {/* Lead Form */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 card-shadow">
                <h2 className="text-2xl font-bold text-[#0B1E3C] font-['Sora'] mb-2">
                  Schedule Consultation
                </h2>
                <p className="text-[#5A6A7A] mb-6">Receive professional advisory</p>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1E3C] mb-2">Thank You!</h3>
                    <p className="text-[#5A6A7A]">We'll call you within 30 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none"
                      />
                    </div>
                    <div>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none bg-white"
                      >
                        <option value="">Select Service</option>
                        <option value="gst">GST Registration</option>
                        <option value="income-tax">Income Tax Filing</option>
                        <option value="audit">Audit Services</option>
                        <option value="company">Company Registration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center space-x-2 btn-primary py-4">
                      <Send className="w-5 h-5" />
                      <span>Request Inbound Call</span>
                    </button>
                    <p className="text-xs text-center text-[#5A6A7A] uppercase tracking-wider font-semibold">
                      Your data is handled with absolute confidentiality.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <Shield className="w-8 h-8 text-[#2F6BFF] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#0B1E3C]">Confidential</p>
              </div>
              <div>
                <Clock className="w-8 h-8 text-[#2F6BFF] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#0B1E3C]">On-Time Filing</p>
              </div>
              <div>
                <Award className="w-8 h-8 text-[#2F6BFF] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#0B1E3C]">10+ Years Exp.</p>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 text-[#2F6BFF] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#0B1E3C]">500+ Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">Our Services</h2>
              <p className="text-[#5A6A7A]">Complete range of CA services for individuals and businesses</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'GST Registration', desc: 'Quick GST registration and filing' },
                { title: 'Income Tax', desc: 'ITR filing and tax planning' },
                { title: 'Audit Services', desc: 'Statutory and tax audits' },
                { title: 'Company Registration', desc: 'Start your business' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 card-shadow text-center">
                  <h3 className="font-bold text-[#0B1E3C] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#5A6A7A]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-[#F6F7F9] rounded-2xl p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#0B1E3C] mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-[#0B1E3C]">{t.name}</p>
                    <p className="text-sm text-[#5A6A7A]">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F6F7F9]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-8 text-center">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-6">
                  <h3 className="font-semibold text-[#0B1E3C] mb-2">{f.q}</h3>
                  <p className="text-[#5A6A7A] text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-['Sora'] mb-4">
              Initiate Engagement
            </h2>
            <p className="text-white/70 mb-8">Initiate your professional consultation today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+919781064214" className="flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium">
                <Phone className="w-5 h-5" />
                <span>Call Now: +91 97810 64214</span>
              </a>
              <a href="https://wa.me/919781064214" className="flex items-center space-x-2 px-8 py-4 bg-white/10 text-white rounded-xl font-medium border border-white/20">
                <MessageSquare className="w-5 h-5" />
                <span>Consult via WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-[#5A6A7A]">
              © 2026 ABSM & ASSOCIATES | Chartered Accountant in Chandigarh
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4 text-sm">
              <Link to="/privacy-policy" className="text-[#5A6A7A] hover:text-[#2F6BFF]">Privacy Policy</Link>
              <Link to="/terms" className="text-[#5A6A7A] hover:text-[#2F6BFF]">Terms</Link>
            </div>
          </div>
        </footer>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 lg:hidden">
          <a href="tel:+919781064214" className="flex items-center justify-center space-x-2 w-full btn-primary">
            <Phone className="w-5 h-5" />
            <span>Consult an Expert</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingCA;
