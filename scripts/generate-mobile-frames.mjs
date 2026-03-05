import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join } from "path";

const INPUT_DIR = "public/images/macbook-frames";
const OUTPUT_DIR = "public/images/macbook-frames-mobile";
const TARGET_WIDTH = 375;
const STEP = 2; // take every 2nd frame

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = (await readdir(INPUT_DIR))
    .filter((f) => f.endsWith(".webp"))
    .sort();

  console.log(`Found ${files.length} frames, taking every ${STEP}th → ${Math.ceil(files.length / STEP)} mobile frames`);

  let outIndex = 1;
  for (let i = 0; i < files.length; i += STEP) {
    const inPath = join(INPUT_DIR, files[i]);
    const outName = String(outIndex).padStart(4, "0") + ".webp";
    const outPath = join(OUTPUT_DIR, outName);

    await sharp(inPath)
      .resize({ width: TARGET_WIDTH })
      .webp({ quality: 80, alphaQuality: 90 })
      .toFile(outPath);

    process.stdout.write(`\r  ${outIndex}/${Math.ceil(files.length / STEP)}`);
    outIndex++;
  }

  console.log("\nDone!");
}

main().catch(console.error);
