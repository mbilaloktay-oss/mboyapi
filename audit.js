// Taşıma denetimi: eski Wix sitesindeki her sayfanın ve her içerik parçasının
// yeni sitede karşılığı var mı? Tahmin değil, dosyaların içine bakarak kontrol eder.
// Çalıştırma:  node build.js && node audit.js

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, "dist");

/**
 * Eski sitenin tam envanteri.
 * `probe`: o sayfanın kimliğini kanıtlayan, eski sitede geçen bir metin parçası.
 *          Yeni sitede bu metin bulunamazsa içerik kaybı var demektir.
 */
const INVENTORY = [
  // --- sabit sayfalar ---
  { old: "/", yeni: "/", ad: "Ana Sayfa",
    probe: "uluslararası standartlarda anahtar teslim elektrik, mekanik ve akıllı bina" },
  { old: "/about", yeni: "/hakkimizda/", ad: "Hakkımızda",
    probe: "şantiye şefliği, teknik ofis ve bina otomasyon (BMS) yöneticiliği tecrübeleri" },
  // Eski /contact sayfası ikiye ayrıldı: iletişim bilgileri /iletisim/ altında,
  // talep formu ise /kesif-iste/ sayfasında. İki parçayı da ayrı ayrı doğruluyoruz.
  { old: "/contact", yeni: "/iletisim/", ad: "İletişim (bilgiler)",
    probe: "Projeniz veya tesisiniz için bizimle iletişime geçin" },
  { old: "/contact", yeni: "/kesif-iste/", ad: "İletişim (talep formu)",
    probe: "keşif isteğiniz veya teknik danışmanlık talepleriniz" },
  { old: "/hizmetlerimiz", yeni: "/hizmetler/", ad: "Hizmetler listesi",
    probe: "güneş enerjisi ve elektrikli araç şarj sistemlerinde uçtan uca" },
  { old: "/projects-8", yeni: "/projeler/", ad: "Projeler listesi",
    probe: "Address Hotel" },
  { old: "/dokuman-merkezi", yeni: "/dokuman-merkezi/", ad: "Doküman Merkezi",
    probe: "19 maddelik kapsamlı sözleşme yapısı" },

  // --- hizmet detay sayfaları (eski adresleri karışıktı) ---
  { old: "/kopyası-mekanik-hvac-sistemleri", yeni: "/hizmetler/elektrik-taahhut-guc-sistemleri/",
    ad: "Elektrik Taahhüt ve Güç Sistemleri",
    probe: "senkron jeneratör senaryoları ile yedekli UPS altyapılarının entegrasyonu" },
  { old: "/kopyası-fit-out-tasarım", yeni: "/hizmetler/mekanik-hvac-sistemleri/",
    ad: "Mekanik & HVAC Sistemleri",
    probe: "Chiller soğutma grupları, VRF/VRV sistemleri ve merkezi havalandırma santrallerinin" },
  { old: "/kopyası-elektrik-taahhüt-güç-siste", yeni: "/hizmetler/bms-zayif-akim-yangin-guvenligi/",
    ad: "BMS, Zayıf Akım ve Yangın Güvenliği",
    probe: "BACnet (IP/MSTP), Modbus (RTU/TCP), Profibus, LonWorks, M-Bus, DALI, KNX ve SNMP" },
  { old: "/proje-tasarımı", yeni: "/hizmetler/proje-tasarimi-muhendislik/",
    ad: "Proje Tasarımı & Mühendislik",
    probe: "Mimari ve mekanik/elektrik disiplinler arasındaki olası çakışmaları" },
  { old: "/kopyası-bms-zayıf-akım-ve-yangın-gü", yeni: "/hizmetler/test-devreye-alma/",
    ad: "Test & Devreye Alma",
    probe: "tesis işletme ekiplerine gerekli teknik eğitimlerin verilerek el kitaplarının teslimi" },
  { old: "/kopyası-test-devreye-alma-commiss", yeni: "/hizmetler/teknik-danismanlik-denetim/",
    ad: "Teknik Danışmanlık & Denetim",
    probe: "hakediş dosyalarının incelenmesi ve yatırımcı bütçesinin şeffaflıkla korunması" },
  { old: "/fit-out-tasarım", yeni: "/hizmetler/magaza-kafe-fit-out/",
    ad: "Mağaza & Kafe Fit-Out",
    probe: "AVM yönetim onaylı olarak anahtar teslim taahhüt ediyoruz" },
  { old: "/kopyası-teknik-danışmanlık-denetim", yeni: "/hizmetler/endustriyel-ekipman-yedek-parca/",
    ad: "Endüstriyel Ekipman & Yedek Parça",
    probe: "frekans konvertörleri (sürücüler), BMS kontrolörleri ve sensör/valf gruplarında" },
  { old: "/kopyası-periyodik-bakım-tesis-i̇şle", yeni: "/hizmetler/periyodik-bakim-tesis-isletmesi/",
    ad: "Periyodik Bakım & Tesis İşletmesi",
    probe: "Chiller, AHU, UPS, Jeneratör ve pano sistemlerinin termal ölçümlerinin yapılması" },

  // --- proje detay sayfaları ---
  { old: "/projects-7", yeni: "/projeler/metropol-istanbul/", ad: "Metropol İstanbul",
    probe: "Kurucu teknik müdürlük tecrübemiz sayesinde" },
  { old: "/kopyası-metropol-i̇stanbul", yeni: "/projeler/zorlu-center/", ad: "Zorlu Center",
    probe: "kültür-sanat alanlarını bir arada barındıran" },
  { old: "/emaarsquareavm", yeni: "/projeler/emaar-square/", ad: "Emaar Square",
    probe: "Yangın algılama, acil anons, CCTV ve kartlı geçiş sistemlerinin birbiriyle entegre" },
  { old: "(kart) Medine Havalimanı", yeni: "/projeler/medine-havalimani/", ad: "Medine Havalimanı",
    probe: "şantiye şefi olarak görev aldık" },
  { old: "/ifmvakifbank", yeni: "/projeler/ifm-vakifbank/", ad: "İFM VakıfBank",
    probe: "hakedişlerin birleştirilmesi ve kesin hesap dosyalarının hazırlanması" },
  { old: "/ifmziraat", yeni: "/projeler/ifm-ziraat-bankasi/", ad: "İFM Ziraat Bankası",
    probe: "Başkanlık katlarının elektrik ve mekanik uygulama projelerinin hazırlanması" },
  { old: "/kopyası-metropol-i̇stanbul-4", yeni: "/projeler/address-hotel-istanbul/", ad: "Address Hotel İstanbul",
    probe: "23 kattan oluşan" },
  { old: "/restorancafemutfak", yeni: "/projeler/restoran-kafe-projeleri/", ad: "Restoran & Kafe Projeleri",
    probe: "Big Chef, The House" },
  { old: "(kart) Mağaza ve Perakende", yeni: "/projeler/magaza-perakende-alanlari/", ad: "Mağaza ve Perakende Alanları",
    probe: "VRV/VRF iç ünite bağlantıları" },
  { old: "(kart) Ofis & Yönetim", yeni: "/projeler/ofis-yonetim-katlari/", ad: "Ofis & Yönetim Katları",
    probe: "Açık ofis, toplantı odası, yönetim katı" },
  { old: "(kart) Catering", yeni: "/projeler/catering-tesisleri/", ad: "Catering Tesisleri",
    probe: "endüstriyel mutfak, soğuk depo, hazırlık ve pişirme alanlarının" },
  { old: "/endustriyelbiyolojikaritma", yeni: "/projeler/biyolojik-aritma-tesisleri/", ad: "Biyolojik Arıtma Tesisleri",
    probe: "MCC panolarından saha kablolamalarına" },

  // --- blog / doküman yazıları ---
  { old: "/post/konutlarda-elektrikli-araç-şarj...", yeni: "/dokuman-merkezi/ev-sarj-unitesi-kurulumu/",
    ad: "Yazı: EV şarj ünitesi kurulumu",
    probe: "kaçak akım koruma (RCD Tip B), doğru kablo kesiti ve topraklama" },
  { old: "/post/güneş-enerjisi-akü-jeneratör...", yeni: "/dokuman-merkezi/gunes-enerjisi-aku-jenerator/",
    ad: "Yazı: Güneş enerjisi + akü + jeneratör",
    probe: "jeneratör yanlış boyutlandırılırsa ya gereksiz yakıt tüketimi" },
  { old: "/post/elektrik-panoları-yangın-algılama...", yeni: "/dokuman-merkezi/panolar-yangin-algilama-gazli-sondurme/",
    ad: "Yazı: Panolar, yangın algılama, gazlı söndürme",
    probe: "aspirasyonlu (havadan numune alan) algılama sistemleri" },
];

