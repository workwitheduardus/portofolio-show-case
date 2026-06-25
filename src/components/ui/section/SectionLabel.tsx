type SectionLabelProps = {
  text: string;
};

const SectionLabel = ({ text }: SectionLabelProps) => {
  return (
    <p className="section-label font-medium text-base leading-[30px] lg:text-lg lg:leading-[32px] text-primary-200 w-full">
      {text}
    </p>
  );
};

export default SectionLabel;
