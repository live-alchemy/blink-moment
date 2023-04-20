"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import charts from "../charts.json";
import Bio from "./Bio";

export default function AstroDice() {
  const [folded, toggleFolded] = useState(false);
  const [chart, setChart] = useState(charts[0]);
  const [seenCharts, setSeenCharts] = useState([1]);
  function updateChart() {
    toggleFolded(false);
    const newChart = charts.find(
      (c) => c?.image !== chart.image && !seenCharts.includes(c.id)
    );
    setChart(newChart || charts[0]);
    setSeenCharts(newChart?.id ? (s) => [...s, newChart?.id] : [1]);
  }

  return (
    <>
      <div className="pt-1 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-2/3 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div>
          {folded ? (
            <Bio {...chart} />
          ) : (
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={chart.image}
              alt="An astrological chart"
              width={300}
              height={48}
              priority
            />
          )}
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 grid-cols-1 lg:grid-cols-2 lg:text-left">
        <button
          onClick={() => updateChart()}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Roll the dice{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              🎲
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Try a new chart
          </p>
        </button>

        <button
          onClick={() => toggleFolded(!folded)}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Final answer?{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              🪄
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Reveal the answer to the current chart
          </p>
        </button>
      </div>
    </>
  );
}
