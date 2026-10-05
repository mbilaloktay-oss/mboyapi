// Sistem Çözümleri: hızlı satılabilir çözüm paketleri.
// Her paket tek bir nesnedir; şablon ortaktır (build.js → buildSystems).
// Başka bir siteye taşımak için bu dosya ve buildSystems() kopyalanır.
//
// İçerik kuralları: fiyat yok; teknik değer / sertifika / uygunluk iddiası yok
// (üretici kataloğu kaynak gösterilmeden eklenmez); yetkili bayi iddiası yok.

export const systemsIntro = {
  title: "Sistem Çözümleri",
  lead:
    "Sık ihtiyaç duyulan sistemleri tek tek ürün olarak değil, keşiften devreye almaya kadar kapsamı net çözüm paketleri olarak sunuyoruz. Paket seçin, ihtiyacınızı yazın; projenize göre teklifi birlikte netleştirelim.",
  brands:
    "Paketlerde Siemens, ABB, Schneider Electric gibi önde gelen markalarla ve ilgili alanın öncü üreticileriyle temin ve uygulama yapıyoruz. Marka seçimi projenin ihtiyacına ve bütçesine göre birlikte belirlenir.",
};

// Her paketin altında ortak "MBO'nun rolü" listesi (paket kendi rolünü verirse o kullanılır).
export const defaultRole = [
  "Keşif ve ihtiyaç analizi",
  "Çözümün tasarımı ve ürün seçimi",
  "Tedarik",
  "Kurulum",
  "Devreye alma ve test",
  "İsteğe bağlı periyodik bakım sözleşmesi",
];

