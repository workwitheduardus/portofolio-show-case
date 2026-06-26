import Image from "next/image";

/* SKILL DATA */

const skillIcons = [
  { src: "/javascript.svg", alt: "JavaScript" },
  { src: "/css.svg", alt: "CSS" },
  { src: "/html.svg", alt: "HTML" },
  { src: "/react-js.svg", alt: "React JS" },
  { src: "/mongo-db.svg", alt: "MongoDB" },
  { src: "/express-js.svg", alt: "Express JS" },
  { src: "/typescript.svg", alt: "TypeScript" },
  { src: "/docker.svg", alt: "Docker" },
];

const skillBars = [
  { label: "React JS", pct: 50 },
  { label: "HTML", pct: 80 },
  { label: "Tailwind CSS", pct: 90 },
  { label: "HTML", pct: 100 },
  { label: "Docker", pct: 70 },
  { label: "Javascript", pct: 90 },
];

/* SKILL ICON
   Sizes controlled by globals.css .skill-icon / .skill-icon-img
   Mobile: 48×48px — Desktop: 64×64px */
const SkillIcon = ({ src, alt }: { src: string; alt: string }) => (
  /* BEFORE: w-12 h-12 p-[4.8px] lg:w-16 lg:h-16 lg:p-[6.4px] — lg: prefix fails in partials
     AFTER:  .skill-icon class from globals.css handles both breakpoints */
  <div className="skill-icon flex items-center justify-center rounded-full border border-neutral-800 shrink-0">
    <div className="skill-icon-inner flex items-center justify-center rounded-full bg-black w-full h-full">
      <div className="skill-icon-img relative">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  </div>
);

/* SKILL BAR
   Sizes controlled by globals.css .skill-bar-pill / .skill-bar-label / .skill-bar-pct */
const SkillBar = ({ label, pct }: { label: string; pct: number }) => (
  /* BEFORE: gap-4 lg:gap-6 — lg: prefix fails
     AFTER:  .skill-bar-row from globals.css */
  <div className="skill-bar-row flex flex-row items-center w-full">
    <div className="flex flex-row items-center flex-1 min-w-0">
      {/* BEFORE: h-10 rounded-[12.9px] lg:h-16 lg:rounded-[20px] — lg: prefix fails
          AFTER:  .skill-bar-pill from globals.css */}
      <div
        className="skill-bar-pill relative flex items-center overflow-hidden shrink-0"
        style={{ width: `${pct}%`, background: "#3A6601" }}
      >
        {/* Diagonal stripe texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-65deg, transparent, transparent 10px, rgba(253,253,253,0.06) 10px, rgba(253,253,253,0.06) 11px)",
          }}
        />
        {/* BEFORE: text-sm lg:text-lg — lg: prefix fails
            AFTER:  .skill-bar-label from globals.css */}
        <span className="skill-bar-label relative z-[1] font-semibold text-neutral-25 whitespace-nowrap">
          {label}
        </span>
      </div>
      {/* Trailing separator line */}
      <div className="flex-1 h-px bg-neutral-800" />
    </div>
    {/* BEFORE: text-sm lg:text-xl — lg: prefix fails
        AFTER:  .skill-bar-pct from globals.css */}
    <span className="skill-bar-pct font-semibold text-white shrink-0 text-right">
      {pct}%
    </span>
  </div>
);

/* SKILLS SECTION
   All responsive layout via globals.css named classes:

   BEFORE (broken — lg: prefixes don't compile in src/app/home/partials/):
     section:  "px-4 py-10 gap-10 lg:flex-row lg:p-0 lg:py-20 lg:gap-[58px]"
     content:  "lg:max-w-[524px] lg:py-[147px] lg:pl-3"   ← typo + broken
     bars:     "lg:py-20 lg:pr-32 lg:justify-center]"      ← broken + syntax error

   AFTER (fixed — globals.css handles all responsive breakpoints):
     .skills-section  → mobile: flex-col, padding 40px 16px, gap 40px
                      → desktop: flex-row, padding 0, gap 58px
     .skills-content  → mobile: gap 24px, full width
                      → desktop: padding 147px 0 147px 128px, max-w 524px
     .skills-bars     → mobile: gap 15.52px, full width
                      → desktop: padding 80px 128px 80px 0, flex 1
*/
const SkillsSection = () => {
  return (
    <section id="skill" className="skills-section w-full bg-black">
      {/* LEFT: header + icons */}
      <div className="skills-content">
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="skills-title font-medium text-primary-200 w-full">
            SKILLS
          </p>
          <h2 className="skills-subtitle font-extrabold text-neutral-25 w-full">
            SKILLS THAT BRING IDEAS TO LIFE
          </h2>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-row items-center gap-6">
            {skillIcons.slice(0, 4).map((icon) => (
              <SkillIcon key={icon.alt} src={icon.src} alt={icon.alt} />
            ))}
          </div>
          <div className="flex flex-row items-center gap-6">
            {skillIcons.slice(4).map((icon) => (
              <SkillIcon key={icon.alt} src={icon.src} alt={icon.alt} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: skill bars */}
      <div className="skills-bars">
        {skillBars.map((bar) => (
          <SkillBar
            key={`${bar.label}-${bar.pct}`}
            label={bar.label}
            pct={bar.pct}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
