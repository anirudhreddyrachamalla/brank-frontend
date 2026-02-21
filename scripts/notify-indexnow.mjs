/**
 * Post-deploy IndexNow notification script
 *
 * Usage:
 *   node scripts/notify-indexnow.mjs                        # Submit all pages
 *   node scripts/notify-indexnow.mjs /blog/my-post          # Submit specific URLs
 */

const INDEXNOW_KEY = '2beebb0f7fc64b5298064339aec73854';
const SITE_HOST = 'www.brank.ai';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

// All important pages — update when you add new pages/blog posts
const ALL_PAGES = [
  '/',
  '/blog',
  '/pricing',
  '/blog/the-rise-of-generative-engine-optimization',
];

async function submitToIndexNow(urls) {
  const fullUrls = urls.map((url) =>
    url.startsWith('http') ? url : `https://${SITE_HOST}${url}`
  );

  console.log(`\nSubmitting ${fullUrls.length} URLs to IndexNow...\n`);
  fullUrls.forEach((url) => console.log(`  ${url}`));

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: fullUrls,
  };

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  if (response.ok || response.status === 202) {
    console.log(`\nDone! ${fullUrls.length} URLs submitted successfully.`);
  } else {
    const errorText = await response.text();
    console.error(`\nFailed: HTTP ${response.status} - ${errorText}`);
    process.exit(1);
  }
}

const args = process.argv.slice(2);

if (args.length > 0) {
  submitToIndexNow(args);
} else {
  submitToIndexNow(ALL_PAGES);
}
