// Static file server for Next.js export from /app/frontend-nextjs/out
// Serves the built static site on port 3000 (consumed by supervisor frontend program)
const path = require('path');
const handler = require('serve-handler');
const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = path.resolve(__dirname, '..', 'frontend-nextjs', 'out');

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: ROOT,
    cleanUrls: true,
    trailingSlash: true,
    headers: [
      {
        source: '**/*.@(jpg|jpeg|gif|png|webp|svg|ico|css|js)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }],
      },
    ],
  });
});

server.listen(PORT, HOST, () => {
  console.log(`[finxia-static] Serving ${ROOT} at http://${HOST}:${PORT}`);
});
