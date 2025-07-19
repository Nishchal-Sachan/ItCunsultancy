import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-slate-900 dark:text-white">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-slate-600 dark:text-slate-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
