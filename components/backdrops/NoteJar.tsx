"use client";

import { useState } from "react";

const SHAKE_MS = 620;

const NOTES = [
  "We’re trending on TikTok for being too iconic.",
  "I love you ♥",
  "Future us has a dog named Waffles.",
  "Best part of today: you stealing my fries.",
];
const PAPER = ["#fff5bd", "#ffd3e6", "#e6dcf5", "#cdeef0"];

/** DeluluJar: tap the jar and it shakes out a note. */
export default function NoteJar() {
  const [note, setNote] = useState(0);
  const [shaking, setShaking] = useState(false);

  const shake = () => {
    if (shaking) return;
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
      setNote((n) => (n + 1) % NOTES.length);
    }, SHAKE_MS);
  };

  return (
    <div className="project-backdrop bd-jar">
      <div className="wrap backdrop-inner">
        <button
          type="button"
          onClick={shake}
          aria-label="Shake the jar for a note"
          className="jar-button"
        >
          <img
            src="/delulu-jar/jar.png"
            alt=""
            width={640}
            height={640}
            className={shaking ? "jar-shaking" : ""}
          />
        </button>
        {/* The key replays the entrance for each new note. */}
        <p key={note} className="jar-note" style={{ background: PAPER[note] }}>
          {NOTES[note]}
        </p>
        <p className="jar-hint">Tap the jar</p>
      </div>
    </div>
  );
}
