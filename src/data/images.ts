const baseUrl = import.meta.env.BASE_URL;
export const assetBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
const imageRoot = `${assetBase}images/cakes/`;

export const photo = (id: number, width: 480 | 960 | 1440 = 960) =>
  `${imageRoot}${id}-${width}.webp`;
export const photoSet = (id: number) =>
  `${photo(id, 480)} 480w, ${photo(id)} 960w`;
export const photoSource = (id: number) =>
  `https://www.pexels.com/photo/${id}/`;

export const heroImage = {
  url: photo(7180728, 1440),
  alt: "Cake buttercream pink dengan dekorasi bola pastel dan sentuhan emas",
};
export type GaleriKategori =
  "Birthday" | "Wedding" | "Corporate" | "Dessert Table" | "Anak";
export const galeriKategoriList: readonly GaleriKategori[] = [
  "Birthday",
  "Wedding",
  "Corporate",
  "Dessert Table",
  "Anak",
];

export const categories = [
  {
    kategori: "Birthday",
    title: "Birthday Cake",
    desc: "Untuk dia yang paling kamu kenal. Dari warna favorit sampai cerita kecil yang hanya kalian tahu.",
    price: "Mulai Rp 350.000",
    image: photo(14454566),
    alt: "Cake pink floral dengan topper Happy Birthday",
    id: 14454566,
  },
  {
    kategori: "Wedding",
    title: "Wedding & Engagement",
    desc: "Satu centerpiece untuk hari yang tak ingin kamu lupakan. Tiered, cutting, atau dummy cake dengan detail personal.",
    price: "Mulai Rp 1.500.000",
    image: photo(1702373),
    alt: "Wedding cake putih tiga tingkat dengan bunga segar",
    id: 1702373,
  },
  {
    kategori: "Corporate",
    title: "Corporate & Gifting",
    desc: "Rayakan pencapaian brand lewat cake berlogo, hampers dessert, atau centerpiece untuk launching.",
    price: "Custom quote",
    image: photo(34596958),
    alt: "Inspirasi cake putih bertingkat pada cake stand emas",
    id: 34596958,
  },
  {
    kategori: "Dessert Table",
    title: "Dessert Table",
    desc: "Cupcake, macaron, tart mini, dan cake pop. Satu meja kecil, banyak alasan untuk kembali.",
    price: "Min. 30 pcs per item",
    image: photo(7026990),
    alt: "Dessert table hijau dengan cake dan aneka dessert",
    id: 7026990,
  },
  {
    kategori: "Anak",
    title: "Little Celebrations",
    desc: "Dunia kecilnya, jadi cake sungguhan. Tema karakter dan warna favorit dengan fondant atau buttercream food-grade.",
    price: "Mulai Rp 450.000",
    image: photo(8015132),
    alt: "Cake kecil dengan lilin dan dekorasi pesta warna-warni",
    id: 8015132,
  },
] satisfies {
  kategori: GaleriKategori;
  title: string;
  desc: string;
  price: string;
  image: string;
  alt: string;
  id: number;
}[];

