import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Advisory Services', href: '/services' },
    { name: 'Industry Expertise', href: '/#industries' },
    { name: 'About the Firm', href: '/about' },
    { name: 'Insights & Resources', href: '/blog' },
    { name: 'Get in Touch', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 z-50 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 lg:w-14 lg:h-14 relative overflow-hidden flex-shrink-0 border border-[#0B1E3C]/5 rounded-lg">
                <img 
                  src="/images/ca-logo.jpg" 
                  alt="CA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl lg:text-2xl font-bold font-['Sora'] tracking-[-0.03em] leading-none mb-1 text-[#0B1E3C]">
                  ABSM & <span className="text-[#2F6BFF]">ASSOCIATES</span>
                </span>
                <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase text-[#5A6A7A] opacity-80 leading-none">
                  Chartered Accountants
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`lg:text-[12px] xl:text-[13px] font-bold tracking-tight transition-colors hover:text-[#2F6BFF] ${
                    isActive(link.href)
                      ? 'text-[#2F6BFF]'
                      : 'text-[#0B1E3C]'
                  }`}
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center lg:space-x-1.5 xl:space-x-2">
              <a
                href="https://wa.me/919781064214"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center space-x-1.5 lg:px-2 xl:px-3 py-2 rounded-lg lg:text-[12px] xl:text-[13px] font-bold transition-all ${
                  isScrolled
                    ? 'text-[#0B1E3C] hover:bg-[#F6F7F9]'
                    : 'text-[#0B1E3C] hover:bg-white/50'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap">Speak with an Expert</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center space-x-1.5 lg:px-3 xl:px-4 py-2 bg-[#2F6BFF] text-white rounded-lg lg:text-[12px] xl:text-[13px] font-bold hover:bg-[#2558d9] transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap">Schedule Your Consultation</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#F6F7F9] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#0B1E3C]" />
              ) : (
                <Menu className="w-6 h-6 text-[#0B1E3C]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-white shadow-xl ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-lg font-medium text-[#0B1E3C] hover:text-[#2F6BFF] transition-colors border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="https://wa.me/919781064214"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl border border-[#0B1E3C]/12 text-[#0B1E3C] font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Speak with an Expert</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full btn-primary"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Your Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
