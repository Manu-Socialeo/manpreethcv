const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');
const assetMatches = html.match(/(?:src|href)="([^"]+)"/g) || [];
const missing = [];
const verified = [];

assetMatches.forEach(m => {
  const url = m.match(/"([^"]+)"/)[1];
  if (url.startsWith('http') || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:')) return;
  const localPath = path.join(__dirname, '..', url);
  if (!fs.existsSync(localPath)) {
    missing.push(url);
  } else {
    verified.push(url);
  }
});

console.log('Verified local assets:', verified.length);
if (missing.length === 0) {
  console.log('✅ ALL ASSETS PRESENT AND VERIFIED!');
} else {
  console.error('❌ Missing assets:', missing);
}
