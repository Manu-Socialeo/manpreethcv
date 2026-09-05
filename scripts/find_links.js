const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\manpr\\.gemini\\antigravity-ide\\brain\\3aca2374-71fc-4bdb-95be-566a1b072cbf\\scratch\\work_hanssen.html', 'utf8');

const regex = /href="([^"]+)"/g;
let match;
const links = new Set();
while ((match = regex.exec(content)) !== null) {
  links.add(match[1]);
}
console.log('Links:', [...links]);
