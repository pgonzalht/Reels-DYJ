// Servidor mínimo para probar index.html en el navegador: node fuente/servir.mjs
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const tipos = { '.html': 'text/html; charset=utf-8', '.jpg': 'image/jpeg', '.png': 'image/png', '.mp4': 'video/mp4', '.js': 'text/javascript', '.webmanifest': 'application/manifest+json', '.heic': 'image/heic' };
createServer(async (req, res) => {
  const ruta = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  try {
    const f = join(raiz, ruta === '/' ? 'index.html' : ruta);
    const datos = await readFile(f);
    res.writeHead(200, { 'content-type': tipos[extname(f)] || 'application/octet-stream' });
    res.end(datos);
  } catch { res.writeHead(404); res.end(); }
}).listen(5178, () => console.log('http://localhost:5178'));
