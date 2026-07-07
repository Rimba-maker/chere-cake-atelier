import { useState, type SubmitEvent } from "react";
import { motion } from "framer-motion";

const jenisKueOptions = ["Birthday Cake", "Wedding & Engagement Cake", "Corporate Cake & Gifting", "Dessert Table", "Themed Cake Anak"];
const budgetOptions = ["< Rp 500.000", "Rp 500.000 – 1.000.000", "Rp 1.000.000 – 2.500.000", "> Rp 2.500.000"];

const WHATSAPP_NUMBER = "6281234567890";

export default function CTAKonsultasi() {
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    jenisKue: jenisKueOptions[0],
    tanggal: "",
    porsi: "",
    referensi: "",
    budget: budgetOptions[0],
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const message = [
      `Halo Chère Cake Atelier, saya mau konsultasi desain:`,
      `Nama: ${form.nama}`,
      `Jenis kue: ${form.jenisKue}`,
      `Tanggal dibutuhkan: ${form.tanggal}`,
      `Jumlah porsi: ${form.porsi}`,
      form.referensi ? `Referensi desain: ${form.referensi}` : null,
      `Budget: ${form.budget}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-hairline bg-canvas px-4 py-2.5 text-sm text-ink outline-none focus:border-primary";
  const labelClass = "text-sm font-medium text-body";

  return (
    <section id="konsultasi" className="py-24">
      <div className="mx-auto max-w-[640px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl md:text-[2.25rem] text-ink text-center">Konsultasi Desain Gratis.</h2>
          <p className="mt-3 text-center text-body">
            Isi detail kuenya, nanti diteruskan lewat WhatsApp supaya bisa langsung didiskusikan.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label className={labelClass} htmlFor="nama">Nama</label>
              <input id="nama" required className={inputClass} value={form.nama} onChange={(e) => update("nama", e.target.value)} />
            </div>

            <div>
              <label className={labelClass} htmlFor="whatsapp">WhatsApp</label>
              <input id="whatsapp" type="tel" required className={inputClass} value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
            </div>

            <div>
              <label className={labelClass} htmlFor="jenisKue">Jenis kue</label>
              <select id="jenisKue" className={inputClass} value={form.jenisKue} onChange={(e) => update("jenisKue", e.target.value)}>
                {jenisKueOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass} htmlFor="tanggal">Tanggal dibutuhkan</label>
                <input id="tanggal" type="date" required className={inputClass} value={form.tanggal} onChange={(e) => update("tanggal", e.target.value)} />
              </div>
              <div>
                <label className={labelClass} htmlFor="porsi">Jumlah porsi</label>
                <input id="porsi" type="number" min={1} required className={inputClass} value={form.porsi} onChange={(e) => update("porsi", e.target.value)} />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="referensi">Referensi desain (link Pinterest/IG, opsional)</label>
              <input id="referensi" type="url" placeholder="https://" className={inputClass} value={form.referensi} onChange={(e) => update("referensi", e.target.value)} />
            </div>

            <div>
              <label className={labelClass} htmlFor="budget">Budget range</label>
              <select id="budget" className={inputClass} value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                {budgetOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-canvas hover:bg-primary-active transition-colors"
            >
              Konsultasi Desain Gratis
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
