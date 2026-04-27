"use client";

import { useEffect, useState } from "react";

const WORDS = ["meaningful", "delightful", "personal", "simple"];

export default function FeelWords() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(wordInterval);
  }, []);
  return (
    <span className="relative inline-block">
      <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent blur-xl opacity-50">
        {WORDS[currentWord]}
      </span>
      <span className="relative bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
        {WORDS[currentWord]}
      </span>
    </span>
  );
}
