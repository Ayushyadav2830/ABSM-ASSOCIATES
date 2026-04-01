import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Info animation
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: '-4vw' },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: '4vw', scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Form fields animation
      const fields = formRef.current?.querySelectorAll('.form-field');
      if (fields) {
        gsap.fromTo(
          fields,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: fields[0],
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} className="section-padding bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div ref={infoRef}>
            <span className="eyebrow block mb-4">CONTACT US</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
              Get in touch
            </h2>
            <p className="text-lg text-[#5A6A7A] mb-8">
              Prefer email? Write to us. For urgent queries, call or WhatsApp.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center card-shadow group-hover:card-shadow-hover transition-shadow">
                    <item.icon className="w-5 h-5 text-[#2F6BFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#5A6A7A] mb-1">{item.label}</p>
                    <p className="font-medium text-[#0B1E3C] group-hover:text-[#2F6BFF] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-white rounded-[28px] p-6 lg:p-8 card-shadow"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1E3C] font-['Sora'] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#5A6A7A]">
                  We'll get back to you within 24 hours.
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
                    placeholder="Your name"
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
                      placeholder="+91 98765 43210"
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
                    placeholder="Tell us about your requirements..."
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
