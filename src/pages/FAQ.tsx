import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('general');

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'tax', name: 'Income Tax' },
    { id: 'gst', name: 'GST' },
    { id: 'services', name: 'Our Services' },
  ];

  const faqs = {
    general: [
      {
        question: 'Do you work with clients outside Chandigarh?',
        answer:
          'Yes. We serve clients across India via secure document sharing and video calls. Our digital-first approach ensures seamless service delivery regardless of location. Many of our clients are from Pune, Bangalore, Delhi, and other major cities.',
      },
      {
        question: 'How do I get started with your services?',
        answer:
          'Simply Schedule a professional 15-minute discovery call through our website or call us directly. We will discuss your requirements, understand your business, and recommend the best services for your needs. After that, we will share a proposal and timeline.',
      },
      {
        question: 'What are your working hours?',
        answer:
          'Our office hours are Monday to Saturday, 10:00 AM to 6:00 PM IST. However, we understand that businesses operate round the clock, so we offer extended support for urgent matters via email and WhatsApp.',
      },
      {
        question: 'How soon can we start?',
        answer:
          'After an initial discovery call, we typically begin within 2–3 business days. For urgent requirements, we can expedite the process. We believe in quick turnaround times without compromising on quality.',
      },
    ],
    tax: [
      {
        question: 'What documents are needed for ITR filing?',
        answer:
          'Typically required documents include: PAN card, Aadhaar card, Form 16 (for salaried individuals), bank statements, investment proofs (80C, 80D, etc.), home loan interest certificate (if applicable), and rental income details (if any). We will share a comprehensive checklist based on your income sources.',
      },
      {
        question: 'What is the due date for ITR filing?',
        answer:
          'For individuals and non-audit cases, the due date is usually July 31st of the assessment year. For companies and audit cases, it is typically October 31st. However, these dates may be extended by the government. We keep our clients informed of all deadline changes.',
      },
      {
        question: 'Can you help with income tax notices?',
        answer:
          'Absolutely. We have extensive experience in handling various types of income tax notices including scrutiny assessments, demand notices, and verification requests. We analyze the notice, prepare a comprehensive response, and represent you before tax authorities when needed.',
      },
      {
        question: 'Do you offer tax planning services?',
        answer:
          'Yes, we offer comprehensive tax planning services for individuals and businesses. We analyze your financial situation and recommend strategies to legally minimize your tax liability while ensuring full compliance with tax laws.',
      },
    ],
    gst: [
      {
        question: 'Who needs GST registration?',
        answer:
          'GST registration is mandatory for businesses with turnover exceeding Rs. 40 lakhs (Rs. 20 lakhs for special category states) for goods, and Rs. 20 lakhs (Rs. 10 lakhs for special category states) for services. Additionally, e-commerce operators, casual taxable persons, and those paying tax under reverse charge must register regardless of turnover.',
      },
      {
        question: 'What are the GST return filing due dates?',
        answer:
          'GSTR-1 ( outward supplies) is due by the 11th/13th of the following month (depending on your turnover). GSTR-3B (summary return) is due by the 20th of the following month. Quarterly filers under QRMP scheme have different due dates. We ensure all your returns are filed well before deadlines.',
      },
      {
        question: 'Can you handle GST notices and department visits?',
        answer:
          'Yes, we provide end-to-end support for GST notices, department visits, and assessments. Our team has successfully handled numerous GST audits, scrutiny cases, and demand notices. We represent your interests and ensure proper documentation and compliance.',
      },
      {
        question: 'What is input tax credit (ITC) and how can I claim it?',
        answer:
          'Input Tax Credit allows you to reduce the tax you have already paid on inputs from the tax payable on output. To claim ITC, ensure your suppliers have filed their returns, reconcile GSTR-2B with your purchase register, and maintain proper documentation. We help optimize your ITC claims.',
      },
    ],
    services: [
      {
        question: 'How do you price your services?',
        answer:
          'We offer transparent, fixed pricing for most services. Our fees are based on the complexity and volume of work involved. We provide detailed quotes upfront with no hidden charges. For ongoing engagements, we offer monthly retainer packages that provide better value.',
      },
      {
        question: 'Do you offer monthly accounting packages?',
        answer:
          'Yes, we offer comprehensive monthly accounting and compliance packages for businesses. These include bookkeeping, bank reconciliation, GST filing, TDS compliance, and monthly MIS reports. Our packages are designed to give you peace of mind while keeping costs predictable.',
      },
      {
        question: 'What is included in your audit services?',
        answer:
          'Our audit services include statutory audits, tax audits, internal audits, and GST audits. We examine your financial records, verify compliance, identify risks, and provide recommendations for improvement. Our audit reports are accepted by all regulatory authorities.',
      },
      {
        question: 'Do you provide company registration services?',
        answer:
          'Yes, we provide complete company registration services including private limited companies, LLPs, OPCs, and partnerships. We handle name approval, documentation, filing with MCA, and post-incorporation compliance like PAN, TAN, and bank account opening.',
      },
    ],
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFaqs = faqs[activeCategory as keyof typeof faqs] || faqs.general;

  return (
    <>
      <Helmet>
        <title>FAQ | ABSM & ASSOCIATES - Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to commonly asked questions about our CA services, tax filing, GST compliance, and more. Chartered Accountant in Chandigarh."
        />
        <link rel="canonical" href="https://absmassociates.com/faq" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="eyebrow block mb-4">FAQ</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Frequently asked questions
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                Find answers to common questions about our services. Can't find what you're looking for? 
                Please do not hesitate to contact our office.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenIndex(0);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-[#0B1E3C] text-white'
                      : 'bg-[#F6F7F9] text-[#5A6A7A] hover:bg-[#0B1E3C] hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {currentFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#F6F7F9] rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-[#EEF0F3] transition-colors"
                  >
                    <span className="font-semibold text-[#0B1E3C] pr-4 text-left">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5A6A7A] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                      <p className="text-[#5A6A7A] leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-12 lg:py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MessageCircle className="w-12 h-12 text-[#2F6BFF] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Sora'] mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9] transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919781064214"
                className="flex items-center space-x-2 px-8 py-4 bg-white/10 text-white rounded-xl font-medium border border-white/20 hover:bg-white/20 transition-colors"
              >
                <span>Call: +91 97810 64214</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
