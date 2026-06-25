import Image from "next/image";
import {
  AboutTitle,
  AboutSubtitle,
  AboutDescription,
  AboutText,
} from "@/components/ui/section/AboutSection";

/*  ABOUT SECTION*/

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padded w-full bg-black flex flex-col justify-center items-center"
    >
      {/* ── ABOUT CONTENT block */}
      <div className="flex flex-col items-start gap-4 w-full">
        {/* About Title — "ABOUT ME" */}
        <AboutTitle text="ABOUT ME" />

        {/* About Details*/}
        <div className="flex flex-col items-center gap-1 w-full">
          {/* About Subtitle" */}
          <AboutSubtitle text="CRAFTING SEAMLESS" />

          {/* About Description */}
          <AboutDescription text="HIGH-PERFORMANCE WEB EXPERIENCES" />
        </div>

        {/* About Text */}
        <AboutText text="I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep understanding of frontend technologies, I create smooth and visually appealing user experiences." />
      </div>
      <div
        className="relative w-full max-w-[393px] mx-auto mt-4 overflow-hidden"
        style={{ height: "288px" }}
      >
        {/* first image */}
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

        {/* second image */}
        <div
          className="absolute"
          style={{ right: "35px", top: "45px", width: "134px", height: "99px" }}
        >
          <Image
            src="/image-about-me-2.svg"
            alt="About me project 2"
            fill
            className="object-cover"
          />
        </div>

        {/* third image */}
        <div
          className="absolute"
          style={{
            left: "144px",
            top: "164px",
            width: "132px",
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
