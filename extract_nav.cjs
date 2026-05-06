const fs = require('fs');

async function extract() {
  const response = await fetch('https://www.ohzoneclinics.com/');
  const html = await response.text();
  
  // Find everything inside <nav> or the header
  const navMatch = html.match(/<ul[^>]*class="[^"]*hs-menu-wrapper[^"]*"[^>]*>([\s\S]*?)<\/ul>/i);
  if (navMatch) {
     console.log("Found nav match");
     // Try to pull out all links with their text
     const links = [...navMatch[1].matchAll(/<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/gi)];
     for (const link of links) {
       console.log(`${link[2].trim()} - ${link[1]}`);
     }
  } else {
     console.log("Could not find standard hs-menu-wrapper. Searching all a tags in nav...");
     const navSection = html.match(/<nav[\s\S]*?<\/nav>/i);
     if (navSection) {
       const links = [...navSection[0].matchAll(/<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/gi)];
       for (const link of links) {
         console.log(`${link[2].trim()} - ${link[1]}`);
       }
     }
  }
}

extract().catch(console.error);
