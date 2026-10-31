import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "AnyFikra — Every dream starts as a fikra";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CANVAS = "#FAFAFA";
const INK = "#111114";
const SPARK = "#F5A300";
// The site's marker (spark at 55%) pre-blended onto CANVAS. The gradient
// needs an explicit "to bottom": Satori misreads a leading "transparent".
const MARK = "#F7CA70";
// The logo from components/Logo.tsx, with the bulb lit.
const BULB =
  "M27 36.5H36C36 31.5 40.5 29.5 40.5 23.5A9 9 0 0 0 22.5 23.5C22.5 29.5 27 31.5 27 36.5Z";

export default async function OpengraphImage() {
  // Satori can't use next/font, so the share image reads the font file itself.
  const [roman, italic] = await Promise.all(
    ["Fraunces-SemiBold.woff", "Fraunces-SemiBoldItalic.woff"].map((file) =>
      readFile(join(process.cwd(), "assets/fonts", file)),
    ),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: CANVAS,
          color: INK,
          fontFamily: "Fraunces",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="52" height="52" viewBox="16.5 10.5 30 30">
            <path
              d={BULB}
              fill={SPARK}
              stroke={INK}
              strokeWidth={5}
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ display: "flex", fontSize: 48, letterSpacing: -1 }}>
            {"anyf"}
            <span style={{ display: "flex", position: "relative", marginLeft: 2 }}>
              {"ı"}
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 12,
                  width: 8,
                  height: 8,
                  background: SPARK,
                  transform: "translateX(-50%) rotate(45deg)",
                }}
              />
            </span>
            {"kra"}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 120,
            lineHeight: 1,
            letterSpacing: -4.2,
          }}
        >
          <span>Every dream starts</span>
          <span style={{ display: "flex" }}>
            {"as a"}
            <span
              style={{
                marginLeft: 26,
                padding: "0 2px",
                fontStyle: "italic",
                backgroundImage: `linear-gradient(to bottom, transparent 52%, ${MARK} 52%, ${MARK} 82%, transparent 82%)`,
              }}
            >
              fikra
            </span>
            .
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: roman, weight: 600, style: "normal" },
        { name: "Fraunces", data: italic, weight: 600, style: "italic" },
      ],
    },
  );
}
