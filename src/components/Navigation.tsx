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
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/#industries' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && (location.hash === path.substring(1) || !location.hash);
    }
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-sm border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="logo-container w-12 h-12 lg:w-16 lg:h-16 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 rounded-xl flex items-center justify-center p-1.5">
                <img 
                  src="/images/ca-logo.jpg" 
                  alt="CA Logo" 
                  className="w-full h-full object-contain scale-110"
                />
              </div>
              <div className="flex flex-col justify-center overflow-hidden">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold font-['Sora'] tracking-tight leading-none text-[#0B1E3C] flex items-center whitespace-nowrap">
                  <span>ABSM &</span>
                  <span className="text-[#2F6BFF] ml-1.5 uppercase">ASSOCIATES</span>
                </div>
                <div className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold tracking-[0.25em] uppercase text-[#5A6A7A] mt-1 line-clamp-1 truncate">
                  Chartered Accountants
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[15px] font-medium transition-colors hover:text-[#2F6BFF] ${
                    isActive(link.href)
                      ? 'text-[#2F6BFF]'
                      : 'text-[#4A5568]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:+919781064214"
                className="flex items-center space-x-2 text-[#0B1E3C] hover:text-[#2F6BFF] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#F6F7F9] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold">Let's Talk</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center space-x-2 px-6 py-3.5 bg-[#2F6BFF] text-white rounded-xl font-semibold text-sm hover:bg-[#2558d9] shadow-[0_8px_25px_rgba(47,107,255,0.25)] transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
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
                href="tel:+919781064214"
                className="flex items-center justify-center space-x-2 w-full py-4 rounded-xl border border-gray-100 text-[#0B1E3C] font-semibold text-sm bg-[#F6F7F9]"
              >
                <Phone className="w-5 h-5 text-[#2F6BFF]" />
                <span>Let's Talk</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-4 bg-[#2F6BFF] text-white rounded-xl font-semibold text-sm shadow-lg shadow-[#2F6BFF]/20"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
