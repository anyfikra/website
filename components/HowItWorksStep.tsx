interface HowItWorksStepProps {
  icon: React.ReactNode;
  iconBg?: string;
  title: string;
  description: string;
  step: number;
  isLast?: boolean;
}

export default function HowItWorksStep({
  icon,
  title,
  description,
  step,
}: Readonly<HowItWorksStepProps>) {
  return (
    <div className="flex flex-col">
      <div className="p-4 rounded-xl border-2 border-neutral-700/50 bg-neutral-800/30 hover:bg-neutral-800/60 hover:border-neutral-600/60 transition-all duration-300 h-full flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          {icon}
          <span className="text-[11px] font-bold text-neutral-500 font-syne tracking-widest uppercase">
            Step {step}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-100 text-base font-syne">
            {title}
          </h4>
          <p className="text-neutral-500 text-sm mt-0.5 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
