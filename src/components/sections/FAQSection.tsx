'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Reveal, FAQAccordionItem } from '@/components/ui';
import { HOMEPAGE_FAQS } from '@/constants/faqData';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOMEPAGE_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Reveal variant="fadeUp" duration={1.2} y={30}>
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-bg-surface border border-white/[0.05] text-text-secondary shadow-soft-tile-xs tracking-wide uppercase">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-text-primary mb-3 sm:mb-4 leading-tight text-center">
            Frequently Asked{' '}
            <span className="text-text-muted">Questions</span>
          </h2>

          {/* Subtext */}
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 text-center max-w-xl mx-auto">
            Everything you need to know about AI brand visibility and how Brank
            helps you track and improve it.
          </p>

          {/* Accordion List */}
          <div className="space-y-3">
            {HOMEPAGE_FAQS.map((faq) => (
              <FAQAccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() =>
                  setOpenId(openId === faq.id ? null : faq.id)
                }
              />
            ))}
          </div>

          {/* See More Link */}
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-300"
            >
              See all questions
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
