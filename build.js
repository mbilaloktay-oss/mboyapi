// MBO Yapı Sistem — statik site üreticisi.
// Bağımlılık yok. Çalıştırma:  node build.js
// Çıktı: dist/  (doğrudan herhangi bir sunucuya veya GitHub Pages'e konabilir)

import { mkdirSync, writeFileSync, readFileSync, cpSync, rmSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { site, waLink } from "./content/site.js";
import { services, serviceClosing } from "./content/services.js";
import { projects, featuredProjects } from "./content/projects.js";
import { home, about, contact } from "./content/pages.js";
import { articles, templates, templatesIntro, templatesDisclaimer } from "./content/documents.js";
import { projectImages, imgUrl, serviceImages } from "./content/images.js";
import { forms } from "./content/forms.js";
import { page, sectionHead, specList, checklist, esc } from "./lib/layout.js";

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, "dist");

const written = [];

function emit(path, html) {
  const file = path === "/" ? "index.html" : join(path.replace(/^\/|\/$/g, ""), "index.html");
  const full = join(OUT, file);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, html, "utf8");
  written.push(path);
}

/* ------------------------------------------------------------------ ana sayfa */

function buildHome() {
  const featured = featuredProjects
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  const body = `
  <section class="hero">
    <div class="wrap">
      <span class="label">${esc(home.eyebrow)}</span>
      <h1>${esc(home.title)}</h1>
      <p class="lead hero__lead">${esc(home.lead)}</p>
      <div class="hero__actions">
        <a class="btn" href="/kesif-iste/">Keşif İste</a>
        <a class="btn btn--ghost" href="/projeler/">Referans projeler</a>
      </div>
      <div class="facts">
        ${home.facts
          .map(
            (f) => `<div class="facts__item">
          <div class="facts__value">${esc(f.value)}</div>
          <div class="facts__label">${esc(f.label)}</div>
        </div>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${sectionHead("01 — Uzmanlık", "Hizmetlerimiz", home.servicesIntro)}
      <div class="grid-services">
        ${services
          .map(
            (s) => `<a class="svc" href="/hizmetler/${s.slug}/">
          <span class="svc__num">${esc(s.index)}</span>
          <span class="svc__title">${esc(s.title)}</span>
          <span class="svc__text">${esc(s.summary)}</span>
          <span class="svc__more">Detaylı bilgi →</span>
        </a>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="wrap">
      ${sectionHead("02 — Referanslar", "İmzamızı taşıyan projeler", home.projectsIntro)}
      <div class="index">
        <div class="index__head">
          <span>No</span><span>Proje</span><span>Tür</span><span>Üstlenilen görev</span><span></span>
        </div>
        ${featured.map(projectRow).join("\n        ")}
      </div>
      <div class="plates mt-6">
        ${featured
          .map(
            (p) => `<a href="/projeler/${p.slug}/">${plate(p, { w: 640, h: 480 })}</a>`
          )
          .join("\n        ")}
      </div>
      <div class="mt-6">
        <a class="btn btn--ghost" href="/projeler/">Tüm referansları inceleyin</a>
      </div>
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      ${sectionHead("03 — Yaklaşım", "Neden MBO Yapı Sistem?")}
      ${specList(about.why.items)}
    </div>
  </section>`;

  emit(
    "/",
    page({
      title: `${site.name} | ${site.tagline}`,
      description: site.description,
      path: "/",
      body,
    })
  );
}

/** Teknik rapor şekli gibi çerçeveli fotoğraf plakası. */
function plate(p, { w = 1200, h = 675, no = null } = {}) {
  const img = projectImages[p.slug];
  if (!img) return "";
  return `<figure class="plate">
          <span class="plate__frame">
            <img src="${imgUrl(img, w, h)}" alt="${esc(img.alt)}" width="${w}" height="${h}" decoding="async">
          </span>
          <figcaption>
            ${no ? `<span class="plate__no">${esc(no)}</span>` : ""}
            <span>${esc(p.name)} — ${esc(p.subtitle)}</span>
            ${img.credit ? `<span class="plate__credit">${esc(img.credit)}</span>` : ""}
          </figcaption>
        </figure>`;
}

function projectRow(p) {
  return `<a class="index__row" href="/projeler/${p.slug}/">
          <span class="index__num">${esc(p.index)}</span>
          <span class="index__name">${esc(p.name)}<span class="index__sub">${esc(p.subtitle)}</span></span>
          <span class="index__kind">${esc(p.kind)}</span>
          <span class="index__role">${esc(p.role)}</span>
          <span class="index__arrow">→</span>
        </a>`;
}

/* ------------------------------------------------------------------ hizmetler */

function buildServices() {
  const body = `
  <section class="pagehead">
    <div class="wrap">
      <span class="label">Uzmanlık alanlarımız</span>
      <h1>Hizmetlerimiz</h1>
      <p class="lead">AVM, otel, rezidans ve endüstriyel tesisler için elektrik, mekanik, otomasyon (BMS), güneş enerjisi ve elektrikli araç şarj sistemlerinde uçtan uca mühendislik ve taahhüt hizmeti sunuyoruz.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="grid-services">
        ${services
          .map(
            (s) => `<a class="svc" href="/hizmetler/${s.slug}/">
          <span class="svc__num">${esc(s.index)}</span>
          <span class="svc__title">${esc(s.title)}</span>
          <span class="svc__text">${esc(s.summary)}</span>
          <span class="svc__more">Detaylı bilgi →</span>
        </a>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>`;

  emit(
    "/hizmetler/",
    page({
      title: `Hizmetlerimiz | Elektrik, Mekanik, BMS ve Otomasyon | ${site.name}`,
      description:
        "Elektrik taahhüt, mekanik tesisat ve HVAC, BMS ve zayıf akım, proje tasarımı, devreye alma, teknik danışmanlık, fit-out, ekipman tedariki ve periyodik bakım hizmetleri.",
      path: "/hizmetler/",
      body,
    })
  );

  for (const s of services) {
    const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);
    const sbody = `
  <section class="pagehead">
    <div class="wrap">
      <span class="label">Hizmet ${esc(s.index)} — ${esc(s.title)}</span>
      <h1>${esc(s.pageTitle)}</h1>
      ${s.subtitle ? `<p class="lead">${esc(s.subtitle)}</p>` : ""}
    </div>
  </section>

  <section class="section">
    <div class="wrap prose">
      <p class="lead">${esc(s.lead)}</p>
    </div>
  </section>

  ${
    s.points && s.points.length
      ? `<section class="section section--alt section--tight">
    <div class="wrap">
      ${sectionHead("Kapsam", "Neleri üstleniyoruz?")}
      ${specList(s.points)}
    </div>
  </section>`
      : ""
  }

  <section class="section section--tight">
    <div class="wrap prose">
      <h2>${esc(serviceClosing.title)}</h2>
      <p class="lead mt-4">${esc(serviceClosing.text)}</p>
    </div>
  </section>

  <section class="section section--alt section--tight">
    <div class="wrap">
      ${sectionHead("Diğer", "Diğer uzmanlık alanlarımız")}
      <div class="grid-services">
        ${others
          .map(
            (o) => `<a class="svc" href="/hizmetler/${o.slug}/">
          <span class="svc__num">${esc(o.index)}</span>
          <span class="svc__title">${esc(o.title)}</span>
          <span class="svc__text">${esc(o.summary)}</span>
          <span class="svc__more">Detaylı bilgi →</span>
        </a>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>`;

    emit(
      `/hizmetler/${s.slug}/`,
      page({
        title: `${s.title} | ${site.name}`,
        description: s.summary,
        path: `/hizmetler/${s.slug}/`,
        body: sbody,
      })
    );
  }
}

/* ------------------------------------------------------------------ projeler */

function buildProjects() {
  const kinds = [...new Set(projects.map((p) => p.kind))];

  const body = `
  <section class="pagehead">
    <div class="wrap">
      <span class="label">Referanslar</span>
      <h1>Projeler</h1>
      <p class="lead">AVM ve karma kullanım projelerinden finans merkezlerine, otellerden endüstriyel tesislere; şantiye şefliği, teknik ofis ve devreye alma görevleriyle içinde yer aldığımız işler.</p>
      <div class="dossier">
        <div class="dossier__cell">
          <div class="dossier__k">Referans sayısı</div>
          <div class="dossier__v"><span class="num">${projects.length}</span> proje</div>
        </div>
        <div class="dossier__cell">
          <div class="dossier__k">Proje türleri</div>
          <div class="dossier__v">${esc(kinds.join(" · "))}</div>
        </div>
        <div class="dossier__cell">
          <div class="dossier__k">Çalışılan standartlar</div>
          <div class="dossier__v">${esc(site.standards.join(" · "))}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="index">
        <div class="index__head">
          <span>No</span><span>Proje</span><span>Tür</span><span>Üstlenilen görev</span><span></span>
        </div>
        ${projects.map(projectRow).join("\n        ")}
      </div>
    </div>
  </section>`;

  emit(
    "/projeler/",
    page({
      title: `Projeler | Referans Listesi | ${site.name}`,
      description:
        "Metropol İstanbul, Zorlu Center, Emaar Square, Medine Havalimanı, İFM VakıfBank ve Ziraat Bankası, Address Hotel İstanbul ve endüstriyel tesisler dahil referans projelerimiz.",
      path: "/projeler/",
      body,
    })
  );

  for (const p of projects) {
    const idx = projects.indexOf(p);
    const next = projects[(idx + 1) % projects.length];

    const pbody = `
  <section class="pagehead">
    <div class="wrap">
      <span class="label">Referans ${esc(p.index)} — ${esc(p.kind)}</span>
      <h1>${esc(p.name)}</h1>
      <p class="lead">${esc(p.subtitle)}</p>
      <div class="dossier">
        <div class="dossier__cell">
          <div class="dossier__k">Proje türü</div>
          <div class="dossier__v">${esc(p.kind)}</div>
        </div>
        <div class="dossier__cell">
          <div class="dossier__k">Üstlenilen görev</div>
          <div class="dossier__v">${esc(p.role)}</div>
        </div>
        <div class="dossier__cell">
          <div class="dossier__k">Referans no</div>
          <div class="dossier__v"><span class="num">${esc(p.index)}</span> / ${projects.length}</div>
        </div>
      </div>
    </div>
  </section>

  ${
    projectImages[p.slug]
      ? `<section class="section section--tight">
    <div class="wrap">
      ${plate(p, { w: 1400, h: 700, no: `Şekil ${p.index}` })}
    </div>
  </section>`
      : ""
  }

  <section class="section${projectImages[p.slug] ? " section--tight" : ""}">
    <div class="wrap prose">
      ${p.body.map((t) => `<p>${esc(t)}</p>`).join("\n      ")}
    </div>
  </section>

  ${
    p.scope.length || p.systems.length
      ? `<section class="section section--alt section--tight">
    <div class="wrap">
      ${sectionHead("Kapsam", "Projede üstlendiğimiz işler")}
      <div class="cols-2">
        <div>
          <div class="colhead">Yürütülen süreçler</div>
          ${checklist(p.scope)}
        </div>
        <div>
          <div class="colhead">İlgili sistemler</div>
          ${checklist(p.systems)}
        </div>
      </div>
    </div>
  </section>`
      : ""
  }

  <section class="section section--tight">
    <div class="wrap">
      ${sectionHead("Sıradaki", "Diğer referanslar")}
      <div class="index">
        ${projectRow(next)}
      </div>
      <div class="mt-6"><a class="btn btn--ghost" href="/projeler/">Tüm referans listesi</a></div>
    </div>
  </section>`;

    emit(
      `/projeler/${p.slug}/`,
      page({
        title: `${p.name} — ${p.subtitle} | ${site.name}`,
        description: p.summary,
        path: `/projeler/${p.slug}/`,
        body: pbody,
      })
    );
  }
}

/* ------------------------------------------------------------------ hakkımızda */

function buildAbout() {
  const body = `
  <section class="pagehead">
    <div class="wrap">
      <span class="label">Kurumsal</span>
      <h1>${esc(about.title)}</h1>
      <p class="lead">${esc(about.sections[0].paragraphs[0])}</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap prose">
      ${about.sections[0].paragraphs
        .slice(1)
        .map((t) => `<p>${esc(t)}</p>`)
        .join("\n      ")}
    </div>
  </section>

  <section class="section section--alt section--tight">
    <div class="wrap">
      ${sectionHead("01", about.values.heading)}
      ${specList(about.values.items)}
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      ${sectionHead("02", about.why.heading)}
      ${specList(about.why.items)}
    </div>
  </section>

  <section class="section section--alt section--tight">
    <div class="wrap prose">
      <span class="label">03</span>
      <h2 class="mt-4">${esc(about.vision.heading)}</h2>
      <p class="lead mt-4">${esc(about.vision.text)}</p>
    </div>
  </section>`;

  emit(
    "/hakkimizda/",
    page({
      title: `Hakkımızda | ${site.name}`,
      description:
        "MBO Yapı Sistem; AVM, rezidans, otel ve endüstriyel tesisler için elektrik, mekanik ve zayıf akım sistemlerinde tasarım, uygulama ve devreye alma hizmetleri sunan mühendislik ve taahhüt firmasıdır.",
      path: "/hakkimizda/",
      body,
    })
  );
}

/* ------------------------------------------------------------------ iletişim */

/* ------------------------------------------------------------------ talep formu */

// Form iki sayfada da kullanılıyor: iletişimde ikincil, keşif sayfasında asıl iş.
function requestForm(konu) {
  return `
        <form class="form" id="kesifForm" method="POST" action="https://formspree.io/f/mkjgwblv" accept-charset="UTF-8">
          <input type="hidden" name="_subject" value="${esc(konu)}">
          <input type="hidden" name="_language" value="tr">
          <p class="hpot" aria-hidden="true"><label>Bu alanı boş bırakın<input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></p>
          <div class="form__row">
            <div class="field">
              <label for="ad">Ad</label>
              <input id="ad" name="ad" type="text" required autocomplete="given-name">
            </div>
            <div class="field">
              <label for="soyad">Soyad</label>
              <input id="soyad" name="soyad" type="text" required autocomplete="family-name">
            </div>
          </div>
          <div class="form__row">
            <div class="field">
              <label for="eposta">E-posta</label>
              <input id="eposta" name="email" type="email" required autocomplete="email">
            </div>
            <div class="field">
              <label for="telefon">Telefon</label>
              <input id="telefon" name="telefon" type="tel" autocomplete="tel">
            </div>
          </div>
          <div class="field">
            <label for="hizmet">İhtiyaç duyulan hizmet</label>
            <select id="hizmet" name="hizmet">
              <option value="">Seçiniz</option>
              ${contact.serviceOptions.map((o) => `<option>${esc(o)}</option>`).join("\n              ")}
            </select>
          </div>
          <div class="field">
            <label for="mesaj">Mesajınız / proje detayı</label>
            <textarea id="mesaj" name="mesaj" required></textarea>
          </div>
          <div class="field field--check">
            <label for="wa">
              <input id="wa" name="whatsapp_ok" type="checkbox" value="Evet, WhatsApp'tan dönülebilir">
              <span>WhatsApp'tan dönebilirsiniz — acil talepler için en hızlısı budur.</span>
            </label>
          </div>
          <div class="form__send">
            <button class="btn" type="submit" id="kesifGonder">Gönder</button>
            <p class="form__state" id="kesifDurum" role="status" aria-live="polite" hidden></p>
          </div>
        </form>
        <script>
        (function () {
          var f = document.getElementById("kesifForm");
          var d = document.getElementById("kesifDurum");
          var b = document.getElementById("kesifGonder");
          if (!f || !d || !b || !window.fetch) return;   // fetch yoksa form normal şekilde gönderilir
          f.addEventListener("submit", function (e) {
            e.preventDefault();
            b.disabled = true;
            var eski = b.textContent;
            b.textContent = "Gönderiliyor…";
            d.hidden = true;
            d.className = "form__state";
            var veri = new FormData(f);
            // Bal küpü alanı: botlar doldurur, insanlar görmez. Tarayıcı otomatik
            // doldurma bunu yanlışlıkla doldurabildiği için kontrolü burada
            // yapıyoruz ve alanı Formspree'ye hiç göndermiyoruz — böylece gerçek
            // bir talep yanlışlıkla spam sayılıp sessizce kaybolmuyor.
            var tuzak = String(veri.get("_gotcha") || "").trim();
            veri.delete("_gotcha");
            if (tuzak) {
              f.reset();
              d.innerHTML = '<strong>Talebiniz bize ulaştı. ✓</strong> En kısa sürede dönüş yapacağız.';
              d.className = "form__state form__state--ok";
              d.hidden = false;
              b.textContent = eski;
              b.disabled = false;
              return;
            }
            fetch(f.action, {
              method: "POST",
              body: veri,
              headers: { Accept: "application/json" }
            }).then(function (r) {
              if (!r.ok) throw new Error(r.status);
              f.reset();
              d.innerHTML = '<strong>Talebiniz bize ulaştı. ✓</strong> En kısa sürede dönüş yapacağız. Acil bir işse WhatsApp’tan da yazabilirsiniz.';
              d.className = "form__state form__state--ok";
              d.hidden = false;
              b.textContent = eski;
            }).catch(function () {
              d.innerHTML = 'Mesaj gönderilemedi. Lütfen tekrar deneyin ya da doğrudan ' +
                '<a href="mailto:${site.contact.email}">${site.contact.email}</a> adresine yazın.';
              d.className = "form__state form__state--err";
              d.hidden = false;
              b.textContent = eski;
            }).then(function () { b.disabled = false; });
          });
        })();
        </script>`;
}

/* ------------------------------------------------------------------ keşif iste */

function buildRequest() {
  const c = site.contact;

  const cards = services
    .map((s) => {
      const img = serviceImages[s.slug];
      const shot = img
        ? `<span class="scard__shot"><img src="${img.local}" alt="${esc(img.alt)}" width="720" height="480" decoding="async"></span>`
        : `<span class="scard__shot scard__shot--plain"><span>${esc(s.index)}</span></span>`;
      return `<a class="scard" href="/hizmetler/${s.slug}/">
            ${shot}
            <span class="scard__body">
              <span class="scard__no">${esc(s.index)}</span>
              <span class="scard__title">${esc(s.title)}</span>
              <span class="scard__text">${esc(s.summary)}</span>
            </span>
          </a>`;
    })
    .join("\n          ");

  const body = `
  <section class="pagehead">
    <div class="wrap">
      <span class="label">Keşif İste</span>
      <h1>Projenizi birlikte değerlendirelim</h1>
      <p class="lead">${esc(contact.formIntro)}</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap request-grid">
      <div>
        <div class="colhead">Keşif ve teklif talebi</div>
        ${requestForm("mboyapi.com — keşif / teklif talebi")}
      </div>

      <aside class="request-aside">
        <div class="colhead">Yazmayı tercih ederseniz</div>
        <div class="channels">
          <a class="channel channel--primary" href="${waLink('Merhaba, mboyapi.com üzerinden keşif talebi için yazıyorum.')}" rel="noopener">
            <span class="channel__tag">WhatsApp · en hızlı yanıt</span>
            <span class="channel__value">${esc(c.phone)}</span>
            <span class="channel__note">Form doldurmak istemiyorsanız doğrudan yazın; mesajınız hazır açılır.</span>
          </a>
          <a class="channel" href="mailto:${c.email}">
            <span class="channel__tag">E-posta</span>
            <span class="channel__value">${esc(c.email)}</span>
            <span class="channel__note">Proje eki, keşif notu veya çizim gönderecekseniz buradan.</span>
          </a>
        </div>
        <div class="officecard">
          <div class="officecard__name">${esc(site.legalName)}</div>
          <p class="officecard__addr">${esc(c.address)}</p>
          <div class="hours">
            ${c.hours
              .map(
                ([k, v]) =>
                  `<div class="hours__item"><span class="hours__k">${esc(k)}</span><span class="hours__v">${esc(v)}</span></div>`
              )
              .join("\n            ")}
          </div>
        </div>
      </aside>
    </div>
  </section>

  <section class="section section--alt">
    <div class="wrap">
      ${sectionHead(
        "Hizmetler",
        "Hangi başlıkta destek istediğinizden emin değilseniz",
        "Aşağıdaki başlıklara göz atın. Formda “hizmet” alanını boş bırakabilirsiniz — konuyu birlikte netleştiririz."
      )}
      <div class="scards">
          ${cards}
      </div>
    </div>
  </section>`;

  emit(
    "/kesif-iste/",
    page({
      title: `Keşif İste | ${site.name}`,
      description:
        "Projeniz için keşif ve teklif talebi gönderin. Elektrik, mekanik, otomasyon, yangın güvenliği, devreye alma ve bakım başlıklarında MBO Yapı Sistem'e ulaşın.",
      path: "/kesif-iste/",
      body,
      hideCta: true,
    })
  );
}

/* ------------------------------------------------------------------ iletişim */

function buildContact() {
  const c = site.contact;

  const body = `
  <section class="pagehead">
    <div class="wrap">
      <span class="label">İletişim</span>
      <h1>${esc(contact.title)}</h1>
      <p class="lead">${esc(contact.lead)}</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap contact-grid">
      <div>
        <div class="colhead">Doğrudan ulaşın</div>

        <div class="channels">
          <a class="channel channel--primary" href="${waLink('Merhaba, mboyapi.com üzerinden yazıyorum. Şu konuda bilgi almak istiyorum:')}" rel="noopener">
            <span class="channel__tag">WhatsApp · en hızlı yanıt</span>
            <span class="channel__value">${esc(c.phone)}</span>
            <span class="channel__note">Yazın, konuyu birlikte netleştirelim. Mesajınız hazır yazılı açılır.</span>
          </a>
          <a class="channel" href="mailto:${c.email}">
            <span class="channel__tag">E-posta</span>
            <span class="channel__value">${esc(c.email)}</span>
            <span class="channel__note">Dosya, keşif notu veya proje eki göndereceksiniz buradan.</span>
          </a>
        </div>

        <div class="officecard">
          <div class="officecard__name">${esc(site.legalName)}</div>
          <p class="officecard__addr">${esc(c.address)}</p>
          <div class="officecard__line">
            <span class="officecard__k">Telefon</span>
            <span>${esc(c.phone)}</span>
          </div>
          <div class="hours">
            ${c.hours
              .map(
                ([k, v]) =>
                  `<div class="hours__item"><span class="hours__k">${esc(k)}</span><span class="hours__v">${esc(v)}</span></div>`
              )
              .join("\n            ")}
          </div>
        </div>
      </div>

      <div>
        <div class="colhead">Keşif ve teklif talebi</div>
        <a class="askcard" href="/kesif-iste/">
          <span class="askcard__k">Keşif İste</span>
          <span class="askcard__h">Projenizi birlikte değerlendirelim</span>
          <span class="askcard__t">Keşif talebi formunu doldurun; hangi başlıkta destek istediğinizden emin değilseniz hizmetlerimize de aynı sayfadan göz atabilirsiniz.</span>
          <span class="askcard__go">Talep formuna git &rarr;</span>
        </a>
        <p class="prose" style="margin-top:22px;color:var(--ink-2);font-size:15px">
          Acil bir arıza veya duruş söz konusuysa formu beklemeden WhatsApp'tan yazın. Mesai saatleri içinde aynı gün dönüş yapıyoruz.
        </p>
      </div>
    </div>
  </section>`;

  emit(
    "/iletisim/",
    page({
      title: `İletişim | ${site.name}`,
      description:
        "MBO Yapı Sistem ile iletişime geçin — projeniz, keşif talebiniz veya teknik danışmanlık ihtiyaçlarınız için Ataşehir/İstanbul ofisimize ulaşın.",
      path: "/iletisim/",
      body,
      hideCta: true,
    })
  );
}

/* ------------------------------------------------------------------ doküman merkezi */

function buildDocuments() {
  const fmtDate = (d) =>
    new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

  const body = `
  <section class="pagehead">
    <div class="wrap">
      <span class="label">Açık kaynak</span>
      <h1>Doküman Merkezi</h1>
      <p class="lead">Mega projelerde kullandığımız sözleşme, şartname ve iş güvenliği şablonlarını ücretsiz paylaşıyoruz. Ayrıca sahadaki tecrübemizden çıkan teknik yazıları burada bulabilirsiniz.</p>
      <div class="dossier">
        <div class="dossier__cell">
          <div class="dossier__k">İndirilebilir şablon</div>
          <div class="dossier__v"><span class="num">${templates.length}</span> doküman</div>
        </div>
        <div class="dossier__cell">
          <div class="dossier__k">Saha formu</div>
          <div class="dossier__v"><span class="num">${forms.length}</span> form</div>
        </div>
        <div class="dossier__cell">
          <div class="dossier__k">Teknik yazı</div>
          <div class="dossier__v"><span class="num">${articles.length}</span> makale</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${sectionHead("01 — Şablonlar", "İndirilebilir proje dokümanları", templatesIntro)}
      <div class="docs">
        ${templates
          .map(
            (t) => `<a class="doc" href="${t.url}" target="_blank" rel="noopener">
          <span class="doc__no">${esc(t.no)}</span>
          <span class="doc__body">
            <span class="doc__title">${esc(t.title)}</span>
            <span class="doc__text">${esc(t.text)}</span>
            <span class="doc__file">PDF · ${esc(t.file)}</span>
          </span>
          <span class="doc__dl">İndir ↓</span>
        </a>`
          )
          .join("\n        ")}
      </div>
      <p class="notice mt-6">${esc(templatesDisclaimer)}</p>
    </div>
  </section>

  <section class="section section--alt">
    <div class="wrap">
      ${sectionHead("02 — Saha formları", "Doldurulabilir kontrol formları", "Devreye alma, kabul muayenesi ve periyodik bakım turlarında sahada doldurulmak üzere hazırladığımız formlar. Doğrudan tarayıcıdan yazdırılabilir veya PDF olarak kaydedilebilir.")}
      <div class="docs">
        ${forms
          .map(
            (f) => `<a class="doc" href="/dokuman-merkezi/formlar/${f.slug}/">
          <span class="doc__no">${esc(f.code.replace("MBO-F-", ""))}</span>
          <span class="doc__body">
            <span class="doc__title">${esc(f.title)}</span>
            <span class="doc__text">${esc(f.summary)}</span>
            <span class="doc__file">${esc(f.code)} · ${esc(f.rev)} · yazdırılabilir</span>
          </span>
          <span class="doc__dl">Aç →</span>
        </a>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${sectionHead("03 — Teknik yazılar", "Sahadan notlar")}
      <div class="index">
        ${articles
          .map(
            (a, i) => `<a class="index__row" href="/dokuman-merkezi/${a.slug}/">
          <span class="index__num">${String(i + 1).padStart(2, "0")}</span>
          <span class="index__name">${esc(a.title)}<span class="index__sub">${esc(a.summary)}</span></span>
          <span class="index__kind">${esc(a.topic)}</span>
          <span class="index__role">${esc(fmtDate(a.date))}</span>
          <span class="index__arrow">→</span>
        </a>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>`;

  emit(
    "/dokuman-merkezi/",
    page({
      title: `Doküman Merkezi | Ücretsiz Proje Şablonları | ${site.name}`,
      description:
        "Elektromekanik projeler için ücretsiz taşeron sözleşmesi, sorumluluk tablosu, teknik şartname ve iş güvenliği talimatnamesi şablonları ile saha tecrübemizden teknik yazılar.",
      path: "/dokuman-merkezi/",
      body,
    })
  );

  for (const a of articles) {
    const others = articles.filter((x) => x.slug !== a.slug);
    const abody = `
  <section class="pagehead">
    <div class="wrap">
      <span class="label">${esc(a.topic)} · ${esc(fmtDate(a.date))}</span>
      <h1>${esc(a.title)}</h1>
      <p class="lead">${esc(a.summary)}</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap prose article">
      ${a.blocks
        .map((b) => (b.t === "h2" ? `<h2>${esc(b.x)}</h2>` : `<p>${esc(b.x)}</p>`))
        .join("\n      ")}
      <p class="notice mt-6">Doküman Merkezi'mizde ücretsiz sözleşme, teknik şartname ve iş güvenliği şablonlarını <a href="/dokuman-merkezi/">indirebilirsiniz</a>.</p>
    </div>
  </section>

  <section class="section section--alt section--tight">
    <div class="wrap">
      ${sectionHead("Devamı", "Diğer teknik yazılar")}
      <div class="index">
        ${others
          .map(
            (o, i) => `<a class="index__row" href="/dokuman-merkezi/${o.slug}/">
          <span class="index__num">${String(i + 1).padStart(2, "0")}</span>
          <span class="index__name">${esc(o.title)}<span class="index__sub">${esc(o.summary)}</span></span>
          <span class="index__kind">${esc(o.topic)}</span>
          <span class="index__role">${esc(fmtDate(o.date))}</span>
          <span class="index__arrow">→</span>
        </a>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>`;

    emit(
      `/dokuman-merkezi/${a.slug}/`,
      page({
        title: `${a.title} | ${site.name}`,
        description: a.summary,
        path: `/dokuman-merkezi/${a.slug}/`,
        body: abody,
      })
    );
  }
}


/* ------------------------------------------------------------------ saha formları */

function formBlock(b) {
  if (b.t === "h2") return `<h2>${esc(b.x)}</h2>`;
  if (b.t === "p") return `<p>${esc(b.x)}</p>`;
  if (b.t === "note") return `<p class="notice">${esc(b.x)}</p>`;

  if (b.t === "fields") {
    return `<div class="fields">
        ${b.x
          .map(
            ([k, w]) =>
              `<div class="fld${w === "wide" ? " fld--wide" : ""}"><span class="fld__k">${esc(k)}</span><span class="fld__line"></span></div>`
          )
          .join("\n        ")}
      </div>`;
  }

  if (b.t === "check") {
    return `<ul class="checkitems">
        ${b.x.map((i) => `<li><span>${esc(i)}</span></li>`).join("\n        ")}
      </ul>`;
  }

  if (b.t === "table") {
    return `<div class="ftable-wrap"><table class="ftable">
        <thead><tr>${b.x.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>
        ${b.x.rows
          .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`)
          .join("\n        ")}
        </tbody>
      </table></div>`;
  }

  if (b.t === "sign") {
    return `<div class="signs">
        ${b.x
          .map((k) => `<div><div class="sign__line"></div><div class="sign__k">${esc(k)}</div></div>`)
          .join("\n        ")}
      </div>`;
  }
  return "";
}

function buildForms() {
  for (const f of forms) {
    const others = forms.filter((x) => x.slug !== f.slug).slice(0, 3);
    const body = `
  <section class="pagehead">
    <div class="wrap">
      <span class="label">Saha formu · ${esc(f.topic)}</span>
      <h1>${esc(f.title)}</h1>
      <p class="lead">${esc(f.summary)}</p>
    </div>
  </section>

  <section class="section section--tight">
    <div class="wrap">
      <div class="formdoc">
        <div class="formdoc__meta">
          <span>Doküman no <b>${esc(f.code)}</b></span>
          <span>${esc(f.rev)}</span>
          <span>MBO Yapı Sistem</span>
        </div>
        <p style="margin-top:28px">${esc(f.intro)}</p>
        ${f.blocks.map(formBlock).join("\n        ")}
        <div class="printbar">
          <button class="btn" type="button" onclick="window.print()">Formu yazdır</button>
          <span class="printbar__hint">Tarayıcının yazdırma penceresinden \u201cPDF olarak kaydet\u201d seçeneğiyle dosya olarak da alabilirsiniz.</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--alt section--tight">
    <div class="wrap">
      ${sectionHead("Diğer", "Diğer saha formları")}
      <div class="docs">
        ${others
          .map(
            (o) => `<a class="doc" href="/dokuman-merkezi/formlar/${o.slug}/">
          <span class="doc__no">${esc(o.code.replace("MBO-F-", ""))}</span>
          <span class="doc__body">
            <span class="doc__title">${esc(o.title)}</span>
            <span class="doc__text">${esc(o.summary)}</span>
            <span class="doc__file">${esc(o.code)} · ${esc(o.rev)}</span>
          </span>
          <span class="doc__dl">Aç →</span>
        </a>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>`;

    emit(
      `/dokuman-merkezi/formlar/${f.slug}/`,
      page({
        title: `${f.title} | ${site.name}`,
        description: f.summary,
        path: `/dokuman-merkezi/formlar/${f.slug}/`,
        body,
      })
    );
  }
}

/* ------------------------------------------------------------------ yan dosyalar */

/* ------------------------------------------------------------------ 404 */

// Olmayan bir adres istendiğinde ziyaretçiyi boş bir hata ekranında bırakmak
// yerine kendi sayfamıza alıyoruz. Arama motorları da bunu doğru okur.
function build404() {
  const body = `
    <section class="band">
      <div class="wrap">
        ${sectionHead("404", "Aradığınız sayfa bulunamadı")}
        <div class="prose">
          <p>
            Bağlantı eskimiş ya da adres yanlış yazılmış olabilir. Sitemiz
            yakın zamanda yenilendi; eski bir bağlantıyı takip ettiyseniz
            aradığınız içerik aşağıdaki başlıklardan birinin altındadır.
          </p>
        </div>
        <ul class="speclist">
          <li><a href="/">Ana sayfa</a></li>
          <li><a href="/hizmetler/">Hizmetler</a> — elektrik, mekanik, otomasyon ve yangın güvenliği başlıkları</li>
          <li><a href="/projeler/">Projeler</a> — görev aldığımız referans işler</li>
          <li><a href="/dokuman-merkezi/">Doküman Merkezi</a> — teknik yazılar, saha formları ve şablonlar</li>
          <li><a href="/kesif-iste/">Keşif İste</a> — proje ve teklif talebi formu</li>
          <li><a href="/iletisim/">İletişim</a> — doğrudan bize ulaşın</li>
        </ul>
      </div>
    </section>`;

  writeFileSync(
    join(OUT, "404.html"),
    page({
      title: "Sayfa bulunamadı — MBO Yapı Sistem",
      description: "Aradığınız sayfa bulunamadı. MBO Yapı Sistem sitesinin ana başlıklarına buradan ulaşabilirsiniz.",
      path: "/404",
      body,
    }),
    "utf8"
  );
}

function buildExtras() {
  const urls = written
    .map(
      (p) =>
        `  <url><loc>${site.domain}${p}</loc><changefreq>monthly</changefreq></url>`
    )
    .join("\n");

  writeFileSync(
    join(OUT, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    "utf8"
  );

  writeFileSync(
    join(OUT, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`,
    "utf8"
  );

  // Basit, markaya uygun favicon.
  writeFileSync(
    join(OUT, "favicon.svg"),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0C1F2B"/>
  <g fill="none" stroke="#0E9DA9" stroke-width="3.4" stroke-linecap="square">
    <path d="M14 46V20l9 13 9-13v26"/>
    <path d="M40 46V20h7a7 7 0 0 1 0 14h-7"/>
  </g>
</svg>
`,
    "utf8"
  );
}

/* ------------------------------------------------------------------ çalıştır */

function build() {
  if (existsSync(OUT)) rmSync(OUT, { recursive: true, force: true });
  mkdirSync(OUT, { recursive: true });

  buildHome();
  buildServices();
  buildProjects();
  buildAbout();
  buildDocuments();
  buildForms();
  buildContact();
  buildRequest();

  build404();

  cpSync(join(ROOT, "static"), OUT, { recursive: true });
  buildExtras();

  console.log(`✓ ${written.length} sayfa üretildi → dist/`);
  for (const p of written) console.log("  " + p);
}

build();
