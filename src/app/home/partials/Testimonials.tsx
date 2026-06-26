import React from "react";
import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    name: "Thom Haye",
    role: "Project Manager",
    companyLogo: "/upwork.svg", 
    quote: "“Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!”",
  },
  {
    id: 2,
    name: "Emily Carter",
    role: "Head of Product",
    companyLogo: "/trello.svg", 
    quote: "“An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch.”",
  },
  {
    id: 3,
    name: "Sarah Lee",
    role: "Engineering Manager",
    companyLogo: "/zapier.svg", 
    quote: "“An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Lead Developer",
    companyLogo: "/zoom.svg", 
    quote: "“A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!”",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section bg-black text-white">
      {/* Header */}
      <div className="testimonials-header-block">
        <span className="exp-label text-primary-200 uppercase block text-center">
          TESTIMONIALS
        </span>
        <h2 className="exp-title text-neutral-25 uppercase">
          PEOPLE SAYS ABOUT ME
        </h2>
      </div>

      {/* Content */}
      <div className="testimonials-content-block">
        {/* Cards */}
        <div className="testimonials-cards-grid">
          {testimonialsData.map((t) => (
            <div key={t.id} className="testimonials-card-item">
              {/* Profile row */}
              <div className="testimonials-card-header-row">
                {/* Name + Role */}
                <div className="testimonials-profile-col">
                  <span className="testimonials-client-name">{t.name}</span>
                  <span className="testimonials-client-role">{t.role}</span>
                </div>
                {/* Logo */}
                <div className="testimonials-logo-wrap">
                  <Image
                    src={t.companyLogo}
                    alt={t.name}
                    fill
                    sizes="(max-width: 1024px) 76px, 114px"
                    className="object-contain object-right"
                    priority
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="testimonials-stars-row">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#F3993F"
                    className="testimonials-star-icon"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="testimonials-quote-text">{t.quote}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="testimonials-nav-row">
          {/* Left button */}
          <button className="testimonials-nav-btn" aria-label="Previous">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="testimonials-nav-icon"
            >
              <path
                d="M15 19l-7-7 7-7"
                stroke="#252B37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Right button */}
          <button className="testimonials-nav-btn" aria-label="Next">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="testimonials-nav-icon"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke="#91FF02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
 