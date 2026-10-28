// Sistem Çözümleri: hızlı satılabilir çözüm paketleri.
// Her paket tek bir nesnedir; şablon ortaktır (build.js → buildSystems).
// Başka bir siteye taşımak için bu dosya ve buildSystems() kopyalanır.
//
// İçerik kuralları: fiyat yok; teknik değer / sertifika / uygunluk iddiası yok
// (üretici kataloğu kaynak gösterilmeden eklenmez); yetkili bayi iddiası yok.
//
// Paket nesnesinde isteğe bağlı alanlar:
//   seoTitle : <title> etiketi (yoksa pageTitle + marka adı)
//   photo    : üst görselin dosya adı (yoksa slug)
//   extras   : [{ title, text }] ek bölümler
//   note     : kapsam listesinin altındaki kısa not
//   parent   : bağlı olduğu paketin slug'ı; hub'da kart olmaz
//   noBrands : true ise "MBO'nun rolü" altında marka cümlesi gösterilmez

export const systemsIntro = {
  title: "Sistem Çözümleri",
  seoTitle: "Sistem Çözümleri: Pano, Otomasyon, Enerji, Güvenlik – MBO",
  description:
    "MCC, DDC ve kompanzasyon panoları, PLC ve otomasyon, EV şarj, jeneratör + ATS, güneş + akü, akıllı otopark, peyzaj ve villa güvenlik: tek elden çözüm.",
  lead:
    "Bir sistemin değeri, sahada ilk günden itibaren beklenen şekilde çalışmasıyla ölçülür. Ürünleri tek başına değil; ihtiyaca göre seçilmiş, kurulmuş, devreye alınmış ve bakımı planlanmış çözüm paketleri olarak sunuyoruz. Keşiften periyodik bakım sözleşmesine kadar her adımda tek muhatabınız biziz.",
  brands:
    "Siemens, ABB, Schneider gibi markalarda temin ve uygulama yapıyoruz. Marka seçimi projenin ihtiyacına ve bütçesine göre birlikte belirlenir.",
};

// Hub sayfasındaki "Neden tek elden?" bölümü.
export const whyOneHand = {
  title: "Neden tek elden?",
  items: [
    "Keşif sahada yapılır; ürün, projenin gerçek ihtiyacına göre seçilir.",
    "Tedarik, kurulum ve devreye alma aynı ekipte kalır; arayüzlerde boşluk oluşmaz.",
    "Periyodik bakım sözleşmesiyle sistemin performansı teslimden sonra da korunur.",
  ],
  closing:
    "Projeniz için bilgi ve teklif almak isterseniz paket sayfalarındaki \"Teklif iste\" bağlantısını kullanabilirsiniz.",
};

// Hub sayfasındaki "Nasıl çalışıyoruz?" bölümü.
export const howWeWork = {
  title: "Nasıl çalışıyoruz?",
  steps: [
    { t: "Keşif", s: "Sahayı, mevcut sistemleri ve ihtiyacı yerinde inceleriz." },
    { t: "Çözüm önerisi", s: "Kapsamı, varsayımları ve sınırları açık bir teklif hazırlarız." },
    { t: "Tedarik ve kurulum", s: "Ürünleri projeye göre seçer, temin eder ve kurarız." },
    { t: "Devreye alma", s: "Testleri yapar, ayarları tamamlar, sistemi tutanakla teslim ederiz." },
    { t: "Periyodik bakım", s: "Sözleşmeyle sistemin performansını teslimden sonra da koruruz." },
  ],
};

