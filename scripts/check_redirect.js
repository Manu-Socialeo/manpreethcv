const https = require('https');

function follow(url) {
  const req = https.get(url, { rejectUnauthorized: false }, res => {
    console.log(url, 'Status:', res.statusCode, 'Location:', res.headers.location);
    if (res.headers.location) {
      follow(res.headers.location);
    }
  });
  req.on('error', err => console.error(err));
}

follow('https://gola.io/hanssen');
