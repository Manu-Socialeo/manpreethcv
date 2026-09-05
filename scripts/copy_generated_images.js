const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\manpr\\.gemini\\antigravity-ide\\brain\\3aca2374-71fc-4bdb-95be-566a1b072cbf';
const destDir = 'c:\\Users\\manpr\\OneDrive\\Documents\\Antigravity Projects\\manuresume\\assets\\images';

const files = fs.readdirSync(brainDir);

const mappings = [
  { prefix: 'hanssen_darkness_1_', target: 'hanssen_darkness_1.jpg' },
  { prefix: 'hanssen_darkness_2_', target: 'hanssen_darkness_2.jpg' },
  { prefix: 'hanssen_selected_work_', target: 'hanssen_selected_work.jpg' },
  { prefix: 'hanssen_beige_', target: 'hanssen_beige.jpg' },
  { prefix: 'hanssen_studio_', target: 'hanssen_studio.jpg' },
  { prefix: 'ema_hanssen_avatar_', target: 'ema_hanssen_avatar.jpg' }
];

mappings.forEach(({ prefix, target }) => {
  const match = files.find(f => f.startsWith(prefix) && f.endsWith('.jpg'));
  if (match) {
    fs.copyFileSync(path.join(brainDir, match), path.join(destDir, target));
    console.log(`Copied ${match} -> ${target}`);
  } else {
    console.warn(`No match found for ${prefix}`);
  }
});