/** Eski sitede olup yeni sitede bilinçli olarak taşınmayanlar. */
const KASITLI = [
  { ne: "/search — Wix site içi arama sayfası",
    neden: "Wix uygulamasına ait teknik sayfaydı; kendi sitemizde karşılığı yok. İstenirse arama sonradan eklenebilir." },
  { ne: "“Akıllı Ev & Villa Çözümleri” hizmet kartı",
    neden: "Eski sitede kartı vardı ama kendi sayfası hiç yazılmamıştı (o adresteki sayfa Periyodik Bakım metnini gösteriyordu). Kart metni duruyor, sayfası yazılmayı bekliyor." },
  { ne: "Projects / Portfolio CMS koleksiyonları",
    neden: "Şablondan kalma İngilizce sahte kayıtlardı (Zero Carbon World vb.), sitede hiçbir yerde görünmüyordu." },
];

/** Henüz taşınmamış, iş listesinde duranlar. */
const EKSIK = [
  { ne: "Proje fotoğrafları — Wix sunucusunda",
    durum: "12 fotoğraf sitede görünüyor ancak hâlâ Wix'in sunucusundan çekiliyor. Wix aboneliği kapanmadan önce dosyalar indirilip kendi sitemize gömülmeli." },
  { ne: "MBO logosu (görsel)",
    durum: "Şu an yazı olarak (MBO / YAPI SİSTEM) kullanılıyor. Logo dosyası gelince yerleştirilecek." },
  { ne: "Doküman Merkezi PDF'leri — Wix sunucusunda",
    durum: "Dört şablon PDF'inin bağlantısı çalışıyor ama dosyalar Wix deposunda. Wix kapatılırsa indirmeler kırılır." },
  { ne: "İletişim formu adresi",
    durum: "Form tasarımı ve alanları hazır, gönderim adresi yer tutucu. Gerçek bir form servisine bağlanacak." },
  { ne: "Kaynak kodun GitHub'a taşınması",
    durum: "Depo yerel olarak hazır (3 sürüm işlenmiş), henüz uzak bir depoya gönderilmedi. Yedek ve otomatik yayın bunun ardından gelir." },
];

