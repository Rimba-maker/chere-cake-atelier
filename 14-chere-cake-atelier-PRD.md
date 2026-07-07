# PRD: Chère Cake Atelier — Brand Cake & Dessert Custom

## 1. Brand Identity

**Nama Brand:** Chère Cake Atelier
**Alasan Naming:** "Chère" (Prancis: sayang/tersayang) — memberi nuansa personal & endearing, cocok untuk kue yang dibuat khusus untuk orang tersayang (ulang tahun, anniversary). "Atelier" = studio kerajinan, positioning sebagai custom cake maker bukan toko kue pabrikan.

**Beda dari #208 Cafe Dessert & Waffle dan brand kue lain di list:**
- Bukan cafe dine-in, murni **made-to-order custom cake** — model bisnis pre-order dengan desain custom per klien
- Fokus di **cake artistry & personalization**, bukan menu tetap yang dijual harian

**Tagline:** *"Setiap Kue, Dirancang Untuk Ceritamu."*

**Target Audience:**
- Orang yang mau kasih kejutan ulang tahun (pasangan, anak, sahabat)
- Calon pengantin (wedding cake, engagement cake)
- Brand/perusahaan untuk corporate gifting & launching
- Ibu-ibu yang pesan kue ulang tahun anak bertema custom
- Wanita usia 22-40 sebagai pemesan utama (data pasar cake custom Indonesia didominasi segmen ini)

**Brand Voice:**
- Tone: Personal, artistik, warm, sedikit playful tapi tetap elegan
- Style copywriting: Storytelling tentang momen di balik pesanan, visual-forward
- Avoid: Bahasa generik "kue enak murah", terlalu formal korporat

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (custom cake, dessert table, cake decorating)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo elegant, nav, CTA "Pesan Custom" |
| 2 | Hero | React island `client:load` | Showcase cake artistry terbaik |
| 3 | Kategori Kue | React island `client:visible` | Birthday, wedding, corporate, dessert table |
| 4 | Cara Custom | `.astro` static | 4 langkah dari konsultasi ke pengambilan |
| 5 | Galeri Karya | React island `client:visible` | Portfolio kue dengan filter |
| 6 | Rasa & Filling | React island `client:visible` | Pilihan rasa dasar cake |
| 7 | Paket Harga | React island `client:visible` | Tier berdasarkan tingkat kerumitan |
| 8 | Dessert Table & Bulk | React island `client:visible` | Layanan tambahan untuk event |
| 9 | Testimonial | React island `client:visible` | Review pelanggan dengan foto kue |
| 10 | FAQ | React island `client:visible` | Pertanyaan pemesanan |
| 11 | CTA Konsultasi | React island `client:idle` | Form request custom |
| 12 | Footer | `.astro` static | Kontak, sosmed, jam operasional |

---

## 4. Copywriting

### Navbar
- Menu: Kategori • Galeri • Rasa • Harga • Dessert Table
- CTA: **Pesan Custom**

### Hero
- **Headline:** Kue Yang Bercerita Tentang Momenmu.
- **Subheadline:** Custom cake dan dessert table untuk ulang tahun, pernikahan, dan momen spesial lainnya. Dirancang dari nol, bukan dipilih dari katalog yang itu-itu saja.
- **CTA Primary:** Konsultasi Desain Gratis
- **CTA Secondary:** Lihat Galeri Karya

Trust badges: "300+ Kue Custom Terkirim" • "Bahan Premium Tanpa Pengawet" • "Desain 100% Orisinal" • "H-3 Pre-Order"

### Kategori Kue
- **Heading:** Untuk Momen Apa?

Grid 5 kategori:

**🎂 Birthday Cake**
Dari tema kartun anak sampai minimalis elegan dewasa — desain sesuai kepribadian yang berulang tahun.
*Mulai Rp 350.000*

**💍 Wedding & Engagement Cake**
Tiered cake, dummy cake untuk dekorasi, atau cutting cake asli — semua dengan finishing premium.
*Mulai Rp 1.500.000*

**🏢 Corporate Cake & Gifting**
Cake dengan logo brand, hampers dessert untuk klien, atau kue launching produk.
*Custom quote*

**🍰 Dessert Table**
Rangkaian dessert kecil (cupcake, macaron, tart mini, cake pop) untuk buffet acara.
*Mulai Rp 25.000/pcs (min. 30 pcs)*

