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
      className="section-padded relative w-full bg-black flex flex-col justify-center items-center"
    >
      <div className="lg:hidden flex flex-col items-center w-full gap-4">
        {/* ── ABOUT CONTENT block */}
        <div className="flex flex-col items-start gap-4 w-full">
          {/* About Title — "ABOUT ME" */}
          <AboutTitle text="ABOUT ME" />

          {/* About Details*/}
          <div className="flex flex-col items-center gap-1 w-full">
            {/* About Subtitle" */}
            <AboutSubtitle text="CRAFTING SEAMLESS" />

            {/* About Description */}
            <h2 className="font-extrabold text-[32px] leading-[46px] text-primary-200 text-center w-full">
              <span className="block text-primary-200">
                HIGH-PERFORMANCE WEB
              </span>
              <span className="block text-white">EXPERIENCES</span>
            </h2>
          </div>

          {/* About Text */}
          <AboutText text="I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep understanding of frontend technologies, I create smooth and visually appealing user experiences." />
        </div>
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "288px" }}
        >
          {/* first image */}
          <div
            className="absolute"
            style={{
              left: "40px",
              top: "0px",
              width: "170px",
              height: "127px",
            }}
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
            style={{
              right: "0px",
              top: "45px",
              width: "134px",
              height: "99px",
            }}
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
      </div>

      {/*  DESKTOP */}
      <div className="hidden lg:flex flex-col items-center w-full gap-16">
        {/* About Content */}
        <div className="flex flex-col items-center gap-4 w-full">
          {/* About Title —*/}
          <p className="font-medium text-lg leading-[32px] text-primary-200 text-center w-full">
            ABOUT ME
          </p>

          {/* About Details */}
          <div className="relative flex flex-col items-center gap-1 w-full isolate">
            {/* Image 1 */}
            <div
              className="absolute z-0"
              style={{
                width: "238px",
                height: "178px",
                left: "270px",
                top: "-130px",
              }}
            >
              <Image
                src="/image-about-me-1.svg"
                alt="About me project 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2  */}
            <div
              className="absolute z-[1]"
              style={{
                width: "250px",
                height: "187px",
                right: "185px",
                top: "-100px",
              }}
            >
              <Image
                src="/image-about-me-2.svg"
                alt="About me project 2"
                fill
                className="object-cover"
              />
            </div>

            {/* About Subtitle — */}
            <h2
              className="font-extrabold text-neutral-25 text-center w-full z-[2]"
              style={{ fontSize: "48px", lineHeight: "60px" }}
            >
              CRAFTING SEAMLESS
            </h2>

            {/* About Description — */}
            <h2
              className="font-extrabold text-primary-200 text-center z-[3]"
              style={{
                fontSize: "48px",
                lineHeight: "60px",
                maxWidth: "872px",
              }}
            >
              <span className="block">HIGH-PERFORMANCE WEB</span>
              <span className="block text-white">EXPERIENCES</span>
            </h2>

            {/* Image 3  */}
            <div
              className="absolute z-[4]"
              style={{
                width: "117px",
                height: "88px",
                left: "900px",
                top: "135px",
              }}
            >
              <Image
                src="/image-about-me-3.svg"
                alt="About me project 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* About Text  */}
          <p
            className="font-medium text-neutral-400 text-center w-full z-[1]"
            style={{ fontSize: "20px", lineHeight: "34px", maxWidth: "996px" }}
          >
            I love turning designs into interactive, high-performance websites.
            With a keen eye for detail and a deep understanding of frontend
            technologies, I create smooth and visually appealing user
            experiences.
          </p>
        </div>

        {/* 3 rectangles */}
        <div
          className="absolute bg-primary-400"
          style={{ width: "46px", height: "46px", left: "0px", top: "463px" }}
        />
        <div
          className="absolute bg-primary-400"
          style={{ width: "46px", height: "46px", left: "46px", top: "509px" }}
        />
        <div
          className="absolute bg-primary-400"
          style={{ width: "46px", height: "46px", left: "0px", top: "555px" }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