// ---------------------------------------------------------------- kontrol

function read(routePath) {
  const file = routePath === "/" ? "index.html" : join(routePath.replace(/^\/|\/$/g, ""), "index.html");
  const full = join(DIST, file);
  return existsSync(full) ? readFileSync(full, "utf8") : null;
}

// HTML kaçışlarını geri çevir ki metin karşılaştırması doğru olsun.
const unesc = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"');

let ok = 0;
const sorunlu = [];

console.log("TAŞIMA DENETİMİ");
console.log("=".repeat(72));

for (const row of INVENTORY) {
  const html = read(row.yeni);
  if (!html) {
    sorunlu.push({ ...row, hata: "sayfa üretilmemiş" });
    console.log(`  ✗  ${row.ad}  —  SAYFA YOK (${row.yeni})`);
    continue;
  }
  if (!unesc(html).includes(row.probe)) {
    sorunlu.push({ ...row, hata: "metin bulunamadı" });
    console.log(`  ✗  ${row.ad}  —  METİN EKSİK: “${row.probe.slice(0, 45)}…”`);
    continue;
  }
  ok++;
  console.log(`  ✓  ${row.ad.padEnd(38)} ${row.old}  →  ${row.yeni}`);
}

console.log("=".repeat(72));
console.log(`Taşınan sayfa: ${ok} / ${INVENTORY.length}`);

// Yeni sitede üretilmiş ama envanterde geçmeyen sayfa var mı? (fazlalık kontrolü)
function allRoutes(dir = DIST, base = "") {
  const out = [];
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) out.push(...allRoutes(full, base + "/" + e));
    else if (e === "index.html") out.push((base || "") + "/");
  }
  return out;
}
const uretilen = allRoutes();
const envanterde = new Set(INVENTORY.map((r) => r.yeni));
const fazladan = uretilen.filter((r) => !envanterde.has(r));

if (fazladan.length) {
  console.log("\nEnvanterde olmayan, yeni eklenen sayfalar:");
  for (const r of fazladan) console.log("  +  " + r);
}

console.log("\nBİLİNÇLİ OLARAK TAŞINMAYANLAR");
console.log("-".repeat(72));
for (const k of KASITLI) console.log(`  •  ${k.ne}\n     ${k.neden}`);

console.log("\nHENÜZ TAMAMLANMAYANLAR");
console.log("-".repeat(72));
for (const e of EKSIK) console.log(`  •  ${e.ne}\n     ${e.durum}`);

console.log("");
if (sorunlu.length) {
  console.log(`SONUÇ: ${sorunlu.length} sayfada sorun var — yukarıya bakın.`);
  process.exitCode = 1;
} else {
  console.log("SONUÇ: Eski sitedeki her sayfa ve her metin yeni sitede doğrulandı.");
}
