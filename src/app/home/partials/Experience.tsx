import Image from "next/image";

/*  EXPERIENCE DATA */
const experiences = [
  {
    number: "1",
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "upwork",
    companyColor: "#14A800",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.",
  },
  {
    number: "2",
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Trello",
    companyColor: "#0052CC",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.",
  },
  {
    number: "3",
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "zoom",
    companyColor: "#2D8CFF",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.",
  },
  {
    number: "4",
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "zapier",
    companyColor: "#FF4A00",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.",
  },
];

/* NUMBER BADGE */
const NumberBadge = ({ number }: { number: string }) => (
  <div
    className="exp-badge flex items-center justify-center rounded-full border border-neutral-800 bg-black shrink-0
    /* Mobile Specifications */
    w-10 h-10 
    /* Desktop Overrides */
    lg:w-12 lg:h-12"
  >
    <span className="font-bold text-primary-200 text-sm leading-[28px] text-center">
      {number}
    </span>
  </div>
);

/* EXPERIENCE CARD */
const ExperienceCard = ({
  period,
  role,
  company,
  companyColor,
  description,
}: {
  period: string;
  role: string;
  company: string;
  companyColor: string;
  description: string;
}) => (
  <div
    className="exp-card flex flex-col items-start bg-black border border-neutral-800 box-border shrink-0
    /* Mobile Specifications: Fluid safe flexible width to avoid overshooting 320px */
    w-full max-w-[250px] min-h-[342px] p-[16px] gap-[16px] rounded-[16px]
    /* Desktop Overrides (Pristine layout restored) */
    lg:w-[510px] lg:min-h-[286px] lg:h-auto lg:p-[24px] lg:gap-[24px] lg:rounded-[20px]"
  >
    {/* Header Info Block */}
    <div className="flex flex-col items-start gap-[4px] w-full h-auto lg:flex-row lg:items-start lg:justify-between lg:gap-4 lg:w-full lg:h-[72px]">
      {/* Text Container Block */}
      <div className="flex flex-col items-start gap-[4px] lg:gap-1 lg:flex-1 w-full h-auto">
        {/* Period Text */}
        <span className="font-body text-neutral-400 text-sm lg:text-lg font-normal lg:font-medium leading-[28px] lg:leading-8 tracking-normal">
          {period}
        </span>

        {/* Role Text */}
        <span className="font-body text-neutral-25 text-md lg:text-display-xs font-normal lg:font-bold leading-[30px] lg:leading-9">
          {role}
        </span>
      </div>

      {/* Logo Container Block */}
      <div className="w-[76px] h-[32px] lg:w-[114px] lg:h-[48px] flex items-center justify-start lg:justify-end relative shrink-0">
        <span
          className="font-extrabold text-md lg:text-xl tracking-tight uppercase"
          style={{ color: companyColor }}
        >
          {company}
        </span>
      </div>
    </div>

    {/* Description Paragraph */}
    <p className="font-body font-normal text-neutral-400 text-sm lg:text-md leading-[24px] lg:leading-[30px] w-full h-full align-self-stretch text-left">
      {description}
    </p>
  </div>
);

/* EXPERIENCE SECTION */
const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="exp-section relative w-full bg-black py-20 overflow-hidden"
    >
      {/* ── HEADER ── */}
      <div className="flex flex-col items-center gap-2 w-full mb-16">
        <p className="exp-label font-body font-medium text-primary-200 text-md lg:text-lg leading-8 tracking-normal text-center w-full">
          EXPERIENCE
        </p>

        <h2 className="exp-title font-display font-extrabold text-neutral-25 text-display-md lg:text-display-2xl leading-tight lg:leading-[72px] tracking-normal text-center w-full">
          PROFESIONAL WORK
        </h2>
      </div>

      {/* ── MOBILE CARDS  */}
      <div className="exp-mobile-list lg:hidden flex flex-col items-center gap-8 w-full max-w-[320px] mx-auto px-2">
        {experiences.map((exp, index) => {
          const isLast = index === experiences.length - 1;

          return (
            <div key={exp.number} className="w-full flex flex-col items-end">
              <div className="flex flex-row items-start gap-2 w-full justify-center">
                <NumberBadge number={exp.number} />
                <ExperienceCard {...exp} />
              </div>

              {isLast && (
                <div className="w-[250px] h-[103.5px] relative mt-4">
                  <div
                    className="absolute bg-primary-400"
                    style={{
                      width: "34.5px",
                      height: "34.5px",
                      right: "0px",
                      top: "0px",
                    }}
                  />
                  <div
                    className="absolute bg-primary-400"
                    style={{
                      width: "34.5px",
                      height: "34.5px",
                      right: "34.5px",
                      top: "34.5px",
                    }}
                  />
                  <div
                    className="absolute bg-primary-400"
                    style={{
                      width: "34.5px",
                      height: "34.5px",
                      right: "0px",
                      top: "69px",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── DESKTOP TIMELINE ── */}
      <div className="hidden lg:block relative w-full px-32">
        {/* Center vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2" />

        <div className="flex flex-col gap-16 w-full">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 !== 0;

            return (
              <div
                key={exp.number}
                className="relative flex flex-row items-center w-full"
              >
                {/* LEFT SLOT */}
                <div className="flex-1 flex flex-row items-center justify-end pr-[112px]">
                  {isLeft && <ExperienceCard {...exp} />}
                </div>

                {/* CENTER TIMELINE BADGE */}
                <div className="relative z-10 flex items-center justify-center">
                  <NumberBadge number={exp.number} />
                </div>

                {/* RIGHT SLOT */}
                <div className="flex-1 flex flex-row items-center justify-start pl-[112px]">
                  {!isLeft && <ExperienceCard {...exp} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="hidden lg:block absolute bg-primary-400"
        style={{
          width: "34.5px",
          height: "34.5px",
          right: "0px",
          bottom: "103.5px",
        }}
      />
      <div
        className="hidden lg:block absolute bg-primary-400"
        style={{
          width: "34.5px",
          height: "34.5px",
          right: "34.5px",
          bottom: "69px",
        }}
      />
      <div
        className="hidden lg:block absolute bg-primary-400"
        style={{
          width: "34.5px",
          height: "34.5px",
          right: "0px",
          bottom: "34.5px",
        }}
      />
    </section>
  );
};

export default ExperienceSection;
