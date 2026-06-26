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
    <section className="w-full bg-black text-white pb-[32px] md:py-[80px] md:px-[128px] md:min-h-[1268px] flex flex-col items-center">
      {/* Header Section */}
      <div className="pt-[50px] px-[50.5px] md:pt-0 md:px-0 flex flex-col items-center text-center gap-2 md:gap-[8px] md:w-[1184px] md:h-[100px]">
        {/* 1. Teks "Portfolio" menggunakan class exp-label agar sama dengan section Experience */}
        <span className="exp-label text-[#91ff02] uppercase">
          Portfolio
        </span>

        {/* 2. Teks "SELECTED WORK" menggunakan class exp-title agar sama dengan section Experience */}
        <h2 className="exp-title mb-[16px] md:mb-0">
          SELECTED WORK
        </h2>
      </div>

      {/* Content Area Section */}
      <div className="px-[16px] md:px-0 w-full md:w-[1184px] flex flex-col gap-[32px] md:gap-[48px] mt-[32px] md:mt-[64px]">
        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-x-[20px] md:gap-y-[48px] w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-full md:w-[381px] md:h-[448px] flex flex-col gap-2 md:gap-[16px] relative group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[361/270] md:w-[381px] md:h-[284px] md:aspect-auto rounded-2xl md:rounded-[20px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                {/* Tombol VISIT */}
                {index === 1 && (
                  <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <div className="w-[100px] h-[100px] bg-[#FDFDFD] rounded-full flex items-center justify-center shadow-lg pointer-events-auto cursor-pointer transition-transform hover:scale-105">
                      <span className="btn-visit text-black font-bold">VISIT</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="flex flex-col gap-2 md:gap-[16px]">
                <h3 className="font-portfolio-title !text-left !text-xl font-bold md:font-card-title-desktop md:!text-2xl">
                  {project.title}
                </h3>
                <p className="font-portfolio-sub !text-left !text-sm font-normal text-neutral-400 normal-case leading-relaxed md:font-card-desc-desktop">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}