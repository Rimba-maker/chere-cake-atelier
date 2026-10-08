import { photo, photoSet, photoSource } from "../data/images";
import { useBrief, updateBrief } from "../data/consultation";
import "../styles/story.css";

const groups = [
  { key: "base", title: "Base cake", items: ["Vanilla Chiffon", "Chocolate Fudge", "Red Velvet", "Pandan", "Matcha"] },
  { key: "filling", title: "Filling", items: ["Buttercream Vanilla/Chocolate", "Cream Cheese", "Salted Caramel", "Ganache Dark Chocolate", "Fresh Fruit Compote"] },
  { key: "finishing", title: "Finishing", items: ["Buttercream Smooth", "Fondant", "Semi-Naked Cake", "Drip Cake", "Fresh Flower Topping"] },
] as const;

export default function RasaFilling() {
  const brief = useBrief();
  const selected = groups.filter((group) => brief[group.key]);

  return (
    <section id="rasa" className="section taste-section" aria-labelledby="taste-heading">
      <div className="container">
        <div className="taste-heading-row">
          <h2 id="taste-heading" className="section-heading">Cantik di luar.<br />Favoritmu di dalam.</h2>
          <p className="section-intro">Dari potongan pertama sampai remah terakhir. Pilih base, filling, dan finishing yang kamu suka — atau kita temukan bersama saat konsultasi.</p>
        </div>
        <div className="taste-composition">
          <figure className="taste-photo">
            <img src={photo(15071192)} srcSet={photoSet(15071192)} sizes="(max-width: 800px) 100vw, 44vw" alt="Potongan red velvet berlapis cream dengan stroberi" width={960} height={1200} loading="lazy" decoding="async" />
            <figcaption className="photo-note"><a href={photoSource(15071192)} target="_blank" rel="noreferrer">Foto inspirasi rasa · Pexels</a></figcaption>
          </figure>
          <div className="taste-selector">
            {groups.map((group) => (
              <fieldset className="taste-group" key={group.key}>
                <legend>{group.title}</legend>
                <div className="taste-options">
                  {group.items.map((item) => (
                    <button
                      type="button"
                      key={item}
                      aria-pressed={brief[group.key] === item}
                      onClick={() => updateBrief({ [group.key]: brief[group.key] === item ? undefined : item })}
                    >{item}</button>
                  ))}
                </div>
              </fieldset>
            ))}
            <div className="taste-summary">
              <h3>Kombinasi untuk ceritamu</h3>
              <p aria-live="polite" aria-atomic="true">
                {selected.length > 0 ? selected.map((group) => brief[group.key]).join(" + ") : "Belum memilih? Tidak apa-apa. Semua pilihan rasa boleh dibahas saat konsultasi."}
              </p>
              <p className="taste-summary-note">Kombinasi bebas, misalnya Red Velvet + Cream Cheese + Semi-Naked Cake. Pilihanmu menjadi preferensi konsultasi, bukan konfirmasi ketersediaan atau harga.</p>
              <a className="button" href="#konsultasi">{selected.length > 0 ? "Bawa rasa ini ke konsultasi" : "Temukan rasa bersamaku"}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
