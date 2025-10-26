import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex items-center gap-2 font-semibold">
          <Rocket className="h-5 w-5 text-red-500" />
          <span>Hello World</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#features" className="hover:text-neutral-900 transition-colors">Features</a>
          <a href="#cta" className="hover:text-neutral-900 transition-colors inline-flex items-center gap-1">
            <Star className="h-4 w-4 text-amber-500" />
            <span>Get Started</span>
          </a>
        </nav>
        <div className="md:hidden">
          <button className="inline-flex items-center rounded-md border border-neutral-200 px-3 py-1.5 text-sm hover:bg-neutral-50">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
