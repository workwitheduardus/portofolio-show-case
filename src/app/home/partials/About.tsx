import Image from "next/image";
import {
  AboutTitle,
  AboutSubtitle,
  AboutDescription,
  AboutText,
} from "@/components/ui/section/AboutSection";

/* ============================================================
   ABOUT SECTION
   Mobile:  flex-col, padding 40px 16px, gap 16px, centered
   Desktop: TODO — will be added when desktop design is provided
   ============================================================ */

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padded w-full bg-black flex flex-col justify-center items-center"
    >
      {/* ── ABOUT CONTENT block ──────────────────────────────
          Figma: flex-col, gap 16px, width 361px on mobile     */}
      <div className="flex flex-col items-start gap-4 w-full">
        {/* About Title — "ABOUT ME" */}
        <AboutTitle text="ABOUT ME" />

        {/* About Details: subtitle + description stacked, gap 4px */}
        <div className="flex flex-col items-center gap-1 w-full">
          {/* About Subtitle — "CRAFTING SEAMLESS" */}
          <AboutSubtitle text="CRAFTING SEAMLESS" />

          {/* About Description — "HIGH-PERFORMANCE WEB EXPERIENCES" */}
          <AboutDescription text="HIGH-PERFORMANCE WEB EXPERIENCES" />
        </div>

        {/* About Text — paragraph */}
        <AboutText text="I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep understanding of frontend technologies, I create smooth and visually appealing user experiences." />
      </div>

      {/* ── IMAGE COLLAGE + RECTANGLES block ─────────────────
          Figma Frame 1618873595: width 393px, height 288px
          Three images overlaid at absolute positions
          Three rectangles in vertical staircase on left     */}
      <div className="relative w-full h-[288px] mt-4">
        {/* image-about-me-1: left 40px, top 0, 170×127px */}
        <div
          className="absolute"
          style={{ left: "40px", top: "0px", width: "170px", height: "127px" }}
        >
          <Image
            src="/image-about-me-1.svg"
            alt="About me project 1"
            fill
            className="object-cover"
          />
        </div>

        {/* image-about-me-2: left 224px, top 45px, 134×99px */}
        <div
          className="absolute"
          style={{ left: "224px", top: "45px", width: "134px", height: "99px" }}
        >
          <Image
            src="/image-about-me-2.svg"
            alt="About me project 2"
            fill
            className="object-cover"
          />
        </div>

        {/* image-about-me-3: left 144px, top 164px, 132.47×100px */}
        <div
          className="absolute"
          style={{
            left: "144px",
            top: "164px",
            width: "133px",
            height: "100px",
          }}
        >
          <Image
            src="/image-about-me-3.svg"
            alt="About me project 3"
            fill
            className="object-cover"
          />
        </div>

        {/* 3 rectangles — vertical staircase on left side
            Figma Group 1: left 0px, rotated 90deg staircase
            Rectangle 156403: left 0px,    top 175px
            Rectangle 156404: left 34.5px, top 209.5px
            Rectangle 156405: left 0px,    top 244px        */}
        <div
          className="absolute bg-primary-400"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "0px",
            top: "175px",
          }}
        />
        <div
          className="absolute bg-primary-400"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "34.5px",
            top: "209.5px",
          }}
        />
        <div
          className="absolute bg-primary-400"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "0px",
            top: "244px",
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
