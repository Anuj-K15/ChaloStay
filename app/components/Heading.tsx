"use client";

interface HeadingProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
}
const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-xl sm:text-2xl font-bold">{title}</div>
      <div className="text-neutral-500 mt-1 sm:mt-2 font-light text-sm sm:text-base">{subtitle}</div>
    </div>
  );
};

export default Heading;
