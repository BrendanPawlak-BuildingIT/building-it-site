import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const brandIcon = path.join(publicDir, 'brand-icon.png');
const ogSvg = path.join(publicDir, 'og-image.svg');

const INK = { r: 11, g: 13, b: 16, alpha: 1 };

/**
 * Composite the official brand icon (bars mark) onto a solid ink square,
 * centered with padding, at the given output size.
 */
async function makeAppIcon(size, outFile) {
  const iconSize = Math.round(size * 0.62);
  const iconBuffer = await sharp(brandIcon).resize(iconSize, iconSize, { fit: 'inside' }).toBuffer();
  const iconMeta = await sharp(iconBuffer).metadata();

  await sharp({
    create: { width: size, height: size, channels: 4, background: INK },
  })
    .composite([
      {
        input: iconBuffer,
        left: Math.round((size - (iconMeta.width ?? iconSize)) / 2),
        top: Math.round((size - (iconMeta.height ?? iconSize)) / 2),
      },
    ])
    .png()
    .toFile(outFile);
}

await makeAppIcon(180, path.join(publicDir, 'apple-touch-icon.png'));
await makeAppIcon(32, path.join(publicDir, 'favicon-32x32.png'));
await makeAppIcon(16, path.join(publicDir, 'favicon-16x16.png'));
await makeAppIcon(512, path.join(publicDir, 'icon-512.png'));
await makeAppIcon(192, path.join(publicDir, 'icon-192.png'));

await sharp(ogSvg).resize(1200, 630).png().toFile(path.join(publicDir, 'og-image.png'));

console.log('Generated favicon/app-icon set from brand-icon.png and the OG image from og-image.svg.');
