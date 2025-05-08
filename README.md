# 🛒 Product Listing App

Bu proje, [Fake Store API](https://fakestoreapi.com/) kullanılarak ürün verilerinin dinamik olarak listelendiği basit bir web uygulamasıdır. Uygulama HTML, CSS ve JavaScript ile geliştirilmiştir.

## 🚀 Özellikler

- 🎯 Ürün verileri `fetch()` ile API'den alınır
- 🖼 Her ürün için:
  - Görsel (image)
  - Başlık (title)
  - Fiyat (price)
  - Açıklama (description)
  - Puanlama ve oy sayısı (rating)
- 📄 Her ürün `li` etiketi ile DOM'a dinamik olarak eklenir

## 📁 Dosya Yapısı

```bash
/project-folder
├── index.html # Ana HTML sayfası
├── style.css # Stil dosyası (isteğe bağlı)
└── script.js # JavaScript dosyası
```

## 💻 Kullanım

1. Bu dosyaları bir klasöre kopyala.
2. `index.html` dosyasını bir tarayıcıda aç.
3. Sayfa yüklendiğinde API'den ürünler çekilir ve liste halinde gösterilir.

## 🌐 Kullanılan API

- [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

Bu API sahte (dummy) verilerle e-ticaret testi için kullanılabilir.

## 🧠 Geliştirme Fikirleri

- Ürünleri kategoriye göre filtrele
- Arama kutusu ile ürün başlığına göre arama yap
- `add to cart` butonları ekle
- LocalStorage ile sepet yapısı oluştur

