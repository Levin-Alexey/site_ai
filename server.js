import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');
const port = Number(process.env.PORT || 7860);
const host = process.env.HOST || '0.0.0.0';

app.use(express.static(distDir));

app.get('*', (_request, response) => {
  const requestedPath = _request.path.replace(/^\/+|\/+$/g, '');
  if (requestedPath) {
    const routeIndex = path.join(distDir, requestedPath, 'index.html');
    return response.sendFile(routeIndex, (error) => {
      if (error) {
        response.sendFile(path.join(distDir, 'index.html'));
      }
    });
  }
  return response.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, host, () => {
  console.log(`Static site listening on http://${host}:${port}`);
});