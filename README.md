# NexTech - Geleceğin Teknolojisi

Benzersiz, yaratıcı ve büyüleyici bir teknoloji şirketi tanıtım sitesi. Next.js, Tailwind CSS ve Framer Motion kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Video Arka Plan**: Teknoloji temalı video arka planı
- **Hareketli Video Kartları**: İnteraktif video demo kartları
- **Dark Tema**: Modern ve şık dark tema tasarımı
- **Animasyonlar**: Framer Motion ile akıcı animasyonlar
- **Parçacık Efekti**: Canvas tabanlı interaktif parçacık arka planı
- **Matrix Rain**: Matrix benzeri yağmur efekti
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Glass Morphism**: Modern cam efekti tasarım öğeleri
- **Gradient Efektler**: Renkli gradient geçişleri
- **İnteraktif Bileşenler**: Hover efektleri ve geçişler
- **Video Kontrolleri**: Play/Pause ve Mute kontrolleri
- **Fallback Sistemi**: Video olmadığında animasyonlu fallback

## 🛠️ Teknolojiler

- **Next.js 14**: React framework
- **TypeScript**: Tip güvenliği
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animasyon kütüphanesi
- **Lucide React**: Modern ikon kütüphanesi

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd tech-company-site
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Ana Renkler**: Mavi, Mor, Pembe gradientleri
- **Arka Plan**: Siyah (#000000)
- **Metin**: Beyaz ve gri tonları
- **Vurgu**: Neon mavi efektler

### Animasyonlar
- **Fade In**: Sayfa yüklenirken yumuşak geçişler
- **Stagger**: Bileşenlerin sıralı animasyonu
- **Hover Effects**: İnteraktif hover efektleri
- **Parçacık Sistemi**: Dinamik parçacık animasyonları

### Bileşenler
- **Video Background**: Teknoloji temalı video arka planı
- **Hero Section**: Etkileyici giriş bölümü
- **Navigation**: Şeffaf navigasyon menüsü
- **Video Cards**: Hareketli video demo kartları
- **Services**: Hizmet kartları
- **Tech Showcase**: İnteraktif teknoloji vitrini
- **Stats**: İstatistik kartları
- **CTA**: Çağrı-to-action bölümü
- **Fallback Video**: Video olmadığında animasyonlu fallback

## 📱 Responsive Tasarım

- **Mobile First**: Mobil öncelikli tasarım
- **Breakpoints**: sm, md, lg, xl
- **Flexible Grid**: Esnek grid sistemi
- **Touch Friendly**: Dokunmatik cihaz uyumlu

## 🚀 Performans

- **Image Optimization**: Next.js image optimizasyonu
- **Code Splitting**: Otomatik kod bölme
- **Lazy Loading**: Gecikmeli yükleme
- **Bundle Analysis**: Bundle analizi

## 📄 Sayfa Yapısı

```
src/
├── app/
│   ├── globals.css          # Global stiller
│   ├── layout.tsx           # Ana layout
│   └── page.tsx             # Ana sayfa
├── components/
│   ├── VideoBackground.tsx  # Video arka planı
│   ├── VideoCards.tsx       # Video demo kartları
│   ├── FallbackVideo.tsx    # Fallback video bileşeni
│   ├── ParticleBackground.tsx  # Parçacık arka planı
│   └── TechShowcase.tsx        # Teknoloji vitrini
└── ...
```

## 🎯 Özelleştirme

### Video Dosyaları Ekleme
`public/videos/` klasörüne aşağıdaki dosyaları ekleyin:

- `tech-background.mp4` - Ana arka plan videosu
- `ai-ml-demo.mp4` - AI/ML demo videosu
- `blockchain-demo.mp4` - Blockchain demo videosu
- `iot-demo.mp4` - IoT demo videosu
- `cloud-demo.mp4` - Cloud computing demo videosu

### Renkleri Değiştirme
`globals.css` dosyasında CSS değişkenlerini güncelleyin:

```css
:root {
  --foreground-rgb: 255, 255, 255;
  --background-start-rgb: 0, 0, 0;
  --background-end-rgb: 0, 0, 0;
}
```

### Animasyonları Özelleştirme
`tailwind.config.ts` dosyasında animasyon ayarlarını değiştirin:

```typescript
animation: {
  'float': 'float 6s ease-in-out infinite',
  'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
}
```

## 🔧 Geliştirme

### Yeni Bileşen Ekleme
1. `src/components/` klasöründe yeni bileşen oluşturun
2. TypeScript ve React best practices kullanın
3. Framer Motion animasyonları ekleyin
4. Tailwind CSS ile stillendirin

### Yeni Sayfa Ekleme
1. `src/app/` klasöründe yeni route oluşturun
2. `layout.tsx` dosyasını güncelleyin
3. Navigation menüsüne ekleyin

## 📦 Build ve Deploy

### Production Build
```bash
npm run build
```

### Production Sunucusu
```bash
npm start
```

### Vercel Deploy
```bash
npm install -g vercel
vercel
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Website**: [nextech.com](https://nextech.com)
- **Email**: info@nextech.com
- **LinkedIn**: [NexTech](https://linkedin.com/company/nextech)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
