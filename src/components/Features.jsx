import React from 'react';
import { Rocket, Settings, User } from 'lucide-react';

const features = [
  {
    title: 'Instant Start',
    description: 'Vite + React + Tailwind gives you blazing fast development out of the box.',
    icon: Rocket,
  },
  {
    title: 'Clean & Minimal',
    description: 'A focused layout with clear hierarchy that adapts to any brand.',
    icon: Settings,
  },
  {
    title: 'Human Friendly',
    description: 'Readable typography, accessible colors, and intuitive interactions.',
    icon: User,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Features</h2>
        <p className="mt-3 text-neutral-700">A tiny, elegant starter to say hello to the world — and look good doing it.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">{f.title}</h3>
            <p className="mt-1 text-neutral-700">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
