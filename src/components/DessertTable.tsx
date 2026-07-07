import { motion } from "framer-motion";
import { dessertTableItemsImage } from "../data/images";

const items = [
  { name: "Cupcake custom topper", price: "Rp 25.000" },
  { name: "Macaron French", price: "Rp 15.000" },
  { name: "Mini tart buah", price: "Rp 28.000" },
  { name: "Cake pop", price: "Rp 18.000" },
  { name: "Cookies decorated", price: "Rp 12.000" },
];

const chereFade = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function DessertTable() {
  return (
    <section id="dessert-table" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={chereFade}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-[2.25rem] text-ink">Lengkapi Acaramu Dengan Dessert Table.</h2>
          <p className="mt-3 text-body">Cocok untuk wedding, ulang tahun, atau corporate event yang butuh lebih dari satu kue.</p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={chereFade}
            className="overflow-hidden rounded-2xl"
          >
            <img src={dessertTableItemsImage.url} alt={dessertTableItemsImage.alt} loading="lazy" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={chereFade}>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Per pcs, min. 30 pcs per item</p>
            <ul className="mt-4 divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.name} className="flex items-center justify-between py-3">
                  <span className="text-sm text-body">{item.name}</span>
                  <span className="text-sm font-medium text-primary">{item.price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl bg-surface-card p-6">
              <p className="font-display text-lg text-ink">Paket Dessert Table</p>
              <p className="mt-1 text-sm text-muted">(min. 50 tamu)</p>
              <p className="mt-2 text-sm text-body">
                Kombinasi 4-5 jenis dessert + centerpiece cake kecil, mulai <span className="font-medium text-primary">Rp 2.500.000</span>{" "}
                (setup termasuk stand & dekorasi meja).
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
