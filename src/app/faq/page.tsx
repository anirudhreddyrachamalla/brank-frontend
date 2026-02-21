import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FAQPageContent from './FAQPageContent';
import { ALL_FAQS } from '@/constants/faqData';

export const metadata: Metadata = {
  title: 'FAQ | Brank.AI - AI Brand Visibility Platform',
  description:
    'Frequently asked questions about Brank.AI. AI brand visibility monitoring, AEO optimization, and how AI models recommend brands.',
  alternates: {
    canonical: 'https://www.brank.ai/faq',
  },
  openGraph: {
    title: 'FAQ | Brank.AI',
    description:
      'Everything you need to know about AI brand visibility and how Brank helps you track and improve it.',
    url: 'https://www.brank.ai/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'FAQ | Brank.AI',
    description:
      'Everything you need to know about AI brand visibility and how Brank helps you track and improve it.',
  },
};

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ALL_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 md:pt-20 pt-12 sm:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <h1 className="text-text-primary text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-text-muted text-sm sm:text-base mb-8 sm:mb-12">
          Everything you need to know about AI brand visibility.
        </p>
        <FAQPageContent />
      </main>
      <Footer />
    </div>
  );
}
