'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface FAQAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQAccordionItemProps) {
  return (
    <div
      className={`
        bg-bg-surface border rounded-xl shadow-soft-tile-xs
        transition-all duration-300
        ${isOpen ? 'border-white/[0.08]' : 'border-white/[0.05] hover:border-white/[0.08]'}
      `}
    >
      <button
        onClick={onToggle}
        className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-text-primary text-sm sm:text-base font-medium pr-4">
          {question}
        </span>
        <svg
          className={`w-4 h-4 text-text-muted transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 sm:pb-5 px-4 sm:px-5">
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
