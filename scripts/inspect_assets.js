const fs = require('fs');
const path = require('path');

const scratchDir = 'C:\\Users\\manpr\\.gemini\\antigravity-ide\\brain\\3aca2374-71fc-4bdb-95be-566a1b072cbf\\scratch';
const files = fs.readdirSync(scratchDir).filter(f => f.endsWith('.html'));

const results = {};

files.forEach(f => {
  const content = fs.readFileSync(path.join(scratchDir, f), 'utf8');
  const imgMatches = content.match(/https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.(?:webp|png|jpg|jpeg)/g) || [];
  results[f] = [...new Set(imgMatches)];
});

console.log(JSON.stringify(results, null, 2));
