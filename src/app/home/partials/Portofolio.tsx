import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/porto-1.svg",
  },
  {
    id: 2,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/porto-2.svg",
  },
  {
    id: 3,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/porto-3.svg",
  },
  {
    id: 4,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/porto-4.svg",
  },
  {
    id: 5,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/porto-5.svg",
  },
  {
    id: 6,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/porto-6.svg",
  },
];

export default function PortfolioPage() {
  return (
    <section className="portfolio-section w-full bg-black text-white">
      {/* Header Section */}
      <div className="portfolio-header">
        <span className="exp-label text-primary-200 uppercase block text-center">
          Portfolio
        </span>
        <h2 className="exp-title text-neutral-25 uppercase">SELECTED WORK</h2>
      </div>

      {/* Content Area */}
      <div className="portfolio-cards-wrapper">
        {/* Mobile: single column stack */}
        <div className="portfolio-mobile-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-mobile-card">
              {/* Image */}
              <div className="portfolio-mobile-img-wrap">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Info */}
              <div className="portfolio-card-info">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: two rows of 3 */}
        <div className="portfolio-desktop-grid">
          {[0, 1].map((rowIdx) => (
            <div key={rowIdx} className="portfolio-item-row-desktop">
              {projects
                .slice(rowIdx * 3, rowIdx * 3 + 3)
                .map((project, colIdx) => {
                  const isVisitCard = rowIdx === 0 && colIdx === 1;
                  return (
                    <div
                      key={project.id}
                      className="portfolio-card-desktop relative"
                    >
                      {/* Image container */}
                      <div className="portfolio-card-img-wrap-desktop">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover rounded-[20px]"
                        />
                        {/* VISIT button — only on 2nd card (colIdx=1), row 0 */}
                        {isVisitCard && (
                          <div className="portfolio-visit-btn">
                            <span className="portfolio-visit-text">VISIT</span>
                          </div>
                        )}
                      </div>
                      {/* Info */}
                      <div className="portfolio-card-info-desktop">
                        <h3 className="portfolio-card-title-desktop">
                          {project.title}
                        </h3>
                        <p className="portfolio-card-desc-desktop">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
