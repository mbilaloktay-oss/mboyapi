# MBO Yapı Sistem — kurumsal web sitesi

Sıfır bağımlılıklı statik site. Kurulum gerektirmez, sadece Node.js ister.

## Kullanım

    node build.js      # siteyi üretir  →  dist/
    node audit.js      # taşıma denetimi: eski sitedeki her sayfa yerinde mi?
    node preview.js    # tek klasörde gezilebilir önizleme  →  preview/

`dist/` klasörünün içeriği doğrudan herhangi bir sunucuya, GitHub Pages'e,
Netlify'a veya Vercel'e konabilir. Derleme adımı, paket kurulumu gerekmez.

## Klasörler

    content/     Sitenin bütün metinleri. Bir yazıyı değiştirmek için
                 yalnızca buradaki dosyaları düzenlemek yeterli.
      site.js         şirket bilgileri, iletişim, menü
      pages.js        ana sayfa, hakkımızda, iletişim metinleri
      services.js     9 hizmet
      projects.js     12 referans proje
      documents.js    Doküman Merkezi yazıları ve şablonları
      images.js       fotoğraflar (bkz. aşağıdaki not)

    lib/layout.js     sayfa iskeleti (başlık, menü, alt bilgi)
    static/styles.css tasarım sistemi
    build.js          üretici


## GitHub ve otomatik yayın

Depo GitHub'a yüklendikten sonra Netlify'a bağlanır. `netlify.toml` dosyası
depoda durduğu için Netlify arayüzünde ayar girmeye gerek yoktur — derleme
komutu, yayın klasörü ve Node sürümü oradan okunur.

Bağlantı kurulduktan sonra akış şu hale gelir: depoya yeni bir sürüm işlenir,
Netlify bunu kendiliğinden görür, `node build.js` çalıştırır ve `dist/`
klasörünü yayına alır. Elle dosya taşımak gerekmez.

## Yapılacaklar

- [ ] Fotoğraflar hâlâ Wix sunucusunda. İndirilip `static/gorseller/` içine
      konacak ve `content/images.js` içindeki `local` alanları doldurulacak.
- [ ] Doküman Merkezi PDF'leri aynı şekilde `static/dokumanlar/` içine alınacak.
- [ ] İletişim formunun `action` adresi gerçek bir servise bağlanacak
      (Formspree, Netlify Forms vb.) — `build.js` içinde `FORM_ID_BURAYA`.
- [ ] Zorlu Center fotoğrafının telif durumu teyit edilecek.
- [ ] MBO logosu görsel olarak eklenecek (şu an yazıyla).
