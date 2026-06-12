type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="botanical-wash border-b border-line py-18 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">{eyebrow}</p>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight text-brown md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-light-brown md:text-lg">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
