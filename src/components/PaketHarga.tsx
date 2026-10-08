import { photo, photoSet, photoSource } from "../data/images";
import { updateBrief } from "../data/consultation";
import "../styles/details.css";

const tiers = [
  {
    image: 29192543,
    alt: "Birthday cake pastel dengan dekorasi cream",
    name: "Simple",
    price: "Rp 350.000–600.000",
    featured: false,
    items: ["1 tier, ukuran 16-18cm", "Buttercream smooth/semi-naked", "Tulisan/dekorasi sederhana", "Porsi: 12-15 orang"],
  },
  {
    image: 30354868,
    alt: "Cake bertema topi dengan ilustrasi wajah dan bunga pink",
    name: "Custom Design",
    price: "Rp 650.000–1.200.000",
    featured: true,
    items: [
      "1-2 tier, desain karakter/tema custom",
      "Fondant/buttercream dengan detail dekorasi",
      "Topper custom (opsional cetak nama/angka)",
      "Porsi: 15-25 orang",
    ],
  },
  {
    image: 1702373,
    alt: "Wedding cake putih tiga tingkat dengan bunga segar",
    name: "Premium/Wedding",
    price: "Rp 1.500.000+",
    featured: false,
    items: [
      "2-4 tier, full custom desain",
      "Fresh flower atau detail fondant kompleks",
      "Termasuk dummy tier untuk foto (opsional)",
      "Porsi: 30-100+ orang (tergantung tier)",
    ],
  },
];


export default function PaketHarga() {
  return (
    <section id="harga" className="section price-section" aria-labelledby="price-heading">
      <div className="container">
        <div className="price-heading-row">
          <h2 id="price-heading" className="section-heading">Cerita berbeda.<br />Detail berbeda.</h2>
          <p className="section-intro">
            Estimasi harga berdasarkan kompleksitas. Mulai dari cake sederhana sampai
            centerpiece untuk hari besarmu—kita temukan yang pas untuk cerita dan porsimu.
          </p>
        </div>

        <div className="price-spread">
          {tiers.map((tier) => (
            <article key={tier.name} className={`price-offer${tier.featured ? " price-offer-featured" : ""}`}>
              <figure className="price-photo">
                <img
                  src={photo(tier.image)}
                  srcSet={photoSet(tier.image)}
                  sizes="(max-width: 640px) 120px, (max-width: 900px) 180px, 240px"
                  width={960}
                  height={720}
                  alt={tier.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="photo-note">
                  <a href={photoSource(tier.image)}>Inspirasi · Pexels</a>
                </figcaption>
              </figure>
              <div className="price-title">
                <h3>{tier.name}</h3>
                {tier.featured ? <span className="price-popular">Terpopuler</span> : null}
                <p className="price-amount">{tier.price}</p>
              </div>
              <div className="price-details">
                <ul>
                  {tier.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a
                  className="button secondary price-select"
                  href="#konsultasi"
                  aria-label={`Pilih paket ${tier.name} untuk konsultasi`}
                  onClick={() => updateBrief(
                    tier.name === "Premium/Wedding"
                      ? { packageName: tier.name, occasion: "Wedding" }
                      : { packageName: tier.name },
                  )}
                >
                  Pilih paket
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="price-note">
          Harga final ditentukan setelah konsultasi desain—kompleksitas dekorasi
          mempengaruhi harga. Foto di atas adalah inspirasi stok, bukan contoh karya
          asli Chère atau jaminan hasil paket.
        </p>
      </div>
    </section>
  );
}
