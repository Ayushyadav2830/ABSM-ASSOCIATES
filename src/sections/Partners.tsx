import { Mail, Linkedin } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'CA Anoop Bhatia',
      role: 'FOUNDER PARTNER | FCA, L.LB, IP',
      bio: 'Specialist in Insolvency Professional (IBC) and Audit & Assurance. Driving the firm\'s strategic initiatives with profound expertise.',
      color: 'bg-[#0B1E3C]',
      email: 'mailto:anoop@absmassociates.com',
      linkedin: '#',
    },
    {
      name: 'CA Sourabh Malpani',
      role: 'FOUNDER PARTNER | FCA, L.LB, DISA',
      bio: 'Expert in Direct/Indirect Tax Litigation and Corporate Advisory. Ensuring seamless compliance and legal prudence for all clients.',
      color: 'bg-[#2F6BFF]',
      email: 'mailto:sourabh@absmassociates.com',
      linkedin: '#',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[rgba(11,30,60,0.12)] mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2F6BFF]">
              LEADERSHIP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
            Meet Our Partners
          </h2>
          <p className="text-lg text-[#5A6A7A] leading-relaxed line-clamp-2">
            Guiding our firm with decades of combined experience, ethical clarity, and forward-thinking vision.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100/50"
            >
              {/* Colored Top Bar */}
              <div className={`h-32 ${partner.color} relative overflow-hidden`}>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }} />
                </div>
              </div>

              {/* Avatar Placeholder */}
              <div className="absolute top-32 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-white rounded-full p-1.5 shadow-xl border border-gray-100 flex items-center justify-center">
                  <div className="w-full h-full bg-[#F6F7F9] rounded-full flex items-center justify-center text-[#0B1E3C]/20">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-16 pb-8 px-8 lg:px-10 text-center">
                <h3 className="text-2xl font-bold text-[#0B1E3C] font-['Sora'] mb-1">
                  {partner.name}
                </h3>
                <p className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider mb-6">
                  {partner.role}
                </p>
                <div className="w-10 h-0.5 bg-[#2F6BFF]/20 mx-auto mb-6" />
                <p className="text-[#5A6A7A] leading-relaxed mb-8 text-sm lg:text-base">
                  {partner.bio}
                </p>

                {/* Social Icons */}
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={partner.linkedin}
                    className="w-10 h-10 rounded-full bg-[#0B1E3C] flex items-center justify-center text-white hover:bg-[#2F6BFF] transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={partner.email}
                    className="w-10 h-10 rounded-full bg-[#0B1E3C] flex items-center justify-center text-white hover:bg-[#2F6BFF] transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
