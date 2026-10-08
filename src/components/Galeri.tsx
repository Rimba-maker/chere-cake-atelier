import { useEffect, useRef, useState } from "react";
import {
  galeriImages,
  galeriKategoriList,
  photoSet,
  photoSource,
  type GaleriKategori,
} from "../data/images";
import { updateBrief, useBrief } from "../data/consultation";

type Filter = "Semua" | GaleriKategori;
const filters: Filter[] = ["Semua", ...galeriKategoriList];

export default function Galeri() {
  const [active, setActive] = useState<Filter>("Semua");
  const [expanded, setExpanded] = useState(false);
  const [lightboxId, setLightboxId] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const brief = useBrief();
  const filtered =
    active === "Semua"
      ? galeriImages
      : galeriImages.filter((item) => item.kategori === active);
  const visible = expanded ? filtered : filtered.slice(0, 12);
  const currentIndex = filtered.findIndex((item) => item.id === lightboxId);
  const current = filtered[currentIndex];
  const selected = galeriImages.find((item) => item.id === brief.inspirationId);

  useEffect(() => {
    if (lightboxId !== null && !dialog.current?.open)
      dialog.current?.showModal();
  }, [lightboxId]);

  function movePhoto(direction: number) {
    setLightboxId(
      filtered[(currentIndex + direction + filtered.length) % filtered.length]
        .id,
    );
  }

  return (
    <section
      id="galeri"
      className="section gallery-section"
      aria-labelledby="gallery-title"
    >
      <div className="container">
        <div className="section-head">
          <h2 className="section-heading gallery-heading" id="gallery-title">
            Temukan cake crush-mu.
          </h2>
          <div>
            <p className="section-intro">
              Sedikit floral? Banyak cokelat? Atau warna yang benar-benar kamu?
              Simpan yang kamu suka, lalu kita buat versi ceritamu.
            </p>
            <p className="gallery-note">
              28 foto inspirasi dari Pexels, bukan dokumentasi karya Chère.
              Desain final dikembangkan bersama saat konsultasi.
            </p>
          </div>
        </div>
        <div
          className="filter-row"
          role="group"
          aria-label="Filter foto inspirasi"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className="filter-button"
              aria-pressed={active === filter}
              onClick={() => {
                setActive(filter);
                setExpanded(false);
              }}
            >
              {filter === "Anak" ? "Birthday anak" : filter}
            </button>
          ))}
        </div>
        <div className="gallery-grid" aria-label={`Inspirasi ${active}`}>
          {visible.map((item) => (
            <figure className="gallery-item" key={item.id}>
              <button
                type="button"
                className="gallery-photo-button"
                aria-label={`Perbesar ${item.title}`}
                onClick={(event) => {
                  opener.current = event.currentTarget;
                  setLightboxId(item.id);
                }}
              >
                <img
                  src={item.image}
                  srcSet={photoSet(item.id)}
                  sizes="(max-width:600px) 43vw, (max-width:800px) 29vw, 22vw"
                  alt={item.alt}
                  loading="lazy"
                  width="960"
                  height="1200"
                />
                <span className="photo-open" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <figcaption className="gallery-caption">
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.kategori === "Anak" ? "Birthday anak" : item.kategori}{" "}
                    · Inspirasi Pexels
                  </p>
                </div>
                <button
                  type="button"
                  className="save-inspiration"
                  aria-pressed={brief.inspirationId === item.id}
                  aria-label={`${brief.inspirationId === item.id ? "Hapus" : "Simpan"} inspirasi ${item.title}`}
                  onClick={() =>
                    updateBrief({
                      inspirationId:
                        brief.inspirationId === item.id ? null : item.id,
                    })
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={
                      brief.inspirationId === item.id ? "currentColor" : "none"
                    }
                    aria-hidden="true"
                  >
                    <path
                      d="M20.7 4.9a5.4 5.4 0 0 0-7.6 0L12 6l-1.1-1.1a5.4 5.4 0 0 0-7.6 7.6L12 21l8.7-8.5a5.4 5.4 0 0 0 0-7.6Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </figcaption>
            </figure>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="gallery-empty">
            Belum ada inspirasi di kategori ini. Coba kategori lain atau
            ceritakan idemu saat konsultasi.
          </p>
        )}
        <div className="gallery-bottom">
          {filtered.length > 12 && (
            <button
              type="button"
              className="button secondary"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded
                ? "Tampilkan lebih sedikit"
                : `Lihat semua ${filtered.length} inspirasi`}
            </button>
          )}
          <p className="gallery-status" role="status">
            {selected ? (
              <>
                Inspirasi “{selected.title}” tersimpan.{" "}
                <a className="text-link" href="#konsultasi">
                  Bawa ke konsultasi
                </a>
              </>
            ) : (
              "Klik hati untuk menyimpan satu inspirasi ke brief konsultasimu."
            )}
          </p>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-labelledby="lightbox-title"
        onClose={() => {
          setLightboxId(null);
          opener.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            movePhoto(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            movePhoto(-1);
          }
        }}
      >
        {current && (
          <>
            <div className="lightbox-top">
              <p>
                {currentIndex + 1} / {filtered.length} · {current.kategori} ·
                Inspirasi Pexels
              </p>
              <button
                type="button"
                className="icon-button"
                aria-label="Tutup foto"
                onClick={() => dialog.current?.close()}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="m6 6 12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="lightbox-image-wrap">
              <img
                className="lightbox-image"
                src={current.image}
                alt={current.alt}
                width="960"
                height="1200"
              />
              <div className="lightbox-arrows">
                <button
                  type="button"
                  className="icon-button"
                  aria-label="Foto sebelumnya"
                  onClick={() => movePhoto(-1)}
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="m14 5-7 7 7 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="icon-button"
                  aria-label="Foto berikutnya"
                  onClick={() => movePhoto(1)}
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="m10 5 7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="lightbox-bottom">
              <div>
                <h3 id="lightbox-title">{current.title}</h3>
                <p className="photo-note">
                  Foto referensi stok, bukan karya asli Chère.{" "}
                  <a
                    href={photoSource(current.id)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    Lihat sumber Pexels
                  </a>
                </p>
              </div>
              <a
                href="#konsultasi"
                className="button"
                onClick={() => {
                  updateBrief({
                    inspirationId: current.id,
                    occasion: current.kategori,
                  });
                  dialog.current?.close();
                }}
              >
                Buat versi ceritamu
              </a>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
