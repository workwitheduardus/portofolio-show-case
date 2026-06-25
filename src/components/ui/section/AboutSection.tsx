/* About Section Reusable Components */

/* AboutTitle  */
type AboutTitleProps = { text: string };

export const AboutTitle = ({ text }: AboutTitleProps) => (
  <p className="font-medium text-base leading-[30px] text-primary-200 text-center w-full">
    {text}
  </p>
);

/* AboutSubtitle */
type AboutSubtitleProps = { text: string };

export const AboutSubtitle = ({ text }: AboutSubtitleProps) => (
  <h2 className="font-extrabold text-[32px] leading-[46px] text-neutral-25 text-center w-full">
    {text}
  </h2>
);

/* AboutDescription  */
type AboutDescriptionProps = { text: string };

export const AboutDescription = ({ text }: AboutDescriptionProps) => (
  <h2 className="font-extrabold text-[32px] leading-[46px] text-primary-200 text-center w-full">
    {text}
  </h2>
);

/* AboutText */
type AboutTextProps = { text: string };

export const AboutText = ({ text }: AboutTextProps) => (
  <p className="font-medium text-base leading-[30px] text-neutral-400 text-center w-full">
    {text}
  </p>
);
