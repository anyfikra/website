"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Point = [column: number, row: number];

const COLUMNS = 17;
const ROWS = 11;
const WIDTH = 1400;
const HEIGHT = 760;

// An illustration of a street grid, not HERE data. Routes follow its junctions.
const ROUTES: Record<string, Point[]> = {
  walk: [[9, 2], [10, 2], [10, 3], [11, 3], [11, 4], [12, 4], [12, 5], [13, 5], [13, 6], [14, 6], [14, 7], [15, 7]],
  bike: [[9, 2], [9, 4], [11, 4], [11, 5], [13, 5], [13, 7], [15, 7]],
  scooter: [[9, 2], [12, 2], [12, 3], [13, 3], [13, 6], [15, 6], [15, 7]],
  car: [[9, 2], [14, 2], [14, 4], [15, 4], [15, 7]],
  truck: [[9, 2], [9, 6], [12, 6], [12, 8], [15, 8], [15, 7]],
  bus: [[9, 2], [13, 2], [13, 4], [12, 4], [12, 6], [15, 6], [15, 7]],
};

// The ten values of the library's RouteOption type.
const MODES = [
  { label: "Car", route: "car" },
  { label: "Pedestrian", route: "walk" },
  { label: "Bicycle", route: "bike" },
  { label: "Scooter", route: "scooter" },
  { label: "Taxi", route: "car" },
  { label: "Bus", route: "bus" },
  { label: "Private bus", route: "bus" },
  { label: "Truck", route: "truck" },
  { label: "EV car", route: "car" },
  { label: "EV truck", route: "truck" },
];

/** Seeded, so the server and the browser draw the same streets. */
function drawStreets() {
  let seed = 424242;
  const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const junctions: Point[] = [];
  for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLUMNS; column++) {
      junctions.push([
        Math.round((column * WIDTH) / (COLUMNS - 1) + (random() - 0.5) * 38),
        Math.round((row * HEIGHT) / (ROWS - 1) + (random() - 0.5) * 34),
      ]);
    }
  }
  const at = (column: number, row: number) => junctions[row * COLUMNS + column];
  const segment = (a: Point, b: Point) => `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;

  let streets = "";
  let avenues = "";
  for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLUMNS; column++) {
      if (column < COLUMNS - 1 && random() > 0.12) {
        const road = segment(at(column, row), at(column + 1, row));
        if (row % 4 === 1) avenues += road;
        else streets += road;
      }
      if (row < ROWS - 1 && random() > 0.12) {
        const road = segment(at(column, row), at(column, row + 1));
        if (column % 5 === 2) avenues += road;
        else streets += road;
      }
    }
  }
  const parks = ([[10, 2], [14, 6], [12, 8]] as Point[]).map(
    ([column, row]) =>
      `M${at(column, row)}L${at(column + 1, row)}L${at(column + 1, row + 1)}L${at(column, row + 1)}Z`,
  );
  return { at, streets, avenues, parks };
}

const { at, streets, avenues, parks } = drawStreets();

const ModeContext = createContext<{
  mode: number;
  setMode: (mode: number) => void;
}>({ mode: 0, setMode: () => {} });

/** Shares the transport mode between the map and its buttons. */
export function RouteDemo({ children }: Readonly<{ children: ReactNode }>) {
  const [mode, setMode] = useState(0);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

function Pin({ point, className }: Readonly<{ point: Point; className: string }>) {
  return (
    <g transform={`translate(${point[0]} ${point[1]})`}>
      <path
        className={className}
        d="M0 0C-5-9-17-16-17-29a17 17 0 0 1 34 0C17-16 5-9 0 0Z"
      />
      <circle className="map-hole" cy={-29} r={6.5} />
    </g>
  );
}

/** here-explore: a map whose route follows the chosen transport mode. */
export function RouteMap() {
  const { mode } = useContext(ModeContext);
  const name = MODES[mode].route;
  const route = ROUTES[name]
    .map(([column, row], i) => `${i ? "L" : "M"}${at(column, row)[0]} ${at(column, row)[1]}`)
    .join("");
  return (
    <div className="project-backdrop bd-map" aria-hidden>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMaxYMid slice"
      >
        <rect className="map-land" width={WIDTH} height={HEIGHT} />
        <path
          className="map-river"
          d="M-20 560C220 500 330 640 560 600S820 690 1040 640 1300 700 1430 650"
        />
        {parks.map((park) => (
          <path key={park} className="map-park" d={park} />
        ))}
        <path className="map-street" d={streets} />
        <path className="map-avenue" d={avenues} />
        {/* The key restarts the drawing when the route changes. */}
        <path
          key={name}
          className={`map-route ${name === "walk" ? "map-route-dashed" : "map-route-solid"}`}
          d={route}
          pathLength={1}
        />
        <Pin point={at(9, 2)} className="map-start" />
        <Pin point={at(15, 7)} className="map-end" />
      </svg>
      <div className="scrim" />
    </div>
  );
}

export function RouteModes() {
  const { mode, setMode } = useContext(ModeContext);
  return (
    <div className="map-modes" role="group" aria-label="Transport mode on the map">
      {MODES.map(({ label }, i) => (
        <button
          key={label}
          type="button"
          aria-pressed={i === mode}
          onClick={() => setMode(i)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
