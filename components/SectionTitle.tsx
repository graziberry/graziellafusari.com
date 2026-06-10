type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionTitle({ eyebrow, title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-light-brown">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-4xl font-medium leading-tight text-brown md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-5 text-base leading-8 text-light-brown md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
