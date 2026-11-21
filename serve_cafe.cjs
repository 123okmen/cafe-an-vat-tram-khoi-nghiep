const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8089;
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'bluetooth=(self), camera=(self), microphone=(), geolocation=()',
  'Cross-Origin-Opener-Policy': 'same-origin'
};

const resolvedDistDir = path.resolve(DIST_DIR);

const server = http.createServer((req, res) => {
  Object.entries(SECURITY_HEADERS).forEach(([k, v]) => res.setHeader(k, v));
  const origin = req.headers.origin || '';
  if (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  let reqPath = '/';
  try {
    reqPath = decodeURIComponent((req.url || '/').split('?')[0]);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('400 Bad Request');
    return;
  }

  if (reqPath.includes('\0')) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('400 Bad Request');
    return;
  }

  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  let filePath = path.resolve(resolvedDistDir, '.' + (reqPath.startsWith('/') ? reqPath : '/' + reqPath));

  // Block Path Traversal outside DIST_DIR (CWE-22)
  if (filePath !== path.join(resolvedDistDir, 'index.html') && !filePath.startsWith(resolvedDistDir + path.sep)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  // SPA fallback
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    if (!path.extname(reqPath)) {
      filePath = path.join(resolvedDistDir, 'index.html');
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`☕ CAFE ĂN VẶT TRẠM KHỞI NGHIỆP Web App running at:`);
  console.log(`   - Local:    http://localhost:${PORT}/`);
  console.log(`   - POS:      http://localhost:${PORT}/#/staff`);
  console.log(`   - Gọi Món:  http://localhost:${PORT}/#/order`);
  console.log(`   - Báo Cáo:  http://localhost:${PORT}/#/planner`);
  console.log(`   - Kế Hoạch: http://localhost:${PORT}/#/plan`);
});
