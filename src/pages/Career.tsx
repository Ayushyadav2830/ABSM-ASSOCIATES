import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openPositions = [
    {
      title: 'Senior Audit Assistant',
      type: 'Full-time',
      experience: '3-5 Years',
      location: 'Chandigarh',
      description: 'Looking for an experienced candidate to manage corporate audits and finalize books of accounts independently.',
    },
    {
      title: 'Taxation Executive (GST/Income Tax)',
      type: 'Full-time',
      experience: '1-3 Years',
      location: 'Chandigarh',
      description: 'Seeking a proactive associate for GST returns, scrutiny responses, and ITR filings for HNIs.',
    },
    {
      title: 'Articled Assistant',
      type: 'Articleship',
      experience: 'Fresher',
      location: 'Chandigarh',
      description: 'Excellent learning opportunity for CA aspirants looking to gain exposure under dynamic leadership.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Careers | ABSM & ASSOCIATES</title>
        <meta name="description" content="Join our dynamic team at ABSM & ASSOCIATES. Explore exciting career opportunities in Audit, Taxation, and Corporate Advisory in Chandigarh." />
        <link rel="canonical" href="https://absmassociates.com/careers" />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="eyebrow block mb-4">JOIN OUR TEAM</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
              Build your career with us
            </h1>
            <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
              We are constantly looking for talented professionals and ambitious learners 
              to join our expanding practice in Chandigarh. 
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0B1E3C] font-['Sora'] mb-10 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openPositions.map((job, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 card-shadow border border-[rgba(11,30,60,0.05)] hover:-translate-y-1 transition-transform">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#2F6BFF]/10 rounded-xl flex items-center justify-center text-[#2F6BFF]">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-[#F6F7F9] text-[#5A6A7A] text-xs font-semibold rounded-full uppercase tracking-wider">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-2">{job.title}</h3>
                  <div className="flex flex-col space-y-2 mb-4 text-sm text-[#5A6A7A]">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <p className="text-[#5A6A7A] mb-6 text-sm">{job.description}</p>
                  <a href="mailto:info@absmassociates.com" className="inline-flex items-center space-x-2 text-[#2F6BFF] font-medium hover:underline">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-[#0B1E3C] rounded-3xl p-8 lg:p-12 text-center text-white">
               <h3 className="text-2xl lg:text-3xl font-bold font-['Sora'] mb-4">Don't see a fit?</h3>
               <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                 Send us your resume anyway. We are always on the lookout for bright minds.
               </p>
               <a href="mailto:info@absmassociates.com" className="inline-flex items-center space-x-2 bg-[#2F6BFF] hover:bg-[#2558d9] px-6 py-3 rounded-lg font-medium transition-colors">
                  <Briefcase className="w-5 h-5" />
                  <span>Submit Resume</span>
               </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Career;
