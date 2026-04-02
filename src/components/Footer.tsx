import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: 'Income Tax Filing', href: '/services/income-tax' },
    { name: 'GST Registration', href: '/services/gst-registration' },
    { name: 'Audit & Assurance', href: '/services/audit-assurance' },
    { name: 'Company Registration', href: '/services/company-registration' },
    { name: 'View All Services →', href: '/services' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Resources', href: '/resources' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <footer className="bg-[#132031] border-t border-white/5 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 rounded-xl flex items-center justify-center p-1">
                <img 
                  src="/images/ca-logo.jpg" 
                  alt="CA Logo" 
                  className="w-full h-full object-contain scale-125 saturate-0 brightness-200"
                />
              </div>
            <div className="flex flex-col justify-center">
                <div className="text-xl lg:text-2xl font-bold font-['Sora'] tracking-tight leading-none text-white flex items-center">
                  <span>ABSM &</span>
                  <span className="text-[#2F6BFF] ml-1.5 uppercase">ASSOCIATES</span>
                </div>
                <div className="text-[9px] lg:text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 mt-1">
                  Chartered Accountants
                </div>
              </div>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
              An elite Chartered Accountancy firm committed to technical excellence and strategic value creation. We provide sophisticated advisory, audit, and taxation services for a global clientele.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@absmassociates.com"
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@absmassociates.com</span>
              </a>
              <a
                href="tel:+919781064214"
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 97810 64214</span>
              </a>
              <div className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>SCO 35, 2nd Floor, Sector 7-C, Madhya Marg, Chandigarh 160019, India</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} ABSM & ASSOCIATES. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
