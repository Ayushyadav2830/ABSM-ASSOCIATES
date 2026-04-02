import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do you work with clients outside Chandigarh?',
      answer: 'Yes. We serve clients across India via secure document sharing and video calls. Our digital-first approach ensures seamless service delivery regardless of location.',
    },
    {
      question: 'What documents are needed for ITR filing?',
      answer: 'Typically: PAN, Aadhaar, Form 16, bank statements, and investment proofs. We\'ll share a comprehensive checklist after booking your consultation.',
    },
    {
      question: 'How do you price your services?',
      answer: 'Fixed fees for standard engagements; custom quotes for audits and complex filings. No hidden charges. We provide transparent pricing upfront after understanding your requirements.',
    },
    {
      question: 'Can you handle GST notices?',
      answer: 'Yes. We analyze the notice, prepare a response, and represent you before authorities when needed. Our team has extensive experience in handling various types of GST notices and disputes.',
    },
    {
      question: 'Do you offer monthly accounting packages?',
      answer: 'Yes. We offer monthly bookkeeping + compliance retainers for businesses of all sizes. These packages include regular reconciliations, timely filings, and dedicated support.',
    },
    {
      question: 'How soon can we start?',
      answer: 'After an initial discovery call, we typically begin within 2–3 business days. For urgent requirements, we can expedite the process.',
    },
  ];

  // Removed animations for static website

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <span className="eyebrow block mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
            Common questions
          </h2>
          <p className="text-lg text-[#5A6A7A]">
            Quick answers. If you need more detail,{' '}
            <Link to="/contact" className="text-[#2F6BFF] hover:underline">
              book a call
            </Link>
            .
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white rounded-2xl overflow-hidden card-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-[#F6F7F9] transition-colors"
              >
                <span className="font-semibold text-[#0B1E3C] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#5A6A7A] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden ${
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

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#5A6A7A]">
            Still have questions?{' '}
            <Link to="/contact" className="text-[#2F6BFF] font-medium hover:underline">
              Contact us
            </Link>{' '}
            for personalized assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
