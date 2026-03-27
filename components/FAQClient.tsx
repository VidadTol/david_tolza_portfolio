'use client';

import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQClientProps {
  faqs: FAQItem[];
}

function FAQItemComponent({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
      <button
        className="flex items-start justify-between w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg text-slate-100">{question}</span>
        <HelpCircle
          className={`w-6 h-6 text-blue-500 flex-shrink-0 ml-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <p className="mt-4 text-slate-300 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function FAQClient({ faqs }: FAQClientProps) {
  return (
    <>
      {faqs.map((faq, index) => (
        <FAQItemComponent
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </>
  );
}