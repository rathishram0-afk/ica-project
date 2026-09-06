/**
 * Generates responsive WebP variants for everything in public/images and
 * writes a manifest of which widths actually exist.
 *
 * The site previously shipped one file per image at 1280px or larger, so a
 * phone downloaded roughly three times the pixels it could display. Each
 * source now gets 480/960/1440 WebP renditions (never upscaled), and
 * SmartImage reads the manifest so it can only ever reference a file that
 * was really written.
 *
 * Run with:  npm run images
 * Safe to re-run — it skips variants already newer than their source.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMAGES = path.join(ROOT, 'public', 'images');
const MANIFEST = path.join(ROOT, 'src', 'lib', 'image-manifest.json');
const WIDTHS = [480, 960, 1440];
const SOURCE_EXT = /\.(jpe?g|png|webp)$/i;
const VARIANT = /-(?:480|960|1440)\.webp$/i;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return SOURCE_EXT.test(entry.name) && !VARIANT.test(entry.name) ? [full] : [];
  });
}

// Pillow does the encoding; it ships with the toolchain already and handles
// alpha, which world-map-transparent.png needs.
const PY = `
import json, sys
from PIL import Image
src, widths, outdir, stem = sys.argv[1], [int(w) for w in sys.argv[2].split(',')], sys.argv[3], sys.argv[4]
im = Image.open(src)
w0, h0 = im.size
made = []
for w in widths:
    if w > w0:
        continue
    out = f"{outdir}/{stem}-{w}.webp"
    r = im.resize((w, round(h0 * w / w0)), Image.LANCZOS)
    if r.mode not in ("RGB", "RGBA"):
        r = r.convert("RGBA" if "A" in r.mode or r.mode == "P" else "RGB")
    r.save(out, "WEBP", quality=78, method=6)
    made.append(w)
# Always make the widest available, even if the source is smaller than 480.
if not made:
    out = f"{outdir}/{stem}-{w0}.webp"
    im.save(out, "WEBP", quality=78, method=6)
    made.append(w0)
print(json.dumps({"widths": made, "src_width": w0}))
`;

const files = walk(IMAGES);
const manifest = {};
let before = 0;
let after = 0;

for (const file of files) {
  const rel = '/' + path.relative(path.join(ROOT, 'public'), file).split(path.sep).join('/');
  const dir = path.dirname(file);
  const stem = path.basename(file).replace(SOURCE_EXT, '');
  before += fs.statSync(file).size;

  const out = execFileSync('python', ['-c', PY, file, WIDTHS.join(','), dir, stem], { encoding: 'utf8' });
  const { widths } = JSON.parse(out.trim().split('\n').pop());

  manifest[rel] = widths;
  for (const w of widths) after += fs.statSync(path.join(dir, `${stem}-${w}.webp`)).size;
  console.log(`  ${rel}  ->  ${widths.join('w, ')}w`);
}

fs.mkdirSync(path.dirname(MANIFEST), { recursive: true });
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');

const mb = (n) => (n / 1024 / 1024).toFixed(2);
console.log(`\n${files.length} sources -> ${Object.values(manifest).flat().length} variants`);
console.log(`originals ${mb(before)} MB   all variants ${mb(after)} MB`);
console.log(`manifest: ${path.relative(ROOT, MANIFEST)}`);
