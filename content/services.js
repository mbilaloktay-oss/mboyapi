// Hizmetler. Metinler mevcut siteden birebir alınmıştır.
// `summary` ana sayfa ve hizmet listesindeki kart metni,
// `lead` + `body` + `points` ise hizmetin kendi sayfasıdır.

export const services = [
  {
    slug: "elektrik-taahhut-guc-sistemleri",
    index: "01",
    title: "Elektrik Taahhüt & Zayıf Akım",
    pageTitle: "Elektrik Taahhüt ve Kesintisiz Güç Sistemleri",
    summary:
      "Mimari projeyle koordineli olarak; AG güç dağıtımı, kesintisiz enerji (UPS) ve tüm zayıf akım (Yangın, CCTV, Data) sistemlerini anahtar teslim kuruyoruz.",
    lead:
      "Her tesisin kalbi, kesintisiz ve güvenli enerji altyapısıdır. MBO Yapı Sistem olarak, dizayn ofislerden gelen konsept elektrik projelerini sahanın dinamiklerine uygun uygulama projelerine (Shop-Drawing) çeviriyor; otel, finans merkezi ve endüstriyel tesislerin güç altyapılarını test ve kabul kriterleriyle hayata geçiriyoruz. Butik projelerde (Fit-Out) ise yük hesaplamalarından as-built teslimine kadar uçtan uca taahhüt hizmeti sunuyoruz.",
    points: [
      {
        term: "Uygulama Mühendisliği ve Koordinasyon",
        text:
          "Mekanik ve mimari gruplarla sahada oluşabilecek çakışmaları (clash) önceden tespit ederek; pano dizaynları ve kablo taşıma (tava/busbar) güzergahlarının optimize edilmesi.",
      },
      {
        term: "AG ve Dağıtım Sistemleri",
        text:
          "Projede esas alınan standart ve şartnamelere göre ana/tali dağıtım panoları ve kompanzasyon sistemlerinin kurulumu.",
      },
      {
        term: "Kesintisiz Enerji (UPS & Jeneratör)",
        text:
          "Data center, hastane ve finans merkezleri gibi kritik tesisler için hayati önem taşıyan senkron jeneratör senaryoları ile yedekli UPS altyapılarının entegrasyonu.",
      },
      {
        term: "Aydınlatma ve Otomasyon Entegrasyonu",
        text:
          "İç/dış aydınlatma armatürlerinin montajı, KNX/DALI gibi aydınlatma otomasyon sistemlerinin altyapı kurulumu ve acil durum senaryolarının devreye alınması.",
      },
    ],
  },

  {
    slug: "mekanik-hvac-sistemleri",
    index: "02",
    title: "Mekanik Tesisat & HVAC",
    pageTitle: "Mekanik Tesisat ve Endüstriyel HVAC Çözümleri",
    summary:
      "AVM, otel ve tesislerin iklimlendirme (HVAC) ve mekanik altyapılarını tek bir dijital akılda (BMS) birleştirerek, enerji verimli akıllı sistemler olarak uyguluyoruz.",
    lead:
      "Yapıların doğru “nefes alması”, enerji verimliliğinin sağlanması ve konfor şartlarının korunması üst düzey bir mekanik mühendislik gerektirir. MBO Yapı Sistem olarak; AVM, otel ve endüstriyel tesislerde, mevcut dizaynları sahaya tam uyumlu uygulama projelerine (Shop-Drawing) dönüştürüyor ve taahhüt ediyoruz. Zincir restoran ve mağaza (Fit-Out) projelerinde ise sıfırdan kapasite hesaplarını ve mekanik projelendirmeyi bizzat yaparak anahtar teslim çözümler sunuyoruz.",
    points: [
      {
        term: "Uygulama Mühendisliği (Shop-Drawing)",
        text:
          "Mimari çakışmaları (clash) önceden tespit ederek, teorik mekanik projelerin şantiye ve bakım dostu imalat projelerine dönüştürülmesi.",
      },
      {
        term: "HVAC (İklimlendirme) Taahhüdü",
        text:
          "Tesisin ölçeğine uygun Chiller soğutma grupları, VRF/VRV sistemleri ve merkezi havalandırma santrallerinin (AHU) kurulumu.",
      },
      {
        term: "Sıhhi Tesisat ve Altyapı",
        text:
          "Kullanım suyu, atık su ve endüstriyel su şartlandırma sistemlerinin yüksek malzeme kalitesiyle uygulanması.",
      },
      {
        term: "Mekanik Otomasyon Entegrasyonu",
        text:
          "Kurulan sistemlerin, bina otomasyonu (BMS) ile tam uyumlu çalışacak şekilde sahadaki test ve devreye alma (commissioning) işlemlerinin yapılması.",
      },
    ],
  },

  {
    slug: "bms-zayif-akim-yangin-guvenligi",
    index: "03",
    title: "BMS, Zayıf Akım ve Yangın Güvenliği",
    pageTitle: "Bina Otomasyonu (BMS) ve Entegre Güvenlik Sistemleri",
    summary:
      "Elektrik ve mekanik disiplinleri tek bir dijital akılda birleştiriyor; yangın algılama, gazlı söndürme ve IP güvenlik sistemlerini uygulama projeleriyle birlikte anahtar teslim sunuyoruz.",
    lead:
      "Modern yapılar sadece elektromekanik bileşenlerden değil, bu bileşenleri tek bir merkezden yöneten “dijital bir akıldan” oluşur. MBO Yapı Sistem olarak, karmaşık tesislerin mekanik ve elektrik disiplinlerini Bina Yönetim Sistemleri (BMS) çatısı altında entegre ediyor; can ve mal güvenliğini en üst düzeye çıkaran zayıf akım çözümlerini, sahadaki uygulama projeleriyle (Shop-Drawing) birleştirerek anahtar teslim sunuyoruz.",
    points: [
      {
        term: "Çoklu Protokol Entegrasyonu",
        text:
          "Tesisinizdeki farklı disiplinlere ait cihazların tek bir merkezden izlenmesi ve yönetilmesi için; BACnet (IP/MSTP), Modbus (RTU/TCP), Profibus, LonWorks, M-Bus, DALI, KNX ve SNMP haberleşme protokollerini kapsayan, donanım bağımsız sistem entegrasyonu sunuyoruz.",
      },
      {
        term: "Enerji İzleme ve BMS Yazılımı",
        text:
          "M-Bus ve Modbus tabanlı sayaçların entegre edilerek enerji analizlerinin yapılması; ısıtma-soğutma (HVAC) ve güç sistemlerinin senaryo tabanlı yönetimi. Devreye alma (Commissioning) aşamasında tüm haberleşme katmanlarının uçtan uca test edilmesi.",
      },
      {
        term: "Yangın Algılama ve Söndürme",
        text:
          "Sistem/Server odaları için kalıntısız, üretici onaylı gazlı söndürme sistemleri (FK-5-1-12 ve inert gaz gibi), hassas adresli yangın algılama altyapıları ve acil durum senaryolarının (asansör kuyulama, duman tahliye vb.) saha entegrasyonu.",
      },
      {
        term: "IP CCTV ve Zayıf Akım Sistemleri",
        text:
          "Tesis genelinde uçtan uca IP tabanlı güvenlik kamera sistemleri, biyometrik/kartlı geçiş kontrol altyapıları ile tesisin dijital omurgasını oluşturan fiber optik ve bakır (Cat6/Cat7) yapısal kablolama çözümleri.",
      },
    ],
  },

  {
    slug: "proje-tasarimi-muhendislik",
    index: "04",
    title: "Proje Tasarımı & Mühendislik",
    pageTitle: "Elektromekanik Proje Tasarımı ve Mühendislik Hizmetleri",
    summary:
      "AVM, plaza, otel, rezidans ve endüstriyel tesisler için elektrik, mekanik ve otomasyon projelerini projede esas alınan standart ve şartnamelere göre tasarlıyoruz. Keşif, metraj ve maliyet analizleriyle yatırımın en doğru şekilde planlanmasını sağlıyoruz.",
    lead:
      "Bir projenin sahadaki başarısı, masada yapılan mühendisliğin kalitesiyle ölçülür. MBO Yapı Sistem olarak, AVM, plaza, otel ve endüstriyel tesisler için projede esas alınan standart ve şartnamelere göre uygulanabilir ve optimize edilmiş elektromekanik projeler tasarlıyoruz.",
    points: [
      {
        term: "Uygulanabilir Tasarım",
        text:
          "Sadece masa başında kağıt üzerinde “çizim” yapmıyoruz. Sahada uygulanması zor veya maliyetli olan teorik hataları önceden fark ediyor, tamamen şantiye ve bakım dostu projeler üretiyoruz.",
      },
      {
        term: "Devreye Alma (Commissioning) Disiplini",
        text:
          "Ekibimizin proje yöneticiliği tecrübesiyle; sistemlerin sadece kurulmasını değil, birbiriyle entegre çalışmasını planlı testler ve kayıtlı kabulle (işletmeye geçiş krizlerini öngörerek) taahhüt ediyoruz.",
      },
      {
        term: "Proaktif Kriz Yönetimi",
        text:
          "Mimari ve mekanik/elektrik disiplinler arasındaki olası çakışmaları (clash) tasarım aşamasındayken çözüyoruz. Bu sayede sahada yaşanabilecek zaman ve bütçe kaybı riskini azaltıyoruz.",
      },
    ],
  },

  {
    slug: "test-devreye-alma",
    index: "05",
    title: "Test & Devreye Alma",
    pageTitle: "Test, Devreye Alma ve İşletmeye Geçiş Yönetimi",
    summary:
      "Kurulan sistemlerin senaryo testlerini yapıyor, otomasyon haberleşmelerini doğrulayarak tesisin kontrollü işletmeye geçişini sağlıyoruz.",
    lead:
      "Bir projenin en kritik ve sancılı evresi, kağıt üzerindeki tasarımların sahada can bulduğu o ilk anlardır. MBO Yapı Sistem olarak, Zorlu ve Emaar gibi dev tesislerin işletmeye alınma süreçlerindeki tecrübemizle; elektromekanik ve otomasyon sistemlerinin uluslararası standartlara (ASHRAE, IEC) göre fonksiyonel testlerini yapıyor, tesisinizin planlı testler ve kayıtlı kabulle “işletmeye geçişini” (Commissioning) sağlıyoruz.",
    points: [
      {
        term: "Fonksiyonel Senaryo Testleri",
        text:
          "Yangın, elektrik kesintisi ve acil durum senaryolarında tüm sistemlerin (BMS, HVAC, Jeneratör) entegre şekilde çalışmasının doğrulanması.",
      },
      {
        term: "Saha Optimizasyonu",
        text:
          "Tasarım değerleri ile saha gerçekleri arasındaki sapmaların tespit edilip, cihazların en yüksek enerji verimliliğiyle çalışacak şekilde kalibre edilmesi.",
      },
      {
        term: "As-Built ve Dokümantasyon",
        text:
          "Sahadaki nihai durumun eksiksiz as-built projelere dönüştürülmesi ve tesis işletme ekiplerine gerekli teknik eğitimlerin verilerek el kitaplarının teslimi.",
      },
    ],
  },

  {
    slug: "teknik-danismanlik-denetim",
    index: "06",
    title: "Teknik Danışmanlık & Denetim",
    pageTitle: "İşveren Vekilliği, Teknik Müşavirlik ve Denetim",
    summary:
      "Sahadaki imalatların denetlenmesi, kesin hesapların yönetilmesi ve kalite kontrol süreçlerinde işveren adına teknik kontrol, kesin hesap ve hakediş dokümantasyonu desteği sunuyoruz.",
    lead:
      "Yatırımınızın her kuruşunun karşılığını aldığınızdan ve projenin kalite standartlarından sapmadığından emin olmak için, işveren tarafında teknik kontrol, kesin hesap ve hakediş dokümantasyonu desteğiniz oluyoruz. MBO Yapı Sistem, ekibimizin şeflik ve yönetim tecrübesiyle sahadaki imalatları sizin adınıza denetler, finansal ve teknik riskleri minimize eder.",
    points: [
      {
        term: "Saha ve Yüklenici Denetimi",
        text:
          "Yüklenici firmaların imalatlarının ulusal/uluslararası şartnamelere ve uygulama (Shop-Drawing) projelerine uygunluğunun düzenli kontrolü.",
      },
      {
        term: "Kesin Hesap ve Hakediş Yönetimi",
        text:
          "Sahada yapılan işin metrajlarının hassas ölçümü, hakediş dosyalarının incelenmesi ve yatırımcı bütçesinin şeffaflıkla korunması.",
      },
      {
        term: "Keşif ve İhale Dosyası Hazırlığı",
        text:
          "Yeni projeler için en uygun teknik cihaz seçimlerinin yapılması (Engineering selection), marka/model onayları ve ihale dokümanlarının oluşturulması.",
      },
    ],
  },

  {
    slug: "magaza-kafe-fit-out",
    index: "07",
    title: "Mağaza & Kafe Fit-Out",
    pageTitle: "Mağaza ve Kafe Projeleri: Elektrik, Mekanik ve AVM Koordinasyonu",
    summary:
      "AVM ve cadde mağazaları, restoran ve kafeler için elektrik ve mekanik uygulamayı yönetiyor, AVM onay sürecine uygun proje ve belge düzeniyle ilerliyoruz.",
    lead:
      "AVM veya ticari alanlardaki mağaza, restoran ve kafelerinizi açılış takvimine göre planlıyoruz. MBO Yapı Sistem olarak, Fit-Out projelerinde elektrik ve mekanik (HVAC) uygulamayı yönetiyor ve AVM onay sürecine uygun proje ve belge düzeniyle ilerliyoruz.",
    subtitle: "AVM ve Ticari Alanlar İçin Elektromekanik Çözümler",
    points: [],
  },

  {
    slug: "endustriyel-ekipman-yedek-parca",
    index: "08",
    title: "Endüstriyel Ekipman & Yedek Parça",
    pageTitle: "Kritik Ekipman Tedariki ve Yedek Parça Yönetimi",
    summary:
      "Tesislerin kesintisiz çalışması için kritik önem taşıyan otomasyon, mekanik ve elektrik şalt malzemelerinin doğru seçimini yapıyor ve tedarik sürecini yönetiyoruz.",
    lead:
      "Zamanın maliyet olduğu endüstriyel tesislerde ve ticari işletmelerde, kritik bileşenlerin arızalanması büyük operasyonel kayıplara yol açar. Tesisinizin kalbi olan elektromekanik ve otomasyon ekipmanlarının doğru analizini yapıyor, yurt içi ve yurt dışı tedarik seçeneklerimizle en doğru donanımı teslim sürelerini baştan netleştirerek sahaya ulaştırıyoruz.",
    points: [
      {
        term: "Mühendislik Destekli Seçim",
        text:
          "Sadece parça satışı değil; bozulan veya ömrünü tamamlayan sistemin yerine, güncel teknolojiye ve kapasiteye en uygun ürünün (Retrofit) mühendislik hesaplarıyla seçilmesi.",
      },
      {
        term: "Otomasyon ve Şalt Malzemeleri",
        text:
          "Kesiciler, frekans konvertörleri (sürücüler), BMS kontrolörleri ve sensör/valf gruplarında dünya markalarının (Siemens, Schneider, ABB vb.) tedariki.",
      },
      {
        term: "Hızlı Tedarik ve Lojistik",
        text:
          "Üretim hattının durmaması için kritik yedek parçaların planlanması ve sahaya zamanında teslim operasyonunun yönetilmesi.",
      },
    ],
  },

  {
    slug: "periyodik-bakim-tesis-isletmesi",
    index: "09",
    title: "Periyodik Bakım & Tesis İşletmesi",
    pageTitle: "Tesis Yönetimi ve Önleyici Periyodik Bakım",
    summary:
      "Sistemlerde performansın ölçümle izlenmesi ve korunması için proaktif önleyici bakım, iyileştirme (Capex) çalışmaları yapıyor ve profesyonel teknik işletme hizmeti sunuyoruz.",
    lead:
      "Kurulan sistemlerin yatırım ömrünü uzatmak ve performansın ölçümle izlenmesi ve korunmasını sağlamak, en az doğru projelendirme kadar önemlidir. MBO Yapı Sistem, binalarınızın “nefes almaya” devam etmesi için arıza bekleyen değil, arızayı önleyen proaktif bir bakım ve işletme altyapısı sunar.",
    points: [
      {
        term: "Kestirimci ve Önleyici Bakım",
        text:
          "Chiller, AHU, UPS, Jeneratör ve pano sistemlerinin termal ölçümlerinin yapılması, aşınan parçaların arıza vermeden tespiti.",
      },
      {
        term: "Sistem Optimizasyonu (Retro-Commissioning)",
        text:
          "Mevcut binalarda zamanla azalan enerji verimliliğini artırmak için otomasyon senaryolarının güncellenmesi ve iyileştirme yatırımları (Capex) çıkarılması.",
      },
      {
        term: "Teknik İşletme",
        text:
          "Tesisinizin elektromekanik yönetiminin profesyonel ekiplerimiz tarafından, iş sağlığı ve güvenliği standartlarına uygun olarak yürütülmesi.",
      },
    ],
  },

  {
    slug: "ruhsat-projeleri",
    index: "10",
    title: "Ruhsat Projeleri",
    pageTitle: "Ruhsat Projeleri: Hazırlık ve Koordinasyon",
    seoTitle: "Elektrik, Mekanik ve Statik Ruhsat Projeleri – MBO Yapı",
    description:
      "Villa ve konut projelerinde elektrik, mekanik ve statik ruhsat projelerinin hazırlanması ve koordinasyonu: uygulamada sorun çıkarmayan kararlar.",
    summary:
      "Villa ve konut projelerinde elektrik, mekanik ve statik ruhsat projelerinin hazırlanması ve koordinasyonu: uygulamada sorun çıkarmayan kararlar.",
    lead:
      "Ruhsat projesi bir formalite değil, binanın nasıl yapılacağının ilk planıdır. Villa ve konut projelerinde elektrik, mekanik ve statik ruhsat projelerinin, ilgili meslek odasına kayıtlı yetkili müellif mühendislerle hazırlanmasını ve koordinasyonunu üstleniriz; projeleri müellifler imzalar. Mimari projeyle eş zamanlı çalışır, uygulamada mimariyi değiştirecek kararları ruhsat aşamasında netleştiririz.",
    points: [
      {
        term: "Elektrik ruhsat projesi",
        text: "Yük listesi, kurulu güç ve talep gücü; ana pano, sayaç ve jeneratör yeri.",
      },
      {
        term: "Mekanik ruhsat projesi",
        text: "Isı kaynağı ve teknik oda, havalandırma, sıhhi tesisat; şaft ve tesisat geçişleri.",
      },
      {
        term: "Statik ruhsat projesi",
        text: "Yetkili statik mühendisle koordineli.",
      },
      {
        term: "Koordinasyon",
        text: "Mimar ve proje ekibiyle disiplinler arası uyum, revizyonların takibi.",
      },
    ],
    decisions: {
      title: "Ruhsatta ezbere verilmeyecek 6 karar",
      items: [
        "Isı kaynağı ve teknik oda yeri",
        "Şaft ve tesisat geçişleri",
        "Ana pano, sayaç ve jeneratör yeri",
        "Kurulu güç ve talep gücü, güneş paneli dahil",
        "Havuz varsa makine dairesi",
        "Asma tavan kotları",
      ],
      note:
        "Bu kararlar ruhsatta geçiştirilirse uygulamada şaft, tavan ve teknik oda için mimari değişir. Ruhsat ile uygulama arasındaki fark büyürse iskân aşamasında sorun çıkabilir.",
    },
    steps: {
      title: "Nasıl çalışıyoruz",
      items: [
        { t: "İhtiyaç listesi", s: "Mimari projeyle birlikte elektrik ve mekanik ihtiyaçlar netleşir." },
        { t: "Ruhsat projeleri", s: "Elektrik, mekanik ve statik projeler yetkili müelliflerce hazırlanır; koordinasyonu biz yürütürüz." },
        { t: "Onay süreci", s: "Revizyonlar takip edilir." },
        { t: "İsteğe bağlı", s: "Uygulama projesi, uygulama ve devreye alma." },
      ],
    },
    quote: "Ruhsat Projeleri",
    related: [
      { label: "Ruhsat Öncesi Elektrik ve Mekanik İhtiyaç Listesi", href: "/dokuman-merkezi/ruhsat-oncesi-ihtiyac-listesi/" },
      { label: "Enerji Sürekliliği: yedek güç ve EV şarj altyapısı", href: "/sistemler/enerji-surekliligi/" },
    ],
    service: true,
  },
];

// Her hizmet sayfasının altında tekrarlanan kapanış — mevcut sitedeki metin.
export const serviceClosing = {
  title: "Neden MBO Yapı Sistem?",
  text:
    "Sadece kurulum yapmıyor, projenin devreye alma (commissioning) ve işletme aşamasında yaşanabilecek krizleri öngörerek, şantiye ve bakım dostu “uygulanabilir” mühendislik üretiyoruz.",
};
