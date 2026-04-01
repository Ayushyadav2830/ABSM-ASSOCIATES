import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Service | ABSM & ASSOCIATES</title>
        <meta name="description" content="Terms of Service for ABSM & ASSOCIATES. Please read these terms carefully before using our services." />
        <link rel="canonical" href="https://absmassociates.com/terms" />
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
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none text-[#5A6A7A]">
            <p className="text-sm text-[#5A6A7A] mb-8">
              Last updated: January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the services of ABSM & ASSOCIATES ("we," "our," or "us"), 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                2. Services Description
              </h2>
              <p>
                ABSM & ASSOCIATES is a Chartered Accountant firm providing taxation, audit, 
                accounting, and compliance services. The specific scope of services will be defined 
                in individual engagement letters or agreements with each client.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                3. Client Responsibilities
              </h2>
              <p className="mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, complete, and timely information</li>
                <li>Maintain proper records and documentation</li>
                <li>Respond to our queries and requests promptly</li>
                <li>Review and approve deliverables in a timely manner</li>
                <li>Pay fees as per the agreed terms</li>
                <li>Inform us of any changes in your business or financial situation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                4. Fees and Payment
              </h2>
              <p>
                Our fees are based on the scope of work, complexity, and time required. Payment terms 
                will be specified in the engagement letter. Late payments may result in suspension of 
                services. All fees are exclusive of applicable taxes unless stated otherwise.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                5. Confidentiality
              </h2>
              <p>
                We maintain strict confidentiality of all client information in accordance with 
                professional standards and applicable laws. We will not disclose your information 
                to third parties except as required by law or with your consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                6. Limitation of Liability
              </h2>
              <p>
                While we strive to provide accurate and reliable services, our liability is limited 
                to the fees paid for the specific service in question. We are not liable for any 
                indirect, consequential, or punitive damages. Our services are based on information 
                provided by you, and we rely on its accuracy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                7. Professional Standards
              </h2>
              <p>
                Our services are governed by the Code of Ethics and professional standards issued 
                by the Institute of Chartered Accountants of India (ICAI). We comply with all 
                applicable laws, regulations, and professional guidelines.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                8. Termination
              </h2>
              <p>
                Either party may terminate the engagement with reasonable notice. Upon termination, 
                you agree to pay for all services rendered up to the termination date. We will 
                return your documents as per your instructions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                9. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to 
                the exclusive jurisdiction of the courts in Chandigarh.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Continued use of our services constitutes 
                acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                11. Contact Information
              </h2>
              <p>
                For any questions regarding these Terms of Service, please contact us:
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

export default Terms;
