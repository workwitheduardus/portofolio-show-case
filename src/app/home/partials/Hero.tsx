import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <>
      {/*  MOBILE — */}

      {/* SECTION 1: Hero text content */}
      <section
        id="home"
        className="hero-mobile-content lg:hidden relative flex flex-col items-start w-full bg-black isolate"
      >
        {/* Decorative vertical lines */}
        <span
          aria-hidden="true"
          className="absolute z-0 border-l border-neutral-800"
          style={{ width: "1px", height: "482px", left: "296px", top: "1px" }}
        />
        <span
          aria-hidden="true"
          className="absolute z-[1] border-l border-neutral-800"
          style={{ width: "1px", height: "563px", left: "197px", top: "-83px" }}
        />

        {/* Hero Header: line + greeting */}
        <div
          className="relative z-[2] flex flex-row items-center w-full gap-2"
        >
          <span
            className="block w-[21px] h-px shrink-0 bg-neutral-25"
          />
          <p className="font-medium text-base leading-[30px] text-neutral-25 grow text-md">
            Hi, I am Edwin Anderson Frontend Developer
          </p>
        </div>

        {/* Hero Title — 36px extrabold */}
        <h1
          className="relative z-[2] font-extrabold text-display-lg text-neutral-25 w-full leading-[48px]"
        >
          BUILDING FAST &amp;{" "}
          <span className="text-primary-200">INTERACTIVE</span> WEB EXPERIENCES.
        </h1>

        {/* Hero Subtitle */}
        <p
          className="relative z-[2] text-lg leading-[32px] font-medium text-neutral-400 w-full"
        >
          Bridging creativity and functionality to deliver stunning,
          user-friendly web applications
        </p>

        {/* Hire Me Button */}
        <Link
          href="#contact"
          className="relative z-[2] flex items-center justify-center w-full font-bold text-neutral-950 bg-primary-200 rounded-full hover:opacity-90 transition-opacity "
          style={{
            height: "48px",
            fontSize: "14px",
            lineHeight: "28px",
            boxShadow: "0px 4px 40px rgba(145, 255, 2, 0.4)",
          }}
        >
          Hire Me
        </Link>
      </section>

      {/* SECTION 2: Profile image block — appears BELOW text on mobile */}
      <section
        className="lg:hidden relative w-full bg-black overflow-hidden"
        style={{ height: "513px" }}
        aria-hidden="true"
      >
        {/* Green background strip — right side */}
        <div
          className="absolute bg-primary-200"
          style={{
            width: "187px",
            height: "466px",
            left: "206px",
            top: "12px",
          }}
        />

        {/* Portrait image — black & white via luminosity */}
        <div
          className="absolute"
          style={{
            width: "349.11px",
            height: "462px",
            left: "16px",
            top: "0px",
          }}
        >
          <Image
            src="/Portrait-of-a-Young-Man.svg"
            alt="Edwin Anderson portrait"
            fill
            className="object-contain"
            style={{
              mixBlendMode: "luminosity",
              transform: "rotate(-1.45deg)",
            }}
            priority
          />
        </div>

        {/* Gradient overlay — fade to black at bottom */}
        <div
          className="absolute"
          style={{
            width: "392px",
            height: "466px",
            left: "0px",
            top: "0px",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) -92.59%, #000000 88.93%)",
          }}
        />
        <div
          className="absolute bg-primary-400"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "0px",
            top: "276px",
          }}
        />
        <div
          className="absolute bg-primary-400"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "34.5px",
            top: "242px",
          }}
        />
        <div
          className="absolute bg-primary-400"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "69px",
            top: "276px",
          }}
        />

        {/* Rating card — visible at bottom of image section */}
        <div
          className="absolute flex flex-col bg-black border border-neutral-800 rounded-2xl z-10"
          style={{
            width: "349px",
            padding: "20px",
            gap: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "16px",
          }}
        >
          <span
            className="font-bold text-2xl text-neutral-25 leading-9"
          >
            5.0
          </span>
          <div className="flex flex-row items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                fill="#f3993f"
                color="#f3993f"
                strokeWidth={0}
              />
            ))}
          </div>
          <span
            className="font-semibold text-base leading-[30px] text-neutral-25 w-full"
          >
            Many Client Trust with me
          </span>
        </div>
      </section>

      {/* DESKTOP — single full-height container, side by side hidden below lg */}
      <section
        id="home"
        className="hidden lg:block relative w-full bg-black overflow-hidden"
        style={{ minHeight: "873px" }}
      >
        <div
          className="absolute bg-primary-400"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "34.5px",
            top: "652px",
          }}
        />
        <div
          className="absolute bg-primary-400"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "0px",
            top: "686px",
          }}
        />
        <div
          className="absolute bg-primary-400"
          style={{
            width: "34.5px",
            height: "34.5px",
            left: "69px",
            top: "686px",
          }}
        />

        {/* Hero text — left side, z-10 above image */}
        <div
          className="absolute flex flex-col z-10"
          style={{
            left: "128px",
            top: "221px",
            width: "min(807px, 55%)",
            gap: "16px",
          }}
        >
          <div className="flex flex-row items-center" style={{ gap: "16px" }}>
            <span
              className="block w-[114px] h-px shrink-0 bg-neutral-25"
            />
            <p
              className="font-medium text-neutral-25 text-md"
            >
              Hi, I am Edwin Anderson Frontend Developer
            </p>
          </div>

          <h1
            className="font-extrabold text-neutral-25 w-full"
            style={{ fontSize: "80px", lineHeight: "100%" }}
          >
            BUILDING FAST &amp;{" "}
            <span className="text-primary-200">INTERACTIVE</span> WEB EXPERIENCES.
          </h1>

          <p
            className="font-medium text-neutral-400"
            style={{ maxWidth: "597px", fontSize: "20px", lineHeight: "34px" }}
          >
            Bridging creativity and functionality to deliver stunning,
            user-friendly web applications
          </p>

          <Link
            href="#contact"
            className="flex items-center justify-center font-bold text-neitral-950 bg-primary-200 rounded-full hover:opacity-90 transition-opacity"
            style={{
              width: "300px",
              height: "56px",
              fontSize: "16px",
              lineHeight: "30px",
              boxShadow: "0px 4px 40px rgba(145, 255, 2, 0.4)",
            }}
          >
            Hire Me
          </Link>
        </div>

        {/* Profile image — right side */}
        <div
          className="absolute top-0 right-0 h-full overflow-hidden"
          style={{ width: "min(660px, 46%)" }}
        >
          {/* Green strip */}
          <div
            className="absolute bg-primary-200"
            style={{ width: "47.9%", height: "99%", right: "0", top: "0" }}
          />
          <div
            className="absolute"
            style={{
              width: "658px",
              height: "872px",
              top: "-7.37px",
              left: "-9.84px",
            }}
          >
            <Image
              src="/Portrait-of-a-Young-Man.svg"
              alt="Edwin Anderson portrait"
              fill
              className="object-contain"
              style={{
                mixBlendMode: "luminosity",
                transform: "rotate(1.45deg)",
              }}
              priority
            />
          </div>

          {/* Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) -92.59%, #000000 88.93%)",
            }}
          />
          {/* Rating card */}
          <div
            className="absolute flex flex-col bg-black border border-neutral-800 z-10"
            style={{
              width: "316px",
              padding: "20px",
              gap: "8px",
              right: "25%",
              top: "80%",
              transform: "translateY(-50%)",
              borderRadius: "20px",
            }}
          >
            <span
              className="font-bold text-neutral-25 w-full text-display-xl leading-[56px] tracking-[-0.02rem]"
            >
              5.0
            </span>
            <div className="flex flex-row items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={32}
                  fill="#f3993f"
                  color="#f3993f"
                  strokeWidth={0}
                />
              ))}
            </div>
            <span
              className="font-semibold text-xl text-neutral-25 w-full leading-[34px]"
            >
              Many Client Trust with me
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
