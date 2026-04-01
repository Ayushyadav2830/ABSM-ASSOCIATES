import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | ABSM & ASSOCIATES</title>
        <meta name="description" content="Privacy Policy of ABSM & ASSOCIATES. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://absmassociates.com/privacy-policy" />
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
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-[#5A6A7A]">
            <p className="text-sm text-[#5A6A7A] mb-8">
              Last updated: January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                1. Introduction
              </h2>
              <p>
                ABSM & ASSOCIATES ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, postal address, 
                  PAN, Aadhaar, and other identification details necessary for providing our services.
                </li>
                <li>
                  <strong>Financial Information:</strong> Bank account details, income details, investment 
                  information, and other financial data required for tax filing and compliance.
                </li>
                <li>
                  <strong>Business Information:</strong> Company details, GST registration, business 
                  turnover, and other relevant business data.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our website, 
                  including IP address, browser type, pages visited, and time spent.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process tax filings, GST returns, and other compliance requirements</li>
                <li>To communicate with you about your account and our services</li>
                <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                4. Information Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. This 
                includes encryption, secure servers, and access controls.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                5. Information Sharing
              </h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your 
                information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Government authorities as required by law (Income Tax Department, GST Portal, etc.)</li>
                <li>Service providers who assist us in operating our business</li>
                <li>Professional advisors such as lawyers and auditors</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                6. Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                7. Cookies
              </h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze 
                website traffic, and personalize content. You can control cookies through your browser 
                settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0B1E3C] font-['Sora'] mb-4">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