**🎉 Themed Cake Anak**
Karakter kartun favorit, tema sekolah, ulang tahun tematik — dibuat dengan food-grade fondant/buttercream aman anak.
*Mulai Rp 450.000*

### Cara Custom
- **Heading:** Dari Ide ke Kue Nyata.

1. **💬 Konsultasi Desain** — Ceritakan tema, warna, jumlah tamu/porsi, dan referensi (Pinterest/IG boleh dilampirkan)
2. **🎨 Sketsa & Quote** — Kami kirim sketsa desain kasar + estimasi harga dalam 1-2 hari
3. **✅ DP & Konfirmasi** — DP 50% untuk mulai produksi, jadwal pengambilan dikunci
4. **🎂 Pengambilan/Pengantaran** — Kue siap H-0 pagi/siang sesuai jadwal acara, delivery tersedia dengan box khusus anti-goyang

### Galeri Karya
- **Heading:** Karya Kami.
- Filter: Semua • Birthday • Wedding • Corporate • Dessert Table • Anak
- Masonry grid 20-30 foto kue dengan caption tema singkat

### Rasa & Filling
- **Heading:** Pilih Rasa Favoritmu.

**Base Cake:**
- Vanilla Chiffon
- Chocolate Fudge
- Red Velvet
- Pandan
- Matcha

**Filling:**
- Buttercream Vanilla/Chocolate
- Cream Cheese
- Salted Caramel
- Ganache Dark Chocolate
- Fresh Fruit Compote

**Finishing:**
- Buttercream Smooth
- Fondant
- Semi-Naked Cake
- Drip Cake
- Fresh Flower Topping

Note: *"Kombinasi bebas — misal Red Velvet + Cream Cheese + Semi-Naked, atau custom kombinasi lain sesuai selera."*

### Paket Harga
- **Heading:** Estimasi Harga Berdasarkan Kompleksitas.

**🌱 Simple — Rp 350.000–600.000**
- 1 tier, ukuran 16-18cm
- Buttercream smooth/semi-naked
- Tulisan/dekorasi sederhana
- Porsi: 12-15 orang

**🌿 Custom Design — Rp 650.000–1.200.000** ⭐ Terpopuler
- 1-2 tier, desain karakter/tema custom
- Fondant/buttercream dengan detail dekorasi
- Topper custom (opsional cetak nama/angka)
- Porsi: 15-25 orang

**🌳 Premium/Wedding — Rp 1.500.000+**
- 2-4 tier, full custom desain
- Fresh flower atau detail fondant kompleks
- Termasuk dummy tier untuk foto (opsional)
- Porsi: 30-100+ orang (tergantung tier)

*Harga final ditentukan setelah konsultasi desain — kompleksitas dekorasi mempengaruhi harga.*

### Dessert Table & Bulk
- **Heading:** Lengkapi Acaramu Dengan Dessert Table.
- **Subheadline:** Cocok untuk wedding, ulang tahun, atau corporate event yang butuh lebih dari satu kue.

Pilihan item (per pcs, min. 30 pcs per item):
- Cupcake custom topper — Rp 25.000
- Macaron French — Rp 15.000
- Mini tart buah — Rp 28.000
- Cake pop — Rp 18.000
- Cookies decorated — Rp 12.000

Paket Dessert Table (min. 50 tamu): kombinasi 4-5 jenis dessert + centerpiece cake kecil, mulai Rp 2.500.000 (setup termasuk stand & dekorasi meja).

### Testimonial
> "Kue ulang tahun anak saya tema dinosaurus, detailnya di luar ekspektasi. Anak saya sampai gak mau motong saking sayangnya." — **Ibu Sarah, birthday cake anak**

> "Wedding cake 3 tier kami dibuat sesuai moodboard Pinterest yang saya kirim — hasilnya persis, bahkan lebih bagus dari bayangan." — **Nadia, pengantin 2024**

> "Pesan dessert table untuk launching produk kantor, tamu-tamu foto-foto terus. Rasa kuenya juga tidak kalah dari tampilannya." — **Marketing Manager, brand lokal**

