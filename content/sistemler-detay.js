// Sistem Çözümleri — zengin içerik (paket başına).
// flow      : "Sistem nasıl çalışır?" şeması (adım adım)
// trends    : güncel gelişmeler ve yapay zekâ — sektördeki eğilim; "projeye göre eklenebilir"
// scenarios : örnek uygulama SENARYOLARI — tamamlanmış proje iddiası değildir
// faq       : sık sorulan sorular
//
// Kural: sayı, doğruluk oranı, koruma sınıfı, standart/mevzuat atfı, sertifika ve
// bayilik iddiası yok. Teknik değer yalnızca üretici kataloğundan, kaynakla eklenir.

export const detailNotes = {
  trendsNote:
    "Aşağıdakiler sektördeki genel gelişmelerdir. Hangilerinin projenize uygun olduğu keşifte, ihtiyaç ve bütçeye göre birlikte belirlenir.",
  scenariosNote:
    "Aşağıdakiler örnek kullanım senaryolarıdır; tamamlanmış proje referansı değildir.",
};

export const systemDetails = {
  "akilli-otopark": {
    flow: [
      { t: "Giriş", s: "Kamera plakayı okur; kayıtlı araç geçer, misafir girişi kaydedilir" },
      { t: "Doluluk algılama", s: "Park yeri ya da kat bazında doluluk bilgisi toplanır" },
      { t: "Yönlendirme", s: "Giriş ve kat tabelaları sürücüyü boş yere yönlendirir" },
      { t: "Ödeme", s: "Otomatik ödeme noktasında ya da işletmenin seçtiği altyapıyla alınır" },
      { t: "Yönetim", s: "Giriş-çıkış kayıtları, doluluk geçmişi, abonelik ve tarife yönetilir" },
    ],
    scenarios: [
      { term: "AVM veya plaza", text: "Girişte plaka okunur, kat tabelaları boş yeri gösterir, ödeme çıkışta alınır; yönetim doluluk geçmişini ve kayıtları izler." },
      { term: "Rezidans / site", text: "Sakinlerin abonelikleri ve misafir araçları ayrı tanımlanır; giriş-çıkış kayıtları yönetim yazılımında tutulur." },
      { term: "Hastane veya ofis binası", text: "Çalışan, ziyaretçi ve servis araçları ayrı kullanıcı grupları olarak tanımlanır; doluluk bilgisi girişte ve katlarda gösterilir." },
    ],
    faq: [
      { q: "Mevcut bariyerlerle çalışır mı?", a: "Keşifte mevcut bariyer ve kumanda yapısı incelenir; uyum seçilen sisteme göre belirlenir, gerekirse bariyer de pakete alınır." },
      { q: "Abone ve misafir girişleri ayrılabilir mi?", a: "Bu ayrım çoğu sistemde yönetim yazılımında yapılır; seçilen üründe keşif sırasında teyit edilir." },
      { q: "Kurulum ne kadar sürer?", a: "Süre otoparkın büyüklüğüne ve tedarik süresine bağlıdır; keşiften sonra iş programıyla birlikte bildirilir." },
      { q: "Sistemi siz mi üretiyorsunuz?", a: "Hayır. Sistemin üreticisi değiliz; uygun ürünü seçip temin ediyor, ihtiyaca göre kurup devreye alıyoruz." },
      { q: "Hangi markalarla çalışıyorsunuz?", a: "Sistemin üreticisi değiliz. Kamera, bariyer, sensör ve yazılımı şartnameye ve keşif sonucuna göre seçip temin ediyoruz; seçenekler teklifte birlikte değerlendirilir." },
      { q: "Teklif için hangi bilgiler gerekir?", a: "Otoparkın türü ve yeri, giriş ve çıkış sayısı, yaklaşık park yeri sayısı, istenen modüller (plaka tanıma, doluluk ve yönlendirme, ödeme) ve mevcut bariyer, kamera ve kablo altyapısı. İlk adım keşiftir." },
    ],
  },

  "pano-cozumleri": {
    flow: [
      { t: "Keşif", s: "Yükler, motorlar ve kontrol ihtiyaçları çıkarılır. Teslim: keşif notu, yük ve nokta listesi taslağı." },
      { t: "Tasarım ve onay", s: "Tek hat şeması, pano yerleşimi ve ürün seçimi. Teslim: onaylı çizim seti, malzeme listesi." },
      { t: "İmalat ve FAT", s: "Anlaşmalı imalatçı atölyesinde üretim; sevkiyattan önce fabrika kabul testi. Teslim: FAT tutanağı." },
      { t: "Kurulum", s: "Sahada montaj, kablo bağlantıları ve etiketleme. Teslim: montaj kontrol kayıtları." },
      { t: "Devreye alma", s: "Fonksiyon, koruma ve haberleşme testleri; BMS bağlantısı nokta nokta doğrulanır. Teslim: test raporları, as-built çizimler." },
      { t: "Periyodik bakım", s: "İsteğe bağlı bakım sözleşmesiyle düzenli kontrol. Teslim: bakım raporları." },
    ],
    trends: [
      { term: "Akıllı pano ve izleme", text: "Panolara eklenen enerji analizörleri ve haberleşme modülleriyle tüketim, yük ve alarm bilgisi uzaktan izlenebilir." },
      { term: "Veriye dayalı bakım", text: "Sıcaklık ve akım gibi verilerin izlenmesi, arıza oluşmadan müdahale edilmesine yardımcı olur. Yapay zekâ destekli analiz yazılımları bu veriden anormallik yakalamayı hedefler." },
      { term: "BMS ve SCADA ile entegrasyon", text: "DDC ve MCC panoları, açık haberleşme protokolleriyle bina ve proses otomasyonuna bağlanabilir." },
      { term: "Kompanzasyonda dinamik çözümler", text: "Yük profili değişen tesislerde otomatik kademe ve izleme özellikli kompanzasyon, işletmeye esneklik sağlar." },
      { term: "Dokümantasyon ve izlenebilirlik", text: "As-built şema, etiketleme ve test raporlarının teslimi; ileride bakım ve genişletmeyi kolaylaştırır." },
    ],
    scenarios: [
      { term: "Arıtma tesisi", text: "Pompa, blower ve karıştırıcılar için MCC panosu ve kompanzasyon; seviye ve debi bilgisiyle çalışan proses otomasyonu." },
      { term: "AVM / otel", text: "Klima santralleri ve havalandırmayı yöneten DDC (SBS) panoları; ana girişte kompanzasyon ve enerji izleme." },
      { term: "Sanayi tesisi", text: "Üretim hatlarının motor kontrolü, reaktif güç yönetimi ve tüketim izlemesi için tek elden pano seti." },
    ],
    faq: [
      { q: "MCC, DDC (SBS) ve kompanzasyon panosu arasındaki fark nedir?",
        a: "MCC panosu motorları besler, korur ve kumanda eder. DDC (SBS) panosu mekanik sistemleri sensör verisine göre otomatik yönetir. Kompanzasyon panosu reaktif gücü dengeleyerek enerji kalitesini ve faturayı kontrol altında tutmaya yardımcı olur. Çoğu tesiste üçü birlikte çalışır." },
      { q: "DDC panosu ile SBS panosu aynı şey mi?",
        a: "Evet. Türkiye'de DDC panosu için SBS panosu adı da kullanılır; ikisi de mekanik sistemleri sensör verisine göre yöneten bina otomasyon panosunu anlatır." },
      { q: "Panoları siz mi üretiyorsunuz?",
        a: "Hayır. Panolar onaylanan tasarıma göre anlaşmalı imalatçı atölyesinde üretilir; sevkiyattan önce atölyede fabrika kabul testi (FAT) yapılır ve tutanakla kayda alınır. Bizim işimiz tasarım, ürün seçimi, kurulum ve devreye alma: sistemi ihtiyaca göre kurmak." },
      { q: "Mevcut panoya ekleme veya revizyon yapılabilir mi?",
        a: "Çoğu durumda yapılabilir. Panonun kapasitesi, bölmeleme yapısı ve genel durumu keşifte incelenir; uygunsa revizyon, değilse yeni pano önerilir." },
      { q: "Teklif için hangi bilgiler gerekiyor?",
        a: "Varsa tek hat şeması veya yük listesi, motor güçleri, kontrol senaryosu, pano yeri ve şartname. Bunlar elinizde yoksa keşifte birlikte çıkarırız." },
      { q: "Hangi marka ürünlerle çalışıyorsunuz?",
        a: "Üretici ya da bayi değiliz. Şartnameye ve ihtiyaca göre Siemens, ABB, Schneider Electric gibi üreticilerin ürünlerini temin edip uyguluyoruz; seçimde tedarik süresini ve servis erişimini de birlikte değerlendiriyoruz." },
      { q: "Termal kamerayla pano kontrolü yapıyor musunuz?",
        a: "Evet. Panolar yük altındayken termal kamerayla taranır; ısınan bağlantı ve elemanlar arıza ya da yangına dönüşmeden tespit edilir, bulgular fotoğraflı raporla önceliklendirilir. Bu kontrol periyodik bakım sözleşmesinin de parçasıdır." },
      { q: "Pano odası için gazlı söndürme sistemi kuruyor musunuz?",
        a: "Evet. Su kullanılamayan pano ve sunucu odaları için gazlı söndürme sistemini ihtiyaca göre seçiyor, projelendirme ve kurulum sürecini yönetiyoruz. Projelendirme ve uygulamada ilgili standartlar ve üretici gereklilikleri esas alınır." },
    ],
  },

  "otomasyon-ve-kontrol": {
    flow: [
      { t: "İhtiyaç", s: "Uygulama ve giriş/çıkış noktaları belirlenir" },
      { t: "Seçim", s: "PLC ve ürünler mühendislik destekli seçilir" },
      { t: "Tedarik", s: "Ürünler sahaya zamanında ulaştırılır" },
      { t: "Uygulama", s: "Kurulum ve yazılım desteği" },
      { t: "Devreye alma", s: "Test ve teslim" },
    ],
    trends: [
      { term: "Açık haberleşme ve IoT", text: "Modern PLC ve ürünler, ortak protokollerle üst sistemlere ve bulut izleme platformlarına bağlanabilir." },
      { term: "Uzaktan izleme ve bakım", text: "Saha cihazlarının uzaktan izlenmesi, arıza anında yerinde müdahale ihtiyacını azaltabilir." },
      { term: "Veri analizi ve yapay zekâ", text: "Toplanan proses verisi; enerji tüketimi ve bakım ihtiyacı gibi konularda analiz yapan yazılımlarla birlikte kullanılabilir." },
      { term: "Siber güvenlik", text: "Otomasyon ağlarının güvenliği, ürün seçimi kadar önemli bir başlık hâline geldi; ağ yapısı keşifte birlikte değerlendirilir." },
      { term: "Retrofit", text: "Eski bir sistemi tamamen değiştirmeden, güncel ürünlerle yenilemek çoğu tesis için daha az duruş anlamına gelir." },
    ],
    scenarios: [
      { term: "Pompa istasyonu", text: "Seviye ve debiye göre pompaları sıralı çalıştıran PLC otomasyonu." },
      { term: "Üretim hattı yenileme", text: "Eskimiş kontrol sisteminin güncel PLC ve sürücülerle, yedek parça sürekliliği düşünülerek yenilenmesi." },
      { term: "Bina teknik odası", text: "Havalandırma, pompa ve ısıtma ekipmanları için bölgesel kontrolörler ve izleme." },
    ],
    faq: [
      { q: "Üretimi durmuş bir ürün için ne yapılabilir?", a: "Önce aynı ürünün tedarik imkânı araştırılır. Bulunamazsa muadil ya da yeni nesil ürüne geçiş, sistem uyumu ve devreye alma ihtiyacıyla birlikte değerlendirilir." },
      { q: "Muadil ürün kullanmak risk midir?", a: "Uyum kontrolü yapılmadan risklidir. Haberleşme, montaj ölçüleri ve yazılım uyumu kontrol edildiğinde muadil ürün güvenle kullanılabilir." },
      { q: "Acil yedek parça ihtiyacında nasıl ilerliyorsunuz?", a: "Ürün bilgisi ve etiket fotoğrafıyla tedarik seçenekleri ve teslim süreleri hızla çıkarılır; gerekirse montaj ve devreye alma da planlanır." },
      { q: "Yalnız malzeme satın alabilir miyiz?", a: "Evet. İsterseniz montaj ve devreye almayı da üstleniriz." },
      { q: "Hangi markalarda temin ve uygulama yapıyorsunuz?", a: "Siemens, Schneider, ABB, Omron ve Mitsubishi gibi markaların ürünlerinde temin ve uygulama yapıyoruz." },
    ],
  },

  "enerji-surekliligi": {
    faq: [
      { q: "Jeneratör mü, güneş + akü mü?", a: "İkisi çoğu zaman birbirinin alternatifi değil, tamamlayıcısıdır. Karar; kritik yük listesine, kesinti profiline ve gün içi tüketime göre verilir." },
      { q: "ATS panosu ne işe yarar?", a: "Şebeke kesildiğinde yükü otomatik olarak yedek kaynağa, şebeke geri geldiğinde güvenle şebekeye aktarır." },
      { q: "Mevcut binama EV şarj istasyonu eklenebilir mi?", a: "Çoğu durumda evet. Önce bağlantı gücü, ana pano ve sayaç düzeni kontrol edilir; gerekirse yük yönetimi planlanır." },
      { q: "Sitemizde şarj istasyonu için ne gerekir?", a: "Site yönetiminin kararı, altyapı uygunluğu, sayaç ve faturalama düzeni ve kullanım kuralları birlikte planlanır." },
      { q: "Bakım neden önemli?", a: "Yedek güç sistemleri çoğu zaman beklemede durur. Periyodik test çalıştırmaları ve akü kontrolleri, sistemin kritik anda çalışmasını sağlar." },
    ],
  },

  "elektrikli-arac-sarj": {
    flow: [
      { t: "Keşif", s: "Mevcut pano ve abonelik gücü kontrol edilir" },
      { t: "Proje", s: "Şarj ünitesi, kablo güzergâhı ve koruma belirlenir" },
      { t: "Kurulum", s: "Montaj ve kablolama yapılır" },
      { t: "Yük yönetimi", s: "Birden çok şarj noktası yükü dengeli paylaşır" },
      { t: "Test ve teslim", s: "Fonksiyon testleri ve teknik rapor" },
    ],
    trends: [
      { term: "Akıllı yük yönetimi", text: "Birden fazla şarj noktasının binanın toplam yükünü aşmadan çalışması için yük yönetimi giderek standart bir ihtiyaç hâline geliyor." },
      { term: "Yapay zekâ destekli enerji yönetimi", text: "Tüketim ve araç kullanım düzenine göre şarjı planlayan yazılımlar, maliyet ve yük dengesi için kullanılabilir." },
      { term: "Güneş enerjisi ile birlikte kullanım", text: "Şarj noktaları güneş enerjisi sistemiyle birlikte planlanabilir." },
      { term: "Uzaktan izleme ve faturalama", text: "Şarj oturumlarının uzaktan izlenmesi ve kullanıcıya göre kayıt tutulması, site ve iş yerlerinde işletmeyi kolaylaştırır." },
      { term: "AC ve DC seçimi", text: "Konut, site ve iş yerlerinde AC; yüksek devirli kullanımda DC çözümler öne çıkar. Seçim, kullanım amacına göre keşifte belirlenir." },
    ],
    scenarios: [
      { term: "Site otoparkı", text: "Sakinlere ayrılan yerlere şarj noktaları; bina yükünü aşmayan yük yönetimiyle." },
      { term: "Ofis ve iş yeri", text: "Çalışan ve ziyaretçi araçları için paylaşımlı şarj noktaları ve izleme." },
      { term: "Otel / AVM", text: "Müşteri otoparkında hızlı kullanım için planlanmış şarj alanı." },
    ],
    faq: [
      { q: "Binanın elektriği yeterli olur mu?", a: "Bunu keşifte pano kapasitesine ve abonelik gücüne bakarak belirliyoruz. Yetersizse pano güçlendirme veya yük yönetimi öneriyoruz." },
      { q: "Hangi şarj ünitesi uygun?", a: "Kullanım amacına (konut, iş yeri, ticari) göre belirlenir; marka ve model projede birlikte seçilir." },
      { q: "Daha fazla bilgi?", a: "Ev şarj ünitesi kurulumu rehberimizde süreci adım adım anlattık; sayfanın üstündeki ilgili içerik bağlantısına bakabilirsiniz." },
    ],
  },

  "gunes-enerjisi": {
    flow: [
      { t: "Keşif", s: "Çatı/arazi ve tüketim bilgisi değerlendirilir" },
      { t: "Tasarım", s: "Sistem ve elektrik bağlantısı projelendirilir" },
      { t: "Kurulum", s: "Panel, evirici ve pano montajı" },
      { t: "İzleme", s: "Üretim ve tüketim uzaktan izlenir" },
      { t: "Bakım", s: "Periyodik kontrol ve temizlik" },
    ],
    trends: [
      { term: "Depolama ile birlikte", text: "Akü depolama, üretilen enerjinin gün içinde esnek kullanımını amaçlar; ihtiyaç ve bütçeye göre değerlendirilir." },
      { term: "Yapay zekâ destekli üretim tahmini", text: "Hava durumu ve geçmiş veriye dayanan tahmin yazılımları, enerji planlamasına destek olabilir." },
      { term: "Akıllı izleme ve arıza bildirimi", text: "Panel ve eviricilerin uzaktan izlenmesi, düşük performansın erken fark edilmesine yardımcı olur." },
      { term: "Şarj ve bina otomasyonuyla entegrasyon", text: "Üretilen enerjinin elektrikli araç şarjı ve bina yükleriyle birlikte yönetilmesi giderek yaygınlaşıyor." },
      { term: "Mevzuat ve başvuru süreçleri", text: "Güneş enerjisi kurulumunun yasal başvuru süreçleri değişebildiği için güncel mevzuata göre ilerlenmesi gerekir; bunu projede birlikte takip ederiz." },
    ],
    scenarios: [
      { term: "Sanayi çatısı", text: "Gündüz yüksek tüketimli tesisin çatısına kurulan sistem, tüketimin bir kısmını karşılar." },
      { term: "Otel veya AVM", text: "Geniş çatı alanında üretim; bina otomasyonuyla tüketim izleme." },
      { term: "Site ortak alanları", text: "Aydınlatma, pompa ve şarj noktaları için ortak alan enerjisi desteği." },
    ],
    faq: [
      { q: "Tesisime uygun mu?", a: "Bunu keşifte çatı/arazi yapısına, gölgelenmeye ve tüketim profiline bakarak değerlendiriyoruz." },
      { q: "Geri dönüş süresi nedir?", a: "Bu; tüketim, kurulum ve yatırım koşullarına göre değiştiğinden sayı vermiyoruz. Projeye özel hesap keşif sonrası paylaşılır." },
      { q: "Daha fazla bilgi?", a: "Güneş enerjisi, akü ve jeneratör rehberimiz sayfanın ilgili içerik bölümünde." },
    ],
  },

  "peyzaj-otomasyonu": {
    flow: [
      { t: "Algılama", s: "Toprak nemi, yağmur, rüzgâr ve ışık sensörleri" },
      { t: "Kontrol", s: "Kontrolör sulama ve aydınlatma kararını verir" },
      { t: "Uygulama", s: "Vanalar, pompalar ve armatürler çalışır" },
      { t: "Uzaktan erişim", s: "Telefon veya panelden izleme ve ayar" },
      { t: "Bildirim", s: "Arıza veya anormal durumda uyarı" },
    ],
    trends: [
      { term: "Yapay zekâ destekli sulama", text: "Hava tahmini, toprak nemi ve bitki ihtiyacını birlikte değerlendiren akıllı sulama yazılımları, gereksiz sulamayı azaltmayı hedefler." },
      { term: "Sensör tabanlı sulama", text: "Takvime göre değil, toprak nemi ve yağmura göre sulama öne çıkan bir eğilimdir; amaç su ve enerji kullanımını daha verimli hâle getirmektir." },
      { term: "Uzaktan izleme ve ev otomasyonuyla entegrasyon", text: "Sulama, bahçe aydınlatması ve havuz ekipmanının aynı uygulamadan yönetilmesi, sektörde öne çıkan bir eğilimdir." },
      { term: "Güneş enerjisi destekli saha ekipmanı", text: "Elektrik çekilmesi zor noktalarda güneş enerjili kontrolör ve aydınlatma kullanımı da görülmektedir." },
      { term: "Aydınlatmada senaryo yönetimi", text: "Bahçe aydınlatmasının gün batımına, harekete ve özel günlere göre otomatik çalışması, konfor ve enerji açısından tercih edilen bir yaklaşımdır." },
    ],
    scenarios: [
      { term: "Villa bahçesi", text: "Bölgelere ayrılmış sulama, yağmurda otomatik durma, akşam aydınlatma senaryosu ve telefondan kontrol." },
      { term: "Site ortak peyzajı", text: "Geniş alanda çok bölgeli sulama ve merkezi izleme; arıza bildirimiyle bakım ekibine yönlendirme." },
      { term: "Otel / AVM dış alanı", text: "Peyzaj aydınlatması ve sulamanın bina otomasyonuyla birlikte yönetilmesi." },
    ],
    faq: [
      { q: "Mevcut sulama sistemine eklenebilir mi?", a: "Çoğu zaman evet. Mevcut vana ve hatlar keşifte incelenir, gerekirse kontrolör ve sensör eklenir." },
      { q: "Su tasarrufu sağlar mı?", a: "Sensörlü ve hava durumuna duyarlı çalışma gereksiz sulamayı azaltabilir; sağlanacak tasarruf alanın koşullarına bağlı olduğundan sayı vermiyoruz." },
      { q: "Telefondan yönetilebilir mi?", a: "Evet, uzaktan erişimli kontrolör seçildiğinde mümkündür." },
    ],
  },

  "villa-guvenlik": {
    flow: [
      { t: "Çevre", s: "Çevre ve girişleri izleyen IP kameralar" },
      { t: "Araç girişi", s: "Plaka tanıma ile geçiş" },
      { t: "Geçiş kontrol", s: "Kart, kod veya uygulama ile giriş" },
      { t: "Kayıt", s: "Görüntüler kayıt cihazında saklanır" },
      { t: "Uzaktan izleme", s: "Telefon veya bilgisayardan canlı izleme ve bildirim" },
    ],
    trends: [
      { term: "Yapay zekâ destekli görüntü analizi", text: "Kameralardaki akıllı analiz özellikleri insan, araç gibi nesneleri ayırt edip gereksiz alarmları azaltmayı hedefler." },
      { term: "Plaka tanıma", text: "Araç girişlerinde plaka tanıma yaygındır; plaka kayıtları kişisel veri sayılabileceğinden saklama ve erişim düzeni dikkatle planlanmalıdır." },
      { term: "Bulut ve mobil erişim", text: "Kayıtlara ve canlı görüntüye telefondan erişim; bildirimlerin anında iletilmesi artık beklenen özellik." },
      { term: "Ev otomasyonuyla bütünleşme", text: "Güvenlik, aydınlatma ve kapı sistemleri tek senaryoda çalışabilir; örneğin alarm durumunda dış aydınlatma açılır." },
      { term: "Siber güvenlik", text: "IP kamera ve kayıt cihazlarında güçlü şifre, ayrı ağ ve güncelleme yönetimi, fiziksel güvenlik kadar önemlidir." },
    ],
    scenarios: [
      { term: "Müstakil villa", text: "Dış çevre kameraları, araç girişinde plaka tanıma, telefona bildirim ve kayıt." },
      { term: "Site villaları", text: "Ortak giriş ve her villa girişi için merkezi izleme ve geçiş kontrol." },
      { term: "Yazlık / ikinci konut", text: "Ev boşken uzaktan izleme ve hareket algılandığında bildirim." },
    ],
    faq: [
      { q: "Kamera görüntüleri nerede saklanır?", a: "Yerel kayıt cihazında veya bulutta saklanabilir. Seçim güvenlik ve erişim ihtiyacınıza göre yapılır." },
      { q: "Kişisel veri açısından dikkat edilecek bir şey var mı?", a: "Kamera ve plaka kayıtları kişisel veri sayılabilir. Çekim alanı ve saklama düzeni için hukuk danışmanınıza danışmanızı öneririz." },
      { q: "Kablosuz mu kablolu mu?", a: "Güvenilirlik için ana sistemlerde kablolu altyapıyı öneririz; kablosuz çözümler uygun yerlerde tamamlayıcı olarak kullanılabilir." },
    ],
  },
};
