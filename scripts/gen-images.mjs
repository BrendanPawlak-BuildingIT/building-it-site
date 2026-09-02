import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const favicon = path.join(publicDir, 'favicon.svg');
const ogSvg = path.join(publicDir, 'og-image.svg');

await sharp(favicon).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(favicon).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
await sharp(favicon).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
await sharp(favicon).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'));
await sharp(favicon).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'));

await sharp(ogSvg).resize(1200, 630).png().toFile(path.join(publicDir, 'og-image.png'));

console.log('Generated favicon and OG image raster files.');