### FAQ
1. Berapa lama minimal pre-order? → H-3 untuk desain simpel, H-7 untuk custom design, H-14 untuk wedding cake.
2. Bisa kirim referensi dari Pinterest/Instagram? → Bisa, justru sangat membantu proses desain jadi lebih cepat dan sesuai ekspektasi.
3. Apakah bisa request tanpa gula/rendah gula untuk diabetes? → Bisa, ada opsi rendah gula dengan tambahan biaya bahan.
4. Apakah kue bisa dikirim ke luar kota? → Untuk saat ini pengiriman terbatas dalam kota karena resiko kerusakan selama perjalanan jauh.
5. Bagaimana kalau desain di sketsa awal ingin diubah? → Free 1x revisi sketsa sebelum produksi dimulai.

### CTA Konsultasi
- Form: Nama, WhatsApp, Jenis kue (dropdown), Tanggal dibutuhkan, Jumlah porsi, Referensi desain (upload/link), Budget range
- **CTA:** Konsultasi Desain Gratis

### Footer
- Tagline: *"Setiap potongan, kenangan yang dirayakan."*

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/custom-birthday-cake-elegant | "Custom cake elegant" | 1920x1080 |
| Kategori - Birthday | Pexels | https://www.pexels.com/search/birthday%20cake%20custom%20design/ | "Birthday cake custom" | 800x600 |
| Kategori - Wedding | Unsplash | https://unsplash.com/s/photos/wedding-cake-tiered | "Wedding cake tiered" | 800x600 |
| Kategori - Corporate | Pexels | https://www.pexels.com/search/corporate%20cake%20logo/ | "Corporate cake" | 800x600 |
| Kategori - Dessert Table | Unsplash | https://unsplash.com/s/photos/dessert-table-event | "Dessert table event" | 800x600 |
| Kategori - Anak | Pexels | https://www.pexels.com/search/kids%20birthday%20cake%20theme/ | "Themed cake anak" | 800x600 |
| Galeri (20-30) | Unsplash + Pexels | https://unsplash.com/s/photos/custom-cake-decorating | Berbagai desain kue | 800x800 |
| Rasa - Slice | Pexels | https://www.pexels.com/search/cake%20slice%20layers/ | "Cake slice layers" | 800x600 |
| Dessert Table Items | Unsplash | https://unsplash.com/s/photos/macaron-cupcake-dessert-table | "Macaron cupcake table" | 800x600 |
| Testimonial | Pexels | https://www.pexels.com/search/happy%20woman%20cake%20portrait/ | "Customer with cake" | 200x200 |

---

## 6. Animation Spec (Framer Motion)

**Vibe:** Artistik & personal — reveal yang graceful, showcase karya seperti galeri seni kecil.

### Hero (React island, `client:load`)
```tsx
const artisanReveal = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 } }
}
```

### Kategori Grid (React island, `client:visible`)
- Cards reveal stagger `0.08s`
- Hover: image scale `1.05` + overlay dengan harga mulai

### Galeri Karya (React island, `client:visible`)
- Masonry `layout` prop, filter `layoutId` indicator
- Image hover: scale + caption slide-up
- Click → lightbox morph

### Rasa & Filling (React island, `client:visible`)
- Pills reveal stagger, hover color shift
- Kombinasi note: fade-in setelah pills

### Paket Harga (React island, `client:visible`)
- 3 cards stagger, "Terpopuler" subtle glow
- Hover: lift + list item pulse

### Testimonial (React island, `client:visible`)
- Carousel auto-rotate 8s, cross-fade, pause on hover

### Scroll Reveal (reusable)
```tsx
const chereFade = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
}
```

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Kategori, Galeri, Rasa, Paket Harga, Dessert Table, Testimonial, FAQ
- `client:idle` → Form CTA
- Sisanya: static (Cara Custom)

---

## 7. SEO Meta

- **Title:** Chère Cake Atelier — Custom Cake & Dessert Table [Kota]
- **Description:** Custom birthday cake, wedding cake, dan dessert table dengan desain orisinal. Bahan premium, pre-order H-3, konsultasi desain gratis.
- **Keywords:** custom cake [kota], kue ulang tahun custom, wedding cake custom, dessert table, kue tema karakter anak
- **OG Image:** Showcase custom cake terbaik dengan logo (1200x630)
- **Schema:** `Bakery` + `LocalBusiness` + `Product` schema
