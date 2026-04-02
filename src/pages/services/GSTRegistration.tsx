import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  FileText,
  Calendar,
  Shield,
  Clock,
  Phone,
  MessageSquare,
} from 'lucide-react';

const GSTRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'GST Registration for all business types',
    'Monthly/Quarterly GSTR-1 Filing',
    'GSTR-3B Return Filing',
    'GSTR-9 Annual Return',
    'Input Tax Credit Reconciliation',
    'GST Notice Handling',
    'E-way Bill Compliance',
    'HSN Code Classification',
  ];

  const process = [
    {
      step: '01',
      title: 'Document Collection',
      description: 'We collect all required documents including PAN, Aadhaar, and business proof.',
    },
    {
      step: '02',
      title: 'Application Filing',
      description: 'We prepare and file your GST registration application on the GST portal.',
    },
    {
      step: '03',
      title: 'ARN Generation',
      description: 'Application Reference Number is generated for tracking your application.',
    },
    {
      step: '04',
      title: 'GSTIN Allotment',
      description: 'Upon verification, GSTIN is allotted and certificate is issued.',
    },
  ];

  const faqs = [
    {
      question: 'Who needs GST registration?',
      answer:
        'Businesses with turnover exceeding Rs. 40 lakhs (Rs. 20 lakhs for special category states) for goods, and Rs. 20 lakhs for services must register. E-commerce operators and those under reverse charge also need registration.',
    },
    {
      question: 'How long does GST registration take?',
      answer:
        'Typically, GST registration is completed within 7-10 working days if all documents are in order and there are no discrepancies.',
    },
    {
      question: 'What documents are required?',
      answer:
        'PAN card, Aadhaar card, business address proof, bank account details, photographs, and business incorporation documents (for companies/LLPs).',
    },
  ];

  return (
    <>
      <Helmet>
        <title>GST Registration & Filing | ABSM & ASSOCIATES - Chandigarh</title>
        <meta
          name="description"
          content="Expert GST registration and filing services in Chandigarh. GST return filing, reconciliation, and compliance support. Contact us today."
        />
        <link rel="canonical" href="https://absmassociates.com/services/gst-registration" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">GST SERVICES</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                GST Registration & Filing
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
                Comprehensive GST services including registration, return filing, reconciliation, 
                and compliance support. Stay GST-compliant with expert assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex items-center justify-center space-x-2 btn-primary">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Your Consultation</span>
                </Link>
                <a
                  href="tel:+919781064214"
                  className="flex items-center justify-center space-x-2 btn-secondary"
                >
                  <Phone className="w-5 h-5" />
                  <span>Speak with an Expert</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                  Complete GST Solutions
                </h2>
                <p className="text-[#5A6A7A] mb-8 leading-relaxed">
                  From registration to return filing, we handle all aspects of GST compliance. 
                  Our team ensures accurate filings, maximizes your input tax credit, and keeps 
                  you updated on regulatory changes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0B1E3C]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F6F7F9] rounded-3xl p-8">
                <h3 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2F6BFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#2F6BFF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0B1E3C] mb-1">Timely Filing</h4>
                      <p className="text-sm text-[#5A6A7A]">
                        Never miss a deadline with our proactive approach.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2F6BFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-[#2F6BFF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0B1E3C] mb-1">Accurate Return Filings</h4>
                      <p className="text-sm text-[#5A6A7A]">
                        Thorough review process ensures accuracy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2F6BFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-[#2F6BFF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0B1E3C] mb-1">Notice Support</h4>
                      <p className="text-sm text-[#5A6A7A]">
                        Expert handling of GST department notices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow block mb-4">ENGAGEMENT METHODOLOGY</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                GST Registration Framework
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 card-shadow">
                  <span className="text-4xl font-bold text-[#2F6BFF]/20 font-['Sora']">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1E3C] font-['Sora'] mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5A6A7A]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3C] font-['Sora'] mb-8 text-center">
              Common Inquiries
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#F6F7F9] rounded-2xl p-6">
                  <h3 className="font-semibold text-[#0B1E3C] mb-2">{faq.question}</h3>
                  <p className="text-[#5A6A7A] text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Sora'] mb-6">
              Ensure Your GST Compliance Today
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Contact us for a professional consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9] transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Your Consultation</span>
              </Link>
              <a
                href="https://wa.me/919781064214"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-4 bg-white/10 text-white rounded-xl font-medium border border-white/20 hover:bg-white/20 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Consult via WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GSTRegistration;
