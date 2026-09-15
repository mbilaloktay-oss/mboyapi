// Site geneli sabitler. Burada değiştirdiğiniz her şey tüm sayfalara yansır.

export const site = {
  name: "MBO Yapı Sistem",
  legalName: "MBO Yapı Sistem ve Ticaret Ltd. Şti.",
  domain: "https://www.mboyapi.com",
  tagline: "Elektromekanik Taahhüt ve Mühendislik",
  description:
    "MBO Yapı Sistem; AVM, otel, rezidans ve endüstriyel tesisler için elektrik, mekanik, otomasyon (BMS), güneş enerjisi ve elektrikli araç şarj sistemlerinde uluslararası standartlarda mühendislik ve taahhüt hizmeti sunar.",
  founder: {
    name: "Mehmet Bilal Oktay",
    title: "Elektrik ve Elektronik Mühendisi",
  },
  contact: {
    phone: "+90 542 474 74 79",
    phoneHref: "tel:+905424747479",
    whatsapp: "https://wa.me/905424747479",
    email: "info@mboyapi.com",
    city: "Ataşehir / İstanbul",
    address: "Atatürk Mahallesi 7C/22, Ataşehir, İstanbul",
    hours: [
      ["Hafta içi", "09:00 – 18:00"],
      ["Cumartesi", "10:00 – 16:00"],
      ["Pazar", "Kapalı"],
    ],
  },
  // Sahada ve masada uyulan normlar — teknik alıcının aradığı ilk sinyal.
  standards: ["IEC", "EN", "NFPA", "ASHRAE", "FIDIC"],
  protocols: ["BACnet", "Modbus", "KNX", "DALI", "M-Bus", "Profibus", "LonWorks", "SNMP"],
};

export const nav = [
  { label: "Hizmetler", href: "/hizmetler/" },
  { label: "Projeler", href: "/projeler/" },
  { label: "Doküman Merkezi", href: "/dokuman-merkezi/" },
  { label: "Hakkımızda", href: "/hakkimizda/" },
  { label: "İletişim", href: "/iletisim/" },
];
