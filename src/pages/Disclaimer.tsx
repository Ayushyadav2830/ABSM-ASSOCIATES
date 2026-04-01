import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Disclaimer | ABSM & ASSOCIATES</title>
        <meta name="description" content="Disclaimer for ABSM & ASSOCIATES's website and services." />
        <link rel="canonical" href="https://absmassociates.com/disclaimer" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-[#5A6A7A] hover:text-[#2F6BFF] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1E3C] font-['Sora'] mb-8">
            Disclaimer
          </h1>

          <div className="prose prose-lg max-w-none text-[#5A6A7A]">
            <p className="text-sm text-[#5A6A7A] mb-8">
              Last updated: January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                1. General Disclaimer
              </h2>
              <p>
                The information provided on this website is for general informational purposes only. 
                While we strive to keep the information accurate and up-to-date, we make no 
                representations or warranties of any kind, express or implied, about the completeness, 
                accuracy, reliability, suitability, or availability of the information, products, 
                services, or related graphics contained on this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                2. Professional Advice
              </h2>
              <p>
                The content on this website does not constitute professional advice. Tax laws, 
                regulations, and compliance requirements are complex and subject to frequent changes. 
                The information provided should not be construed as a substitute for professional 
                advice tailored to your specific circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                3. No Client Relationship
              </h2>
              <p>
                Use of this website or communication through this website does not create a 
                client-professional relationship. A formal engagement letter must be executed 
                before any professional services are rendered.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                4. External Links
              </h2>
              <p>
                This website may contain links to external websites that are not provided or 
                maintained by us. We do not guarantee the accuracy, relevance, timeliness, or 
                completeness of any information on these external websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                In no event shall ABSM & ASSOCIATES be liable for any loss or damage including 
                without limitation, indirect or consequential loss or damage, or any loss or damage 
                whatsoever arising from loss of data or profits arising out of, or in connection 
                with, the use of this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                6. Accuracy of Information
              </h2>
              <p>
                While we make every effort to ensure that the information on this website is 
                correct, we do not warrant its completeness or accuracy; nor do we commit to 
                ensuring that the website remains available or that the material on the website 
                is kept up to date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                7. Intellectual Property
              </h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, 
                images, and software, is the property of ABSM & ASSOCIATES and is protected 
                by Indian and international copyright laws. Unauthorized use or reproduction is 
                prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                8. Consent
              </h2>
              <p>
                By using our website, you hereby consent to our disclaimer and agree to its terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                9. Updates
              </h2>
              <p>
                We may update this disclaimer from time to time. You should check this page 
                periodically to ensure you are aware of any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about this disclaimer, please contact us:
              </p>
              <p className="mt-4">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@absmassociates.com" className="text-[#2F6BFF] hover:underline">
                  info@absmassociates.com
                </a>
                <br />
                <strong>Phone:</strong>{' '}
                <a href="tel:+919781064214" className="text-[#2F6BFF] hover:underline">
                  +91 97810 64214
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Disclaimer;
