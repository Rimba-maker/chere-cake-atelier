import { testimonials } from "../data/images";
import "../styles/details.css";

export default function Testimonial() {
  return (
    <section className="section testimonial-section" aria-labelledby="testimonial-heading">
      <div className="container">
        <h2 id="testimonial-heading" className="section-heading">Yang tinggal,<br />bukan cuma rasanya.</h2>
        <div className="testimonial-spread">
          {testimonials.map((testimonial, index) => (
            <figure key={testimonial.author} className={`testimonial-quote${index === 0 ? " testimonial-quote-lead" : ""}`}>
              <blockquote>
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                <span className="testimonial-author">{testimonial.author}</span>
                <span className="testimonial-occasion">{testimonial.occasion}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
