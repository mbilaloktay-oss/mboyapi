// Görseller.
//
// Fotoğraflar artık kendi sitemizde: static/gorseller/ içinde duruyorlar ve
// her kaydın `local` alanı dolu. `imgUrl()` yerel dosyayı tercih ettiği için
// Wix adresleri yalnızca yedek olarak kayıtta kalıyor — Wix kapansa bile
// site etkilenmez.

const WIX_BASE = "https://static.wixstatic.com/media/";

/**
 * Görsel adresi üretir.
 * @param {object} img  images kaydı
 * @param {number} w    istenen genişlik (px)
 * @param {number} h    istenen yükseklik (px)
 */
export function imgUrl(img, w, h) {
  if (!img) return "";
  if (img.local) return img.local;
  const name = encodeURIComponent(img.file || "gorsel.jpg");
  return `${WIX_BASE}${img.id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_auto/${name}`;
}

/** Proje slug → fotoğraf */
export const projectImages = {
  "metropol-istanbul": {
    id: "edaea9_6e3078c5df2240b688480c967732c0dd~mv2.jpg",
    file: "Metropol-2.jpg",
    local: "/gorseller/metropol-istanbul.jpg",
    alt: "Metropol İstanbul AVM ve rezidans kompleksi",
  },
  "zorlu-center": {
    id: "edaea9_46bd90f5aec548f18a81aef0a3bf45ae~mv2.jpg",
    file: "zorlu-center.jpg",
    local: "/gorseller/zorlu-center.jpg",
    alt: "Zorlu Center karma kullanım projesi",
    // DİKKAT: Dosya adında “photo-credit_murat-germen_2013” geçiyor.
    // Bu, üçüncü bir fotoğrafçıya ait telifli bir kare olabilir.
    // Lisans netleşene kadar kendi fotoğrafımızla değiştirilmesi önerilir.
    credit: "Fotoğraf: Murat Germen (telif durumu teyit edilmeli)",
  },
  "emaar-square": {
    id: "edaea9_0e41530819d7457b94a6482204754d56~mv2.jpg",
    file: "emaar-square.jpg",
    local: "/gorseller/emaar-square.jpg",
    alt: "Emaar Square alışveriş merkezi ve otel blokları",
  },
  "medine-havalimani": {
    id: "edaea9_1688d5e068a14407ac953f37e55bacf9~mv2.jpg",
    file: "medine-havalimani.jpg",
    local: "/gorseller/medine-havalimani.jpg",
    alt: "Medine Havalimanı terminal binası",
  },
  "ifm-vakifbank": {
    id: "edaea9_a437939883aa473aabc57da3a5f2f03d~mv2.png",
    file: "ifm-vakifbank.png",
    local: "/gorseller/ifm-vakifbank.jpg",
    alt: "İstanbul Finans Merkezi VakıfBank Genel Müdürlük binası",
  },
  "ifm-ziraat-bankasi": {
    id: "edaea9_fb076298f2b94254ae260af024b32a2e~mv2.jpg",
    file: "ifm-ziraat-bankasi.jpg",
    local: "/gorseller/ifm-ziraat-bankasi.jpg",
    alt: "İFM Ziraat Bankası Başkanlık katları",
  },
  "address-hotel-istanbul": {
    id: "edaea9_a57d9709ee34417baef5c8e3d5c94343~mv2.jpg",
    file: "address-hotel-istanbul.jpg",
    local: "/gorseller/address-hotel-istanbul.jpg",
    alt: "Address Hotel İstanbul",
  },
  "restoran-kafe-projeleri": {
    id: "edaea9_8bf2bba05689438fb0ba4f0357d3237b~mv2.jpg",
    file: "restoran-kafe.jpg",
    local: "/gorseller/restoran-kafe-projeleri.jpg",
    alt: "Restoran ve kafe fit-out projesi",
  },
  "magaza-perakende-alanlari": {
    id: "edaea9_4041a61e1167463bb61290e438ecb02e~mv2.jpg",
    file: "magaza-perakende.jpg",
    local: "/gorseller/magaza-perakende-alanlari.jpg",
    alt: "Mağaza ve perakende alanı fit-out uygulaması",
  },
  "ofis-yonetim-katlari": {
    id: "edaea9_173d76d8f1214c00bac3c798a7d4514e~mv2.jpg",
    file: "ofis-yonetim-katlari.jpg",
    local: "/gorseller/ofis-yonetim-katlari.jpg",
    alt: "Kurumsal ofis ve yönetim katı uygulaması",
  },
  "catering-tesisleri": {
    id: "edaea9_33fac37ce18a488d9de1b2cbf7cdcb81~mv2.jpg",
    file: "catering-tesisleri.jpg",
    local: "/gorseller/catering-tesisleri.jpg",
    alt: "Endüstriyel catering tesisi",
  },
  "biyolojik-aritma-tesisleri": {
    id: "edaea9_47db60e0ece14f6498505633e3b6e616~mv2.jpg",
    file: "mugla-atiksu-aritma-tesisi.jpg",
    local: "/gorseller/biyolojik-aritma-tesisleri.jpg",
    alt: "Muğla atıksu arıtma tesisi",
  },
};

/** Kurumsal logo */
export const logo = {
  id: "edaea9_3accdaa1ac4544e9911bbe430dde19bf~mv2.png",
  file: "mbo-logo.png",
  local: "/mbo-logo.png",
  alt: "MBO Yapı Sistem logosu",
};
