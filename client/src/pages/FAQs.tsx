import React, { useState } from 'react';
import { Search } from 'lucide-react';
import FAQItem from '../components/FAQItem';
import faqsData from '../data/faqs.json';

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqsData.filter(
    faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
              Find answers to common questions about our services and process
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-600 dark:text-slate-300">
                  No FAQs found matching your search. Try different keywords.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
