import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1>Contact Us</h1>
        <p className="text-muted">
          We'd love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Full Name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email Address" required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Subject" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..." required></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-5 text-center">
        <p className="text-muted">Or reach us directly at:</p>
        <p className="lead mb-0"><strong>Email:</strong> travloindia@gmail.com</p>
        <p className="lead"><strong>Phone:</strong> +91 96806 41928</p>
      </div>

      <hr className="hr"/>

    </div>
  );
};

export default Contact;
