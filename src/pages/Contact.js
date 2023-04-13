import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="contact-info">
            <div className="info-group">
              <h3>Address</h3>
              <p>123 Main Street<br />New York, NY 10001</p>
            </div>
            <div className="info-group">
              <h3>Phone</h3>
              <p>(555) 555-5555</p>
            </div>
            <div className="info-group">
              <h3>Email</h3>
              <p>info@architectequity.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
