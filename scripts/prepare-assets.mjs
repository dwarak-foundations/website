import { access, cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const sourceRoot = new URL("assets/", root);
const outputRoot = new URL("public/", root);
const imageSource = new URL("img/", sourceRoot);
const imageOutput = new URL("img/", outputRoot);
const imageSourcePath = fileURLToPath(imageSource);
const imageOutputPath = fileURLToPath(imageOutput);
const excludedDirectories = new Set(["harmony"]);

await rm(outputRoot, { recursive: true, force: true });
await mkdir(imageOutput, { recursive: true });

for (const filename of ["_headers", "_redirects", "atlantis.pdf", "chakravarthy-nagar.pdf"]) {
  const source = new URL(filename, sourceRoot);
  try {
    await access(source);
  } catch {
    if (filename.endsWith(".pdf")) {
      console.warn(`Skipping missing ${filename}`);
      continue;
    }
    throw new Error(`Missing required asset ${filename}`);
  }
  await cp(source, new URL(filename, outputRoot));
}

async function prepareDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const source = join(directory, entry.name);
    const relativePath = relative(imageSourcePath, source);
    const topLevelDirectory = relativePath.split(sep)[0];
    if (excludedDirectories.has(topLevelDirectory)) continue;

    const destination = join(imageOutputPath, relativePath);
    if (entry.isDirectory()) {
      await mkdir(destination, { recursive: true });
      await prepareDirectory(source);
      continue;
    }

    await mkdir(dirname(destination), { recursive: true });
    const extension = extname(entry.name).toLowerCase();
    if (extension === ".jpg" || extension === ".jpeg") {
      await sharp(source)
        .rotate()
        .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(destination);
    } else {
      await cp(source, destination);
    }
  }
}

await prepareDirectory(imageSourcePath);

const faviconSource = join(imageSourcePath, "favicon", "favicon.svg");
const faviconSizes = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["favicon-48x48.png", 48],
  ["apple-touch-icon.png", 180],
  ["android-chrome-192x192.png", 192],
  ["mstile-150x150.png", 150],
  ["android-chrome-512x512.png", 512],
  ["favicon.png", 512],
];
const faviconPngs = new Map();

for (const [filename, size] of faviconSizes) {
  const png = await sharp(faviconSource).resize(size, size).png().toBuffer();
  faviconPngs.set(size, png);
  await writeFile(join(imageOutputPath, "favicon", filename), png);
}

const icoImages = [16, 32, 48].map((size) => ({ size, png: faviconPngs.get(size) }));
await writeFile(fileURLToPath(new URL("favicon.ico", outputRoot)), pngIco(icoImages));

function pngIco(images) {
  const headerSize = 6 + images.length * 16;
  let offset = headerSize;
  const directory = Buffer.alloc(headerSize);
  directory.writeUInt16LE(0, 0);
  directory.writeUInt16LE(1, 2);
  directory.writeUInt16LE(images.length, 4);

  images.forEach((image, index) => {
    const entry = 6 + index * 16;
    directory.writeUInt8(image.size, entry);
    directory.writeUInt8(image.size, entry + 1);
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(image.png.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += image.png.length;
  });

  return Buffer.concat([directory, ...images.map((image) => image.png)]);
}
