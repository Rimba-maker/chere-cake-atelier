import "../styles/details.css";

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
    q: "Apakah bisa request rendah gula?",
    a: "Bisa, ada opsi rendah gula dengan tambahan biaya bahan. Informasikan kebutuhan diet dan alergi saat konsultasi; opsi rendah gula bukan klaim aman untuk diabetes.",
  },
  {
    q: "Apakah kue bisa dikirim ke luar kota?",
    a: "Untuk saat ini pengiriman terbatas dalam kota karena risiko kerusakan selama perjalanan jauh.",
  },
  {
    q: "Bagaimana kalau desain di sketsa awal ingin diubah?",
    a: "Gratis 1x revisi sketsa sebelum produksi dimulai.",
  },
];


export default function FAQ() {
  return (
    <section id="faq" className="section faq-section" aria-labelledby="faq-heading">
      <div className="container faq-layout">
        <div className="faq-introduction">
          <h2 id="faq-heading" className="section-heading">Sebelum<br />tiup lilin.</h2>
          <p className="section-intro">Pertanyaan seputar pemesanan, supaya rencana manismu lebih tenang.</p>
          <a className="text-link" href="#konsultasi">Ada pertanyaan lain? Konsultasikan</a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.q} className="faq-item" open={index === 0}>
              <summary>
                {faq.q}
                <svg aria-hidden="true" className="faq-chevron" width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
