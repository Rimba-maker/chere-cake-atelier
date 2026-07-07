import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data/images";

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 8000);
    return () => clearInterval(id);
  }, [paused]);

  const current = testimonials[index];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="font-display text-3xl md:text-[2.25rem] text-ink text-center">Kata Mereka.</h2>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mt-12 min-h-[220px] rounded-2xl bg-surface-card p-10 text-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={current.avatar}
                alt={current.author}
                className="mx-auto h-16 w-16 rounded-full object-cover"
              />
              <p className="mt-5 text-body italic">&ldquo;{current.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-ink">— {current.author}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.author}
                onClick={() => setIndex(i)}
                aria-label={`Testimoni ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-hairline"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
