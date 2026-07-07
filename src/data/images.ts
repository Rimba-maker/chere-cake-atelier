export const heroImage = {
  url: "https://images.pexels.com/photos/30469068/pexels-photo-30469068.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  alt: "Kue ulang tahun custom elegan dengan hiasan bunga gula putih dan pink",
};

export const cakeSliceImage = {
  url: "https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  alt: "Potongan kue merah lapis dengan cream cheese frosting",
};

export const dessertTableItemsImage = {
  url: "https://images.pexels.com/photos/11168993/pexels-photo-11168993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  alt: "Aneka macaron warna-warni tersusun rapi",
};

export type GaleriKategori = "Birthday" | "Wedding" | "Corporate" | "Dessert Table" | "Anak";

export const galeriKategoriList: readonly GaleriKategori[] = [
  "Birthday",
  "Wedding",
  "Corporate",
  "Dessert Table",
  "Anak",
];

export type CategoryIcon = "Cake" | "Diamond" | "Buildings" | "Cookie" | "Confetti";

export const categories: {
  kategori: GaleriKategori;
  icon: CategoryIcon;
  title: string;
  desc: string;
  price: string;
  image: string;
  alt: string;
}[] = [
  {
    kategori: "Birthday",
    icon: "Cake",
    title: "Birthday Cake",
    desc: "Dari tema kartun anak sampai minimalis elegan dewasa — desain sesuai kepribadian yang berulang tahun.",
    price: "Mulai Rp 350.000",
    image: "https://images.pexels.com/photos/30354868/pexels-photo-30354868.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Kue ulang tahun custom bertema topi dengan hiasan bunga",
  },
  {
    kategori: "Wedding",
    icon: "Diamond",
    title: "Wedding & Engagement Cake",
    desc: "Tiered cake, dummy cake untuk dekorasi, atau cutting cake asli — semua dengan finishing premium.",
    price: "Mulai Rp 1.500.000",
    image: "https://images.pexels.com/photos/26774581/pexels-photo-26774581.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Kue pernikahan bertingkat lima dengan rangkaian bunga",
  },
  {
    kategori: "Corporate",
    icon: "Buildings",
    title: "Corporate Cake & Gifting",
    desc: "Cake dengan logo brand, hampers dessert untuk klien, atau kue launching produk.",
    price: "Custom quote",
    image: "https://images.pexels.com/photos/34596958/pexels-photo-34596958.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Kue elegan putih di atas cake stand emas untuk acara formal",
  },
  {
    kategori: "Dessert Table",
    icon: "Cookie",
    title: "Dessert Table",
    desc: "Rangkaian dessert kecil (cupcake, macaron, tart mini, cake pop) untuk buffet acara.",
    price: "Mulai Rp 25.000/pcs (min. 30 pcs)",
    image: "https://images.pexels.com/photos/7026990/pexels-photo-7026990.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Meja dessert table dengan kue, macaron, dan rangkaian bunga",
  },
  {
    kategori: "Anak",
    icon: "Confetti",
    title: "Themed Cake Anak",
    desc: "Karakter kartun favorit, tema sekolah, ulang tahun tematik — dibuat dengan food-grade fondant/buttercream aman anak.",
    price: "Mulai Rp 450.000",
    image: "https://images.pexels.com/photos/7600387/pexels-photo-7600387.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Anak-anak bertepuk tangan di samping kue ulang tahun warna-warni",
  },
];

