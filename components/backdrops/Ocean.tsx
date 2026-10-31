const BUBBLES = [
  { size: 14, left: "7%", duration: 19, delay: -3 },
  { size: 26, left: "44%", duration: 25, delay: -9 },
  { size: 10, left: "52%", duration: 15, delay: -5 },
  { size: 20, left: "92%", duration: 22, delay: -14 },
  { size: 12, left: "74%", duration: 17, delay: -11 },
  { size: 16, left: "28%", duration: 21, delay: -7 },
];

// What the app's own sticker notes say, from its screenshots.
const STICKERS = [
  { text: "Iced matcha latte", dot: true, tilt: -5, delay: -1, right: "32%", top: 76 },
  { text: "Peanuts", dot: true, tilt: 4, delay: -2.4, right: "6%", top: 150 },
  { text: "Ceramics class for two", dot: false, tilt: -3, delay: -3.6, right: "20%", top: 250 },
];

/** Keepen: the app's ocean, down the whole page. */
export default function Ocean() {
  return (
    <div className="project-backdrop bd-ocean" aria-hidden>
      <div className="rays" />
      {BUBBLES.map(({ size, left, duration, delay }) => (
        <span
          key={left}
          className="bubble"
          style={{
            width: size,
            height: size,
            left,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
      <div className="wrap backdrop-inner">
        {STICKERS.map(({ text, dot, tilt, delay, right, top }) => (
          <span
            key={text}
            className="sticker"
            style={{
              right,
              top,
              rotate: `${tilt}deg`,
              animationDelay: `${delay}s`,
            }}
          >
            {dot && <i>●</i>} {text}
          </span>
        ))}
      </div>
    </div>
  );
}
