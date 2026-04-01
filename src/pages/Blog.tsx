import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      category: 'Income Tax',
      title: 'ITR filing checklist for FY 2024–25',
      excerpt:
        'A comprehensive guide to documents, deductions, and common mistakes to avoid this filing season. Ensure smooth ITR submission.',
      image: '/images/blog-itr.jpg',
      author: 'ABSM & ASSOCIATES',
      date: 'Jan 15, 2025',
      readTime: '8 min read',
      slug: 'itr-filing-checklist-fy-2024-25',
    },
    {
      category: 'GST',
      title: 'Reconciling GSTR-2B with your purchase register',
      excerpt:
        'Learn the step-by-step approach to catch mismatches before filing and ensure maximum input tax credit claim.',
      image: '/images/blog-gst.jpg',
      author: 'ABSM & ASSOCIATES',
      date: 'Jan 10, 2025',
      readTime: '6 min read',
      slug: 'reconciling-gstr-2b-purchase-register',
    },
    {
      category: 'Audit',
      title: 'When does your business need a tax audit?',
      excerpt:
        'Understanding turnover thresholds and scenarios that trigger statutory tax audit requirements under Income Tax Act.',
      image: '/images/blog-audit.jpg',
      author: 'ABSM & ASSOCIATES',
      date: 'Jan 5, 2025',
      readTime: '5 min read',
      slug: 'when-business-needs-tax-audit',
    },
    {
      category: 'Company Law',
      title: 'Startup India Registration: Benefits & Process',
      excerpt:
        'Complete guide to registering your startup under the Startup India initiative and availing tax benefits.',
      image: '/images/industry-startup.jpg',
      author: 'ABSM & ASSOCIATES',
      date: 'Dec 28, 2024',
      readTime: '7 min read',
      slug: 'startup-india-registration-benefits',
    },
    {
      category: 'GST',
      title: 'QRMP Scheme: Quarterly Return Monthly Payment',
      excerpt:
        'Everything you need to know about the QRMP scheme for small taxpayers and how to opt-in.',
      image: '/images/blog-gst.jpg',
      author: 'ABSM & ASSOCIATES',
      date: 'Dec 20, 2024',
      readTime: '4 min read',
      slug: 'qrmp-scheme-guide',
    },
    {
      category: 'NRI Taxation',
      title: 'NRI Tax Filing: Residential Status & Income Tax',
      excerpt:
        'Understanding residential status determination and tax implications for NRIs with Indian income sources.',
      image: '/images/blog-itr.jpg',
      author: 'ABSM & ASSOCIATES',
      date: 'Dec 15, 2024',
      readTime: '9 min read',
      slug: 'nri-tax-filing-residential-status',
    },
  ];

  const categories = ['All', 'Income Tax', 'GST', 'Audit', 'Company Law', 'NRI Taxation'];

  return (
    <>
      <Helmet>
        <title>Blog | ABSM & ASSOCIATES - CA Insights & Updates</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on tax, GST, audit, and compliance. Expert articles from Chartered Accountants in Chandigarh."
        />
        <link rel="canonical" href="https://absmassociates.com/blog" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-[#F6F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">INSIGHTS & UPDATES</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] font-['Sora'] mb-6">
                Latest from our blog
              </h1>
              <p className="text-xl text-[#5A6A7A] leading-relaxed">
                Practical insights on tax, compliance, and business finance to help you 
                make informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-[#0B1E3C] text-white'
                      : 'bg-[#F6F7F9] text-[#5A6A7A] hover:bg-[#0B1E3C] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="bg-[#F6F7F9] rounded-[28px] overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3C]/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0B1E3C]">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-[#5A6A7A] mb-3">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-[#0B1E3C] font-['Sora'] mb-2 line-clamp-2 group-hover:text-[#2F6BFF] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-[#5A6A7A] text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-[#2F6BFF] rounded-full flex items-center justify-center text-white text-xs font-bold">
                          RJ
                        </div>
                        <span className="text-sm text-[#5A6A7A]">{post.author}</span>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center space-x-1 text-[#2F6BFF] font-medium text-sm group-hover:underline"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-white border border-[#0B1E3C]/12 rounded-xl text-[#0B1E3C] font-medium hover:bg-[#F6F7F9] transition-colors">
                <span>Load More Articles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12 lg:py-16 bg-[#0B1E3C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Sora'] mb-4">
              Stay updated
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Subscribe to our newsletter for the latest tax updates and compliance reminders.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#2F6BFF]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#2F6BFF] text-white rounded-xl font-medium hover:bg-[#2558d9] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
