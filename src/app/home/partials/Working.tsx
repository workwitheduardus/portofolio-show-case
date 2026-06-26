import Image from "next/image";
import Link from "next/link";

/*  DATA */
const workingWithMe = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "UI Design Proficiency (Figma)",
];

const anotherTalent = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "No Design Skills",
];

/* ICON SVG  */
const GreenStar = () => (
  <svg
    width="23"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="working-icon-svg shrink-0"
  >
    <path
      d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"
      stroke="#91FF02"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const DimStar = () => (
  <svg
    width="23"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="working-icon-svg shrink-0"
  >
    <path
      d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"
      stroke="rgba(145,255,2,0.4)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

/* CHECK ITEM  */
const CheckItem = ({ text }: { text: string }) => (
  <div className="working-item flex flex-row items-center gap-3 w-full">
    <GreenStar />
    <span className="working-item-text font-bold text-neutral-25">{text}</span>
  </div>
);

/* DOT ITEM */
const DotItem = ({ text }: { text: string }) => (
  <div className="working-item flex flex-row items-center gap-3 w-full">
    <DimStar />
    <span className="working-item-text font-normal text-neutral-400">
      {text}
    </span>
  </div>
);

/* AVATAR*/
const PortraitAvatar = () => (
  <div className="working-avatar bg-neutral-950">
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
      <Image
        src="/Portrait-of-a-Young-Man.svg"
        alt="Edwin Anderson portrait"
        width={52}
        height={68}
        className="working-portrait object-cover"
        style={{ transform: "rotate(-1.45deg)" }}
      />
    </div>
  </div>
);

const SilhouetteAvatar = () => (
  <div className="working-avatar bg-neutral-950 flex items-center justify-center">
    <svg viewBox="0 0 80 80" fill="none" width="80" height="80" className="p-3">
      <circle cx="40" cy="30" r="12" fill="#FDFDFD" />
      <ellipse cx="40" cy="62" rx="20" ry="14" fill="#FDFDFD" />
    </svg>
  </div>
);

/* EXPERIENCE COLUMN */
const ExperienceColumn = ({
  title,
  usePortrait,
  items,
  ItemComponent,
}: {
  title: string;
  usePortrait: boolean;
  items: string[];
  ItemComponent: typeof CheckItem;
}) => (
  <div className="working-column flex flex-col items-center gap-6">
    <h3 className="working-col-title font-bold text-neutral-25 text-center w-full">
      {title}
    </h3>
    {usePortrait ? <PortraitAvatar /> : <SilhouetteAvatar />}
    <div className="working-items-wrapper flex flex-col items-start">
      {items.map((item, i) => (
        <div key={item} className="flex flex-col w-full">
          <ItemComponent text={item} />
          {i < items.length - 1 && (
            <hr className="w-full border-t border-neutral-800 my-0" />
          )}
        </div>
      ))}
    </div>
  </div>
);

/*  WORKING SECTION */
const WorkingSection = () => {
  return (
    <section id="working" className="working-section w-full bg-black">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 w-full">
        <p className="working-label font-medium text-primary-200 text-center w-full">
          WORKING
        </p>
        <h2 className="working-title font-extrabold text-neutral-25 text-center w-full">
          WHY CHOOSE ME?
        </h2>
      </div>

      {/* Two columns */}
      <div className="working-columns">
        <ExperienceColumn
          title="WORKING WITH ME"
          usePortrait={true}
          items={workingWithMe}
          ItemComponent={CheckItem}
        />
        <ExperienceColumn
          title="ANOTHER TALENT"
          usePortrait={false}
          items={anotherTalent}
          ItemComponent={DotItem}
        />
      </div>

      {/* Hire Me  */}
      <Link
        href="#contact"
        className="working-btn flex items-center justify-center font-bold text-neutral-950 bg-primary-200 rounded-full hover:opacity-90 transition-opacity"
        style={{ boxShadow: "0px 4px 40px rgba(145, 255, 2, 0.4)" }}
      >
        HIRE ME
      </Link>
    </section>
  );
};

export default WorkingSection;
