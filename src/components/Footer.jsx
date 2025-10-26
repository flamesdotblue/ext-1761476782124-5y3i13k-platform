import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/70 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-600 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Hello World Starter. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-neutral-900">Docs</a>
          <a href="#" className="hover:text-neutral-900">GitHub</a>
          <a href="#" className="hover:text-neutral-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
