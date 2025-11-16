import React from "react";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full h-16 flex items-center justify-between px-4 bg-gray-100 dark:bg-black">
      <div className="flex items-center gap-1">
        <span className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Creia
        </span>
        <span className="text-red-600 text-3xl font-bold leading-none">.</span>
      </div>

      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
