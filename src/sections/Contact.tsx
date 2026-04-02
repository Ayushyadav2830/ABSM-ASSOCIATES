import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {

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
      icon: Mail,
      label: 'Email',
      value: 'info@absmassociates.com',
      href: 'mailto:info@absmassociates.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 97810 64214',
      href: 'tel:+919781064214',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Chandigarh',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon–Sat: 10:00 AM – 6:00 PM',
      href: '#',
    },
  ];

  // Removed animations for static website

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <section className="section-padding bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="eyebrow block mb-4">CONTACT US</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
              Connect With Our Experts
            </h2>
            <p className="text-lg text-[#5A6A7A] mb-8">
              For formal inquiries, please contact us via email. For immediate assistance, our specialists are available via phone and WhatsApp.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center card-shadow">
                    <item.icon className="w-5 h-5 text-[#2F6BFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#5A6A7A] mb-1">{item.label}</p>
                    <p className="font-medium text-[#0B1E3C]">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white rounded-[28px] p-6 lg:p-8 card-shadow"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1E3C] font-['Sora'] mb-2">
                  Submission Received
                </h3>
                <p className="text-[#5A6A7A]">
                  Our team will review your inquiry and respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="form-field">
                  <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none transition-all"
                    placeholder="Contact Name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-field">
                    <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-field">
                    <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="gst">GST Registration & Filing</option>
                    <option value="income-tax">Income Tax Planning</option>
                    <option value="audit">Audit & Assurance</option>
                    <option value="company">Company Registration</option>
                    <option value="accounting">Accounting & Bookkeeping</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 outline-none transition-all resize-none"
                    placeholder="Please provide brief details regarding your professional requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Inquiry</span>
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
