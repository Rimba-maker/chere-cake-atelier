import { motion } from "framer-motion";

const faqs = [
  {
    q: "Berapa lama minimal pre-order?",
    a: "H-3 untuk desain simpel, H-7 untuk custom design, H-14 untuk wedding cake.",
  },
  {
    q: "Bisa kirim referensi dari Pinterest/Instagram?",
    a: "Bisa, justru sangat membantu proses desain jadi lebih cepat dan sesuai ekspektasi.",
  },
  {
    q: "Apakah bisa request tanpa gula/rendah gula untuk diabetes?",
    a: "Bisa, ada opsi rendah gula dengan tambahan biaya bahan.",
  },
  {
    q: "Apakah kue bisa dikirim ke luar kota?",
    a: "Untuk saat ini pengiriman terbatas dalam kota karena resiko kerusakan selama perjalanan jauh.",
  },
  {
    q: "Bagaimana kalau desain di sketsa awal ingin diubah?",
    a: "Free 1x revisi sketsa sebelum produksi dimulai.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="font-display text-3xl md:text-[2.25rem] text-ink text-center">Pertanyaan Seputar Pemesanan.</h2>

        <motion.div
          className="mt-12 space-y-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {faqs.map((faq) => (
            <motion.details
              key={faq.q}
              variants={item}
              className="group rounded-xl border border-hairline bg-surface-card p-5 open:border-primary"
            >
              <summary className="cursor-pointer list-none font-medium text-ink flex items-center justify-between gap-4">
                {faq.q}
                <span className="text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-body">{faq.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
