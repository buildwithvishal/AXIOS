import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "right" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align} section-heading--${tone}`}>
      <p className="section-eyebrow">
        <span>{index}</span>
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description ? <p className="section-heading-note">{description}</p> : null}
    </div>
  );
}
