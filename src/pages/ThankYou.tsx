import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Phone } from 'lucide-react';

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Thank You | ABSM & ASSOCIATES</title>
        <meta name="description" content="Thank you for contacting ABSM & ASSOCIATES. We will get back to you shortly." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="pt-20 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
            Thank You!
          </h1>

          <p className="text-lg text-[#5A6A7A] mb-8 max-w-lg mx-auto">
            Your message has been received. We appreciate you reaching out to us. 
            Our team will review your inquiry and get back to you within 24 hours.
          </p>

          <div className="bg-[#F6F7F9] rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-[#0B1E3C] mb-4">
              What happens next?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#2F6BFF]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-[#2F6BFF]">1</span>
                </div>
                <p className="text-[#5A6A7A]">
                  Our team will review your requirements within 24 hours.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#2F6BFF]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-[#2F6BFF]">2</span>
                </div>
                <p className="text-[#5A6A7A]">
                  We'll reach out to discuss your needs in detail.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#2F6BFF]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-[#2F6BFF]">3</span>
                </div>
                <p className="text-[#5A6A7A]">
                  We'll provide a customized proposal and next steps.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center space-x-2 btn-primary"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <a
              href="tel:+919781064214"
              className="flex items-center space-x-2 btn-secondary"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-[#5A6A7A] mb-4">
              Need immediate assistance?
            </p>
            <a
              href="https://wa.me/919781064214"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#25D366] font-medium hover:underline"
            >
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default ThankYou;
