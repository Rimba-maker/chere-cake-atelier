import type { SubmitEvent } from "react";
import {
  heroImage,
  photo,
  photoSet,
  galeriKategoriList,
  type GaleriKategori,
} from "../data/images";
import { localDate, updateBrief, useBrief } from "../data/consultation";

export default function Hero() {
  const brief = useBrief();
  function begin(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    updateBrief({
      occasion: brief.occasion ?? "Birthday",
      date: brief.date ?? "",
    });
    window.location.hash = "konsultasi";
  }
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title">
              Bukan sekadar <span>kue. Ini</span>{" "}
              <span className="last-line">ceritamu.</span>
            </h1>
            <p className="hero-description">
              Ada momen yang pantas dirayakan dengan sesuatu yang hanya milikmu.
              Cake custom & dessert table, dirancang dari ceritamu—sampai ke
              detail paling kecil.
            </p>
            <div className="hero-links">
              <a href="#konsultasi" className="button">
                Buat cake ceritamu{" "}
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#galeri" className="text-link">
                Intip inspirasinya
              </a>
            </div>
          </div>
          <div className="hero-art">
            <img
              className="hero-photo"
              src={heroImage.url}
              srcSet={`${photoSet(7180728)}, ${photo(7180728, 1440)} 1440w`}
              sizes="(max-width:600px) 45vw, 45vw"
              alt={heroImage.alt}
              width="1440"
              height="2157"
              fetchPriority="high"
            />
            <div className="hero-seal" aria-hidden="true">
              <small>ONE OF A KIND</small>Made
              <br />
              for you.
            </div>
            <figure className="hero-small-photo">
              <img
                src={photo(22673942, 480)}
                alt="Potongan red velvet berlapis cream pada piring"
                width="480"
                height="640"
              />
              <figcaption>Love at first bite.</figcaption>
            </figure>
            <p className="hero-photo-caption">
              Pink. Personal. Penuh cerita.
              <br />
              <span>Fotografi inspirasi dari Pexels</span>
            </p>
          </div>
            <form className="hero-quick-form" onSubmit={begin}>
              <p>Momen apa yang ingin kamu rayakan?</p>
              <div className="quick-fields">
                <label htmlFor="hero-occasion">
                  Momenmu
                  <select
                    id="hero-occasion"
                    value={brief.occasion ?? "Birthday"}
                    onChange={(e) =>
                      updateBrief({
                        occasion: e.target.value as GaleriKategori,
                      })
                    }
                  >
                    {galeriKategoriList.map((occasion) => (
                      <option key={occasion} value={occasion}>
                        {occasion === "Anak"
                          ? "Birthday anak"
                          : occasion === "Corporate"
                            ? "Corporate & gifting"
                            : occasion}
                      </option>
                    ))}
                  </select>
                </label>
                <label htmlFor="hero-date">
                  Tanggal acara
                  <input
                    id="hero-date"
                    type="date"
                    min={localDate()}
                    value={brief.date ?? ""}
                    onChange={(e) => updateBrief({ date: e.target.value })}
                  />
                </label>
                <button
                  type="submit"
                  aria-label="Lanjut ke konsultasi dengan pilihan momen dan tanggal"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
        </div>
      </section>
      <div className="promise-ribbon" aria-label="Tentang cake Chère">
        <div className="container">
          {[
            "300+ kue custom terkirim",
            "Bahan premium, tanpa pengawet",
            "Desain 100% orisinal",
            "Konsultasi desain gratis",
          ].map((promise) => (
            <span key={promise}>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="m4 10 4 4 8-8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {promise}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
