import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ClipboardCheck, 
  Calculator, 
  Shield, 
  Gavel, 
  Layers, 
  GitMerge, 
  Rocket, 
  CheckSquare, 
  PieChart, 
  TrendingUp, 
  Briefcase, 
  Coins, 
  Percent, 
  BarChart3, 
  Building2,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allServices = [
    {
      icon: ClipboardCheck,
      title: 'Audit & Assurance',
      description: 'Independent validation of financial records including statutory, internal, and risk-based audits to ensure regulatory adherence and fiscal transparency.',
      link: '/services/audit-assurance',
    },
    {
      icon: Calculator,
      title: 'Taxation Advisory',
      description: 'Comprehensive tax management encompassing strategic planning, GST compliance, transfer pricing, and handling of scrutiny/assessment procedures.',
      link: '/services/taxation',
    },
    {
      icon: Shield,
      title: 'Insolvency (IBC 2016)',
      description: 'Authorized representation and drafting of resolution plans under the Insolvency and Bankruptcy Code (IBC) for structured debt resolution.',
      link: '/services/insolvency-ibc',
    },
    {
      icon: Gavel,
      title: 'Legal Advisory',
      description: 'Technical support for financial litigation, arbitration, and drafting of specialized business agreements to mitigate corporate risk.',
      link: '/services/legal-advisory',
    },
    {
      icon: Layers,
      title: 'MSME Solutions',
      description: 'Facilitating MSME registration, specialized invoice discounting, and structured financial recovery support for small and medium enterprises.',
      link: '/services/msme-services',
    },
    {
      icon: GitMerge,
      title: 'Succession Planning',
      description: 'Preserving multi-generational wealth through the precise drafting of wills, trusts, and business succession frameworks.',
      link: '/services/succession-planning',
    },
    {
      icon: Rocket,
      title: 'Startup Advisory',
      description: 'Incubation support, growth modeling, and risk advisory designed to navigate the regulatory lifecycle of new ventures.',
      link: '/services/startup-advisory',
    },
    {
      icon: CheckSquare,
      title: 'Regulatory Compliance',
      description: 'Ensuring adherence to SEBI mandates, FEMA-FDI/ODI regulations, ROC filings, and state-specific RERA requirements.',
      link: '/services/regulatory-compliance',
    },
    {
      icon: PieChart,
      title: 'Valuation Services',
      description: 'Certified valuation of business entities, equity shares, intangible assets (IPR), and immovable properties for statutory purposes.',
      link: '/services/valuation',
    },
    {
      icon: TrendingUp,
      title: 'Fund Raising',
      description: 'Structuring debt and equity capital through private placements, term loans, and optimized working capital facilities.',
      link: '/services/fund-raising',
    },
    {
      icon: Briefcase,
      title: 'Merger & Acquisition',
      description: 'Strategic advisory for hive-offs, joint ventures, and business combinations aimed at long-term inorganic growth.',
      link: '/services/merger-acquisition',
    },
    {
      icon: Coins,
      title: 'Capital Advisory',
      description: 'Optimizing capital structures through equity finance, debt instruments, and alternative financing route evaluations.',
      link: '/services/capital-advisory',
    },
    {
      icon: Percent,
      title: 'Subsidies & Grants',
      description: 'Navigating state and central government incentives including RIPS, PMFME schemes, and other industrial clusters.',
      link: '/services/subsidies',
    },
    {
      icon: BarChart3,
      title: 'Investment Advisory',
      description: 'Bespoke wealth management through Private Equity, Alternative Investment Funds (AIF), and family office structures.',
      link: '/services/investment-advisory',
    },
    {
      icon: Building2,
      title: 'Business Incorporation',
      description: 'Formal setup of Pvt Ltd, LLP, OPC, and specialized NBFC structures including all necessary regulatory registrations.',
      link: '/services/business-incorporation',
    },
    {
      icon: Rocket,
      title: 'Business Startup',
      description: 'End-to-end support for new business ventures including statutory registrations, MSME, and ISO certifications.',
      link: '/services/business-startup',
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | ABSM & ASSOCIATES - Chandigarh</title>
        <meta
          name="description"
          content="Explore our comprehensive range of Chartered Accountant services in Chandigarh including GST, Income Tax, Audit, and Company Registration."
        />
        <link rel="canonical" href="https://absmassociates.com/services" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">ADVISORY SERVICES</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Comprehensive financial solutions
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                From basic compliance to complex advisory, we offer a full spectrum of Chartered Accountant services tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {allServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="bg-[#F6F7F9] hover:bg-[#F6F7F9] rounded-[28px] p-8 card-shadow flex flex-col h-full transition-none"
                >
                  <div className="w-14 h-14 bg-[#0B1E3C] rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-3">
                    {service.title}
                  </h2>
                  
                  <p className="text-[#5A6A7A] hover:text-[#5A6A7A] bg-transparent hover:bg-transparent mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-[#2F6BFF] font-medium mt-auto">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        
        {/* CTA Section */}
        <section className="py-12 lg:py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Sora'] mb-6">
              Not sure which service you need?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a professional discovery call with ABSM & ASSOCIATES to discuss your specific requirements and get a tailored solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Schedule Your Consultation
              </Link>
              <a
                href="https://wa.me/919781064214"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-colors font-medium"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
