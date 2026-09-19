// Junta app.html, las letras de la web y el grabador de MP4 en un único
// archivo (../index.html) que funciona sin internet y sin instalar nada.
// Uso: node fuente/construir.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
const leer = (f, cod) => readFileSync(join(aqui, f), cod);
const b64 = f => leer(f).toString('base64');

const fuentes = `
@font-face{font-family:'Archivo';font-style:normal;font-weight:300 600;src:url(data:font/woff2;base64,${b64('archivo-400-latin.woff2')}) format('woff2');}
@font-face{font-family:'Instrument Serif';font-style:normal;font-weight:400;src:url(data:font/woff2;base64,${b64('instrument-serif-400-latin.woff2')}) format('woff2');}
@font-face{font-family:'Instrument Serif';font-style:italic;font-weight:400;src:url(data:font/woff2;base64,${b64('instrument-serif-400-italica-latin.woff2')}) format('woff2');}`;

const muxer = leer('mp4-muxer.js', 'utf8').replace(/\/\/# sourceMappingURL=.*$/m, '');

const html = leer('app.html', 'utf8')
  .replace('/*FUENTES*/', () => fuentes)
  .replace('/*MUXER*/', () => muxer);

writeFileSync(join(aqui, '..', 'index.html'), html);
console.log('Hecho: index.html (' + Math.round(html.length / 1024) + ' KB)');
