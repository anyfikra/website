import { Check } from "lucide-react";

interface FeatureCheckItemProps {
  title: string;
  description: string;
  iconBg?: string;
  checkColor: string;
}

export default function FeatureCheckItem({
  title,
  description,
  checkColor,
}: Readonly<FeatureCheckItemProps>) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl border-2 border-neutral-700/50 bg-neutral-800/30 hover:bg-neutral-800/60 hover:border-neutral-600/60 transition-all duration-300">
      <Check className={`w-5 h-5 ${checkColor} flex-shrink-0 mt-0.5`} />
      <div>
        <h4 className="font-semibold text-neutral-100 text-base font-syne">
          {title}
        </h4>
        <p className="text-neutral-500 text-sm mt-0.5 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