export const systems = [
  {
    slug: "akilli-otopark",
    index: "01",
    title: "Akıllı Otopark",
    pageTitle: "Akıllı Otopark Sistemi: Plaka Tanıma, Doluluk Yönlendirme ve Ödeme",
    summary:
      "Plaka tanıma, araç doluluk (dolu/boş) algılama ve yönlendirme ile otopark ödeme sistemini tek çözümde kuruyoruz.",
    description:
      "Akıllı otopark sistemi: plaka tanıma sistemi, otopark doluluk yönlendirme ve otopark ödeme sistemi. Keşif, tedarik, kurulum ve devreye alma. MBO Yapı Sistem.",
    lead:
      "Araçların girişte plakasından tanınması, hangi park yerinin dolu ya da boş olduğunun algılanıp sürücünün boş yere yönlendirilmesi ve çıkışta ödemenin alınması tek sistem olarak kurulabilir. Mevcut otoparkınıza ek olarak ya da yeni yapılan otoparkta, bina sistemleriyle uyumlu şekilde planlıyoruz.",
    items: [
      "Plaka tanıma sistemi (giriş/çıkış)",
      "Araç doluluk (dolu/boş) algılama ve yönlendirme",
      "Otopark ödeme sistemi",
      "Elektrik, haberleşme altyapısı ve bina sistemleriyle entegrasyon",
    ],
    areas: ["AVM", "Otel", "Hastane", "Rezidans / site", "Ofis ve plaza", "Sanayi tesisi"],
    links: [],
  },
  {
    slug: "pano-cozumleri",
    index: "02",
    title: "Pano Çözümleri",
    pageTitle: "MCC, DDC ve Kompanzasyon Panoları: Tasarım ve Üretim",
    summary:
      "MCC panosu, DDC (SBS) panosu ve kompanzasyon panosunu projenize göre tasarlıyor, üretiyor, kuruyor ve devreye alıyoruz.",
    description:
      "MCC panosu, DDC panosu ve kompanzasyon panosu: projeye özel tasarım, üretim, kurulum ve devreye alma. Siemens, ABB, Schneider Electric gibi markalarla. MBO Yapı Sistem.",
    lead:
      "Motor kontrol, bina otomasyonu ve reaktif güç kompanzasyonu panolarını proje ihtiyacına göre tasarlıyor ve üretiyoruz. Tasarımdan üretime, sahada kurulumdan devreye almaya kadar tek muhatapla ilerlersiniz.",
    items: [
      "MCC panosu (motor kontrol)",
      "DDC (SBS) panosu",
      "Kompanzasyon panosu",
      "Pano kabul, test ve devreye alma",
    ],
    areas: ["AVM", "Otel", "Hastane", "Rezidans / site", "Ofis ve plaza", "Sanayi tesisi", "Arıtma ve proses tesisleri"],
    role: [
      "Keşif ve ihtiyaç analizi",
      "Pano tasarımı ve ürün seçimi",
      "Üretim",
      "Kurulum",
      "Devreye alma ve test",
      "İsteğe bağlı periyodik bakım sözleşmesi",
    ],
    links: [
      { label: "Elektrik panoları, yangın algılama ve gazlı söndürme", href: "/dokuman-merkezi/panolar-yangin-algilama-gazli-sondurme/" },
      { label: "AG dağıtım panosu kabul ve muayene formu", href: "/dokuman-merkezi/formlar/ag-pano-kabul-muayene-formu/" },
    ],
  },
  {
    slug: "otomasyon-malzemeleri",
    index: "03",
    title: "Otomasyon Malzemeleri",
    pageTitle: "PLC ve Otomasyon Ürünleri: Seçim ve Tedarik",
    summary:
      "PLC ve otomasyon ürünlerinde mühendislik destekli seçim, tedarik ve uygulama desteği sunuyoruz.",
    description:
      "PLC otomasyon ürünleri ve otomasyon malzemeleri: mühendislik destekli seçim, tedarik ve devreye alma desteği. Siemens, ABB, Schneider Electric gibi markalarla. MBO Yapı Sistem.",
    lead:
      "PLC ve otomasyon ürünlerini yalnızca parça olarak değil, uygulamanın ihtiyacına göre seçerek tedarik ediyoruz. Yeni bir sistem ya da mevcut bir sistemin yenilenmesi için ürün seçiminden devreye almaya kadar destek veriyoruz.",
    items: [
      "PLC ve otomasyon ürünleri",
      "Mühendislik destekli ürün seçimi",
      "Tedarik ve sahaya teslim",
      "Uygulama ve devreye alma desteği",
    ],
    areas: ["Sanayi tesisi", "Arıtma ve proses tesisleri", "AVM", "Otel", "Hastane", "Ofis ve plaza"],
    links: [
      { label: "Endüstriyel ekipman ve yedek parça hizmeti", href: "/hizmetler/endustriyel-ekipman-yedek-parca/" },
    ],
  },
  {
    slug: "elektrikli-arac-sarj",
    index: "04",
    title: "Elektrikli Araç Şarj",
    pageTitle: "Elektrikli Araç Şarj Sistemleri: Site, İş Yeri ve Otopark",
    summary:
      "Konut, site, iş yeri ve otoparklar için elektrikli araç şarj ünitelerini keşiften devreye almaya kadar kuruyoruz.",
    description:
      "Elektrikli araç şarj istasyonu kurulumu: site, rezidans, iş yeri ve otopark için keşif, tedarik, kurulum ve devreye alma. MBO Yapı Sistem.",
    lead:
      "Önce mevcut elektrik altyapısının şarj yükünü kaldırıp kaldırmadığını keşifle belirliyor, ardından şarj ünitesi, kablolama ve koruma ekipmanlarını projelendirip kuruyoruz. Gerekirse pano güçlendirme veya yük yönetimi çözümleri öneriyoruz.",
    items: [
      "Şarj ünitesi seçimi, tedariki ve kurulumu",
      "Pano ve kablolama altyapısı",
      "Yük yönetimi çözümleri",
      "Test ve devreye alma",
    ],
    areas: ["Rezidans / site", "Konut", "Otel", "AVM", "Ofis ve plaza", "Toplu otopark"],
    links: [
      { label: "Ev şarj ünitesi kurulumu rehberi", href: "/dokuman-merkezi/ev-sarj-unitesi-kurulumu/" },
    ],
  },
  {
    slug: "gunes-enerjisi",
    index: "05",
    title: "Güneş Enerjisi",
    pageTitle: "Güneş Enerjisi (GES) Sistemleri: Tasarım, Kurulum ve İzleme",
    summary:
      "İşletme ve tesisler için güneş enerjisi sistemlerini keşif, tasarım, kurulum ve devreye alma olarak sunuyoruz.",
    description:
      "Güneş enerjisi sistemi (GES) kurulumu: keşif, tasarım, tedarik, kurulum ve devreye alma. Siemens, ABB, Schneider Electric gibi markalarla elektrik altyapısı. MBO Yapı Sistem.",
    lead:
      "Tesisin enerji tüketimine ve çatı ya da arazi koşullarına göre güneş enerjisi sistemini projelendiriyor, kuruyor ve mevcut elektrik altyapısına bağlıyoruz. İsteğe göre enerji izleme ve bina otomasyonu entegrasyonu da planlanır.",
    items: [
      "Keşif ve sistem tasarımı",
      "Panel, evirici ve elektrik pano tedariki",
      "Kurulum ve elektrik bağlantıları",
      "Enerji izleme ve otomasyon entegrasyonu",
    ],
    areas: ["Sanayi tesisi", "AVM", "Otel", "Ofis ve plaza", "Rezidans / site"],
    links: [
      { label: "Güneş enerjisi, akü ve jeneratör rehberi", href: "/dokuman-merkezi/gunes-enerjisi-aku-jenerator/" },
    ],
  },
  {
    slug: "peyzaj-otomasyonu",
    index: "06",
    title: "Peyzaj Otomasyonu",
    pageTitle: "Peyzaj Otomasyonu: Sulama ve Aydınlatma Kontrolü",
    summary:
      "Bahçe, site ve açık alanlar için sulama ve aydınlatmayı otomatik çalışan bir sistemde topluyoruz.",
    description:
      "Peyzaj otomasyonu: sulama otomasyonu ve bahçe aydınlatma kontrolü. Keşif, tedarik, kurulum ve devreye alma. MBO Yapı Sistem.",
    lead:
      "Sulama, havuz-pompa ve bahçe aydınlatmasını zamana ve sensörlere göre otomatik çalıştıran, uzaktan izlenebilen bir kontrol sistemi kuruyoruz. Villa, site ve açık alanların bakımını kolaylaştırır.",
    items: [
      "Sulama otomasyonu",
      "Bahçe ve dış mekân aydınlatma kontrolü",
      "Pompa ve kontrol panosu",
      "Sensör ve uzaktan izleme altyapısı",
    ],
    areas: ["Villa", "Rezidans / site", "Otel", "AVM", "Ofis ve plaza"],
    links: [],
  },
  {
    slug: "villa-guvenlik",
    index: "07",
    title: "Villa Güvenlik",
    pageTitle: "Villa Güvenlik Sistemleri: Kamera, CCTV ve Plaka Tanıma",
    summary:
      "Villa ve müstakil konutlar için kamera/CCTV, plaka tanıma ve giriş kontrolünü bir paket olarak kuruyoruz.",
    description:
      "Villa güvenlik sistemi: IP kamera ve CCTV, plaka tanıma sistemi, geçiş kontrol. Keşif, tedarik, kurulum ve devreye alma. MBO Yapı Sistem.",
    lead:
      "Villa ve müstakil konutların çevresini ve girişlerini kamera ile izleyen, araç girişlerinde plaka tanıma kullanabilen ve geçişleri kontrol eden bir güvenlik paketi kuruyoruz. Kayıtlara uzaktan erişim ve bildirimler ihtiyaca göre planlanır.",
    items: [
      "IP kamera ve CCTV sistemi",
      "Plaka tanıma sistemi (araç girişi)",
      "Giriş / geçiş kontrol",
      "Kayıt ve uzaktan izleme altyapısı",
    ],
    areas: ["Villa", "Müstakil konut", "Rezidans / site", "Ofis ve plaza"],
    links: [
      { label: "BMS, zayıf akım ve yangın güvenliği hizmeti", href: "/hizmetler/bms-zayif-akim-yangin-guvenligi/" },
    ],
  },
];
