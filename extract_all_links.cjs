const fs = require('fs');

async function extract() {
  const response = await fetch('https://www.ohzoneclinics.com/');
  const html = await response.text();
  
  const links = [...html.matchAll(/<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/gi)];
  const seen = new Set();
  for (const link of links) {
    const text = link[2].trim().replace(/\s+/g, ' ');
    const href = link[1].trim();
    if (text && href && !href.startsWith('#') && !seen.has(href)) {
      seen.add(href);
      if (href.includes('ohzoneclinics.com') || href.startsWith('/')) {
        console.log(`${text} | ${href}`);
      }
    }
  }
}

extract().catch(console.error);
