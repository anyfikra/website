import { ArrowRight } from "lucide-react";

interface AppCardProps {
  href: string;
  icon: string;
  iconAlt: string;
  category: string;
  name: string;
  accentBorderHover: string;
  accentGradientFrom: string;
  accentGradientVia: string;
  accentShadow: string;
  accentIconShadow: string;
  accentText: string;
}

export default function AppCard({
  href,
  icon,
  iconAlt,
  category,
  name,
  accentBorderHover,
  accentGradientFrom,
  accentGradientVia,
  accentShadow,
  accentIconShadow,
  accentText,
}: Readonly<AppCardProps>) {
  return (
    <a href={href} className="group block">
      <div
        className={`relative overflow-hidden rounded-2xl border-2 border-neutral-700/50 bg-neutral-800/50 backdrop-blur-sm p-5 h-full ${accentBorderHover} transition-all duration-400`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentGradientFrom} ${accentGradientVia} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
        />
        <div className="relative flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-600 font-syne">
                {category}
              </span>
              <h3 className="text-lg font-bold text-neutral-50 mt-0.5 font-syne">
                {name}
              </h3>
            </div>
            <img
              src={icon}
              alt={iconAlt}
              className={`w-16 h-16 rounded-2xl shadow-lg ${accentIconShadow} group-hover:-rotate-6 transition-all duration-400 flex-shrink-0 ml-4`}
            />
          </div>
          <div
            className={`flex items-center gap-1.5 ${accentText} group-hover:gap-2.5 transition-all duration-300 mt-auto`}
          >
            <span className="text-sm font-semibold font-syne">Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </a>
  );
}
