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
      "Mimari projelere tam uyumlu olarak; AG/OG güç dağıtımı, kesintisiz enerji (UPS) ve tüm zayıf akım (Yangın, CCTV, Data) sistemlerini anahtar teslim kuruyoruz.",
    lead:
      "Mega projelerin kalbi, kesintisiz ve güvenli enerji altyapısıdır. MBO Yapı Sistem olarak, dizayn ofislerden gelen konsept elektrik projelerini sahanın dinamiklerine uygun uygulama projelerine (Shop-Drawing) çeviriyor; otel, finans merkezi ve endüstriyel tesislerin güç altyapılarını sıfır hata toleransıyla hayata geçiriyoruz. Butik projelerde (Fit-Out) ise yük hesaplamalarından as-built teslimine kadar uçtan uca taahhüt hizmeti sunuyoruz.",
    points: [
      {
        term: "Uygulama Mühendisliği ve Koordinasyon",
        text:
          "Mekanik ve mimari gruplarla sahada oluşabilecek çakışmaları (clash) önceden tespit ederek; pano dizaynları ve kablo taşıma (tava/busbar) güzergahlarının optimize edilmesi.",
      },
      {
        term: "AG / OG ve Dağıtım Sistemleri",
        text:
          "Uluslararası normlara (IEC, EN) uygun Orta Gerilim trafo merkezleri, ana/tali dağıtım panoları ve kompanzasyon sistemlerinin anahtar teslim kurulumu.",
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
      "Büyük ölçekli yapıların doğru “nefes alması”, enerji verimliliğinin sağlanması ve konfor şartlarının korunması üst düzey bir mekanik mühendislik gerektirir. MBO Yapı Sistem olarak; AVM, otel ve endüstriyel tesisler gibi mega projelerde, mevcut dizaynları sahaya tam uyumlu uygulama projelerine (Shop-Drawing) dönüştürüyor ve kusursuz bir şekilde taahhüt ediyoruz. Zincir restoran ve mağaza (Fit-Out) projelerinde ise sıfırdan kapasite hesaplarını ve mekanik projelendirmeyi bizzat yaparak anahtar teslim çözümler sunuyoruz.",
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
          "Sistem/Server odaları için kalıntısız FM200 ve Novec gazlı söndürme çözümleri, hassas adresli yangın algılama altyapıları ve acil durum senaryolarının (asansör kuyulama, duman tahliye vb.) saha entegrasyonu.",
      },
      {
        term: "IP CCTV ve Zayıf Akım Sistemleri",
        text:
          "Tesis genelinde uçtan uca IP tabanlı güvenlik kamera sistemleri, biyometrik/kartlı geçiş kontrol altyapıları ile mega projelerin dijital omurgasını oluşturan fiber optik ve bakır (Cat6/Cat7) yapısal kablolama çözümleri.",
      },
    ],
  },

  {
    slug: "proje-tasarimi-muhendislik",
    index: "04",
    title: "Proje Tasarımı & Mühendislik",
    pageTitle: "Elektromekanik Proje Tasarımı ve Mühendislik Hizmetleri",
    summary:
      "AVM, plaza, otel, rezidans ve endüstriyel tesisler için elektrik, mekanik ve otomasyon projelerini ulusal ve uluslararası standartlara uygun olarak tasarlıyoruz. Keşif, metraj ve maliyet analizleriyle yatırımın en doğru şekilde planlanmasını sağlıyoruz.",
    lead:
      "Bir projenin sahadaki başarısı, masada yapılan mühendisliğin kalitesiyle ölçülür. MBO Yapı Sistem olarak, AVM, plaza, otel ve endüstriyel tesisler için ulusal ve uluslararası standartlara (IEC, NFPA vb.) tam uyumlu, uygulanabilir ve optimize edilmiş elektromekanik projeler tasarlıyoruz.",
    points: [
      {
        term: "Uygulanabilir Tasarım",
        text:
          "Sadece masa başında kağıt üzerinde “çizim” yapmıyoruz. Sahada uygulanması zor veya maliyetli olan teorik hataları önceden fark ediyor, tamamen şantiye ve bakım dostu projeler üretiyoruz.",
      },
      {
        term: "Devreye Alma (Commissioning) Disiplini",
        text:
          "Mega proje yöneticiliğinden gelen tecrübemizle; sistemlerin sadece kurulmasını değil, birbiriyle entegre ve hatasız çalışmasını (işletmeye geçiş krizlerini öngörerek) taahhüt ediyoruz.",
      },
      {
        term: "Proaktif Kriz Yönetimi",
        text:
          "Mimari ve mekanik/elektrik disiplinler arasındaki olası çakışmaları (clash) tasarım aşamasındayken çözüyoruz. Bu sayede sahada yaşanabilecek zaman ve bütçe kayıplarını sıfıra indiriyoruz.",
      },
    ],
  },

  {
    slug: "test-devreye-alma",
    index: "05",
    title: "Test & Devreye Alma",
    pageTitle: "Test, Devreye Alma ve İşletmeye Geçiş Yönetimi",
    summary:
      "Kurulan sistemlerin senaryo testlerini yapıyor, otomasyon haberleşmelerini doğrulayarak tesisin sorunsuz işletmeye geçişini sağlıyoruz.",
    lead:
      "Bir projenin en kritik ve sancılı evresi, kağıt üzerindeki tasarımların sahada can bulduğu o ilk anlardır. MBO Yapı Sistem olarak, Zorlu ve Emaar gibi dev tesislerin işletmeye alınma süreçlerindeki tecrübemizle; elektromekanik ve otomasyon sistemlerinin uluslararası standartlara (ASHRAE, IEC) göre fonksiyonel testlerini yapıyor, tesisinizin sıfır hatayla “işletmeye geçişini” (Commissioning) sağlıyoruz.",
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
      "Sahadaki imalatların denetlenmesi, kesin hesapların yönetilmesi ve kalite kontrol süreçlerinde işveren adına tam yetkili teknik müşavirlik sunuyoruz.",
    lead:
      "Yatırımınızın her kuruşunun karşılığını aldığınızdan ve projenin kalite standartlarından sapmadığından emin olmak için, işveren tarafında “tam yetkili” mühendislik aklınız oluyoruz. MBO Yapı Sistem, mega projelerdeki şeflik ve yönetim tecrübesiyle sahadaki imalatları sizin adınıza denetler, finansal ve teknik riskleri minimize eder.",
    points: [
      {
        term: "Saha ve Taşeron Denetimi",
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
    pageTitle: "Anahtar Teslim Mağaza ve Kafe (Fit-Out) Taahhüdü",
    summary:
      "AVM ve cadde mağazaları, restoran ve kafeler için mimari ince işler, elektrik ve mekanik imalatların tamamını tek elden, AVM yönetim onaylı olarak anahtar teslim yapıyoruz.",
    lead:
      "AVM veya ticari alanlardaki mağaza, restoran ve kafelerinizi en kısa sürede ticarete açıyoruz. MBO Yapı Sistem olarak, Fit-Out projelerinde sadece süreç yönetmiyor; mimari ince işler, elektrik ve mekanik (HVAC) imalatların tamamını sahada bizzat uyguluyor ve AVM yönetim onaylı olarak anahtar teslim taahhüt ediyoruz.",
    subtitle: "AVM ve Ticari Alanlar İçin Elektromekanik ve Mimari Çözümler",
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
      "Zamanın maliyet olduğu endüstriyel tesislerde ve ticari işletmelerde, kritik bileşenlerin arızalanması büyük operasyonel kayıplara yol açar. Tesisinizin kalbi olan elektromekanik ve otomasyon ekipmanlarının doğru analizini yapıyor, global tedarik ağımızla en doğru donanımı en hızlı şekilde sahaya ulaştırıyoruz.",
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
      "Sistemlerin ilk günkü performansıyla çalışması için proaktif önleyici bakım, iyileştirme (Capex) çalışmaları yapıyor ve profesyonel teknik işletme hizmeti sunuyoruz.",
    lead:
      "Kurulan sistemlerin yatırım ömrünü uzatmak ve ilk günkü enerji verimiyle çalışmasını sağlamak, en az doğru projelendirme kadar önemlidir. MBO Yapı Sistem, binalarınızın “nefes almaya” devam etmesi için arıza bekleyen değil, arızayı önleyen proaktif bir bakım ve işletme altyapısı sunar.",
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
];

// Her hizmet sayfasının altında tekrarlanan kapanış — mevcut sitedeki metin.
export const serviceClosing = {
  title: "Neden MBO Mühendislik?",
  text:
    "Sadece kurulum yapmıyor, projenin devreye alma (commissioning) ve işletme aşamasında yaşanabilecek krizleri öngörerek, şantiye ve bakım dostu “uygulanabilir” mühendislik üretiyoruz.",
};
