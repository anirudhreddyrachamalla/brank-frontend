'use client';

import { useState } from 'react';
import { FAQAccordionItem } from '@/components/ui';
import { ALL_FAQS, FAQ_CATEGORIES } from '@/constants/faqData';
import type { FAQCategory } from '@/constants/faqData';

export default function FAQPageContent() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'all'>(
    'all'
  );

  const filteredFaqs =
    activeCategory === 'all'
      ? ALL_FAQS
      : ALL_FAQS.filter((faq) => faq.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 -mx-1 px-1">
        {FAQ_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => {
              setActiveCategory(cat.value);
              setOpenId(null);
            }}
            className={`
              px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap
              transition-all duration-300 cursor-pointer
              ${
                activeCategory === cat.value
                  ? 'bg-bg-elevated border border-white/[0.1] text-text-primary shadow-soft-tile-xs'
                  : 'bg-bg-surface border border-white/[0.05] text-text-muted hover:text-text-secondary hover:border-white/[0.08]'
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => (
          <FAQAccordionItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
          />
        ))}
      </div>

      {filteredFaqs.length === 0 && (
        <p className="text-text-muted text-sm text-center py-8">
          No questions found in this category.
        </p>
      )}
    </div>
  );
}
