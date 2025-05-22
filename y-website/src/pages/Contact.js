import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-4" data-aos="fade-up">
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Get in Touch</h3>
          <p><strong>Timings:</strong> 5 PM - 9 PM</p>
          <p><strong>Address:</strong> Mumbai, Maharashtra</p>
          <p><strong>Email:</strong> kounselorkanya@gmail.com</p>
          <p><strong>WhatsApp:</strong> +91 9819800355</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;