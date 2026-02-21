export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export type FAQCategory = 'general' | 'features' | 'getting-started';

export const FAQ_CATEGORIES: { value: FAQCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'general', label: 'General' },
  { value: 'features', label: 'Features' },
  { value: 'getting-started', label: 'Getting Started' },
];

export const ALL_FAQS: FAQItem[] = [
  {
    id: 'what-is-brank',
    question: 'What is Brank.AI?',
    answer:
      'Brank.AI is an AI brand visibility platform that tracks how large language models like ChatGPT, Gemini, Grok, Perplexity, and Claude mention, rank, and recommend your brand. Think of it as SEO, but for AI. We help you understand and improve how AI represents your brand to millions of users.',
    category: 'general',
  },
  {
    id: 'ai-vs-seo',
    question: 'How is AI brand visibility different from traditional SEO?',
    answer:
      'Traditional SEO optimizes for search engine rankings on Google or Bing. AI brand visibility focuses on how AI models respond when users ask for product recommendations, brand comparisons, or industry expertise. AI models pull from different sources and use different ranking logic than search engines, so the optimization strategies are fundamentally different.',
    category: 'general',
  },
  {
    id: 'platforms-tracked',
    question: 'Which AI platforms does Brank track?',
    answer:
      'Brank monitors your brand across all major AI models including ChatGPT (OpenAI), Gemini (Google), Grok (xAI), Perplexity, and Claude (Anthropic). We provide per-model breakdowns so you can see exactly how each platform represents your brand differently.',
    category: 'features',
  },
  {
    id: 'metrics',
    question: 'What metrics does Brank.AI measure?',
    answer:
      'We track four core metrics: Mention Rate (how often AI references your brand), Sentiment Score (whether AI describes you positively or negatively), Competitive Ranking (where you stand relative to competitors in AI recommendations), and Source Attribution (which websites and content influence AI models when they talk about your brand).',
    category: 'features',
  },
  {
    id: 'source-attribution',
    question: 'How does Source Attribution work?',
    answer:
      'Our Source Attribution feature identifies the specific websites, articles, and content that AI models draw from when generating responses about your brand or industry. This tells you exactly which domains to target for content placement and PR efforts to improve your AI visibility.',
    category: 'features',
  },
  {
    id: 'competitor-ranking',
    question: 'Can I see how my competitors rank in AI responses?',
    answer:
      'Yes. Our Gap Analysis feature provides a side-by-side comparison of your brand versus competitors across all tracked AI models. You can see where competitors outperform you and get actionable insights on how to close the gap.',
    category: 'features',
  },
  {
    id: 'chatgpt-mini-app',
    question: 'What is the ChatGPT Mini App and how does it help my brand?',
    answer:
      'We help brands launch ChatGPT Mini Apps, lightweight, interactive experiences that live directly inside ChatGPT conversations. When users ask about your product category, your mini app can provide real-time product info, recommendations, and direct engagement. It turns ChatGPT into a branded touchpoint for your business.',
    category: 'features',
  },
  {
    id: 'google-upc',
    question: 'How does Brank help with Google UPC and product visibility?',
    answer:
      'Brank helps you optimize your product data for Google\'s Universal Product Code (UPC) integration and AI-powered shopping experiences. As Google increasingly uses AI to surface product recommendations, having properly structured product data ensures your brand appears accurately across Google\'s AI features, Shopping, and Merchant Center.',
    category: 'features',
  },
  {
    id: 'ai-storefront',
    question: 'What is an AI Storefront?',
    answer:
      'An AI Storefront is your brand\'s presence inside AI conversations. When a user asks an AI model about your product category, an AI Storefront ensures your brand appears with accurate product information, pricing, and direct engagement options, turning AI chat into a new sales channel.',
    category: 'features',
  },
  {
    id: 'getting-started',
    question: 'How do I get started with Brank.AI?',
    answer:
      'Click "Analyse your brand" to begin. You\'ll provide your brand name and domain, and we\'ll generate your initial AI visibility report showing how AI models currently perceive and recommend your brand across all tracked platforms.',
    category: 'getting-started',
  },
  {
    id: 'what-is-aeo',
    question: 'What is AEO (Answer Engine Optimization)?',
    answer:
      'AEO is the practice of optimizing your brand\'s content and online presence so that AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews accurately recommend and reference your brand. Brank provides the analytics foundation for any AEO strategy.',
    category: 'general',
  },
  {
    id: 'why-ai-matters',
    question: 'Why are AI recommendations important for my brand?',
    answer:
      'A growing number of consumers now ask AI models for product recommendations instead of searching Google. If AI models don\'t know about your brand or describe it inaccurately, you\'re losing potential customers to competitors who are better represented in AI responses.',
    category: 'general',
  },
  {
    id: 'track-or-improve',
    question: 'Can Brank help improve my AI visibility, or just track it?',
    answer:
      'Both. Our Source Attribution and Gap Analysis features provide specific, actionable intelligence on which content and domains to target. We show you exactly what influences AI models so you can take concrete steps to improve your positioning.',
    category: 'features',
  },
  {
    id: 'data-security',
    question: 'Is my data private and secure?',
    answer:
      'Yes. We don\'t share your brand data with any third parties. Your competitive intelligence and visibility metrics are accessible only to your team. We follow industry-standard security practices to protect all customer data.',
    category: 'general',
  },
  {
    id: 'industries',
    question: 'What industries does Brank work for?',
    answer:
      'Brank works for any brand or business that wants to be recommended by AI. Our platform is industry-agnostic. Whether you\'re in SaaS, e-commerce, financial services, healthcare, hospitality, or any other sector, AI models are already being asked about your category.',
    category: 'getting-started',
  },
];

export const HOMEPAGE_FAQS = ALL_FAQS.slice(0, 10);
