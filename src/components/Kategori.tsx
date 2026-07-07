import { motion } from "framer-motion";
import { CakeIcon, DiamondIcon, BuildingsIcon, CookieIcon, ConfettiIcon } from "@phosphor-icons/react";
import { categories, type CategoryIcon } from "../data/images";

const iconMap: Record<CategoryIcon, typeof CakeIcon> = {
  Cake: CakeIcon,
  Diamond: DiamondIcon,
  Buildings: BuildingsIcon,
  Cookie: CookieIcon,
  Confetti: ConfettiIcon,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Kategori() {
  return (
    <section id="kategori" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-display text-3xl md:text-[2.25rem] text-ink text-center">Untuk Momen Apa?</h2>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div key={cat.title} variants={card} className="group overflow-hidden rounded-xl border border-hairline bg-canvas">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-surface-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="p-4 text-sm font-medium text-canvas">{cat.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <Icon weight="duotone" size={32} className="text-primary" />
                  <p className="mt-2 font-display text-lg text-ink">{cat.title}</p>
                  <p className="mt-2 text-sm text-body">{cat.desc}</p>
                  <p className="mt-3 text-sm font-medium text-primary">{cat.price}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