export const galeriImages: { kategori: GaleriKategori; image: string; alt: string }[] = [
  { kategori: "Birthday", image: "https://images.pexels.com/photos/7180728/pexels-photo-7180728.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Kue ulang tahun pink dengan bola emas di atas meja" },
  { kategori: "Birthday", image: "https://images.pexels.com/photos/14454566/pexels-photo-14454566.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Kue ulang tahun pink dengan bunga dan tulisan Happy Birthday" },
  { kategori: "Birthday", image: "https://images.pexels.com/photos/35523253/pexels-photo-35523253.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Kue coklat dengan lilin angka dan bunga" },
  { kategori: "Birthday", image: "https://images.pexels.com/photos/9627770/pexels-photo-9627770.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Close-up kue ulang tahun dengan lilin menyala dan hiasan bunga icing" },
  { kategori: "Birthday", image: "https://images.pexels.com/photos/8015132/pexels-photo-8015132.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Kue ulang tahun dengan satu lilin di atasnya" },

  { kategori: "Wedding", image: "https://images.pexels.com/photos/6479548/pexels-photo-6479548.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Kue pernikahan dengan hiasan rosemary dan jeruk kering" },
  { kategori: "Wedding", image: "https://images.pexels.com/photos/34596959/pexels-photo-34596959.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Kue pernikahan tiga tingkat putih di atas cake stand emas" },
  { kategori: "Wedding", image: "https://images.pexels.com/photos/14396233/pexels-photo-14396233.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Kue pernikahan putih dengan mawar putih" },
  { kategori: "Wedding", image: "https://images.pexels.com/photos/17001817/pexels-photo-17001817.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Kue pernikahan dengan rangkaian bunga di acara resepsi" },
  { kategori: "Wedding", image: "https://images.pexels.com/photos/9703865/pexels-photo-9703865.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Meja resepsi pernikahan boho dengan kue bertingkat" },

  { kategori: "Corporate", image: "https://images.pexels.com/photos/31243101/pexels-photo-31243101.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Kue putih dua tingkat dengan bunga segar di atas cake stand" },
  { kategori: "Corporate", image: "https://images.pexels.com/photos/10633531/pexels-photo-10633531.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Kue elegan dikelilingi vas bunga di atas meja" },
  { kategori: "Corporate", image: "https://images.pexels.com/photos/16120198/pexels-photo-16120198.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Meja mewah dengan kue bertingkat sebagai centerpiece" },
  { kategori: "Corporate", image: "https://images.pexels.com/photos/3983667/pexels-photo-3983667.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Wanita profesional mempresentasikan hasil dekorasi kue" },
  { kategori: "Corporate", image: "https://images.pexels.com/photos/31332192/pexels-photo-31332192.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Etalase bakery dengan kue lapis dan macaron tertata rapi" },

  { kategori: "Dessert Table", image: "https://images.pexels.com/photos/3593430/pexels-photo-3593430.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Dessert table outdoor dengan kue, donat, dan bunga" },
  { kategori: "Dessert Table", image: "https://images.pexels.com/photos/4005331/pexels-photo-4005331.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Dessert table bertema olahraga dengan kue dan camilan manis" },
  { kategori: "Dessert Table", image: "https://images.pexels.com/photos/34180404/pexels-photo-34180404.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Dessert table pernikahan outdoor dengan dekorasi bunga" },
  { kategori: "Dessert Table", image: "https://images.pexels.com/photos/10364951/pexels-photo-10364951.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Dessert table dengan permen dan camilan warna-warni" },

  { kategori: "Anak", image: "https://images.pexels.com/photos/6148512/pexels-photo-6148512.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Anak laki-laki memegang kue ulang tahun dengan lilin" },
  { kategori: "Anak", image: "https://images.pexels.com/photos/6343199/pexels-photo-6343199.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Anak perempuan meniup lilin kue ulang tahun" },
  { kategori: "Anak", image: "https://images.pexels.com/photos/5471944/pexels-photo-5471944.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Anak kecil meniup lilin di atas kue ulang tahun warna-warni" },
  { kategori: "Anak", image: "https://images.pexels.com/photos/7100331/pexels-photo-7100331.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Anak-anak tersenyum di samping kue ulang tahun di atas meja" },
  { kategori: "Anak", image: "https://images.pexels.com/photos/13870474/pexels-photo-13870474.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Anak perempuan merayakan ulang tahun dengan dekorasi meriah" },
];

export const testimonials: { quote: string; author: string; avatar: string }[] = [
  {
    quote:
      "Kue ulang tahun anak saya tema dinosaurus, detailnya di luar ekspektasi. Anak saya sampai gak mau motong saking sayangnya.",
    author: "Ibu Sarah, birthday cake anak",
    avatar: "https://images.pexels.com/photos/7525182/pexels-photo-7525182.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    quote:
      "Wedding cake 3 tier kami dibuat sesuai moodboard Pinterest yang saya kirim — hasilnya persis, bahkan lebih bagus dari bayangan.",
    author: "Nadia, pengantin 2024",
    avatar: "https://images.pexels.com/photos/287189/pexels-photo-287189.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    quote:
      "Pesan dessert table untuk launching produk kantor, tamu-tamu foto-foto terus. Rasa kuenya juga tidak kalah dari tampilannya.",
    author: "Marketing Manager, brand lokal",
    avatar: "https://images.pexels.com/photos/29852895/pexels-photo-29852895.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
];
