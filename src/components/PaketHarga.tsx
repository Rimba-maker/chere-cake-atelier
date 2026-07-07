import { motion } from "framer-motion";
import { PlantIcon, LeafIcon, TreeIcon, StarIcon } from "@phosphor-icons/react";

const tiers = [
  {
    icon: PlantIcon,
    name: "Simple",
    price: "Rp 350.000–600.000",
    featured: false,
    items: ["1 tier, ukuran 16-18cm", "Buttercream smooth/semi-naked", "Tulisan/dekorasi sederhana", "Porsi: 12-15 orang"],
  },
  {
    icon: LeafIcon,
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
    icon: TreeIcon,
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

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function PaketHarga() {
  return (
    <section id="harga" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-display text-3xl md:text-[2.25rem] text-ink text-center">
          Estimasi Harga Berdasarkan Kompleksitas.
        </h2>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3 items-start"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={card}
              whileHover={{ y: -6 }}
              className={
                tier.featured
                  ? "relative rounded-xl border-2 border-primary bg-canvas p-8 shadow-[0_0_0_4px_rgba(193,123,106,0.12)]"
                  : "relative rounded-xl border border-hairline bg-canvas p-8"
              }
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-canvas">
                  <StarIcon weight="fill" size={12} /> Terpopuler
                </span>
              )}
              <tier.icon weight="duotone" size={32} className="text-primary" />
              <p className="mt-4 font-display text-xl text-ink">{tier.name}</p>
              <p className="mt-1 text-lg font-medium text-primary">{tier.price}</p>
              <ul className="mt-5 space-y-2">
                {tier.items.map((item) => (
                  <li key={item} className="text-sm text-body flex gap-2">
                    <span className="text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-muted">
          Harga final ditentukan setelah konsultasi desain — kompleksitas dekorasi mempengaruhi harga.
        </p>
      </div>
    </section>
  );
}
