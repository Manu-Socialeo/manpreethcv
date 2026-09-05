const fs = require('fs');
const path = require('path');
const https = require('https');

const scratchDir = 'C:\\Users\\manpr\\.gemini\\antigravity-ide\\brain\\3aca2374-71fc-4bdb-95be-566a1b072cbf\\scratch';
const files = fs.readdirSync(scratchDir).filter(f => f.endsWith('.html') || f.endsWith('.md'));

let allImages = new Set();
const imgRegex = /https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.(?:webp|png|jpg|jpeg|svg)/g;

files.forEach(file => {
  const content = fs.readFileSync(path.join(scratchDir, file), 'utf8');
  const matches = content.match(imgRegex) || [];
  matches.forEach(m => allImages.add(m));
});

// Also check the root downloaded file
const rootContent = fs.readFileSync('C:\\Users\\manpr\\.gemini\\antigravity-ide\\brain\\3aca2374-71fc-4bdb-95be-566a1b072cbf\\.system_generated\\steps\\29\\content.md', 'utf8');
(rootContent.match(imgRegex) || []).forEach(m => allImages.add(m));

console.log('Total unique images discovered:', allImages.size);
const imgList = [...allImages];

const destDir = 'c:\\Users\\manpr\\OneDrive\\Documents\\Antigravity Projects\\manuresume\\assets\\images';
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let downloaded = 0;
async function downloadAll() {
  for (let i = 0; i < imgList.length; i++) {
    const url = imgList[i];
    const filename = path.basename(url);
    const targetFile = path.join(destDir, filename);

    if (fs.existsSync(targetFile) && fs.statSync(targetFile).size > 0) {
      downloaded++;
      continue;
    }

    await new Promise(resolve => {
      const fileStream = fs.createWriteStream(targetFile);
      https.get(url, (res) => {
        if (res.statusCode === 200) {
          res.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            downloaded++;
            resolve();
          });
        } else {
          console.error('Failed to download', url, res.statusCode);
          fileStream.close();
          resolve();
        }
      }).on('error', err => {
        console.error('Error downloading', url, err.message);
        resolve();
      });
    });
  }
  console.log(`Downloaded ${downloaded} of ${imgList.length} images.`);
  fs.writeFileSync('c:\\Users\\manpr\\OneDrive\\Documents\\Antigravity Projects\\manuresume\\assets\\images_map.json', JSON.stringify(imgList, null, 2));
}

downloadAll();
