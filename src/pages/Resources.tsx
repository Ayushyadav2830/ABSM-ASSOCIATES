import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DownloadCloud, FileText } from 'lucide-react';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const forms = [
    { title: 'Income Tax Return Form 1', type: 'PDF' },
    { title: 'Income Tax Return Form 2', type: 'PDF' },
    { title: 'Form 16/16A Format', type: 'PDF' },
    { title: 'Challan 280 (Self Assessment Tax)', type: 'PDF' },
    { title: 'TDS Rate Chart (FY 2024-25)', type: 'PDF' },
    { title: 'GST Registration Checklist', type: 'PDF' },
  ];

  return (
    <>
      <Helmet>
        <title>Resources & Downloads | ABSM & ASSOCIATES</title>
        <meta name="description" content="Download important tax forms, compliance checklists, and financial resources provided by the partners of ABSM & ASSOCIATES." />
        <link rel="canonical" href="https://absmassociates.com/resources" />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="eyebrow block mb-4">DOWNLOADS CENTER</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
              Tools & Resources
            </h1>
            <p className="text-xl text-[#5A6A7A] leading-relaxed mb-8">
              Access commonly used tax forms, document checklists, and regulatory reference sheets for quick action.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0B1E3C] font-['Sora'] mb-8">Tax Forms & Checklists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forms.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-5 rounded-2xl border border-[rgba(11,30,60,0.1)] hover:border-[#2F6BFF] hover:card-shadow transition-all group cursor-pointer bg-white">
                   <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#F6F7F9] group-hover:bg-[#2F6BFF]/10 transition-colors rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#5A6A7A] group-hover:text-[#2F6BFF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0B1E3C] text-sm group-hover:text-[#2F6BFF] transition-colors">{item.title}</h3>
                        <span className="text-xs text-[#5A6A7A] uppercase">{item.type}</span>
                      </div>
                   </div>
                   <DownloadCloud className="w-5 h-5 text-[#2F6BFF] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-[#F6F7F9] p-8 rounded-3xl border-l-4 border-[#2F6BFF]">
               <h3 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-2">Need a specific document?</h3>
               <p className="text-[#5A6A7A]">If you require a specific government form or compliance format not listed here, please contact our office at <strong>+91 97810 64214</strong> or email us at <strong>info@absmassociates.com</strong>.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Resources;
