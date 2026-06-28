import React, { useState } from "react";

export default function ContactSection() {

  const [popupStatus, setPopupStatus] = useState<"success" | "failed" | null>(
    null,
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isSuccessSimulated = Math.random() > 0.5;

    if (isSuccessSimulated) {
      setPopupStatus("success");
    } else {
      setPopupStatus("failed");
    }
  };

  const closePopup = () => {
    setPopupStatus(null);
  };

  return (
    <section className="contact-section relative w-full bg-black py-20 overflow-hidden">
      <div
        className="absolute top-10 left-0"
        style={{ width: "103.5px", height: "69px" }}
      >
        <div
          className="bg-primary-400 absolute"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "34.5px",
            top: "0px",
          }}
        />
        <div
          className="bg-primary-400 absolute"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "0px",
            top: "34.5px",
          }}
        />
        <div
          className="bg-primary-400 absolute"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "69px",
            top: "34.5px",
          }}
        />
      </div>

      <div className="contact-content-card">
        <img
          src="Portrait-of-a-Young-Man.svg"
          alt="Portrait of a Young Man"
          className="contact-portrait-img"
        />
        <div className="contact-img-overlay"></div>

        <div className="contact-image-header">
          <div className="contact-social-row">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="social-circle-btn"
              aria-label="Dribbble"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.118-12.114c-.283-.486-2.613-4.312-7.85-5.836-.217.514-.445 1.034-.693 1.554 4.966 1.637 7.07 5.163 7.18 5.353.882-1.393 1.363-3.018 1.363-4.743zm-2.484 6.273c-.07-.123-2.66-4.524-8.156-5.467-.107.287-.22.58-.337.876 5.19 2.016 6.55 5.926 6.643 6.2 1.41-1.325 2.404-3.084 2.62-5.02c-.22-.19-.516-.407-.77-.613zm-8.85 1.705c.08-.236.16-.475.244-.716-4.364-1.282-7.545.242-7.734.337.94 2.5 2.89 4.498 5.347 5.304.38-1.464 1.36-3.702 2.143-4.925zm-5.69-6.386c.214-.09 4.316-1.78 8.64-.176.19-.444.37-.893.535-1.344-4.56-1.922-6.522-5.183-6.618-5.35A10.05 10.05 0 001.91 12c0 .52.04 1.03.117 1.534.256-.122.564-.294.88-.456zm3.328-8.86a8.8 8.8 0 014.59 4.352c.214-.45.413-.896.59-1.332-3.13-1.604-4.733-3.95-4.82-4.08a10.05 10.05 0 00-4.06 3.033c.125.176 1.48 1.95 3.7 3.03zM12 22.09c-.066 0-.135-.003-.203-.003.016-.06.033-.12.053-.18.66-2.186 1.955-5.143 3.99-6.853 3.655 1.135 5.565 4.3 5.71 4.55a9.92 9.92 0 01-9.55 2.486z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-circle-btn"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-circle-btn"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          <div className="contact-info-text">
            <h3 className="contact-name">Edwin Anderson</h3>
            <div className="contact-status-wrap">
              <div className="status-dot"></div>
              <span className="status-text">Available for Work</span>
            </div>
          </div>
        </div>
      </div>

      <form className="contact-form-block" onSubmit={handleFormSubmit}>
        <div className="form-header-wrap">
          <span className="form-tag uppercase">Contact</span>
          <h2 className="form-heading uppercase">Let's Get In Touch</h2>
        </div>

        <div className="form-fields-container">
          <div className="input-field-group">
            <label className="input-label" htmlFor="form-name">
              Name
            </label>
            <input
              type="text"
              id="form-name"
              className="custom-input-element"
              required
            />
          </div>

          <div className="input-field-group">
            <label className="input-label" htmlFor="form-email">
              Email
            </label>
            <input
              type="email"
              id="form-email"
              className="custom-input-element"
              required
            />
          </div>

          <div className="input-field-group">
            <label className="input-label" htmlFor="form-message">
              Message
            </label>
            <textarea
              id="form-message"
              className="custom-textarea-element"
              required
            ></textarea>
          </div>

          <div className="submit-btn-wrap">
            <button type="submit" className="send-message-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>

      <div
        className="absolute bottom-10 right-0"
        style={{ width: "103.5px", height: "69px" }}
      >
        <div
          className="bg-primary-400 absolute"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "34.5px",
            top: "0px",
          }}
        />
        <div
          className="bg-primary-400 absolute"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "0px",
            top: "34.5px",
          }}
        />
        <div
          className="bg-primary-400 absolute"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "69px",
            top: "34.5px",
          }}
        />
      </div>

      {popupStatus !== null && (
        <div className="modal-overlay" onClick={closePopup}>
          {/* Skenario 1: Sukses Mengirim Pesan */}
          {popupStatus === "success" && (
            <div
              className="status-popup-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popup-image-wrapper">
                <img
                  src="/sent-success.svg"
                  alt="Success Icon"
                  className="popup-status-icon"
                />
              </div>
              <div className="popup-text-frame">
                <h3 className="popup-title">Message Sent Successfully!</h3>
                <p className="popup-desc">
                  Thank you for reaching out. I’ll get back to you as soon as
                  possible.
                </p>
              </div>
              <button className="popup-action-btn" onClick={closePopup}>
                Awesome
              </button>
            </div>
          )}

          {popupStatus === "failed" && (
            <div
              className="status-popup-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popup-image-wrapper">
                <img
                  src="/sent-failed.svg"
                  alt="Failed Icon"
                  className="popup-status-icon"
                />
              </div>
              <div className="popup-text-frame">
                <h3 className="popup-title">Message not sent!</h3>
                <p className="popup-desc">
                  Something went wrong on our end. Please try again in a moment.
                </p>
              </div>
              <button className="popup-action-btn" onClick={closePopup}>
                Try Again
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
