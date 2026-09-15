// Doküman Merkezi — teknik yazılar ve indirilebilir şablonlar.
// Metinler mevcut siteden birebir taşınmıştır.

// NOT: PDF'ler şu an hâlâ Wix depolamasında duruyor. Wix aboneliği
// sonlandırılmadan önce dosyalar indirilip `static/dokumanlar/` içine
// Şablonlar artık kendi sitemizde: static/dokumanlar/ içinde duruyorlar.
export const templates = [
  {
    no: "01",
    title: "Taşeron / Tedarikçi Sözleşmesi Şablonu",
    text:
      "Elektrik ve mekanik taşeron/tedarikçi anlaşmalarında kullanılan 19 maddelik kapsamlı sözleşme yapısı. Avrupa/FIDIC terim karşılıkları tablosu içerir (Geçici Kabul, Hakediş, Garanti Süresi vb.).",
    file: "MBO_Taseron_Sozlesmesi_Sablonu.pdf",
    localUrl: "/dokumanlar/MBO_Taseron_Sozlesmesi_Sablonu.pdf",
    url: "/dokumanlar/MBO_Taseron_Sozlesmesi_Sablonu.pdf",
  },
  {
    no: "02",
    title: "Taraflar Sorumlulukları Tablosu (Ek-4)",
    text:
      "Sözleşmenin ekinde yer alan, işveren ile taşeron arasındaki gider ve sorumluluk paylaşımını netleştiren kontrol listesi (özlük hakları, şantiye mobilizasyonu, malzeme/ekipman, genel işler).",
    file: "MBO_Sorumluluk_Tablosu_Sablonu.pdf",
    localUrl: "/dokumanlar/MBO_Sorumluluk_Tablosu_Sablonu.pdf",
    url: "/dokumanlar/MBO_Sorumluluk_Tablosu_Sablonu.pdf",
  },
  {
    no: "03",
    title: "Elektrik ve Mekanik Genel Teknik Şartname",
    text:
      "Elektrik ve mekanik tesisat işlerinde uygulanacak standartlar (TS EN, Elektrik İç Tesisleri Yönetmeliği, ASHRAE/NFPA eşdeğerleri), malzeme/işçilik şartları ve test-devreye alma esasları.",
    file: "MBO_Teknik_Sartname_Sablonu.pdf",
    localUrl: "/dokumanlar/MBO_Teknik_Sartname_Sablonu.pdf",
    url: "/dokumanlar/MBO_Teknik_Sartname_Sablonu.pdf",
  },
  {
    no: "04",
    title: "İş Güvenliği Talimatnamesi",
    text:
      "6331 sayılı İSG Kanunu'na dayanan, şantiye sahasına giren personel için kişisel koruyucu donanım, elektrik güvenliği, yüksekte çalışma ve acil durum kuralları.",
    file: "MBO_Is_Guvenligi_Talimatnamesi_Sablonu.pdf",
    localUrl: "/dokumanlar/MBO_Is_Guvenligi_Talimatnamesi_Sablonu.pdf",
    url: "/dokumanlar/MBO_Is_Guvenligi_Talimatnamesi_Sablonu.pdf",
  },
];

export const templatesIntro =
  "MBO Yapı Sistem olarak AVM, otel, rezidans ve endüstriyel tesislerde yürüttüğümüz elektromekanik projelerden edindiğimiz tecrübeyi sektörle paylaşmak istiyoruz. Aşağıdaki şablonlar, büyük ölçekli projelerde kullanılan pratikleri temel alır; kendi projenizde referans olarak veya doğrudan uyarlayarak kullanabilirsiniz.";

export const templatesDisclaimer =
  "Bu şablonlar genel bilgilendirme amaçlıdır ve hukuki/teknik danışmanlık yerine geçmez. Projenize özel uyarlama için bizimle iletişime geçebilirsiniz.";