export type GalleryPhoto = {
  id: number;
  kategori: GaleriKategori;
  title: string;
  image: string;
  alt: string;
  landscape?: boolean;
};
const gallery: Omit<GalleryPhoto, "image">[] = [
  {
    id: 7180728,
    kategori: "Birthday",
    title: "Pink & a little gold",
    alt: "Cake pink dengan dekorasi bola pastel dan sentuhan emas",
  },
  {
    id: 1702373,
    kategori: "Wedding",
    title: "A floral kind of forever",
    alt: "Wedding cake tiga tingkat putih dengan bunga",
  },
  {
    id: 4959709,
    kategori: "Anak",
    title: "A pop of blue",
    alt: "Drip cake biru dengan buah beri dan cokelat",
  },
  {
    id: 11217160,
    kategori: "Dessert Table",
    title: "Tiny pink pleasures",
    alt: "Cupcake pink dalam cangkir bermotif bunga",
  },
  {
    id: 30469068,
    kategori: "Birthday",
    title: "Flowers, made sweeter",
    alt: "Cake pink dengan bunga putih dan ranting bunga",
  },
  {
    id: 34596958,
    kategori: "Corporate",
    title: "The elegant centerpiece",
    alt: "Cake putih bertingkat di atas stand emas",
  },
  {
    id: 14454566,
    kategori: "Birthday",
    title: "Say it with pink",
    alt: "Birthday cake pink floral dengan topper Happy Birthday",
  },
  {
    id: 6479548,
    kategori: "Wedding",
    title: "Citrus & rosemary",
    alt: "Cake semi-naked bertingkat dengan jeruk kering dan rosemary",
  },
  {
    id: 31972322,
    kategori: "Dessert Table",
    title: "A table full of joy",
    alt: "Meja pesta penuh dessert pastel",
    landscape: false,
  },
  {
    id: 8015132,
    kategori: "Anak",
    title: "One little wish",
    alt: "Cake putih kecil dengan lilin dan ceri di meja pesta pink",
  },
  {
    id: 2067436,
    kategori: "Birthday",
    title: "For the chocolate lover",
    alt: "Cake cokelat pada stand dengan latar gelap",
  },
  {
    id: 31243101,
    kategori: "Corporate",
    title: "White on blush",
    alt: "Cake putih dengan bunga pada meja berwarna pink",
  },
  {
    id: 30354868,
    kategori: "Birthday",
    title: "A cake with character",
    alt: "Cake bertema topi dengan ilustrasi wajah dan bunga pink",
  },
  {
    id: 26774581,
    kategori: "Wedding",
    title: "Love, layer by layer",
    alt: "Wedding cake putih tinggi dengan rangkaian bunga",
  },
  {
    id: 35523253,
    kategori: "Birthday",
    title: "Another year, another wish",
    alt: "Cake cokelat dengan lilin angka di atas meja",
  },
  {
    id: 9627770,
    kategori: "Anak",
    title: "Make a wish",
    alt: "Cake dengan remah cokelat dan lilin angka enam",
  },
  {
    id: 14396233,
    kategori: "Wedding",
    title: "Simply, beautifully white",
    alt: "Cake putih di samping rangkaian mawar",
    landscape: true,
  },
  {
    id: 17001817,
    kategori: "Wedding",
    title: "Garden celebration",
    alt: "Wedding cake bertingkat dengan bunga segar",
  },
  {
    id: 7026990,
    kategori: "Dessert Table",
    title: "A little garden party",
    alt: "Dessert table hijau dengan cake dan aneka dessert",
    landscape: true,
  },
  {
    id: 3593430,
    kategori: "Dessert Table",
    title: "Sweet afternoons",
    alt: "Dessert table outdoor dengan cake dan macaron",
    landscape: true,
  },
  {
    id: 34180404,
    kategori: "Dessert Table",
    title: "Something blue, something sweet",
    alt: "Meja dessert outdoor dengan bunga biru dan putih",
  },
  {
    id: 11168993,
    kategori: "Dessert Table",
    title: "The macaron palette",
    alt: "Macaron warna-warni dalam close-up",
  },
  {
    id: 19036040,
    kategori: "Birthday",
    title: "Chocolate, dressed up",
    alt: "Aneka birthday cake cokelat dan drip cake",
  },
  {
    id: 2144200,
    kategori: "Birthday",
    title: "The first slice",
    alt: "Cake cokelat dengan cream dan ceri yang sudah dipotong",
    landscape: true,
  },
  {
    id: 5682363,
    kategori: "Dessert Table",
    title: "Tea & tiny cakes",
    alt: "Cupcake pada stand bersama tea set",
    landscape: true,
  },
  {
    id: 29192543,
    kategori: "Anak",
    title: "Pastel birthday dreams",
    alt: "Birthday cake pastel dengan dekorasi cream",
  },
  {
    id: 1414234,
    kategori: "Birthday",
    title: "Pretty in every layer",
    alt: "Potongan cake pink berlapis pada piring putih",
    landscape: true,
  },
  {
    id: 16976667,
    kategori: "Dessert Table",
    title: "A cherry on top",
    alt: "Dessert cokelat dengan cream, ceri, dan stroberi di piring",
    landscape: true,
  },
];
export const galeriImages: GalleryPhoto[] = gallery.map((item) => ({
  ...item,
  image: photo(item.id),
}));
export const testimonials = [
  {
    quote:
      "Kue ulang tahun anak saya tema dinosaurus, detailnya di luar ekspektasi. Anak saya sampai gak mau motong saking sayangnya.",
    author: "Ibu Sarah",
    occasion: "Birthday cake anak",
  },
  {
    quote:
      "Wedding cake 3 tier kami dibuat sesuai moodboard Pinterest yang saya kirim — hasilnya persis, bahkan lebih bagus dari bayangan.",
    author: "Nadia",
    occasion: "Pengantin 2024",
  },
  {
    quote:
      "Pesan dessert table untuk launching produk kantor, tamu-tamu foto-foto terus. Rasa kuenya juga tidak kalah dari tampilannya.",
    author: "Marketing Manager",
    occasion: "Brand lokal",
  },
];
