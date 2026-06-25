import Image from "next/image";
import SectionLabel from "@/components/ui/section/SectionLabel";
import SectionHeading from "@/components/ui/section/SectionHeading";
import SectionText from "@/components/ui/section/SectionText";

/* SERVICE DATA */
const services = [
  {
    number: "01",
    title: "Custom Website Development",
    description:
      "Building responsive, fast, and scalable websites tailored to your needs.",
  },
  {
    number: "02",
    title: "Web Performance Optimization",
    description:
      "Enhancing website speed, SEO, and overall performance for better.",
  },
  {
    number: "03",
    title: "Website Maintenance & Debugging",
    description:
      "Fixing bugs, improving UI, and ensuring smooth performance over time.",
  },
];

/* SERVICE CARD  */
const ServiceCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-start w-full gap-3 lg:gap-6 lg:flex-1">
    <span
      className="font-semibold text-neutral-400 w-full"
      style={{ fontSize: "16px", lineHeight: "30px" }}
    >
      {number}
    </span>

    <hr className="w-full border-t border-neutral-800 m-0" />

    {/* Monitor icon */}
    <div className="relative w-8 h-8 shrink-0">
      <Image
        src="/monitor-01.svg"
        alt="Service icon"
        fill
        className="object-contain"
      />
    </div>

    {/* Card title */}
    <h3
      className="font-semibold text-neutral-25 w-full"
      style={{ fontSize: "20px", lineHeight: "34px" }}
    >
      <span className="lg:hidden">{title}</span>
      <span
        className="hidden lg:block text-white"
        style={{ fontSize: "28px", lineHeight: "38px" }}
      >
        {title}
      </span>
    </h3>

    {/* Card description*/}
    <p
      className="font-normal text-neutral-400 w-full"
      style={{ fontSize: "16px", lineHeight: "30px" }}
    >
      <span className="lg:hidden">{description}</span>
      <span
        className="hidden lg:block"
        style={{ fontSize: "20px", lineHeight: "34px" }}
      >
        {description}
      </span>
    </p>
  </div>
);

/* SERVICES SECTION */
const ServicesSection = () => {
  return (
    <section
      id="skill"
      className="section-padded w-full bg-black flex flex-col items-start"
    >
      {/* Desktop wrapper override */}
      <div className="hidden lg:block w-full" />

      {/* ── SERVICES HEADER ── */}
      <div className="flex flex-col items-start gap-4 w-full lg:flex-row lg:justify-between lg:items-center lg:gap-[121px]">
        {/* Services Title*/}
        <div className="flex flex-col items-start gap-2 w-full lg:max-w-[509px]">
          <SectionLabel text="SERVICE" />
          <SectionHeading text="MY SERVICE EXPERTISE" />
        </div>

        {/* Services supporting text — right-aligned on desktop */}
        <div className="w-full lg:max-w-[504px]">
          <SectionText
            text="Creating modern, intuitive, and visually consistent web experiences that align with industry trends and user expectations."
            alignRight
          />
        </div>
      </div>

      {/* ── SERVICE CARDS ── */}
      <div className="grid grid-cols-1 w-full gap-6 lg:grid-cols-3 lg:gap-[40px]">
        {services.map((service) => (
          <ServiceCard
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
