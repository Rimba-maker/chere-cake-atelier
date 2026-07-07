import { motion } from "framer-motion";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { heroImage } from "../data/images";

const artisanReveal = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, staggerChildren: 0.15 },
  },
};

const child = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
};

const badges = ["300+ Kue Custom Terkirim", "Bahan Premium Tanpa Pengawet", "Desain 100% Orisinal", "H-3 Pre-Order"];

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 md:grid-cols-2">
        <motion.div initial="hidden" animate="visible" variants={artisanReveal}>
          <motion.h1 variants={child} className="font-display text-4xl leading-tight text-ink md:text-[3.25rem] md:leading-[1.05] md:tracking-[-1px]">
            Kue Yang Bercerita Tentang Momenmu.
          </motion.h1>
          <motion.p variants={child} className="mt-5 text-base text-body md:text-lg">
            Custom cake dan dessert table untuk ulang tahun, pernikahan, dan momen spesial lainnya. Dirancang dari
            nol, bukan dipilih dari katalog yang itu-itu saja.
          </motion.p>
          <motion.div variants={child} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#konsultasi"
              className="inline-flex h-11 items-center rounded-lg bg-primary px-6 text-sm font-medium text-canvas hover:bg-primary-active transition-colors"
            >
              Konsultasi Desain Gratis
            </a>
            <a
              href="#galeri"
              className="inline-flex h-11 items-center rounded-lg border border-hairline bg-canvas px-6 text-sm font-medium text-ink hover:border-primary hover:text-primary transition-colors"
            >
              Lihat Galeri Karya
            </a>
          </motion.div>
          <motion.ul variants={child} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {badges.map((badge) => (
              <li key={badge} className="flex items-center gap-1.5 text-xs font-medium text-muted">
                <CheckCircleIcon weight="fill" size={14} className="text-primary" />
                {badge}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src={heroImage.url}
            alt={heroImage.alt}
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}
