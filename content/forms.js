// Doküman Merkezi — sahada doldurulmak üzere hazırlanmış teknik formlar.
//
// Bu formlar MBO Yapı Sistem'in saha tecrübesinden yazılmıştır; hiçbir
// üçüncü taraf dokümanından alınmamıştır. Sayfa olarak yayımlanırlar:
// hem Google'da bulunur, hem tarayıcıdan doğrudan yazdırılıp sahaya
// götürülebilir (sayfanın kendi baskı düzeni vardır).
//
// blocks:
//   { t: "p",     x: "paragraf" }
//   { t: "h2",    x: "bölüm başlığı" }
//   { t: "fields", x: [["Etiket", "genişlik"], ...] }   doldurulacak künye alanları
//   { t: "check", x: ["madde", ...] }                   işaretlenecek kontrol maddeleri
//   { t: "table", x: { head: [...], rows: [[...], ...] } }
//   { t: "sign",  x: ["İmza alanı", ...] }
//   { t: "note",  x: "uyarı kutusu" }

export const forms = [
  {
    slug: "elektrik-tesisati-devreye-alma-kontrol-listesi",
    code: "MBO-F-01",
    rev: "Rev. 1",
    topic: "Devreye alma",
    title: "Elektrik Tesisatı Test ve Devreye Alma Kontrol Listesi",
    summary:
      "Alçak gerilim tesisatının işletmeye alınmadan önce gözle muayenesi, ölçümleri ve fonksiyon testleri için sahada doldurulan kontrol listesi.",
    intro:
      "Bir elektrik tesisatı, enerji verildiği anda değil; gözle muayenesi tamamlandığında, ölçümleri kayıt altına alındığında ve fonksiyon testleri senaryolarıyla birlikte doğrulandığında işletmeye hazır sayılır. Aşağıdaki liste, TS EN / IEC 60364-6 doğrulama mantığını saha pratiğiyle birleştirir; sırasıyla doldurulduğunda hem kabul sürecinin belgesi hem de as-built dosyasının eki olur.",
    blocks: [
      { t: "h2", x: "Tesis ve proje bilgileri" },
      { t: "fields", x: [
        ["Proje / tesis adı", "wide"],
        ["İşveren", ""],
        ["Yüklenici", ""],
        ["Mahal / blok / kat", ""],
        ["Pano adı ve numarası", ""],
        ["Kontrol tarihi", "narrow"],
        ["Kontrolü yapan", ""],
      ]},

      { t: "h2", x: "A. Gözle muayene (enerji verilmeden önce)" },
      { t: "p", x: "Bu bölüm enerji verilmeden tamamlanır. Bir madde uygun değilse test aşamasına geçilmez; önce giderilir." },
      { t: "check", x: [
        "Uygulama projesine (shop-drawing) uygunluk — sahadaki durum en son onaylı revizyonla birebir mi?",
        "Kablo kesitleri ve tipleri proje ile uyumlu; besleme uzunluklarına göre gerilim düşümü kabul sınırında",
        "Kablo taşıma sistemleri (tava, kanal, busbar) askılı, topraklanmış, dolgu oranı aşılmamış",
        "Pano yerleşimi: önünde ve etrafında mevzuata uygun çalışma açıklığı bırakılmış",
        "Koruma cihazlarının anma akımı ve kesme kapasitesi, hesaplanan kısa devre akımına uygun",
        "Kaçak akım koruma (RCD) tipi ve hassasiyeti mahal kullanımına uygun seçilmiş",
        "Topraklama ve eşpotansiyel bağlantıları eksiksiz; iletken kesitleri projeye uygun",
        "Bütün klemens ve baralarda tork kontrolü yapılmış, işaretlenmiş",
        "Etiketleme tam: pano, devre, klemens, kablo uçları ve acil durum butonları",
        "IP koruma sınıfı sağlanmış; kullanılmayan açıklıklar kapatılmış, kablo geçişleri sızdırmaz",
        "Yangın kompartımanı geçişlerinde yangın durdurucu (fire-stop) dolgular uygulanmış",
        "Pano içi temizlik yapılmış, imalat artığı ve yabancı malzeme kalmamış",
      ]},

      { t: "h2", x: "B. Ölçüm ve testler" },
      { t: "p", x: "Ölçüm değerleri boş bırakılmaz; sonucu \"uygun\" olsa bile okunan değer yazılır. Değer kaydedilmeyen bir test, yapılmamış sayılır." },
      { t: "table", x: {
        head: ["Test", "Yöntem / koşul", "Ölçülen değer", "Sonuç"],
        rows: [
          ["Koruma iletkeni sürekliliği", "Düşük dirençli süreklilik ölçümü", "", ""],
          ["Yalıtım direnci", "Faz-faz, faz-nötr, faz-toprak", "", ""],
          ["Topraklama direnci", "Toprak özdirenci ve elektrot ölçümü", "", ""],
          ["Çevrim empedansı", "Faz-koruma iletkeni çevrimi", "", ""],
          ["RCD açma süresi ve akımı", "Anma akımı ve 5× anma akımında", "", ""],
          ["Faz sırası", "Üç fazlı besleme ve motor çıkışları", "", ""],
          ["Kutuplar arası gerilim / dengesizlik", "Yüksüz ve yüklü durumda", "", ""],
          ["Kompanzasyon kademeleri", "Kademe devreye girme ve güç faktörü", "", ""],
        ],
      }},

      { t: "h2", x: "C. Fonksiyon ve senaryo testleri" },
      { t: "check", x: [
        "Ana kesici ve tali kesicilerin seçicilik (selektivite) davranışı denendi",
        "Jeneratör devreye girme süresi ve yük aktarımı ölçüldü; geri dönüş senaryosu denendi",
        "UPS devreye girişi, bypass ve akü süresi doğrulandı",
        "Aydınlatma otomasyonu (KNX/DALI) senaryoları tek tek çalıştırıldı",
        "Acil aydınlatma ve yönlendirme armatürleri şebeke kesildiğinde devreye girdi",
        "Yangın alarmı geldiğinde ilgili devrelerin kesilmesi / kalması senaryosu doğrulandı",
        "Enerji izleme sayaçlarının haberleşmesi ve okunan değerleri kontrol edildi",
      ]},

      { t: "h2", x: "D. Bulgular ve kapanış" },
      { t: "table", x: {
        head: ["No", "Bulgu / eksik", "Sorumlu", "Termin", "Kapandı"],
        rows: [["1", "", "", "", ""], ["2", "", "", "", ""], ["3", "", "", "", ""], ["4", "", "", "", ""]],
      }},
      { t: "note", x: "Bütün bulgular kapanmadan tesis işletmeye devredilmez. Kapanan her madde, kapatan kişi ve tarih ile birlikte işaretlenir." },
      { t: "sign", x: ["Kontrolü yapan", "Yüklenici yetkilisi", "İşveren / kontrol teşkilatı"] },
    ],
  },

  {
    slug: "ag-pano-kabul-muayene-formu",
    code: "MBO-F-02",
    rev: "Rev. 1",
    topic: "Kabul ve muayene",
    title: "AG Dağıtım Panosu Kabul ve Muayene Formu",
    summary:
      "Alçak gerilim dağıtım panolarının fabrika çıkışında veya sahaya kabulünde mekanik, elektriksel ve dokümantasyon yönünden muayenesi.",
    intro:
      "Panonun sahaya gelmiş olması kabul edildiği anlamına gelmez. Yanlış seçilmiş bir kesme kapasitesi veya eksik bir etiket, yıllar sonra arıza anında ortaya çıkar ve o noktada düzeltmenin maliyeti çok yüksektir. Bu form, panoyu devreye almadan önce bir kez ve doğru şekilde sorgulamak içindir.",
    blocks: [
      { t: "h2", x: "Pano künyesi" },
      { t: "fields", x: [
        ["Proje / tesis", "wide"],
        ["Pano adı ve kodu", ""],
        ["Üretici", ""],
        ["Pano tipi (sabit / çekmeceli)", ""],
        ["Anma akımı In (A)", "narrow"],
        ["Kısa devre dayanımı Icw / Icc (kA)", "narrow"],
        ["Koruma sınıfı (IP / IK)", "narrow"],
        ["Muayene tarihi", "narrow"],
      ]},

      { t: "h2", x: "A. Mekanik muayene" },
      { t: "check", x: [
        "Gövde ölçüleri, kapı yönleri ve montaj delikleri projeye uygun",
        "Boya kalitesi ve yüzey bütünlüğü sağlam; nakliye hasarı yok",
        "Kapı contaları, kilit ve menteşeler çalışır durumda; IP sınıfı bozulmamış",
        "Havalandırma / fan ve filtre düzeni ısı hesabına uygun",
        "Bara sistemi ölçüleri, mesnetleri ve faz mesafeleri uygun",
        "Çekmeceli hücrelerde giriş-çıkış ve kilitleme mekanizmaları denendi",
        "Kaldırma kancaları ve taşıma noktaları mevcut",
      ]},

      { t: "h2", x: "B. Elektriksel muayene" },
      { t: "check", x: [
        "Kesici ve şalter anma değerleri tek hat şemasıyla birebir uyuşuyor",
        "Kesme kapasiteleri, hesaplanan kısa devre akımının üzerinde",
        "Seçicilik (selektivite) çalışması yapılmış ve ayarlar buna göre girilmiş",
        "Koruma rölesi ayar değerleri yazılı olarak teslim edildi",
        "Kaçak akım korumaları doğru tip ve hassasiyette",
        "Yardımcı gerilim, ölçü trafoları ve sayaç bağlantıları doğru",
        "Topraklama barası sürekli; bütün metal aksam baraya bağlı",
        "Tork kontrolü yapılmış ve işaretlenmiş",
        "Yalıtım direnci ve dielektrik dayanım testleri yapıldı, kayıt altına alındı",
      ]},

      { t: "h2", x: "C. Etiketleme ve dokümantasyon" },
      { t: "check", x: [
        "Pano künye etiketi (üretici, tip, In, Icc, IP, üretim yılı) kalıcı şekilde takılmış",
        "Her devrenin etiketi mahalle uygun ve okunaklı; geçici etiket kullanılmamış",
        "Tek hat şeması pano içinde, cebinde ve dijital olarak teslim edildi",
        "Klemens listesi ve kablo uç numaralandırması dokümanla eşleşiyor",
        "Uyarı ve ikaz levhaları (gerilim, topraklama, yetkili müdahale) mevcut",
        "Test raporları, garanti belgesi ve yedek parça listesi dosyaya eklendi",
      ]},

      { t: "h2", x: "Sonuç" },
      { t: "check", x: [
        "Kabul edildi — eksiksiz",
        "Şartlı kabul — aşağıdaki eksikler termine bağlandı",
        "Reddedildi — pano devreye alınmayacak",
      ]},
      { t: "table", x: {
        head: ["No", "Eksik / uygunsuzluk", "Sorumlu", "Termin"],
        rows: [["1", "", "", ""], ["2", "", "", ""], ["3", "", "", ""]],
      }},
      { t: "sign", x: ["Muayeneyi yapan", "Üretici yetkilisi", "İşveren"] },
    ],
  },

  {
    slug: "yangin-algilama-devreye-alma-test-formu",
    code: "MBO-F-03",
    rev: "Rev. 1",
    topic: "Yangın güvenliği",
    title: "Yangın Algılama Sistemi Devreye Alma ve Senaryo Test Formu",
    summary:
      "Yangın algılama ve ihbar sisteminin cihaz bazında testi ile binadaki diğer sistemlerle olan acil durum senaryolarının doğrulanması.",
    intro:
      "Yangın algılama sistemi, tek başına çalıştığı için değil; alarm anında binanın geri kalanını doğru yönettiği için işe yarar. Dedektörün ötmesi yetmez — asansörün kuyulama yapması, duman tahliyesinin çalışması, kapıların açılması veya kilitlenmesi ve anonsun doğru bölgeye gitmesi gerekir. Bu form, cihaz testleriyle senaryo testlerini birlikte ele alır.",
    blocks: [
      { t: "h2", x: "Sistem künyesi" },
      { t: "fields", x: [
        ["Proje / tesis", "wide"],
        ["Panel markası ve modeli", ""],
        ["Çevrim (loop) sayısı", "narrow"],
        ["Toplam adreslenebilir cihaz", "narrow"],
        ["Yazılım / firmware sürümü", ""],
        ["Test tarihi", "narrow"],
      ]},

      { t: "h2", x: "A. Saha cihazları" },
      { t: "p", x: "Her cihaz fiziksel olarak tetiklenerek test edilir; panelde doğru adres ve doğru mahal adıyla göründüğü teyit edilir." },
      { t: "table", x: {
        head: ["Cihaz tipi", "Adet", "Test edilen", "Panelde doğru adres", "Sonuç"],
        rows: [
          ["Optik duman dedektörü", "", "", "", ""],
          ["Isı / kombine dedektör", "", "", "", ""],
          ["Aspirasyonlu algılama", "", "", "", ""],
          ["Yangın alarm butonu", "", "", "", ""],
          ["Siren / flaşör", "", "", "", ""],
          ["Akış / kapalı vana anahtarı", "", "", "", ""],
          ["Gaz söndürme modülü", "", "", "", ""],
        ],
      }},

      { t: "h2", x: "B. Panel fonksiyonları" },
      { t: "check", x: [
        "Alarm, arıza, devre dışı ve test durumları panelde doğru gösteriliyor",
        "Çevrim kopukluğu ve kısa devre simüle edildi; panel doğru arıza verdi",
        "Ana besleme kesildiğinde akü devreye girdi; akü süresi ölçüldü",
        "Zone / mahal isimleri mimari mahal listesiyle birebir eşleşiyor",
        "Gecikme (T1/T2) süreleri senaryoya uygun ayarlandı ve yazılı teslim edildi",
        "Olay kayıt (log) defteri çalışıyor, tarih-saat doğru",
        "Uzaktan izleme / BMS entegrasyonu üzerinden alarm görülüyor",
      ]},

      { t: "h2", x: "C. Bina entegrasyon senaryoları" },
      { t: "p", x: "Bu bölüm gerçek alarm verilerek, bina genelinde ve ilgili disiplinlerin katılımıyla denenir." },
      { t: "table", x: {
        head: ["Senaryo", "Beklenen davranış", "Gözlenen", "Sonuç"],
        rows: [
          ["Kat alarmı", "Sesli/ışıklı uyarı ilgili bölgede", "", ""],
          ["Asansör kuyulama", "Kabin tahliye katına inip kapı açık bekler", "", ""],
          ["Duman tahliye / basınçlandırma", "Fanlar devreye girer, damperler konumlanır", "", ""],
          ["Kartlı geçiş kapıları", "Kaçış yönünde serbest kalır", "", ""],
          ["Acil anons", "Doğru bölgeye doğru mesaj", "", ""],
          ["Klima santralleri", "Senaryoya göre durur veya çalışır", "", ""],
          ["Gazlı söndürme", "Ön alarm, geri sayım, boşaltma kilidi", "", ""],
          ["Yangın pompası", "Basınç düşünce otomatik devreye girer", "", ""],
        ],
      }},
      { t: "note", x: "Gazlı söndürme bölgelerinde boşaltma testi gerçek gazla yapılmaz; sistem, boşaltma kilidi devredeyken sinyal seviyesinde doğrulanır. Oda sızdırmazlık testi ayrıca yapılır ve raporu bu forma eklenir." },

      { t: "h2", x: "Bulgular ve kapanış" },
      { t: "table", x: {
        head: ["No", "Bulgu", "Disiplin", "Sorumlu", "Termin"],
        rows: [["1", "", "", "", ""], ["2", "", "", "", ""], ["3", "", "", "", ""]],
      }},
      { t: "sign", x: ["Testi yapan", "Sistem yüklenicisi", "İşveren / yetkili"] },
    ],
  },

  {
    slug: "periyodik-bakim-kontrol-formu",
    code: "MBO-F-04",
    rev: "Rev. 1",
    topic: "Bakım ve işletme",
    title: "Periyodik Bakım Kontrol Formu — Elektrik ve Mekanik",
    summary:
      "Tesisin elektrik ve mekanik ekipmanları için aylık ve yıllık periyodik bakım turlarında doldurulan, bulguları aksiyona bağlayan kontrol formu.",
    intro:
      "Bakımın değeri, yapılmış olmasında değil kayıt altına alınmasındadır. Aynı ekipmanda üst üste tekrarlayan bir bulgu, arıza gelmeden önce yatırım kararı çıkarmanızı sağlar. Bu form iki işi birden yapar: turu yönlendirir ve bulguyu sahipli bir aksiyona dönüştürür.",
    blocks: [
      { t: "h2", x: "Tur bilgileri" },
      { t: "fields", x: [
        ["Tesis", "wide"],
        ["Dönem (ay / yıl)", "narrow"],
        ["Bakım tipi (aylık / yıllık)", ""],
        ["Bakımı yapan", ""],
        ["Tarih", "narrow"],
      ]},

      { t: "h2", x: "A. Elektrik sistemleri" },
      { t: "table", x: {
        head: ["Ekipman", "Kontrol", "Ölçüm / gözlem", "Durum"],
        rows: [
          ["AG / OG panolar", "Termal kamera taraması, bağlantı ısınması", "", ""],
          ["Panolar", "Tork kontrolü, temizlik, conta ve kilit", "", ""],
          ["Kompanzasyon", "Kademeler, kondansatör kapasitesi, güç faktörü", "", ""],
          ["Jeneratör", "Yüklü çalıştırma, yakıt, antifriz, akü, egzoz", "", ""],
          ["UPS", "Akü iç direnci, boşalma testi, fan ve filtre", "", ""],
          ["Topraklama", "Direnç ölçümü, bağlantı ve korozyon kontrolü", "", ""],
          ["Aydınlatma", "Arızalı armatür, acil aydınlatma akü testi", "", ""],
          ["Enerji izleme", "Sayaç haberleşmesi, tüketim eğilimi", "", ""],
        ],
      }},

      { t: "h2", x: "B. Mekanik sistemler" },
      { t: "table", x: {
        head: ["Ekipman", "Kontrol", "Ölçüm / gözlem", "Durum"],
        rows: [
          ["Chiller / soğutma grubu", "Basınçlar, yaklaşma sıcaklıkları, kompresör akımı", "", ""],
          ["Klima santrali (AHU)", "Filtre basınç farkı, kayış, rulman, damper", "", ""],
          ["Fancoil", "Filtre, drenaj, vana ve motor sesi", "", ""],
          ["Pompalar", "Titreşim, salmastra, akım, basma yüksekliği", "", ""],
          ["Kazan / ısıtma", "Brülör, baca gazı, emniyet ventili", "", ""],
          ["Havalandırma fanları", "Debi, titreşim, yangın damperi tatbikatı", "", ""],
          ["Yangın pompası", "Haftalık otomatik çalıştırma kaydı", "", ""],
          ["Su sistemi", "Yumuşatma, filtre, depo temizlik tarihi", "", ""],
        ],
      }},

      { t: "h2", x: "C. Otomasyon ve zayıf akım" },
      { t: "check", x: [
        "BMS üzerinde alarm listesi gözden geçirildi; sürekli aktif alarmlar kapatıldı",
        "Set değerleri mevsime ve kullanıma göre gözden geçirildi",
        "Haberleşme kopukluğu olan cihazlar tespit edildi",
        "Yangın algılama panelinde bekleyen arıza yok",
        "CCTV kayıt süresi ve disk sağlığı kontrol edildi",
        "Kartlı geçiş yedek besleme ve kapı kilit durumları kontrol edildi",
      ]},

      { t: "h2", x: "D. Bulgular ve aksiyon" },
      { t: "table", x: {
        head: ["No", "Bulgu", "Risk", "Önerilen aksiyon", "Termin"],
        rows: [["1", "", "", "", ""], ["2", "", "", "", ""], ["3", "", "", "", ""], ["4", "", "", "", ""]],
      }},
      { t: "note", x: "Mevzuat gereği yetkili kişilerce yapılması gereken periyodik kontroller bu formun yerine geçmez. 4 Şubat 2024'te yürürlüğe giren düzenlemeyle, periyodik kontrol hizmeti için işveren ile yetkili kişi arasında kontrol tarihinden en geç bir gün önce İSG-KATİP üzerinden sözleşme yapılması zorunludur; sözleşmesiz düzenlenen raporlar geçersiz sayılır." },
      { t: "sign", x: ["Bakımı yapan", "Tesis yöneticisi"] },
    ],
  },

  {
    slug: "as-built-isletmeye-devir-dosyasi",
    code: "MBO-F-05",
    rev: "Rev. 1",
    topic: "İşletmeye devir",
    title: "As-Built ve İşletmeye Devir Dosyası İçerik Listesi",
    summary:
      "Projenin işletmeye devrinde teslim edilmesi gereken çizim, rapor, garanti ve eğitim kayıtlarının eksiksiz kontrol listesi.",
    intro:
      "Bir projenin bittiği an, son kablonun çekildiği an değil; tesisi devralan ekibin onu sizin kadar tanıdığı andır. Devir dosyası eksik teslim edilen tesislerde ilk arıza, çoğu zaman teknik bir sorun değil bir bilgi sorunudur. Bu liste, devir dosyasının içinde ne olması gerektiğini tek sayfada toplar.",
    blocks: [
      { t: "h2", x: "Proje bilgileri" },
      { t: "fields", x: [
        ["Proje / tesis", "wide"],
        ["İşveren", ""],
        ["Devir tarihi", "narrow"],
        ["Dosya sürümü", "narrow"],
      ]},

      { t: "h2", x: "A. Çizimler" },
      { t: "check", x: [
        "Elektrik as-built projeleri (aydınlatma, priz, kuvvet, zayıf akım) — güncel revizyonla",
        "Mekanik as-built projeleri (havalandırma, ısıtma-soğutma, sıhhi tesisat, yangın)",
        "Tek hat şemaları ve pano yerleşim planları",
        "Kablo tava / kanal güzergâh planları ve kesitler",
        "Topraklama ve yıldırımdan korunma planı",
        "Otomasyon mimari şeması ve nokta listesi (I/O list)",
        "Çizimlerin hem düzenlenebilir hem PDF formatında teslimi",
      ]},

      { t: "h2", x: "B. Teknik dokümanlar" },
      { t: "check", x: [
        "Cihaz listesi: marka, model, seri no, kapasite, montaj yeri",
        "Pano kabul ve muayene formları",
        "Test, ölçüm ve devreye alma raporları (elektrik, mekanik, yangın)",
        "Yangın senaryosu ve entegrasyon test kayıtları",
        "Koruma rölesi ve kesici ayar değerleri listesi",
        "Otomasyon set değerleri ve çalışma senaryoları dokümanı",
        "Yazılım yedekleri ve lisans bilgileri (BMS, yangın paneli, UPS)",
      ]},

      { t: "h2", x: "C. Garanti ve ticari" },
      { t: "check", x: [
        "Cihaz garanti belgeleri ve garanti başlangıç tarihleri",
        "Yetkili servis listesi ve iletişim bilgileri",
        "Önerilen kritik yedek parça listesi ve tedarik süreleri",
        "Bakım periyotları tablosu (üretici önerisi + mevzuat gereği)",
        "Kesin hesap ve hakediş dosyası referansı",
      ]},

      { t: "h2", x: "D. İşletme ve eğitim" },
      { t: "check", x: [
        "İşletme ve bakım el kitabı (mahal bazlı, sade dille yazılmış)",
        "Acil durum müdahale talimatları (elektrik kesintisi, yangın, su baskını)",
        "Tesis ekibine verilen eğitimlerin kayıt ve katılım listesi",
        "Şifre / erişim yetkileri devir tutanağı",
        "Alarm listesi ve öncelik seviyeleri",
      ]},

      { t: "h2", x: "Devir tutanağı" },
      { t: "table", x: {
        head: ["Bölüm", "Teslim edildi", "Eksik", "Açıklama"],
        rows: [["A. Çizimler", "", "", ""], ["B. Teknik dokümanlar", "", "", ""], ["C. Garanti ve ticari", "", "", ""], ["D. İşletme ve eğitim", "", "", ""]],
      }},
      { t: "sign", x: ["Teslim eden", "Teslim alan", "Kontrol teşkilatı"] },
    ],
  },
];
