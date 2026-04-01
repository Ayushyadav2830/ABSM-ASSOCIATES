import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle,
} from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 97810 64214',
      href: 'tel:+919781064214',
      description: 'Mon-Sat, 10:00 AM - 6:30 PM',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@absmassociates.com',
      href: 'mailto:info@absmassociates.com',
      description: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Sector 7-C, Chandigarh',
      href: '#',
      description: 'Madhya Marg, Chandigarh 160019',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon - Sat: 10:00 AM - 6:30 PM',
      href: '#',
      description: 'Sunday: Closed',
    },
  ];

  const services = [
    'GST Registration & Filing',
    'Income Tax Planning',
    'Audit & Assurance',
    'Company Registration',
    'Accounting & Bookkeeping',
    'NRI Taxation',
    'Other',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | ABSM & ASSOCIATES - Chartered Accountant Firm</title>
        <meta
          name="description"
          content="Contact ABSM & ASSOCIATES for CA services in Chandigarh. Request Consultation for GST, Income Tax, Audit, and Company Registration."
        />
        <link rel="canonical" href="https://absmassociates.com/contact" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="eyebrow block mb-4">CONTACT US</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Let's talk
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                Have a question or need assistance? We're here to help. Reach out to us 
                and we'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="bg-[#F6F7F9] rounded-2xl p-6 hover:card-shadow transition-shadow group"
                >
                  <div className="w-12 h-12 bg-[#0B1E3C] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2F6BFF] transition-colors">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-[#5A6A7A] mb-1">{item.label}</p>
                  <p className="font-semibold text-[#0B1E3C] mb-1 group-hover:text-[#2F6BFF] transition-colors">
                    {item.value}
                  </p>
                  <p className="text-xs text-[#5A6A7A]">{item.description}</p>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl p-6 lg:p-10 card-shadow">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#0B1E3C] font-['Sora'] mb-3">
                        Message Sent Successfully!
                      </h2>
                      <p className="text-[#5A6A7A] mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-[#2F6BFF] font-medium hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-[#0B1E3C] font-['Sora'] mb-2">
                        Send us a message
                      </h2>
                      <p className="text-[#5A6A7A] mb-8">
                        Fill out the form below and we'll get back to you shortly.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none transition-all"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none transition-all"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none transition-all"
                              placeholder="+91 97810 64214"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                              Service Required *
                            </label>
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none transition-all bg-white"
                            >
                              <option value="">Select a service</option>
                              {services.map((service, idx) => (
                                <option key={idx} value={service.toLowerCase()}>
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                            Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none transition-all resize-none"
                            placeholder="Tell us about your requirements..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center space-x-2 btn-primary disabled:opacity-70 disabled:cursor-not-allowed py-4"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>

                        <p className="text-xs text-center text-[#5A6A7A]">
                          By submitting, you agree to our{' '}
                          <a href="/privacy-policy" className="text-[#2F6BFF] hover:underline">
                            Privacy Policy
                          </a>
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quick Contact */}
                <div className="bg-[#0B1E3C] rounded-3xl p-6 lg:p-8 text-white">
                  <h3 className="text-xl font-bold font-['Sora'] mb-4">
                    Prefer to talk?
                  </h3>
                  <p className="text-white/70 mb-6">
                    Schedule a 15-minute professional consultation with our experts.
                  </p>
                  <a
                    href="tel:+919781064214"
                    className="flex items-center justify-center space-x-2 w-full py-3 bg-[#2F6BFF] rounded-xl font-medium hover:bg-[#2558d9] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="bg-[#25D366] rounded-3xl p-6 lg:p-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageCircle className="w-8 h-8" />
                    <h3 className="text-xl font-bold font-['Sora']">Chat on WhatsApp</h3>
                  </div>
                  <p className="text-white/90 mb-6">
                    Get quick responses to your queries via WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919781064214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 bg-white text-[#25D366] rounded-xl font-medium hover:bg-white/90 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Start Chat</span>
                  </a>
                </div>

                {/* Working Hours */}
                <div className="bg-[#F6F7F9] rounded-3xl p-6 lg:p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-6 h-6 text-[#2F6BFF]" />
                    <h3 className="text-lg font-bold text-[#0B1E3C] font-['Sora']">
                      Working Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#5A6A7A]">Monday - Saturday</span>
                      <span className="text-[#0B1E3C] font-medium">10:00 AM - 6:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5A6A7A]">Sunday</span>
                      <span className="text-[#0B1E3C] font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
