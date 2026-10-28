// Sayfa iskeleti ve tekrar eden parçalar.
// Hiçbir dış bağımlılık yok; saf string birleştirme.

import { site, nav, waLink } from "../content/site.js";
import { cta } from "../content/pages.js";
import { logo, imgUrl } from "../content/images.js";

export const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Rehber metinlerindeki satır içi işaretler: **kalın**, _{alt}, ^{üst}, [[/adres/|bağlantı metni]]. */
export const rich = (s = "") =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/_\{(.+?)\}/g, "<sub>$1</sub>")
    .replace(/\^\{(.+?)\}/g, "<sup>$1</sup>")
    .replace(/\[\[(\/[^|\]]+)\|(.+?)\]\]/g, '<a href="$1">$2</a>');

/** JSON-LD'yi <script> içine güvenle gömer ("<" kaçırılır). */
const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

/** Ana sayfa için Organization şeması. sameAs yalnız site.social doluysa eklenir. */
export function organizationSchema() {
  const c = site.contact;
  return {
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: `${site.domain}/`,
    logo: `${site.domain}/mbo-logo.png`,
    email: c.email,
    telephone: c.phone,
    address: { "@type": "PostalAddress", streetAddress: c.address, addressCountry: "TR" },
    ...(site.social.length ? { sameAs: site.social } : {}),
  };
}

/** Bölüm başlığı — çizim paftası motifi: numara + kural çizgisi + başlık */
export function sectionHead(num, title, text = "", level = "h2") {
  return `
      <div class="sechead">
        <div class="sechead__num">${esc(num)}</div>
        <div class="sechead__text">
          <${level}>${esc(title)}</${level}>
          ${text ? `<p>${esc(text)}</p>` : ""}
        </div>
      </div>`;
}

/** Terim + açıklama listesi (şartname motifi) */
export function specList(points) {
  if (!points || !points.length) return "";
  return `
      <div class="specs">
        ${points
          .map(
            (p) => `<div class="spec">
          <div class="spec__term">${esc(p.term)}</div>
          <div class="spec__text">${esc(p.text)}</div>
        </div>`
          )
          .join("\n        ")}
      </div>`;
}

export function checklist(items) {
  if (!items || !items.length) return "";
  return `<ul class="checklist">
          ${items.map((i) => `<li>${esc(i)}</li>`).join("\n          ")}
        </ul>`;
}

function header(current) {
  const links = nav
    .map((n) => {
      const active = current && current.startsWith(n.href) ? ' aria-current="page"' : "";
      return `<a href="${n.href}"${active}>${esc(n.label)}</a>`;
    })
    .join("\n            ");

  return `
  <header class="masthead">
    <div class="wrap masthead__in">
      <a class="brand" href="/" aria-label="MBO Yapı Sistem — ana sayfa">
        <img class="brand__logo" src="${imgUrl(logo)}" alt="${esc(logo.alt)}" width="300" height="164">
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="sitenav">Menü</button>
      <nav class="nav" id="sitenav" aria-label="Ana menü">
            ${links}
        <a class="btn" href="/kesif-iste/">Keşif İste</a>
      </nav>
    </div>
  </header>`;
}

function ctaBand() {
  return `
  <section class="cta">
    <div class="wrap">
      <h2>${esc(cta.title)}</h2>
      <p>${esc(cta.text)}</p>
      <div class="cta__actions">
        <a class="btn btn--light" href="${cta.primary.href}">${esc(cta.primary.label)}</a>
        <a class="btn btn--outline-light" href="${cta.secondary.href}">${esc(cta.secondary.label)}</a>
      </div>
    </div>
  </section>`;
}

function footer() {
  const links = nav
    .map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`)
    .join("\n            ");

  return `
  <footer class="foot">
    <div class="wrap">
      <div class="foot__grid">
        <div>
          <div class="foot__brand">MBO Yapı Sistem</div>
          <p class="foot__desc">${esc(site.legalName)} — AVM, plaza, rezidans ve endüstriyel tesislerde elektrik, mekanik ve otomasyon alanlarında uçtan uca mühendislik, taahhüt ve danışmanlık hizmetleri sunar.</p>
        </div>
        <div>
          <div class="foot__h">Hızlı erişim</div>
          <ul class="foot__list">
            <li><a href="/">Ana Sayfa</a></li>
            ${links}
          </ul>
        </div>
        <div>
          <div class="foot__h">İletişim</div>
          <ul class="foot__list">
            <li><a href="${waLink('Merhaba, mboyapi.com üzerinden yazıyorum.')}" rel="noopener">WhatsApp — ${esc(site.contact.phone)}</a></li>
            <li><a href="mailto:${site.contact.email}">${esc(site.contact.email)}</a></li>
            <li>${esc(site.contact.address)}</li>
          </ul>
        </div>
      </div>
      <div class="foot__bottom">
        <span>© ${new Date().getFullYear()} ${esc(site.legalName)} — Tüm hakları saklıdır.</span>
        <span><a href="/kvkk/">KVKK Aydınlatma Metni</a> · Ataşehir / İstanbul</span>
      </div>
    </div>
  </footer>`;
}

/**
 * Tam sayfa iskeleti.
 * @param {object} o
 * @param {string} o.title   <title> ve og:title
 * @param {string} o.description  meta description
 * @param {string} o.path    "/projeler/" gibi — canonical ve menü işaretlemesi için
 * @param {string} o.body    sayfa gövdesi
 * @param {boolean} [o.hideCta]  kapanış çağrı şeridini gizle
 * @param {Array<[string, string?]>} [o.crumbs]  konum yolu, [ad, adres?]; sonuncu bu sayfadır (adres verilmez)
 * @param {object[]} [o.schema]  ek JSON-LD nesneleri (Organization, Service, Article)
 */
export function page({ title, description, path, body, hideCta = false, crumbs = [], schema = [] }) {
  const canonical = site.domain + path;
  const image = `${site.domain}/mbo-logo.png`;
  const graph = [...schema];
  if (crumbs.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [["Ana Sayfa", "/"], ...crumbs].map(([name, href], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        item: site.domain + (href || path),
      })),
    });
  }
  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="tr_TR">
<meta property="og:image" content="${image}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${image}">
<meta name="theme-color" content="#0C1F2B">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/styles.css">${graph.length ? `
<script type="application/ld+json">${jsonLd({ "@context": "https://schema.org", "@graph": graph })}</script>` : ""}
</head>
<body>
<a class="skip" href="#main">Ana içeriğe atla</a>
${header(path)}
<main id="main">
${body}
</main>
${hideCta ? "" : ctaBand()}
${footer()}
<script>
(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("sitenav");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("nav--open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
</script>
</body>
</html>
`;
}
