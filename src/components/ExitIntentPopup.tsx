import { useState, useEffect } from 'react';
import { X, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closePopup}
      />

      {/* Popup Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 lg:p-8 animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F6F7F9] transition-colors"
        >
          <X className="w-5 h-5 text-[#5A6A7A]" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-16 h-16 bg-[#2F6BFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-[#2F6BFF]" />
          </div>

          <h3 className="text-2xl font-bold text-[#0B1E3C] font-['Sora'] mb-2">
            Before You Go...
          </h3>

          <p className="text-[#5A6A7A] mb-6">
            Get a <span className="font-semibold text-[#0B1E3C]">15-minute professional consultation</span> with our CA experts. Discuss your tax, GST, or compliance needs.
          </p>

          <div className="space-y-3">
            <Link
              to="/contact"
              onClick={closePopup}
              className="flex items-center justify-center space-x-2 w-full btn-primary"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </Link>

            <a
              href="tel:+919876543210"
              onClick={closePopup}
              className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl border border-[#0B1E3C]/12 text-[#0B1E3C] font-medium hover:bg-[#F6F7F9] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: +91 98765 43210</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-[#5A6A7A]">
            No obligation. Confidential & secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
