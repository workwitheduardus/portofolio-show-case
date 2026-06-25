type SectionTextProps = {
  text: string;
  alignRight?: boolean; 
};

const SectionText = ({ text, alignRight = false }: SectionTextProps) => {
  return (
    <p
      className={`font-medium text-base leading-[30px] text-neutral-400 w-full lg:text-xl lg:leading-[34px] ${
        alignRight ? "lg:text-right" : ""
      }`}
    >
      {text}
    </p>
  );
};

export default SectionText;
