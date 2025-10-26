import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[75vh] w-full">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
          Minimal • Interactive • Modern
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
          Hello, World.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
          A clean starter showcasing a modern, interactive hero powered by Spline. Click or tap the tiles to ripple a soft red over the grid.
        </p>
        <div id="cta" className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            Explore Features
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
