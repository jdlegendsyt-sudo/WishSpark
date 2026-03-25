import { writeFile } from "node:fs/promises";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const sourceSvg = "public/favicon.svg";
const targetIco = "public/favicon.ico";

async function generateIco() {
  const pngBuffer = await sharp(sourceSvg)
    .resize(256, 256, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const icoBuffer = await pngToIco(pngBuffer);
  await writeFile(targetIco, icoBuffer);
  console.log(`Generated ${targetIco} from ${sourceSvg}`);
}

generateIco().catch((error) => {
  console.error("Failed to generate favicon.ico", error);
  process.exit(1);
});
