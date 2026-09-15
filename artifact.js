// preview/ klasörünü, Claude Artifact olarak yayınlanabilir hale getirir.
// Ana sayfa "sarmalanmış" biçimde (doctype/html/head/body olmadan), diğer
// sayfalar olduğu gibi yardımcı dosya olarak yayınlanır.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, "preview");
const OUT = join(ROOT, "artifact");

if (existsSync(OUT)) rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

// Artifact önizlemesinin güvenlik politikası dış sunuculardaki görselleri
// engelliyor. Yayındaki gerçek sitede böyle bir kısıt yok; burada, yerleşimin
// doğru görünmesi için fotoğrafların yerine etiketli bir yer tutucu koyuyoruz.
function placeholder(alt) {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">` +
    `<rect width="800" height="400" fill="#E8EFF1"/>` +
    `<g fill="#7C96A3" font-family="monospace" text-anchor="middle">` +
    `<text x="400" y="190" font-size="19" letter-spacing="3">FOTOĞRAF</text>` +
    `<text x="400" y="222" font-size="14">${alt.replace(/[<>&"]/g, "").slice(0, 52)}</text>` +
    `<text x="400" y="252" font-size="11.5">yayındaki sitede görünür</text>` +
    `</g></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function swapImages(html) {
  return html.replace(/<img src="https:\/\/static\.wixstatic\.com[^"]*" alt="([^"]*)"/g, (m, alt) =>
    `<img src="${placeholder(alt)}" alt="${alt}"`
  );
}

for (const f of readdirSync(SRC)) {
  const src = join(SRC, f);
  if (f.endsWith(".html") && f !== "index.html") {
    writeFileSync(join(OUT, f), swapImages(readFileSync(src, "utf8")), "utf8");
    continue;
  }
  if (f === "index.html") {
    const html = readFileSync(src, "utf8");
    const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [, "MBO Yapı Sistem"])[1];
    const body = (html.match(/<body>([\s\S]*?)<\/body>/) || [, ""])[1];
    const head =
      `<title>${title}</title>\n` +
      `<link rel="preconnect" href="https://fonts.googleapis.com">\n` +
      `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n` +
      `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap">\n` +
      `<link rel="stylesheet" href="styles.css">\n`;
    writeFileSync(join(OUT, "index.html"), swapImages(head + body), "utf8");
  } else {
    copyFileSync(src, join(OUT, f));
  }
}
console.log("✓ artifact/ hazır — " + readdirSync(OUT).length + " dosya");
