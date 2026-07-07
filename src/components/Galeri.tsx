import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galeriImages, galeriKategoriList, type GaleriKategori } from "../data/images";

type Filter = "Semua" | GaleriKategori;
const filters: Filter[] = ["Semua", ...galeriKategoriList];

export default function Galeri() {
  const [active, setActive] = useState<Filter>("Semua");
  const [lightbox, setLightbox] = useState<{ image: string; alt: string } | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const filtered = active === "Semua" ? galeriImages : galeriImages.filter((g) => g.kategori === active);

  function openLightbox(image: string, alt: string) {
    setLightbox({ image, alt });
    dialogRef.current?.showModal();
  }

  return (
    <section id="galeri" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-display text-3xl md:text-[2.25rem] text-ink text-center">Karya Kami.</h2>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === f ? "text-canvas" : "text-body hover:text-primary"
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="galeri-filter-active"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 columns-2 gap-4 sm:columns-3 md:columns-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.button
                key={item.image}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.03 }}
                onClick={() => openLightbox(item.image, item.alt)}
                className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-w-3xl rounded-2xl bg-transparent p-0 backdrop:bg-surface-dark/80"
      >
        {lightbox && <img src={lightbox.image} alt={lightbox.alt} className="max-h-[85vh] w-full rounded-2xl object-contain" />}
      </dialog>
    </section>
  );
}
