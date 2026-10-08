import { categories, photoSet, photoSource } from "../data/images";
import { updateBrief } from "../data/consultation";
import "../styles/story.css";

export default function Kategori() {
  return (
    <section id="kategori" className="section celebration-section" aria-labelledby="celebration-heading">
      <div className="container">
        <div className="celebration-heading-row">
          <h2 id="celebration-heading" className="section-heading">Untuk momen apa?</h2>
          <p className="section-intro">Yang besar, yang kecil, yang cuma sekali. Selalu ada cerita yang pantas dirayakan dengan kue.</p>
        </div>
        <div className="celebration-composition">
          {categories.map((category) => (
            <article key={category.kategori} className={`celebration-occasion celebration-${category.kategori === "Dessert Table" ? "dessert" : category.kategori.toLowerCase()}`}>
              <figure className="celebration-photo">
                <img
                  src={category.image}
                  srcSet={photoSet(category.id)}
                  sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 40vw"
                  alt={category.alt}
                  width={960}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="photo-note"><a href={photoSource(category.id)} target="_blank" rel="noreferrer">Foto inspirasi · Pexels</a></figcaption>
              </figure>
              <div className="celebration-copy">
                <h3>{category.kategori === "Anak" ? "Themed Cake Anak" : category.title}</h3>
                <p>{category.desc}</p>
                <p className="celebration-price">{category.kategori === "Dessert Table" ? "Mulai Rp 25.000/pcs · min. 30 pcs per item" : category.price}</p>
                <a className="text-link" href="#konsultasi" onClick={() => updateBrief({ occasion: category.kategori })}>
                  {category.kategori === "Wedding" ? "Rencanakan hari spesial" : category.kategori === "Dessert Table" ? "Rencanakan dessert table" : "Ceritakan idemu"}
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="celebration-price-note">Harga mulai adalah estimasi. Detail desain, porsi, dan harga final dibahas saat konsultasi.</p>
      </div>
    </section>
  );
}