/** Teknik yazılar. `blocks`: h2 = ara başlık, p = paragraf. */
export const articles = [
  {
    slug: "shop-drawing-uygulama-projesi-nedir",
    date: "2026-09-15",
    topic: "Proje ve tasarım",
    title: "Shop-Drawing Nedir? Uygulama Projesi Sahada Neyi Değiştirir?",
    summary:
      "Konsept proje bir niyet beyanıdır; uygulama projesi ise sahada gerçekten inşa edilebilen şeydir. Aradaki farkı bilmemek, bütçenin en sessiz kaybıdır.",
    blocks: [
      { t: "p", x: "Bir yatırımcı için en kafa karıştırıcı konulardan biri, elinde \u201cproje\u201d olmasına rağmen sahada sürekli sorun çıkmasıdır. Bunun sebebi çoğu zaman projenin kötü olması değil, elindeki projenin uygulama projesi olmamasıdır." },
      { t: "h2", x: "Konsept proje ile uygulama projesi arasındaki fark" },
      { t: "p", x: "Konsept (avan) proje, sistemin ne olacağını söyler: kaç kW güç gerekir, hangi tip klima santrali seçilir, kaç adet dedektör düşer. Uygulama projesi ise bunun sahada tam olarak nereye, hangi kotta, hangi güzergâhtan ve hangi sırayla imal edileceğini söyler. Birincisi karar belgesidir, ikincisi imalat talimatıdır." },
      { t: "p", x: "Bu ayrım kâğıt üzerinde masum görünür. Sahada ise şu anlama gelir: konsept projeyle işe başlayan bir ekip, her kritik kararı imalat anında, şantiye şartlarında ve çoğu zaman aceleyle verir. Verilen her karar da bir sonrakini kısıtlar." },
      { t: "h2", x: "Uygulama projesi tam olarak neyi çözer?" },
      { t: "p", x: "Uygulama projesinin asıl işi, disiplinler arası çakışmaları (clash) sahaya çıkmadan önce çözmektir. Bir asma tavan boşluğunda havalandırma kanalı, yangın borusu, kablo tavası, sprinkler hattı ve aydınlatma armatürü aynı hacmi paylaşır. Bunların hangisinin hangisinin altından geçeceği masada belirlenmezse, sahada ilk gelen yeri kapar; sonra gelen ya kırar ya da kot değiştirir." },
      { t: "p", x: "İkinci işi, bakım yapılabilirliği garanti etmektir. Teorik olarak doğru ama önüne servis açıklığı bırakılmamış bir pompa, ilk bakımda sökülmek zorunda kalır. Uygulama projesi, cihazın yalnızca sığdığını değil, ömrü boyunca bakılabildiğini de gösterir." },
      { t: "h2", x: "Bir uygulama projesinde ne bulunur?" },
      { t: "p", x: "Sahada gerçekten işe yarayan bir uygulama projesi şunları içerir: kot ve güzergâh bilgisi taşıyan kesitler, askı ve mesnet detayları, geçiş ve yangın durdurucu detayları, pano yerleşim ve servis açıklığı planları, kablo ve boru listeleri, cihaz montaj detayları ve imalat sırasını gösteren öncelik notları. Bunların olmadığı bir çizim, ölçekli bir temenniden ibarettir." },
      { t: "h2", x: "Maliyete etkisi neden bu kadar büyük?" },
      { t: "p", x: "Sahada yapılan bir revizyon yalnızca o imalatı değil, ona bağlı bütün işleri etkiler. Kırılan bir alçıpan, sökülen bir kanal, yeniden çekilen bir kablo; bunların her biri malzeme, işçilik ve en pahalısı zaman demektir. Aynı kararı tasarım aşamasında vermek ise yalnızca bir çizim revizyonudur." },
      { t: "p", x: "Bu yüzden uygulama projesine ayrılan süre, proje süresine eklenen bir gecikme değil; şantiye süresinden düşülen bir kazançtır." },
      { t: "h2", x: "Yatırımcı neyi sormalı?" },
      { t: "p", x: "Bir teklif aldığınızda şu üç soru, uygulama mühendisliğinin gerçekten yapılıp yapılmayacağını hızlıca ortaya çıkarır: Uygulama projeleri kim tarafından, hangi aşamada üretilecek? Disiplinler arası çakışma kontrolü nasıl ve kim tarafından yapılacak? As-built çizimler hangi formatta ve ne zaman teslim edilecek? Bu üç sorunun net cevabı yoksa, kararlar sahada verilecek demektir." },
      { t: "p", x: "Uygulama projeleriniz veya mevcut projenizin saha uygunluğu için görüş almak isterseniz bizimle iletişime geçebilirsiniz." },
    ],
  },

  {
    slug: "devreye-alma-commissioning-sureci",
    date: "2026-09-15",
    topic: "Devreye alma",
    title: "Devreye Alma (Commissioning): Bir Tesis Nasıl Sorunsuz İşletmeye Alınır?",
    summary:
      "Projenin en kritik evresi, sistemlerin tek tek çalıştığının değil, birlikte doğru davrandığının kanıtlandığı aşamadır.",
    blocks: [
      { t: "p", x: "Bir tesiste bütün cihazlar tek tek çalışıyor olabilir ve tesis yine de işletmeye hazır olmayabilir. Çünkü bir binanın davranışı, cihazların toplamı değil; aralarındaki senaryoların bütünüdür. Devreye alma, işte bu bütünün sınandığı aşamadır." },
      { t: "h2", x: "Devreye alma ne zaman başlar?" },
      { t: "p", x: "Yaygın hata, devreye almayı işin sonunda başlayan bir faaliyet sanmaktır. Oysa süreç tasarım aşamasında başlar: hangi senaryonun test edileceği, hangi değerin kabul edileceği ve hangi kaydın tutulacağı baştan yazılmazsa, sonda yapılan şey test değil deneme yanılma olur." },
      { t: "p", x: "Pratikte devreye alma dört katmanda ilerler: cihaz bazında ön kontroller, sistem bazında fonksiyon testleri, sistemler arası senaryo testleri ve son olarak yüklü/gerçek koşullarda performans doğrulaması." },
      { t: "h2", x: "1. Ön kontroller: enerji vermeden önce" },
      { t: "p", x: "Bu aşamada hiçbir şey çalıştırılmaz. Montajın projeye uygunluğu, etiketleme, tork kontrolleri, topraklama sürekliliği, filtre ve vana konumları gözle ve ölçümle doğrulanır. Burada atlanan bir madde, sonraki aşamaların hepsini şüpheli hale getirir." },
      { t: "h2", x: "2. Fonksiyon testleri: sistem kendi başına doğru mu?" },
      { t: "p", x: "Her sistem kendi içinde sınanır. Jeneratör yük aldığında gerilim ve frekans nasıl davranıyor? Klima santrali set değerine ne kadar sürede ulaşıyor? Kaçak akım rölesi beklenen sürede açıyor mu? Bu aşamada ölçülen değerler yazılır — \u201cçalışıyor\u201d bir test sonucu değildir." },
      { t: "h2", x: "3. Senaryo testleri: sistemler birlikte doğru davranıyor mu?" },
      { t: "p", x: "İşin en kritik ve en çok atlanan kısmı burasıdır. Yangın alarmı geldiğinde asansör tahliye katına inip kapısını açıyor mu? Duman tahliye fanları devreye girerken ilgili damperler doğru konumlanıyor mu? Kartlı geçiş kapıları kaçış yönünde serbest kalıyor mu? Şebeke kesildiğinde hangi yükler UPS'te, hangileri jeneratörde, hangileri kapalı kalıyor?" },
      { t: "p", x: "Bu senaryolar disiplinler arasıdır; tek bir yüklenicinin tek başına doğrulaması mümkün değildir. Bu yüzden senaryo testleri ortak ve planlı yapılır, sonuçları tutanağa bağlanır." },
      { t: "h2", x: "4. Performans doğrulaması ve optimizasyon" },
      { t: "p", x: "Son aşamada tesis, gerçek veya gerçeğe yakın yük altında izlenir. Tasarım değerleriyle saha gerçekleri arasındaki sapmalar burada ortaya çıkar ve cihazlar en yüksek verimle çalışacak şekilde kalibre edilir. Enerji maliyetini yıllarca etkileyecek ayarların çoğu bu kısa pencerede belirlenir." },
      { t: "h2", x: "Devreye almanın çıktısı nedir?" },
      { t: "p", x: "Doğru yürütülmüş bir devreye alma süreci geriye üç şey bırakır: ölçülmüş değerleriyle test raporları, sahadaki nihai durumu gösteren as-built çizimler ve tesisi devralan ekibin gerçekten anladığı bir işletme el kitabı. Bu üçü yoksa, tesis teslim edilmiş ama devredilmemiş demektir." },
      { t: "p", x: "Tesisinizin devreye alma sürecini planlamak veya mevcut bir tesiste yeniden devreye alma (retro-commissioning) yaptırmak için bizimle iletişime geçebilirsiniz." },
    ],
  },

  {
    slug: "ev-sarj-unitesi-kurulumu",
    date: "2026-08-27",
    topic: "Elektrikli araç şarjı",
    title: "Konutlarda Elektrikli Araç Şarj Ünitesi Kurulumu: Bilmeniz Gerekenler",
    summary:
      "Bir EV şarj ünitesini doğru kurmak sanıldığından daha teknik bir iştir: mevcut elektrik altyapısının kapasitesi, kaçak akım koruması ve bina tipine göre doğru çözüm.",
    blocks: [
      { t: "p", x: "Elektrikli araç sahipliği Türkiye'de hızla artıyor ve pek çok villa, apartman ve site sakini artık evinde güvenli, hızlı bir şarj noktası istiyor. Ancak bir EV şarj ünitesini doğru kurmak sanıldığından daha teknik bir iştir: mevcut elektrik altyapısının kapasitesini, kaçak akım korumasını ve bina tipine göre en uygun çözümü doğru değerlendirmek gerekir." },
      { t: "h2", x: "Kurulum öncesi neye bakıyoruz?" },
      { t: "p", x: "Öncelikle binanın ana panosunun ve sayaç aboneliğinin şarj ünitesinin çekeceği ek yükü kaldırıp kaldıramadığını keşifle belirliyoruz. Yetersizse pano güçlendirmesi veya kademeli şarj (yük yönetimi) gibi çözümler öneriyoruz — hiçbir zaman mevcut elektrik tesisatını riske atacak bir bağlantı yapmıyoruz." },
      { t: "h2", x: "Villa, apartman ve site için farklı yaklaşımlar" },
      { t: "p", x: "Müstakil bir villada tek kullanıcılı bir AC şarj ünitesi kurmak nispeten basittir. Apartman ve sitelerde ise ortak kullanım alanlarında birden fazla kullanıcının aynı altyapıyı paylaşması, yük dengeleme ve ayrı sayaçlama gerektirir — bu noktada bina yönetimiyle birlikte planlama yapıyoruz." },
      { t: "h2", x: "Standartlara uygunluk ve devreye alma" },
      { t: "p", x: "Tüm kurulumlarımızda IEC/EN standartlarına uygun kaçak akım koruma (RCD Tip B), doğru kablo kesiti ve topraklama uyguluyor; kurulum sonrası test ve devreye alma raporuyla teslim ediyoruz." },
      { t: "h2", x: "Neden MBO Yapı Sistem?" },
      { t: "p", x: "Zorlu Center, Emaar Square ve Metropol İstanbul gibi büyük ölçekli projelerde elektrik altyapısı ve devreye alma tecrübesi kazanmış bir mühendislik ekibi olarak, EV şarj kurulumunu da sadece bir cihaz montajı değil, binanızın elektrik altyapısının bir parçası olarak ele alıyoruz." },
      { t: "h2", x: "Kurulum süreci adım adım nasıl işliyor?" },
      { t: "p", x: "Sürecimiz dört ana adımdan oluşur: Önce sahada keşif yaparak mevcut pano kapasitesini ve sayaç abonelik gücünü ölçüyoruz. Ardından şarj ünitesinin gücüne (7,4 kW, 11 kW veya 22 kW) göre kablo güzergahını ve koruma cihazlarını belirlediğimiz bir uygulama projesi hazırlıyoruz. Üçüncü adımda montaj ve kablolama işlemlerini gerçekleştiriyor, son olarak kaçak akım testleri ve fonksiyon testleriyle sistemi devreye alıp size teknik rapor halinde teslim ediyoruz." },
      { t: "h2", x: "AC ve DC şarj üniteleri arasındaki fark" },
      { t: "p", x: "Konut ve site projelerinde en sık tercih edilen çözüm AC (alternatif akım) şarj üniteleridir; genellikle 7,4-22 kW güç aralığında çalışır ve mevcut bina elektrik altyapısına nispeten kolay entegre edilir. DC (doğru akım) hızlı şarj üniteleri ise çok daha yüksek güçte çalışır, aracı çok daha kısa sürede şarj eder, ancak orta gerilim bağlantısı ve özel bir trafo/pano altyapısı gerektirdiğinden daha çok toplu otoparklar, AVM'ler ve ticari tesisler için uygundur." },
      { t: "h2", x: "Bakım ve uzun ömürlü kullanım için öneriler" },
      { t: "p", x: "Bir EV şarj ünitesinin güvenli ve verimli çalışmaya devam etmesi için kaçak akım rölesinin (RCD) yılda en az bir kez test edilmesini, kablo ve konnektörlerin görsel olarak kontrol edilmesini, cihaz yazılımının güncel tutulmasını ve özellikle apartman/site kullanımında yük yönetimi ayarlarının bina toplam tüketimine göre periyodik olarak gözden geçirilmesini öneriyoruz." },
      { t: "p", x: "Konutunuz veya siteniz için EV şarj ünitesi keşfi talep etmek isterseniz bizimle iletişime geçebilirsiniz." },
    ],
  },

  {
    slug: "gunes-enerjisi-aku-jenerator",
    date: "2026-08-27",
    topic: "Enerji ve depolama",
    title: "Güneş Enerjisi + Akü + Jeneratör: Kesintisiz ve Sürdürülebilir Enerji Çözümü",
    summary:
      "Güneş paneli, akü ve jeneratörü bir arada kullanan hibrit sistemler hem sürdürülebilirlik hem de kesintisiz güç sağlar — doğru boyutlandırıldıkları sürece.",
    blocks: [
      { t: "p", x: "Artan elektrik maliyetleri ve sık yaşanan kesintiler, villa sahiplerini ve işletmeleri kendi enerjilerini üretip depolayabilecekleri çözümler aramaya yönlendiriyor. Güneş enerjisi paneli, akü (enerji depolama) ve jeneratörü bir arada kullanan hibrit sistemler, hem sürdürülebilirlik hem de kesintisiz güç sağlıyor." },
      { t: "h2", x: "Sistem nasıl çalışır?" },
      { t: "p", x: "Güneş panelleri gün içinde elektrik üretir; ihtiyaç fazlası enerji akülerde depolanır. Güneşin yetersiz kaldığı veya tüketimin yüksek olduğu anlarda akü devreye girer; uzun süreli kesintilerde ise jeneratör otomatik olarak yedekleme yapar. Bu üç bileşen doğru boyutlandırıldığında, bina neredeyse hiç şebeke kesintisi hissetmez." },
      { t: "h2", x: "Kimler için uygun?" },
      { t: "p", x: "Villalar ve siteler için konfor ve tasarruf, işletmeler ve küçük ticari tesisler için ise üretim/operasyon sürekliliği açısından değerli bir yatırımdır. Özellikle sık elektrik kesintisi yaşanan bölgelerde jeneratör+akü kombinasyonu kritik yükleri (aydınlatma, güvenlik sistemleri, soğutma) kesintisiz ayakta tutar." },
      { t: "h2", x: "MBO'nun yaklaşımı" },
      { t: "p", x: "Enerji tüketim profilinizi analiz ederek panel gücünü, akü kapasitesini ve jeneratör büyüklüğünü doğru boyutlandırıyor; kurulumdan devreye almaya ve sistemin uzaktan izlenmesine kadar tüm süreci tek elden yürütüyoruz. Bu, bizim uzun vadede odaklandığımız enerji yönetimi ve teknik işletme yaklaşımımızın da bir parçası." },
      { t: "h2", x: "Sistem boyutlandırması neden bu kadar kritik?" },
      { t: "p", x: "Güneş enerjisi + akü + jeneratör sistemlerinde en sık yapılan hata, bileşenlerin birbirinden bağımsız seçilmesidir. Panel gücü tüketim profiline göre az kalırsa akü hiçbir zaman tam dolmaz; akü kapasitesi yetersizse kesinti anlarında kritik yükler desteklenemez; jeneratör yanlış boyutlandırılırsa ya gereksiz yakıt tüketimi ya da yetersiz yedekleme yaşanır. Bu yüzden sistemi kurmadan önce binanın saatlik/günlük tüketim profilini çıkarmak, doğru boyutlandırmanın ilk adımıdır." },
      { t: "h2", x: "Yatırımın geri dönüşü nasıl değerlendirilir?" },
      { t: "p", x: "Güneş enerjisi yatırımının geri dönüş süresi; kurulu güç, bölgenin güneşlenme potansiyeli, mevcut elektrik tarifesi ve öz tüketim oranına göre değişir. Akü ve jeneratör eklenmesi başlangıç yatırımını artırsa da, sık kesinti yaşanan bölgelerde operasyonel sürekliliğin sağladığı değer, saf mali geri dönüş hesabının ötesinde bir avantaj sunar. Doğru bir fizibilite için mevcut fatura verilerinizin ve yük profilinizin birlikte değerlendirilmesi gerekir." },
      { t: "h2", x: "Uzaktan izleme ve akıllı yönetim" },
      { t: "p", x: "Modern hibrit sistemlerde panel üretimi, akü şarj durumu ve jeneratör çalışma verileri bir izleme yazılımı üzerinden uzaktan takip edilebilir. Bu sayede performans düşüşleri veya arıza belirtileri erken fark edilir, bakım süreçleri planlı hale gelir ve sistemin ömrü boyunca beklenen verim korunur." },
      { t: "p", x: "Villanız, siteniz veya işletmeniz için güneş enerjisi + akü + jeneratör sistemi keşfi talep etmek isterseniz bize ulaşabilirsiniz." },
    ],
  },

  {
    slug: "panolar-yangin-algilama-gazli-sondurme",
    date: "2026-08-27",
    topic: "Pano ve yangın güvenliği",
    title: "Elektrik Panoları, Yangın Algılama ve Gazlı Söndürme Sistemleri: Bina Güvenliğinin Temeli",
    summary:
      "Bir binanın elektrik altyapısı ne kadar iyi tasarlanmış olursa olsun, doğru pano sistemleri ve yangın güvenliği önlemleri olmadan tam anlamıyla güvenli sayılmaz.",
    blocks: [
      { t: "p", x: "Bir binanın elektrik altyapısı ne kadar iyi tasarlanmış olursa olsun, doğru pano sistemleri ve yangın güvenliği önlemleri olmadan tam anlamıyla güvenli sayılmaz. Elektrik panoları, yangın algılama/ihbar sistemleri ve hassas alanlar için gazlı söndürme sistemleri, MBO'nun mega proje tecrübesinden gelen üç temel uzmanlık alanı." },
      { t: "h2", x: "Elektrik panoları" },
      { t: "p", x: "Alçak gerilim (AG) ve orta gerilim (OG) dağıtım panolarının tasarımı, üretim koordinasyonu, montajı ve devreye alınmasını IEC/EN standartlarına uygun şekilde yürütüyoruz — AVM'lerden endüstriyel tesislere kadar farklı ölçekte projelerde uyguladığımız bir alan." },
      { t: "h2", x: "Yangın algılama ve ihbar sistemleri" },
      { t: "p", x: "Erken uyarı, binanın ve içindekilerin güvenliği için kritik önemde. Zorlu Center ve Emaar Square gibi projelerde yangın algılama, acil anons ve entegre güvenlik sistemlerinin tasarımı ve devreye alınmasında yer aldık." },
      { t: "h2", x: "Gazlı söndürme sistemleri" },
      { t: "p", x: "Sunucu/data odaları, elektrik trafo ve pano odaları, arşiv gibi suyla söndürülemeyecek hassas alanlar için gazlı söndürme sistemleri kritik bir koruma katmanıdır. Bu sistemlerin doğru gaz tipi seçimi, oda sızdırmazlığı ve devreye alma testleriyle birlikte planlanması gerekir — bu bütünsel yaklaşımı projelerimizde uyguluyoruz." },
      { t: "h2", x: "Neden bütünsel bir yaklaşım önemli?" },
      { t: "p", x: "Pano, yangın algılama ve söndürme sistemlerini ayrı ayrı değil, binanın elektrik ve otomasyon altyapısının bir parçası olarak birlikte tasarladığımızda, hem uyumluluk hem de işletme aşamasında daha az sorun ortaya çıkıyor. MBO Yapı Sistem olarak mühendislik, uygulama ve devreye almayı tek elden yürütüyoruz." },
      { t: "h2", x: "Pano seçiminde dikkat edilmesi gerekenler" },
      { t: "p", x: "Doğru pano seçimi; beklenen yük büyüklüğü, kısa devre akımı dayanımı, koruma sınıfı (IP derecesi) ve gelecekteki kapasite artışına uygunluk gibi kriterlere göre yapılır. Özellikle büyük ölçekli projelerde panonun yalnızca bugünün ihtiyacına değil, tesisin genişleme senaryolarına da uygun tasarlanması, ileride maliyetli revizyonların önüne geçer." },
      { t: "h2", x: "Yangın algılama sistemi türleri" },
      { t: "p", x: "Nokta tipi dedektörler küçük ve orta ölçekli alanlarda yaygın kullanılırken; hassas alanlarda (data odaları, arşivler) çok daha erken uyarı veren aspirasyonlu (havadan numune alan) algılama sistemleri tercih edilir. Doğru sistem seçimi, alanın kullanım amacına, hava sirkülasyonuna ve olası yangın kaynaklarının niteliğine göre belirlenmelidir." },
      { t: "h2", x: "Gazlı söndürme sistemleri ne zaman tercih edilir?" },
      { t: "p", x: "Su ile söndürmenin ekipmana zarar vereceği veya etkisiz kalacağı alanlarda — sunucu odaları, trafo ve pano odaları, arşivler — gazlı söndürme sistemleri devreye girer. Sistemin etkili çalışabilmesi için oda sızdırmazlığının (hava kaçağı testleri dahil) doğrulanması ve gaz miktarının oda hacmine göre doğru hesaplanması gerekir; eksik hesaplanan bir sistem, yangın anında yetersiz kalabilir." },
      { t: "p", x: "Projeniz için elektrik panosu, yangın algılama veya gazlı söndürme sistemi keşfi talep etmek isterseniz bizimle iletişime geçebilirsiniz." },
    ],
  },
];
