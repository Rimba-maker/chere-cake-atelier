import { useState, type SubmitEvent } from "react";
import {
  categories,
  galeriImages,
  photo,
  photoSet,
  photoSource,
} from "../data/images";
import { updateBrief, useBrief } from "../data/consultation";

const budgetOptions = [
  "< Rp 500.000",
  "Rp 500.000 – 1.000.000",
  "Rp 1.000.000 – 2.500.000",
  "> Rp 2.500.000",
];
const whatsappNumber = "6281234567890";

export default function CTAKonsultasi() {
  const brief = useBrief();
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    porsi: "",
    referensi: "",
    budget: budgetOptions[0],
    cerita: "",
  });
  const [status, setStatus] = useState("");
  const [prepared, setPrepared] = useState<{ url: string; brief: typeof brief } | null>(null);
  const readyUrl = prepared?.brief === brief ? prepared.url : "";
  const selected = galeriImages.find((item) => item.id === brief.inspirationId);
  const minDays =
    brief.occasion === "Wedding" || brief.packageName === "Premium/Wedding"
      ? 14
      : brief.packageName === "Custom Design"
        ? 7
        : 3;
  const earliest = new Date();
  earliest.setDate(earliest.getDate() + minDays);
  const minDate = `${earliest.getFullYear()}-${String(earliest.getMonth() + 1).padStart(2, "0")}-${String(earliest.getDate()).padStart(2, "0")}`;
  const flavors = [brief.base, brief.filling, brief.finishing]
    .filter(Boolean)
    .join(" + ");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(null);
    if (!form.nama.trim()) {
      setStatus("Isi namamu agar kami tahu siapa yang sedang merayakan.");
      return;
    }
    if (!/^(?:\+62|62|0)\d{8,13}$/.test(form.whatsapp.replace(/\s/g, ""))) {
      setStatus(
        "Nomor WhatsApp belum sesuai. Gunakan nomor Indonesia, misalnya 081234567890 atau +6281234567890.",
      );
      return;
    }
    const occasion = categories.find(
      (item) => item.kategori === (brief.occasion ?? "Birthday"),
    );
    const message = [
      "Halo Chère Cake Atelier, saya mau konsultasi desain cake:",
      `Nama: ${form.nama.trim()}`,
      `WhatsApp: ${form.whatsapp.trim()}`,
      `Jenis layanan: ${occasion?.title}`,
      `Tanggal dibutuhkan: ${brief.date}`,
      `Jumlah porsi: ${form.porsi}`,
      `Budget: ${form.budget}`,
      brief.packageName ? `Paket referensi: ${brief.packageName}` : null,
      selected
        ? `Inspirasi Pexels: ${selected.title} — ${photoSource(selected.id)} (referensi visual, bukan karya asli Chère)`
        : null,
      form.referensi ? `Referensi desain tambahan: ${form.referensi}` : null,
      flavors ? `Preferensi rasa/finishing: ${flavors}` : null,
      form.cerita.trim()
        ? `Cerita, tema, warna, atau kebutuhan diet: ${form.cerita.trim()}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    setPrepared({ url, brief });
    setStatus(
      "Brief siap. Buka WhatsApp, periksa pesannya, lalu kirim untuk memulai konsultasi. Belum ada pesanan yang dikonfirmasi.",
    );
  }

  return (
    <section
      id="konsultasi"
      className="section consultation"
      aria-labelledby="consultation-title"
    >
      <div className="container consultation-layout">
        <div className="consultation-aside">
          <h2 id="consultation-title" className="consultation-title">
            Ceritamu. Cake-mu. Kita buat nyata.
          </h2>
          <p className="consultation-intro">
            Mulai dari satu ide kecil. Ceritakan momennya, kami bantu
            menerjemahkannya jadi cake yang personal.
            <br />
            <br />
            <strong>Konsultasi desain gratis.</strong> Quote dan sketsa awal
            dalam 1–2 hari.
          </p>
          <figure className="consultation-photo">
            <img
              src={photo(30469068)}
              srcSet={photoSet(30469068)}
              sizes="310px"
              alt="Detail bunga putih dan pink pada cake buttercream"
              loading="lazy"
              width="960"
              height="1440"
            />
            <figcaption className="photo-note">
              Setiap detail punya cerita. Foto inspirasi Pexels.
            </figcaption>
          </figure>
        </div>
        <div>
          {(selected || flavors || brief.packageName) && (
            <div className="selected-brief">
              {selected && (
                <img
                  src={photo(selected.id, 480)}
                  alt={selected.alt}
                  width="62"
                  height="78"
                />
              )}
              <div>
                <h3>Sudah masuk ke brief-mu</h3>
                {selected && <p>Inspirasi: {selected.title} · Pexels</p>}
                {flavors && <p>{flavors}</p>}
                {brief.packageName && <p>Paket: {brief.packageName}</p>}
                {selected && (
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => updateBrief({ inspirationId: null })}
                  >
                    Hapus inspirasi ini
                  </button>
                )}
              </div>
            </div>
          )}
          <form
            className="consultation-form"
            onSubmit={handleSubmit}
            onChange={() => {
              setStatus("");
              setPrepared(null);
            }}
          >
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="nama">Namamu *</label>
                <input
                  id="nama"
                  name="nama"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={form.nama}
                  placeholder="Nama yang boleh kami sapa"
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                />
              </div>
              <div className="form-field">
                <label htmlFor="whatsapp">Nomor WhatsApp *</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  maxLength={20}
                  value={form.whatsapp}
                  placeholder="0812 3456 7890"
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="jenisKue">Momen yang dirayakan *</label>
                <select
                  id="jenisKue"
                  name="jenisKue"
                  value={brief.occasion ?? "Birthday"}
                  onChange={(e) =>
                    updateBrief({
                      occasion: e.target
                        .value as (typeof categories)[number]["kategori"],
                    })
                  }
                >
                  {categories.map((item) => (
                    <option key={item.kategori} value={item.kategori}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="tanggal">Tanggal acara *</label>
                <input
                  id="tanggal"
                  name="tanggal"
                  className="date-input"
                  type="date"
                  required
                  min={minDate}
                  value={brief.date ?? ""}
                  onChange={(e) => updateBrief({ date: e.target.value })}
                />
                <small>
                  Minimal H-{minDays}. Custom design H-7; wedding H-14.
                </small>
              </div>
              <div className="form-field">
                <label htmlFor="porsi">Jumlah porsi *</label>
                <input
                  id="porsi"
                  name="porsi"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  step={1}
                  required
                  placeholder="Misalnya, 20"
                  value={form.porsi}
                  onChange={(e) => setForm({ ...form, porsi: e.target.value })}
                />
              </div>
              <div className="form-field">
                <label htmlFor="budget">Kisaran budget *</label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                >
                  {budgetOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-field full-width">
                <label htmlFor="referensi">
                  Link referensi tambahan <span>(opsional)</span>
                </label>
                <input
                  id="referensi"
                  name="referensi"
                  type="url"
                  value={form.referensi}
                  placeholder="https://pinterest.com/... atau Instagram"
                  onChange={(e) =>
                    setForm({ ...form, referensi: e.target.value })
                  }
                />
              </div>
              <div className="form-field full-width">
                <label htmlFor="cerita">
                  Cerita di balik cake-mu <span>(opsional)</span>
                </label>
                <textarea
                  id="cerita"
                  name="cerita"
                  rows={3}
                  maxLength={2000}
                  value={form.cerita}
                  placeholder="Warna favorit, tema, nama di cake, alergi, atau ide kecilmu..."
                  onChange={(e) => setForm({ ...form, cerita: e.target.value })}
                />
              </div>
            </div>
            <button type="submit" className="button form-submit">
              Siapkan brief konsultasi{" "}
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="form-disclosure">
              Detail ini dipakai untuk konsultasi via WhatsApp, bukan disimpan
              sebagai pesanan di website. Harga final dan jadwal dikonfirmasi
              bersama sebelum DP.
            </p>
            <p className="form-status" role="status">
              {prepared && prepared.brief !== brief
                ? "Pilihanmu berubah. Siapkan ulang brief agar pesan WhatsApp memuat pilihan terbaru."
                : status}
            </p>
            {readyUrl && (
              <div className="whatsapp-ready">
                <p>
                  Pesan berisi detail acara, inspirasi, dan preferensi yang kamu
                  pilih.
                </p>
                <a
                  href={readyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Buka WhatsApp & kirim brief
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