// Hub sayfasındaki bakım sözleşmesi bölümü; teklif etiketi "[TEKLIF-WEB] Periyodik Bakım".
export const maintenance = {
  title: "Periyodik bakım sözleşmesi",
  text:
    "Kurulumdan sonra da yanınızdayız. Panolarınız, otomasyon sistemleriniz ve yedek güç kaynaklarınız planlı olarak kontrol edilir; her ziyaretin ardından yazılı rapor paylaşılır. Plansız arıza yerine planlı bakım, beklenmedik duruş yerine öngörülebilir bir işletme.",
  tag: "Periyodik Bakım",
  links: [
    { label: "Periyodik Bakım Sözleşmesi: Kapsam ve Kontrol Listesi", href: "/dokuman-merkezi/periyodik-bakim-sozlesmesi/" },
    { label: "Devreye Alma Süreci: Aşamalar ve Teslim Dokümanları", href: "/dokuman-merkezi/devreye-alma-sureci/" },
  ],
};

// KVKK taahhüdü: kişisel veri işleyen paketlerde (kamera, plaka, kullanıcı kaydı) ve hub sayfasında gösterilir.
// Not: "ürün KVKK uyumludur" gibi bir uygunluk iddiası değildir.
// Kapsamın ayrıntısı müşterinin hukuk danışmanıyla netleştirilir.
export const kvkkAssurance = {
  title: "Kişisel verilerin korunması taahhüdümüz",
  text:
    "Kişisel veri işleyen sistemler, işletmenin KVKK yükümlülükleri dikkate alınarak planlanır. Tasarımı ve devreye almayı, kişisel verilerin korunmasını esas alarak yaparız; kapsamın ayrıntısını sizin hukuk danışmanınızla birlikte netleştiririz.",
  points: [
    "Yalnızca amaca gerekli veriyi işleyecek şekilde yapılandırma",
    "Kayıtlara erişimin yetkilendirilmesi ve parola/ağ güvenliği",
    "Saklama süresi ve silme ayarlarının hukuki görüşe göre yapılması",
    "Aydınlatma/uyarı metni ve levhaları için teknik destek",
  ],
};

