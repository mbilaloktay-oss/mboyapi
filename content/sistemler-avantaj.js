// Sistem Çözümleri — genel bakış ve "Avantajlar ve konfor" metinleri.
// overview : lead'in altındaki ek paragraflar (sistemin ne olduğu, kime ne sağladığı)
// benefits : kullanıcıya sağladığı konfor ve avantajlar
//
// Kaynak: sektör genelinde yaygın anlatılan faydalar; metinler özgün yazılmıştır.
// Kural: yüzde/sayı, tasarruf vaadi, doğruluk oranı, sertifika ve bayilik iddiası yok.
// "Katkı sağlar / hedefler / mümkün kılar" dili kullanılır; somut değer keşif sonrası teklifte verilir.

export const benefitsNote =
  "Sağlanacak fayda; tesisin yapısına, kullanım düzenine ve seçilen ürünlere göre değişir. Somut beklentiyi keşifte birlikte netleştiririz.";

export const systemExtras = {
  "akilli-otopark": {
    overview: [
      "Akıllı otopark; giriş, park ve çıkış sürecini tek bir düzene bağlar. Girişte plaka tanıma, içeride doluluk algılama ve yönlendirme, çıkışta ödeme birlikte çalışır; giriş-çıkış kayıtları ve doluluk geçmişi yönetim yazılımında toplanır.",
      "Sistemi otoparkın trafiğine ve kullanıcı yapısına göre kurarız: giriş ve çıkış sayısı, yoğun saatler, abone ve misafir araçları, ödeme yöntemi ve mevcut altyapı keşifte netleşir. Yenileme ya da yeni kurulum planlıyorsanız ilk adım keşiftir.",
    ],
    benefits: [
      { term: "Bilet beklemeden giriş", text: "Kayıtlı araçlar bilet almadan geçer; misafir girişleri otomatik kaydedilir." },
      { term: "Boş yere hızlı ulaşma", text: "Sürücü boş yeri girişte ve kat tabelalarında görür; yer aramak için dolaşma azalabilir." },
      { term: "Çıkışta daha az bekleme", text: "Otomatik ödeme noktası ya da işletmenin seçtiği ödeme altyapısıyla çıkıştaki bekleme azalabilir." },
      { term: "Kayıt ve raporlama", text: "Giriş-çıkış kayıtları, doluluk geçmişi, abonelik ve tarife yönetimi tek yerden izlenir." },
      { term: "İhtiyaca göre seçim", text: "Önce keşif, sonra ürün seçimi: giriş-çıkış sayısı, yoğun saatler ve kullanıcı grupları netleşmeden sistem seçilmez." },
      { term: "Kişisel veride kontrol", text: "Plaka kayıtlarını kimin göreceği ve ne kadar saklanacağı kurulumdan önce işletmeyle birlikte belirlenir." },
    ],
  },

  "pano-cozumleri": {
    overview: [
      "Pano, bir tesisin elektrik ve otomasyon altyapısının kalbidir. MCC panoları pompa, fan ve benzeri motorları besler, korur ve kumanda eder; DDC panoları (Türkiye'de SBS panosu olarak da bilinir) iklimlendirme ve havalandırma gibi bina sistemlerini otomatik yönetir; kompanzasyon panoları reaktif gücü dengeleyerek elektrik altyapısının daha düzenli çalışmasına yardımcı olur.",
      "Doğru tasarlanmış bir pano; işletmede daha az arıza, daha kolay bakım ve ileride genişlemeye izin veren bir düzen demektir. Üretici ya da bayi değiliz: işimiz ihtiyacı doğru tanımlamak, ürünü ona göre seçmek ve sistemi terzi hassasiyetiyle kurmak. Tasarım, kurulum ve devreye alma tek elden yönetildiğinde sorumluluk da tek elde toplanır.",
    ],
    benefits: [
      { term: "Reaktif enerji bedelinin kontrolü", text: "Kompanzasyon panosu reaktif tüketimi yönetmelikte tanımlı sınırlar içinde tutmayı hedefler; enerji analizörü durumu sürekli kayıt altında tutar." },
      { term: "Arızaya hızlı müdahale", text: "Motor koruma ve kumanda tek panoda toplanır; çalışma ve arıza bilgisi BMS'e aktarılarak arızanın yeri sahada aranmadan görülür." },
      { term: "İhtiyaca göre çalışan mekanik sistemler", text: "DDC (SBS) panosu klima santrali, fan ve pompaları sensör verisine göre çalıştırır; enerjinin ve ekipman ömrünün korunmasına katkı sağlar." },
      { term: "Ölçerek yönetim", text: "Ana giriş ve kritik çıkışlarda ölçüm yapılır; tüketim bölüm bölüm görülür, tasarruf kararları tahmine değil veriye dayanır." },
      { term: "Belgeli teslim", text: "Tek hat şeması, FAT tutanağı, test raporları ve as-built çizimlerle teslim; bakım ve genişleme kolaylaşır." },
      { term: "Terzi hassasiyetiyle kurulum", text: "Sistemi hazır bir ürüne uydurmayız: ihtiyacı çıkarır, ürünü ona göre seçer, sistemi ona göre kurarız. Tasarımdan devreye almaya sorumluluk tek muhatapta kalır." },
    ],
  },

  "otomasyon-ve-kontrol": {
    overview: [
      "PLC ve otomasyon ürünleri; makineleri, pompaları ve proseslerini önceden belirlenen senaryolara göre otomatik çalıştırır. Doğru ürünün doğru uygulamada kullanılması, hem işletmenin sürekliliği hem de ileride yedek parça ve genişleme kolaylığı açısından önemlidir.",
      "Biz yalnızca parça tedarik etmeyiz; uygulamanın ihtiyacına göre ürün seçimine, sahaya zamanında teslime ve gerektiğinde devreye alma desteğine yardımcı oluruz. Siemens, ABB, Schneider gibi markalarda temin ve uygulama yapıyoruz.",
    ],
    benefits: [
      { term: "Doğru ürün, doğru uygulama", text: "Mühendislik destekli seçim, gereğinden pahalı ya da yetersiz ürün alma riskini azaltmayı hedefler." },
      { term: "Üretim sürekliliği", text: "Kritik ekipmanlarda planlı tedarik ve yedek parça düşüncesi, plansız duruşları azaltmaya yardımcı olur." },
      { term: "Esneklik", text: "Programlanabilir yapı sayesinde süreç değiştiğinde sistem yeniden kurulmak yerine güncellenebilir." },
      { term: "Uzaktan izleme imkânı", text: "Haberleşme destekli ürünlerle durum ve alarm bilgisi uzaktan izlenebilir; yerinde müdahale ihtiyacını azaltabilir." },
      { term: "Eski sistemi yenileme", text: "Çalışan sistemi tamamen sökmeden, kademeli yenileme (retrofit) ile duruş süresini kısıtlama imkânı." },
      { term: "Hızlı ulaşım", text: "Tedarik süreci proje takvimine göre planlanır; ürünler sahaya zamanında ulaştırılmaya çalışılır." },
    ],
  },

  "elektrikli-arac-sarj": {
    overview: [
      "Elektrikli araç şarjı, binanın elektrik altyapısını doğrudan ilgilendirir. Şarj noktası eklemek yalnızca bir cihaz takmak değil; pano kapasitesi, kablo güzergâhı, koruma ve toplam yükün dengesi gibi başlıkları birlikte düşünmeyi gerektirir.",
      "Bu yüzden önce keşif yapıyor, sonra şarj ünitesini ve altyapısını projelendirip kuruyoruz. Birden fazla şarj noktası olan yerlerde yük yönetimi sayesinde binanın toplam yükünü aşmadan şarj mümkün olabilir.",
    ],
    benefits: [
      { term: "Kullanıcı konforu", text: "Sakinler, çalışanlar ve ziyaretçiler aracını bulunduğu yerde şarj edebilir; ayrıca şarj istasyonuna gitme ihtiyacını azaltır." },
      { term: "Güvenli altyapı", text: "Keşif ve doğru projelendirme, mevcut elektrik tesisatını zorlamadan şarj noktası eklenmesine yardımcı olur." },
      { term: "Yük yönetimi", text: "Birden çok şarj noktasının toplam yükü dengeli paylaşması, ana şalter ve trafonun aşırı yüklenmesi riskini azaltmayı hedefler." },
      { term: "Tesise değer katar", text: "Site, otel, AVM ve iş yerlerinde şarj noktası, modern ve ileriye dönük bir altyapı olarak algılanır." },
      { term: "İzleme ve kayıt", text: "Şarj oturumlarının izlenmesi ve kullanıcıya göre kayıt tutulması, işletme ve paylaşım düzenini kolaylaştırır." },
      { term: "Güneş enerjisi ile birlikte kullanım", text: "Şarj noktaları güneş enerjisi sistemiyle birlikte planlanarak enerji kullanımı bütünsel yönetilebilir." },
    ],
  },

  "gunes-enerjisi": {
    overview: [
      "Güneş enerjisi sistemi, çatı veya arazide üretilen elektriği tesisin kendi tüketiminde kullanmayı sağlar. Böylece şebekeden alınan enerjinin bir kısmı karşılanabilir ve işletme enerji maliyetindeki dalgalanmaya karşı daha hazırlıklı olur.",
      "Sistemin verimi; çatı yönü, gölgelenme, tüketim saatleri ve kurulum kalitesine bağlıdır. Bu nedenle önce keşif yapar, tesis tüketimini ve elektrik altyapısını birlikte değerlendirir, ardından projeyi tasarlayıp kurarız.",
    ],
    benefits: [
      { term: "Enerji maliyetine katkı", text: "Kendi ürettiğiniz enerji, şebekeden alınan elektriğin bir kısmının yerine geçebilir; faydanın boyutu tüketim profiline bağlıdır." },
      { term: "Düşük işletme yükü", text: "Hareketli parçası az olan yapı nedeniyle işletme ve bakım yükü genel olarak sınırlıdır; periyodik kontrol ve temizlik yapılması önerilir." },
      { term: "Görünürlük", text: "İzleme sistemiyle üretim ve tüketim anlık takip edilir; performans düşüşü erken fark edilebilir." },
      { term: "Enerji planlama kolaylığı", text: "Üretim verisi, bina otomasyonu ve şarj noktalarıyla birlikte değerlendirilerek enerji kullanımının planlanmasına yardımcı olur." },
      { term: "Sürdürülebilirlik", text: "Yenilenebilir enerji kullanımı, kurumsal sürdürülebilirlik hedeflerine katkı sağlayabilir." },
      { term: "Depolama ile esneklik", text: "İhtiyaca göre akü depolama eklenerek üretilen enerji gün içinde daha esnek kullanılabilir." },
    ],
  },

  "peyzaj-otomasyonu": {
    overview: [
      "Peyzaj otomasyonu, bahçenin sulama, aydınlatma ve pompa gibi unsurlarını bir kontrol sisteminde toplar. Sulama zamana, toprak nemine ve yağışa göre kendiliğinden yapılır; aydınlatma gün batımına ve senaryolara göre çalışır.",
      "Villa, site ve açık alanlarda amaç aynıdır: bahçe daha az emekle daha düzenli bakılsın, su ve enerji gereksiz yere harcanmasın. Telefon ya da panelden uzaktan erişimle, evde olmadığınızda da bahçeniz kontrol altında kalır.",
    ],
    benefits: [
      { term: "Emek ve zaman kazancı", text: "Sulama ve aydınlatmayı elle yönetme ihtiyacını ortadan kaldırır; özellikle yoğun tempolu kullanıcılar için kolaylık sağlar." },
      { term: "Su kullanımında verimlilik", text: "Yağmur ve nem sensörleri gereksiz sulamayı engelleyebilir; sağlanacak tasarruf alanın koşullarına bağlıdır." },
      { term: "Bitki sağlığına katkı", text: "Düzenli ve ihtiyaca uygun sulama, bitkilerin sağlıklı gelişmesine yardımcı olur." },
      { term: "Uzaktan kontrol", text: "Yazlık veya uzun süre kullanılmayan mülklerde bile bahçeyi telefondan izleme ve ayarlama imkânı." },
      { term: "Atmosfer ve güvenlik", text: "Bahçe aydınlatma senaryoları hem ortam konforunu artırır hem de dış alanın aydınlık kalmasına katkı sağlar." },
      { term: "Bütünleşik yaşam", text: "Havuz, pompa ve dış aydınlatma aynı uygulamadan yönetilebilir; ev otomasyonuyla birleştirilebilir." },
    ],
  },

  "villa-guvenlik": {
    overview: [
      "Villa güvenliği, yalnızca kamera takmak değil; çevreyi izleme, araç girişini kontrol etme ve gerektiğinde size haber verme işinin birlikte kurulmasıdır. IP kameralar, plaka tanıma ve geçiş kontrol aynı çatı altında planlandığında sistem daha tutarlı çalışır.",
      "Kayıtlara ve canlı görüntüye telefondan erişebilir, hareket algılandığında bildirim alabilirsiniz. Kamera, plaka tanıma ve geçiş kontrolü kişisel veri işler; bu sistemler işletmenin KVKK yükümlülükleri dikkate alınarak planlanır.",
    ],
    benefits: [
      { term: "Huzur ve görünürlük", text: "Çevre ve girişlerin kamera ile izlenmesi, evde olmasanız bile mülkünüzü takip etmenizi sağlar." },
      { term: "Uzaktan erişim", text: "Canlı görüntü ve geçmiş kayıtlara mobil cihazdan ulaşma; bildirimlerle olaydan hemen haberdar olma." },
      { term: "Araç girişi kolaylığı", text: "Plaka tanıma ile tanımlı araçlara kolay geçiş; yetkisiz araçların fark edilmesine katkı." },
      { term: "Akıllı analiz yanlış alarmları azaltabilir", text: "Akıllı görüntü analizi özellikleri, insan ve araç gibi nesneleri ayırt ederek gereksiz uyarıları azaltabilir." },
      { term: "Geriye dönük inceleme", text: "Olay sonrası kayıtlara bakarak neyin ne zaman olduğunu inceleme imkânı (saklama düzeni hukuki gereklere göre kurulur)." },
      { term: "Bütünsel yönetim", text: "Güvenlik, aydınlatma ve kapı sistemleri aynı senaryoda çalışabilir; örneğin alarm anında dış aydınlatmanın açılması." },
    ],
  },
};
