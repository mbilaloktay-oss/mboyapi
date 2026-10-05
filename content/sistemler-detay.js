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
      { t: "Giriş", s: "Kamera plakayı okur, araç kaydedilir" },
      { t: "Doluluk algılama", s: "Park yerlerinin dolu/boş bilgisi toplanır" },
      { t: "Yönlendirme", s: "Ekranlar sürücüyü boş yere yönlendirir" },
      { t: "Ödeme", s: "Çıkışta süre hesaplanır, ödeme alınır" },
      { t: "Yönetim", s: "Doluluk ve geçiş kayıtları tek ekranda izlenir" },
    ],
    trends: [
      { term: "Yapay zekâ destekli plaka okuma", text: "Görüntü işleme tabanlı modern sistemler farklı ışık, açı ve hava koşullarında plakayı daha güvenilir okumayı hedefler. Hangi yazılımın uygun olduğu kamera yerleşimine ve kullanıma göre belirlenir." },
      { term: "Temassız ve plaka bazlı geçiş", text: "Kart ya da bilet çekmeden, plaka ile giriş-çıkış ve abonelik yönetimi birçok tesiste standart beklenti hâline geliyor." },
      { term: "Mobil ödeme ve uygulama", text: "Ödemenin mobil uygulama veya QR ile yapılabilmesi, çıkış kuyruklarını azaltmayı amaçlar." },
      { term: "Doluluk verisinden analiz", text: "Gün ve saat bazlı doluluk verisi, otopark işletmesinin kapasite ve yönlendirme kararlarına destek olur." },
      { term: "Şarj ve bina sistemleriyle birlikte düşünme", text: "Otopark; elektrikli araç şarj, havalandırma ve bina otomasyonu ile birlikte planlandığında işletme daha bütüncül yönetilir." },
    ],
    scenarios: [
      { term: "AVM otoparkı", text: "Girişte plaka okunur, katlarda boş yer ekranları kullanıcıyı yönlendirir, çıkışta ödeme yapılır; AVM yönetimi doluluğu tek panelden izler." },
      { term: "Rezidans / site", text: "Sakinlerin ve misafirlerin plakaları tanımlanır; yetkisiz araç girişinde yönetime bildirim gider." },
      { term: "Hastane veya ofis binası", text: "Çalışan, ziyaretçi ve acil araç alanları ayrı tanımlanır; yoğun saatlerde ziyaretçiler boş yere yönlendirilir." },
    ],
    faq: [
      { q: "Mevcut otoparka sonradan kurulabilir mi?", a: "Genellikle evet. Keşifte mevcut kablolama, aydınlatma ve giriş-çıkış düzenine bakılır; gerekiyorsa ek altyapı önerilir." },
      { q: "Plaka tanıma kişisel veri sayılır mı?", a: "Plaka bilgisi kişisel veri kapsamında değerlendirilebilir. Saklama ve aydınlatma konusunu işletmenizin hukuk danışmanıyla birlikte netleştirmenizi öneririz." },
      { q: "Doluluk algılama her park yerine mi kurulur?", a: "Park yeri bazlı ya da bölge bazlı yapılabilir. Hangisinin uygun olduğu otopark düzenine ve bütçeye göre keşifte belirlenir." },
    ],
  },

  "pano-cozumleri": {
    flow: [
      { t: "İhtiyaç ve şema", s: "Yükler, motorlar, kontrol senaryoları belirlenir" },
      { t: "Tasarım", s: "Tek hat şeması, yerleşim ve malzeme listesi hazırlanır" },
      { t: "Üretim", s: "Pano imalatı ve atölye testleri yapılır" },
      { t: "Kurulum", s: "Sahaya montaj ve kablolama yapılır" },
      { t: "Devreye alma", s: "Fonksiyon testleri ve teslim dokümanları" },
    ],
    trends: [
      { term: "Akıllı pano ve izleme", text: "Panolara eklenen enerji analizörleri ve haberleşme modülleriyle tüketim, yük ve alarm bilgisi uzaktan izlenebilir." },
      { term: "Veriye dayalı bakım", text: "Sıcaklık ve akım gibi verilerin izlenmesi, arıza oluşmadan müdahale edilmesine yardımcı olur. Yapay zekâ destekli analiz yazılımları bu veriden anormallik yakalamayı hedefler." },
      { term: "BMS ve SCADA ile entegrasyon", text: "DDC ve MCC panoları, açık haberleşme protokolleriyle bina ve proses otomasyonuna bağlanabilir." },
      { term: "Kompanzasyonda dinamik çözümler", text: "Yük profili değişen tesislerde otomatik kademe ve izleme özellikli kompanzasyon, işletmeye esneklik sağlar." },
      { term: "Dokümantasyon ve izlenebilirlik", text: "As-built şema, etiketleme ve test raporlarının teslimi; ileride bakım ve genişletmeyi kolaylaştırır." },
    ],
    scenarios: [
      { term: "Arıtma tesisi", text: "Pompa, blower ve karıştırıcılar için MCC panosu; seviye ve debi bilgisiyle çalışan otomasyon." },
      { term: "AVM / otel", text: "Havalandırma ve iklimlendirme ekipmanlarını yöneten DDC panoları ve ana enerji kompanzasyonu." },
      { term: "Sanayi tesisi", text: "Üretim hatlarının motor kontrolü ve reaktif güç yönetimi için tek çatı altında pano seti." },
    ],
    faq: [
      { q: "MCC, DDC ve kompanzasyon panosu arasındaki fark nedir?", a: "MCC motor ve pompaların kontrolünü, DDC iklimlendirme gibi bina sistemlerinin otomasyonunu, kompanzasyon panosu ise reaktif güç yönetimini üstlenir." },
      { q: "Pano üretimi sizde mi yapılıyor?", a: "Evet, tasarım ve üretim tarafında destek veriyoruz; kurulum ve devreye almayı da aynı ekip yürütür." },
      { q: "Mevcut panoya ekleme yapılabilir mi?", a: "Çoğu durumda yapılabilir. Mevcut panonun kapasitesi ve durumu keşifte kontrol edilir." },
    ],
  },

  "otomasyon-malzemeleri": {
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
      { q: "Hangi markalar?", a: "Siemens, ABB, Schneider Electric gibi önde gelen markalarla temin ve uygulama yapıyoruz; seçim ihtiyaca ve bütçeye göre yapılır." },
      { q: "Yalnızca ürün alabilir miyim?", a: "Evet, tedarik tek başına da talep edilebilir. İsterseniz ürün seçimi ve devreye alma desteği ekleriz." },
      { q: "Yazılım desteği veriyor musunuz?", a: "Uygulamanın kapsamına göre yazılım ve devreye alma desteğini birlikte planlıyoruz; kapsam teklifte netleştirilir." },
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
      { term: "Sensör tabanlı sulama", text: "Takvime göre değil, toprak nemi ve yağmura göre sulama; su ve enerji kullanımını daha verimli hâle getirir." },
      { term: "Uzaktan izleme ve ev otomasyonuyla entegrasyon", text: "Sulama, bahçe aydınlatması ve havuz ekipmanı aynı uygulamadan yönetilebilir." },
      { term: "Güneş enerjisi destekli saha ekipmanı", text: "Elektrik çekilmesi zor noktalarda güneş enerjili kontrolör ve aydınlatma kullanılabilir." },
      { term: "Aydınlatmada senaryo yönetimi", text: "Bahçe aydınlatmasının gün batımına, harekete ve özel günlere göre otomatik çalışması hem konfor hem enerji açısından fayda sağlar." },
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
      { term: "Plaka ve yüz tanıma", text: "Araç girişlerinde plaka tanıma yaygındır; yüz tanıma gibi biyometrik çözümler kişisel veri açısından daha hassastır ve dikkatle değerlendirilmelidir." },
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
