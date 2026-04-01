import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, CheckCircle } from 'lucide-react';

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <>
      <Helmet>
        <title>Book an Appointment | ABSM & ASSOCIATES</title>
        <meta name="description" content="Consult with our partners with ABSM & ASSOCIATES. Expert financial consulting and tax advice in Chandigarh." />
        <link rel="canonical" href="https://absmassociates.com/appointment" />
      </Helmet>

      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-[#F6F7F9]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
              Request Consultation
            </h1>
            <p className="text-lg text-[#5A6A7A] mb-8">
              Choose a date and time that works best for you to discuss your financial and tax needs.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 lg:p-10 card-shadow border border-[#0B1E3C]/10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B1E3C] font-['Sora'] mb-3">
                    Appointment Requested!
                  </h2>
                  <p className="text-[#5A6A7A] mb-6">
                    We will get back to you shortly to confirm the appointment timings.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#2F6BFF] font-medium hover:underline"
                  >
                    Book another time
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#0B1E3C] mb-2">Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] outline-none" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B1E3C] mb-2">Phone *</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] outline-none" placeholder="+91 XXXXX XXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B1E3C] mb-2">Email *</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] outline-none" placeholder="example@email.com" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#0B1E3C] mb-2">Preferred Date *</label>
                      <input required type="date" className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B1E3C] mb-2">Service Context</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-[rgba(11,30,60,0.12)] focus:border-[#2F6BFF] outline-none bg-white">
                        <option>Income Tax</option>
                        <option>GST Consulting</option>
                        <option>Audit</option>
                        <option>Company Registration</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center space-x-2 btn-primary py-4">
                    <Calendar className="w-5 h-5" />
                    <span>Submit Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Appointment;
