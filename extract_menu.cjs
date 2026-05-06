const fs = require('fs');

async function extract() {
  const response = await fetch('https://www.ohzoneclinics.com/');
  const html = await response.text();
  
  const fs = require('fs');
  fs.writeFileSync('ohzone.html', html);
  console.log("Saved to ohzone.html");
}

extract().catch(console.error);
