// scripts/switch-public.js
const fs = require("fs");
const path = require("path");

const flower = process.argv[2];
if (!flower) {
  console.error("Uso: node scripts/switch-public.js <flower>");
  process.exit(1);
}

const src = path.resolve(__dirname, "..", "public-flowers", flower);
const dst = path.resolve(__dirname, "..", "public");

if (!fs.existsSync(src)) {
  console.error(`❌ Pasta do flower não encontrada: ${src}`);
  process.exit(1);
}

// limpa public/
fs.rmSync(dst, { recursive: true, force: true });
// copia public do flower
fs.cpSync(src, dst, { recursive: true });

// substitui %FLOWER% no index.html
const indexPath = path.join(dst, "index.html");
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, "utf-8");
  html = html.replace(/%FLOWER%/g, flower);
  fs.writeFileSync(indexPath, html, "utf-8");
}

// substitui %FLOWER% no manifest.json
const manifestPath = path.join(dst, "manifest.json");
if (fs.existsSync(manifestPath)) {
  let manifest = fs.readFileSync(manifestPath, "utf-8");
  manifest = manifest.replace(/%FLOWER%/g, flower);
  fs.writeFileSync(manifestPath, manifest, "utf-8");
}

console.log(`✅ Copiado public de '${flower}' para /public`);
