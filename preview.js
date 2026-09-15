// dist/ içindeki siteyi, tek klasörde gezilebilen düz bir önizlemeye çevirir.
// Amaç: yayına almadan önce sitenin tamamını gerçek gibi gezebilmek.
// Çalıştırma:  node build.js && node preview.js   →  preview/

import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, copyFileSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, "dist");
const OUT = join(ROOT, "preview");

/** "/hizmetler/test-devreye-alma/" → "hizmetler-test-devreye-alma.html" */
function flat(path) {
  const clean = path.replace(/^\/|\/$/g, "");
  if (!clean) return "index.html";
  return clean.replace(/\//g, "-") + ".html";
}

function walk(dir, found = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, found);
    else found.push(full);
  }
  return found;
}

if (existsSync(OUT)) rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

let pages = 0;

for (const file of walk(DIST)) {
  const rel = relative(DIST, file).split("\\").join("/");

  if (!rel.endsWith("index.html")) {
    // styles.css, favicon.svg, sitemap.xml, robots.txt — kök klasöre kopyala
    copyFileSync(file, join(OUT, rel.split("/").pop()));
    continue;
  }

  const routePath = "/" + rel.replace(/index\.html$/, "");
  let html = readFileSync(file, "utf8");

  // Kök göreli bağlantıları düz dosya adlarına çevir.
  html = html.replace(/(href|src)="\/([^"#?]*)"/g, (m, attr, target) => {
    if (/\.(css|svg|png|jpg|jpeg|webp|ico|xml|txt|js)$/i.test(target)) {
      return `${attr}="${target.split("/").pop()}"`;
    }
    return `${attr}="${flat("/" + target)}"`;
  });
  // href="/" (ana sayfa)
  html = html.replace(/(href|src)="\/"/g, '$1="index.html"');

  writeFileSync(join(OUT, flat(routePath)), html, "utf8");
  pages++;
}

console.log(`✓ ${pages} sayfalık gezilebilir önizleme → preview/`);
