// Yasaklı ve kontrol ifadesi taraması (EK 8 A5). Her push öncesi çalıştırılır.
// Çalıştırma:  node ifade-tara.js            (özet; yasaklı varsa hata koduyla durur)
//              node ifade-tara.js --ayrinti  (kontrol ifadelerinin dosya:satır listesi de yazılır)
//
// İfade listesi ifade-listesi.txt dosyasındadır; bu betik ve liste yayınlanan çıktıya
// (dist/) kopyalanmaz. Tarama yalnız kaynak metin dosyalarına bakar; liste dosyası hariçtir.
// Büyük/küçük harf ve Türkçe İ/ı farkı gözetilmez.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const AYRINTI = process.argv.includes("--ayrinti");

const sadelestir = (s) =>
  s.toLocaleLowerCase("tr").replace(/̇/g, "").replace(/ı/g, "i");

/** Liste dosyası: "[YASAK]" ve "[KONTROL]" başlıkları altında satır başına bir ifade; "#" yorum. */
function listeOku() {
  const liste = { YASAK: [], KONTROL: [] };
  let bolum = null;
  for (const ham of readFileSync(join(ROOT, "ifade-listesi.txt"), "utf8").split(/\r?\n/)) {
    const satir = ham.trim();
    if (!satir || satir.startsWith("#")) continue;
    const baslik = satir.match(/^\[(YASAK|KONTROL)\]$/);
    if (baslik) bolum = baslik[1];
    else if (bolum) liste[bolum].push(satir);
  }
  return liste;
}

const dosyalar = [
  ...readdirSync(join(ROOT, "content")).filter((f) => f.endsWith(".js")).map((f) => `content/${f}`),
  ...readdirSync(join(ROOT, "lib")).filter((f) => f.endsWith(".js")).map((f) => `lib/${f}`),
  "build.js",
];

const liste = listeOku();
const sonuc = { YASAK: [], KONTROL: [] };

for (const dosya of dosyalar) {
  readFileSync(join(ROOT, dosya), "utf8")
    .split(/\r?\n/)
    .forEach((satir, i) => {
      const x = sadelestir(satir);
      for (const tur of ["YASAK", "KONTROL"]) {
        for (const ifade of liste[tur]) {
          const f = sadelestir(ifade);
          for (let p = x.indexOf(f); p !== -1; p = x.indexOf(f, p + f.length)) {
            sonuc[tur].push({ dosya, satir: i + 1, ifade, baglam: satir.trim().slice(0, 110) });
          }
        }
      }
    });
}

for (const m of sonuc.YASAK) console.log(`  YASAK    ${m.dosya}:${m.satir} [${m.ifade}] ${m.baglam}`);

// Kontrol ifadeleri: özet (ifade başına adet); --ayrinti ile tek tek
const adet = {};
for (const m of sonuc.KONTROL) adet[m.ifade] = (adet[m.ifade] || 0) + 1;
console.log("  Kontrol ifadeleri: " + liste.KONTROL.map((k) => `${k}=${adet[k] || 0}`).join(", "));
if (AYRINTI) for (const m of sonuc.KONTROL) console.log(`  KONTROL  ${m.dosya}:${m.satir} [${m.ifade}] ${m.baglam}`);

// Betik ve liste yayın çıktısına sızmamalı
const sizan = existsSync(join(ROOT, "dist"))
  ? ["ifade-listesi.txt", "ifade-tara.js"].filter((f) => existsSync(join(ROOT, "dist", f)))
  : [];
for (const f of sizan) console.log(`  HATA     dist/${f} yayın çıktısında olmamalı`);

console.log(`Yasaklı: ${sonuc.YASAK.length} | Kontrol: ${sonuc.KONTROL.length}` + (AYRINTI ? " (dosya:satır listesi yukarıda)" : " (dosya:satır listesi için --ayrinti)"));
if (sonuc.YASAK.length || sizan.length) process.exit(1);
