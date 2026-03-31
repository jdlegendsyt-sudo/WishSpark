import sharp from "sharp";

const sourceSvg = "public/favicon.svg";
const background = { r: 16, g: 11, b: 26, alpha: 1 };
const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

async function renderIcon(targetPath, size, options = {}) {
  const {
    canvasBackground = transparent,
    innerScale = 1,
  } = options;

  const innerSize = Math.round(size * innerScale);
  const iconBuffer = await sharp(sourceSvg)
    .resize(innerSize, innerSize, {
      fit: "contain",
      background: transparent,
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: canvasBackground,
    },
  })
    .composite([{ input: iconBuffer, gravity: "center" }])
    .png()
    .toFile(targetPath);

  console.log(`Generated ${targetPath}`);
}

async function main() {
  await renderIcon("public/icon-192.png", 192);
  await renderIcon("public/icon-512.png", 512);
  await renderIcon("public/apple-touch-icon.png", 180, {
    canvasBackground: background,
    innerScale: 0.72,
  });
  await renderIcon("public/maskable-icon-512.png", 512, {
    canvasBackground: background,
    innerScale: 0.78,
  });
}

main().catch((error) => {
  console.error("Failed to generate PWA assets", error);
  process.exit(1);
});