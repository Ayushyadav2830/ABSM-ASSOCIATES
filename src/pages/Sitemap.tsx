import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, FileText, HelpCircle } from 'lucide-react';

const Sitemap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Home,
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Why Choose Us', href: '/why-choose-us' },
        { name: 'Industries We Serve', href: '/industries' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Appointment', href: '/appointment' },
        { name: 'Careers', href: '/careers' },
        { name: 'Resources', href: '/resources' },
      ],
    },
    {
      icon: FileText,
      title: 'Services',
      links: [
        { name: 'All Services Overview', href: '/services' },
        { name: 'GST Registration & Filing', href: '/services/gst-registration' },
        { name: 'Income Tax Planning & Filing', href: '/services/income-tax' },
        { name: 'Audit & Assurance', href: '/services/audit-assurance' },
        { name: 'Company Registration', href: '/services/company-registration' },
        { name: 'NRI Taxation', href: '/services/nri-taxation' },
        { name: 'TDS Returns', href: '/services/tds-returns' },
        { name: 'PF & ESIC Compliance', href: '/services/pf-esic-compliance' },
      ],
    },
    {
      icon: HelpCircle,
      title: 'Legal & Information',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Disclaimer', href: '/disclaimer' },
        { name: 'Sitemap', href: '/sitemap' },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | ABSM & ASSOCIATES - Chandigarh</title>
        <meta name="description" content="Complete sitemap of ABSM & ASSOCIATES's website. Find all pages and services." />
        <link rel="canonical" href="https://absmassociates.com/sitemap" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-[#5A6A7A] hover:text-[#2F6BFF] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
            Sitemap
          </h1>
          <p className="text-[#5A6A7A] mb-12">
            Find all pages and sections of our website.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-[#F6F7F9] rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-[#0B1E3C] rounded-xl flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg font-bold text-[#0B1E3C] font-['Sora']">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.href}
                        className="text-[#5A6A7A] hover:text-[#2F6BFF] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Sitemap;
