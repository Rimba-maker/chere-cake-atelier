import { motion } from "framer-motion";

const groups = [
  {
    title: "Base Cake",
    items: ["Vanilla Chiffon", "Chocolate Fudge", "Red Velvet", "Pandan", "Matcha"],
  },
  {
    title: "Filling",
    items: [
      "Buttercream Vanilla/Chocolate",
      "Cream Cheese",
      "Salted Caramel",
      "Ganache Dark Chocolate",
      "Fresh Fruit Compote",
    ],
  },
  {
    title: "Finishing",
    items: ["Buttercream Smooth", "Fondant", "Semi-Naked Cake", "Drip Cake", "Fresh Flower Topping"],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const pill = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function RasaFilling() {
  return (
    <section id="rasa" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-display text-3xl md:text-[2.25rem] text-ink text-center">Pilih Rasa Favoritmu.</h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-medium uppercase tracking-wide text-muted">{group.title}</p>
              <motion.ul
                className="mt-4 flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={pill}
                    className="rounded-full border border-hairline bg-surface-card px-4 py-2 text-sm text-body hover:border-primary hover:text-primary transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-sm italic text-muted"
        >
          "Kombinasi bebas — misal Red Velvet + Cream Cheese + Semi-Naked, atau custom kombinasi lain sesuai selera."
        </motion.p>
      </div>
    </section>
  );
}
