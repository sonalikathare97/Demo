import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h1>CONTACT US</h1>
        <p>We would love to hear from you!</p>
      </section>

      <section className="contact-content">

        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Have a question about our products or your order?
            Feel free to contact us.
          </p>

          <div className="contact-details">
            <p>📍 Pune, Maharashtra</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ stylehub@gmail.com</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
          {submitted && <p className="form-success">Thanks! We will get back to you soon.</p>}
        </form>

      </section>

    </div>
  );
}

export default Contact;