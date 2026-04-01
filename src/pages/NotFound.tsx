import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | ABSM & ASSOCIATES</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="pt-20 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="text-8xl sm:text-9xl font-bold text-[#0B1E3C]/10 font-['Sora'] mb-4">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
            Page not found
          </h1>

          <p className="text-lg text-[#5A6A7A] mb-8 max-w-lg mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been 
            moved, deleted, or never existed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/"
              className="flex items-center space-x-2 btn-primary"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 btn-secondary"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="bg-[#F6F7F9] rounded-2xl p-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Search className="w-5 h-5 text-[#5A6A7A]" />
              <span className="text-sm font-medium text-[#5A6A7A]">
                Popular Pages
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/services/gst-registration"
                className="px-4 py-2 bg-white rounded-full text-sm text-[#0B1E3C] hover:text-[#2F6BFF] transition-colors card-shadow"
              >
                GST Services
              </Link>
              <Link
                to="/services/income-tax"
                className="px-4 py-2 bg-white rounded-full text-sm text-[#0B1E3C] hover:text-[#2F6BFF] transition-colors card-shadow"
              >
                Income Tax
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 bg-white rounded-full text-sm text-[#0B1E3C] hover:text-[#2F6BFF] transition-colors card-shadow"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 bg-white rounded-full text-sm text-[#0B1E3C] hover:text-[#2F6BFF] transition-colors card-shadow"
              >
                About Us
              </Link>
              <Link
                to="/faq"
                className="px-4 py-2 bg-white rounded-full text-sm text-[#0B1E3C] hover:text-[#2F6BFF] transition-colors card-shadow"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
