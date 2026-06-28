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
        <div className="testimonials-nav-rowtestimonials-nav-row flex items-center justify-center gap-4 mt-8">
          {/* Left button */}
          <button
            className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center bg-transparent hover:bg-neutral-800/30 transition-all duration-200"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M5 12l7-7M5 12l7 7"
                stroke="#A4A7AE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Right button */}
          <button
            className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center hover:opacity-90 transition-all duration-200 shadow-[0_4px_20px_rgba(145,255,2,0.3)]"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14m0 0l-7-7m7 7l-7 7"
                stroke="#0A0D12"
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
 