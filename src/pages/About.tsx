import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, Target, Shield, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Partners from '../sections/Partners';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our engagements.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Our standards demand accuracy and precision in every deliverable.',
    },
    {
      icon: Users,
      title: 'Client-First',
      description: 'Your success is our priority. We tailor solutions to your needs.',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Continuous learning keeps us ahead of regulatory changes.',
    },
  ];

  const milestones = [
    { year: '2016', event: 'Firm established in Chandigarh by the partners of ABSM & ASSOCIATES' },
    { year: '2018', event: 'Expanded core services to include complex GST compliance' },
    { year: '2020', event: 'Achieved FCA status and scaled audit operations' },
    { year: '2022', event: 'Integrated complete digital financial consulting for SMEs' },
    { year: 'Present', event: 'Recognized as a leading strategic advisory in Chandigarh region' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | ABSM & ASSOCIATES - Chartered Accountant Firm</title>
        <meta
          name="description"
          content="Learn about ABSM & ASSOCIATES, a trusted Chartered Accountant Firm in Chandigarh with 10+ years of experience delivering end-to-end financial and legal solutions."
        />
        <link rel="canonical" href="https://absmassociates.com/about" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">ABOUT US</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Professional Expertise. Strategic Growth.
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                ABSM & ASSOCIATES is a premier Chartered Accountant Firm in Chandigarh 
                dedicated to helping individuals and businesses navigate the complex world of 
                taxation, auditing, and compliance with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                  Heritage & Mission
                </h2>
                <div className="space-y-4 text-[#5A6A7A] leading-relaxed">
                  <p>
                    Established in 2016 as a partnership of senior industry veterans with credentials including FCA, FAFD, and B.Com (H), our firm was built on a resolute mission: 
                    to provide comprehensive, ethical, and innovative financial strategies that empower businesses 
                    and individuals in Chandigarh and across India to grow securely.
                  </p>
                  <p>
                    Bringing 10+ years of rich experience (ICAI Membership No: 542899) and specialized expertise in 
                    Audit & Taxation, we have evolved into a distinguished practice committed to delivering end-to-end 
                    professional services, from company incorporation to rigorous regulatory compliance.
                  </p>
                  <p>
                    Today, we combine deep, technical domain knowledge with highly personalized consulting. Whether you are 
                    a startup seeking GST clarity or a corporation requiring detailed audits, we ensure you are 
                    always supported by technical excellence.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-[28px] overflow-hidden card-shadow relative">
                  <img
                    src="/images/team-collaboration.jpg"
                    alt="Our team at work"
                    className="w-full h-auto"
                  />
                  {/* CA Logo Badge on Image */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl p-2 card-shadow">
                    <img 
                      src="/images/ca-logo.jpg" 
                      alt="CA Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
              <span className="eyebrow block mb-4">OUR VALUES</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                What drives us
              </h2>
              <p className="text-lg text-[#5A6A7A]">
                Our foundational principles dictate the precision and integrity inherent in every professional engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#2F6BFF]/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#2F6BFF]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1E3C] font-['Sora'] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#5A6A7A] text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
              <span className="eyebrow block mb-4">OUR JOURNEY</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                Strategic Milestones
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-xl font-bold text-[#2F6BFF] font-['Sora']">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="w-4 h-4 bg-[#2F6BFF] rounded-full" />
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-[#0B1E3C]/10" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="text-[#0B1E3C] font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Partners />

        {/* CTA Section */}
        <section className="py-12 lg:py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Sora'] mb-6">
              Initiate a Strategic Partnership
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Engage our consultants to discuss how we can support your financial and regulatory objectives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center space-x-2 px-8 py-4 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9] transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Request Consultation</span>
              </Link>
              <Link
                to="/services/income-tax"
                className="flex items-center space-x-2 px-8 py-4 bg-white/10 text-white rounded-xl font-medium border border-white/20 hover:bg-white/20 transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
