type SectionHeadingProps = {
  text: string;
};

const SectionHeading = ({ text }: SectionHeadingProps) => {
  return (
    <h2
      className="font-extrabold text-neutral-25 w-full"
      style={{ fontSize: "32px", lineHeight: "46px" }}
    >
      <span className="lg:hidden">{text}</span>
      <span
        className="hidden lg:block"
        style={{ fontSize: "48px", lineHeight: "60px" }}
      >
        {text}
      </span>
    </h2>
  );
};

export default SectionHeading;
