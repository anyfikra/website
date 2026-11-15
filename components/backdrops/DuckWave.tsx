const WAVE =
  "M0 42C120 10 240 10 360 42S600 74 720 42 960 10 1080 42s240 32 360 0";

/** Ducky Bank: the duck bobbing on a wave. */
export default function DuckWave() {
  return (
    <div className="project-backdrop bd-duck">
      <img
        src="/ducky-bank/duck.png"
        alt=""
        width={640}
        height={640}
        className="duck"
      />
      <svg
        className="wave"
        viewBox="0 0 1440 92"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path className="water" d={`${WAVE}V92H0Z`} />
        <path className="crest" d={WAVE} vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
