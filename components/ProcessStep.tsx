type ProcessStepProps = {
  number: number;
  label: string;
  description: string;
};

export function ProcessStep({ number, label, description }: ProcessStepProps) {
  return (
    <article className="rounded-soft border border-line bg-surface p-6 shadow-soft">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta text-base font-semibold text-surface">
          {number}
        </span>
        <h3 className="font-heading text-2xl text-brown">{label}</h3>
      </div>
      <p className="mt-4 text-sm leading-7 text-light-brown">{description}</p>
    </article>
  );
}
