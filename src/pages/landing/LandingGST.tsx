import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle, Star, Send, Check, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingGST = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const features = [
    'GST Registration in 7-10 days',
    'Monthly/Quarterly Return Filing',
    'Input Tax Credit Optimization',
    'GST Notice Handling',
    'E-way Bill Compliance',
    'Annual Return Filing',
  ];

  return (
    <>
      <Helmet>
        <title>GST Consultant in Chandigarh | GST Registration & Filing</title>
        <meta name="description" content="Looking for a GST consultant in Chandigarh? Expert GST registration, return filing, and compliance services. Schedule a professional consultation today!" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://absmassociates.com/landing/gst-chandigarh" />
      </Helmet>

      <div className="min-h-screen bg-[#F6F7F9]">
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 relative overflow-hidden flex-shrink-0">
                <img 
                  src="/images/ca-logo.jpg" 
                  alt="CA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-[#0B1E3C] font-['Sora']">ABSM & ASSOCIATES</span>
            </Link>
            <a href="tel:+919781064214" className="flex items-center space-x-2 bg-[#2F6BFF] text-white px-4 py-2 rounded-lg">
              <Phone className="w-4 h-4" />
              <span>Direct Inquiry</span>
            </a>
          </div>
        </header>

        <section className="py-12 lg:py-20 bg-[#0B1E3C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1 bg-[#2F6BFF]/20 text-[#2F6BFF] rounded-full text-sm font-medium mb-4">
                  GST Consultant in Chandigarh
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Sora'] mb-4">
                  GST Registration & Filing Services
                </h1>
                <p className="text-lg text-white/70 mb-6">
                  Fast GST registration, accurate return filing, and complete compliance support. 
                  Trusted by 500+ businesses in Chandigarh & Mohali.
                </p>
                <ul className="space-y-2 mb-6">
                  {features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-center space-x-2 text-white/80">
                      <CheckCircle className="w-5 h-5 text-[#2F6BFF]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <span className="text-white/60">4.9 rating from 500+ clients</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 lg:p-8 card-shadow">
                <h2 className="text-2xl font-bold text-[#0B1E3C] mb-2">Professional GST Fee Structure</h2>
                <p className="text-[#5A6A7A] mb-6">Initiate technical inquiry</p>
                {submitted ? (
                  <div className="text-center py-8">
                    <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Thank You!</h3>
                    <p className="text-[#5A6A7A]">We'll call you within 30 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F6BFF] outline-none" />
                    <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F6BFF] outline-none" />
                    <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Request Service Quote</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0B1E3C] text-center mb-12">Our GST Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#2F6BFF] flex-shrink-0" />
                  <span className="text-[#0B1E3C] font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need GST help?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+919781064214" className="flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl">
                <Phone className="w-5 h-5" />
                <span>Call: +91 97810 64214</span>
              </a>
              <a href="https://wa.me/919781064214" className="flex items-center space-x-2 px-8 py-4 bg-white/10 text-white rounded-xl border border-white/20">
                <MessageSquare className="w-5 h-5" />
                <span>Consult via WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="py-8 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm text-[#5A6A7A]">© 2026 ABSM & ASSOCIATES | GST Consultant Chandigarh</p>
          </div>
        </footer>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 lg:hidden">
          <a href="tel:+919781064214" className="flex items-center justify-center space-x-2 w-full btn-primary">
            <Phone className="w-5 h-5" />
            <span>Consult a Specialist</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingGST;
