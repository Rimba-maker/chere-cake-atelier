import { photo, photoSet, photoSource } from "../data/images";
import { updateBrief } from "../data/consultation";
import "../styles/story.css";

const items = [
  { name: "Cupcake custom topper", price: "Rp 25.000" },
  { name: "Macaron French", price: "Rp 15.000" },
  { name: "Mini tart buah", price: "Rp 28.000" },
  { name: "Cake pop", price: "Rp 18.000" },
  { name: "Cookies decorated", price: "Rp 12.000" },
];

export default function DessertTable() {
  return (
    <section id="dessert-table" className="section dessert-section" aria-labelledby="dessert-heading">
      <div className="container">
        <div className="dessert-heading-row">
          <h2 id="dessert-heading" className="section-heading">Satu meja.<br />Banyak bahagia.</h2>
          <p className="section-intro">Lengkapi wedding, ulang tahun, atau corporate event dengan dessert table. Cake besar di tengah, kejutan kecil di setiap sudutnya.</p>
        </div>
        <figure className="dessert-event-photo">
          <img src={photo(3593430, 1440)} srcSet={`${photoSet(3593430)}, ${photo(3593430, 1440)} 1440w`} sizes="(max-width: 1280px) 100vw, 1200px" alt="Dessert table outdoor dengan cake, macaron, dan bunga untuk acara" width={1440} height={960} loading="lazy" decoding="async" />
          <figcaption className="photo-note"><a href={photoSource(3593430)} target="_blank" rel="noreferrer">Inspirasi penataan event · Pexels</a></figcaption>
        </figure>
        <div className="dessert-details">
          <div className="dessert-menu">
            <h3>Pilih kesukaan para tamu.</h3>
            <p>Harga per pcs · minimum 30 pcs per item.</p>
            <dl className="dessert-price-list">
              {items.map((item) => (
                <div key={item.name}><dt>{item.name}</dt><dd>{item.price}</dd></div>
              ))}
            </dl>
          </div>
          <div className="dessert-closeups">
            <figure>
              <img src={photo(11168993)} srcSet={photoSet(11168993)} sizes="(max-width: 700px) 45vw, 22vw" alt="Close-up macaron dalam berbagai warna" width={960} height={1200} loading="lazy" decoding="async" />
              <figcaption className="photo-note"><a href={photoSource(11168993)} target="_blank" rel="noreferrer">Inspirasi macaron · Pexels</a></figcaption>
            </figure>
            <figure>
              <img src={photo(11217160)} srcSet={photoSet(11217160)} sizes="(max-width: 700px) 45vw, 22vw" alt="Cupcake pink dalam cangkir bermotif bunga" width={960} height={1200} loading="lazy" decoding="async" />
              <figcaption className="photo-note"><a href={photoSource(11217160)} target="_blank" rel="noreferrer">Inspirasi cupcake · Pexels</a></figcaption>
            </figure>
          </div>
        </div>
        <div className="dessert-package">
          <div>
            <h3>Mejanya, kita rancang bersama.</h3>
            <p>Paket untuk minimum <strong>50 tamu</strong>: kombinasi <strong>4–5 jenis dessert</strong> + centerpiece cake kecil. Setup termasuk stand dan dekorasi meja.</p>
          </div>
          <div className="dessert-package-action">
            <p>Mulai <strong>Rp 2.500.000</strong></p>
            <a href="#konsultasi" className="button" onClick={() => updateBrief({ occasion: "Dessert Table" })}>Rencanakan dessert table</a>
            <span>Harga final mengikuti kebutuhan acaramu.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
