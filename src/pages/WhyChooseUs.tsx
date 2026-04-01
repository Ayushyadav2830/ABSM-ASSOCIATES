import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  Clock,
  Shield,
  Users,
  FileText,
  TrendingUp,
  MessageSquare,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const differentiators = [
    {
      icon: Award,
      title: '15+ Years of Experience',
      description:
        'A decade and a half of serving clients across industries has given us deep expertise in handling complex financial and compliance matters.',
    },
    {
      icon: Users,
      title: 'Dedicated Point of Contact',
      description:
        'Every client gets a dedicated relationship manager who understands your business and is always available to assist.',
    },
    {
      icon: Clock,
      title: 'Timely Deliveries',
      description:
        'We respect deadlines. Our streamlined processes ensure all filings and deliverables are completed on time, every time.',
    },
    {
      icon: Shield,
      title: 'Confidential & Secure',
      description:
        'Your data security is paramount. We use encrypted systems and follow strict confidentiality protocols.',
    },
    {
      icon: FileText,
      title: 'Document-First Approach',
      description:
        'We maintain meticulous records and documentation, ensuring transparency and easy audit trails.',
    },
    {
      icon: TrendingUp,
      title: 'Proactive Advisory',
      description:
        'We dont just file returns—we identify opportunities for tax savings and business growth.',
    },
  ];

  const comparisonPoints = [
    { feature: 'Dedicated Relationship Manager', us: true, others: false },
    { feature: 'Fixed Pricing (No Hidden Charges)', us: true, others: false },
    { feature: '24-48 Hour Response Time', us: true, others: false },
    { feature: 'Digital Document Management', us: true, others: false },
    { feature: 'Proactive Tax Planning', us: true, others: false },
    { feature: 'Post-Filing Support', us: true, others: false },
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Us | ABSM & ASSOCIATES - Chartered Accountant Firm</title>
        <meta
          name="description"
          content="Discover why businesses choose ABSM & ASSOCIATES for their CA needs. 15+ years experience, dedicated support, timely deliveries, and transparent pricing."
        />
        <link rel="canonical" href="https://absmassociates.com/why-choose-us" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">WHY CHOOSE US</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                The ABSM & ASSOCIATES difference
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                We combine technical expertise with personalized service to deliver 
                exceptional value to every client.
              </p>
            </div>
          </div>
        </section>

        {/* Differentiators Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F6F7F9] rounded-2xl p-6 lg:p-8 hover:card-shadow transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#0B1E3C] rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#5A6A7A] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 lg:py-24 bg-[#F6F7F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-4">COMPARISON</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                Why we're different
              </h2>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden card-shadow">
              <div className="grid grid-cols-3 gap-4 p-6 bg-[#0B1E3C] text-white font-semibold">
                <div>Feature</div>
                <div className="text-center">ABSM & ASSOCIATES</div>
                <div className="text-center text-white/60">Others</div>
              </div>
              {comparisonPoints.map((point, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 gap-4 p-6 items-center ${
                    index !== comparisonPoints.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="text-[#0B1E3C] font-medium">{point.feature}</div>
                  <div className="flex justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex justify-center">
                    {point.others ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Highlight */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MessageSquare className="w-12 h-12 text-[#2F6BFF] mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-medium text-[#0B1E3C] font-['Sora'] mb-8">
              "The team at ABSM & ASSOCIATES goes above and beyond. Their proactive 
              approach has saved us both time and money."
            </blockquote>
            <div>
              <p className="font-semibold text-[#0B1E3C]">Akshay Patra Foundation</p>
              <p className="text-[#5A6A7A]">Major Client</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Sora'] mb-6">
              Experience the difference
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Join 500+ satisfied clients who trust us with their financial compliance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9] transition-colors"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhyChooseUsPage;
