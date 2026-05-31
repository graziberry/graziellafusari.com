type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  tone?: "default" | "light";
};

export function SectionHeading({ eyebrow, title, subtitle, centered, tone = "default" }: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-xs font-bold uppercase tracking-[0.24em] ${isLight ? "text-blush" : "text-terracotta"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-heading text-4xl font-semibold leading-tight md:text-6xl ${isLight ? "text-surface" : "text-brown"}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-5 text-sm leading-7 md:text-base ${isLight ? "text-surface/72" : "text-light-brown"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
