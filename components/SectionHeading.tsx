interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-green text-sm font-bold uppercase tracking-wider mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-black font-heading text-4xl lg:text-5xl uppercase mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray text-lg max-w-3xl" style={centered ? { marginLeft: 'auto', marginRight: 'auto' } : {}}>
          {description}
        </p>
      )}
    </div>
  );
}
