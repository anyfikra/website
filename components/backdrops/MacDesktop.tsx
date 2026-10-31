/** Macinroid: a menu bar, for the very top of the page. */
export function MacMenuBar() {
  return (
    <div className="mac-menu" aria-hidden>
      <b className="font-semibold">Macinroid</b>
      {["File", "Edit", "View", "Go"].map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

/** Macinroid: a desktop wallpaper with a copy in progress. */
export default function MacDesktop() {
  return (
    <div className="project-backdrop bd-desktop" aria-hidden>
      <div className="wrap backdrop-inner">
        <div className="mac-copy">
          <p className="dots">
            <i />
            <i />
            <i />
          </p>
          <b className="block font-semibold">Copying to Pixel 9 Pro</b>
          <span className="bar">
            <i />
          </span>
          <span className="tabular-nums text-mute">2 of 6 items</span>
        </div>
      </div>
    </div>
  );
}
