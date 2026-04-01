import { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScrollPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('scrollPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 50 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('scrollPopupShown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] max-w-sm w-full animate-fade-in-up">
      <div className="bg-white rounded-2xl shadow-2xl p-5 relative">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-[#F6F7F9] transition-colors"
        >
          <X className="w-4 h-4 text-[#5A6A7A]" />
        </button>

        {/* Content */}
        <div className="pr-6">
          <h4 className="text-lg font-bold text-[#0B1E3C] font-['Sora'] mb-1">
            Need CA Assistance?
          </h4>
          <p className="text-sm text-[#5A6A7A] mb-3">
            Schedule a professional consultation with our experts.
          </p>

          <Link
            to="/contact"
            onClick={closePopup}
            className="inline-flex items-center space-x-2 text-sm font-medium text-[#2F6BFF] hover:underline"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScrollPopup;