// Her paket sayfasının üst görseli (Adobe Stock lisanslı). alt: erişilebilirlik metni.
export const systemPhotos = {
  "akilli-otopark": "Kapalı otoparkta park halindeki araç",
  "pano-cozumleri": "Elektrik dağıtım ve kontrol panoları sırası",
  "otomasyon-ve-kontrol": "Mühendis tabletle otomasyon sistemini izliyor",
  "enerji-surekliligi": "Teknisyenler güneş paneli montajı yapıyor",
  "elektrikli-arac-sarj": "Otoparkta şarj olan elektrikli araç",
  "gunes-enerjisi": "Teknisyenler güneş paneli montajı yapıyor",
  "peyzaj-otomasyonu": "Çim alanda otomatik sulama sistemi",
  "villa-guvenlik": "Cepheye monte güvenlik kamerası",
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
    slug: "pano-cozumleri",
    index: "01",
    title: "Pano Çözümleri",
    pageTitle: "MCC, DDC (SBS) ve Kompanzasyon Panoları",
    summary:
      "MCC, DDC (SBS) ve kompanzasyon panolarını ihtiyaca göre tasarlıyor; anlaşmalı atölyede ürettirip fabrika kabul testiyle teslim alıyor, sahada kurup devreye alıyoruz.",
    description:
      "MCC, DDC (SBS) ve kompanzasyon panoları: ihtiyaca göre tasarım, anlaşmalı atölyede imalat ve FAT, kurulum, devreye alma ve bakım. MBO Yapı Sistem.",
    lead:
      "Motor kontrol, bina otomasyonu ve reaktif güç kompanzasyonu panolarını proje ihtiyacına göre tasarlıyoruz. Panolar anlaşmalı imalatçı atölyesinde üretilir ve sevkiyattan önce fabrika kabul testinden (FAT) geçer; kurulum ve devreye almayı ekibimiz yürütür. Tasarımdan devreye almaya tek muhatapla ilerlersiniz.",
    items: [
      "MCC panosu (motor kontrol merkezi)",
      "DDC (SBS) panosu (bina otomasyonu)",
      "Kompanzasyon panosu (reaktif güç)",
      "Enerji analizörü ve tüketim izleme",
      "Pano odası güvenliği: termal kamerayla pano kontrolü ve gazlı söndürme",
      "Fabrika kabul testi (FAT), kurulum ve devreye alma",
    ],
    areas: ["AVM", "Otel", "Hastane", "Rezidans / site", "Ofis ve plaza", "Sanayi tesisi", "Arıtma ve proses tesisleri"],
    role: [
      "Keşif ve ihtiyaç analizi",
      "Pano tasarımı ve ürün seçimi",
      "Anlaşmalı atölyede imalat ve fabrika kabul testi (FAT)",
      "Kurulum",
      "Devreye alma ve test",
      "İsteğe bağlı periyodik bakım sözleşmesi (termal kamerayla pano kontrolü dahil)",
    ],
    links: [
      { label: "Elektrik panoları, yangın algılama ve gazlı söndürme", href: "/dokuman-merkezi/panolar-yangin-algilama-gazli-sondurme/" },
      { label: "AG dağıtım panosu kabul ve muayene formu", href: "/dokuman-merkezi/formlar/ag-pano-kabul-muayene-formu/" },
      { label: "Kompanzasyon Panosu: İşletmeler İçin Karar Rehberi", href: "/dokuman-merkezi/kompanzasyon-panosu-karar-rehberi/" },
      { label: "MCC Panosu: Proje ve Sipariş Öncesi Kontrol Listesi", href: "/dokuman-merkezi/mcc-panosu-kontrol-listesi/" },
      { label: "DDC (SBS) Panoları: Devreye Alma Kontrol Listesi", href: "/dokuman-merkezi/ddc-panosu-devreye-alma/" },
      { label: "Pano Bakım Kontrol Listesi", href: "/dokuman-merkezi/pano-bakim-kontrol-listesi/" },
      { label: "Sirkülasyon Pompası Seçimi: Debi ve Basma Yüksekliği", href: "/dokuman-merkezi/sirkulasyon-pompasi-secimi/" },
      { label: "Hidrofor Seçimi: Debi, Basınç ve Tank Hesabı", href: "/dokuman-merkezi/hidrofor-secimi/" },
    ],
  },
  {
    slug: "otomasyon-ve-kontrol",
    index: "02",
    title: "Otomasyon ve Kontrol Çözümleri",
    pageTitle: "Otomasyon ve Kontrol Çözümleri",
    seoTitle: "PLC ve Otomasyon Malzemeleri: Temin ve Uygulama – MBO",
    photo: "otomasyon-malzemeleri",
    summary:
      "PLC ve otomasyon ürünlerinin doğru seçimi, temini ve uygulaması. Yeni projeler, revizyonlar ve acil yedek parça ihtiyaçları için.",
    description:
      "PLC, giriş/çıkış modülleri, operatör panelleri, sürücüler ve saha ekipmanları: doğru seçim, temin, kurulum ve devreye alma.",
    lead:
      "Otomasyon malzemesinde doğru ürün, katalogdaki uygunluktan fazlasıdır: mevcut sistemle uyum, yedek parça sürekliliği ve kolay devreye alma demektir. Yeni projelerde, revizyonlarda ve arıza kaynaklı acil ihtiyaçlarda malzemeyi sistem bütünlüğünü gözeterek seçer, temin eder ve gerektiğinde uygulamasını yaparız.",
    items: [
      "PLC'ler ve giriş/çıkış (I/O) modülleri",
      "Operatör panelleri (HMI)",
      "Motor sürücüleri ve yol vericiler",
      "Endüstriyel haberleşme bileşenleri",
      "Sensörler, röleler ve saha ekipmanları",
    ],
    areas: [
      "Sanayi tesisleri ve üretim hatları",
      "Makine imalatçıları",
      "Su ve atık su tesisleri",
      "Bina mekanik sistemleri",
      "Bakım ve revizyon projeleri",
    ],
    role: [
      "Keşif: Mevcut sistemin marka, model ve haberleşme yapısı incelenir.",
      "Tedarik: Siemens, Schneider, ABB, Omron ve Mitsubishi gibi markalarda temin ve uygulama yapılır; muadil ürünlerde uyum kontrol edilir.",
      "Kurulum: Pano içi montaj ve saha bağlantıları tamamlanır.",
      "Devreye alma: Giriş/çıkış ve fonksiyon testleri yapılır.",
      "Periyodik bakım sözleşmesi: Kontroller, yedeklemeler ve iyileştirmeler planlı yürütülür.",
    ],
    extras: [
      {
        title: "Hızlı teklif için hazırlayın",
        text:
          "Ürünün marka, model ve sipariş kodu (etiket fotoğrafı yeterli), adet, istenen teslim tarihi, muadilin kabul edilip edilmeyeceği ve montaj ya da devreye alma ihtiyacı.",
      },
    ],
    links: [
      { label: "Endüstriyel ekipman ve yedek parça hizmeti", href: "/hizmetler/endustriyel-ekipman-yedek-parca/" },
      { label: "PLC ve Otomasyon Malzemesi: Doğru Teklif İçin Gerekli Bilgiler", href: "/dokuman-merkezi/plc-otomasyon-malzemesi-teklif/" },
      { label: "Eski PLC'den Yeni Nesle Geçiş: Planlama Adımları", href: "/dokuman-merkezi/eski-plc-yeni-nesle-gecis/" },
      { label: "Otomasyon Sistemi Yedekleme ve Dokümantasyon Rehberi", href: "/dokuman-merkezi/otomasyon-yedekleme-rehberi/" },
      { label: "Motorlu Vana Seçimi: Kvs ve Vana Otoritesi", href: "/dokuman-merkezi/motorlu-vana-secimi/" },
      { label: "Bina Otomasyonu Sensörleri: Çeşitler ve Seçim", href: "/dokuman-merkezi/bina-otomasyonu-sensorleri/" },
    ],
  },
  {
    slug: "enerji-surekliligi",
    index: "03",
    title: "Enerji Sürekliliği",
    pageTitle: "Enerji Sürekliliği",
    seoTitle: "EV Şarj, Jeneratör + ATS ve Güneş + Akü Sistemleri – MBO",
    photo: "gunes-enerjisi",
    summary:
      "EV şarj istasyonu, güneş paneli + akü, jeneratör + ATS panosu. Kesintiye karşı planlı ve ihtiyaca göre ölçeklenen enerji altyapısı.",
    description:
      "EV şarj istasyonu kurulumu, jeneratör ve ATS panosu, güneş paneli + akü sistemleri: ihtiyaca göre tasarım, tedarik, kurulum, devreye alma ve bakım.",
    lead:
      "Elektrik kesintisi bir villada konforu, bir işletmede üretimi ve itibarı etkiler. Kritik yükleri belirler, kesintiye karşı doğru kaynağı seçer ve sistemi otomatik geçişle (ATS) bütünleştiririz. Elektrikli araç şarjını da aynı altyapı planının parçası olarak ele alırız.",
    items: [
      "Jeneratör + ATS panosu: Şebeke kesildiğinde otomatik devreye giren, şebeke geri geldiğinde güvenle dönen yedek güç.",
      "Güneş paneli + akü: Gün içi üretimi depolayarak kesinti anında kritik yükleri besleyen sistem.",
      "EV şarj istasyonu: Konut, site ve işletme otoparkları için şarj noktası; mevcut altyapının uygunluk kontrolü ve yük yönetimi seçenekleri.",
    ],
    note:
      "Kamuya açık şarj hizmeti verilecekse ilgili mevzuat ve izin süreçleri proje başında birlikte değerlendirilir.",
    areas: [
      "Villalar ve müstakil konutlar",
      "Siteler",
      "Oteller",
      "İşletmeler ve küçük sanayi",
      "Kesintiye duyarlı ofisler ve teknik odalar",
    ],
    role: [
      "Keşif: Kritik yük listesi, kesinti profili ve mevcut pano yerinde incelenir.",
      "Tedarik: Bileşenler ihtiyaca göre seçilir ve temin edilir.",
      "Kurulum: Montaj, bağlantılar ve pano entegrasyonu tamamlanır.",
      "Devreye alma: Geçiş testleri ve ayarlar yapılır; sistem tutanakla teslim edilir.",
      "Periyodik bakım sözleşmesi: Test çalıştırmaları, akü ve jeneratör kontrolleri planlı yürütülür.",
    ],
    extras: [
      {
        title: "Yeşil Evler: villalar için kesintisiz enerji",
        text:
          "Yeşil Evler, villalar için güneş panelini, LiFePO4 bataryayı ve otomatik transfer (ATS) kontrollü jeneratörü tek sistemde birleştiren paket yaklaşımımızdır. Kesintide önce güneş ve batarya devrededir; uzun kesintide jeneratör devreye girer. Sistem keşif ve yük analiziyle boyutlandırılır.",
      },
    ],
    links: [
      { label: "Elektrikli araç şarj: ayrıntılı sayfa", href: "/sistemler/elektrikli-arac-sarj/" },
      { label: "Güneş enerjisi: ayrıntılı sayfa", href: "/sistemler/gunes-enerjisi/" },
      { label: "Enerji Sürekliliği: Karar Vermeden Önce 8 Soru", href: "/dokuman-merkezi/enerji-surekliligi-8-soru/" },
      { label: "EV Şarj İstasyonu Kurulumu Öncesi Kontrol Listesi", href: "/dokuman-merkezi/ev-sarj-istasyonu-kontrol-listesi/" },
      { label: "Jeneratör ve ATS: Periyodik Test Kontrol Listesi", href: "/dokuman-merkezi/jenerator-ats-test-kontrol-listesi/" },
    ],
  },
  {
    slug: "akilli-otopark",
    kvkk: true,
    noBrands: true,
    index: "04",
    title: "Akıllı Otopark",
    pageTitle: "Akıllı Otopark: Plaka Tanıma, Doluluk Yönlendirme ve Ödeme",
    seoTitle: "Akıllı Otopark: Plaka Tanıma, Yönlendirme, Ödeme – MBO",
    summary:
      "Plaka tanıma, araç doluluk (dolu/boş) algılama ve yönlendirme ile otopark ödeme sistemini tek çözümde kuruyoruz.",
    description:
      "Plaka tanımalı giriş-çıkış, doluluk algılama ve yönlendirme, ödeme entegrasyonu: otoparkınız için keşif, tedarik, kurulum ve devreye alma. MBO Yapı Sistem.",
    lead:
      "Girişte kuyruk, içeride boş yer arayan araçlar ve elle tutulan kayıtlar otoparkı bir işletmenin en çok şikâyet edilen yeri yapabilir. Akıllı otopark plaka tanıma, doluluk algılama ve ödemeyi tek sistemde toplar. Sistemi otoparkınızın trafiğine ve kullanıcı yapısına göre kurar, devreye alır ve bakımını üstleniriz. Sistemin üreticisi değiliz; uygun ürünü seçip temin ediyor, ihtiyaca göre kurup devreye alıyoruz.",
    items: [
      "Plaka tanıma ile giriş-çıkış: kamera, bariyer ve yönetim yazılımı birlikte çalışır; abone, misafir ve ziyaretçi araçları ayrı tanımlanabilir.",
      "Doluluk algılama ve yönlendirme: park yeri ya da kat bazında doluluk bilgisi giriş ve kat tabelalarıyla sürücüye gösterilir.",
      "Ödeme: otomatik ödeme noktası ya da işletmenin seçtiği ödeme altyapısıyla entegrasyon.",
      "Yönetim ve raporlama: giriş-çıkış kayıtları, doluluk geçmişi, abonelik ve tarife yönetimi.",
    ],
    areas: ["AVM ve plaza", "Otel", "Hastane", "Rezidans / site", "Ofis binası", "Otopark işletmesi"],
    role: [
      "Keşif: giriş-çıkış noktaları, yoğun saatler, aydınlatma, kablo güzergâhı ve ağ altyapısı yerinde incelenir.",
      "Tedarik: kamera, bariyer, sensör, tabela ve yazılım ihtiyaca göre seçilir ve temin edilir.",
      "Kurulum: montaj, kablolama, ağ ve mevcut bariyer ya da geçiş sistemleriyle entegrasyon tamamlanır.",
      "Devreye alma: tanıma, yönlendirme ve ödeme senaryoları test edilir; kullanıcılar eğitilir, sistem tutanakla teslim edilir.",
      "Periyodik bakım sözleşmesi: kamera açısı ve temizliği, sensör ve bariyer kontrolleri, yazılım güncellemeleri planlı yürütülür.",
    ],
    extras: [
      {
        title: "Neden önce keşif?",
        text: "Plaka tanıma başarısı kamera açısına, aydınlatmaya ve araç hızına bağlıdır. Bu yüzden ürün seçiminden önce saha incelenir.",
      },
      {
        title: "Kişisel veri",
        text: "Plaka tanıma kişisel veri işler. Plaka verisinin işlenmesi işletmenin KVKK yükümlülükleri kapsamında planlanır; KVKK gereklilikleri tasarımda ele alınır, saklama süresi ve erişim yetkileri kurulumdan önce işletmeyle birlikte belirlenir.",
      },
      {
        title: "Ödeme altyapısı",
        text: "Ödeme hizmet sağlayıcısını işletme seçer; sistem tarafındaki entegrasyon planlanır ve test edilir.",
      },
    ],
    links: [],
  },
  {
    slug: "peyzaj-otomasyonu",
    index: "05",
    title: "Peyzaj Otomasyonu",
    pageTitle: "Peyzaj Otomasyonu: Sulama ve Aydınlatma Kontrolü",
    seoTitle: "Peyzaj Otomasyonu: Sulama ve Aydınlatma | MBO Yapı Sistem",
    noBrands: true,
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
    kvkk: true,
    index: "06",
    title: "Villa Güvenlik",
    pageTitle: "Villa Güvenlik Sistemleri: Kamera, CCTV ve Plaka Tanıma",
    noBrands: true,
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
  // Enerji Sürekliliği'ne bağlı ayrıntı sayfaları: hub'da kart olmaz, paket sayfasından bağlanır.
  {
    slug: "elektrikli-arac-sarj",
    parent: "enerji-surekliligi",
    kvkk: true,
    index: "03.1",
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
      { label: "Enerji Sürekliliği paketi", href: "/sistemler/enerji-surekliligi/" },
    ],
  },
  {
    slug: "gunes-enerjisi",
    parent: "enerji-surekliligi",
    index: "03.2",
    title: "Güneş Enerjisi",
    pageTitle: "Güneş Enerjisi (GES) Sistemleri: Tasarım, Kurulum ve İzleme",
    summary:
      "İşletme ve tesisler için güneş enerjisi sistemlerini keşif, tasarım, kurulum ve devreye alma olarak sunuyoruz.",
    description:
      "Güneş enerjisi sistemi (GES) kurulumu: keşif, tasarım, tedarik, kurulum ve devreye alma. Elektrik altyapısı ve izleme. MBO Yapı Sistem.",
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
      { label: "Enerji Sürekliliği paketi", href: "/sistemler/enerji-surekliligi/" },
    ],
  },
];

// Hub sayfasında ve "Diğer çözüm paketleri" bloğunda kart olarak görünen paketler.
export const hubSystems = systems.filter((s) => !s.parent);
