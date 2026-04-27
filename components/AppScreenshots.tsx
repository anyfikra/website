interface AppScreenshotsProps {
  app: string;
  accentRingClass: string;
}

const SCREENSHOTS = ["01", "02", "03", "04"];

export default function AppScreenshots({
  app,
  accentRingClass,
}: Readonly<AppScreenshotsProps>) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
        {SCREENSHOTS.map((n) => (
          <div
            key={n}
            className="flex-shrink-0 snap-center w-[calc(50%-8px)] md:w-[calc(25%-12px)]"
          >
            <div
              className={`rounded-2xl overflow-hidden ring-2 ring-neutral-700/60 hover:${accentRingClass} transition-all duration-300`}
            >
              <img
                src={`/static/${app}/${n}.webp`}
                alt=""
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
