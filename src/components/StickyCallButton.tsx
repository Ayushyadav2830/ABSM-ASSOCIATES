import { Phone } from 'lucide-react';

const StickyCallButton = () => {
  return (
    <>
      {/* Mobile-only sticky call button */}
      <a
        href="tel:+919876543210"
        className="fixed bottom-6 left-6 z-50 lg:hidden flex items-center justify-center w-14 h-14 bg-[#2F6BFF] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
};

export default StickyCallButton;
