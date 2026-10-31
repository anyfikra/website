const POINTS = 120;

/** Seeded, so the line is the same on every visit. */
function pricePath() {
  let seed = 90011;
  const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  let drift = 0;
  return Array.from({ length: POINTS }, (_, i) => {
    const t = i / (POINTS - 1);
    drift += (random() - 0.5) * 0.022;
    // Flat under the text on the left, then rising to the right.
    const y = 0.04 + t ** 5 * 0.9 + drift * (0.25 + t);
    return `${i ? "L" : "M"}${(t * 1200).toFixed(1)} ${(392 - y * 380).toFixed(1)}`;
  }).join("");
}

/** BourseIQ: a price line across the top of the page. */
export default function PriceLine() {
  const path = pricePath();
  return (
    <div className="project-backdrop bd-bourse">
      <svg viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="price-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopOpacity="0.2" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="area" fill="url(#price-fill)" d={`${path}L1200 400L0 400Z`} />
        <path
          className="line"
          d={path}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
